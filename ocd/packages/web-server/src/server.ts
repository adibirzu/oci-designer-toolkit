/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

/*
** Local, loopback-only web backend that exposes OCD's existing read-only OCI discovery
** (import-from-OCI / Reference Data Query) to the browser build. Browsers cannot read
** ~/.oci/config nor call the OCI SDK directly (CORS); this small Node service reads the
** config server-side and reuses @ocd/query.
**
** Security:
**   - Binds 127.0.0.1 only (never 0.0.0.0). Not intended to be exposed off-host.
**   - Read-only: only list / query operations are exposed. No create/update/apply.
**   - Credential material (key files, fingerprints, passphrases, token files) is never
**     placed in responses.
**   - All errors are returned as structured JSON so the dialog can display them.
**
** This server uses only the Node standard library (http) so the package adds no new
** runtime dependencies beyond the existing @ocd/query + oci-sdk workspace deps.
*/

import http from 'http'
import {
    errorMessage,
    listRegions,
    listTenancyCompartments,
    loadProfile,
    loadProfileNames,
    queryDropdown,
    queryTenancy
} from './handlers.js'

const HOST = '127.0.0.1'
const DEFAULT_PORT = 5050
const MAX_BODY_BYTES = 1_048_576 // 1 MiB cap on request bodies (compartment id lists are small)

// CORS is restricted to the local dev renderer origins ONLY. A wildcard would let
// ANY website the user visits read their tenancy topology cross-origin while this
// server runs. Requests with no Origin (curl, the vite proxy) get no CORS header
// and are served normally; cross-origin requests from non-allowlisted sites get
// no Access-Control-Allow-Origin and are blocked by the browser.
const ALLOWED_ORIGINS = new Set<string>([
    'http://localhost:5173',
    'http://127.0.0.1:5173'
])
const allowOriginByRes = new WeakMap<http.ServerResponse, string>()
const resolveAllowedOrigin = (origin: string | undefined): string =>
    origin && ALLOWED_ORIGINS.has(origin) ? origin : ''
// DNS-rebinding defense: only serve requests whose Host header is loopback.
const isLoopbackHost = (host: string | undefined): boolean => {
    const name = (host ?? '').split(':')[0]
    return name === '' || name === '127.0.0.1' || name === 'localhost'
}

interface ApiSuccess<T> {
    success: true
    data: T
}

interface ApiError {
    success: false
    error: string
}

type ApiResponse<T> = ApiSuccess<T> | ApiError

const port = (): number => {
    const raw = process.env.OCD_WEB_SERVER_PORT
    const parsed = raw ? Number.parseInt(raw, 10) : NaN
    return Number.isInteger(parsed) && parsed > 0 && parsed < 65536 ? parsed : DEFAULT_PORT
}

const sendJson = <T>(res: http.ServerResponse, status: number, payload: ApiResponse<T>): void => {
    const body = JSON.stringify(payload)
    const allowOrigin = allowOriginByRes.get(res) ?? ''
    res.writeHead(status, {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(body),
        // Only emit CORS headers for an allowlisted dev origin; omit otherwise.
        ...(allowOrigin
            ? {
                  'Access-Control-Allow-Origin': allowOrigin,
                  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                  'Access-Control-Allow-Headers': 'Content-Type',
                  Vary: 'Origin'
              }
            : {})
    })
    res.end(body)
}

const sendOk = <T>(res: http.ServerResponse, data: T): void => sendJson(res, 200, { success: true, data })

const sendError = (res: http.ServerResponse, status: number, error: string): void =>
    sendJson(res, status, { success: false, error })

const readBody = (req: http.IncomingMessage): Promise<string> => {
    return new Promise((resolve, reject) => {
        let size = 0
        const chunks: Buffer[] = []
        req.on('data', (chunk: Buffer) => {
            size += chunk.length
            if (size > MAX_BODY_BYTES) {
                reject(new Error('Request body too large'))
                req.destroy()
                return
            }
            chunks.push(chunk)
        })
        req.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')))
        req.on('error', (reason) => reject(reason))
    })
}

const parseJsonBody = async <T>(req: http.IncomingMessage): Promise<T> => {
    const raw = await readBody(req)
    if (!raw) return {} as T
    try {
        return JSON.parse(raw) as T
    } catch {
        throw new Error('Request body is not valid JSON')
    }
}

const queryParam = (url: URL, name: string, fallback: string): string => {
    const value = url.searchParams.get(name)
    return value !== null && value.length > 0 ? value : fallback
}

const handleRequest = async (req: http.IncomingMessage, res: http.ServerResponse): Promise<void> => {
    const method = req.method ?? 'GET'
    const url = new URL(req.url ?? '/', `http://${HOST}`)
    const pathname = url.pathname

    // Reject non-loopback Host headers (DNS-rebinding defense).
    if (!isLoopbackHost(req.headers.host)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' })
        res.end('Forbidden')
        return
    }

    const allowOrigin = resolveAllowedOrigin(req.headers.origin)
    allowOriginByRes.set(res, allowOrigin)

    if (method === 'OPTIONS') {
        res.writeHead(204, allowOrigin
            ? {
                  'Access-Control-Allow-Origin': allowOrigin,
                  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                  'Access-Control-Allow-Headers': 'Content-Type',
                  Vary: 'Origin'
              }
            : { Vary: 'Origin' })
        res.end()
        return
    }

    // Liveness probe (handy for the dev workflow / proxy health checks).
    if (method === 'GET' && pathname === '/api/oci/health') {
        sendOk(res, { status: 'ok' })
        return
    }

    try {
        if (method === 'GET' && pathname === '/api/oci/profiles') {
            sendOk(res, loadProfileNames())
            return
        }
        if (method === 'GET' && pathname === '/api/oci/profile') {
            const profile = queryParam(url, 'profile', 'DEFAULT')
            sendOk(res, loadProfile(profile))
            return
        }
        if (method === 'GET' && pathname === '/api/oci/regions') {
            const profile = queryParam(url, 'profile', 'DEFAULT')
            sendOk(res, await listRegions(profile))
            return
        }
        if (method === 'GET' && pathname === '/api/oci/compartments') {
            const profile = queryParam(url, 'profile', 'DEFAULT')
            sendOk(res, await listTenancyCompartments(profile))
            return
        }
        if (method === 'POST' && pathname === '/api/oci/query') {
            const body = await parseJsonBody<{ profile?: string; region?: string; compartmentIds?: string[] }>(req)
            const result = await queryTenancy({
                profile: body.profile ?? 'DEFAULT',
                region: body.region ?? '',
                compartmentIds: Array.isArray(body.compartmentIds) ? body.compartmentIds : []
            })
            sendOk(res, result)
            return
        }
        if (method === 'POST' && pathname === '/api/oci/dropdown') {
            const body = await parseJsonBody<{ profile?: string; region?: string }>(req)
            const result = await queryDropdown({
                profile: body.profile ?? 'DEFAULT',
                region: body.region ?? ''
            })
            sendOk(res, result)
            return
        }
        sendError(res, 404, `Unknown endpoint: ${method} ${pathname}`)
    } catch (reason: unknown) {
        // Every failure path returns a structured JSON error so the browser dialog can show it.
        sendError(res, 400, errorMessage(reason))
    }
}

const server = http.createServer((req, res) => {
    handleRequest(req, res).catch((reason: unknown) => {
        sendError(res, 500, errorMessage(reason))
    })
})

server.listen(port(), HOST, () => {
    // Intentionally logs only the bind address/port, never any config or credential values.
    console.info(`OCD web backend listening on http://${HOST}:${port()} (read-only OCI discovery)`)
})

export { server }

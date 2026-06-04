/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** OCI Landing Zone update check.
**
** Compares the refs this fork pins (OCI_LZ_SOURCES) against the latest commit
** (kind 'commit') or latest release (kind 'release') published on GitHub, and
** reports per-source whether an update is available.
**
** Network policy:
**   - UNAUTHENTICATED public GitHub REST API (works in the browser via CORS and
**     in the Electron renderer). No tokens, ever.
**   - 8s AbortController timeout per request.
**   - NEVER throws: any failure (network, rate-limit 403, parse) is captured as a
**     per-source { error } so the UI degrades to "check unavailable".
**   - Results are cached in-memory + localStorage (key 'ocd.lz.updateCheck') with
**     a timestamp; the cache is reused for ~6h to stay well under the 60 req/hr
**     unauthenticated limit. Pass { force: true } to bypass the cache.
*/

import { LzSource, OCI_LZ_SOURCES } from './OcdLzSources'

export interface LzUpdateStatus {
    key: string
    label: string
    repo: string
    kind: LzSource['kind']
    /** Pinned ref this fork uses ('' when unpinned). */
    current: string
    /** Latest ref from GitHub ('' when unknown / errored). */
    latest: string
    /** Short display form of `latest` (first 12 chars for commits, tag verbatim for releases). */
    latestShort: string
    /** True only when pinned AND the latest ref differs from the pin. */
    updateAvailable: boolean
    /** html_url of the latest commit/release (or repo URL on failure). */
    url: string
    /** ISO date of the latest commit/release ('' when unknown). */
    date: string
    /** Set when the source could not be checked (network / rate-limit / parse). */
    error?: string
}

export interface CheckOptions {
    force?: boolean
}

interface CacheEnvelope {
    timestamp: number
    statuses: LzUpdateStatus[]
}

const CACHE_KEY = 'ocd.lz.updateCheck'
const CACHE_TTL_MS = 6 * 60 * 60 * 1000 // ~6 hours
const REQUEST_TIMEOUT_MS = 8000
const SHORT_LEN = 12
const GITHUB_ACCEPT = 'application/vnd.github+json'

let memoryCache: CacheEnvelope | null = null

function repoUrl(repo: string): string {
    return `https://github.com/${repo}`
}

function shortSha(sha: string): string {
    return sha ? sha.slice(0, SHORT_LEN) : ''
}

function readLocalStorageCache(): CacheEnvelope | null {
    try {
        if (typeof localStorage === 'undefined') return null
        const raw = localStorage.getItem(CACHE_KEY)
        if (!raw) return null
        const parsed = JSON.parse(raw) as CacheEnvelope
        if (!parsed || typeof parsed.timestamp !== 'number' || !Array.isArray(parsed.statuses)) return null
        return parsed
    } catch {
        return null
    }
}

function writeCache(envelope: CacheEnvelope): void {
    memoryCache = envelope
    try {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(CACHE_KEY, JSON.stringify(envelope))
        }
    } catch {
        // localStorage may be full or unavailable; in-memory cache still applies.
    }
}

function isFresh(envelope: CacheEnvelope | null): envelope is CacheEnvelope {
    return !!envelope && Date.now() - envelope.timestamp < CACHE_TTL_MS
}

async function fetchJson(url: string): Promise<unknown> {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { Accept: GITHUB_ACCEPT },
            signal: controller.signal,
        })
        if (response.status === 403 || response.status === 429) {
            throw new Error('GitHub API rate limit reached — check unavailable.')
        }
        if (!response.ok) {
            throw new Error(`GitHub API responded ${response.status}.`)
        }
        return (await response.json()) as unknown
    } finally {
        clearTimeout(timer)
    }
}

function errorStatus(source: LzSource, message: string): LzUpdateStatus {
    return {
        key: source.key,
        label: source.label,
        repo: source.repo,
        kind: source.kind,
        current: source.pinnedRef,
        latest: '',
        latestShort: '',
        updateAvailable: false,
        url: repoUrl(source.repo),
        date: '',
        error: message,
    }
}

async function checkRelease(source: LzSource): Promise<LzUpdateStatus> {
    const data = (await fetchJson(
        `https://api.github.com/repos/${source.repo}/releases/latest`,
    )) as { tag_name?: string; html_url?: string; published_at?: string }
    const latest = typeof data.tag_name === 'string' ? data.tag_name : ''
    const pinned = source.pinnedRef
    return {
        key: source.key,
        label: source.label,
        repo: source.repo,
        kind: source.kind,
        current: pinned,
        latest,
        latestShort: latest,
        // Unpinned releases are informational only.
        updateAvailable: pinned !== '' && latest !== '' && latest !== pinned,
        url: typeof data.html_url === 'string' && data.html_url ? data.html_url : repoUrl(source.repo),
        date: typeof data.published_at === 'string' ? data.published_at : '',
    }
}

async function checkCommit(source: LzSource): Promise<LzUpdateStatus> {
    const data = (await fetchJson(
        `https://api.github.com/repos/${source.repo}/commits?per_page=1`,
    )) as Array<{ sha?: string; html_url?: string; commit?: { author?: { date?: string } } }>
    const head = Array.isArray(data) && data.length > 0 ? data[0] : undefined
    const latest = head && typeof head.sha === 'string' ? head.sha : ''
    const pinned = source.pinnedRef
    // Compare on the first 12 chars to tolerate full-vs-short SHA mismatches.
    const mismatch = pinned !== '' && latest !== '' && shortSha(latest) !== shortSha(pinned)
    return {
        key: source.key,
        label: source.label,
        repo: source.repo,
        kind: source.kind,
        current: pinned,
        latest,
        latestShort: shortSha(latest),
        updateAvailable: mismatch,
        url: head && typeof head.html_url === 'string' && head.html_url ? head.html_url : repoUrl(source.repo),
        date: head?.commit?.author?.date ?? '',
    }
}

async function checkOne(source: LzSource): Promise<LzUpdateStatus> {
    try {
        return source.kind === 'release' ? await checkRelease(source) : await checkCommit(source)
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Update check unavailable.'
        // No tokens/PII are ever included; surface a generic, safe message.
        console.warn(`[lz-update] Could not check ${source.repo}: ${message}`)
        return errorStatus(source, message)
    }
}

/**
 * Check every (or the supplied) tracked Landing Zone source for updates. Never
 * throws — failures are captured per-source. Uses a ~6h cache unless force=true.
 */
export async function checkLzUpdates(
    sources: LzSource[] = OCI_LZ_SOURCES,
    options: CheckOptions = {},
): Promise<LzUpdateStatus[]> {
    if (!options.force) {
        const cached = memoryCache ?? readLocalStorageCache()
        if (isFresh(cached)) {
            memoryCache = cached
            return cached.statuses
        }
    }
    const statuses = await Promise.all(sources.map(checkOne))
    writeCache({ timestamp: Date.now(), statuses })
    return statuses
}

/** Timestamp (ms) of the most recent cached check, or null if none. */
export function getLastCheckedAt(): number | null {
    const cached = memoryCache ?? readLocalStorageCache()
    return cached ? cached.timestamp : null
}

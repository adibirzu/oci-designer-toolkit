/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** TypeScript port of the LZNG `jsonnetWasm.js` service.
**
** Loads the go-jsonnet WASM runtime and exposes a typed `evaluateJsonnet`.
** Differences from LZNG:
**   - wasm_exec.js is imported as a side-effect module (./wasm/wasmExec) that
**     self-installs `globalThis.Go`; no <script> injection.
**   - The .wasm asset URL is resolved from the bundled asset first
**     (new URL(..., import.meta.url)); if that fetch fails (e.g. the lib
**     re-bundle dropped the asset under Electron file://), we fall back to the
**     deterministic `public/` copy shipped by the desktop prebuild step.
**   - instantiateStreaming -> arrayBuffer() fallback is preserved for asar
**     file:// MIME mismatches.
*/

import './wasm/wasmExec'

// go-jsonnet's 7-arg evaluator, installed on the global scope by the WASM module.
export type JsonnetEvaluate = (
    filename: string,
    code: string,
    files: Record<string, string>,
    extStrs: Record<string, string>,
    extCodes: Record<string, string>,
    tlaStrs: Record<string, string>,
    tlaCodes: Record<string, string>,
) => Promise<string>

export interface EvaluateJsonnetArgs {
    filename: string
    code: string
    files: Record<string, string>
    tlaCodes?: Record<string, string>
}

// `Go` is installed on globalThis by ./wasm/wasmExec (loosely typed Go runtime).
interface GoRuntime {
    importObject: WebAssembly.Imports
    run(instance: WebAssembly.Instance): void
}
interface JsonnetGlobals {
    Go?: new () => GoRuntime
    jsonnet_evaluate_snippet?: JsonnetEvaluate
}

const globalScope = globalThis as unknown as JsonnetGlobals

const WASM_FILENAME = 'libjsonnet.wasm'

// The .wasm ships as a deterministic copy under the renderer's public root
// (placed there by the desktop `prebuild` step; served at the web dev root too).
// We deliberately do NOT bundle it via `new URL(..., import.meta.url)` because the
// @ocd/react library build inlines that into a ~10 MB base64 data-URI inside the
// JS chunk. Resolving the public copy against the document base keeps the asset a
// real file that Electron asar.unpack can expose under file://.
//
// Candidates cover: web dev server root, packaged file:// index.html (relative),
// and an absolute root fallback.
function wasmCandidateUrls(): string[] {
    const candidates: string[] = []
    try {
        if (typeof document !== 'undefined' && document.baseURI) {
            candidates.push(new URL(WASM_FILENAME, document.baseURI).href)
        }
    } catch {
        /* ignore malformed base */
    }
    candidates.push(`./${WASM_FILENAME}`)
    candidates.push(`/${WASM_FILENAME}`)
    // De-duplicate while preserving order.
    return Array.from(new Set(candidates))
}

let runtimePromise: Promise<JsonnetEvaluate> | null = null

async function fetchWasmResponse(): Promise<Response> {
    const candidates = wasmCandidateUrls()
    let lastError: unknown = null
    for (const url of candidates) {
        try {
            const response = await fetch(url)
            if (response.ok) return response
            lastError = new Error(`Failed to load go-jsonnet WASM from ${url}: ${response.status}`)
        } catch (error: unknown) {
            lastError = error
        }
    }
    throw lastError instanceof Error
        ? lastError
        : new Error('Failed to load go-jsonnet WASM from any known location.')
}

async function instantiateWasm(go: GoRuntime): Promise<WebAssembly.WebAssemblyInstantiatedSource> {
    const response = await fetchWasmResponse()
    const wasmUrl = response.url || `./${WASM_FILENAME}`

    if (WebAssembly.instantiateStreaming) {
        try {
            return await WebAssembly.instantiateStreaming(response, go.importObject)
        } catch {
            // asar file:// responses can carry a non-wasm MIME; fall back to bytes.
            const fallback = await fetch(wasmUrl)
            const bytes = await fallback.arrayBuffer()
            return WebAssembly.instantiate(bytes, go.importObject)
        }
    }

    const bytes = await response.arrayBuffer()
    return WebAssembly.instantiate(bytes, go.importObject)
}

export async function ensureJsonnetWasm(): Promise<JsonnetEvaluate> {
    if (!runtimePromise) {
        const promise = (async (): Promise<JsonnetEvaluate> => {
            if (!globalScope.Go) {
                throw new Error('Go WASM runtime did not initialize (globalThis.Go missing).')
            }

            const go = new globalScope.Go()
            const result = await instantiateWasm(go)
            go.run(result.instance)

            if (!globalScope.jsonnet_evaluate_snippet) {
                // The Go main() registers the snippet evaluator on its goroutine;
                // yield once so the registration lands before we read it.
                await new Promise((resolve) => setTimeout(resolve, 0))
            }
            if (!globalScope.jsonnet_evaluate_snippet) {
                throw new Error('go-jsonnet WASM did not expose jsonnet_evaluate_snippet.')
            }
            return globalScope.jsonnet_evaluate_snippet
        })()
        runtimePromise = promise.catch((error: unknown) => {
            runtimePromise = null
            throw error
        })
    }
    return runtimePromise
}

export async function evaluateJsonnet({ filename, code, files, tlaCodes = {} }: EvaluateJsonnetArgs): Promise<string> {
    const evaluate = await ensureJsonnetWasm()
    return evaluate(filename, code, files, {}, {}, {}, tlaCodes)
}

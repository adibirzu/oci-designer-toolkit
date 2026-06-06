/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/**
 * Import pre-generated OCI Landing Zone Next Gen (LZNG) output files
 * (iam.json, network.json, …) and rebuild them into an editable OCD design.
 *
 * This is the UPLOAD counterpart to the wizard's "Open in Designer" handoff:
 * both funnel through {@link buildOcdDesignFromLz}. Here the files come from a
 * user file-picker rather than the in-browser jsonnet-WASM generator, so there
 * is no wizard `LandingZoneConfig` — the scaffold / observability / OKE overlays
 * are therefore not applied. The resulting design is still flagged
 * `lzOrigin = true`, so dropping further (non-LZ) stencils onto it routes them
 * through the LZ placement resolver exactly like a wizard-generated design.
 *
 * The functions here are intentionally pure (no DOM, no file-picker) so they can
 * be unit-tested; the file-picker wiring lives in the Designer menu.
 */

import { GeneratedFile } from './OcdLzGenerator'
import { buildOcdDesignFromLz, OcdLzToModelResult } from './OcdLzToModel'

/** A raw uploaded file: a name (possibly a full path) and its text content. */
export interface LzUploadFile {
    name: string
    content: string
}

/**
 * OE/LZNG output file names the bridge can currently turn into model resources.
 * (Other generated files such as governance.json are accepted in the upload but
 * are not yet mapped — they are ignored, not rejected.)
 */
export const RECOGNISED_LZ_FILES = ['iam.json', 'network.json'] as const

/** Strip any directory prefix from an uploaded file path (handles / and \). */
export function lzFileBaseName(path: string): string {
    const parts = path.split(/[\\/]/)
    return parts[parts.length - 1] || path
}

/**
 * Convert raw uploaded files into the `GeneratedFile[]` shape the LZ→model
 * bridge expects. Non-JSON uploads are dropped; names are reduced to their
 * base name so `foo/bar/iam.json` matches the bridge's `iam.json` lookup.
 */
export function toGeneratedFiles(uploads: ReadonlyArray<LzUploadFile>): GeneratedFile[] {
    return uploads
        .map((u) => ({ name: lzFileBaseName(u.name), content: u.content }))
        .filter((u) => u.name.toLowerCase().endsWith('.json'))
        .map((u) => ({ name: u.name, content: u.content, size: u.content.length }))
}

/** True if the uploaded set contains at least one file the bridge can map. */
export function hasRecognisedLzFiles(files: ReadonlyArray<GeneratedFile>): boolean {
    const recognised = RECOGNISED_LZ_FILES as readonly string[]
    return files.some((f) => recognised.includes(f.name.toLowerCase()))
}

/**
 * Build an OCD design from uploaded LZNG files.
 *
 * @throws Error when no recognised Landing Zone file (iam.json / network.json)
 *         is present, so the caller can surface an actionable message.
 */
export function buildDesignFromLzUpload(
    uploads: ReadonlyArray<LzUploadFile>,
    title = 'Imported Landing Zone',
): OcdLzToModelResult {
    const files = toGeneratedFiles(uploads)
    if (!hasRecognisedLzFiles(files)) {
        throw new Error(
            'No recognised Landing Zone files found. Select the generated LZ output (at least iam.json or network.json).',
        )
    }
    return buildOcdDesignFromLz(files, title)
}

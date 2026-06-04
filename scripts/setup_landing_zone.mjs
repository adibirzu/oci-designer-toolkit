/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

/*
** Landing Zone Wizard setup.
**
** Fetches the PUBLIC OCI Operating Entities (OE) jsonnet sources from upstream
** at a pinned commit, vendors them into the (git-ignored) local tree, and
** regenerates the OE string map consumed by the wizard.
**
** These sources embed public OCI reference OCIDs (CIS security-zone recipe
** policies, the usage-report tenancy), so they are intentionally NOT committed
** to this repository. Every user fetches them locally with:
**
**   npm run setup-lz
**
** The regenerated OcdLandingZoneJsonnetSources.ts is marked skip-worktree so the
** populated (OCID-bearing) copy is never accidentally staged/committed.
*/

import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, rmSync, cpSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(scriptDir, '..')
const UPSTREAM_URL = 'https://github.com/oci-landing-zones/oci-landing-zone-operating-entities.git'
const UPSTREAM_SHA = '917f56214282b2d301d95dbce799e79fb0cd94d0'
const lzRoot = path.join(repoRoot, 'ocd', 'packages', 'react', 'src', 'landingzone', 'oe')
const genDir = path.join(lzRoot, 'gen')
const sourcesFile = path.join(lzRoot, 'OcdLandingZoneJsonnetSources.ts')

function run(cmd, args, opts = {}) {
    return execFileSync(cmd, args, { stdio: 'inherit', ...opts })
}

function main() {
    console.log(`[setup-lz] Fetching OCI Operating Entities @ ${UPSTREAM_SHA}`)
    const tmp = mkdtempSync(path.join(tmpdir(), 'oci-oe-'))
    try {
        // Clone then checkout the pinned commit (robust across server fetch policies).
        run('git', ['clone', '--quiet', UPSTREAM_URL, tmp])
        run('git', ['-C', tmp, 'checkout', '--quiet', UPSTREAM_SHA])

        const upstreamGen = path.join(tmp, 'gen')
        if (!existsSync(upstreamGen)) {
            throw new Error(`Upstream checkout has no gen/ directory at ${upstreamGen}`)
        }

        // Replace the (git-ignored) vendored sources with the pinned upstream gen/.
        rmSync(genDir, { recursive: true, force: true })
        cpSync(upstreamGen, genDir, { recursive: true })
        console.log(`[setup-lz] Vendored OE sources into ${path.relative(repoRoot, genDir)}/ (git-ignored)`)

        // Regenerate the string map consumed by the wizard.
        run('node', [path.join(scriptDir, 'generate_lz_jsonnet_sources.mjs')])

        // Protect the populated (OCID-bearing) generated file from accidental commits.
        try {
            run('git', ['-C', repoRoot, 'update-index', '--skip-worktree', path.relative(repoRoot, sourcesFile)],
                { stdio: 'ignore' })
            console.log('[setup-lz] Marked OcdLandingZoneJsonnetSources.ts skip-worktree (local changes will not be staged).')
        } catch {
            console.warn('[setup-lz] Could not set skip-worktree (file may be untracked). Do NOT commit the populated OcdLandingZoneJsonnetSources.ts.')
        }

        console.log('[setup-lz] Done. The Landing Zone Wizard is ready to use locally.')
    } finally {
        rmSync(tmp, { recursive: true, force: true })
    }
}

main()

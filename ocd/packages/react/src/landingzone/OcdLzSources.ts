/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** Single source of truth for the official OCI Landing Zone upstream repositories
** that this fork tracks. The in-app "OCI Landing Zone updates" check
** (OcdLzUpdateCheck) reads this list and compares each pinnedRef against the
** latest commit/release on GitHub.
**
** IMPORTANT: the 'operating-entities' pinnedRef below MUST stay in sync with
** UPSTREAM_SHA in scripts/setup_landing_zone.mjs. Both pin the exact commit of
** the vendored OE jsonnet sources. When you re-vendor with `npm run setup-lz:latest`,
** update BOTH values to the new SHA the script prints.
*/

export type LzSourceKind = 'commit' | 'release'

export interface LzSource {
    /** Stable identifier used as a key/localStorage discriminator. */
    key: string
    /** Human-friendly label shown in the UI. */
    label: string
    /** GitHub "owner/name" slug. */
    repo: string
    /** 'commit' tracks the default-branch HEAD; 'release' tracks the latest GitHub release tag. */
    kind: LzSourceKind
    /** Pinned commit SHA (kind 'commit') or release tag (kind 'release'). '' = not yet pinned (informational). */
    pinnedRef: string
    /** Optional sub-path used to scope a compare URL (reserved; not required by the check). */
    comparePath?: string
}

export const OCI_LZ_SOURCES: LzSource[] = [
    {
        key: 'operating-entities',
        label: 'OCI Operating Entities',
        repo: 'oci-landing-zones/oci-landing-zone-operating-entities',
        kind: 'commit',
        // MUST equal UPSTREAM_SHA in scripts/setup_landing_zone.mjs.
        pinnedRef: '917f56214282b2d301d95dbce799e79fb0cd94d0',
    },
    {
        key: 'core-landingzone',
        label: 'OCI Core Landing Zone (CIS)',
        repo: 'oci-landing-zones/terraform-oci-core-landingzone',
        kind: 'release',
        // pinnedRef '' = not yet pinned (not vendored). Latest release shown as informational.
        pinnedRef: '',
    },
]

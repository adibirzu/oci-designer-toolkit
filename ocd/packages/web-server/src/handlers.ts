/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

/*
** Read-only OCI discovery handlers for the local web backend.
**
** These mirror the Electron main-process IPC handlers (see
** packages/desktop/src/main.ts: ociConfig:* / ociQuery:*) so the browser build can
** perform import-from-OCI / Reference Data Query when this localhost service is running.
** All credential reading and OCI SDK calls happen server-side; profile secrets are never
** placed in the HTTP responses.
*/

import { common } from "oci-sdk"
import { OciQuery, OciReferenceDataQuery } from "@ocd/query"

export interface ProfilesResult {
    profiles: string[]
}

export interface QueryTenancyRequest {
    profile: string
    region: string
    compartmentIds: string[]
}

export interface QueryDropdownRequest {
    profile: string
    region: string
}

/*
** Field names that, if present on a parsed OCI config profile, would expose credential
** material or local filesystem layout. These are stripped before a profile is returned.
*/
const SENSITIVE_PROFILE_KEYS: ReadonlyArray<string> = [
    'key_file',
    'security_token_file',
    'pass_phrase',
    'passphrase',
    'fingerprint',
    'cert-bundle'
]

/*
** Read the profile names defined in ~/.oci/config. Never returns credential values.
** Throws a descriptive error when no config / no profiles are found so the caller can
** surface a clear JSON error to the browser instead of a stack trace.
*/
export const loadProfileNames = (): ProfilesResult => {
    let parsed
    try {
        parsed = common.ConfigFileReader.parseDefault(null)
    } catch (reason: unknown) {
        throw new Error(`Unable to read OCI config (~/.oci/config): ${errorMessage(reason)}`)
    }
    const profiles = Array.from(parsed.accumulator.configurationsByProfile.keys())
    if (profiles.length === 0) throw new Error('No OCI profiles found in ~/.oci/config')
    return { profiles }
}

/*
** Return the non-sensitive key/value pairs for a single profile. Credential-bearing
** keys (key file paths, fingerprints, passphrases, token files) are removed.
*/
export const loadProfile = (profile: string): Record<string, string> => {
    let parsed
    try {
        parsed = common.ConfigFileReader.parseDefault(null)
    } catch (reason: unknown) {
        throw new Error(`Unable to read OCI config (~/.oci/config): ${errorMessage(reason)}`)
    }
    const profileData = parsed.accumulator.configurationsByProfile.get(profile)
    if (profileData === undefined) throw new Error(`OCI profile '${profile}' not found in ~/.oci/config`)
    const sanitised: Record<string, string> = {}
    for (const [key, value] of profileData.entries()) {
        if (!SENSITIVE_PROFILE_KEYS.includes(key)) sanitised[key] = value
    }
    return sanitised
}

/*
** List the regions the tenancy (for the given profile) is subscribed to. Bound with the
** shared withTimeout so an unreachable endpoint rejects instead of hanging.
*/
export const listRegions = (profile: string): Promise<unknown> => {
    const query = new OciQuery(profile)
    return query.withTimeout(query.listRegions(), 'listRegions')
}

/*
** List every compartment (and the tenancy root) for the given profile.
*/
export const listTenancyCompartments = (profile: string): Promise<unknown> => {
    const query = new OciQuery(profile)
    return query.withTimeout(query.listTenancyCompartments(), 'listTenancyCompartments')
}

/*
** Discover resources across the supplied compartments for the given profile / region.
*/
export const queryTenancy = (request: QueryTenancyRequest): Promise<unknown> => {
    const { profile, region, compartmentIds } = request
    const query = new OciQuery(profile, region)
    return query.withTimeout(query.queryTenancy(compartmentIds), 'queryTenancy')
}

/*
** Reference / dropdown data (shapes, images, versions, etc.) for the given profile / region.
*/
export const queryDropdown = (request: QueryDropdownRequest): Promise<unknown> => {
    const { profile, region } = request
    const query = new OciReferenceDataQuery(profile, region)
    return query.withTimeout(query.query(), 'queryDropdown')
}

export const errorMessage = (reason: unknown): string => {
    if (reason instanceof Error) return reason.message
    if (typeof reason === 'string') return reason
    return 'Unexpected error'
}

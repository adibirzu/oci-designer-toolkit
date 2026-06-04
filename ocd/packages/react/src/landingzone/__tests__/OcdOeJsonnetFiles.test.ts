/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

import { describe, expect, it } from 'vitest'
import { getOperatingEntitiesJsonnetFiles } from '../OcdOeJsonnetFiles'
import { OE_JSONNET_SOURCE_COUNT } from '../oe/OcdLandingZoneJsonnetSources'

describe('OcdOeJsonnetFiles', () => {
    it('loads required Operating Entities generator files', () => {
        const files = getOperatingEntitiesJsonnetFiles()

        expect(files['/gen/landing_zone_multi.jsonnet']).toContain('function(config)')
        expect(files['/gen/landing_zone.libsonnet']).toContain('function(raw_config)')
        expect(files['/gen/config.libsonnet']).toContain('normalize(config)')
        expect(files['landing_zone_multi.jsonnet']).toContain('function(config)')
        expect(files['landing_zone.libsonnet']).toContain('function(raw_config)')
        expect(files['config.libsonnet']).toContain('normalize(config)')
        expect(files['/gen/lib/collections.libsonnet']).toContain('all(values)')
        expect(files['lib/collections.libsonnet']).toContain('all(values)')
    })

    it('overlays oc19 realm constants for sovereign generation', () => {
        const files = getOperatingEntitiesJsonnetFiles()

        expect(files['/gen/constants.libsonnet']).toContain('oc19:')
        expect(files['/gen/constants.libsonnet']).toContain("std.strReplace(ocid, '.oc1..', '.oc19..')")
    })

    it('bundles 146 logical sources under both /gen and gen-relative keys', () => {
        const files = getOperatingEntitiesJsonnetFiles()
        expect(OE_JSONNET_SOURCE_COUNT).toBe(146)
        // Each logical source is registered under two keys.
        expect(Object.keys(files).length).toBe(OE_JSONNET_SOURCE_COUNT * 2)
    })
})

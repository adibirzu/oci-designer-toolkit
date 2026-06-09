import { describe, expect, it } from 'vitest'
import { discoverySampleSnapshot } from '../OcdDiscoverySampleData'
import { recommendDiscoveryLandingZone } from '../OcdDiscoveryLzRecommendations'
import { mapDiscoveryServicesToOciTargets } from '../OcdDiscoveryMappers'

describe('mapDiscoveryServicesToOciTargets', () => {
    it('maps runtimes to OCI target services and migration dispositions', () => {
        const targets = mapDiscoveryServicesToOciTargets(discoverySampleSnapshot)

        expect(targets.find((target) => target.serviceId === 'svc-shop-api-1')).toMatchObject({
            targetResourceType: 'oci_containerengine_cluster',
            targetService: 'OKE',
            disposition: 'replatform'
        })
        expect(targets.find((target) => target.serviceId === 'svc-shop-db')).toMatchObject({
            targetResourceType: 'oci_database_autonomous_database',
            targetService: 'Autonomous Database',
            disposition: 'replatform'
        })
        expect(targets.find((target) => target.serviceId === 'svc-reporting-kafka')).toMatchObject({
            targetResourceType: 'oci_streaming_stream',
            targetService: 'Streaming',
            disposition: 'refactor'
        })
        expect(targets.find((target) => target.serviceId === 'svc-reporting-redis')).toMatchObject({
            targetResourceType: 'oci_redis_redis_cluster',
            targetService: 'OCI Cache with Redis',
            disposition: 'replatform'
        })
    })
})

describe('recommendDiscoveryLandingZone', () => {
    it('derives landing zone compartments, overlays, and waves from discovery data', () => {
        const recommendations = recommendDiscoveryLandingZone(discoverySampleSnapshot)

        expect(recommendations.compartments).toEqual(['prod-commerce', 'prod-finance', 'stage-analytics'])
        expect(recommendations.overlays).toEqual(['observability', 'oke', 'iam-blueprint'])
        expect(recommendations.migrationWaves.map((wave) => wave.name)).toEqual([
            'Wave 1 - Low Risk',
            'Wave 2 - Production Replatform',
            'Wave 3 - Legacy Critical'
        ])
    })
})

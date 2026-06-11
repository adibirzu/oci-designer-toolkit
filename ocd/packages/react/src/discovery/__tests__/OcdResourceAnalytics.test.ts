import { describe, expect, it } from 'vitest'
import { validateResourceAnalyticsSql } from '@ocd/core'
import { ResourceAnalyticsRow, normalizeResourceAnalyticsRows } from '../OcdResourceAnalytics'

const buildResourceAnalyticsRow = (overrides: Partial<ResourceAnalyticsRow> = {}): ResourceAnalyticsRow => ({
    resource_id: 'resource.compute.shop-web-1',
    resource_name: 'shop-web-1',
    resource_type: 'Instance',
    compartment_path: 'prod/applications/shop',
    region_name: 'eu-frankfurt-1',
    lifecycle_state: 'RUNNING',
    shape: 'VM.Standard.E5.Flex',
    cpu_core_count: 4,
    memory_gb: 16,
    storage_gb: 120,
    avg_cpu_percent: 42,
    p95_cpu_percent: 71,
    avg_memory_percent: 58,
    p95_memory_percent: 75,
    avg_network_mbps: 120,
    p95_network_mbps: 220,
    avg_iops: 500,
    p95_iops: 900,
    monthly_cost_usd: 420,
    application_name: 'Retail Shop',
    environment_name: 'prod',
    owner_name: 'Commerce',
    ...overrides
})

describe('normalizeResourceAnalyticsRows', () => {
    it('converts Resource Analytics rows into discovery assets and metric samples', () => {
        const snapshot = normalizeResourceAnalyticsRows([
            buildResourceAnalyticsRow()
        ])

        expect(snapshot.source).toBe('resource-analytics')
        expect(snapshot.applications[0]).toMatchObject({ name: 'Retail Shop', environment: 'prod', owner: 'Commerce' })
        expect(snapshot.assets[0]).toMatchObject({ hostName: 'shop-web-1', cpuCores: 4, memoryGb: 16, storageGb: 120 })
        expect(snapshot.metrics[0]).toMatchObject({ assetId: 'resource.compute.shop-web-1', monthlyCostUsd: 420 })
    })

    it('uses application name, environment, and owner for application identity', () => {
        const snapshot = normalizeResourceAnalyticsRows([
            buildResourceAnalyticsRow({
                resource_id: 'resource.compute.shop-web-1',
                resource_name: 'shop-web-1',
                application_name: 'Retail Shop',
                environment_name: 'prod',
                owner_name: 'Commerce'
            }),
            buildResourceAnalyticsRow({
                resource_id: 'resource.compute.shop-web-2',
                resource_name: 'shop-web-2',
                application_name: 'Retail Shop',
                environment_name: 'stage',
                owner_name: 'Experience'
            })
        ])

        expect(snapshot.applications.map((application) => application.id)).toEqual([
            'ra-app-4-prod-8-commerce-11-retail-shop',
            'ra-app-5-stage-10-experience-11-retail-shop'
        ])
        expect(snapshot.assets.find((asset) => asset.id === 'resource.compute.shop-web-1')?.applicationId).toBe(
            'ra-app-4-prod-8-commerce-11-retail-shop'
        )
        expect(snapshot.assets.find((asset) => asset.id === 'resource.compute.shop-web-2')?.applicationId).toBe(
            'ra-app-5-stage-10-experience-11-retail-shop'
        )
    })

    it('preserves segment boundaries when normalized owner and application values overlap', () => {
        const snapshot = normalizeResourceAnalyticsRows([
            buildResourceAnalyticsRow({
                resource_id: 'resource.compute.shop-web-1',
                resource_name: 'shop-web-1',
                application_name: 'Retail-Shop',
                environment_name: 'prod',
                owner_name: 'Commerce'
            }),
            buildResourceAnalyticsRow({
                resource_id: 'resource.compute.shop-web-2',
                resource_name: 'shop-web-2',
                application_name: 'Shop',
                environment_name: 'prod',
                owner_name: 'Commerce-Retail'
            })
        ])

        const firstAssetApplicationId = snapshot.assets.find((asset) => asset.id === 'resource.compute.shop-web-1')?.applicationId
        const secondAssetApplicationId = snapshot.assets.find((asset) => asset.id === 'resource.compute.shop-web-2')?.applicationId

        expect(snapshot.applications.map((application) => application.id)).toEqual([
            'ra-app-4-prod-8-commerce-11-retail-shop',
            'ra-app-4-prod-15-commerce-retail-4-shop'
        ])
        expect(firstAssetApplicationId).toBe('ra-app-4-prod-8-commerce-11-retail-shop')
        expect(secondAssetApplicationId).toBe('ra-app-4-prod-15-commerce-retail-4-shop')
        expect(firstAssetApplicationId).not.toBe(secondAssetApplicationId)
        expect(snapshot.applications).toHaveLength(2)
    })

    it('deduplicates duplicate resource IDs and keeps the last row metrics', () => {
        const snapshot = normalizeResourceAnalyticsRows([
            buildResourceAnalyticsRow({
                resource_id: 'resource.compute.shop-web-1',
                resource_name: 'shop-web-1',
                avg_cpu_percent: 25,
                monthly_cost_usd: 200
            }),
            buildResourceAnalyticsRow({
                resource_id: 'resource.compute.shop-web-1',
                resource_name: 'shop-web-1-reported-later',
                avg_cpu_percent: 80,
                monthly_cost_usd: 900
            })
        ])

        expect(snapshot.assets).toHaveLength(1)
        expect(snapshot.metrics).toHaveLength(1)
        expect(snapshot.assets[0]).toMatchObject({ id: 'resource.compute.shop-web-1', hostName: 'shop-web-1-reported-later' })
        expect(snapshot.metrics[0]).toMatchObject({ assetId: 'resource.compute.shop-web-1', avgCpuPercent: 80, monthlyCostUsd: 900 })
    })

    it('normalizes OCI lifecycle state to current support lifecycle', () => {
        const snapshot = normalizeResourceAnalyticsRows([
            buildResourceAnalyticsRow({
                lifecycle_state: 'STOPPED'
            })
        ])

        expect(snapshot.assets[0].lifecycle).toBe('current')
    })
})

describe('validateResourceAnalyticsSql', () => {
    it('accepts read-only SELECT queries and trims surrounding whitespace', () => {
        expect(validateResourceAnalyticsSql('  SELECT resource_id FROM resources  ')).toBe('SELECT resource_id FROM resources')
    })

    it('accepts SELECT queries that continue on the next line', () => {
        expect(validateResourceAnalyticsSql('SELECT\nresource_id FROM resources')).toBe('SELECT\nresource_id FROM resources')
    })

    it('allows disallowed keywords inside string literals', () => {
        expect(validateResourceAnalyticsSql("select resource_id from resources where action = 'delete'")).toBe(
            "select resource_id from resources where action = 'delete'"
        )
    })

    it('rejects SQL that does not start with SELECT', () => {
        expect(() => validateResourceAnalyticsSql('with resources as (select * from source) select * from resources')).toThrow(
            /must start with SELECT/
        )
    })

    it('rejects semicolon-delimited statements', () => {
        expect(() => validateResourceAnalyticsSql('select resource_id from resources;')).toThrow(/cannot contain semicolons/)
    })

    it('rejects mutation and admin keywords', () => {
        expect(() => validateResourceAnalyticsSql('select resource_id from resources where action = delete')).toThrow(
            /cannot contain mutation or admin keywords/
        )
    })
})

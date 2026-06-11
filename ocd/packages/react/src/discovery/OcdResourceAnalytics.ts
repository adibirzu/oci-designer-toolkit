import { DiscoveryApplication, DiscoveryComputeAsset, DiscoveryMetricSample, DiscoverySnapshot } from './OcdDiscoveryTypes'

export interface ResourceAnalyticsRow {
    resource_id: string
    resource_name: string
    resource_type: string
    compartment_path: string
    region_name: string
    lifecycle_state: string
    shape: string
    cpu_core_count: number
    memory_gb: number
    storage_gb: number
    avg_cpu_percent: number
    p95_cpu_percent: number
    avg_memory_percent: number
    p95_memory_percent: number
    avg_network_mbps: number
    p95_network_mbps: number
    avg_iops: number
    p95_iops: number
    monthly_cost_usd: number
    application_name: string
    environment_name: 'dev' | 'test' | 'stage' | 'prod'
    owner_name: string
}

const normalizeApplicationIdSegment = (value: string): string =>
    value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const encodeApplicationIdSegment = (value: string): string => {
    const normalizedValue = normalizeApplicationIdSegment(value)
    return `${normalizedValue.length}-${normalizedValue}`
}

const getApplicationId = (row: ResourceAnalyticsRow): string =>
    `ra-app-${encodeApplicationIdSegment(row.environment_name)}-${encodeApplicationIdSegment(row.owner_name)}-${encodeApplicationIdSegment(row.application_name)}`

export const normalizeResourceAnalyticsRows = (rows: ResourceAnalyticsRow[]): DiscoverySnapshot => {
    const latestRowsByResourceId = new Map<string, ResourceAnalyticsRow>()
    rows.forEach((row) => latestRowsByResourceId.set(row.resource_id, row))

    const latestRows = Array.from(latestRowsByResourceId.values())
    const applicationsById = new Map<string, DiscoveryApplication>(
        latestRows.map((row): [string, DiscoveryApplication] => {
            const applicationId = getApplicationId(row)
            return [
                applicationId,
                {
                    id: applicationId,
                    name: row.application_name,
                    environment: row.environment_name,
                    owner: row.owner_name,
                    criticality: row.environment_name === 'prod' ? 'high' : 'medium',
                    preferredDisposition: 'replatform'
                }
            ]
        })
    )
    const assets: DiscoveryComputeAsset[] = latestRows.map((row) => {
        const applicationId = getApplicationId(row)
        return {
            id: row.resource_id,
            applicationId,
            hostName: row.resource_name,
            osFamily: 'linux',
            osName: row.shape,
            cpuCores: row.cpu_core_count,
            memoryGb: row.memory_gb,
            storageGb: row.storage_gb,
            virtualization: 'cloud',
            lifecycle: 'current'
        }
    })
    const metrics: DiscoveryMetricSample[] = latestRows.map((row) => ({
        assetId: row.resource_id,
        avgCpuPercent: row.avg_cpu_percent,
        p95CpuPercent: row.p95_cpu_percent,
        avgMemoryPercent: row.avg_memory_percent,
        p95MemoryPercent: row.p95_memory_percent,
        avgNetworkMbps: row.avg_network_mbps,
        p95NetworkMbps: row.p95_network_mbps,
        avgIops: row.avg_iops,
        p95Iops: row.p95_iops,
        monthlyCostUsd: row.monthly_cost_usd
    }))

    return {
        id: 'resource-analytics-import',
        generatedAt: new Date().toISOString(),
        source: 'resource-analytics',
        applications: Array.from(applicationsById.values()),
        assets,
        services: [],
        dependencies: [],
        metrics
    }
}

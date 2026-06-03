/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

/*
** Maps OCD model resource types (singular snake_case keys, e.g. 'instance',
** 'volume', 'load_balancer') to the public Oracle list-pricing part numbers and
** the math that converts a resource into a monthly cost.
**
** Resource items are loosely typed (they come from arbitrary design JSON) so we
** use `any` for the per-item attribute access and narrow defensively with
** helper accessors. Verified part numbers are inlined; mappings whose SKU could
** not be confirmed against the live API use '' and render as "not costed".
*/

import type {
    CostAssumptions,
    CostConfidence,
    CostEstimateResult,
    CostLineItemResult,
    PriceMap
} from './OcdCostTypes'

// ---- Verified part numbers (see scripts/generate_oci_price_snapshot.py) ----
// Compute - Standard - E5 (general purpose Flex default)
const SKU_COMPUTE_E5_OCPU = 'B97384' // OCPU Per Hour
const SKU_COMPUTE_E5_MEMORY = 'B97385' // Gigabytes Per Hour
// Compute - Optimized - X9 (used to demonstrate a second verified shape family)
const SKU_COMPUTE_X9_OCPU = 'B93311' // OCPU Per Hour
const SKU_COMPUTE_X9_MEMORY = 'B93312' // Gigabyte Per Hour
// Storage - Block Volume
const SKU_BLOCK_VOLUME_STORAGE = 'B91961' // GB Capacity Per Month
const SKU_BLOCK_VOLUME_PERFORMANCE = 'B91962' // Performance Units Per GB Per Month
// Load Balancer (flexible LB base + bandwidth, both list at $0)
const SKU_LB_BASE = 'B93030' // Load Balancer
const SKU_LB_BANDWIDTH = 'B93031' // Mbps Per Hour
// Object Storage (standard tier lists at $0 / first tier)
const SKU_OBJECT_STORAGE = 'B91628' // GB Capacity Per Month

// Default flex sizing when a design omits shapeConfig.
const DEFAULT_OCPUS = 1
const DEFAULT_MEMORY_GBS = 16
const DEFAULT_VOLUME_GBS = 50
const DEFAULT_BOOT_VOLUME_GBS = 50
const DEFAULT_VPUS_PER_GB = 10

type MetricKind = 'hourly-ocpu' | 'hourly-memory' | 'monthly-gb' | 'monthly-perf-unit' | 'flat'

interface CostComponent {
    partNumber: string
    kind: MetricKind
}

interface ResourceCostMapping {
    label: string
    confidence: CostConfidence
    components: CostComponent[]
    // Compute the billable quantity for a metric kind from a single resource item.
    quantity: (item: any, kind: MetricKind) => number
    note?: string
}

// ---- Helper accessors (defensive against loosely typed design items) ----
const num = (value: unknown, fallback: number): number =>
    typeof value === 'number' && Number.isFinite(value) ? value : fallback

const shapeOcpus = (item: any): number => num(item?.shapeConfig?.ocpus, DEFAULT_OCPUS)
const shapeMemory = (item: any): number => num(item?.shapeConfig?.memoryInGBs, DEFAULT_MEMORY_GBS)

// ---- Resource type -> cost mapping table ----
export const OCI_RESOURCE_COST_MAPPINGS: Record<string, ResourceCostMapping> = {
    instance: {
        label: 'Compute Instance',
        confidence: 'approximate',
        note: 'Estimated using Standard E5 Flex OCPU + memory list rates; actual shape pricing varies.',
        components: [
            { partNumber: SKU_COMPUTE_E5_OCPU, kind: 'hourly-ocpu' },
            { partNumber: SKU_COMPUTE_E5_MEMORY, kind: 'hourly-memory' }
        ],
        quantity: (item, kind) => (kind === 'hourly-ocpu' ? shapeOcpus(item) : shapeMemory(item))
    },
    volume: {
        label: 'Block Volume',
        confidence: 'confident',
        note: 'Block volume storage (and Balanced 10 VPU/GB performance) at list rate.',
        components: [
            { partNumber: SKU_BLOCK_VOLUME_STORAGE, kind: 'monthly-gb' },
            { partNumber: SKU_BLOCK_VOLUME_PERFORMANCE, kind: 'monthly-perf-unit' }
        ],
        quantity: (item, kind) => {
            const sizeGbs = num(item?.sizeInGBs, DEFAULT_VOLUME_GBS)
            if (kind === 'monthly-gb') return sizeGbs
            // Performance units billed per GB scaled by VPUs/GB.
            return sizeGbs * num(item?.vpusPerGB, DEFAULT_VPUS_PER_GB)
        }
    },
    boot_volume: {
        label: 'Boot Volume',
        confidence: 'approximate',
        note: 'Boot volumes priced with the Block Volume storage rate; size defaults to 50GB when unspecified.',
        components: [{ partNumber: SKU_BLOCK_VOLUME_STORAGE, kind: 'monthly-gb' }],
        quantity: (item) => num(item?.sizeInGBs, DEFAULT_BOOT_VOLUME_GBS)
    },
    load_balancer: {
        label: 'Load Balancer',
        confidence: 'approximate',
        note: 'Flexible Load Balancer base + bandwidth; list base rate is 0, bandwidth billed by Mbps shape.',
        components: [
            { partNumber: SKU_LB_BASE, kind: 'flat' },
            { partNumber: SKU_LB_BANDWIDTH, kind: 'flat' }
        ],
        quantity: () => 1
    },
    network_load_balancer: {
        label: 'Network Load Balancer',
        confidence: 'confident',
        note: 'Network Load Balancer has no per-instance charge (list rate 0).',
        components: [{ partNumber: SKU_LB_BASE, kind: 'flat' }],
        quantity: () => 1
    },
    bucket: {
        label: 'Object Storage Bucket',
        confidence: 'approximate',
        note: 'Object Storage standard tier; consumption is usage-based and not derivable from the design (storage GB unknown).',
        components: [{ partNumber: SKU_OBJECT_STORAGE, kind: 'monthly-gb' }],
        // No size attribute on a bucket resource, so billable quantity is 0
        // (storage is pay-per-use). The mapping still resolves the SKU so the
        // line renders as a costed-but-zero entry rather than "not costed".
        quantity: () => 0
    }
}

// Resource types that are always free of charge in OCI. Listed so the BOM page
// can show them as "no charge" rather than "not costed / unknown".
export const FREE_RESOURCE_TYPES: ReadonlySet<string> = new Set([
    'vcn',
    'subnet',
    'route_table',
    'security_list',
    'internet_gateway',
    'nat_gateway',
    'service_gateway',
    'local_peering_gateway',
    'dhcp_options',
    'network_security_group',
    'drg',
    'drg_attachment',
    'compartment',
    'dynamic_group',
    'group',
    'user',
    'policy'
])

const round2 = (value: number): number => Math.round(value * 100) / 100

const metricUnitsPerMonth = (kind: MetricKind, hoursPerMonth: number): number => {
    switch (kind) {
        case 'hourly-ocpu':
        case 'hourly-memory':
        case 'flat': // flat (per-hour) SKUs such as LB base/bandwidth bill hourly
            return hoursPerMonth
        case 'monthly-gb':
        case 'monthly-perf-unit':
            return 1
        default:
            return 1
    }
}

/*
** Pure function. Walks the design resources and produces a monthly cost
** estimate from the supplied price map. Resource types not in the mapping table
** and not in FREE_RESOURCE_TYPES are reported as notCosted. Mapped SKUs missing
** from the price map are reported in missingParts and treated as 0 for that
** component.
*/
export function estimateMonthlyCost(
    resources: Record<string, any[]>,
    priceMap: PriceMap,
    assumptions: CostAssumptions
): CostEstimateResult {
    const hoursPerMonth = assumptions.hoursPerMonth || 744
    const lineItems: CostLineItemResult[] = []
    const notCosted: CostLineItemResult[] = []
    const missingPartsSet = new Set<string>()

    for (const [resourceType, items] of Object.entries(resources)) {
        const count = Array.isArray(items) ? items.length : 0
        if (count === 0) continue

        const mapping = OCI_RESOURCE_COST_MAPPINGS[resourceType]

        if (!mapping) {
            const label = resourceType.replace(/_/g, ' ')
            if (FREE_RESOURCE_TYPES.has(resourceType)) {
                lineItems.push({
                    resourceType,
                    label,
                    count,
                    partNumbers: [],
                    monthlyCost: 0,
                    confidence: 'confident',
                    note: 'No charge for this resource type.'
                })
            } else {
                notCosted.push({
                    resourceType,
                    label,
                    count,
                    partNumbers: [],
                    monthlyCost: 0,
                    confidence: 'not-costed',
                    note: 'No pricing mapping available for this resource type.'
                })
            }
            continue
        }

        // Mappings with no resolvable SKU at all -> not costed.
        const resolvableComponents = mapping.components.filter((c) => c.partNumber.length > 0)
        if (resolvableComponents.length === 0) {
            notCosted.push({
                resourceType,
                label: mapping.label,
                count,
                partNumbers: [],
                monthlyCost: 0,
                confidence: 'not-costed',
                note: mapping.note ?? 'No verified part number for this resource type.'
            })
            continue
        }

        let lineTotal = 0
        const usedParts: string[] = []
        for (const item of items as any[]) {
            for (const component of resolvableComponents) {
                const entry = priceMap[component.partNumber]
                if (!entry) {
                    missingPartsSet.add(component.partNumber)
                    continue
                }
                if (!usedParts.includes(component.partNumber)) usedParts.push(component.partNumber)
                const quantity = mapping.quantity(item, component.kind)
                const unitsPerMonth = metricUnitsPerMonth(component.kind, hoursPerMonth)
                lineTotal += entry.unitPrice * quantity * unitsPerMonth
            }
        }

        lineItems.push({
            resourceType,
            label: mapping.label,
            count,
            partNumbers: usedParts,
            monthlyCost: round2(lineTotal),
            confidence: mapping.confidence,
            note: mapping.note
        })
    }

    const totalMonthly = round2(lineItems.reduce((sum, li) => sum + li.monthlyCost, 0))

    return {
        currency: assumptions.currency,
        totalMonthly,
        lineItems: lineItems.sort((a, b) => a.label.localeCompare(b.label)),
        notCosted: notCosted.sort((a, b) => a.label.localeCompare(b.label)),
        missingParts: Array.from(missingPartsSet).sort(),
        assumptions
    }
}

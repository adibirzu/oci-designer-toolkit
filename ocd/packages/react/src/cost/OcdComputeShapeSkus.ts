/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

/*
** Compute shape -> pricing-SKU mapping for the OCD cost estimator (roadmap B1).
**
** Each OCI compute shape FAMILY is costed with its own OCPU-per-hour and (where
** the family has one) memory-per-hour cetools part numbers, instead of one flat
** Standard E5 rate for every instance.
**
** All part numbers below were verified live against the public Oracle Cloud
** Cost Estimator Tools API
**   (https://apexapps.oracle.com/pls/apex/cetools/api/v1/products/?currencyCode=USD)
** on 2026-06-04. DO NOT invent part numbers: families whose SKU could not be
** confidently identified are marked confidence 'approximate' with a note and
** fall back to the closest verified family.
**
** Notes on shape pricing model:
**  - Modern Flex families (E3/E4/E5/E6, A1/A2, X9/Optimized3, DenseIO) bill OCPU
**    and memory on SEPARATE per-hour SKUs.
**  - Older fixed-config families (E2, B1, Standard1/X5, Standard2/X7,
**    Standard3/X-series, DenseIO1/2) bill a SINGLE bundled OCPU-per-hour SKU;
**    memory is included in the OCPU rate, so memSku is omitted.
**  - Always-Free / Micro shapes cost 0.
*/

export type ShapeSkuConfidence = 'verified' | 'approximate'

export interface ShapeSkuMapping {
    // cetools OCPU-per-hour part number ('' for always-free shapes that cost 0).
    ocpuSku: string
    // cetools memory (GB)-per-hour part number, when the family bills memory
    // separately. Omitted for fixed-config families that bundle memory.
    memSku?: string
    // True when the shape is a Flex shape (OCPUs/memory come from shapeConfig).
    flex: boolean
    // For non-Flex shapes whose ocpus/memory are not in the design item, these
    // provide a sensible default. Usually unused because OcdDefaultCache carries
    // ocpus/memoryInGBs on the catalog entry.
    fixedOcpus?: number
    fixedMemGb?: number
    confidence: ShapeSkuConfidence
    note?: string
}

// ---- Verified cetools part numbers (live 2026-06-04, USD) ----
// Compute - Standard families
const E2_OCPU = 'B90425' // Compute - Standard - E2 (OCPU Per Hour, memory bundled)
const E3_OCPU = 'B92306' // Compute - Standard - E3 - OCPU
const E3_MEM = 'B92307' // Compute - Standard - E3 - Memory
const E4_OCPU = 'B93113' // Compute - Standard - E4 - OCPU
const E4_MEM = 'B93114' // Compute - Standard - E4 - Memory
const E5_OCPU = 'B97384' // Compute - Standard - E5 - OCPU
const E5_MEM = 'B97385' // Compute - Standard - E5 - Memory
const E6_OCPU = 'B111129' // OCI - Compute - Standard - E6 - OCPU
const E6_MEM = 'B111130' // OCI - Compute - Standard - E6 - Memory
// Ampere (Arm)
const A1_OCPU = 'B93297' // Compute - Standard - A1 - OCPU (always free; $0)
const A1_MEM = 'B93298' // Compute - Standard - A1 - Memory ($0)
const A2_OCPU = 'B109529' // Compute - Standard - A2 OCPU
const A2_MEM = 'B109530' // Compute - Standard - A2 Memory
// Intel X-series
const X9_OCPU = 'B94176' // Compute - Standard - X9 - OCPU
const X9_MEM = 'B94177' // Compute - Standard - X9 - Memory
const X9_OPT_OCPU = 'B93311' // Compute - Optimized - X9 - OCPU (Optimized3)
const X9_OPT_MEM = 'B93312' // Compute - Optimized - X9 - Memory
const X5_OCPU = 'B88317' // Compute - Virtual Machine Standard - X5 (Standard1, bundled)
const X5_BM_OCPU = 'B88315' // Compute - Bare Metal Standard - X5
const X7_OCPU = 'B88514' // Compute - Virtual Machine Standard - X7 (Standard2, bundled)
const X7_BM_OCPU = 'B88513' // Compute - Bare Metal Standard - X7
const B1_OCPU = 'B91120' // Compute - Virtual Machine Standard - B1 (bundled)
const B1_BM_OCPU = 'B91119' // Compute - Bare Metal Standard - B1
// Dense I/O families
const DENSEIO_E4_OCPU = 'B93121' // Compute - Dense I/O - E4 - OCPU
const DENSEIO_E4_MEM = 'B93122' // Compute - Dense I/O - E4 - Memory
const DENSEIO_E5_OCPU = 'B98202' // OCI - Compute - Dense I/O - E5 OCPU
const DENSEIO_E5_MEM = 'B98203' // OCI - Compute - Dense I/O - E5 Memory
const DENSEIO_E6_OCPU = 'B112556' // OCI - Compute - Dense IO - E6 Ax - OCPU
const DENSEIO_E6_MEM = 'B112557' // OCI - Compute - Dense IO - E6 Ax - Memory
const DENSEIO_X7_OCPU = 'B88516' // Compute - Virtual Machine Dense I/O - X7 (DenseIO2, bundled)
const DENSEIO_X7_BM_OCPU = 'B88515' // Compute - Bare Metal Dense I/O - X7

const ALWAYS_FREE_NOTE = 'Always-free shape; no charge.'

// Helper builders to keep the table terse and consistent.
const flexFamily = (
    ocpuSku: string,
    memSku: string,
    confidence: ShapeSkuConfidence = 'verified',
    note?: string
): ShapeSkuMapping => ({ ocpuSku, memSku, flex: true, confidence, note })

const fixedFamily = (
    ocpuSku: string,
    memSku: string | undefined,
    confidence: ShapeSkuConfidence = 'verified',
    note?: string
): ShapeSkuMapping => ({ ocpuSku, memSku, flex: false, confidence, note })

/*
** Family-key -> SKU mapping. Keys are normalized family identifiers produced by
** resolveFamilyKey() below (NOT raw shape names). Order does not matter; the
** resolver picks the family.
*/
export const COMPUTE_SHAPE_SKUS: Record<string, ShapeSkuMapping> = {
    // ---- AMD EPYC Standard ----
    'standard.e2': fixedFamily(E2_OCPU, undefined, 'verified', 'E2 bills a single bundled OCPU rate (memory included).'),
    'standard.e3': flexFamily(E3_OCPU, E3_MEM),
    'standard.e4': flexFamily(E4_OCPU, E4_MEM),
    'standard.e5': flexFamily(E5_OCPU, E5_MEM),
    'standard.e6': flexFamily(E6_OCPU, E6_MEM),
    // ---- Ampere (Arm) ----
    'standard.a1': flexFamily(A1_OCPU, A1_MEM, 'verified', ALWAYS_FREE_NOTE),
    'standard.a2': flexFamily(A2_OCPU, A2_MEM),
    // ---- Intel X-series Standard ----
    'standard.x9': flexFamily(X9_OCPU, X9_MEM, 'verified', 'Standard3 / X9 Flex.'),
    'standard.x7': fixedFamily(X7_OCPU, undefined, 'verified', 'Standard2 (X7) bundled OCPU rate.'),
    'standard.x7.bm': fixedFamily(X7_BM_OCPU, undefined, 'verified', 'BM Standard2 (X7) bundled OCPU rate.'),
    'standard.x5': fixedFamily(X5_OCPU, undefined, 'verified', 'Standard1 (X5) bundled OCPU rate.'),
    'standard.x5.bm': fixedFamily(X5_BM_OCPU, undefined, 'verified', 'BM Standard1 (X5) bundled OCPU rate.'),
    'standard.b1': fixedFamily(B1_OCPU, undefined, 'verified', 'B1 bundled OCPU rate.'),
    'standard.b1.bm': fixedFamily(B1_BM_OCPU, undefined, 'verified', 'BM B1 bundled OCPU rate.'),
    // ---- Optimized3 (Intel X9 optimized) ----
    optimized3: flexFamily(X9_OPT_OCPU, X9_OPT_MEM, 'verified', 'Optimized3 / X9 high-frequency.'),
    // ---- Dense I/O ----
    'denseio.e4': flexFamily(DENSEIO_E4_OCPU, DENSEIO_E4_MEM),
    'denseio.e5': flexFamily(DENSEIO_E5_OCPU, DENSEIO_E5_MEM),
    'denseio.e6': flexFamily(DENSEIO_E6_OCPU, DENSEIO_E6_MEM),
    'denseio.x7': fixedFamily(DENSEIO_X7_OCPU, undefined, 'verified', 'DenseIO2 (X7) bundled OCPU rate.'),
    'denseio.x7.bm': fixedFamily(DENSEIO_X7_BM_OCPU, undefined, 'verified', 'BM DenseIO2 (X7) bundled OCPU rate.')
}

// Fallback used when a shape name cannot be matched to any known family. Uses
// the verified Standard E5 SKUs but is flagged approximate so the BOM line
// renders with reduced confidence.
const FALLBACK_E5: ShapeSkuMapping = flexFamily(
    E5_OCPU,
    E5_MEM,
    'approximate',
    'Unrecognized shape family; estimated with Standard E5 Flex rates.'
)

// Always-free / Micro shapes cost 0 regardless of OCPU/memory.
const ALWAYS_FREE: ShapeSkuMapping = {
    ocpuSku: '',
    flex: false,
    fixedOcpus: 0,
    fixedMemGb: 0,
    confidence: 'verified',
    note: ALWAYS_FREE_NOTE
}

export interface ResolvedShapeSku extends ShapeSkuMapping {
    // The family key the shape resolved to ('always-free' / 'fallback' for the
    // two synthetic buckets), useful for BOM notes and debugging.
    familyKey: string
    // True for shapes that should never be billed (Always-Free / Micro).
    alwaysFree: boolean
}

/*
** Normalize a full shape name (e.g. 'VM.Standard.E5.Flex',
** 'BM.Standard.E5.192', 'VM.DenseIO2.8') to a COMPUTE_SHAPE_SKUS family key.
** Returns undefined when the shape is unrecognized.
*/
function resolveFamilyKey(shape: string): string | undefined {
    const name = shape.trim()
    const isBm = /^BM\./i.test(name)
    const bmSuffix = isBm ? '.bm' : ''

    // ---- Dense I/O families (check before plain Standard) ----
    if (/DenseIO/i.test(name)) {
        if (/DenseIO\.E6|DenseIO6/i.test(name)) return 'denseio.e6'
        if (/DenseIO\.E5|DenseIO5/i.test(name)) return 'denseio.e5'
        if (/DenseIO\.E4|DenseIO4/i.test(name)) return 'denseio.e4'
        // DenseIO1 (X5-era) and DenseIO2 (X7-era) both map to the X7 dense SKU.
        if (/DenseIO1|DenseIO2/i.test(name)) return `denseio.x7${bmSuffix}`
        return `denseio.x7${bmSuffix}` // generic DenseIO -> X7 dense (approximate via fallback note)
    }

    // ---- Optimized3 ----
    if (/Optimized3/i.test(name)) return 'optimized3'

    // ---- AMD EPYC E-series ----
    if (/\bE6\b|\.E6\.|\.E6$/i.test(name)) return 'standard.e6'
    if (/\bE5\b|\.E5\.|\.E5$/i.test(name)) return 'standard.e5'
    if (/\bE4\b|\.E4\.|\.E4$/i.test(name)) return 'standard.e4'
    if (/\bE3\b|\.E3\.|\.E3$/i.test(name)) return 'standard.e3'
    if (/\bE2\b|\.E2\.|\.E2$/i.test(name)) return 'standard.e2'

    // ---- Ampere (Arm) ----
    if (/\bA2\b|\.A2\.|\.A2$/i.test(name)) return 'standard.a2'
    if (/\bA1\b|\.A1\.|\.A1$/i.test(name)) return 'standard.a1'

    // ---- Intel X-series (Standard3 = X9, Standard2 = X7, Standard1 = X5) ----
    if (/Standard3|\bX9\b/i.test(name)) return 'standard.x9'
    if (/Standard2|\bX7\b/i.test(name)) return `standard.x7${bmSuffix}`
    if (/Standard1|\bX5\b/i.test(name)) return `standard.x5${bmSuffix}`
    if (/\bB1\b|\.B1\.|\.B1$/i.test(name)) return `standard.b1${bmSuffix}`

    // ---- Generic shapes: x86/AMD/Intel -> E5 default; Ampere -> A1 ----
    if (/Ampere/i.test(name)) return 'standard.a1'
    if (/\.AMD\.|\.Intel\.|\.x86\./i.test(name)) return 'standard.e5'

    return undefined
}

/*
** Resolve a full compute shape name to its OCPU/memory SKUs.
**
** Always-Free / Micro shapes resolve to a zero-cost mapping. Unrecognized
** shapes resolve to the E5 fallback (flagged approximate). Never throws.
*/
export function resolveShapeSkus(shapeName: unknown): ResolvedShapeSku {
    const shape = typeof shapeName === 'string' ? shapeName : ''
    if (shape.length === 0) {
        return { ...FALLBACK_E5, familyKey: 'fallback', alwaysFree: false }
    }

    // Always-free: explicit Micro shapes and the Ampere always-free A1 tier are
    // costed by their SKUs ($0 for A1), but Micro shapes are 0 unconditionally.
    if (/\.Micro\b/i.test(shape) || /Micro\.Free|Micro$/i.test(shape)) {
        return { ...ALWAYS_FREE, familyKey: 'always-free', alwaysFree: true }
    }

    const familyKey = resolveFamilyKey(shape)
    if (familyKey && COMPUTE_SHAPE_SKUS[familyKey]) {
        return { ...COMPUTE_SHAPE_SKUS[familyKey], familyKey, alwaysFree: false }
    }

    return { ...FALLBACK_E5, familyKey: 'fallback', alwaysFree: false }
}

// Every distinct part number referenced by the shape mapping (plus fallback),
// so the snapshot generator and price-fetch layer know which SKUs to load.
export const COMPUTE_SHAPE_PART_NUMBERS: readonly string[] = Array.from(
    new Set(
        Object.values(COMPUTE_SHAPE_SKUS)
            .flatMap((m) => [m.ocpuSku, m.memSku])
            .filter((p): p is string => typeof p === 'string' && p.length > 0)
    )
).sort()

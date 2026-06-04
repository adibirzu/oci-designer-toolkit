/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/**
 * Landing Zone placement resolver (roadmap A5).
 *
 * When the active OCD design was produced by the LZNG wizard ("LZ-origin"), a
 * dropped palette stencil should land in the most appropriate compartment of the
 * generated Landing Zone hierarchy instead of always inheriting the currently
 * selected canvas layer.
 *
 * Placement rules (ordered by priority):
 *
 *   1. NETWORK resources (VCN, Subnet, Route Table, Security List, NSG,
 *      gateways, DRG, …) are placed in the first compartment whose
 *      `displayName` contains "network" (case-insensitive).
 *
 *   2. IAM resources (Group, Dynamic Group, Policy) are placed in the first
 *      compartment whose `displayName` contains "security" (case-insensitive).
 *      Some LZ topologies call this compartment "iam" — so we also accept that.
 *
 *   3. A bare `compartment` stencil is placed at root (no parent) — the user is
 *      adding a child of the root; the active layer is the best default.
 *
 *   4. Fallback (unknown resource type, or no matching compartment found): return
 *      the first available compartment id (the root), so the drop never fails.
 *
 * The classification of each OCD model type is driven by the B3 OcdLzResourceMap:
 * if the first `oeKind` path of the entry starts with "network." the resource is
 * a network resource; if it starts with "iam." (but is not "compartment") it is
 * an IAM resource.
 */

import { byOcdModelType } from './OcdLzResourceMap'

/** A minimal compartment shape — only the fields resolveLzPlacement reads. */
export interface LzCompartmentLike {
    id: string
    displayName?: string
}

/**
 * Determine whether the active OCD design originated from the LZNG wizard.
 *
 * The flag is stored in `design.userDefined.lzOrigin` (a plain boolean).
 * The check is intentionally lenient: any truthy value qualifies.
 *
 * @param design Any OCD design object (may be null / undefined in tests).
 */
export function isLzOriginDesign(design: { userDefined?: Record<string, unknown> } | null | undefined): boolean {
    return Boolean(design?.userDefined?.lzOrigin)
}

/**
 * Categorise an OCD model resource type into one of the three LZ placement
 * categories derived from the B3 name map.
 */
export type LzResourceCategory = 'iam' | 'network' | 'other'

export function categorizeLzResource(ocdModelType: string): LzResourceCategory {
    if (ocdModelType === 'compartment') return 'other'
    const entry = byOcdModelType(ocdModelType)
    if (!entry) return 'other'
    const firstKind = entry.oeKinds[0] ?? ''
    if (firstKind.startsWith('network.')) return 'network'
    if (firstKind.startsWith('iam.')) return 'iam'
    return 'other'
}

/**
 * Resolve the best compartment id for a dropped palette stencil inside an
 * LZ-origin design.
 *
 * @param ocdModelType   The OCD model resource type of the dropped stencil
 *                       (e.g. 'vcn', 'subnet', 'group').
 * @param compartments   The list of compartments currently in the design
 *                       (`design.model.oci.resources.compartment`).
 * @returns The compartment id to assign to the new resource, or an empty string
 *          if no compartment is found (the canvas will fall back to its default).
 */
export function resolveLzPlacement(
    ocdModelType: string,
    compartments: readonly LzCompartmentLike[],
): string {
    if (!compartments || compartments.length === 0) return ''
    const fallback = compartments[0].id

    const category = categorizeLzResource(ocdModelType)

    if (category === 'network') {
        // Prefer a compartment named "…network…" (e.g. 'cmp-lz-prod-network').
        const netCmp = compartments.find((c) =>
            c.displayName?.toLowerCase().includes('network'),
        )
        return netCmp ? netCmp.id : fallback
    }

    if (category === 'iam') {
        // Prefer a compartment named "…security…" or "…iam…".
        const iamCmp = compartments.find(
            (c) =>
                c.displayName?.toLowerCase().includes('security') ||
                c.displayName?.toLowerCase().includes('iam'),
        )
        return iamCmp ? iamCmp.id : fallback
    }

    // 'other' (compartment stencil + anything not in the B3 map): use fallback.
    return fallback
}

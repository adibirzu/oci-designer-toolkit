/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** "Open generated LZ in Designer" bridge (roadmap wizard <-> designer link).
**
** Translates the Operating Entities (OE / Landing Zone Next Generation) JSON
** output (iam.json + network.json) into an OcdDesign whose model.oci.resources
** are real OCD model resources, so the generated Landing Zone can be edited on
** the drag-drop canvas with the restored OCI stencils.
**
** Mapping is driven by OcdLzResourceMap (byOeKind / the OE section -> OCD model
** type + palette class single source of truth). Confidently covered today:
**
**   iam.json:
**     compartments_configuration.compartments.*          -> compartment (recursive, parent links)
**   network.json:
**     ...network_configuration_categories.*.vcns.*       -> vcn
**       .subnets.*                                       -> subnet  (vcnId + routeTableId + securityListIds)
**       .route_tables.*                                  -> route_table (vcnId)
**       .security_lists.* / .default_security_list       -> security_list (vcnId)
**       .network_security_groups.*                       -> network_security_group (vcnId)
**       .vcn_specific_gateways.internet_gateways.*       -> internet_gateway (vcnId)
**       .vcn_specific_gateways.nat_gateways.*            -> nat_gateway (vcnId)
**       .vcn_specific_gateways.service_gateways.*        -> service_gateway (vcnId)
**     ...network_configuration_categories.*.non_vcn_specific_gateways.dynamic_routing_gateways.* -> drg
**
** Everything is defensive: unknown sections are skipped, missing fields never
** throw, and a structured report records what was mapped vs skipped.
*/

import { OcdDesign, OciModelResources } from '@ocd/model'
import { GeneratedFile } from './OcdLzGenerator'
import { byOeKind } from './OcdLzResourceMap'

/** Result of translating the OE output into an OcdDesign. */
export interface OcdLzToModelResult {
    /** The assembled OCD design ready to drop into an OcdDocument. */
    design: OcdDesign
    /** Per-OCD-resource-type counts of what was created. */
    counts: Record<string, number>
    /** Top-level compartment ids (suitable for `addLayer`). */
    topCompartmentIds: string[]
    /** Human readable notes about sections that were mapped / skipped. */
    notes: string[]
}

/** Minimal shape of the OE iam.json content we read. */
interface RawCompartment {
    name?: string
    description?: string
    children?: Record<string, RawCompartment>
}
interface IamContent {
    compartments_configuration?: {
        compartments?: Record<string, RawCompartment>
    }
}

/** Minimal shape of the OE network.json content we read. */
interface RawNamed {
    display_name?: string
}
interface RawSubnet extends RawNamed {
    cidr_block?: string
    dns_label?: string
    route_table_key?: string
    security_list_keys?: string[]
    prohibit_public_ip_on_vnic?: boolean
}
interface RawVcn extends RawNamed {
    cidr_blocks?: string[]
    dns_label?: string
    subnets?: Record<string, RawSubnet>
    route_tables?: Record<string, RawNamed>
    security_lists?: Record<string, RawNamed>
    default_security_list?: RawNamed
    network_security_groups?: Record<string, RawNamed>
    vcn_specific_gateways?: {
        internet_gateways?: Record<string, RawNamed>
        nat_gateways?: Record<string, RawNamed>
        service_gateways?: Record<string, RawNamed>
    }
}
interface RawCategory {
    category_compartment_id?: string
    vcns?: Record<string, RawVcn>
    non_vcn_specific_gateways?: {
        dynamic_routing_gateways?: Record<string, RawNamed>
    }
}
interface NetworkContent {
    network_configuration?: {
        network_configuration_categories?: Record<string, RawCategory>
    }
}

// OE section key paths (kept identical to the OcdLzResourceMap entries so the
// byOeKind lookup resolves the OCD model type + palette class authoritatively).
const NET_VCN = 'network.network_configuration.network_configuration_categories.*.vcns.*'
const KIND_COMPARTMENT = 'iam.compartments_configuration.compartments'
const KIND_VCN = 'network.network_configuration.network_configuration_categories.*.vcns'
const KIND_SUBNET = `${NET_VCN}.subnets`
const KIND_ROUTE_TABLE = `${NET_VCN}.route_tables`
const KIND_SECURITY_LIST = `${NET_VCN}.security_lists`
const KIND_DEFAULT_SECURITY_LIST = `${NET_VCN}.default_security_list`
const KIND_NSG = `${NET_VCN}.network_security_groups`
const KIND_IGW = `${NET_VCN}.vcn_specific_gateways.internet_gateways`
const KIND_NGW = `${NET_VCN}.vcn_specific_gateways.nat_gateways`
const KIND_SGW = `${NET_VCN}.vcn_specific_gateways.service_gateways`
const KIND_DRG = `${NET_VCN}.non_vcn_specific_gateways.dynamic_routing_gateways`

/**
 * Per-OCD-model-type factory. Each entry returns a freshly constructed model
 * resource via its generated `newResource`. Only the types the OE network
 * output emits are listed; unmapped types are skipped by the caller.
 */
type ModelResourceFactory = () => Record<string, unknown>
const MODEL_FACTORIES: Record<string, ModelResourceFactory> = {
    subnet: () => OciModelResources.OciSubnet.newResource('subnet') as unknown as Record<string, unknown>,
    route_table: () => OciModelResources.OciRouteTable.newResource('route_table') as unknown as Record<string, unknown>,
    security_list: () => OciModelResources.OciSecurityList.newResource('security_list') as unknown as Record<string, unknown>,
    network_security_group: () =>
        OciModelResources.OciNetworkSecurityGroup.newResource('network_security_group') as unknown as Record<string, unknown>,
    internet_gateway: () => OciModelResources.OciInternetGateway.newResource('internet_gateway') as unknown as Record<string, unknown>,
    nat_gateway: () => OciModelResources.OciNatGateway.newResource('nat_gateway') as unknown as Record<string, unknown>,
    service_gateway: () => OciModelResources.OciServiceGateway.newResource('service_gateway') as unknown as Record<string, unknown>,
}

function parseJson<T>(content: string | null | undefined): T | null {
    if (!content) return null
    try {
        return JSON.parse(content) as T
    } catch {
        return null
    }
}

function findFile(files: GeneratedFile[], name: string): string | null {
    return files.find((file) => file.name === name)?.content ?? null
}

/** Bump a per-type counter. */
function bump(counts: Record<string, number>, type: string): void {
    counts[type] = (counts[type] ?? 0) + 1
}

/** Resolve the OCD model type for an OE section path, or undefined if unmapped. */
function modelTypeFor(oeKind: string): string | undefined {
    return byOeKind(oeKind)?.ocdModelType
}

/**
 * Build an OcdDesign (with model.oci.resources fully populated) from the OE
 * generated files. Never throws on malformed / missing content.
 */
export function buildOcdDesignFromLz(files: GeneratedFile[], title = 'Landing Zone'): OcdLzToModelResult {
    const design = OcdDesign.newDesign()
    // Start from an empty resource set; the bridge owns every resource.
    design.model.oci.resources = {}
    design.metadata.title = title
    if (design.view.pages[0]) {
        design.view.pages[0].title = title
        design.view.pages[0].layers = []
        design.view.pages[0].coords = []
        design.view.pages[0].connectors = []
    }

    const counts: Record<string, number> = {}
    const notes: string[] = []
    const topCompartmentIds: string[] = []

    const push = (key: string, resource: object): void => {
        if (!Object.hasOwn(design.model.oci.resources, key)) design.model.oci.resources[key] = []
        design.model.oci.resources[key].push(resource)
    }

    // --- IAM: compartments (recursive) ---
    const iam = parseJson<IamContent>(findFile(files, 'iam.json'))
    const compartments = iam?.compartments_configuration?.compartments ?? {}
    const compartmentModelType = modelTypeFor(KIND_COMPARTMENT)
    let compartmentRootId = ''

    const walkCompartment = (key: string, raw: RawCompartment, parentId: string, depth: number): void => {
        const resource = OciModelResources.OciCompartment.newResource('compartment')
        resource.displayName = raw.name || key
        resource.description = raw.description || ''
        if (parentId) resource.compartmentId = parentId
        push('compartment', resource)
        bump(counts, 'compartment')
        if (depth === 0) {
            topCompartmentIds.push(resource.id)
            if (!compartmentRootId) compartmentRootId = resource.id
        }
        const children = raw.children ?? {}
        Object.keys(children)
            .sort()
            .forEach((childKey) => walkCompartment(childKey, children[childKey] ?? {}, resource.id, depth + 1))
    }

    if (compartmentModelType) {
        Object.keys(compartments)
            .sort()
            .forEach((key) => walkCompartment(key, compartments[key] ?? {}, '', 0))
        notes.push(`Mapped ${counts.compartment ?? 0} compartment(s) from iam.json.`)
    } else {
        notes.push('Skipped compartments: no OcdLzResourceMap entry for IAM compartments.')
    }

    // Fall back to a single root compartment so network resources always have a
    // parent (the canvas requires at least one compartment layer).
    if (!compartmentRootId) {
        const root = OciModelResources.OciCompartment.newResource('compartment')
        root.displayName = title
        root.description = 'Landing Zone root compartment'
        push('compartment', root)
        bump(counts, 'compartment')
        topCompartmentIds.push(root.id)
        compartmentRootId = root.id
        notes.push('Synthesized a root compartment (none found in iam.json).')
    }

    // --- Network: VCNs and contained resources ---
    const network = parseJson<NetworkContent>(findFile(files, 'network.json'))
    const categories = network?.network_configuration?.network_configuration_categories ?? {}

    // Set a parent compartment + provider/region on any networking resource.
    const setNetworkParent = (resource: { compartmentId: string }): void => {
        resource.compartmentId = compartmentRootId
    }

    // Build a sub-resource map keyed by OE key, recording the generated OCD id,
    // so subnets can resolve route_table_key / security_list_keys to real ids.
    const mapNamedChildren = (
        container: Record<string, RawNamed> | undefined,
        oeKind: string,
        listKey: string,
        vcnId: string,
        keyToId?: Map<string, string>,
        configure?: (resource: Record<string, unknown>, raw: RawNamed) => void,
    ): void => {
        if (!container) return
        const modelType = modelTypeFor(oeKind)
        if (!modelType) {
            notes.push(`Skipped ${oeKind}: not in OcdLzResourceMap.`)
            return
        }
        const factory = MODEL_FACTORIES[modelType]
        if (!factory) {
            notes.push(`Skipped ${oeKind}: no model factory for '${modelType}'.`)
            return
        }
        Object.keys(container)
            .sort()
            .forEach((key) => {
                const raw = container[key] ?? {}
                const resource = factory()
                resource.displayName = raw.display_name || key
                if (Object.hasOwn(resource, 'vcnId')) resource.vcnId = vcnId
                setNetworkParent(resource as { compartmentId: string })
                if (configure) configure(resource, raw)
                push(listKey, resource)
                bump(counts, listKey)
                if (keyToId) keyToId.set(key, resource.id as string)
            })
    }

    const vcnModelType = modelTypeFor(KIND_VCN)
    let categoryCount = 0
    let vcnCount = 0

    Object.keys(categories)
        .sort()
        .forEach((categoryKey) => {
            const category = categories[categoryKey] ?? {}
            categoryCount += 1
            const vcns = category.vcns ?? {}

            Object.keys(vcns)
                .sort()
                .forEach((vcnKey) => {
                    const rawVcn = vcns[vcnKey] ?? {}
                    let vcnId = ''
                    if (vcnModelType) {
                        const vcn = OciModelResources.OciVcn.newResource('vcn')
                        vcn.displayName = rawVcn.display_name || vcnKey
                        vcn.cidrBlocks = Array.isArray(rawVcn.cidr_blocks) ? rawVcn.cidr_blocks : []
                        if (rawVcn.dns_label) vcn.dnsLabel = rawVcn.dns_label
                        setNetworkParent(vcn)
                        push('vcn', vcn)
                        bump(counts, 'vcn')
                        vcnCount += 1
                        vcnId = vcn.id
                    } else {
                        notes.push('Skipped VCNs: no OcdLzResourceMap entry for VCN.')
                    }

                    // Route tables + security lists first so subnets can link to them.
                    const routeTableIds = new Map<string, string>()
                    const securityListIds = new Map<string, string>()

                    mapNamedChildren(rawVcn.route_tables, KIND_ROUTE_TABLE, 'route_table', vcnId, routeTableIds)
                    mapNamedChildren(rawVcn.security_lists, KIND_SECURITY_LIST, 'security_list', vcnId, securityListIds)
                    if (rawVcn.default_security_list) {
                        mapNamedChildren(
                            { default_security_list: rawVcn.default_security_list },
                            KIND_DEFAULT_SECURITY_LIST,
                            'security_list',
                            vcnId,
                            securityListIds,
                            (resource) => {
                                resource.displayName = rawVcn.default_security_list?.display_name || `${vcnKey} Default Security List`
                            },
                        )
                    }
                    mapNamedChildren(rawVcn.network_security_groups, KIND_NSG, 'network_security_group', vcnId)

                    // Subnets, resolving route table + security list references.
                    mapNamedChildren(
                        rawVcn.subnets,
                        KIND_SUBNET,
                        'subnet',
                        vcnId,
                        undefined,
                        (resource, raw) => {
                            const subnetRaw = raw as RawSubnet
                            resource.cidrBlock = subnetRaw.cidr_block || ''
                            if (subnetRaw.dns_label) resource.dnsLabel = subnetRaw.dns_label
                            if (typeof subnetRaw.prohibit_public_ip_on_vnic === 'boolean') {
                                resource.prohibitPublicIpOnVnic = subnetRaw.prohibit_public_ip_on_vnic
                            }
                            const rtId = subnetRaw.route_table_key ? routeTableIds.get(subnetRaw.route_table_key) : undefined
                            if (rtId) resource.routeTableId = rtId
                            const slIds = (subnetRaw.security_list_keys ?? [])
                                .map((slKey) => securityListIds.get(slKey))
                                .filter((id): id is string => typeof id === 'string')
                            if (slIds.length > 0) resource.securityListIds = slIds
                        },
                    )

                    // VCN-specific gateways.
                    const gateways = rawVcn.vcn_specific_gateways ?? {}
                    mapNamedChildren(gateways.internet_gateways, KIND_IGW, 'internet_gateway', vcnId)
                    mapNamedChildren(gateways.nat_gateways, KIND_NGW, 'nat_gateway', vcnId)
                    mapNamedChildren(gateways.service_gateways, KIND_SGW, 'service_gateway', vcnId)
                })

            // Non-VCN-specific gateways (DRG) live at the category level.
            const drgs = category.non_vcn_specific_gateways?.dynamic_routing_gateways
            if (drgs) {
                const drgModelType = modelTypeFor(KIND_DRG)
                if (drgModelType) {
                    Object.keys(drgs)
                        .sort()
                        .forEach((drgKey) => {
                            const rawDrg = drgs[drgKey] ?? {}
                            const drg = OciModelResources.OciDrg.newResource('drg')
                            drg.displayName = rawDrg.display_name || drgKey
                            setNetworkParent(drg)
                            push('drg', drg)
                            bump(counts, 'drg')
                        })
                } else {
                    notes.push(`Skipped ${KIND_DRG}: not in OcdLzResourceMap.`)
                }
            }
        })

    if (categoryCount > 0) {
        notes.push(`Mapped ${vcnCount} VCN(s) across ${categoryCount} network categor(ies) from network.json.`)
    } else if (network) {
        notes.push('network.json present but no network categories found.')
    } else {
        notes.push('No network.json found; only IAM compartments were mapped.')
    }

    return { design, counts, topCompartmentIds, notes }
}

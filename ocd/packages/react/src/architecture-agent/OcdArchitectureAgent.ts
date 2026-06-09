import { OcdDesign, OcdViewLayer, OciModelResources } from '@ocd/model'

export type ArchitectureResourceKind =
    | 'compartment'
    | 'vcn'
    | 'subnet'
    | 'internet_gateway'
    | 'nat_gateway'
    | 'service_gateway'
    | 'load_balancer'
    | 'instance'
    | 'db_system'
    | 'oke_cluster'
    | 'oke_node_pool'
    | 'vault'
    | 'key'
    | 'log_group'
    | 'monitoring_alarm'
    | 'budget'
    | 'policy'
    | 'dynamic_group'

export interface ArchitecturePlanResource {
    readonly kind: ArchitectureResourceKind
    readonly displayName: string
    readonly cidrBlock?: string
    readonly tier?: string
    readonly public?: boolean
    readonly count?: number
    readonly notes?: string
}

export interface ArchitecturePlan {
    readonly title: string
    readonly summary: string
    readonly assumptions: readonly string[]
    readonly resources: readonly ArchitecturePlanResource[]
}

export interface ArchitectureAgentLlmConfig {
    readonly endpoint: string
    readonly apiKey?: string
    readonly model: string
    readonly temperature?: number
}

const SUPPORTED_KINDS: ArchitectureResourceKind[] = [
    'compartment',
    'vcn',
    'subnet',
    'internet_gateway',
    'nat_gateway',
    'service_gateway',
    'load_balancer',
    'instance',
    'db_system',
    'oke_cluster',
    'oke_node_pool',
    'vault',
    'key',
    'log_group',
    'monitoring_alarm',
    'budget',
    'policy',
    'dynamic_group',
]

export function buildArchitectureAgentPrompt(userPrompt: string): string {
    return [
        'You are an OCI architecture design agent for oci-designer-toolkit-next-gen.',
        'Create a practical OCI architecture plan from the user request.',
        'Return only valid JSON. Do not include markdown outside the JSON object.',
        'Schema: {"title": string, "summary": string, "assumptions": string[], "resources": [{"kind": string, "displayName": string, "cidrBlock"?: string, "tier"?: string, "public"?: boolean, "count"?: number, "notes"?: string}]}',
        `Supported resource kinds: ${SUPPORTED_KINDS.join(', ')}.`,
        'Prefer secure private subnets, explicit network tiers, observability, governance tags, and cost controls when relevant.',
        `User request: ${userPrompt}`,
    ].join('\n')
}

export async function callOpenAiCompatibleArchitectureAgent(
    config: ArchitectureAgentLlmConfig,
    userPrompt: string,
    fetchImpl: typeof fetch = fetch,
): Promise<ArchitecturePlan> {
    if (!config.endpoint.trim()) throw new Error('LLM endpoint is required.')
    if (!config.model.trim()) throw new Error('LLM model is required.')
    const response = await fetchImpl(config.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(config.apiKey ? { Authorization: `Bearer ${config.apiKey}` } : {}),
        },
        body: JSON.stringify({
            model: config.model,
            temperature: config.temperature ?? 0.2,
            messages: [
                {
                    role: 'system',
                    content: 'You produce OCI architecture plans as strict JSON for an architecture design tool.',
                },
                {
                    role: 'user',
                    content: buildArchitectureAgentPrompt(userPrompt),
                },
            ],
        }),
    })
    if (!response.ok) throw new Error(`LLM request failed with HTTP ${response.status}.`)
    const payload = await response.json()
    const content = payload?.choices?.[0]?.message?.content ?? payload?.choices?.[0]?.text
    if (typeof content !== 'string' || content.trim() === '') throw new Error('LLM response did not include plan content.')
    return parseArchitecturePlanResponse(content)
}

export function parseArchitecturePlanResponse(response: string): ArchitecturePlan {
    const jsonText = extractJsonObject(response)
    const parsed = JSON.parse(jsonText)
    return normalizePlan(parsed)
}

export function createArchitecturePlanFromPrompt(prompt: string): ArchitecturePlan {
    const text = prompt.toLowerCase()
    if (text.includes('oke') || text.includes('kubernetes') || text.includes('container')) return buildOkePlan(prompt)
    if (text.includes('hub') && text.includes('spoke')) return buildHubSpokePlan(prompt)
    return buildThreeTierPlan(prompt)
}

export function buildDesignFromArchitecturePlan(plan: ArchitecturePlan): OcdDesign {
    const design = OcdDesign.newDesign()
    design.metadata.title = plan.title
    design.metadata.documentation = [plan.summary, ...plan.assumptions.map((a) => `Assumption: ${a}`)].join('\n')
    design.model.oci.resources = {}
    if (design.view.pages[0]) {
        design.view.pages[0].title = plan.title
        design.view.pages[0].layers = []
        design.view.pages[0].coords = []
        design.view.pages[0].connectors = []
    }

    const compartment = OciModelResources.OciCompartment.newResource()
    compartment.displayName = `${plan.title} Compartment`
    compartment.description = plan.summary
    push(design, 'compartment', compartment)
    addLayer(design, compartment.id, true)

    const vcnResource = plan.resources.find((r) => r.kind === 'vcn')
    const vcn = OciModelResources.OciVcn.newResource()
    vcn.displayName = vcnResource?.displayName ?? 'Agent Generated VCN'
    vcn.cidrBlocks = [vcnResource?.cidrBlock ?? '10.40.0.0/16']
    vcn.compartmentId = compartment.id
    push(design, 'vcn', vcn)

    const subnetIds: Record<string, string> = {}
    plan.resources.filter((r) => r.kind === 'subnet').forEach((resource, index) => {
        const subnet = OciModelResources.OciSubnet.newResource()
        subnet.displayName = resource.displayName
        subnet.cidrBlock = resource.cidrBlock ?? `10.40.${index + 1}.0/24`
        subnet.compartmentId = compartment.id
        subnet.vcnId = vcn.id
        subnet.prohibitPublicIpOnVnic = resource.public === false
        subnetIds[resource.tier ?? resource.displayName.toLowerCase()] = subnet.id
        push(design, 'subnet', subnet)
    })

    const firstSubnetId = Object.values(subnetIds)[0] ?? ''
    const publicSubnetId = subnetIds['load-balancer'] ?? subnetIds['public'] ?? firstSubnetId
    const appSubnetId = subnetIds['app'] ?? subnetIds['application'] ?? firstSubnetId
    const dbSubnetId = subnetIds['database'] ?? subnetIds['db'] ?? appSubnetId

    plan.resources.forEach((resource) => {
        switch (resource.kind) {
            case 'internet_gateway': {
                const item = OciModelResources.OciInternetGateway.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.vcnId = vcn.id
                push(design, 'internet_gateway', item)
                break
            }
            case 'nat_gateway': {
                const item = OciModelResources.OciNatGateway.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.vcnId = vcn.id
                push(design, 'nat_gateway', item)
                break
            }
            case 'service_gateway': {
                const item = OciModelResources.OciServiceGateway.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.vcnId = vcn.id
                push(design, 'service_gateway', item)
                break
            }
            case 'load_balancer': {
                const item = OciModelResources.OciLoadBalancer.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.subnetIds = publicSubnetId ? [publicSubnetId] : []
                push(design, 'load_balancer', item)
                break
            }
            case 'instance': {
                const count = Math.max(1, resource.count ?? 1)
                Array.from({ length: count }).forEach((_, index) => {
                    const item = OciModelResources.OciInstance.newResource()
                    item.displayName = count > 1 ? `${resource.displayName} ${index + 1}` : resource.displayName
                    item.compartmentId = compartment.id
                    if (item.createVnicDetails) item.createVnicDetails.subnetId = appSubnetId
                    push(design, 'instance', item)
                })
                break
            }
            case 'db_system': {
                const item = OciModelResources.OciDbSystem.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.subnetId = dbSubnetId
                push(design, 'db_system', item)
                break
            }
            case 'oke_cluster': {
                const item = OciModelResources.OciOkeCluster.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.vcnId = vcn.id
                if (item.endpointConfig) item.endpointConfig.subnetId = appSubnetId
                if (item.options) item.options.serviceLbSubnetIds = publicSubnetId ? [publicSubnetId] : []
                push(design, 'oke_cluster', item)
                break
            }
            case 'oke_node_pool': {
                const item = OciModelResources.OciOkeNodePool.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.subnetIds = appSubnetId ? [appSubnetId] : []
                push(design, 'oke_node_pool', item)
                break
            }
            case 'vault': {
                const item = OciModelResources.OciVault.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                push(design, 'vault', item)
                break
            }
            case 'key': {
                const item = OciModelResources.OciKey.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                push(design, 'key', item)
                break
            }
            case 'log_group': {
                const item = OciModelResources.OciLogGroup.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                push(design, 'log_group', item)
                break
            }
            case 'monitoring_alarm': {
                const item = OciModelResources.OciMonitoringAlarm.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                push(design, 'monitoring_alarm', item)
                break
            }
            case 'budget': {
                const item = OciModelResources.OciBudget.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                push(design, 'budget', item)
                break
            }
            case 'policy': {
                const item = OciModelResources.OciPolicy.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                push(design, 'policy', item)
                break
            }
            case 'dynamic_group': {
                const item = OciModelResources.OciDynamicGroup.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                push(design, 'dynamic_group', item)
                break
            }
            default:
                break
        }
    })

    design.userDefined.architectureAgent = {
        generated: true,
        planTitle: plan.title,
        summary: plan.summary,
        assumptions: [...plan.assumptions],
    }
    return design
}

function normalizePlan(value: any): ArchitecturePlan {
    const resources = Array.isArray(value?.resources) ? value.resources : []
    return {
        title: String(value?.title || 'Agent Generated OCI Architecture'),
        summary: String(value?.summary || 'Generated by the architecture agent.'),
        assumptions: Array.isArray(value?.assumptions) ? value.assumptions.map(String) : [],
        resources: resources
            .filter((resource: any) => SUPPORTED_KINDS.includes(resource?.kind as ArchitectureResourceKind))
            .map((resource: any): ArchitecturePlanResource => ({
                kind: resource.kind,
                displayName: String(resource.displayName || toTitle(resource.kind)),
                cidrBlock: resource.cidrBlock ? String(resource.cidrBlock) : undefined,
                tier: resource.tier ? String(resource.tier) : undefined,
                public: typeof resource.public === 'boolean' ? resource.public : undefined,
                count: Number.isFinite(Number(resource.count)) ? Number(resource.count) : undefined,
                notes: resource.notes ? String(resource.notes) : undefined,
            })),
    }
}

function extractJsonObject(text: string): string {
    const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i)
    const candidate = fenced ? fenced[1] : text
    const start = candidate.indexOf('{')
    const end = candidate.lastIndexOf('}')
    if (start < 0 || end < start) throw new Error('Architecture agent response did not contain a JSON object.')
    return candidate.slice(start, end + 1)
}

function buildThreeTierPlan(prompt: string): ArchitecturePlan {
    const secure = /secure|private|governance|production|prod/.test(prompt.toLowerCase())
    return {
        title: 'Agent Three-Tier Web Architecture',
        summary: 'Load-balanced web application with private application and database tiers.',
        assumptions: [
            'CIDR ranges are placeholders and should be adjusted to the target tenancy network plan.',
            secure ? 'Private subnets, observability, and budget controls are included by default.' : 'Public access is limited to the load-balancer tier.',
        ],
        resources: [
            { kind: 'vcn', displayName: 'Agent App VCN', cidrBlock: '10.40.0.0/16' },
            { kind: 'subnet', displayName: 'Public Load Balancer Subnet', cidrBlock: '10.40.1.0/24', tier: 'load-balancer', public: true },
            { kind: 'subnet', displayName: 'Private App Subnet', cidrBlock: '10.40.2.0/24', tier: 'app', public: false },
            { kind: 'subnet', displayName: 'Private Database Subnet', cidrBlock: '10.40.3.0/24', tier: 'database', public: false },
            { kind: 'internet_gateway', displayName: 'Internet Gateway' },
            { kind: 'nat_gateway', displayName: 'NAT Gateway' },
            { kind: 'service_gateway', displayName: 'Service Gateway' },
            { kind: 'load_balancer', displayName: 'Public Load Balancer' },
            { kind: 'instance', displayName: 'Application Server', count: 2 },
            { kind: 'db_system', displayName: 'Application Database' },
            { kind: 'log_group', displayName: 'Application Log Group' },
            { kind: 'monitoring_alarm', displayName: 'Application Health Alarm' },
            { kind: 'budget', displayName: 'Application Budget' },
        ],
    }
}

function buildOkePlan(_prompt: string): ArchitecturePlan {
    return {
        title: 'Agent OKE Platform Architecture',
        summary: 'Secure OKE platform with private worker and pod networking, ingress, vault, logging, and monitoring.',
        assumptions: [
            'The cluster uses VCN-native networking with dedicated pod and worker subnets.',
            'Ingress is isolated to the load-balancer subnet; worker and pod subnets remain private.',
        ],
        resources: [
            { kind: 'vcn', displayName: 'OKE Platform VCN', cidrBlock: '10.50.0.0/16' },
            { kind: 'subnet', displayName: 'OKE Load Balancer Subnet', cidrBlock: '10.50.1.0/24', tier: 'load-balancer', public: true },
            { kind: 'subnet', displayName: 'OKE Worker Subnet', cidrBlock: '10.50.2.0/24', tier: 'app', public: false },
            { kind: 'subnet', displayName: 'OKE Pod Subnet', cidrBlock: '10.50.3.0/24', tier: 'pod', public: false },
            { kind: 'internet_gateway', displayName: 'OKE Internet Gateway' },
            { kind: 'nat_gateway', displayName: 'OKE NAT Gateway' },
            { kind: 'service_gateway', displayName: 'OKE Service Gateway' },
            { kind: 'load_balancer', displayName: 'OKE Ingress Load Balancer' },
            { kind: 'oke_cluster', displayName: 'OKE Enhanced Cluster' },
            { kind: 'oke_node_pool', displayName: 'OKE Private Node Pool' },
            { kind: 'dynamic_group', displayName: 'OKE Workload Identity Dynamic Group' },
            { kind: 'policy', displayName: 'OKE Workload Identity Policy' },
            { kind: 'vault', displayName: 'OKE Vault' },
            { kind: 'key', displayName: 'OKE Encryption Key' },
            { kind: 'log_group', displayName: 'OKE Log Group' },
            { kind: 'monitoring_alarm', displayName: 'OKE Health Alarm' },
            { kind: 'budget', displayName: 'OKE Platform Budget' },
        ],
    }
}

function buildHubSpokePlan(_prompt: string): ArchitecturePlan {
    return {
        title: 'Agent Hub-Spoke Network Architecture',
        summary: 'Central hub network with two private workload spokes and shared egress controls.',
        assumptions: [
            'DRG and LPG details should be finalized against the target region and connectivity model.',
            'Spoke workloads are private by default and route egress through the hub.',
        ],
        resources: [
            { kind: 'vcn', displayName: 'Hub VCN', cidrBlock: '10.60.0.0/16' },
            { kind: 'subnet', displayName: 'Hub Transit Subnet', cidrBlock: '10.60.1.0/24', tier: 'transit', public: false },
            { kind: 'subnet', displayName: 'Spoke A App Subnet', cidrBlock: '10.61.1.0/24', tier: 'app', public: false },
            { kind: 'subnet', displayName: 'Spoke B App Subnet', cidrBlock: '10.62.1.0/24', tier: 'app', public: false },
            { kind: 'nat_gateway', displayName: 'Hub NAT Gateway' },
            { kind: 'service_gateway', displayName: 'Hub Service Gateway' },
            { kind: 'log_group', displayName: 'Network Log Group' },
            { kind: 'monitoring_alarm', displayName: 'Network Health Alarm' },
            { kind: 'budget', displayName: 'Network Budget' },
        ],
    }
}

function push(design: OcdDesign, key: string, resource: object): void {
    if (!Object.hasOwn(design.model.oci.resources, key)) design.model.oci.resources[key] = []
    design.model.oci.resources[key].push(resource)
}

function addLayer(design: OcdDesign, compartmentId: string, selected: boolean): void {
    const layer: OcdViewLayer = {
        id: compartmentId,
        class: 'oci-compartment',
        visible: true,
        selected,
    }
    design.view.pages.forEach((page) => page.layers.push(layer))
}

function toTitle(value: string): string {
    return value.split('_').map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`).join(' ')
}

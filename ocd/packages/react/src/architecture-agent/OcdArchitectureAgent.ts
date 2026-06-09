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
    | 'api_gateway'
    | 'functions_application'
    | 'functions_function'
    | 'web_app_firewall'
    | 'data_safe_target_database'
    | 'data_safe_security_assessment'
    | 'cloud_guard_target'
    | 'log_analytics_log_group'
    | 'service_connector'

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
    'api_gateway',
    'functions_application',
    'functions_function',
    'web_app_firewall',
    'data_safe_target_database',
    'data_safe_security_assessment',
    'cloud_guard_target',
    'log_analytics_log_group',
    'service_connector',
]

export function buildArchitectureAgentPrompt(userPrompt: string): string {
    return [
        'You are an OCI architecture design agent for oci-designer-toolkit-next-gen.',
        'Create a practical OCI architecture plan from the user request.',
        'Return only valid JSON. Do not include markdown outside the JSON object.',
        'Schema: {"title": string, "summary": string, "assumptions": string[], "resources": [{"kind": string, "displayName": string, "cidrBlock"?: string, "tier"?: string, "public"?: boolean, "count"?: number, "notes"?: string}]}',
        `Supported resource kinds: ${SUPPORTED_KINDS.join(', ')}.`,
        'Prefer secure private subnets, explicit network tiers, observability, governance tags, and cost controls when relevant.',
        'For agentic AI or Zero Trust requests, separate reasoning from execution: reasoning proposes, policy decides, and a scoped identity executes.',
        'For agentic AI or Zero Trust requests, include API Gateway, Functions policy gate, dynamic group, IAM policy, Vault, Data Safe, Cloud Guard, Logging Analytics, and Service Connector resources when relevant.',
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
    if (text.includes('zero trust') || text.includes('agentic') || text.includes('policy gate') || text.includes('scoped identity')) return buildAgenticZeroTrustPlan(prompt)
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
    let loadBalancerId = ''
    let functionsApplicationId = ''
    let dbSystemId = ''

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
                loadBalancerId = item.id
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
                dbSystemId = item.id
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
            case 'api_gateway': {
                const item = OciModelResources.OciApiGateway.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.endpointType = resource.public ? 'PUBLIC' : 'PRIVATE'
                item.subnetId = publicSubnetId || appSubnetId
                push(design, 'api_gateway', item)
                break
            }
            case 'functions_application': {
                const item = OciModelResources.OciFunctionsApplication.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.subnetIds = appSubnetId ? [appSubnetId] : []
                if (item.traceConfig) item.traceConfig.isEnabled = true
                push(design, 'functions_application', item)
                functionsApplicationId = item.id
                break
            }
            case 'functions_function': {
                const item = OciModelResources.OciFunctionsFunction.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.applicationId = functionsApplicationId
                item.memoryInMbs = '512'
                item.timeoutInSeconds = 60
                push(design, 'functions_function', item)
                break
            }
            case 'web_app_firewall': {
                const item = OciModelResources.OciWebAppFirewall.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.backendType = 'LOAD_BALANCER'
                item.loadBalancerId = loadBalancerId
                push(design, 'web_app_firewall', item)
                break
            }
            case 'data_safe_target_database': {
                const item = OciModelResources.OciDataSafeTargetDatabase.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.description = resource.notes ?? 'Data Safe target for agentic architecture evidence.'
                if (item.databaseDetails) {
                    item.databaseDetails.databaseType = 'DATABASE_CLOUD_SERVICE'
                    item.databaseDetails.infrastructureType = 'ORACLE_CLOUD'
                    item.databaseDetails.dbSystemId = dbSystemId
                }
                push(design, 'data_safe_target_database', item)
                break
            }
            case 'data_safe_security_assessment': {
                const item = OciModelResources.OciDataSafeSecurityAssessment.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                push(design, 'data_safe_security_assessment', item)
                break
            }
            case 'cloud_guard_target': {
                const item = OciModelResources.OciCloudGuardTarget.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.description = resource.notes ?? 'Cloud Guard target for posture and responder evidence.'
                item.targetResourceId = compartment.id
                item.targetResourceType = 'COMPARTMENT'
                push(design, 'cloud_guard_target', item)
                break
            }
            case 'log_analytics_log_group': {
                const item = OciModelResources.OciLogAnalyticsLogGroup.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.description = resource.notes ?? 'Logging Analytics group for agent action and policy decision evidence.'
                item.namespace = '<LA_NAMESPACE>'
                push(design, 'log_analytics_log_group', item)
                break
            }
            case 'service_connector': {
                const item = OciModelResources.OciServiceConnector.newResource()
                item.displayName = resource.displayName
                item.compartmentId = compartment.id
                item.description = resource.notes ?? 'Routes audit, logging, and policy decision events to evidence storage and SIEM.'
                push(design, 'service_connector', item)
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

function buildAgenticZeroTrustPlan(_prompt: string): ArchitecturePlan {
    return {
        title: 'Agentic Zero Trust Architecture',
        summary: 'OCI-native architecture that separates AI reasoning from action execution through a deterministic policy gate, scoped identity, and continuous evidence loop.',
        assumptions: [
            'Reasoning proposes actions but holds no standing privilege.',
            'A Functions policy gate validates identity, data class, tool, destination, and approval tier before execution.',
            'Execution uses short-lived resource principals, Vault-backed secrets, and complete Audit, Logging, and Logging Analytics evidence.',
            'ZPR and Security Zones are modeled as required controls because they are not editable designer resources yet.',
        ],
        resources: [
            { kind: 'vcn', displayName: 'Agentic Zero Trust VCN', cidrBlock: '10.70.0.0/16' },
            { kind: 'subnet', displayName: 'Authenticated API Gateway Subnet', cidrBlock: '10.70.1.0/24', tier: 'load-balancer', public: true },
            { kind: 'subnet', displayName: 'Private Agent Sandbox Subnet', cidrBlock: '10.70.2.0/24', tier: 'app', public: false },
            { kind: 'subnet', displayName: 'Private Data Control Subnet', cidrBlock: '10.70.3.0/24', tier: 'database', public: false },
            { kind: 'internet_gateway', displayName: 'Controlled Internet Gateway' },
            { kind: 'nat_gateway', displayName: 'Agent Egress NAT Gateway' },
            { kind: 'service_gateway', displayName: 'Private OCI Service Gateway' },
            { kind: 'load_balancer', displayName: 'Agent Tool Ingress Load Balancer' },
            { kind: 'web_app_firewall', displayName: 'Agent Tool Web Application Firewall' },
            { kind: 'api_gateway', displayName: 'Agent Tool API Gateway', public: true },
            { kind: 'functions_application', displayName: 'Policy Gate Functions Application' },
            { kind: 'functions_function', displayName: 'Deterministic Policy Decision Function' },
            { kind: 'oke_cluster', displayName: 'Reasoning Sandbox OKE Cluster' },
            { kind: 'oke_node_pool', displayName: 'Private Agent Runtime Node Pool' },
            { kind: 'dynamic_group', displayName: 'Scoped Agent Execution Dynamic Group' },
            { kind: 'policy', displayName: 'Least Agency Execution Policy' },
            { kind: 'vault', displayName: 'Agent Secret Vault' },
            { kind: 'key', displayName: 'Agent Evidence Encryption Key' },
            { kind: 'db_system', displayName: 'Protected Enterprise Database' },
            { kind: 'data_safe_target_database', displayName: 'Data Safe Protected Database Target' },
            { kind: 'data_safe_security_assessment', displayName: 'Data Safe Security Assessment' },
            { kind: 'cloud_guard_target', displayName: 'Agentic Compartment Cloud Guard Target' },
            { kind: 'log_group', displayName: 'Agent Action Log Group' },
            { kind: 'log_analytics_log_group', displayName: 'Agent Evidence Analytics Log Group' },
            { kind: 'service_connector', displayName: 'Evidence Service Connector' },
            { kind: 'monitoring_alarm', displayName: 'Policy Gate Health Alarm' },
            { kind: 'budget', displayName: 'Agentic AI Cost Guardrail Budget' },
        ],
    }
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

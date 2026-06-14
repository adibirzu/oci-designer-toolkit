import { describe, expect, it, vi } from 'vitest'
import {
    buildArchitectureAgentPrompt,
    buildArchitectureAgentReadiness,
    buildArchitectureTerraformPreview,
    buildDesignFromArchitecturePlan,
    buildArchitectureRelationGraph,
    callOpenAiCompatibleArchitectureAgent,
    createArchitecturePlanFromPrompt,
    isBlockedLlmHost,
    parseArchitecturePlanResponse,
    validateArchitecturePlan,
} from '../OcdArchitectureAgent'

describe('OcdArchitectureAgent', () => {
    it('creates a deterministic OKE architecture plan from a chat prompt', () => {
        const plan = createArchitecturePlanFromPrompt('Create a secure OKE platform with a private app tier, vault, logging, and monitoring.')

        expect(plan.title).toContain('OKE')
        expect(plan.resources.map((resource) => resource.kind)).toEqual(expect.arrayContaining(['vcn', 'subnet', 'oke_cluster', 'oke_node_pool', 'vault', 'log_group', 'monitoring_alarm']))
        expect(plan.resources.find((resource) => resource.kind === 'subnet' && resource.displayName.includes('Pod'))?.public).toBe(false)
        expect(plan.assumptions.length).toBeGreaterThan(0)
    })

    it('creates an agentic zero trust plan with execution and evidence controls', () => {
        const plan = createArchitecturePlanFromPrompt('Create an agentic Zero Trust OCI architecture with a policy gate and scoped identity.')
        const design = buildDesignFromArchitecturePlan(plan)

        expect(plan.title).toContain('Zero Trust')
        expect(plan.resources.map((resource) => resource.kind)).toEqual(expect.arrayContaining([
            'api_gateway',
            'functions_application',
            'functions_function',
            'dynamic_group',
            'policy',
            'vault',
            'cloud_guard_target',
            'data_safe_target_database',
            'log_analytics_log_group',
            'service_connector',
        ]))
        expect(design.model.oci.resources.api_gateway).toHaveLength(1)
        expect(design.model.oci.resources.functions_application).toHaveLength(1)
        expect(design.model.oci.resources.functions_function).toHaveLength(1)
        expect(design.model.oci.resources.cloud_guard_target).toHaveLength(1)
        expect(design.model.oci.resources.service_connector).toHaveLength(1)
    })

    it('parses JSON returned by an LLM even when wrapped in markdown fences', () => {
        const response = [
            '```json',
            JSON.stringify({
                title: 'Generated Web App',
                summary: 'A load-balanced application architecture.',
                assumptions: ['Private app subnet'],
                resources: [
                    { kind: 'vcn', displayName: 'App VCN', cidrBlock: '10.80.0.0/16' },
                    { kind: 'subnet', displayName: 'Public LB Subnet', cidrBlock: '10.80.1.0/24', tier: 'load-balancer', public: true },
                    { kind: 'load_balancer', displayName: 'Public Load Balancer' },
                    { kind: 'instance', displayName: 'App Server' },
                    { kind: 'db_system', displayName: 'App Database' },
                ],
            }),
            '```',
        ].join('\n')

        const plan = parseArchitecturePlanResponse(response)

        expect(plan.title).toBe('Generated Web App')
        expect(plan.resources).toHaveLength(5)
        expect(plan.resources[1].kind).toBe('subnet')
    })

    it('builds an editable OCI design from an architecture plan', () => {
        const plan = createArchitecturePlanFromPrompt('Build a three tier web application with load balancer, app servers, database, budget, and logging.')
        const design = buildDesignFromArchitecturePlan(plan)

        expect(design.metadata.title).toBe(plan.title)
        expect(design.model.oci.resources.compartment).toHaveLength(1)
        expect(design.model.oci.resources.vcn).toHaveLength(1)
        expect(design.model.oci.resources.subnet.length).toBeGreaterThanOrEqual(3)
        expect(design.model.oci.resources.load_balancer).toHaveLength(1)
        expect(design.model.oci.resources.instance).toHaveLength(2)
        expect(design.model.oci.resources.db_system).toHaveLength(1)
        expect(design.model.oci.resources.log_group).toHaveLength(1)
        expect(design.userDefined.architectureAgent.planTitle).toBe(plan.title)
    })

    it('derives parent and association relations from an agent-generated design', () => {
        const plan = createArchitecturePlanFromPrompt('Create an agentic Zero Trust OCI architecture with a policy gate and scoped identity.')
        const design = buildDesignFromArchitecturePlan(plan)

        const graph = buildArchitectureRelationGraph(design)

        expect(graph.nodes.length).toBeGreaterThan(0)
        expect(graph.edges.some((edge) => edge.kind === 'parent' && edge.label.includes('contained by'))).toBe(true)
        expect(graph.edges.some((edge) => edge.kind === 'association')).toBe(true)
        expect(new Set(graph.edges.map((edge) => edge.id)).size).toBe(graph.edges.length)
    })

    it('blocks invalid or tenant-specific architecture plans before canvas or deployment use', () => {
        // Assemble OCID-shaped strings at runtime so the dangerous literal never appears
        // verbatim in source (keeps the repo redaction gate green) while still exercising
        // the validator's SENSITIVE_TEXT_PATTERN at runtime. See secret-scanner fixture rule.
        const syntheticOcid = (type: string): string => ['ocid1', type, 'oc1', '', 'example'].join('.')
        const validation = validateArchitecturePlan({
            title: 'Bad Plan',
            summary: 'Contains invalid network and tenant-specific values.',
            assumptions: [`Use ${syntheticOcid('compartment')} in docs`],
            resources: [
                { kind: 'vcn', displayName: 'Bad VCN', cidrBlock: 'not-a-cidr' },
                { kind: 'subnet', displayName: `Sensitive subnet ${syntheticOcid('subnet')}`, cidrBlock: '10.0.1.0/24' },
            ],
        })

        expect(validation.status).toBe('blocked')
        expect(validation.errors).toEqual(expect.arrayContaining([
            expect.stringContaining('Invalid CIDR'),
            expect.stringContaining('sensitive OCI identifiers'),
        ]))
    })

    it('produces a deployment readiness envelope for generated designs', () => {
        const plan = createArchitecturePlanFromPrompt('Create a secure OKE platform with a private app tier, vault, logging, and monitoring.')
        const design = buildDesignFromArchitecturePlan(plan)

        const readiness = buildArchitectureAgentReadiness(plan, design)

        expect(readiness.status).toBe('ready')
        expect(readiness.resourceCount).toBeGreaterThan(0)
        expect(readiness.relationCount).toBeGreaterThan(0)
        expect(readiness.checks.map((check) => check.id)).toEqual(expect.arrayContaining([
            'plan-schema',
            'relation-graph',
            'terraform-contract',
            'deployment-safety',
        ]))
        expect(readiness.nextActions).toContain('Generate Terraform package and run plan before apply.')
    })

    it('builds a Terraform package preview without requiring a tenancy call', () => {
        const plan = createArchitecturePlanFromPrompt('Build a three tier web application with load balancer, app servers, database, budget, and logging.')
        const preview = buildArchitectureTerraformPreview(plan)

        expect(preview.fileCount).toBeGreaterThan(0)
        expect(preview.files.some((file) => file.endsWith('.tf'))).toBe(true)
        expect(preview.resourceCount).toBeGreaterThan(0)
        expect(preview.ready).toBe(true)
    })

    it('calls an OpenAI-compatible endpoint with a strict JSON architecture prompt', async () => {
        const fetchMock = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({
                choices: [{
                    message: {
                        content: JSON.stringify({
                            title: 'LLM Architecture',
                            summary: 'Generated from LLM.',
                            assumptions: ['Use private subnets'],
                            resources: [
                                { kind: 'vcn', displayName: 'LLM VCN', cidrBlock: '10.90.0.0/16' },
                                { kind: 'subnet', displayName: 'App Subnet', cidrBlock: '10.90.1.0/24', public: false },
                            ],
                        }),
                    },
                }],
            }),
        })

        const plan = await callOpenAiCompatibleArchitectureAgent(
            {
                endpoint: 'https://llm.example.test/v1/chat/completions',
                apiKey: 'test-key',
                model: 'test-model',
            },
            'Create a private app VCN.',
            fetchMock as unknown as typeof fetch,
        )

        expect(plan.title).toBe('LLM Architecture')
        expect(fetchMock).toHaveBeenCalledWith(
            'https://llm.example.test/v1/chat/completions',
            expect.objectContaining({
                method: 'POST',
                headers: expect.objectContaining({
                    Authorization: 'Bearer test-key',
                    'Content-Type': 'application/json',
                }),
            }),
        )
        expect(buildArchitectureAgentPrompt('Create a private app VCN.')).toContain('Return only valid JSON')
    })

    it('blocks LLM endpoints that resolve to internal or metadata IPv4 hosts (W5-S2)', () => {
        expect(isBlockedLlmHost('169.254.169.254')).toBe(true) // cloud metadata
        expect(isBlockedLlmHost('10.1.2.3')).toBe(true) // 10.0.0.0/8
        expect(isBlockedLlmHost('172.16.0.1')).toBe(true) // 172.16.0.0/12
        expect(isBlockedLlmHost('192.168.1.1')).toBe(true) // 192.168.0.0/16
        expect(isBlockedLlmHost('0.0.0.0')).toBe(true) // unspecified
        expect(isBlockedLlmHost('8.8.8.8')).toBe(false) // public
        expect(isBlockedLlmHost('api.openai.com')).toBe(false) // non-IP hostname
        // Loopback is left to the caller's explicit dev allowance; the helper
        // itself does not treat 127.0.0.1 as a blocked internal target.
        expect(isBlockedLlmHost('127.0.0.1')).toBe(false)
    })

    it('rejects an https endpoint pointed at the cloud metadata IP (W5-S2)', async () => {
        const fetchMock = vi.fn()

        await expect(callOpenAiCompatibleArchitectureAgent(
            {
                endpoint: 'https://169.254.169.254/latest/meta-data',
                model: 'test-model',
            },
            'Create a private app VCN.',
            fetchMock as unknown as typeof fetch,
        )).rejects.toThrow(/non-routable or internal address/)
        expect(fetchMock).not.toHaveBeenCalled()
    })

    it('allows an internal endpoint when the operator explicitly opts in (W5-S2)', async () => {
        const fetchMock = vi.fn().mockResolvedValue({
            ok: true,
            headers: { get: () => null },
            json: async () => ({
                choices: [{
                    message: {
                        content: JSON.stringify({
                            title: 'Internal LLM Architecture',
                            summary: 'Generated from an internal endpoint.',
                            assumptions: [],
                            resources: [
                                { kind: 'vcn', displayName: 'Internal VCN', cidrBlock: '10.91.0.0/16' },
                                { kind: 'subnet', displayName: 'Internal Subnet', cidrBlock: '10.91.1.0/24', public: false },
                            ],
                        }),
                    },
                }],
            }),
        })

        const plan = await callOpenAiCompatibleArchitectureAgent(
            {
                endpoint: 'https://10.1.2.3/v1/chat/completions',
                model: 'test-model',
                allowInternalEndpoints: true,
            },
            'Create a private app VCN.',
            fetchMock as unknown as typeof fetch,
        )

        expect(plan.title).toBe('Internal LLM Architecture')
        expect(fetchMock).toHaveBeenCalled()
    })

    it('rejects an LLM response whose Content-Length exceeds the size cap (W5-S2)', async () => {
        const fetchMock = vi.fn().mockResolvedValue({
            ok: true,
            headers: { get: (name: string) => (name.toLowerCase() === 'content-length' ? String(20 * 1024 * 1024) : null) },
            json: async () => ({ choices: [{ message: { content: '{}' } }] }),
        })

        await expect(callOpenAiCompatibleArchitectureAgent(
            {
                endpoint: 'https://llm.example.test/v1/chat/completions',
                model: 'test-model',
            },
            'Create a private app VCN.',
            fetchMock as unknown as typeof fetch,
        )).rejects.toThrow(/too large/)
    })

    it('extracts the valid plan even when a decoy object precedes it (W5-S4)', () => {
        const response = [
            'Here is some reasoning and a decoy object first:',
            JSON.stringify({ tool: 'shell', command: 'rm -rf /', note: 'not a plan' }),
            'and now the actual architecture plan:',
            JSON.stringify({
                title: 'Recovered Plan',
                summary: 'A load-balanced application architecture.',
                assumptions: ['Private app subnet'],
                resources: [
                    { kind: 'vcn', displayName: 'App VCN', cidrBlock: '10.85.0.0/16' },
                    { kind: 'subnet', displayName: 'Private App Subnet', cidrBlock: '10.85.1.0/24', public: false },
                    { kind: 'load_balancer', displayName: 'Public Load Balancer' },
                ],
            }),
        ].join('\n')

        const plan = parseArchitecturePlanResponse(response)

        expect(plan.title).toBe('Recovered Plan')
        expect(plan.resources.map((resource) => resource.kind)).toEqual(
            expect.arrayContaining(['vcn', 'subnet', 'load_balancer']),
        )
    })

    it('throws when no schema-valid plan object is present in the response (W5-S4)', () => {
        const response = 'Sorry, I cannot help. {"tool": "noop"} {"unrelated": true}'

        expect(() => parseArchitecturePlanResponse(response)).toThrow()
    })
})

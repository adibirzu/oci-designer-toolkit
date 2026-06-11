import { describe, expect, it, vi } from 'vitest'
import {
    buildArchitectureAgentPrompt,
    buildDesignFromArchitecturePlan,
    callOpenAiCompatibleArchitectureAgent,
    createArchitecturePlanFromPrompt,
    parseArchitecturePlanResponse,
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
})

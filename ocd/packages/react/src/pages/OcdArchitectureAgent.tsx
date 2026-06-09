import { useMemo, useState } from 'react'
import { ConsolePageProps } from '../types/Console'
import { OcdDocument } from '../components/OcdDocument'
import {
    ArchitectureAgentLlmConfig,
    ArchitecturePlan,
    buildDesignFromArchitecturePlan,
    callOpenAiCompatibleArchitectureAgent,
    createArchitecturePlanFromPrompt,
} from '../architecture-agent/OcdArchitectureAgent'
import { OcdConsoleConfig } from '../components/OcdConsoleConfiguration'
import { agentPromptTemplates, zeroTrustControls, zeroTrustFlowSteps } from '../security/OcdZeroTrustReference'

const defaultPrompt = agentPromptTemplates[0].prompt

const evidenceResourceKinds = new Set([
    'cloud_guard_target',
    'data_safe_security_assessment',
    'data_safe_target_database',
    'log_analytics_log_group',
    'log_group',
    'monitoring_alarm',
    'service_connector',
])

const executionResourceKinds = new Set([
    'api_gateway',
    'functions_application',
    'functions_function',
    'dynamic_group',
    'policy',
    'vault',
])

const OcdArchitectureAgent = ({ ocdConsoleConfig, setOcdConsoleConfig, ocdDocument, setOcdDocument }: ConsolePageProps): JSX.Element => {
    const [prompt, setPrompt] = useState(defaultPrompt)
    const [endpoint, setEndpoint] = useState('')
    const [model, setModel] = useState('')
    const [apiKey, setApiKey] = useState('')
    const [plan, setPlan] = useState<ArchitecturePlan>(() => createArchitecturePlanFromPrompt(defaultPrompt))
    const [status, setStatus] = useState('Local planner ready')
    const [busy, setBusy] = useState(false)
    const providerLabel = useMemo(() => endpoint.trim() && model.trim() ? 'LLM' : 'Local', [endpoint, model])
    const planMetrics = useMemo(() => ({
        resources: plan.resources.length,
        evidence: plan.resources.filter((resource) => evidenceResourceKinds.has(resource.kind)).length,
        execution: plan.resources.filter((resource) => executionResourceKinds.has(resource.kind)).length,
    }), [plan])

    const onGenerate = async () => {
        setBusy(true)
        setStatus(`${providerLabel} agent thinking`)
        try {
            const nextPlan = endpoint.trim() && model.trim()
                ? await callOpenAiCompatibleArchitectureAgent({ endpoint, model, apiKey } as ArchitectureAgentLlmConfig, prompt)
                : createArchitecturePlanFromPrompt(prompt)
            setPlan(nextPlan)
            setStatus(`${providerLabel} plan ready`)
        } catch (error) {
            setStatus(error instanceof Error ? error.message : 'Architecture agent failed')
        } finally {
            setBusy(false)
        }
    }

    const onApply = () => {
        const clone = OcdDocument.clone(ocdDocument)
        clone.design = buildDesignFromArchitecturePlan(plan)
        clone.autoLayout(clone.getActivePage().id, true, ocdConsoleConfig.config.defaultAutoArrangeStyle ?? 'dynamic-columns')
        setOcdDocument(clone)
        const nextConfig = OcdConsoleConfig.clone(ocdConsoleConfig)
        nextConfig.config.displayPage = 'designer'
        setOcdConsoleConfig(nextConfig)
    }

    return (
        <div className='ocd-architecture-agent-page'>
            <header className='ocd-architecture-agent-header'>
                <div className='ocd-agent-title-block'>
                    <span className='ocd-agent-kicker'>Oracle Cloud Infrastructure</span>
                    <h1>Architecture Agent</h1>
                    <p>{status}. Generate editable OCI designs from a chat prompt, with zero-trust controls ready for review.</p>
                </div>
                <button className='ocd-agent-primary' disabled={busy} onClick={onGenerate} type='button'>
                    Generate plan
                </button>
            </header>
            <section className='ocd-agent-flow' aria-label='Agentic zero trust flow'>
                {zeroTrustFlowSteps.map((step, index) => (
                    <article className='ocd-agent-flow-step' key={step.title}>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <h2>{step.title}</h2>
                        <p>{step.summary}</p>
                        <div>
                            {step.controls.map((control) => <b key={control}>{control}</b>)}
                        </div>
                    </article>
                ))}
            </section>
            <div className='ocd-architecture-agent-grid'>
                <section className='ocd-architecture-agent-panel'>
                    <div className='ocd-agent-section-heading'>
                        <h2>Chat</h2>
                        <span>{providerLabel} planner</span>
                    </div>
                    <div className='ocd-agent-template-row' aria-label='Architecture prompt templates'>
                        {agentPromptTemplates.map((template) => (
                            <button
                                key={template.label}
                                onClick={() => setPrompt(template.prompt)}
                                type='button'
                            >
                                {template.label}
                            </button>
                        ))}
                    </div>
                    <textarea
                        aria-label='Architecture request'
                        className='ocd-agent-prompt'
                        onChange={(event) => setPrompt(event.target.value)}
                        value={prompt}
                    />
                    <div className='ocd-agent-provider-grid'>
                        <label>
                            Endpoint
                            <input
                                aria-label='LLM endpoint'
                                onChange={(event) => setEndpoint(event.target.value)}
                                placeholder='https://api.example.com/v1/chat/completions'
                                type='url'
                                value={endpoint}
                            />
                        </label>
                        <label>
                            Model
                            <input
                                aria-label='LLM model'
                                onChange={(event) => setModel(event.target.value)}
                                placeholder='model name'
                                type='text'
                                value={model}
                            />
                        </label>
                        <label>
                            API Key
                            <input
                                aria-label='LLM API key'
                                onChange={(event) => setApiKey(event.target.value)}
                                placeholder='kept in memory only'
                                type='password'
                                value={apiKey}
                            />
                        </label>
                    </div>
                    <div className='ocd-agent-control-panel' aria-label='Zero trust controls'>
                        <h2>Control model</h2>
                        {zeroTrustControls.slice(0, 3).map((control) => (
                            <article key={control.principle}>
                                <h3>{control.principle}</h3>
                                <p>{control.agenticExtension}</p>
                                <div>{control.ociControls.map((item) => <span key={item}>{item}</span>)}</div>
                            </article>
                        ))}
                    </div>
                </section>
                <section className='ocd-architecture-agent-panel'>
                    <div className='ocd-agent-plan-header'>
                        <div>
                            <h2>{plan.title}</h2>
                            <p>{plan.summary}</p>
                        </div>
                        <button className='ocd-agent-apply' onClick={onApply} type='button'>Apply to designer</button>
                    </div>
                    <div className='ocd-agent-plan-metrics' aria-label='Generated plan metrics'>
                        <article>
                            <span>Resources</span>
                            <strong>{planMetrics.resources}</strong>
                        </article>
                        <article>
                            <span>Execution controls</span>
                            <strong>{planMetrics.execution}</strong>
                        </article>
                        <article>
                            <span>Evidence controls</span>
                            <strong>{planMetrics.evidence}</strong>
                        </article>
                    </div>
                    <div className='ocd-agent-assumptions'>
                        {plan.assumptions.map((assumption) => <span key={assumption}>{assumption}</span>)}
                    </div>
                    <table className='ocd-agent-resource-table'>
                        <thead>
                            <tr>
                                <th>Resource</th>
                                <th>Type</th>
                                <th>Tier</th>
                                <th>CIDR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plan.resources.map((resource, index) => (
                                <tr key={`${resource.kind}-${resource.displayName}-${index}`}>
                                    <td>{resource.displayName}</td>
                                    <td>{resource.kind}</td>
                                    <td>{resource.tier ?? (resource.public ? 'public' : 'private')}</td>
                                    <td>{resource.cidrBlock ?? '-'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='ocd-agent-evidence-panel' aria-label='Evidence outputs'>
                        {zeroTrustControls.slice(3).map((control) => (
                            <article key={control.principle}>
                                <h3>{control.principle}</h3>
                                <ul>
                                    {control.evidence.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default OcdArchitectureAgent

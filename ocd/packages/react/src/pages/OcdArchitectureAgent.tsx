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

const defaultPrompt = 'Create a secure three tier OCI web application with public load balancing, private app servers, private database, logging, monitoring, and budget controls.'

const OcdArchitectureAgent = ({ ocdConsoleConfig, setOcdConsoleConfig, ocdDocument, setOcdDocument }: ConsolePageProps): JSX.Element => {
    const [prompt, setPrompt] = useState(defaultPrompt)
    const [endpoint, setEndpoint] = useState('')
    const [model, setModel] = useState('')
    const [apiKey, setApiKey] = useState('')
    const [plan, setPlan] = useState<ArchitecturePlan>(() => createArchitecturePlanFromPrompt(defaultPrompt))
    const [status, setStatus] = useState('Local planner ready')
    const [busy, setBusy] = useState(false)
    const providerLabel = useMemo(() => endpoint.trim() && model.trim() ? 'LLM' : 'Local', [endpoint, model])

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
        ocdConsoleConfig.config.displayPage = 'designer'
        setOcdConsoleConfig(OcdConsoleConfig.clone(ocdConsoleConfig))
    }

    return (
        <div className='ocd-architecture-agent-page'>
            <header className='ocd-architecture-agent-header'>
                <div>
                    <h1>Architecture Agent</h1>
                    <p>{status}</p>
                </div>
                <button className='ocd-agent-primary' disabled={busy} onClick={onGenerate} type='button'>
                    Generate Plan
                </button>
            </header>
            <div className='ocd-architecture-agent-grid'>
                <section className='ocd-architecture-agent-panel'>
                    <h2>Chat</h2>
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
                </section>
                <section className='ocd-architecture-agent-panel'>
                    <div className='ocd-agent-plan-header'>
                        <div>
                            <h2>{plan.title}</h2>
                            <p>{plan.summary}</p>
                        </div>
                        <button className='ocd-agent-apply' onClick={onApply} type='button'>Apply to Designer</button>
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
                </section>
            </div>
        </div>
    )
}

export default OcdArchitectureAgent

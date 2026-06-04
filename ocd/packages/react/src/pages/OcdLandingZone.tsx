/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** Landing Zone Next Gen (LZNG) wizard page. A modern, self-styled, 5-step product
** shell rendered inside the OCD console body:
**
**   - dark OCI header bar with layout toggles (LzngHeader)
**   - editable title + Download .drawio / Download JSON / Reset actions
**   - clickable 5-step stepper (LzngStepper)
**   - two-column body: left = step content, right = live React-Flow network
**     diagram derived from the full Landing Zone config (LzngNetworkDiagram)
**
** The page is theme-independent: all styling lives in css/ocd-lzng.css scoped
** under `.ocd-lzng` (the outer div here), with the Oracle Redwood tokens defined
** in that scope. It does NOT depend on the redwood-ng console theme.
**
** Phase 2 wires every step to the Operating Entities config schema:
**   1 Foundation        -> region/realm + environments + security_targets
**   2 Hub Network       -> hub.kind + hub.network.vcn
**   3 Projects          -> environments.<env>.shared_project_network + projects
**   4 Platform Templates-> environments.<env>.platforms.<name>.extension
**   5 Review            -> generate iam/network/... JSON, IAM compartment diagram,
**                          per-file + tar downloads, read-only config.jsonnet
**
** Download JSON runs the jsonnet OE generation and gracefully reports the
** setup-lz notice if the OE sources are absent.
*/

import React, { useMemo, useState } from 'react'
import { ConsolePageProps } from '../types/Console'
import { WizardProvider, useWizard } from '../landingzone/OcdLzWizardContext'
import { downloadTar, downloadTextFile } from '../landingzone/OcdLzDownloads'
import { generateLandingZone } from '../landingzone/OcdLzGenerator'
import {
    DEFAULT_CONFIG,
    LandingZoneConfig,
    normalizeConfig,
    serializeLandingZoneConfig,
    upgradeConfig,
    validateConfig,
} from '../landingzone/OcdLzConfig'
import { LzngHeader, LzngLayout } from '../landingzone/ui/LzngHeader'
import { LZNG_STEPS, LzngStepper } from '../landingzone/ui/LzngStepper'
import { LzngFoundationStep } from '../landingzone/ui/LzngFoundationStep'
import { LzngHubStep } from '../landingzone/ui/LzngHubStep'
import { LzngProjectsStep } from '../landingzone/ui/LzngProjectsStep'
import { LzngTemplatesStep } from '../landingzone/ui/LzngTemplatesStep'
import { LzngReviewStep } from '../landingzone/ui/LzngReviewStep'
import { LzngNetworkDiagram } from '../landingzone/ui/LzngNetworkDiagram'
import { buildDiagramModel } from '../landingzone/ui/LzngDiagramModel'
import { buildDrawioXml } from '../landingzone/ui/LzngDrawioExport'
import { LzngUpdateBanner } from '../landingzone/ui/LzngUpdateBanner'
import { LzngSourcesPanel } from '../landingzone/ui/LzngSourcesPanel'
import { useLzUpdateCheck } from '../landingzone/useLzUpdateCheck'

const SETUP_NOTICE = 'Run `npm run setup-lz` to enable Landing Zone generation.'
const DEFAULT_TITLE = 'Untitled Landing Zone'

function slugify(value: string): string {
    return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'landing-zone'
}

function friendlyError(message: string): string {
    return /bundled|setup-lz|not installed|not found|undefined/i.test(message) ? SETUP_NOTICE : message
}

function WizardBody(): JSX.Element {
    const { data, reset, setField } = useWizard()
    const [config, setConfig] = useState<LandingZoneConfig>(() => upgradeConfig(data.config ?? data.step1))
    const [title, setTitle] = useState<string>(() => (typeof data.title === 'string' && data.title ? data.title : DEFAULT_TITLE))
    const [editingTitle, setEditingTitle] = useState(false)
    const [layout, setLayout] = useState<LzngLayout>('split')
    const [activeStep, setActiveStep] = useState(0)
    const [notice, setNotice] = useState<{ kind: 'info' | 'error'; text: string } | null>(null)
    const [busy, setBusy] = useState(false)
    const { statuses, loading: updatesLoading, anyUpdate, refresh: refreshUpdates } = useLzUpdateCheck()
    const [bannerDismissed, setBannerDismissed] = useState(false)
    const [showSources, setShowSources] = useState(false)

    const validation = useMemo(() => validateConfig(config), [config])
    const serializedConfig = useMemo(
        () => (validation.errors.length === 0 ? serializeLandingZoneConfig(config) : validation.errors.join('\n')),
        [config, validation],
    )

    function commitConfig(next: LandingZoneConfig): void {
        const normalized = normalizeConfig(next)
        setConfig(normalized)
        setField('config', normalized)
        setNotice(null)
    }

    function commitTitle(next: string): void {
        const value = next.trim() || DEFAULT_TITLE
        setTitle(value)
        setField('title', value)
        setEditingTitle(false)
    }

    function resetWizard(): void {
        if (!window.confirm('Reset the wizard back to defaults?')) return
        reset()
        setConfig(normalizeConfig(DEFAULT_CONFIG))
        setTitle(DEFAULT_TITLE)
        setActiveStep(0)
        setNotice(null)
    }

    async function downloadJson(): Promise<void> {
        if (validation.errors.length > 0) {
            setNotice({ kind: 'error', text: validation.errors.join(' ') })
            return
        }
        setBusy(true)
        setNotice(null)
        try {
            const generated = await generateLandingZone(validation.value)
            setField('config', validation.value)
            downloadTar(`${slugify(title)}-landing-zone.tar`, [
                { name: 'config.jsonnet', content: generated.configJsonnet },
                ...generated.files,
            ])
            downloadTextFile(`${slugify(title)}-config.json`, JSON.stringify(validation.value, null, 2) + '\n')
            setNotice({ kind: 'info', text: `Generated ${generated.files.length} Operating Entities JSON file(s).` })
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : String(err)
            setNotice({ kind: 'error', text: friendlyError(message) })
        } finally {
            setBusy(false)
        }
    }

    function downloadDrawio(): void {
        const model = buildDiagramModel(config)
        downloadTextFile(`${slugify(title)}.drawio`, buildDrawioXml(model))
    }

    const showLeft = layout === 'split' || layout === 'list' || layout === 'code'
    const showRight = layout === 'split' || layout === 'diagram'
    const showCode = layout === 'code'

    function renderLeft(): JSX.Element {
        if (showCode) {
            return (
                <section className='ocd-lzng-card'>
                    <div className='ocd-lzng-card-head'>
                        <h2 className='ocd-lzng-card-title'>config.jsonnet</h2>
                    </div>
                    <div className='ocd-lzng-card-body'>
                        <pre className='ocd-lzng-pre'>{serializedConfig}</pre>
                    </div>
                </section>
            )
        }
        switch (activeStep) {
            case 0:
                return <LzngFoundationStep config={config} onChange={commitConfig} />
            case 1:
                return <LzngHubStep config={config} onChange={commitConfig} />
            case 2:
                return <LzngProjectsStep config={config} onChange={commitConfig} />
            case 3:
                return <LzngTemplatesStep config={config} onChange={commitConfig} />
            case 4:
            default:
                return (
                    <LzngReviewStep
                        config={config}
                        title={title}
                        onError={(message) => setNotice({ kind: 'error', text: friendlyError(message) })}
                    />
                )
        }
    }

    return (
        <div className='ocd-lzng'>
            <LzngHeader layout={layout} onLayoutChange={setLayout} />

            {anyUpdate && !bannerDismissed && (
                <LzngUpdateBanner
                    statuses={statuses}
                    onDismiss={() => setBannerDismissed(true)}
                    onOpenPanel={() => setShowSources(true)}
                />
            )}

            <div className='ocd-lzng-scroll'>
                <div className='ocd-lzng-titlerow'>
                    <div>
                        {editingTitle ? (
                            <input
                                aria-label='Landing zone name'
                                className='ocd-lzng-title-input'
                                autoFocus
                                defaultValue={title}
                                onBlur={(event) => commitTitle(event.target.value)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') commitTitle((event.target as HTMLInputElement).value)
                                    if (event.key === 'Escape') setEditingTitle(false)
                                }}
                            />
                        ) : (
                            <button type='button' className='ocd-lzng-title' onClick={() => setEditingTitle(true)}>
                                {title}
                            </button>
                        )}
                        <p className='ocd-lzng-subtitle'>
                            Step {activeStep + 1} of {LZNG_STEPS.length} — {LZNG_STEPS[activeStep].label}. The diagram and JSON build up as you go.
                        </p>
                    </div>
                    <div className='ocd-lzng-titlerow-actions'>
                        <button
                            type='button'
                            className='ocd-lzng-btn'
                            aria-pressed={showSources}
                            onClick={() => setShowSources((value) => !value)}
                        >
                            Sources &amp; Updates{anyUpdate ? ' •' : ''}
                        </button>
                        <button type='button' className='ocd-lzng-btn' onClick={downloadDrawio}>Download .drawio</button>
                        <button type='button' className='ocd-lzng-btn' disabled={busy} onClick={downloadJson}>
                            {busy ? 'Generating…' : 'Download JSON'}
                        </button>
                        <button type='button' className='ocd-lzng-btn' onClick={resetWizard}>Reset</button>
                    </div>
                </div>

                <LzngStepper activeIndex={activeStep} onSelect={setActiveStep} />

                {showSources && (
                    <LzngSourcesPanel
                        statuses={statuses}
                        loading={updatesLoading}
                        onRefresh={() => refreshUpdates(true)}
                        onClose={() => setShowSources(false)}
                    />
                )}

                <div className='ocd-lzng-body' data-layout={layout}>
                    {showLeft && (
                        <div className='ocd-lzng-col-left'>
                            {renderLeft()}

                            {notice && (
                                <div className={`ocd-lzng-notice${notice.kind === 'info' ? ' ocd-lzng-notice-info' : ''}`}>
                                    {notice.text === SETUP_NOTICE ? (
                                        <span>Run <code>npm run setup-lz</code> to enable Landing Zone generation.</span>
                                    ) : (
                                        notice.text
                                    )}
                                </div>
                            )}

                            <div className='ocd-lzng-step-footer'>
                                <button
                                    type='button'
                                    className='ocd-lzng-btn'
                                    disabled={activeStep === 0}
                                    onClick={() => setActiveStep((index) => Math.max(0, index - 1))}
                                >
                                    Back
                                </button>
                                <button
                                    type='button'
                                    className='ocd-lzng-btn ocd-lzng-btn-primary'
                                    disabled={activeStep === LZNG_STEPS.length - 1}
                                    onClick={() => setActiveStep((index) => Math.min(LZNG_STEPS.length - 1, index + 1))}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {showRight && (
                        <div className='ocd-lzng-col-right'>
                            <section className='ocd-lzng-card ocd-lzng-diagram-card'>
                                <div className='ocd-lzng-card-head'>
                                    <h2 className='ocd-lzng-card-title'>Network Diagram</h2>
                                </div>
                                <div className='ocd-lzng-diagram-canvas'>
                                    <LzngNetworkDiagram config={config} />
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OcdLandingZone = ({ ocdDocument, setOcdDocument, ocdConsoleConfig, setOcdConsoleConfig }: ConsolePageProps): JSX.Element => {
    return (
        <WizardProvider>
            <WizardBody />
        </WizardProvider>
    )
}

export default OcdLandingZone

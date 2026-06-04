/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** Landing Zone Wizard page. Ports the LZNG WizardShell (WizardBody + DiagramPanel)
** into OCD. Step 1 captures the minimal base config and generates Operating
** Entities JSONs in-browser via the go-jsonnet WASM runtime; the diagram is built
** from iam.json's compartments_configuration.
**
** Styling is delegated to the Redwood-NG theme via `ocd-lz-*` classNames (no
** inline styles, no router). The theme agent owns those styles.
**
** `ocdDocument` is accepted but unused in v1 (reserved for the stretch
** "Send to Designer" mapping of iam.json compartments -> OCD model).
*/

import React, { useEffect, useState } from 'react'
import { ConsolePageProps } from '../types/Console'
import { WizardProvider, useWizard } from '../landingzone/OcdLzWizardContext'
import { OcdLzDiagramPanel } from '../landingzone/OcdLzDiagramPanel'
import { downloadTar, downloadTextFile } from '../landingzone/OcdLzDownloads'
import { generateLandingZoneFiles, GeneratedResult } from '../landingzone/OcdLzGenerator'
import { findRegion, getDefaultRegionForRealm, getRegionsForRealm, REALM_OPTIONS } from '../landingzone/OcdLzRegions'
import { DEFAULT_STEP1, Environment, normalizeStep1, serializeStep1Config, Step1State, validateStep1 } from '../landingzone/OcdLzStep1Config'

interface EditingEnv {
    index: number
    name: string
}

function WizardBody(): JSX.Element {
    const { data, reset, setField } = useWizard()
    const [draft, setDraft] = useState<Step1State>(() => normalizeStep1({ ...DEFAULT_STEP1, ...((data.step1 as Partial<Step1State>) || {}) }))
    const [newEnvName, setNewEnvName] = useState('')
    const [newEnvSecurityZone, setNewEnvSecurityZone] = useState(false)
    const [editingEnv, setEditingEnv] = useState<EditingEnv | null>(null)
    const [debugOpen, setDebugOpen] = useState(false)
    const [result, setResult] = useState<GeneratedResult | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [busy, setBusy] = useState(false)

    useEffect(() => {
        if (data.step1) {
            setDraft(normalizeStep1({ ...DEFAULT_STEP1, ...(data.step1 as Partial<Step1State>) }))
        }
    }, [data.step1])

    const validation = validateStep1(draft)
    const configPreview = validation.errors.length === 0
        ? serializeStep1Config(draft)
        : validation.errors.join('\n')
    const regionOptions = getRegionsForRealm(draft.realm)

    function commitDraft(next: Step1State): void {
        const normalized = normalizeStep1(next)
        setDraft(normalized)
        setField('step1', normalized)
        setResult(null)
        setError(null)
    }

    function updateField(path: 'regionShortName', value: string): void {
        commitDraft({ ...draft, [path]: value })
    }

    function updateRealm(realm: string): void {
        const defaultRegion = getDefaultRegionForRealm(realm)
        commitDraft({ ...draft, realm, region: defaultRegion?.id || '', regionShortName: defaultRegion?.shortName || '' })
    }

    function updateRegion(regionId: string): void {
        const region = findRegion(draft.realm, regionId)
        commitDraft({ ...draft, region: regionId, regionShortName: region?.shortName || draft.regionShortName })
    }

    function updateEnvironment(index: number, patch: Partial<Environment>): void {
        const environments = draft.environments.map((env, idx) => (idx === index ? { ...env, ...patch } : env))
        commitDraft({ ...draft, environments })
    }

    function addEnvironment(): void {
        const name = newEnvName.trim()
        if (!name) return
        commitDraft({ ...draft, environments: [...draft.environments, { name, securityZone: newEnvSecurityZone }] })
        setNewEnvName('')
        setNewEnvSecurityZone(false)
    }

    function deleteEnvironment(index: number): void {
        setEditingEnv(null)
        commitDraft({ ...draft, environments: draft.environments.filter((_, idx) => idx !== index) })
    }

    function saveEdit(): void {
        if (!editingEnv) return
        updateEnvironment(editingEnv.index, { name: editingEnv.name })
        setEditingEnv(null)
    }

    function resetWizard(): void {
        if (!window.confirm('Clear wizard state?')) return
        reset()
        setDraft(normalizeStep1(DEFAULT_STEP1))
        setNewEnvName('')
        setNewEnvSecurityZone(false)
        setEditingEnv(null)
        setResult(null)
        setError(null)
    }

    async function generate(): Promise<void> {
        const checked = validateStep1(draft)
        if (checked.errors.length > 0) {
            setError(checked.errors.join(' '))
            setResult(null)
            return
        }
        setBusy(true)
        setError(null)
        setResult(null)
        try {
            const generated = await generateLandingZoneFiles(checked.value)
            setField('step1', checked.value)
            setResult(generated)
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : String(err))
        } finally {
            setBusy(false)
        }
    }

    function downloadAll(): void {
        if (!result) return
        downloadTar('landing-zone-jsons.tar', [
            { name: 'config.jsonnet', content: result.configJsonnet },
            ...result.files,
        ])
    }

    const generateDisabled = busy || validation.errors.length > 0

    return (
        <div className='ocd-lz-page'>
            <div className='ocd-lz-header'>
                <div>
                    <div className='ocd-lz-title'>New Landing Zone</div>
                    <div className='ocd-lz-subtitle'>Step 1 captures the minimal config and generates Operating Entities JSONs in your browser.</div>
                </div>
                <div className='ocd-lz-header-actions'>
                    <button type='button' className='ocd-lz-button ocd-lz-button-debug' onClick={() => setDebugOpen(true)}>Config</button>
                    <button type='button' className='ocd-lz-button ocd-lz-button-reset' onClick={resetWizard}>Reset</button>
                </div>
            </div>

            <div className='ocd-lz-grid'>
                <section className='ocd-lz-panel'>
                    <div className='ocd-lz-panel-title'>Step 1 - Base config</div>

                    <label className='ocd-lz-label' htmlFor='lz-realm'>Realm</label>
                    <select id='lz-realm' className='ocd-lz-select' value={draft.realm} onChange={(event) => updateRealm(event.target.value)}>
                        {REALM_OPTIONS.map((realm) => (<option key={realm.id} value={realm.id}>{realm.label}</option>))}
                    </select>

                    <label className='ocd-lz-label' htmlFor='lz-region'>Region</label>
                    <select id='lz-region' className='ocd-lz-select' value={draft.region} onChange={(event) => updateRegion(event.target.value)}>
                        {regionOptions.map((region) => (<option key={region.id} value={region.id}>{region.id} ({region.shortName.toUpperCase()})</option>))}
                    </select>

                    <label className='ocd-lz-label' htmlFor='lz-region-short'>Region short name</label>
                    <input id='lz-region-short' className='ocd-lz-input' value={draft.regionShortName} onChange={(event) => updateField('regionShortName', event.target.value)} />

                    <div className='ocd-lz-panel-title'>Environments</div>
                    <div className='ocd-lz-env-list'>
                        {draft.environments.map((env, index) => {
                            const isEditing = editingEnv?.index === index
                            return (
                                <div key={`${env.name}-${index}`} className='ocd-lz-env-row'>
                                    {isEditing ? (
                                        <input aria-label='Environment name' className='ocd-lz-input ocd-lz-input-inline' value={editingEnv.name} onChange={(event) => setEditingEnv({ ...editingEnv, name: event.target.value })} />
                                    ) : (
                                        <span className='ocd-lz-env-name'>{env.name}</span>
                                    )}
                                    <label className='ocd-lz-checkbox-label'>
                                        <input type='checkbox' checked={env.securityZone} onChange={(event) => updateEnvironment(index, { securityZone: event.target.checked })} />
                                        Security zone
                                    </label>
                                    {isEditing ? (
                                        <button type='button' className='ocd-lz-button ocd-lz-button-secondary' onClick={saveEdit}>Save</button>
                                    ) : (
                                        <button type='button' className='ocd-lz-button ocd-lz-button-secondary' onClick={() => setEditingEnv({ index, name: draft.environments[index].name })}>Edit</button>
                                    )}
                                    <button type='button' className='ocd-lz-button ocd-lz-button-danger' onClick={() => deleteEnvironment(index)}>Delete</button>
                                </div>
                            )
                        })}
                    </div>

                    <div className='ocd-lz-add-row'>
                        <input aria-label='New environment' className='ocd-lz-input ocd-lz-input-inline' placeholder='New environment' value={newEnvName} onChange={(event) => setNewEnvName(event.target.value)} />
                        <label className='ocd-lz-checkbox-label'>
                            <input type='checkbox' checked={newEnvSecurityZone} onChange={(event) => setNewEnvSecurityZone(event.target.checked)} />
                            Security zone
                        </label>
                        <button type='button' className='ocd-lz-button ocd-lz-button-secondary' onClick={addEnvironment}>Add</button>
                    </div>
                    <div className='ocd-lz-help'>Hub is fixed to hub_a with VCN 10.100.0.0/21 for this MVP. Security-zone selections are emitted as config.security_targets.</div>

                    <div className='ocd-lz-actions'>
                        <button type='button' className={`ocd-lz-button ocd-lz-button-primary${generateDisabled ? ' ocd-lz-button-disabled' : ''}`} disabled={generateDisabled} onClick={generate}>
                            {busy ? 'Generating...' : 'Generate JSONs'}
                        </button>
                        {result && <button type='button' className='ocd-lz-button ocd-lz-button-secondary' onClick={downloadAll}>Download all</button>}
                        <span className='ocd-lz-status'>{result ? `${result.files.length} files generated` : 'No files generated yet'}</span>
                    </div>

                    {(error || validation.errors.length > 0) && (
                        <div className='ocd-lz-error'>{error || validation.errors.join(' ')}</div>
                    )}
                </section>

                <OcdLzDiagramPanel result={result} />
            </div>

            {debugOpen && (
                <>
                    <div className='ocd-lz-overlay' onClick={() => setDebugOpen(false)} aria-hidden />
                    <aside className='ocd-lz-drawer'>
                        <div className='ocd-lz-drawer-header'>
                            <div className='ocd-lz-panel-title'>Debug Config And Files</div>
                            <button type='button' className='ocd-lz-button ocd-lz-button-secondary' onClick={() => setDebugOpen(false)}>Close</button>
                        </div>
                        <pre className='ocd-lz-pre'>{configPreview}</pre>
                        {result && (
                            <div className='ocd-lz-file-list'>
                                {result.files.map((file) => (
                                    <div key={file.name} className='ocd-lz-file-row'>
                                        <span className='ocd-lz-file-name'>{file.name}</span>
                                        <span>{file.size} bytes</span>
                                        <button type='button' className='ocd-lz-button ocd-lz-button-secondary' onClick={() => downloadTextFile(file.name, file.content)}>Download</button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </aside>
                </>
            )}
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OcdLandingZone = ({ ocdDocument, setOcdDocument, ocdConsoleConfig, setOcdConsoleConfig }: ConsolePageProps): JSX.Element => {
    return (
        <div className='ocd-lz-view'>
            <WizardProvider>
                <WizardBody />
            </WizardProvider>
        </div>
    )
}

export default OcdLandingZone

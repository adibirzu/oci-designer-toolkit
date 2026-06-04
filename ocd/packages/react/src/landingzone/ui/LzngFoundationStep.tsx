/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** Foundation (Step 1) form. Captures realm / region / region-short-name and the
** environment list with a per-environment security-zone toggle. All edits are
** immutable and bubble up via onChange so the parent can drive the live diagram.
*/

import React, { useState } from 'react'
import { LzngToggle } from './LzngToggle'
import {
    Environment,
    Step1State,
} from '../OcdLzStep1Config'
import {
    findRegion,
    getDefaultRegionForRealm,
    getRegionsForRealm,
    REALM_OPTIONS,
} from '../OcdLzRegions'

export interface LzngFoundationStepProps {
    step1: Step1State
    onChange: (next: Step1State) => void
}

export function LzngFoundationStep({ step1, onChange }: LzngFoundationStepProps): JSX.Element {
    const [newEnvName, setNewEnvName] = useState('')
    const [newEnvSecure, setNewEnvSecure] = useState(false)

    const regionOptions = getRegionsForRealm(step1.realm)

    function updateRealm(realm: string): void {
        const defaultRegion = getDefaultRegionForRealm(realm)
        onChange({
            ...step1,
            realm,
            region: defaultRegion?.id || '',
            regionShortName: defaultRegion?.shortName || '',
        })
    }

    function updateRegion(regionId: string): void {
        const region = findRegion(step1.realm, regionId)
        onChange({ ...step1, region: regionId, regionShortName: region?.shortName || step1.regionShortName })
    }

    function updateEnvironment(index: number, patch: Partial<Environment>): void {
        const environments = step1.environments.map((env, idx) => (idx === index ? { ...env, ...patch } : env))
        onChange({ ...step1, environments })
    }

    function deleteEnvironment(index: number): void {
        onChange({ ...step1, environments: step1.environments.filter((_, idx) => idx !== index) })
    }

    function addEnvironment(): void {
        const name = newEnvName.trim()
        if (!name) return
        onChange({ ...step1, environments: [...step1.environments, { name, securityZone: newEnvSecure }] })
        setNewEnvName('')
        setNewEnvSecure(false)
    }

    return (
        <>
            <section className='ocd-lzng-card'>
                <div className='ocd-lzng-card-head'>
                    <h2 className='ocd-lzng-card-title'>Foundation</h2>
                </div>
                <div className='ocd-lzng-card-body'>
                    <div className='ocd-lzng-field-row'>
                        <div className='ocd-lzng-field'>
                            <label className='ocd-lzng-label' htmlFor='lzng-realm'>Realm</label>
                            <select
                                id='lzng-realm'
                                className='ocd-lzng-select'
                                value={step1.realm}
                                onChange={(event) => updateRealm(event.target.value)}
                            >
                                {REALM_OPTIONS.map((realm) => (
                                    <option key={realm.id} value={realm.id}>{realm.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className='ocd-lzng-field'>
                            <label className='ocd-lzng-label' htmlFor='lzng-region'>Region</label>
                            <select
                                id='lzng-region'
                                className='ocd-lzng-select'
                                value={step1.region}
                                onChange={(event) => updateRegion(event.target.value)}
                            >
                                {regionOptions.map((region) => (
                                    <option key={region.id} value={region.id}>
                                        {region.id} ({region.shortName.toUpperCase()})
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='ocd-lzng-field'>
                        <label className='ocd-lzng-label' htmlFor='lzng-region-short'>Region short name</label>
                        <input
                            id='lzng-region-short'
                            className='ocd-lzng-input'
                            value={step1.regionShortName}
                            onChange={(event) => onChange({ ...step1, regionShortName: event.target.value })}
                        />
                    </div>
                </div>
            </section>

            <section className='ocd-lzng-card'>
                <div className='ocd-lzng-card-head'>
                    <h2 className='ocd-lzng-card-title'>Environments</h2>
                </div>
                <div className='ocd-lzng-card-body'>
                    <table className='ocd-lzng-env-table'>
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col' className='ocd-lzng-col-sz'>Security Zone</th>
                                <th scope='col' className='ocd-lzng-col-actions'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {step1.environments.map((env, index) => (
                                <tr key={`${env.name}-${index}`}>
                                    <td>
                                        <input
                                            aria-label={`Environment ${index + 1} name`}
                                            className='ocd-lzng-input'
                                            value={env.name}
                                            onChange={(event) => updateEnvironment(index, { name: event.target.value })}
                                        />
                                    </td>
                                    <td className='ocd-lzng-col-sz'>
                                        <LzngToggle
                                            checked={env.securityZone}
                                            onChange={(next) => updateEnvironment(index, { securityZone: next })}
                                            label={`Security zone for ${env.name || 'environment'}`}
                                        />
                                    </td>
                                    <td className='ocd-lzng-col-actions'>
                                        <button
                                            type='button'
                                            className='ocd-lzng-btn ocd-lzng-btn-danger'
                                            onClick={() => deleteEnvironment(index)}
                                        >
                                            Del
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr className='ocd-lzng-env-add-row'>
                                <td>
                                    <input
                                        aria-label='New environment name'
                                        className='ocd-lzng-input'
                                        placeholder='Add environment…'
                                        value={newEnvName}
                                        onChange={(event) => setNewEnvName(event.target.value)}
                                        onKeyDown={(event) => { if (event.key === 'Enter') addEnvironment() }}
                                    />
                                </td>
                                <td className='ocd-lzng-col-sz'>
                                    <LzngToggle
                                        checked={newEnvSecure}
                                        onChange={setNewEnvSecure}
                                        label='Security zone for new environment'
                                    />
                                </td>
                                <td className='ocd-lzng-col-actions'>
                                    <button
                                        type='button'
                                        className='ocd-lzng-btn ocd-lzng-btn-primary'
                                        onClick={addEnvironment}
                                    >
                                        Add
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='ocd-lzng-help'>
                        Hub is fixed to hub_a with VCN 10.100.0.0/21 for this phase. Security-zone selections are
                        emitted as config.security_targets.
                    </p>
                </div>
            </section>
        </>
    )
}

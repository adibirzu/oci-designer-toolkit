/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** Dismissible "OCI Landing Zone updates available" banner, shown below the dark
** header when at least one pinned upstream source has a newer commit/release. It
** summarises the first available update, links to the release/commit on GitHub,
** and offers a "How to update" note describing the `npm run setup-lz:latest`
** re-vendor flow. Self-styled under `.ocd-lzng`.
*/

import React, { useState } from 'react'
import { LzUpdateStatus } from '../OcdLzUpdateCheck'
import { buildUpdatePlan, shortRef as planShortRef } from '../OcdLzUpdatePlan'

export interface LzngUpdateBannerProps {
    statuses: LzUpdateStatus[]
    onDismiss: () => void
    /** Opens the full Sources & Updates panel. */
    onOpenPanel: () => void
    /** Re-run the update check after the user applies an update. */
    onRefresh?: () => void
}

function shortRef(value: string): string {
    return planShortRef(value)
}

/** Copy text to the clipboard, tolerating environments without the async API. */
async function copyToClipboard(text: string): Promise<boolean> {
    try {
        if (navigator?.clipboard?.writeText) {
            await navigator.clipboard.writeText(text)
            return true
        }
    } catch {
        /* fall through to the legacy path */
    }
    try {
        const el = document.createElement('textarea')
        el.value = text
        el.style.position = 'fixed'
        el.style.opacity = '0'
        document.body.appendChild(el)
        el.select()
        const ok = document.execCommand('copy')
        document.body.removeChild(el)
        return ok
    } catch {
        return false
    }
}

export function LzngUpdateBanner({ statuses, onDismiss, onOpenPanel, onRefresh }: LzngUpdateBannerProps): JSX.Element | null {
    const [showHow, setShowHow] = useState(false)
    const [updateState, setUpdateState] = useState<'idle' | 'copied' | 'failed'>('idle')

    const available = statuses.filter((status) => status.updateAvailable)
    if (available.length === 0) return null

    const primary = available[0]
    const extra = available.length - 1
    const plan = buildUpdatePlan(statuses)

    const onUpdateNow = async (): Promise<void> => {
        const ok = await copyToClipboard(plan.command)
        setUpdateState(ok ? 'copied' : 'failed')
        setShowHow(true)
        onRefresh?.()
    }

    return (
        <div className='ocd-lzng-update-banner' role='status' aria-live='polite'>
            <div className='ocd-lzng-update-banner-main'>
                <span className='ocd-lzng-update-banner-dot' aria-hidden />
                <div className='ocd-lzng-update-banner-text'>
                    <strong>OCI Landing Zone updates available</strong>
                    {' — '}
                    {primary.label}{' '}
                    <code>{shortRef(primary.current)}</code>
                    {' → '}
                    <code>{primary.latestShort || shortRef(primary.latest)}</code>
                    {extra > 0 && <span className='ocd-lzng-update-banner-more'> (+{extra} more)</span>}
                    {showHow && (
                        <div className='ocd-lzng-update-banner-how'>
                            {updateState === 'copied' && (
                                <p className='ocd-lzng-update-copied'>✓ Copied <code>{plan.command}</code> to the clipboard.</p>
                            )}
                            {updateState === 'failed' && (
                                <p className='ocd-lzng-update-copied'>Run this command in the repo root:</p>
                            )}
                            <p>
                                Run <code>{plan.command}</code> to re-vendor the sources at the latest version, rebuild,
                                then bump the pinned ref in{' '}
                                {plan.pinFiles.map((file, i) => (
                                    <React.Fragment key={file}>
                                        {i > 0 && ' and '}
                                        <code>{file.split('/').pop()}</code>
                                    </React.Fragment>
                                ))}{' '}
                                to the SHA the script prints.
                            </p>
                            {plan.items.length > 0 && (
                                <ul className='ocd-lzng-update-changes'>
                                    {plan.items.map((item) => (
                                        <li key={item.key}>
                                            {item.label}: <code>{shortRef(item.fromRef)}</code> → <code>{item.toRefShort}</code>{' '}
                                            <a href={item.compareUrl} target='_blank' rel='noreferrer'>compare ↗</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className='ocd-lzng-update-banner-actions'>
                <button
                    type='button'
                    className='ocd-lzng-btn ocd-lzng-btn-primary'
                    onClick={onUpdateNow}
                    title='Copy the re-vendor command and show exactly what changed'
                >
                    {updateState === 'copied' ? '✓ Command copied' : 'Update now'}
                </button>
                <a
                    className='ocd-lzng-btn'
                    href={primary.url}
                    target='_blank'
                    rel='noreferrer'
                >
                    View {primary.kind === 'release' ? 'release' : 'commit'} ↗
                </a>
                <button
                    type='button'
                    className='ocd-lzng-btn'
                    aria-expanded={showHow}
                    onClick={() => setShowHow((value) => !value)}
                >
                    Details
                </button>
                <button type='button' className='ocd-lzng-btn' onClick={onOpenPanel}>
                    Sources &amp; Updates
                </button>
                <button
                    type='button'
                    className='ocd-lzng-update-banner-dismiss'
                    aria-label='Dismiss update notice'
                    onClick={onDismiss}
                >
                    ✕
                </button>
            </div>
        </div>
    )
}

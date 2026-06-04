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

export interface LzngUpdateBannerProps {
    statuses: LzUpdateStatus[]
    onDismiss: () => void
    /** Opens the full Sources & Updates panel. */
    onOpenPanel: () => void
}

function shortRef(value: string): string {
    if (!value) return '(unpinned)'
    return value.length > 12 ? value.slice(0, 12) : value
}

export function LzngUpdateBanner({ statuses, onDismiss, onOpenPanel }: LzngUpdateBannerProps): JSX.Element | null {
    const [showHow, setShowHow] = useState(false)

    const available = statuses.filter((status) => status.updateAvailable)
    if (available.length === 0) return null

    const primary = available[0]
    const extra = available.length - 1

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
                        <p className='ocd-lzng-update-banner-how'>
                            Run <code>npm run setup-lz:latest</code> to re-vendor the sources at the latest version,
                            then update the pin in <code>OcdLzSources.ts</code> and <code>UPSTREAM_SHA</code> in{' '}
                            <code>scripts/setup_landing_zone.mjs</code> to the SHA the script prints.
                        </p>
                    )}
                </div>
            </div>
            <div className='ocd-lzng-update-banner-actions'>
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
                    How to update
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

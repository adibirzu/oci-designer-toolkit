/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** "Sources & Updates" card. Lists every tracked upstream OCI Landing Zone source
** with its repo link, pinned (current) ref, latest ref, a status badge
** (up to date / update available / unpinned / check failed), the release/commit
** date, and a refresh button. Self-styled under `.ocd-lzng`.
*/

import React from 'react'
import { LzUpdateStatus } from '../OcdLzUpdateCheck'

export interface LzngSourcesPanelProps {
    statuses: LzUpdateStatus[]
    loading: boolean
    onRefresh: () => void
    /** Optional close handler when rendered as a dismissible card. */
    onClose?: () => void
}

type BadgeKind = 'ok' | 'update' | 'unpinned' | 'error'

interface Badge {
    kind: BadgeKind
    text: string
}

function deriveBadge(status: LzUpdateStatus): Badge {
    if (status.error) return { kind: 'error', text: 'Check failed' }
    if (status.current === '') return { kind: 'unpinned', text: 'Unpinned' }
    if (status.updateAvailable) return { kind: 'update', text: 'Update available' }
    return { kind: 'ok', text: 'Up to date' }
}

function shortRef(value: string): string {
    if (!value) return '—'
    return value.length > 12 ? value.slice(0, 12) : value
}

function formatDate(iso: string): string {
    if (!iso) return '—'
    const date = new Date(iso)
    if (Number.isNaN(date.getTime())) return '—'
    return date.toISOString().slice(0, 10)
}

export function LzngSourcesPanel({ statuses, loading, onRefresh, onClose }: LzngSourcesPanelProps): JSX.Element {
    return (
        <section className='ocd-lzng-card ocd-lzng-sources-card'>
            <div className='ocd-lzng-card-head'>
                <h2 className='ocd-lzng-card-title'>Sources &amp; Updates</h2>
                <div className='ocd-lzng-sources-head-actions'>
                    <button type='button' className='ocd-lzng-btn' disabled={loading} onClick={onRefresh}>
                        {loading ? 'Checking…' : 'Refresh'}
                    </button>
                    {onClose && (
                        <button
                            type='button'
                            className='ocd-lzng-btn'
                            aria-label='Close sources and updates panel'
                            onClick={onClose}
                        >
                            Close
                        </button>
                    )}
                </div>
            </div>
            <div className='ocd-lzng-card-body'>
                <p className='ocd-lzng-sources-intro'>
                    Tracked official OCI Landing Zone repositories and the versions this build pins.
                </p>
                <ul className='ocd-lzng-sources-list'>
                    {statuses.length === 0 && !loading && (
                        <li className='ocd-lzng-placeholder'>No sources tracked.</li>
                    )}
                    {statuses.map((status) => {
                        const badge = deriveBadge(status)
                        return (
                            <li className='ocd-lzng-source-row' key={status.key}>
                                <div className='ocd-lzng-source-head'>
                                    <span className='ocd-lzng-source-label'>{status.label}</span>
                                    <span className={`ocd-lzng-badge ocd-lzng-badge-${badge.kind}`}>{badge.text}</span>
                                </div>
                                <a
                                    className='ocd-lzng-source-repo'
                                    href={`https://github.com/${status.repo}`}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    {status.repo} ↗
                                </a>
                                <dl className='ocd-lzng-source-meta'>
                                    <div>
                                        <dt>Pinned</dt>
                                        <dd>
                                            <code>{shortRef(status.current)}</code>
                                        </dd>
                                    </div>
                                    <div>
                                        <dt>Latest</dt>
                                        <dd>
                                            {status.error ? (
                                                <span className='ocd-lzng-source-unavailable'>check unavailable</span>
                                            ) : (
                                                <a href={status.url} target='_blank' rel='noreferrer'>
                                                    <code>{status.latestShort || shortRef(status.latest)}</code> ↗
                                                </a>
                                            )}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt>{status.kind === 'release' ? 'Released' : 'Committed'}</dt>
                                        <dd>{formatDate(status.date)}</dd>
                                    </div>
                                </dl>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

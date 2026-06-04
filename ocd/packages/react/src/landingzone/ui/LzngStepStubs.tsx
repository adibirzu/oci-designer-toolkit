/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** Placeholder cards for the steps that are scaffolded only in this phase (Hub
** Network, Projects, Platform Templates) plus the read-only Review step, which
** shows the serialized Step 1 config. Each renders inside the left column; the
** parent owns Back/Next navigation.
*/

import React from 'react'

export interface LzngPlaceholderStepProps {
    title: string
    note: string
}

export function LzngPlaceholderStep({ title, note }: LzngPlaceholderStepProps): JSX.Element {
    return (
        <section className='ocd-lzng-card'>
            <div className='ocd-lzng-card-head'>
                <h2 className='ocd-lzng-card-title'>{title}</h2>
            </div>
            <div className='ocd-lzng-card-body'>
                <p className='ocd-lzng-placeholder'>{note}</p>
            </div>
        </section>
    )
}

export interface LzngReviewStepProps {
    config: string
}

export function LzngReviewStep({ config }: LzngReviewStepProps): JSX.Element {
    return (
        <section className='ocd-lzng-card'>
            <div className='ocd-lzng-card-head'>
                <h2 className='ocd-lzng-card-title'>Review</h2>
            </div>
            <div className='ocd-lzng-card-body'>
                <p className='ocd-lzng-placeholder'>Serialized Landing Zone configuration (read-only).</p>
                <pre className='ocd-lzng-pre'>{config}</pre>
            </div>
        </section>
    )
}

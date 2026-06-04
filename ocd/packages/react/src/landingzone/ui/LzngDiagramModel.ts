/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** Pure helper that derives the live network-diagram model from the Foundation
** Step 1 config. A region container holds the Hub VCN plus one node per
** environment. Consumed by both the React-Flow view and the drawio exporter so
** the two stay in sync. No React, no side effects.
*/

import { Step1State } from '../OcdLzStep1Config'
import { findRegion } from '../OcdLzRegions'

export interface LzngDiagramEnvNode {
    id: string
    name: string
    secure: boolean
}

export interface LzngDiagramModel {
    regionLabel: string
    hubLabel: string
    hubVcn: string
    environments: LzngDiagramEnvNode[]
}

const HUB_VCN = '10.100.0.0/21'

export function buildDiagramModel(step1: Step1State): LzngDiagramModel {
    const region = findRegion(step1.realm, step1.region)
    const shortName = step1.regionShortName || region?.shortName || ''
    const regionLabel = `OCI Region · ${step1.region || 'region'}${shortName ? ` (${shortName})` : ''} — ${step1.realm || 'oc1'}`
    return {
        regionLabel,
        hubLabel: 'Hub VCN',
        hubVcn: HUB_VCN,
        environments: step1.environments.map((env, index) => ({
            id: `env-${index}-${env.name}`,
            name: env.name,
            secure: env.securityZone,
        })),
    }
}

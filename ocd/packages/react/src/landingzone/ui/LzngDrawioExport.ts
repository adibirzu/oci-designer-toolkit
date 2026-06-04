/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** Exports the live Landing Zone network diagram as drawio (mxGraph) XML. Emits a
** dashed region container holding a red-tinted Hub VCN box and one box per
** environment (green tint when its security zone is on). The output opens
** directly in app.diagrams.net / the OCD drawio renderer.
*/

import { LzngDiagramModel } from './LzngDiagramModel'

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
}

const REGION_PADDING_X = 24
const REGION_PADDING_TOP = 48
const NODE_WIDTH = 160
const NODE_HEIGHT = 64
const NODE_GAP = 24

export function buildDrawioXml(model: LzngDiagramModel): string {
    const nodeCount = 1 + model.environments.length
    const innerWidth = nodeCount * NODE_WIDTH + (nodeCount - 1) * NODE_GAP
    const regionWidth = innerWidth + REGION_PADDING_X * 2
    const regionHeight = REGION_PADDING_TOP + NODE_HEIGHT + 32

    const cells: string[] = []

    cells.push(
        `<mxCell id="region" value="${escapeXml(model.regionLabel)}" ` +
        `style="rounded=1;dashed=1;dashPattern=6 6;verticalAlign=top;align=left;` +
        `spacingLeft=12;spacingTop=8;fontStyle=1;fontColor=#5C5C5C;strokeColor=#5C5C5C;` +
        `fillColor=#F5F5F5;" vertex="1" parent="1">` +
        `<mxGeometry x="40" y="40" width="${regionWidth}" height="${regionHeight}" as="geometry"/></mxCell>`,
    )

    cells.push(
        `<mxCell id="hub" value="${escapeXml(`${model.hubLabel}&#10;${model.hubVcn}`)}" ` +
        `style="rounded=1;whiteSpace=wrap;html=1;fontStyle=1;fontColor=#A63D2E;` +
        `strokeColor=#C74634;fillColor=#FBEAE7;" vertex="1" parent="region">` +
        `<mxGeometry x="${REGION_PADDING_X}" y="${REGION_PADDING_TOP}" width="${NODE_WIDTH}" height="${NODE_HEIGHT}" as="geometry"/></mxCell>`,
    )

    model.environments.forEach((env, index) => {
        const x = REGION_PADDING_X + (index + 1) * (NODE_WIDTH + NODE_GAP)
        const fill = env.secure ? '#E8F5E9' : '#FFFFFF'
        const stroke = env.secure ? '#2e7d32' : '#E0E0E0'
        const fontColor = env.secure ? '#2e7d32' : '#312D2A'
        const sub = env.secure ? 'security zone' : 'environment'
        cells.push(
            `<mxCell id="${escapeXml(env.id)}" value="${escapeXml(`${env.name}&#10;${sub}`)}" ` +
            `style="rounded=1;whiteSpace=wrap;html=1;fontStyle=1;fontColor=${fontColor};` +
            `strokeColor=${stroke};fillColor=${fill};" vertex="1" parent="region">` +
            `<mxGeometry x="${x}" y="${REGION_PADDING_TOP}" width="${NODE_WIDTH}" height="${NODE_HEIGHT}" as="geometry"/></mxCell>`,
        )
        cells.push(
            `<mxCell id="edge-${escapeXml(env.id)}" style="endArrow=none;strokeColor=#C74634;" ` +
            `edge="1" parent="region" source="hub" target="${escapeXml(env.id)}">` +
            `<mxGeometry relative="1" as="geometry"/></mxCell>`,
        )
    })

    return `<mxGraphModel dx="800" dy="600" grid="1" gridSize="10" guides="1" tooltips="1" ` +
        `connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1100" pageHeight="700" ` +
        `math="0" shadow="0"><root>` +
        `<mxCell id="0"/><mxCell id="1" parent="0"/>` +
        cells.join('') +
        `</root></mxGraphModel>`
}

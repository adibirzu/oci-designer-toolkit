/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** Live network-diagram card built on @xyflow/react (React-Flow v12). Renders a
** dashed Region container parent node that holds a red-tinted Hub VCN node plus
** one node per environment (green tint when its security zone is on). The whole
** graph is derived from the Foundation config via buildDiagramModel and updates
** live as the config changes. Read-only (no interactive editing); dotted-grid
** Background, zoom Controls and a MiniMap are provided.
*/

import React, { useMemo } from 'react'
import {
    Background,
    BackgroundVariant,
    Controls,
    Edge,
    MiniMap,
    Node,
    ReactFlow,
} from '@xyflow/react'
import { Step1State } from '../OcdLzStep1Config'
import { buildDiagramModel } from './LzngDiagramModel'

const REGION_PADDING_X = 28
const REGION_PADDING_TOP = 46
const NODE_WIDTH = 150
const NODE_HEIGHT = 60
const NODE_GAP = 28

export interface LzngNetworkDiagramProps {
    step1: Step1State
}

function buildFlow(step1: Step1State): { nodes: Node[]; edges: Edge[] } {
    const model = buildDiagramModel(step1)
    const nodeCount = 1 + model.environments.length
    const innerWidth = nodeCount * NODE_WIDTH + Math.max(nodeCount - 1, 0) * NODE_GAP
    const regionWidth = innerWidth + REGION_PADDING_X * 2
    const regionHeight = REGION_PADDING_TOP + NODE_HEIGHT + 28

    const nodes: Node[] = [
        {
            id: 'region',
            position: { x: 0, y: 0 },
            data: { label: model.regionLabel },
            className: 'ocd-lzng-rf-region',
            style: { width: regionWidth, height: regionHeight },
            selectable: false,
            draggable: false,
        },
        {
            id: 'hub',
            parentId: 'region',
            extent: 'parent',
            position: { x: REGION_PADDING_X, y: REGION_PADDING_TOP },
            data: {
                label: (
                    <span>
                        {model.hubLabel}
                        <span className='ocd-lzng-rf-node-sub'>{model.hubVcn}</span>
                    </span>
                ),
            },
            className: 'ocd-lzng-rf-node ocd-lzng-rf-hub',
            style: { width: NODE_WIDTH, height: NODE_HEIGHT },
            draggable: false,
        },
    ]

    const edges: Edge[] = []

    model.environments.forEach((env, index) => {
        const x = REGION_PADDING_X + (index + 1) * (NODE_WIDTH + NODE_GAP)
        nodes.push({
            id: env.id,
            parentId: 'region',
            extent: 'parent',
            position: { x, y: REGION_PADDING_TOP },
            data: {
                label: (
                    <span>
                        {env.name}
                        <span className='ocd-lzng-rf-node-sub'>{env.secure ? 'security zone' : 'environment'}</span>
                    </span>
                ),
            },
            className: `ocd-lzng-rf-node${env.secure ? ' ocd-lzng-rf-secure' : ''}`,
            style: { width: NODE_WIDTH, height: NODE_HEIGHT },
            draggable: false,
        })
        edges.push({
            id: `edge-${env.id}`,
            source: 'hub',
            target: env.id,
            style: { stroke: '#C74634' },
        })
    })

    return { nodes, edges }
}

export function LzngNetworkDiagram({ step1 }: LzngNetworkDiagramProps): JSX.Element {
    const { nodes, edges } = useMemo(() => buildFlow(step1), [step1])

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            fitViewOptions={{ padding: 0.2 }}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            proOptions={{ hideAttribution: true }}
        >
            <Background variant={BackgroundVariant.Dots} gap={18} size={1} color='#d8d8d8' />
            <Controls showInteractive={false} />
            <MiniMap pannable zoomable nodeColor='#C74634' maskColor='rgba(245,245,245,0.7)' />
        </ReactFlow>
    )
}

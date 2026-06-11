import { useMemo, useState } from 'react'
import { ConsolePageProps } from '../types/Console'
import { discoverySampleSnapshot } from '../discovery/OcdDiscoverySampleData'
import { summarizeDiscoveryInventory, summarizeUtilization } from '../discovery/OcdDiscoveryAnalytics'
import { mapDiscoveryServicesToOciTargets } from '../discovery/OcdDiscoveryMappers'
import OcdDiscoveryAnalyticsView from '../discovery/ui/OcdDiscoveryAnalyticsView'
import OcdDiscoveryInventoryView from '../discovery/ui/OcdDiscoveryInventoryView'
import OcdDiscoveryLzMappingView from '../discovery/ui/OcdDiscoveryLzMappingView'
import OcdDiscoveryResourceAnalyticsView from '../discovery/ui/OcdDiscoveryResourceAnalyticsView'
import OcdDiscoveryTopologyView from '../discovery/ui/OcdDiscoveryTopologyView'

type DiscoveryTab = 'inventory' | 'topology' | 'analytics' | 'lz-mapping' | 'resource-analytics'

const discoveryTabs: Array<{ id: DiscoveryTab, label: string }> = [
    { id: 'inventory', label: 'Inventory' },
    { id: 'topology', label: 'Topology' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'lz-mapping', label: 'LZ Mapping' },
    { id: 'resource-analytics', label: 'Resource Analytics' }
]

const formatUsd = (value: number): string => `USD ${value.toLocaleString(undefined, { maximumFractionDigits: 0 })} / month`

const OcdDiscovery = (_props: ConsolePageProps): JSX.Element => {
    const [activeTab, setActiveTab] = useState<DiscoveryTab>('inventory')
    const snapshot = discoverySampleSnapshot
    const summary = useMemo(() => summarizeDiscoveryInventory(snapshot), [snapshot])
    const utilization = useMemo(() => summarizeUtilization(snapshot), [snapshot])
    const targets = useMemo(() => mapDiscoveryServicesToOciTargets(snapshot), [snapshot])

    return (
        <div className='ocd-discovery-page'>
            <header className='ocd-discovery-header'>
                <div>
                    <h1>OCI Discovery Workbench</h1>
                    <div className='ocd-discovery-kpis' aria-label='Discovery summary'>
                        <span>{summary.applications} apps</span>
                        <span>{summary.computeAssets} assets</span>
                        <span>{summary.dependencies} dependencies</span>
                        <span>{formatUsd(utilization.monthlyCostUsd)}</span>
                    </div>
                </div>
            </header>
            <nav className='ocd-discovery-tabs' aria-label='Discovery workbench views' role='tablist'>
                {discoveryTabs.map((tab) => (
                    <button
                        aria-controls={`ocd-discovery-panel-${tab.id}`}
                        aria-selected={activeTab === tab.id}
                        className={activeTab === tab.id ? 'active' : ''}
                        id={`ocd-discovery-tab-${tab.id}`}
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        role='tab'
                        type='button'
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>
            <div
                aria-labelledby={`ocd-discovery-tab-${activeTab}`}
                id={`ocd-discovery-panel-${activeTab}`}
                role='tabpanel'
            >
                {activeTab === 'inventory' && <OcdDiscoveryInventoryView snapshot={snapshot} />}
                {activeTab === 'topology' && <OcdDiscoveryTopologyView snapshot={snapshot} />}
                {activeTab === 'analytics' && <OcdDiscoveryAnalyticsView snapshot={snapshot} />}
                {activeTab === 'lz-mapping' && <OcdDiscoveryLzMappingView snapshot={snapshot} targets={targets} />}
                {activeTab === 'resource-analytics' && <OcdDiscoveryResourceAnalyticsView />}
            </div>
        </div>
    )
}

export default OcdDiscovery

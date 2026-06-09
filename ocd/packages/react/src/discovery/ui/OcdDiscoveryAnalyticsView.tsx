import { summarizeUtilization } from '../OcdDiscoveryAnalytics'
import { DiscoverySnapshot } from '../OcdDiscoveryTypes'

export interface OcdDiscoveryAnalyticsViewProps {
    snapshot: DiscoverySnapshot
}

const formatUsd = (value: number): string => `USD ${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`

const OcdDiscoveryAnalyticsView = ({ snapshot }: OcdDiscoveryAnalyticsViewProps): JSX.Element => {
    const utilization = summarizeUtilization(snapshot)
    const assets = new Map(snapshot.assets.map((asset) => [asset.id, asset]))

    return (
        <div className='ocd-discovery-section'>
            <div className='ocd-discovery-grid'>
                <article className='ocd-discovery-card'>
                    <h2>Monthly Cost</h2>
                    <strong>{formatUsd(utilization.monthlyCostUsd)}</strong>
                </article>
                <article className='ocd-discovery-card'>
                    <h2>CPU Hot Assets</h2>
                    <strong>{utilization.p95CpuHotAssets.length}</strong>
                </article>
                <article className='ocd-discovery-card'>
                    <h2>Memory Hot Assets</h2>
                    <strong>{utilization.p95MemoryHotAssets.length}</strong>
                </article>
            </div>
            <h2>Utilization Metrics</h2>
            <table className='ocd-discovery-table'>
                <thead>
                    <tr>
                        <th>Asset</th>
                        <th>Avg CPU</th>
                        <th>P95 CPU</th>
                        <th>Avg Memory</th>
                        <th>P95 Memory</th>
                        <th>P95 Network</th>
                        <th>P95 IOPS</th>
                        <th>Monthly Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {snapshot.metrics.map((metric) => (
                        <tr key={metric.assetId}>
                            <td>{assets.get(metric.assetId)?.hostName ?? metric.assetId}</td>
                            <td>{metric.avgCpuPercent}%</td>
                            <td>{metric.p95CpuPercent}%</td>
                            <td>{metric.avgMemoryPercent}%</td>
                            <td>{metric.p95MemoryPercent}%</td>
                            <td>{metric.p95NetworkMbps} Mbps</td>
                            <td>{metric.p95Iops.toLocaleString()}</td>
                            <td>{formatUsd(metric.monthlyCostUsd)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OcdDiscoveryAnalyticsView

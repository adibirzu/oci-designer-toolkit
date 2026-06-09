import { buildDependencyEdges } from '../OcdDiscoveryAnalytics'
import { DiscoverySnapshot } from '../OcdDiscoveryTypes'

export interface OcdDiscoveryTopologyViewProps {
    snapshot: DiscoverySnapshot
}

const OcdDiscoveryTopologyView = ({ snapshot }: OcdDiscoveryTopologyViewProps): JSX.Element => {
    const edges = buildDependencyEdges(snapshot)

    return (
        <div className='ocd-discovery-section'>
            <h2>Dependency Topology</h2>
            <table className='ocd-discovery-table'>
                <thead>
                    <tr>
                        <th>Source Application</th>
                        <th>Source Service</th>
                        <th>Target Application</th>
                        <th>Target Service</th>
                        <th>Protocol</th>
                        <th>Port</th>
                        <th>Connections / Hour</th>
                    </tr>
                </thead>
                <tbody>
                    {edges.map((edge) => (
                        <tr key={edge.id}>
                            <td>{edge.sourceApplication}</td>
                            <td>{edge.sourceService}</td>
                            <td>{edge.targetApplication}</td>
                            <td>{edge.targetService}</td>
                            <td>{edge.protocol}</td>
                            <td>{edge.port}</td>
                            <td>{edge.observedConnectionsPerHour.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OcdDiscoveryTopologyView

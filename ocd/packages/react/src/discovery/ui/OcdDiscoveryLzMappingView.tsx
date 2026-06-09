import { DiscoveryOciTargetMapping, DiscoverySnapshot } from '../OcdDiscoveryTypes'
import { recommendDiscoveryLandingZone } from '../OcdDiscoveryLzRecommendations'

export interface OcdDiscoveryLzMappingViewProps {
    snapshot: DiscoverySnapshot
    targets: DiscoveryOciTargetMapping[]
}

const OcdDiscoveryLzMappingView = ({ snapshot, targets }: OcdDiscoveryLzMappingViewProps): JSX.Element => {
    const applications = new Map(snapshot.applications.map((application) => [application.id, application]))
    const services = new Map(snapshot.services.map((service) => [service.id, service]))
    const recommendations = recommendDiscoveryLandingZone(snapshot)

    return (
        <div className='ocd-discovery-section'>
            <h2>Landing Zone Target Mapping</h2>
            <div className='ocd-discovery-recommendations'>
                <section>
                    <h3>Compartments</h3>
                    <ul>
                        {recommendations.compartments.map((compartment) => <li key={compartment}><code>{compartment}</code></li>)}
                    </ul>
                </section>
                <section>
                    <h3>Overlays</h3>
                    <ul>
                        {recommendations.overlays.map((overlay) => <li key={overlay}>{overlay}</li>)}
                    </ul>
                </section>
                <section>
                    <h3>Migration Waves</h3>
                    <ul>
                        {recommendations.migrationWaves.map((wave) => (
                            <li key={wave.name}>
                                <strong>{wave.name}</strong>
                                <span>{wave.applicationIds.length} applications</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
            <table className='ocd-discovery-table'>
                <thead>
                    <tr>
                        <th>Application</th>
                        <th>Source Service</th>
                        <th>Runtime</th>
                        <th>Target Service</th>
                        <th>Resource Type</th>
                        <th>Disposition</th>
                        <th>Confidence</th>
                        <th>Rationale</th>
                    </tr>
                </thead>
                <tbody>
                    {targets.map((target) => (
                        <tr key={target.serviceId}>
                            <td>{applications.get(target.applicationId)?.name ?? 'Unknown'}</td>
                            <td>{services.get(target.serviceId)?.displayName ?? target.serviceId}</td>
                            <td>{target.sourceRuntime}</td>
                            <td>{target.targetService}</td>
                            <td><code>{target.targetResourceType}</code></td>
                            <td>{target.disposition}</td>
                            <td>{target.confidence}</td>
                            <td>{target.rationale}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OcdDiscoveryLzMappingView

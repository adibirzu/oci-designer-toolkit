const resourceAnalyticsQuery = 'SELECT resource_id, resource_name, resource_type, compartment_path, region_name FROM RESOURCE_DIM_V FETCH FIRST 50 ROWS ONLY'

const OcdDiscoveryResourceAnalyticsView = (): JSX.Element => (
    <div className='ocd-discovery-section'>
        <h2>Resource Analytics Integration</h2>
        <p className='ocd-discovery-note'>
            SQL-backed inventory, relationship, graph, and dashboard integration can hydrate discovery snapshots from resource analytics views while preserving the workbench tables and target mapping flow.
        </p>
        <pre><code>{resourceAnalyticsQuery}</code></pre>
    </div>
)

export default OcdDiscoveryResourceAnalyticsView

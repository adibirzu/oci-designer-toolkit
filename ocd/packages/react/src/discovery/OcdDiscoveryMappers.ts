import { DiscoveryOciTargetMapping, DiscoveryRuntimeType, DiscoverySnapshot } from './OcdDiscoveryTypes'

const runtimeTargets: Record<DiscoveryRuntimeType, Omit<DiscoveryOciTargetMapping, 'serviceId' | 'applicationId' | 'sourceRuntime'>> = {
    apache: { targetService: 'Load Balancer + Compute', targetResourceType: 'oci_core_instance', disposition: 'rehost', confidence: 'medium', rationale: 'Apache can move as-is to Compute or front OKE workloads with Load Balancer.' },
    nginx: { targetService: 'Load Balancer + OKE', targetResourceType: 'oci_load_balancer_load_balancer', disposition: 'replatform', confidence: 'high', rationale: 'Nginx edge tiers map cleanly to OCI Load Balancer and container ingress patterns.' },
    tomcat: { targetService: 'OKE', targetResourceType: 'oci_containerengine_cluster', disposition: 'replatform', confidence: 'high', rationale: 'Tomcat applications are strong candidates for container migration to OKE.' },
    weblogic: { targetService: 'WebLogic on OCI', targetResourceType: 'oci_core_instance', disposition: 'rehost', confidence: 'medium', rationale: 'WebLogic can move to OCI Compute-backed WebLogic patterns before deeper modernization.' },
    springboot: { targetService: 'OKE', targetResourceType: 'oci_containerengine_cluster', disposition: 'replatform', confidence: 'high', rationale: 'Spring Boot services are strong candidates for OKE deployment.' },
    iis: { targetService: 'Compute', targetResourceType: 'oci_core_instance', disposition: 'rehost', confidence: 'medium', rationale: 'IIS workloads commonly move first to Windows Compute before application refactoring.' },
    'oracle-database': { targetService: 'Autonomous Database', targetResourceType: 'oci_database_autonomous_database', disposition: 'replatform', confidence: 'medium', rationale: 'Oracle databases should be assessed for Autonomous Database, Base Database, or Exadata based on compatibility and performance.' },
    mysql: { targetService: 'MySQL HeatWave', targetResourceType: 'oci_mysql_mysql_db_system', disposition: 'replatform', confidence: 'high', rationale: 'MySQL workloads map to MySQL HeatWave for managed database operations.' },
    redis: { targetService: 'OCI Cache with Redis', targetResourceType: 'oci_redis_redis_cluster', disposition: 'replatform', confidence: 'high', rationale: 'Redis cache workloads map to managed Redis clusters.' },
    kafka: { targetService: 'Streaming', targetResourceType: 'oci_streaming_stream', disposition: 'refactor', confidence: 'medium', rationale: 'Kafka topics and producers can be assessed for OCI Streaming migration.' },
    rabbitmq: { targetService: 'Queue', targetResourceType: 'oci_queue_queue', disposition: 'refactor', confidence: 'medium', rationale: 'Queueing workloads should be assessed for OCI Queue when protocol semantics fit.' },
    unknown: { targetService: 'Compute', targetResourceType: 'oci_core_instance', disposition: 'retain', confidence: 'low', rationale: 'Unknown services require manual classification before target selection.' }
}

export const mapDiscoveryServicesToOciTargets = (snapshot: DiscoverySnapshot): DiscoveryOciTargetMapping[] =>
    snapshot.services.map((service) => ({
        serviceId: service.id,
        applicationId: service.applicationId,
        sourceRuntime: service.runtime,
        ...runtimeTargets[service.runtime]
    }))

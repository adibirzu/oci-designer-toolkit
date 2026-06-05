# A2 Catalog Curation — Shared Task Notes

## Goal
Expand the OCI catalog in curated batches toward the full provider set. Each
service needs a resourceMap entry + curated resourceAttributes in
ocd/packages/codegen/src/importer/data/OciResourceMap.ts.

## Hard rules (learned)
- A curated attribute leaf named `resources`/`resource`/`results` collides with the
  generator's reserved param -> TS2349 in the model validator. Drop such attributes.
- A curated attr 'home_region' -> homeRegion collides with base OciTerraformResource (TS2416 in export); drop it. Verify the FULL build (model+export+import+react), not just model.
- Do NOT run the full `npm run build` (the appdmg DMG maker won't compile on Node 26).

## Progress
- (loop appends per-iteration here)
- Iteration 2 (catalog 140 -> 154): added 14 high-value services across
  identity/security/db/observability/compute/networking/storage/AI:
  identity_domain (oci_identity_domain),
  cloud_guard_target (oci_cloud_guard_target),
  cloud_guard_detector_recipe (oci_cloud_guard_detector_recipe),
  data_safe_target_database (oci_data_safe_target_database),
  pluggable_database (oci_database_pluggable_database),
  data_guard_association (oci_database_data_guard_association),
  jms_fleet (oci_jms_fleet),
  stack_monitoring_resource (oci_stack_monitoring_monitored_resource),
  apm_synthetics_monitor (oci_apm_synthetics_monitor),
  dr_protection_group (oci_disaster_recovery_dr_protection_group),
  custom_image (oci_core_image),
  public_ip (oci_core_public_ip),
  object_lifecycle_policy (oci_objectstorage_object_lifecycle_policy),
  ai_anomaly_detection_project (oci_ai_anomaly_detection_project).
  Regenerated OCI codegen; STRICT model build clean (no TS2349). Active
  resourceMap entries: 154.

- Iteration 3 (catalog 154 -> 168): added 14 high-value services across
  genai/database/compute/networking/storage/observability/security/dns:
  genai_dedicated_cluster (oci_generative_ai_dedicated_ai_cluster),
  genai_endpoint (oci_generative_ai_endpoint),
  db_home (oci_database_db_home),
  compute_cluster (oci_core_compute_cluster),
  preauthenticated_request (oci_objectstorage_preauthrequest),
  replication_policy (oci_objectstorage_replication_policy),
  private_ip (oci_core_private_ip),
  cluster_network (oci_core_cluster_network),
  unified_agent_configuration (oci_logging_unified_agent_configuration),
  network_source (oci_identity_network_source),
  cloud_guard_responder_recipe (oci_cloud_guard_responder_recipe),
  dns_steering_policy (oci_dns_steering_policy),
  autonomous_container_database (oci_database_autonomous_container_database),
  database_backup (oci_database_backup).
  Note: oci_generative_ai_agent_agent + _knowledge_base were dropped — the
  vendored oci/tf-schema.json predates the GenAI Agent resource types, so the
  generator silently skips them. Substituted db_home + compute_cluster (both
  present in schema). Regenerated OCI codegen; STRICT model build clean (exit 0,
  0 TS errors, no TS2349). Active resourceMap entries: 168.

- Iteration 4 (catalog 168 -> 182): added 14 high-value services across
  networking(FastConnect)/loadbalancer/database(Exadata)/dns/email/devops/security/AI:
  virtual_circuit (oci_core_virtual_circuit),
  cross_connect (oci_core_cross_connect),
  cross_connect_group (oci_core_cross_connect_group),
  load_balancer_certificate (oci_load_balancer_certificate),
  load_balancer_path_route_set (oci_load_balancer_path_route_set),
  vm_cluster (oci_database_vm_cluster),
  autonomous_vm_cluster (oci_database_autonomous_vm_cluster),
  exadata_infrastructure (oci_database_exadata_infrastructure),
  dns_view (oci_dns_view),
  email_sender (oci_email_sender),
  devops_deployment (oci_devops_deployment),
  devops_connection (oci_devops_connection),
  data_safe_security_assessment (oci_data_safe_security_assessment),
  ai_anomaly_detection_model (oci_ai_anomaly_detection_model).
  Notes: removed a pre-existing empty `oci_database_exadata_infrastructure: []`
  attr stub that collided with the new populated entry (TS1117). Dropped
  `region` from virtual_circuit and the `private_key`/`passphrase` secret inputs
  from load_balancer_certificate (collision/secret-hygiene caution). Regenerated
  OCI codegen; FULL build (model+export+import+react) clean: exit 0, 0 TS errors,
  no TS2416/TS2349. Active resourceMap entries: 182.

## Next
- Pick services NOT already in OciResourceMap.ts; curate ~14/batch.
- Before curating: confirm each candidate exists in
  packages/codegen-cli/schema/oci/tf-schema.json (grep count >0), else the
  generator skips it silently and the map entry is dead.

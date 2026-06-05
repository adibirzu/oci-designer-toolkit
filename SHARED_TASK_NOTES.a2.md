# A2 Catalog Curation — Shared Task Notes

## Goal
Expand the OCI catalog in curated batches toward the full provider set. Each
service needs a resourceMap entry + curated resourceAttributes in
ocd/packages/codegen/src/importer/data/OciResourceMap.ts.

## Hard rules (learned)
- A curated attribute leaf named `resources`/`resource`/`results` collides with the
  generator's reserved param -> TS2349 in the model validator. Drop such attributes.
- Verify with the STRICT model build: `npm run build --workspace=packages/model`.
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

## Next
- Pick services NOT already in OciResourceMap.ts; curate ~14/batch.

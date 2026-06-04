# OCI LZ Designer — Consolidated Roadmap

Captures the larger, multi-phase work requested for the enhanced toolkit. Each phase is independently shippable. Status: ▢ todo · ◐ in progress · ✅ done.

## Already delivered (this branch)
- ✅ Oracle Redwood (Next-Gen) theme; live cost estimator (cetools pricing); modern 5-step Landing Zone Wizard (Foundation→Review) with live React-Flow diagram + real Operating-Entities jsonnet generation.
- ✅ OCI stencil palette restored (was commented out upstream); web Terraform import; Back-to-Designer exit; in-app LZ update notifications (GitHub) + `setup-lz`.
- ✅ Issue fixes (#434/#633/#563/#369/#452/#741/#543, etc.).

## Phase A — Stencils: full catalog + official icons (L3)
- ▢ A1. Auto-generate the OCI palette from ALL model resources (currently 35 of 57 exposed) — `OcdPalette.ts` from the model registry, grouped, using the 112 existing `oci-*` icon classes; flag resources without an icon.
- ▢ A2. Full OCI service catalog: regenerate model/properties/terraform from the complete OCI Terraform provider schema (`codegen-cli`: `generate-oci-*` against a full `oci-schema.json`) → all services, not just 57.
- ▢ A3. Official Oracle icon set: vendor the official OCI architecture/diagram icons (per https://docs.oracle.com/en-us/iaas/Content/General/Reference/graphicsfordiagrams.htm) and map each resource → official SVG. Keep icons "up to date" via a documented refresh.
- ▢ A4. Per-stencil Terraform preview (show the HCL a resource generates) + service relationships (valid parent/child + connection types) rendered on the canvas.
- ▢ A5. Link palette → LZ design: drop a stencil and have it attach into the generated Landing Zone model.

## Phase B — Cross-project mapping (single source of truth)
The connective tissue for stencils + cost + the LZ wizard. A generated canonical map per OCI resource:
`{ ocdModelType, ociTerraformType, displayName, oeLzngName, paletteGroup, iconClass, costSkus[] , shapeFamily? }`.
- ◐ B1. **Compute shapes → SKUs** (Image #5): map every VM/BM shape family (E2/E3/E4/E5/E6, A1, Standard2, DenseIO, Optimized3, x86/AMD/Intel/Ampere Generic, Micro, BM.*) to its OCPU + memory cetools part numbers, so the cost estimator stops using one E5 rate for all shapes. Verify part numbers live against the cetools API; do not invent.
- ▢ B2. **All-services → SKUs**: extend cost SKU mapping beyond compute/block-volume to the rest (LB, object storage, logging, monitoring, streaming, DB, OKE, …) using verified cetools part numbers; flag usage-based (consumption) services.
- ▢ B3. **Names mapped between the 2 projects**: OCD model resource names ↔ OE/LZNG (Operating Entities jsonnet) names ↔ Terraform types, so wizard output and designer model line up. Drives "Open generated LZ in Designer".

## Phase C — Web discovery (import from OCI in the browser)
Browsers cannot read `~/.oci/config` or call the OCI SDK (CORS). Needs a backend.
- ▢ C1. A small local service (Node/Express or reuse the Electron main) exposing read-only OCI query endpoints (`/profiles`, `/regions`, `/tenancy/:compartment/resources`) that read `~/.oci/config` and call the OCI SDK server-side.
- ▢ C2. Wire `OcdConfigFacade`/`OcdReferenceDataQuery` web paths to that service (today they reject in web → "Failed to Read Profiles").
- ▢ C3. Security: bind localhost only, no credentials in the browser, document setup. (Desktop discovery already works with a valid `~/.oci/config`.)

## Recommended sequence
B1 (shapes→SKUs, concrete + verifiable) → A1 (full palette from model) → B3 (name mapping) → A3 (official icons) → A4/A5 (TF preview/relations/LZ link) → B2 (all-service SKUs) → C (web discovery).

## Notes
- Discovery, canvas drag/connect, and OCI SDK calls are Electron-runtime (fs + SDK + no CORS). The web preview covers the wizard, palette, and Terraform import.
- No OCIDs/secrets committed; vendored OCID-bearing data is fetched via `npm run setup-lz` (see no-ocids rule).

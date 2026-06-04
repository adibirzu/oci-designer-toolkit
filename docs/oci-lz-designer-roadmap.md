# OCI LZ Designer — Consolidated Roadmap

Captures the larger, multi-phase work requested for the enhanced toolkit. Each phase is independently shippable. Status: ▢ todo · ◐ in progress · ✅ done.

## Already delivered (this branch)
- ✅ Oracle Redwood (Next-Gen) theme; live cost estimator (cetools pricing); modern 5-step Landing Zone Wizard (Foundation→Review) with live React-Flow diagram + real Operating-Entities jsonnet generation.
- ✅ OCI stencil palette restored (was commented out upstream); web Terraform import; Back-to-Designer exit; in-app LZ update notifications (GitHub) + `setup-lz`.
- ✅ Issue fixes (#434/#633/#563/#369/#452/#741/#543, etc.).

## Phase A — Stencils: full catalog + official icons (L3)
- ✅ A1. Auto-generate the OCI palette from ALL model resources — `OcdPalette.ts` from the model registry, grouped, using the `oci-*` icon classes; flags resources without an icon. (commit `6f6f5429`)
- ◐ A2. Full OCI service catalog: regenerate model/properties/terraform from the complete OCI Terraform provider schema (`codegen-cli`: `generate-oci-*` against a full `oci-schema.json`) → all services. **Partial:** incremental services added (DNS/Logging/Monitoring/Notifications/Functions + 8 more via codegen, commits `7e277306`, `54905b48`); full-schema regen still pending.
- ✅ A3. Official Oracle icon set: vendored the official OCI architecture/diagram icons and mapped each resource → official SVG, with a documented refresh. (commits `6c339c69`, `1a2e43e2`; see `docs/oci-icons-refresh.md`)
- ▢ A4. Per-stencil Terraform preview (show the HCL a resource generates) + service relationships (valid parent/child + connection types) rendered on the canvas.
- ▢ A5. Link palette → LZ design: drop a stencil and have it attach into the generated Landing Zone model.

## Phase B — Cross-project mapping (single source of truth)
The connective tissue for stencils + cost + the LZ wizard. A generated canonical map per OCI resource:
`{ ocdModelType, ociTerraformType, displayName, oeLzngName, paletteGroup, iconClass, costSkus[] , shapeFamily? }`.
- ✅ B1. **Compute shapes → SKUs** (Image #5): map every VM/BM shape family (E2/E3/E4/E5/E6, A1, Standard2, DenseIO, Optimized3, x86/AMD/Intel/Ampere Generic, Micro, BM.*) to its OCPU + memory cetools part numbers, plus GPU + HPC shapes, so the cost estimator no longer uses one E5 rate for all shapes. Part numbers verified against the cetools API. (commits `9be8a63b`, `a0cb14e3`)
- ✅ B2. **All-services → SKUs**: cost SKU mapping extended beyond compute/block-volume (LB, object storage, logging, monitoring, streaming, DB, OKE, …) with verified cetools part numbers; usage-based (consumption) services flagged. (commit `30551de6`)
- ✅ B3. **Names mapped between the 2 projects**: OCD model resource names ↔ OE/LZNG (Operating Entities jsonnet) names ↔ Terraform types, so wizard output and designer model line up. Drives "Open generated LZ in Designer". (commit `00681066`)

## Phase C — Web discovery (import from OCI in the browser) ✅
Browsers cannot read `~/.oci/config` or call the OCI SDK (CORS). Needs a backend. (commit `2fc82ae3`)
- ✅ C1. Local `@ocd/web-server` exposes read-only OCI endpoints (`/api/oci/profiles`, `/profile`, `/regions`, `/compartments`, `/query`, `/dropdown`) plus Resource Manager stacks, reading `~/.oci/config` and calling the OCI SDK server-side.
- ✅ C2. `OciApiFacade` web paths wired to that service via the Vite dev-server `/api/oci` + `/api/pricing` proxy mounts.
- ✅ C3. Security: localhost bind + restricted CORS (commit `867b6d15`); no credentials in the browser. (Desktop discovery already works with a valid `~/.oci/config`.)

> Known deferred bug: upstream #586 — RM export emits an invalid route-distribution match-criteria statement. Separate from this roadmap; track independently.

## Recommended sequence
✅ Done: B1 → A1 → B3 → A3 → B2 → C. **Remaining:** A5 (palette → LZ attach) → A4 (per-stencil TF preview + relations) → A2 (full-schema service catalog regen). Quality follow-ups (not original roadmap): web bundle code-splitting, JS/TS test runner (Vitest), wizard E2E.

## Notes
- Discovery, canvas drag/connect, and OCI SDK calls are Electron-runtime (fs + SDK + no CORS). The web preview covers the wizard, palette, and Terraform import.
- No OCIDs/secrets committed; vendored OCID-bearing data is fetched via `npm run setup-lz` (see no-ocids rule).

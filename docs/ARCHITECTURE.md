# Architecture — OCI Designer Toolkit (enhanced fork, v0.4.0)

This document describes the architecture of the enhanced fork. It complements the
upstream OKIT design and focuses on what this fork adds: the Landing Zone wizard,
the designer overlays (Realm/AD/FD scaffold, Database Observability, OKE-native),
cost estimation, web discovery, and the build/test gates.

## 1. Monorepo layout

The app lives under `ocd/` as an npm-workspaces monorepo (TypeScript). Key
packages:

| Package | Role |
|---|---|
| `@ocd/model` | Core design model: `OcdDesign` (model + view), `OciResource`, generated provider resources, validator. The **single source of truth** for resource types and the strict `tsc` gate. |
| `@ocd/core` | Shared utilities (`OcdUtils`). |
| `@ocd/codegen` + `@ocd/codegen-cli` | Code generation from the OCI/Azure/Google Terraform provider schemas → model/properties/terraform/validator/excel/markdown/tabular wrappers. Driven by a curated allow-list (`OciResourceMap.ts`). |
| `@ocd/import` / `@ocd/export` | Terraform/Excel/Markdown import and export. |
| `@ocd/query` | OCI SDK discovery (server/desktop side). |
| `@ocd/react` | All UI: the console, canvas, palette, properties, the LZ wizard, cost estimator, and the overlays. The bulk of the fork's code. |
| `@ocd/desktop` | The app shell: Electron build (`electron-forge`) **and** the static web build (`vite.web.config.mts` → `web-dist/` for GitHub Pages). |
| `@ocd/web-server` | A localhost backend exposing read-only OCI endpoints for the browser build. |

## 2. The design model (`@ocd/model` `OcdDesign`)

- **Model** (`design.model.<provider>.resources.<type>[]`) — the actual resources
  and their fields, including FK fields (`vcnId`, `subnetId`, `securityListIds[]`)
  that drive associations.
- **View** (`design.view.pages[].coords[]`) — `OcdViewCoords` placed on the canvas.
  Nesting is via `coords.coords[]` with `container: true`; a coord's `ocid` points
  at its model resource `id`, `pgid`/`pocid` at its parent coord/resource.
- **Layers** — one per compartment; gate connector visibility (resource *rendering*
  uses the full `page.coords`, unfiltered).
- Associations are **derived from model FK fields** (`OciResource.getAssociationIds`)
  and rendered when a coord's `showConnections` is true (default).

## 3. Landing Zone wizard → designer bridge → overlays

```
LZ Wizard (Lzng* steps, OcdLzConfig)
   │  generate (jsonnet-WASM, in-browser; OE Operating-Entities sources via `npm run setup-lz`)
   ▼
OE JSON (iam.json + network.json)
   │  buildOcdDesignFromLz(files, title, config)   [OcdLzToModel.ts]
   ▼
OcdDesign  (compartments, VCNs, subnets, gateways, …; userDefined.lzConfig + lzOrigin)
   │  on "Open in Designer":
   │    1. overlays add model resources  →  2. autoLayout  →  3. scaffold frames
   ▼
Designer canvas
```

Designer-side **overlays** are pure, immutable, and idempotent (keyed by a
`userDefined.<marker>` role, never by regenerated `id`/`okitReference`). Each is a
no-op unless its wizard tick is on and the design is `lzOrigin`:

| Overlay | Module | Adds |
|---|---|---|
| Realm/AD/FD scaffold | `OcdLzScaffold.ts` (`reconcileLzScaffold`, `addRealmAdFdFrames`) | Nested Realm > Region > AD > FD view-only `GeneralRectangle` frames (region-driven AD count from `OcdLzADData.ts`). Also addable to any design via the **Add Frames** toolbar action. |
| Database Observability | `OcdLzObservability.ts` | DBM private endpoint, OPSI private endpoint, OPSI Database Insight (wired to the OPSI PE), Management Agent. |
| OKE-native | `OcdLzOke.ts` | VCN-native CNI subnets (dedicated /20 pod subnet), enhanced OKE cluster + node pool, Workload Identity dynamic group + policy, NSG, Vault + Key. |

The **dual-tick reconcile** (`OcdLzReconcile.ts`): a wizard tick records intent on
the design; a designer "LZ sync" tick enables live reconcile. When both are on, the
`setOcdDocument` wrapper in `OcdConsole.tsx` re-applies the scaffold on every edit —
safe because the reconcile is idempotent (same-reference return on no change).

Why overlays instead of extending the OE jsonnet: AD/FD are infrastructure domains
(not IAM compartments) and the observability/OKE topologies are designer concerns;
keeping them as decoupled, testable designer overlays avoids coupling to the
vendored upstream Operating-Entities generator.

## 4. Drag-to-connect (`OcdConnect.ts`)

"Connect mode" (toolbar toggle, `ocdConsoleConfig.config.connectMode`) changes the
canvas drag-end: dropping resource A onto B calls `connectResources(design, A, B)`,
which resolves A's `<targetType>Id` / `<targetType>Ids` FK field and sets it to B.
The association then renders via the existing connector layer. Pure + unit-tested;
default reparenting behaviour is unchanged when connect mode is off.

## 5. Cost estimation

`@ocd/react/src/cost`: `OcdResourcePriceMap` (all-costable-service SKUs) +
`OcdComputeShapeSkus` (per-shape OCPU/memory/GPU part numbers). Prices come from
Oracle's public `cetools` list-pricing API (`/api/pricing` proxy in dev/web-server;
direct in Electron), filtered locally per currency; a bundled snapshot is the
offline fallback. `estimateMonthlyCost` is a pure walk over the design resources.

## 6. Web vs Desktop runtime

- **Electron desktop**: OCI discovery, Terraform import, and pricing route through
  the Electron main process (IPC). Full functionality.
- **Static web (GitHub Pages)**: no backend. The wizard (jsonnet-WASM), palette,
  cost snapshot, scaffold/overlays, and Terraform import work client-side. OCI
  discovery and live OE *generation* require the `@ocd/web-server` backend
  (`npm run web-server`) or the desktop app.

## 7. Build & test gates (important)

- **Two-level build.** The Electron renderer consumes the **prebuilt** `@ocd/react/dist`,
  so source edits need `npm run build --workspace=packages/react` to take effect.
  The static web build (`vite.web.config.mts`) **aliases `@ocd/react` to source**,
  so it reflects edits directly and splits vendors out of the entry chunk.
- **Strict gate = the full `npm run build`** (`tsc -b` across all workspaces, incl.
  `@ocd/model`'s `tsc -p tsconfig-cjs.json`). This catches generated-code type
  errors that `build:pages` (Vite-only) and Vitest do not — e.g. a curated
  attribute named `resources`/`resource`/`results` collides with the generator's
  reserved parameter.
- **Tests**: `cd ocd && npm test` (Vitest, 130+ tests). E2E: `npm run test:e2e`
  (Playwright wizard smoke + overlay flow; skips gracefully where OE generation is
  unavailable headless).
- **Codegen catalog** is curated in batches (`OciResourceMap.ts` + curated
  `resourceAttributes`); a blind full regen yields empty skeletons. Generation is
  deterministic.

## 8. Security

No OCIDs, tenancy names, public IPs, or secrets are committed. OCID-bearing OE
reference data is fetched locally via `npm run setup-lz` (git-ignored `baselines/`).
A pre-commit redaction gate (`.githooks/pre-commit`) scans staged diffs.

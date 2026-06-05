# CLAUDE.md

Enhanced fork of **OCI Designer Toolkit (OKIT)** — "OCD" desktop/web designer + OCI Landing Zone wizard + cost estimator. Public fork; redaction rules apply (see below).

## Layout

- `ocd/` — npm-workspaces monorepo (TypeScript). Key packages: `react` (UI), `web`/`desktop` (Vite web + Electron app), `web-server`, `core`, `codegen`, `model`, `query`, `import`, `export`, `cli`.
- `scripts/` — Python + Node tooling (Landing Zone gen/validate, cost estimate, price snapshots).
- `addons/`, `examples/`, `ocd/library/` — Observability Landing Zone assets + demo data.

Node v26; no engine pin. Python deps in `requirements.txt` (Flask, `oci`, gunicorn).

## Common commands

Run from repo root unless noted.

| Task | Command |
|---|---|
| Install JS deps | `npm install` (delegates to `ocd`, uses `--legacy-peer-deps`) |
| Vendor upstream OCI LZ data | `npm run setup-lz` (or `:latest`) — **required** before LZ features work |
| Web dev server (Vite) | `npm run web` → http://localhost:5173 |
| Desktop app (Electron) | `npm run desktop` |
| Static web build (Pages) | `npm run build:pages` |
| Full build | `npm run build` |
| Codegen (model → TS) | `npm run compile` then `npm run generate` |
| Python tests | `pytest -q` (scoped to `scripts/tests` via `pytest.ini`) |
| Lint (desktop pkg) | `cd ocd/packages/desktop && npm run lint` (eslint `.ts,.tsx`) |
| Web API server | `npm run web-server` (build first: `cd ocd && npm run build`) |
| Install git hooks | `npm run hooks:install` (redaction gate + pre-push pytest) |

Notes:
- `ocd` root + most workspaces have **placeholder `test` script** (`exit 1`); no JS test runner wired yet. Automated tests today = Python (`scripts/tests`).
- LZ wizard renders OCI Operating-Entities landing zone via jsonnet-WASM (`libjsonnet.wasm`); desktop `prebuild` copies CSS + WASM into place.

## Conventions & guardrails

- **Public fork — never commit real OCIDs, tenancy/namespace strings, public IPs, secrets, PII.** Vendor upstream data via `npm run setup-lz`; keep `baselines/` git-ignored. `.githooks/pre-commit` redaction gate enforces — run `npm run hooks:install` once.
- Keep files focused (many small modules); follow existing Redwood `--oracle-*` design tokens for UI work.
- Branch `feature/lzng-redwood-cost-estimator` → PR #1 against `master`.
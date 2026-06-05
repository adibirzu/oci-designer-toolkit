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

## Next
- Pick services NOT already in OciResourceMap.ts; curate ~14/batch.

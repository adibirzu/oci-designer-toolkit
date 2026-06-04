# OCI Stencil Icon Refresh (roadmap A3)

How the OCD designer's OCI palette icons are produced, how to add a missing
icon, and how to vendor / refresh Oracle's official OCI diagram icon set.

## 1. The icon pipeline (source → generated CSS → class names)

```
packages/react/src/css/*.css            (TRUE SOURCE — tracked in git)
        │   e.g. oci-theme.css holds one CSS rule per stencil:
        │       .oci-instance { background-image: url("data:image/svg+xml;base64,…"); }
        │
        ▼  npm run prebuild --workspace=packages/desktop
        │     (`cp ../react/src/css/*.css ./src/css`)
packages/desktop/src/css/*.css          (COPY — gitignored: **/desktop/src/css/*.css)
        │
        ▼  npm run generate-ocd-svg-css-desktop --workspace=packages/codegen-cli
        │     → node lib/esm/ocd-build-svg-css.js -d ../react/src/data -i ../desktop/src/css
        │     (OcdSvgCssGenerator reads EVERY *.css in the input dir and inlines each file
        │      verbatim into a String.raw entry keyed by filename)
        ▼
packages/react/src/data/OcdSvgCssData.ts (GENERATED — tracked in git)
        │     export const svgCssData = { 'oci-theme.css': String.raw`…`, … }
        │     export const ociSvgThemeCss = svgCssData['oci-theme.css']
        │     getSvgCssData(design) → string[] of theme CSS injected into the canvas/palette
        ▼
React app injects ociSvgThemeCss; the palette renders a stencil <div className={resource.class}>.
The CSS class (e.g. `.oci-instance`) supplies `background-image`, so the stencil shows a glyph.
```

### Class-name convention

- A palette resource's `class` (in `packages/react/src/data/OcdPalette.ts`, e.g.
  `oci-instance`) is **load-bearing**: the drop handler PascalCases it to resolve the
  model resource (`oci-instance` → `OciInstance`). Do not rename it to suit an icon.
- The SAME class string must have a matching `.<class> { background-image: … }` rule in
  `oci-theme.css`, or the stencil renders blank.
- Group/provider header classes (`oci-network`, `oci-storage`, `oci-provider`, …) are
  also styled here but render a text label, so a missing glyph there is not a blank stencil.

### Key facts

- **Edit `packages/react/src/css/oci-theme.css`, never `packages/desktop/src/css/…`** — the
  desktop copy is gitignored and overwritten by `prebuild`.
- `OcdSvgCssData.ts` is generated; regenerate it rather than hand-editing.
- The generator bundles *all* `*.css` files present in the input dir at generation time. If
  unrelated theme CSS (e.g. landing-zone / redwood-ng) is present but you only want to
  commit icon changes, regenerate with only the intended CSS files in the dir (move the
  others aside temporarily) so the committed diff stays scoped.

## 2. Adding / fixing a single icon (the authoritative path)

1. Author a small SVG in the existing Oracle "redwood" style:
   `viewBox="0 0 42 42"`, white circle background, glyph stroke `#2c5967`, thin strokes.
2. Base64-encode it and add a rule to `packages/react/src/css/oci-theme.css`:
   ```css
   .oci-my-resource {
       background-image: url("data:image/svg+xml;base64,<BASE64>");
   }
   ```
   (Optionally add `.oci-my-resource-background-colour` to the matching group rule near the
   bottom of the file so the stencil tile gets the themed fill.)
3. Copy + regenerate + build:
   ```bash
   cd ocd
   npm run prebuild --workspace=packages/desktop
   npm run generate-ocd-svg-css-desktop --workspace=packages/codegen-cli
   npm run build --workspace=packages/react
   ```
4. Verify the class now has a rule:
   ```bash
   grep -c '\.oci-my-resource ' packages/react/src/data/OcdSvgCssData.ts
   ```

### Quick gap audit (palette class → does an icon exist?)

```bash
cd ocd
node -e '
const fs=require("fs");
const css=fs.readFileSync("packages/react/src/css/oci-theme.css","utf8");
const icon=new Set(); const re=/([^{}]+)\{([^}]*)\}/g; let m;
while((m=re.exec(css))) if(/background-image\s*:/.test(m[2]))
  m[1].split(",").forEach(s=>{const x=s.trim().match(/\.(oci-[a-z0-9-]+)/); if(x) icon.add(x[1]);});
const src=fs.readFileSync("packages/react/src/data/OcdPalette.ts","utf8")
  .replace(/\/\*[\s\S]*?\*\//g,"").split("\n").filter(l=>!l.trim().startsWith("//")).join("\n");
const pal=new Set(); let r=/"class":\s*"(oci-[a-z0-9-]+)"/g;
while((m=r.exec(src))) pal.add(m[1]);
console.log("gaps:", [...pal].filter(c=>!icon.has(c)).sort());
'
```

## 3. Vendoring / refreshing Oracle's official OCI icon set

Reference page: <https://docs.oracle.com/en-us/iaas/Content/General/Reference/graphicsfordiagrams.htm>

The official set IS fetchable headlessly (verified). The page links two asset packs:

```bash
curl -sL -A "Mozilla/5.0" \
  https://docs.oracle.com/iaas/Content/Resources/Assets/OCI-Style-Guide-for-Drawio.zip \
  -o OCI-Style-Guide-for-Drawio.zip      # ~7 MB, HTTP 200
curl -sL -A "Mozilla/5.0" \
  https://docs.oracle.com/iaas/Content/Resources/Assets/OCI_Icons_Visio.zip \
  -o OCI_Icons_Visio.zip                 # ~7 MB, HTTP 200
```

**Important format note.** These packs do *not* contain standalone `.svg` files. They are
editor stencil libraries:

- `OCI-Style-Guide-for-Drawio.zip` → `OCI Library.xml` (a drawio `<mxlibrary>` whose shapes
  are base64 + raw-DEFLATE + URI-encoded vector definitions) plus `.drawio` toolkit files.
- `OCI_Icons_Visio.zip` → Visio `.vssx` stencils.

Oracle's official set also does **not** ship distinct glyphs for every OCD sub-resource.
Fine-grained stencils such as **DRG Route Table**, **DRG Route Distribution**, and
**File System Export Set** reuse their parent-service icon (DRG, File Storage) in Oracle's
own diagrams. For those, hand-authored line icons (see §2) are the correct approach and are
what this repo ships.

### Refresh procedure (for icons that DO exist in the official pack)

1. Download + unzip the drawio pack:
   ```bash
   unzip OCI-Style-Guide-for-Drawio.zip -d /tmp/oci-official
   ```
2. Decode the drawio `<mxlibrary>` to recover each shape. drawio encodes shape XML as
   `base64( rawDeflate( uriEncode( shapeXml ) ) )`. To extract a single shape's vector
   stencil, decode that chain (e.g. with Node `zlib.inflateRawSync` after base64-decoding
   the per-shape `xml` field, then `decodeURIComponent`). Each shape becomes drawio
   `shape=stencil(...)` markup or an `<svg>`.
3. Render / save each recovered shape as a 42×42 SVG matching the redwood style
   (white circle, `#2c5967` glyph) so it sits consistently with the existing icons.
4. Base64-encode each SVG and add/replace the corresponding
   `.oci-<resource> { background-image: url("data:image/svg+xml;base64,…"); }` rule in
   `packages/react/src/css/oci-theme.css`. Match the class to the palette `class` string
   (kebab-case, must equal the existing palette entry; never rename palette classes).
5. Regenerate + build per §2 steps 3–4.

> Headless note: steps 1 and the download are fully automatable. Step 2/3 (decode + visual
> normalization to the redwood circle style) is a one-time scripted/manual pass per new icon,
> because the official assets are editor stencils, not drop-in SVG files.

## 4. Current state

- 49 OCI resource stencils in the palette all have real icons in `oci-theme.css`.
- The only remaining icon-less OCI class is `oci-provider`, which is a provider header
  label (renders text, never a blank stencil).
- Icons added in this pass (hand-authored redwood-style line icons, since Oracle's pack has
  no dedicated glyph for them): `oci-drg-route-table`, `oci-drg-route-distribution`,
  `oci-file-system-export-set`.

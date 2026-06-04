import { defineConfig } from 'vite'

// Standalone STATIC web build of the Electron renderer for GitHub Pages.
//
// This config is intentionally SEPARATE from `vite.renderer.config.mts` (which is
// driven by electron-forge / @electron-forge/plugin-vite). It builds the same
// `index.html` -> `/src/main.tsx` renderer entry into a plain static `web-dist`
// directory that can be served from any static host (GitHub Pages, S3, nginx).
//
// Base path:
//   GitHub Pages serves a project site under https://<user>.github.io/<repo>/, so
//   every asset URL must be prefixed with that sub-path. The default targets the
//   canonical repo name `oci-designer-toolkit`. Override for a fork / different
//   repo name or a root deploy:
//
//     OCD_PAGES_BASE=/my-fork/ npm run build:pages   # project site
//     OCD_PAGES_BASE=/        npm run build:pages    # user/org root or custom domain
//
// The Landing Zone wizard resolves `libjsonnet.wasm` against `document.baseURI`
// (see OcdJsonnetWasm.ts). The wasm lives in `public/` and is emitted at the base
// root, so `new URL('libjsonnet.wasm', document.baseURI)` resolves correctly under
// the Pages sub-path with no extra wiring.
//
// What is NOT available on a static deploy (no backend):
//   - /api/oci  (OCI discovery) -> the local @ocd/web-server is absent; the
//     discovery dialog shows its connection error. Expected.
//   - /api/pricing (live cetools) -> absent; the cost estimator falls back to the
//     bundled price snapshot. Expected.
// Everything else (wizard jsonnet-WASM generation, Terraform import, palette,
// theme, cost snapshot, LZ update notifications) is fully client-side and works.

function normalizeBase(raw: string | undefined): string {
  const fallback = '/oci-designer-toolkit/'
  if (!raw || raw.trim() === '') return fallback
  let base = raw.trim()
  if (!base.startsWith('/')) base = `/${base}`
  if (!base.endsWith('/')) base = `${base}/`
  return base
}

const base = normalizeBase(process.env.OCD_PAGES_BASE)

// https://vitejs.dev/config
export default defineConfig({
  base,
  assetsInclude: ['**/*.wasm'],
  build: {
    target: 'esnext',
    // Dedicated output dir so the static build never collides with electron-forge's
    // `.vite/` / `out/` directories or the desktop `dist`.
    outDir: 'web-dist',
    emptyOutDir: true,
  },
  server: {
    // Mirror the dev proxy so `vite preview --config vite.web.config.mts` behaves
    // like `npm run web` if a developer points it at a running backend. On a real
    // static Pages deploy these proxies do not exist (and are not needed).
    proxy: {
      '/api/pricing': {
        target: 'https://apexapps.oracle.com',
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/api\/pricing/, '/pls/apex/cetools/api/v1/products'),
      },
      '/api/oci': {
        target: process.env.OCD_WEB_SERVER_URL || 'http://127.0.0.1:5050',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

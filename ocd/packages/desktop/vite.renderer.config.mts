import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  server: {
    proxy: {
      // Proxy the unauthenticated OCI list-pricing API so the renderer (web /
      // dev server) can fetch it without CORS issues. The Electron desktop build
      // routes pricing through the main process instead (see OciPriceListHandlers).
      '/api/pricing': {
        target: 'https://apexapps.oracle.com',
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/api\/pricing/, '/pls/apex/cetools/api/v1/products')
      }
    }
  }
});

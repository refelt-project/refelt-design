import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'

export default defineConfig({
  plugins: [
    svelte(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          injectScript: `<link rel="modulepreload" as="script">`
        }
      }
    })
  ],
  
  // ✨ NOWE: Path aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  
  build: {
    // Optymalizacja bundle
    rollupOptions: {
      output: {
        // Lepsze code splitting
        manualChunks: {
          'vendor': ['svelte', 'svelte-spa-router'],
          'icons': ['lucide-svelte']
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    // Minifikacja z terser dla lepszej kompresji
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace']
      },
      mangle: {
        safari10: true
      }
    },
    // CSS code splitting
    cssCodeSplit: true,
    // Source maps tylko w dev
    sourcemap: false,
    // Chunk size warning threshold
    chunkSizeWarningLimit: 500,
    // Module preload polyfill
    modulePreload: {
      polyfill: true,
      resolveDependencies: (filename, deps, { hostId, hostType }) => {
        // Automatyczny preload dla wszystkich dependencies
        return deps
      }
    }
  },
  
  // Optymalizacja dev server
  server: {
    port: 5173,
    strictPort: false,
    open: true
  },
  
  // Preview (dla buildu)
  preview: {
    port: 4173,
    strictPort: false,
    open: true
  }
})
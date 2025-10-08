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
  
  // ✨ Path aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  
  build: {
    // Optymalizacja bundle
    rollupOptions: {
      output: {
        // ✨ AUTOMATIC ROUTE-BASED CODE SPLITTING
        manualChunks: (id) => {
          // Vendor libraries - shared chunk
          if (id.includes('node_modules')) {
            // Svelte core
            if (id.includes('svelte')) {
              return 'vendor-svelte'
            }
            // Router
            if (id.includes('svelte-spa-router')) {
              return 'vendor-router'
            }
            // Icons
            if (id.includes('lucide-svelte')) {
              return 'vendor-icons'
            }
            // Inne node_modules
            return 'vendor'
          }
          
          // ✨ UI Kit - shared chunk (używany wszędzie)
          if (id.includes('/src/lib/') && !id.includes('/src/lib/router.js')) {
            return 'ui-kit'
          }
          
          // ✨ Rich components - shared chunk
          if (id.includes('/src/rich/')) {
            return 'rich-components'
          }
          
          // ✨ Pages - każdy page jako osobny chunk
          if (id.includes('/src/pages/')) {
            // Wyciągnij nazwę page z ścieżki
            const match = id.match(/\/pages\/(.+)\.svelte/)
            if (match) {
              const pageName = match[1]
                .replace(/\//g, '-')  // users/index -> users-index
                .replace(/\[|\]/g, '') // [id] -> id
                .toLowerCase()
              return `page-${pageName}`
            }
          }
          
          // ✨ Parts - shared chunks (używane w wielu miejscach)
          if (id.includes('/src/parts/')) {
            const match = id.match(/\/parts\/(.+)\.svelte/)
            if (match) {
              const partName = match[1].toLowerCase()
              return `part-${partName}`
            }
          }
        },
        
        // Naming strategy dla lepszej czytelności
        chunkFileNames: (chunkInfo) => {
          // Development - czytelne nazwy
          if (process.env.NODE_ENV !== 'production') {
            return 'assets/[name].js'
          }
          // Production - z hashem dla cache busting
          return 'assets/[name]-[hash].js'
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
    
    // ✨ CSS code splitting - każdy chunk może mieć swój CSS
    cssCodeSplit: true,
    
    // Source maps tylko w dev
    sourcemap: false,
    
    // ✨ Zwiększony threshold - mamy teraz wiele małych chunków
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
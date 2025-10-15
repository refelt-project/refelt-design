import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  build: {
    outDir: 'demo',
    emptyOutDir: true
  },
  server: { port: 5173, open: true },
  preview: { port: 4173, open: true }
})

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  
  // BEZ kit - to jest biblioteka, nie SvelteKit app
  compilerOptions: {
    // Svelte 5 opcje
  }
};

export default config;
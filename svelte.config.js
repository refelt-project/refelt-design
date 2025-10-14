import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import pkg from '@sveltejs/package';

const { sveltePackage } = pkg;

export default {
  preprocess: vitePreprocess(),
  package: {
    // domyślnie @sveltejs/package spakuje src → dist
  }
};

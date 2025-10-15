/**
 * Auto Router for Svelte (Next.js-style file-based routing)
 * Uses Vite's import.meta.glob for automatic page discovery
 * 
 * ✨ LAZY LOADING ENABLED - każdy page jest osobnym chunkiem
 */

import { wrap } from 'svelte-spa-router/wrap';
import {NotFound} from '@/layout';

function filePathToRoute(filePath) {
  let route = filePath
    .replace(/^.*\/pages\//, '')
    .replace(/\.svelte$/, '');

  if (route.endsWith('/index')) {
    route = route.replace(/\/index$/, '');
  }

  if (route === 'index' || route === 'Home') {
    return '/';
  }

  route = route.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  route = route.replace(/\[([^\]]+)\]/g, ':$1');

  if (!route.startsWith('/')) {
    route = '/' + route;
  }

  return route;
}

export function createRoutes() {
  // ✨ Lazy loading - bez { eager: true }
  const pages = import.meta.glob('../pages/**/*.svelte');

  const routes = {};
  const routePaths = [];

  for (const path in pages) {
    const route = filePathToRoute(path);
    
    // ✨ CRITICAL: svelte-spa-router wymaga wrap() dla lazy loading
    // wrap() przyjmuje obiekt z asyncComponent
    routes[route] = wrap({
      asyncComponent: () => pages[path]()
    });
    
    routePaths.push({ route, path });
  }

  // 404 zostaje eager (mały komponent, używany często)
  routes['*'] = NotFound;

  if (import.meta.env.DEV) {
    console.log('📍 Auto-generated routes (lazy-loaded):', routePaths);
  }

  return routes;
}
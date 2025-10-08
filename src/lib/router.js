/**
 * Auto Router for Svelte (Next.js-style file-based routing)
 * Uses Vite's import.meta.glob for automatic page discovery
 */

import NotFound from './NotFound.svelte'; // Lub twój komponent 404

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
  const pages = import.meta.glob('../pages/**/*.svelte', { eager: true });

  const routes = {};
  const routePaths = [];

  for (const path in pages) {
    const route = filePathToRoute(path);
    routes[route] = pages[path].default;
    routePaths.push({ route, path });
  }

  // WAŻNE: Dodaj wildcard na końcu dla 404
  routes['*'] = NotFound;

  if (import.meta.env.DEV) {
    console.log('📍 Registered routes:', routePaths);
  }

  return routes;
}
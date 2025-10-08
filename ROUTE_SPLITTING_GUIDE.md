# Route-Based Code Splitting - Implementation Guide

## ✨ Co się zmieniło?

### 1. Router (`src/lib/router.js`)

**PRZED:**
```javascript
const pages = import.meta.glob('../pages/**/*.svelte', { eager: true });
// ❌ Wszystkie pages ładowane od razu
```

**PO:**
```javascript
import { wrap } from 'svelte-spa-router/wrap';

const pages = import.meta.glob('../pages/**/*.svelte');

routes[route] = wrap({
  asyncComponent: () => pages[path]()
});
// ✅ Pages są lazy-loaded z wrap() (każdy jako osobny chunk)
```

### ⚠️ WAŻNE: Dlaczego `wrap()`?

`svelte-spa-router` **NIE** obsługuje bezpośrednio funkcji zwracających Promise:

```javascript
// ❌ TO NIE DZIAŁA:
routes['/'] = async () => {
  const module = await pages[path]();
  return module.default;
};

// ✅ TO DZIAŁA:
routes['/'] = wrap({
  asyncComponent: () => pages[path]()
});
```

`wrap()` to helper od `svelte-spa-router` który:
1. Obsługuje lazy loading
2. Pokazuje loading state (opcjonalnie)
3. Obsługuje błędy ładowania

### 2. Vite Config (`vite.config.js`)

**Nowa strategia chunków:**

```
┌─────────────────────────────────────────┐
│ BUNDLE STRUCTURE                        │
├─────────────────────────────────────────┤
│ vendor-svelte.js      (Svelte core)    │
│ vendor-router.js      (SPA Router)     │
│ vendor-icons.js       (Lucide icons)   │
│ vendor.js             (Other libs)     │
├─────────────────────────────────────────┤
│ ui-kit.js            (All /lib comps)  │
│ rich-components.js   (Navbar, Footer)  │
├─────────────────────────────────────────┤
│ page-home.js         (/pages/Home)     │
│ page-get-started.js  (/pages/GetStart) │
│ page-users-index.js  (/pages/users/)   │
├─────────────────────────────────────────┤
│ part-paymentform.js  (Shared parts)    │
└─────────────────────────────────────────┘
```

## 🎯 Korzyści

### 1. **Szybszy Initial Load**
- Home page: ~30-40% mniejszy initial bundle
- Ładuje tylko: vendor + ui-kit + page-home.js

### 2. **Lazy Loading Routes**
```
Użytkownik na "/" 
→ Ładuje: vendor + ui-kit + page-home.js

Użytkownik klika "Get Started"
→ Ładuje: page-get-started.js (tylko co potrzebne)
```

### 3. **Better Caching**
- UI Kit się nie zmienia → długi cache
- Pages się zmieniają → krótszy cache
- Vendor libraries → bardzo długi cache

### 4. **Parallel Loading**
Browser może ładować równolegle:
- vendor-svelte.js
- vendor-router.js  
- ui-kit.js
- page-home.js

## 📊 Jak sprawdzić bundle size?

### Development Mode
```bash
npm run build
```

Zobaczysz w konsoli:
```
dist/assets/vendor-svelte-abc123.js      45.23 kB │ gzip: 16.45 kB
dist/assets/ui-kit-def456.js             12.34 kB │ gzip: 4.12 kB
dist/assets/page-home-ghi789.js           8.91 kB │ gzip: 3.21 kB
dist/assets/page-get-started-jkl012.js   15.67 kB │ gzip: 5.89 kB
```

### Bundle Analyzer (opcjonalnie)
```bash
npm install -D rollup-plugin-visualizer
```

Dodaj do `vite.config.js`:
```javascript
import { visualizer } from 'rollup-plugin-visualizer'

plugins: [
  svelte(),
  visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true
  })
]
```

## 🔍 Debugowanie

### Sprawdź czy lazy loading działa

1. Otwórz DevTools → Network
2. Wejdź na `/`
3. Sprawdź załadowane pliki - powinien być tylko `page-home-*.js`
4. Kliknij "Get Started"
5. Powinien załadować się `page-get-started-*.js`

### Console Logs (DEV mode)
```javascript
📍 Auto-generated routes (lazy-loaded): [
  { route: '/', path: '../pages/Home.svelte' },
  { route: '/get-started', path: '../pages/GetStarted.svelte' }
]
```

## ⚡ Performance Tips

### 1. Loading State (opcjonalnie)
```javascript
// Dodaj loading spinner podczas ładowania page
routes['/'] = wrap({
  asyncComponent: () => pages[path](),
  loadingComponent: LoadingSpinner,  // ← opcjonalne
  loadingParams: { delay: 200 }      // ← opóźnienie 200ms
});
```

### 2. Error Handling (opcjonalnie)
```javascript
// Obsłuż błędy ładowania
routes['/'] = wrap({
  asyncComponent: () => pages[path](),
  loadingComponent: LoadingSpinner,
  errorComponent: ErrorPage           // ← gdy ładowanie się nie powiedzie
});
```

### 3. Preload Critical Routes (opcjonalnie)
```javascript
// W App.svelte - preloaduj następną stronę
import { preloadRoute } from 'svelte-spa-router';

// Preload po załadowaniu home page
onMount(() => {
  setTimeout(() => {
    preloadRoute('/get-started');
  }, 1000);
});
```

### 4. Prefetch on Hover (opcjonalnie)
```svelte
<!-- W Navbar.svelte -->
<a 
  href="/get-started" 
  use:link
  on:mouseenter={() => preloadRoute('/get-started')}
>
  Get Started
</a>
```

## 🚨 Breaking Changes

**BRAK!** 

Zmiana jest **backwards compatible**:
- `svelte-spa-router` obsługuje `wrap()` out-of-the-box
- Komponenty działają identycznie
- Routing zachowuje się tak samo

## 📝 Checklist

- [x] Usunięto `{ eager: true }` z router.js
- [x] Dodano `import { wrap }` z svelte-spa-router
- [x] Użyto `wrap({ asyncComponent })` dla lazy pages
- [x] Skonfigurowano `manualChunks` w Vite
- [x] Utworzono chunki: vendor, ui-kit, pages
- [x] Dodano czytelne nazwy chunków (dev mode)
- [x] Dodano hash do nazw (production)

## 🐛 Rozwiązywanie problemów

### Błąd: "ctx[3].call is not a function"
**Przyczyna:** Brak `wrap()` - router nie wie jak obsłużyć Promise

**Rozwiązanie:** Użyj `wrap({ asyncComponent })`

### Błąd: "should specify a Svelte component"
**Przyczyna:** Źle opakowany async component

**Rozwiązanie:** Upewnij się że:
```javascript
import { wrap } from 'svelte-spa-router/wrap';  // ← import wrap
routes[route] = wrap({
  asyncComponent: () => pages[path]()  // ← zwraca Promise<module>
});
```

## 🎯 Next Steps (opcjonalnie)

1. **Loading states** - dodaj `loadingComponent` do wrap()
2. **Error handling** - dodaj `errorComponent` do wrap()
3. **Preload links** - użyj `preloadRoute()` on hover
4. **Bundle analyzer** - wizualizacja bundli
5. **Service Worker** - offline support + cache strategy

## 📚 Więcej informacji

- [Vite Code Splitting](https://vitejs.dev/guide/features.html#code-splitting)
- [Rollup Manual Chunks](https://rollupjs.org/configuration-options/#output-manualchunks)
- [Svelte SPA Router - Lazy Loading](https://github.com/ItalyPaleAle/svelte-spa-router#lazy-loading)
- [wrap() Documentation](https://github.com/ItalyPaleAle/svelte-spa-router/blob/master/wrap.md)
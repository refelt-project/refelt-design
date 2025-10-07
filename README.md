# Refelt

Refelt to lekki „refine dla Svelte” z opcjonalnym wsparciem Svelte Native. Błyskawicznie budujesz strony, aplikacje i dashboardy z gotowych, czystych komponentów.

## Kluczowe cechy
- ⚡ **Superszybkie**: czysty Svelte, zero zbędnych zależności.
- 🎛️ **Baza komponentów**: Button, Card, Badge, Grid, Stack, Input, Text, Container.
- 🧩 **Kompozycje „rich”**: Navbar, ThemeToggle i gotowe układy.
- 🌓 **Motywy**: Dark/Light z `data-theme`.
- 🧭 **Routing**: `svelte-spa-router` z przykładami.
- 📱 **RWD**: Grid z `auto-fit/auto-fill`, bez media query w JS.

## Szybki start
```bash
pnpm i
pnpm dev
```
Aplikacja: http://localhost:5173 (domyślnie dla Vite).

## Skrypty
- `pnpm dev` — tryb deweloperski
- `pnpm build` — build produkcyjny
- `pnpm preview` — podgląd buildu

## Struktura
```
src/
  lib/            # bazowe komponenty UI + styles.css
  pages/          # przykładowe ekrany (Home, Get Started)
  rich/           # zaawansowane UI (Navbar, ThemeToggle)
  App.svelte      # router + shell
  main.js         # bootstrap
```

## Theming
- Domyślnie: dark
- Light: `document.documentElement.setAttribute('data-theme', 'light')`
- Zmieniasz kolory w `src/lib/styles.css` (sekcja `:root` i `[data-theme="light"]`).

## Komponenty bazowe
- **Text** – typografia z mapą rozmiarów i „system font stack”.
- **Button** – `variant: solid | outline | ghost`, `size: sm | md | lg`.
- **Card** – `variant: default | transparent`, `border: none | subtle | strong`.
- **Badge** – semantyczne statusy: `success | warning | error | info | pending`.
- **Grid** – `columns: number | "auto-fit" | "auto-fill"`, `minColumnWidth`, `gap`.
- **Stack** – pion/poziom, kontrola odstępów.
- **Input** – email/password/text z labelką.

## Routing
- `/` — Home (demo komponentów)
- `/get-started` — Showcase z bogatszymi układami

## Deployment
Standardowy build Vite:
```bash
pnpm build
# /dist gotowe do hostingu statycznego
```

## Licencja
MIT — używaj, modyfikuj, baw się dobrze.

<!-- src/uikit/Grid.svelte -->
<script>
  /**
   * Grid Component - component--modifier
   *
   * PROPS:
   * - columns: number | "auto-fit" | "auto-fill" (default: "auto-fit")
   * - rows: number | "auto" (default: "auto")
   * - preset: "sm" | "md" | "lg" (min column width for auto-fit/auto-fill)
   *
   * MODYFIKATORY (class):
   * - grid--gap-sm | grid--gap-md | grid--gap-lg | grid--gap-xl | grid--gap-xxl
   * - RWD utils: grid--lg-1/2/3, grid--md-1/2/3, grid--sm-1/2
   */
  export let columns = "auto-fit";
  export let rows = "auto";
  export let preset = "lg";

  const presets = { sm: "240px", md: "280px", lg: "320px" };
  if (!["sm", "md", "lg"].includes(preset)) preset = "lg";

  $: minWidth = presets[preset];
  $: gridColumns = computeColumns(columns, minWidth);
  $: gridRows = computeRows(rows);

  function computeColumns(cols, min) {
    if (cols === "auto-fit") return `repeat(auto-fit, minmax(${min}, 1fr))`;
    if (cols === "auto-fill") return `repeat(auto-fill, minmax(${min}, 1fr))`;
    if (typeof cols === "number") return `repeat(${cols}, 1fr)`;
    return cols;
  }

  function computeRows(r) {
    if (r === "auto") return "auto";
    if (typeof r === "number") return `repeat(${r}, auto)`;
    return r;
  }
</script>

<div
  class="grid {$$props.class || ''}"
  style="--grid-columns: {gridColumns}; --grid-rows: {gridRows};"
  data-columns={columns}
>
  <slot />
</div>

<style>
  /* ============================================
     BASE GRID
     ============================================ */
  .grid {
    display: grid;
    grid-template-columns: var(--grid-columns);
    grid-template-rows: var(--grid-rows);
  }

  /* ============================================
     GAP MODIFIERS
     ============================================ */
  .grid.grid--gap-sm { gap: var(--space-sm); }
  .grid.grid--gap-md { gap: var(--space-md); }
  .grid.grid--gap-lg { gap: var(--space-lg); }
  .grid.grid--gap-xl { gap: var(--space-xl); }
  .grid.grid--gap-xxl { gap: var(--space-xxl); }

  /* ============================================
     RESPONSIVE UTILITIES (per-instance)
     Uwaga: stałe wartości w @media (CSS nie wspiera var() tutaj)
     ============================================ */
  /* lg ≤ 1024px */
  @media (max-width: 1024px) {
    .grid.grid--lg-1 { grid-template-columns: 1fr !important; }
    .grid.grid--lg-2 { grid-template-columns: repeat(2, 1fr) !important; }
    .grid.grid--lg-3 { grid-template-columns: repeat(3, 1fr) !important; }
  }

  /* md ≤ 768px */
  @media (max-width: 768px) {
    .grid.grid--md-1 { grid-template-columns: 1fr !important; }
    .grid.grid--md-2 { grid-template-columns: repeat(2, 1fr) !important; }
    .grid.grid--md-3 { grid-template-columns: repeat(3, 1fr) !important; }
  }

  /* sm ≤ 640px */
  @media (max-width: 640px) {
    .grid.grid--sm-1 { grid-template-columns: 1fr !important; }
    .grid.grid--sm-2 { grid-template-columns: repeat(2, 1fr) !important; }
  }
</style>

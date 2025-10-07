<script>
  /**
   * Grid Component - LLM-optimized with CSS custom properties
   * 
   * PROPS (functional layout):
   * - columns: number | "auto-fit" | "auto-fill" (default: "auto-fit")
   * - rows: number | "auto" (default: "auto")
   * - preset: "sm" | "md" | "lg" (responsive min-width, default: "lg")
   * 
   * MODIFIERS (via class prop):
   * - Gap: grid--gap-sm | grid--gap-md | grid--gap-lg | grid--gap-xl | grid--gap-xxl
   * 
   * USAGE:
   * <Grid class="grid--gap-lg">...</Grid>
   * <Grid columns={3} class="grid--gap-md">...</Grid>
   * <Grid preset="sm" class="grid--gap-xl">...</Grid>
   */
  
  export let columns = "auto-fit";
  export let rows = "auto";
  export let preset = "lg";

  // Preset min-widths
  const presets = {
    sm: "240px",
    md: "280px",
    lg: "320px"
  };

  // Silent validation
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
     GAP MODIFIERS (via class)
     ============================================ */
  .grid.grid--gap-sm {
    gap: var(--space-sm);
  }

  .grid.grid--gap-md {
    gap: var(--space-md);
  }

  .grid.grid--gap-lg {
    gap: var(--space-lg);
  }

  .grid.grid--gap-xl {
    gap: var(--space-xl);
  }

  .grid.grid--gap-xxl {
    gap: var(--space-xxl);
  }
</style>
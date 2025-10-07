<script>
  /**
   * Grid Component - Responsive grid layout with preset-based spacing
   * 
   * @typedef {"auto-fit" | "auto-fill" | number} Columns
   * @typedef {"auto" | number} Rows
   * @typedef {"sm" | "md" | "lg" | "xl" | "xxl"} Gap
   * @typedef {"sm" | "md" | "lg"} Preset
   * 
   * @type {Columns}
   */
  export let columns = "auto-fit";
  
  /**
   * @type {Rows}
   */
  export let rows = "auto";
  
  /**
   * @type {Preset} - Responsive column width preset (sm=240px, md=280px, lg=320px)
   */
  export let preset = "lg";
  
  /**
   * @type {Gap}
   */
  export let gap = "lg";

  // ============================================
  // TYPE SAFETY - tylko dozwolone wartości
  // ============================================
  const ALLOWED_GAPS = ["sm", "md", "lg", "xl", "xxl"];
  const ALLOWED_COLUMNS = ["auto-fit", "auto-fill"];
  const ALLOWED_ROWS = ["auto"];
  const ALLOWED_PRESETS = ["sm", "md", "lg"];

  // Validation for gap
  if (!ALLOWED_GAPS.includes(gap)) {
    console.error(`[Grid] Invalid gap: "${gap}". Allowed: ${ALLOWED_GAPS.join(", ")}`);
    gap = "lg"; // fallback
  }

  // Validation for columns
  if (
    typeof columns !== "number" &&
    !ALLOWED_COLUMNS.includes(columns)
  ) {
    console.error(`[Grid] Invalid columns: "${columns}". Allowed: ${ALLOWED_COLUMNS.join(", ")} or number`);
    columns = "auto-fit"; // fallback
  }

  // Validation for rows
  if (
    typeof rows !== "number" &&
    !ALLOWED_ROWS.includes(rows)
  ) {
    console.error(`[Grid] Invalid rows: "${rows}". Allowed: ${ALLOWED_ROWS.join(", ")} or number`);
    rows = "auto"; // fallback
  }

  // Validation for preset
  if (!ALLOWED_PRESETS.includes(preset)) {
    console.error(`[Grid] Invalid preset: "${preset}". Allowed: ${ALLOWED_PRESETS.join(", ")}`);
    preset = "lg"; // fallback
  }

  // ============================================
  // PRESET SYSTEM - CSS Variables ONLY
  // ============================================
  const presets = {
    sm: "var(--grid-min-col-sm)", // 240px
    md: "var(--grid-min-col-md)", // 280px
    lg: "var(--grid-min-col-lg)"  // 320px
  };

  // ============================================
  // SPACING SYSTEM - CSS Variables ONLY
  // ============================================
  const gapMap = {
    sm: "var(--space-sm)",
    md: "var(--space-md)",
    lg: "var(--space-lg)",
    xl: "var(--space-xl)",
    xxl: "var(--space-xxl)"
  };

  $: minWidth = presets[preset];
  $: gridTemplateColumns = computeColumns(columns, minWidth);
  $: gridTemplateRows = computeRows(rows);
  $: gapValue = gapMap[gap];

  function computeColumns(cols, minWidth) {
    if (cols === "auto-fit") {
      return `repeat(auto-fit, minmax(${minWidth}, 1fr))`;
    }
    if (cols === "auto-fill") {
      return `repeat(auto-fill, minmax(${minWidth}, 1fr))`;
    }
    if (typeof cols === "number") {
      return `repeat(${cols}, 1fr)`;
    }
    // Direct CSS value (fallback)
    return cols;
  }

  function computeRows(r) {
    if (r === "auto") {
      return "auto";
    }
    if (typeof r === "number") {
      return `repeat(${r}, auto)`;
    }
    // Direct CSS value (fallback)
    return r;
  }
</script>

<!--
  SECURITY: 
  - NO style prop accepted
  - NO $$restProps spread
  - Only class can be added via parent
-->
<div 
  class="grid" 
  style="
    grid-template-columns: {gridTemplateColumns}; 
    grid-template-rows: {gridTemplateRows}; 
    gap: {gapValue};
  "
>
  <slot />
</div>

<style>
  .grid {
    display: grid;
  }
</style>
<script>
  /**
   * Stack Component - Vertical/Horizontal layout with controlled spacing
   * 
   * @typedef {"vertical" | "horizontal"} Direction
   * @typedef {"sm" | "md" | "lg" | "xl" | "xxl"} Gap
   * 
   * @type {Direction}
   */
  export let direction = "vertical";
  
  /**
   * @type {Gap}
   */
  export let gap = "md";

  // ============================================
  // TYPE SAFETY - tylko dozwolone wartości
  // ============================================
  const ALLOWED_DIRECTIONS = ["vertical", "horizontal"];
  const ALLOWED_GAPS = ["sm", "md", "lg", "xl", "xxl"];

  // Validation guards
  if (!ALLOWED_DIRECTIONS.includes(direction)) {
    console.error(`[Stack] Invalid direction: "${direction}". Allowed: ${ALLOWED_DIRECTIONS.join(", ")}`);
    direction = "vertical"; // fallback
  }

  if (!ALLOWED_GAPS.includes(gap)) {
    console.error(`[Stack] Invalid gap: "${gap}". Allowed: ${ALLOWED_GAPS.join(", ")}`);
    gap = "md"; // fallback
  }

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

  $: gapValue = gapMap[gap];
</script>

<!--
  SECURITY: 
  - NO style prop accepted
  - NO $$restProps spread
  - Only class can be added via parent
-->
<div 
  class="stack stack-{direction}"
  style="gap: {gapValue}"
>
  <slot />
</div>

<style>
  .stack {
    display: flex;
  }

  .stack-vertical {
    flex-direction: column;
  }

  .stack-horizontal {
    flex-direction: row;
    align-items: center;
  }
</style>
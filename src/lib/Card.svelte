<script>
  /**
   * Card Component - shadcn/ui compatible
   * Simplified: header, content (auto), footer slots
   * 
   * @typedef {"solid" | "dashed"} BorderStyle
   * @typedef {"default" | "elevated"} Variant
   * 
   * @type {BorderStyle}
   */
  export let borderStyle = "solid";
  
  /**
   * @type {Variant}
   */
  export let variant = "default";
  
  /**
   * @type {string}
   */
  let className = "";
  export { className as class };

  // ============================================
  // TYPE SAFETY
  // ============================================
  const ALLOWED_BORDER_STYLES = ["solid", "dashed"];
  const ALLOWED_VARIANTS = ["default", "elevated"];

  // Validation guards
  if (!ALLOWED_BORDER_STYLES.includes(borderStyle)) {
    console.error(`[Card] Invalid borderStyle: "${borderStyle}". Allowed: ${ALLOWED_BORDER_STYLES.join(", ")}`);
    borderStyle = "solid";
  }

  if (!ALLOWED_VARIANTS.includes(variant)) {
    console.error(`[Card] Invalid variant: "${variant}". Allowed: ${ALLOWED_VARIANTS.join(", ")}`);
    variant = "default";
  }
</script>

<div 
  class="card card-{variant} card-border-{borderStyle} {className}"
>
  {#if $$slots.header}
    <slot name="header" />
  {/if}
  
  <div class="card-content">
    <slot />
  </div>
  
  {#if $$slots.footer}
    <slot name="footer" />
  {/if}
</div>

<style>
  .card {
    /* shadcn/ui exact values */
    border-radius: var(--radius-lg); /* 10px */
    border-width: 1px;
    border-color: var(--border);
    background: var(--bg-card);
    color: var(--text);
    transition: all var(--transition-slow);
  }

  /* Border styles */
  .card-border-solid {
    border-style: solid;
  }

  .card-border-dashed {
    border-style: dashed;
  }

  /* Variants */
  .card-default {
    background: var(--bg-card);
  }

  .card-elevated {
    background: var(--bg-elevated);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  /* Content auto-padding */
  .card-content {
    padding: var(--space-lg); /* 24px - shadcn/ui exact */
  }
</style>
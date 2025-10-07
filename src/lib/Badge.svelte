<script>
  /**
   * Badge Component - Type-safe status badge
   * 
   * @typedef {"success" | "warning" | "error" | "info" | "pending"} Variant
   * @typedef {"sm" | "md"} Size
   * 
   * @type {Variant}
   */
  export let variant = "info";
  
  /**
   * @type {Size}
   */
  export let size = "md";

  // ============================================
  // TYPE SAFETY - tylko dozwolone wartości
  // ============================================
  const ALLOWED_VARIANTS = ["success", "warning", "error", "info", "pending"];
  const ALLOWED_SIZES = ["sm", "md"];

  // Validation guards
  if (!ALLOWED_VARIANTS.includes(variant)) {
    console.error(`[Badge] Invalid variant: "${variant}". Allowed: ${ALLOWED_VARIANTS.join(", ")}`);
    variant = "info"; // fallback
  }

  if (!ALLOWED_SIZES.includes(size)) {
    console.error(`[Badge] Invalid size: "${size}". Allowed: ${ALLOWED_SIZES.join(", ")}`);
    size = "md"; // fallback
  }
</script>

<!--
  SECURITY: 
  - NO style prop accepted
  - NO $$restProps spread
  - Only class can be added via parent
-->
<span class="badge badge-{variant} badge-{size}">
  <slot />
</span>

<style>
  .badge {
    /* zapobiega rozciąganiu w flex/grid/table itp. */
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    width: fit-content;            /* dopasuj do treści */
    max-width: 100%;
    white-space: nowrap;

    border-radius: var(--radius-sm);
    font-weight: 500;
    transition: all var(--transition-base);
  }

  /* ============================================
     SIZES - using CSS variables
     ============================================ */
  .badge-sm {
    padding: 2px 6px;
    font-size: 11px;
    line-height: 1;
  }

  .badge-md {
    padding: 4px var(--space-sm);
    font-size: 12px;
    line-height: 1;
  }

  /* ============================================
     SEMANTIC VARIANTS
     ============================================ */
  .badge-success {
    background: var(--status-success-bg);
    color: var(--status-success);
  }

  .badge-warning {
    background: var(--status-warning-bg);
    color: var(--status-warning);
  }

  .badge-error {
    background: var(--status-error-bg);
    color: var(--status-error);
  }

  .badge-info {
    background: var(--status-info-bg);
    color: var(--status-info);
  }

  .badge-pending {
    background: var(--status-pending-bg);
    color: var(--status-pending);
  }
</style>

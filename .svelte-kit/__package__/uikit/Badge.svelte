<script>
  /**
   * Badge Component - LLM-optimized with component--modifier pattern
   * 
   * PROPS (semantic only):
   * - variant: "success" | "warning" | "error" | "info" | "pending"
   * 
   * MODIFIERS (via class prop):
   * - Size: badge--sm | badge--md
   * 
   * USAGE:
   * <Badge variant="success">Active</Badge>
   * <Badge variant="error" class="badge--sm">Failed</Badge>
   */
  
  export let variant = "info";
  
  // Silent validation
  const VARIANTS = ["success", "warning", "error", "info", "pending"];
  if (!VARIANTS.includes(variant)) variant = "info";
</script>

<span class="badge badge--{variant} {$$props.class || ''}">
  <slot />
</span>

<style>
  /* ============================================
     BASE BADGE
     ============================================ */
  .badge {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    width: fit-content;
    max-width: 100%;
    white-space: nowrap;
    border-radius: var(--radius-sm);
    font-weight: 500;
    transition: all var(--transition-base);
  }

  /* ============================================
     SEMANTIC VARIANTS
     ============================================ */
  .badge--success {
    background: var(--status-success-bg);
    color: var(--status-success);
  }

  .badge--warning {
    background: var(--status-warning-bg);
    color: var(--status-warning);
  }

  .badge--error {
    background: var(--status-error-bg);
    color: var(--status-error);
  }

  .badge--info {
    background: var(--status-info-bg);
    color: var(--status-info);
  }

  .badge--pending {
    background: var(--status-pending-bg);
    color: var(--status-pending);
  }

  /* ============================================
     SIZE MODIFIERS (via class)
     ============================================ */
  .badge.badge--sm {
    padding: 2px 6px;
    font-size: 11px;
    line-height: 1;
  }

  .badge.badge--md {
    padding: 4px var(--space-sm);
    font-size: 12px;
    line-height: 1;
  }
</style>
<script>
  /**
   * Separator Component - LLM-optimized with component--modifier pattern
   * 
   * PROPS (semantic only):
   * - orientation: "horizontal" | "vertical" (default: "horizontal")
   * 
   * MODIFIERS (via class prop):
   * - Variant: separator--dashed | separator--dotted
   * - Spacing: separator--spacing-sm | separator--spacing-md | separator--spacing-lg
   * 
   * USAGE:
   * <Separator />
   * <Separator orientation="vertical" />
   * <Separator class="separator--dashed separator--spacing-lg" />
   */
  
  export let orientation = "horizontal";
  
  // Silent validation
  const ORIENTATIONS = ["horizontal", "vertical"];
  if (!ORIENTATIONS.includes(orientation)) orientation = "horizontal";
</script>

<div 
  class="separator separator--{orientation} {$$props.class || ''}"
  role="separator"
  aria-orientation={orientation}
/>

<style>
  /* ============================================
     BASE SEPARATOR
     ============================================ */
  .separator {
    background: var(--border);
    flex-shrink: 0;
  }

  /* ============================================
     ORIENTATION MODIFIERS
     ============================================ */
  .separator--horizontal {
    width: 100%;
    height: 1px;
    margin: 0;
  }

  .separator--vertical {
    width: 1px;
    height: 100%;
    margin: 0;
  }

  /* ============================================
     VARIANT MODIFIERS (via class)
     ============================================ */
  .separator.separator--dashed {
    background: none;
    border: none;
  }

  .separator--horizontal.separator--dashed {
    border-top: 1px dashed var(--border);
  }

  .separator--vertical.separator--dashed {
    border-left: 1px dashed var(--border);
  }

  .separator.separator--dotted {
    background: none;
    border: none;
  }

  .separator--horizontal.separator--dotted {
    border-top: 1px dotted var(--border);
  }

  .separator--vertical.separator--dotted {
    border-left: 1px dotted var(--border);
  }

  /* ============================================
     SPACING MODIFIERS (via class)
     ============================================ */
  .separator--horizontal.separator--spacing-sm {
    margin-top: var(--space-sm);
    margin-bottom: var(--space-sm);
  }

  .separator--horizontal.separator--spacing-md {
    margin-top: var(--space-md);
    margin-bottom: var(--space-md);
  }

  .separator--horizontal.separator--spacing-lg {
    margin-top: var(--space-lg);
    margin-bottom: var(--space-lg);
  }

  .separator--vertical.separator--spacing-sm {
    margin-left: var(--space-sm);
    margin-right: var(--space-sm);
  }

  .separator--vertical.separator--spacing-md {
    margin-left: var(--space-md);
    margin-right: var(--space-md);
  }

  .separator--vertical.separator--spacing-lg {
    margin-left: var(--space-lg);
    margin-right: var(--space-lg);
  }

  /* No spacing variant */
  .separator.separator--spacing-none {
    margin: 0;
  }
</style>
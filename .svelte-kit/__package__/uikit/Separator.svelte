<script>
  /**
   * Separator Component - LLM-optimized with component--modifier pattern
   * 
   * PROPS (semantic only):
   * - orientation: "horizontal" | "vertical" (default: "horizontal")
   * - decorative: boolean (gdy true – rola prezentacyjna, aria-hidden)
   * 
   * MODIFIERS (via class prop):
   * - Variant: separator--dashed | separator--dotted | separator--space (bez linii)
   * - Spacing: separator--spacing-sm | separator--spacing-md | separator--spacing-lg | separator--spacing-xl | separator--spacing-xxl | separator--spacing-none
   * 
   * USAGE:
   * <Separator />
   * <Separator orientation="vertical" />
   * <Separator class="separator--dashed separator--spacing-lg" />
   * <Separator class="separator--space separator--spacing-xl" decorative />
   * <Separator class="separator--space separator--spacing-xxl" decorative />
   */
  
  export let orientation = "horizontal";
  export let decorative = false;
  
  const ORIENTATIONS = ["horizontal", "vertical"];
  if (!ORIENTATIONS.includes(orientation)) orientation = "horizontal";
</script>

<div 
  class="separator separator--{orientation} {$$props.class || ''}"
  role={decorative ? "presentation" : "separator"}
  aria-orientation={orientation}
  aria-hidden={decorative ? "true" : undefined}
></div>

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
  .separator--horizontal.separator--dashed { border-top: 1px dashed var(--border); }
  .separator--vertical.separator--dashed   { border-left: 1px dashed var(--border); }

  .separator.separator--dotted {
    background: none;
    border: none;
  }
  .separator--horizontal.separator--dotted { border-top: 1px dotted var(--border); }
  .separator--vertical.separator--dotted   { border-left: 1px dotted var(--border); }

  /* NEW: SPACE (bez linii) */
  .separator.separator--space {
    background: none;
    border: none;
  }
  .separator--horizontal.separator--space { height: 0; }
  .separator--vertical.separator--space   { width: 0; }

  /* ============================================
     SPACING MODIFIERS (via class)
     ============================================ */
  .separator--horizontal.separator--spacing-sm { margin-top: var(--space-sm); margin-bottom: var(--space-sm); }
  .separator--horizontal.separator--spacing-md { margin-top: var(--space-md); margin-bottom: var(--space-md); }
  .separator--horizontal.separator--spacing-lg { margin-top: var(--space-lg); margin-bottom: var(--space-lg); }
  .separator--horizontal.separator--spacing-xl { margin-top: var(--space-xl); margin-bottom: var(--space-xl); }
  .separator--horizontal.separator--spacing-xxl { margin-top: var(--space-xxl); margin-bottom: var(--space-xxl); }

  .separator--vertical.separator--spacing-sm { margin-left: var(--space-sm); margin-right: var(--space-sm); }
  .separator--vertical.separator--spacing-md { margin-left: var(--space-md); margin-right: var(--space-md); }
  .separator--vertical.separator--spacing-lg { margin-left: var(--space-lg); margin-right: var(--space-lg); }
  .separator--vertical.separator--spacing-xl { margin-left: var(--space-xl); margin-right: var(--space-xl); }
  .separator--vertical.separator--spacing-xxl { margin-left: var(--space-xxl); margin-right: var(--space-xxl); }

  .separator.separator--spacing-none { margin: 0; }
</style>
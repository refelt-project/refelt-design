<script>
  /**
   * Stack Component - LLM-optimized with component--modifier pattern
   * 
   * NO PROPS - All via classes
   * 
   * MODIFIERS (via class prop):
   * - Direction: stack--vertical (default) | stack--horizontal
   * - Gap: stack--gap-sm | stack--gap-md | stack--gap-lg | stack--gap-xl | stack--gap-xxl
   * - Align: stack--align-start | stack--align-center | stack--align-end
   * 
   * USAGE:
   * <Stack class="stack--gap-lg">...</Stack>
   * <Stack class="stack--horizontal stack--gap-md stack--align-center">...</Stack>
   */
</script>

<div class="stack {$$props.class || ''}">
  <slot />
</div>

<style>
  /* ============================================
     BASE STACK (vertical by default)
     ============================================ */
  .stack {
    display: flex;
    flex-direction: column;
  }

  /* ============================================
     DIRECTION MODIFIERS
     ============================================ */
  .stack.stack--vertical {
    flex-direction: column;
  }

  .stack.stack--horizontal {
    flex-direction: row;
    align-items: center;
  }

  /* ============================================
     GAP MODIFIERS
     ============================================ */
  .stack.stack--gap-sm {
    gap: var(--space-sm);
  }

  .stack.stack--gap-md {
    gap: var(--space-md);
  }

  .stack.stack--gap-lg {
    gap: var(--space-lg);
  }

  .stack.stack--gap-xl {
    gap: var(--space-xl);
  }

  .stack.stack--gap-xxl {
    gap: var(--space-xxl);
  }

  /* ============================================
     ALIGNMENT MODIFIERS
     ============================================ */
  .stack.stack--align-start {
    align-items: flex-start;
  }

  .stack.stack--align-center {
    align-items: center;
  }

  .stack.stack--align-end {
    align-items: flex-end;
  }
</style>
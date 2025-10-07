<script>
  /**
   * Text Component - LLM-optimized with component--modifier pattern
   * 
   * PROPS (semantic only):
   * - as: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
   * 
   * MODIFIERS (via class prop):
   * - Size: text--xs | text--sm | text--base | text--lg | text--xl | text--xxl
   * - Style: text--muted | text--subtle | text--bold
   * 
   * USAGE:
   * <Text>Default paragraph</Text>
   * <Text class="text--lg text--muted">Large muted text</Text>
   * <Text as="h2" class="text--xl text--bold">Heading</Text>
   */
  
  export let as = "p";
  
  // Silent validation
  const ALLOWED = ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"];
  if (!ALLOWED.includes(as)) as = "p";
</script>

<svelte:element 
  this={as} 
  class="text {$$props.class || ''}"
>
  <slot />
</svelte:element>

<style>
  /* ============================================
     BASE TEXT
     ============================================ */
  .text {
    margin: 0;
    padding: 0;
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
  }

  /* ============================================
     SIZE MODIFIERS (via class)
     ============================================ */
  .text.text--xs {
    font-size: var(--font-size-xs);
    line-height: var(--line-height-tight);
    font-weight: 400;
  }

  .text.text--sm {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-normal);
    font-weight: 400;
  }

  .text.text--base {
    font-size: var(--font-size-base);
    line-height: var(--line-height-normal);
    font-weight: 400;
  }

  .text.text--lg {
    font-size: var(--font-size-lg);
    line-height: var(--line-height-normal);
    font-weight: 500;
  }

  .text.text--xl {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-tight);
    font-weight: 600;
  }

  .text.text--xxl {
    font-size: var(--font-size-xxl);
    line-height: var(--line-height-tight);
    font-weight: 700;
  }

  /* ============================================
     STYLE MODIFIERS (via class)
     ============================================ */
  .text.text--muted {
    color: var(--text-muted);
  }

  .text.text--subtle {
    color: var(--text-subtle);
  }

  .text.text--bold {
    font-weight: 600;
  }
</style>
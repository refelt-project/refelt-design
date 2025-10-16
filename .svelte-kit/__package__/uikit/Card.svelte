<script>
  /**
   * Card Component - LLM-optimized with component--modifier pattern
   * 
   * PROPS (semantic only):
   * - variant: "default" | "elevated"
   * 
   * MODIFIERS (via class prop):
   * - Border: card--border-dashed | card--border-only
   * - Padding: card--p-sm | card--p-lg
   * - Background: card--transparent | card--glass
   * 
   * SLOTS:
   * - default: Card content
   * - header: Optional header section
   * - footer: Optional footer section
   * 
   * USAGE:
   * <Card>Content</Card>
   * <Card variant="elevated" class="card--p-lg">Content</Card>
   * <Card class="card--border-only">Only border, no background</Card>
   */
  
  export let variant = "default";
  
  // Silent validation
  const VARIANTS = ["default", "elevated"];
  if (!VARIANTS.includes(variant)) variant = "default";
</script>

<div class="card card--{variant} {$$props.class || ''}">
  {#if $$slots.header}
    <div class="card-header">
      <slot name="header" />
    </div>
  {/if}
  
  <div class="card-content">
    <slot />
  </div>
  
  {#if $$slots.footer}
    <div class="card-footer">
      <slot name="footer" />
    </div>
  {/if}
</div>

<style>
  /* ============================================
     BASE CARD
     ============================================ */
  .card {
    border-radius: var(--radius-lg);
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text);
    transition: all var(--transition-slow);
  }

  /* ============================================
     VARIANTS
     ============================================ */
  .card--default {
    background: var(--bg-card);
  }

  .card--elevated {
    background: var(--bg-elevated);
    box-shadow: var(--shadow-md);
  }

  /* ============================================
     CONTENT SECTIONS
     ============================================ */
  .card-header {
    padding: var(--space-lg);
    padding-bottom: 0;
  }

  .card-content {
    padding: var(--space-lg);
  }

  .card-footer {
    padding: var(--space-lg);
    padding-top: 0;
  }

  /* ============================================
     BORDER MODIFIERS (via class)
     ============================================ */
  .card.card--border-dashed {
    border-style: dashed;
  }

  .card.card--border-only {
    background: transparent;
    /* Border remains (default 1px solid var(--border)) */
  }

  /* ============================================
     PADDING MODIFIERS (via class)
     ============================================ */
  .card.card--p-sm .card-content {
    padding: var(--space-sm);
  }

  .card.card--p-lg .card-content {
    padding: var(--space-xl);
  }

  /* ============================================
     BACKGROUND MODIFIERS (via class)
     ============================================ */
  .card.card--transparent {
    background: transparent;
    border-color: transparent;
  }

  .card.card--glass {
    background: color-mix(in oklch, var(--bg-card) 80%, transparent);
    backdrop-filter: blur(10px);
    border-color: color-mix(in oklch, var(--border) 50%, transparent);
  }
</style>
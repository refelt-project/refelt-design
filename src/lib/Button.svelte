<script>
  /**
   * Button Component - LLM-optimized with component--modifier pattern
   * 
   * PROPS (semantic only):
   * - variant: "default" | "secondary" | "accent" | "destructive" | "outline" | "ghost" | "link"
   * - type: "button" | "submit" | "reset"
   * - disabled: boolean
   * 
   * MODIFIERS (via class prop):
   * - Size: btn--sm | btn--md | btn--lg
   * - Style: btn--rounded
   * 
   * USAGE:
   * <Button variant="accent" class="btn--lg">Save</Button>
   * <Button variant="destructive" class="btn--sm btn--rounded">Delete</Button>
   */
  
  export let variant = "default";
  export let type = "button";
  export let disabled = false;
  
  // Silent validation (no console errors for LLM)
  const VARIANTS = ["default", "secondary", "accent", "destructive", "outline", "ghost", "link"];
  if (!VARIANTS.includes(variant)) variant = "default";
</script>

<button
  {type}
  {disabled}
  class="btn btn--{variant} {$$props.class || ''}"
  on:click
>
  <slot />
</button>

<style>
  /* ============================================
     BASE BUTTON
     ============================================ */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    white-space: nowrap;
    border-radius: var(--radius-md);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    transition: all var(--transition-base);
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    
    /* Default size (md) */
    height: 36px;
    padding: 0 16px;
  }

  .btn:focus-visible {
    outline: 3px solid color-mix(in oklch, var(--primary) 20%, transparent);
    outline-offset: 2px;
  }

  .btn:disabled {
    pointer-events: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* ============================================
     VARIANTS (semantic colors)
     ============================================ */
  
  .btn--default {
    background: var(--primary);
    color: var(--primary-fg);
  }

  .btn--default:hover:not(:disabled) {
    opacity: 0.9;
  }

  .btn--secondary {
    background: var(--secondary);
    color: var(--secondary-fg);
  }

  .btn--secondary:hover:not(:disabled) {
    opacity: 0.8;
  }

  .btn--accent {
    background: var(--accent);
    color: var(--accent-fg);
  }

  .btn--accent:hover:not(:disabled) {
    opacity: 0.9;
  }

  .btn--destructive {
    background: var(--destructive);
    color: var(--destructive-fg);
  }

  .btn--destructive:hover:not(:disabled) {
    opacity: 0.9;
  }

  .btn--outline {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
  }

  .btn--outline:hover:not(:disabled) {
    background: var(--bg-elevated);
  }

  .btn--ghost {
    background: transparent;
    color: var(--text);
  }

  .btn--ghost:hover:not(:disabled) {
    background: var(--bg-elevated);
  }

  .btn--link {
    background: transparent;
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .btn--link:hover:not(:disabled) {
    text-decoration: none;
  }

  /* ============================================
     SIZE MODIFIERS (via class)
     ============================================ */
  .btn.btn--sm {
    height: 32px;
    padding: 0 12px;
    font-size: 13px;
  }

  .btn.btn--md {
    height: 36px;
    padding: 0 16px;
    font-size: 14px;
  }

  .btn.btn--lg {
    height: 44px;
    padding: 0 24px;
    font-size: 16px;
  }

  /* ============================================
     STYLE MODIFIERS (via class)
     ============================================ */
  .btn.btn--rounded {
    border-radius: var(--radius-full);
  }
</style>
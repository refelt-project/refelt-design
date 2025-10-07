<script>
  /**
   * Button Component - shadcn/ui compatible
   * 
   * @typedef {"button" | "submit" | "reset"} Type
   * @typedef {"default" | "secondary" | "accent" | "destructive" | "outline" | "ghost" | "link"} Variant
   * @typedef {"sm" | "md" | "lg"} Size
   * 
   * @type {Type}
   */
  export let type = "button";
  
  /**
   * @type {Variant}
   */
  export let variant = "default";
  
  /**
   * @type {Size}
   */
  export let size = "md";
  
  /**
   * @type {boolean}
   */
  export let disabled = false;
  
  /**
   * @type {string}
   */
  let className = "";
  export { className as class };

  // ============================================
  // TYPE SAFETY
  // ============================================
  const ALLOWED_TYPES = ["button", "submit", "reset"];
  const ALLOWED_VARIANTS = ["default", "secondary", "accent", "destructive", "outline", "ghost", "link"];
  const ALLOWED_SIZES = ["sm", "md", "lg"];

  if (!ALLOWED_TYPES.includes(type)) {
    console.error(`[Button] Invalid type: "${type}". Allowed: ${ALLOWED_TYPES.join(", ")}`);
    type = "button";
  }

  if (!ALLOWED_VARIANTS.includes(variant)) {
    console.error(`[Button] Invalid variant: "${variant}". Allowed: ${ALLOWED_VARIANTS.join(", ")}`);
    variant = "default";
  }

  if (!ALLOWED_SIZES.includes(size)) {
    console.error(`[Button] Invalid size: "${size}". Allowed: ${ALLOWED_SIZES.join(", ")}`);
    size = "md";
  }
</script>

<button
  {type}
  {disabled}
  class="btn btn-variant-{variant} btn-size-{size} {className}"
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
     VARIANTS
     ============================================ */
  
  /* DEFAULT = PRIMARY (czarny na light, biały na dark) */
  .btn-variant-default {
    background: var(--primary);
    color: var(--primary-fg);
  }

  .btn-variant-default:hover:not(:disabled) {
    opacity: 0.9;
  }

  /* SECONDARY = szary */
  .btn-variant-secondary {
    background: var(--secondary);
    color: var(--secondary-fg);
  }

  .btn-variant-secondary:hover:not(:disabled) {
    opacity: 0.8;
  }

  /* ACCENT = niebieski */
  .btn-variant-accent {
    background: var(--accent);
    color: var(--accent-fg);
  }

  .btn-variant-accent:hover:not(:disabled) {
    opacity: 0.9;
  }

  /* DESTRUCTIVE = czerwony */
  .btn-variant-destructive {
    background: var(--destructive);
    color: var(--destructive-fg);
  }

  .btn-variant-destructive:hover:not(:disabled) {
    opacity: 0.9;
  }

  /* OUTLINE = border only */
  .btn-variant-outline {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
  }

  .btn-variant-outline:hover:not(:disabled) {
    background: var(--bg-elevated);
  }

  /* GHOST = transparent */
  .btn-variant-ghost {
    background: transparent;
    color: var(--text);
  }

  .btn-variant-ghost:hover:not(:disabled) {
    background: var(--bg-elevated);
  }

  /* LINK = like a link */
  .btn-variant-link {
    background: transparent;
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .btn-variant-link:hover:not(:disabled) {
    text-decoration: none;
  }

  /* ============================================
     SIZES
     ============================================ */
  .btn-size-sm {
    height: 32px;
    padding: 0 12px;
    font-size: 13px;
  }

  .btn-size-md {
    height: 36px;
    padding: 0 16px;
    font-size: 14px;
  }

  .btn-size-lg {
    height: 44px;
    padding: 0 24px;
    font-size: 16px;
  }
</style>
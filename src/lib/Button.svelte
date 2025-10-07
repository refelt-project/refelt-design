<script>
  // variant: "solid" | "outline" | "ghost"
  // size: "sm" | "md" | "lg"
  export let variant = "solid";
  export let size = "md";
</script>

<button class="btn btn-{variant} btn-{size}" on:click>
  <slot />
</button>

<style>
  .btn {
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: inherit;
  }

  /* Sizes */
  .btn-sm {
    padding: 8px 16px;
    font-size: 13px;
  }

  .btn-md {
    padding: 12px 24px;
    font-size: 14px;
  }

  .btn-lg {
    padding: 16px 32px;
    font-size: 16px;
  }

  /* Variants */
  .btn-solid {
    background: var(--accent);
    color: var(--accent-fg);
    border: none;
  }

  .btn-solid:hover {
    opacity: 0.9;
  }

  .btn-outline {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border-strong);
  }

  .btn-outline:hover {
    background: var(--bg-elevated);
    border-color: var(--accent);
  }

  .btn-ghost {
    background: transparent;
    color: var(--text);
    border: none;
  }

  .btn-ghost:hover {
    background: var(--bg-elevated);
  }

  .btn:active {
    transform: scale(0.98);
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn:disabled:active {
    transform: none;
  }
</style>
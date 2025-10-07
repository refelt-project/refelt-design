<script>
  // size: "sm" | "md" | "lg"
  export let size = "md";
</script>

<button class="btn btn-{size}" on:click>
  <slot />
</button>

<style>
  .btn {
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: inherit;
    background: var(--accent);
    color: var(--accent-fg);
  }

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

  .btn:active {
    transform: scale(0.98);
  }
</style>
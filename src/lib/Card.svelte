<script>
  // border: "none" | "subtle" | "strong"
  // padding: "sm" | "md" | "lg"
  export let border = "subtle";
  export let padding = "md";
</script>

<div class="card border-{border} padding-{padding}">
  {#if $$slots.header}
    <div class="card-header">
      <slot name="header" />
    </div>
  {/if}
  
  <div class="card-body">
    <slot />
  </div>
  
  {#if $$slots.footer}
    <div class="card-footer">
      <slot name="footer" />
    </div>
  {/if}
</div>

<style>
  .card {
    background: var(--bg-card);
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .border-none {
    border: none;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.08);
  }

  .border-subtle {
    border: 1px solid var(--border);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.04);
  }

  .border-strong {
    border: 1px solid var(--border-strong);
    box-shadow: none;
  }

  .padding-sm {
    padding: 16px;
  }

  .padding-md {
    padding: 24px;
  }

  .padding-lg {
    padding: 32px;
  }

  .card-header {
    margin-bottom: 16px;
  }

  .card-footer {
    margin-top: 16px;
  }

  .card-body {
    /* Main content area */
  }
</style>
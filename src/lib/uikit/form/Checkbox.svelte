<script>
  import { Check } from 'lucide-svelte';
  
  export let checked = false;
  export let disabled = false;
  export let id = "";
  export let label = "";

  $: iconSize = $$props.class?.includes('checkbox--sm') ? 12 :
                $$props.class?.includes('checkbox--lg') ? 16 : 14;
</script>

{#if label}
  <div class="checkbox-wrapper {$$props.class || ''}">
    <div class="checkbox-container">
      <input
        {id}
        type="checkbox"
        bind:checked
        {disabled}
        class="checkbox"
        on:change
        aria-checked={checked}
      />
      {#if checked}
        <span class="checkbox-icon" aria-hidden="true">
          <Check size={iconSize} />
        </span>
      {/if}
    </div>
    <label for={id} class="checkbox-label">
      {label}
    </label>
  </div>
{:else}
  <div class="checkbox-container {$$props.class || ''}">
    <input
      {id}
      type="checkbox"
      bind:checked
      {disabled}
      class="checkbox"
      on:change
      aria-checked={checked}
    />
    {#if checked}
      <span class="checkbox-icon" aria-hidden="true">
        <Check size={iconSize} />
      </span>
    {/if}
  </div>
{/if}

<style>
  .checkbox-container {
    position: relative;
    display: inline-block;
    width: fit-content;
    height: fit-content;
    line-height: 0;
  }

  .checkbox {
    appearance: none;
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    background: var(--bg-elevated);
    cursor: pointer;
    transition: all var(--transition-base);
    flex-shrink: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .checkbox:hover:not(:disabled) {
    border-color: var(--accent);
  }

  .checkbox:checked {
    background: var(--accent);
    border-color: var(--accent);
  }

  .checkbox:focus-visible {
    outline: 3px solid color-mix(in oklch, var(--accent) 20%, transparent);
    outline-offset: 2px;
  }

  .checkbox:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox-icon {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    pointer-events: none;
    top:1px;
  }

  .checkbox-icon :global(svg) {
    width: 70%;
    height: 70%;
    stroke: var(--accent-foreground, #fff);
    stroke-width: 5;
    display: block;
  }

  .checkbox-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .checkbox-label {
    font-size: 14px;
    color: var(--text);
    cursor: pointer;
    user-select: none;
  }

  .checkbox:disabled ~ .checkbox-label,
  .checkbox-wrapper:has(.checkbox:disabled) .checkbox-label {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox-container.checkbox--sm .checkbox,
  .checkbox-wrapper.checkbox--sm .checkbox {
    width: 14px;
    height: 14px;
  }

  .checkbox-container.checkbox--md .checkbox,
  .checkbox-wrapper.checkbox--md .checkbox {
    width: 16px;
    height: 16px;
  }

  .checkbox-container.checkbox--lg .checkbox,
  .checkbox-wrapper.checkbox--lg .checkbox {
    width: 20px;
    height: 20px;
  }

  .checkbox-wrapper.checkbox--sm .checkbox-label {
    font-size: 13px;
  }

  .checkbox-wrapper.checkbox--lg .checkbox-label {
    font-size: 15px;
  }
</style>

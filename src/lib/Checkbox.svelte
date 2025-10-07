<script>
    /**
     * Checkbox Component - LLM-optimized with component--modifier pattern
     * 
     * PROPS (functional):
     * - checked: boolean (bindable)
     * - disabled: boolean
     * - id: string
     * - label: string (optional - renders label next to checkbox)
     * 
     * MODIFIERS (via class prop):
     * - Size: checkbox--sm | checkbox--md | checkbox--lg
     * 
     * USAGE:
     * <Checkbox bind:checked={value} label="Accept terms" />
     * <Checkbox bind:checked={value} id="my-checkbox" class="checkbox--lg" />
     */
    
    export let checked = false;
    export let disabled = false;
    export let id = "";
    export let label = "";
  </script>
  
  {#if label}
    <div class="checkbox-wrapper {$$props.class || ''}">
      <input
        {id}
        type="checkbox"
        bind:checked
        {disabled}
        class="checkbox"
        on:change
      />
      <label for={id} class="checkbox-label">
        {label}
      </label>
    </div>
  {:else}
    <input
      {id}
      type="checkbox"
      bind:checked
      {disabled}
      class="checkbox {$$props.class || ''}"
      on:change
    />
  {/if}
  
  <style>
    /* ============================================
       BASE CHECKBOX
       ============================================ */
    .checkbox {
      appearance: none;
      width: 16px;
      height: 16px;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--bg-elevated);
      cursor: pointer;
      transition: all var(--transition-base);
      position: relative;
      flex-shrink: 0;
    }
  
    .checkbox:hover:not(:disabled) {
      border-color: var(--accent);
    }
  
    .checkbox:checked {
      background: var(--accent);
      border-color: var(--accent);
    }
  
    .checkbox:checked::after {
      content: '';
      position: absolute;
      left: 5px;
      top: 2px;
      width: 4px;
      height: 8px;
      border: solid var(--accent-fg);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  
    .checkbox:focus-visible {
      outline: 3px solid color-mix(in oklch, var(--accent) 20%, transparent);
      outline-offset: 2px;
    }
  
    .checkbox:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  
    /* ============================================
       WRAPPER WITH LABEL
       ============================================ */
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
  
    .checkbox:disabled + .checkbox-label {
      opacity: 0.5;
      cursor: not-allowed;
    }
  
    /* ============================================
       SIZE MODIFIERS (via class)
       ============================================ */
    .checkbox.checkbox--sm {
      width: 14px;
      height: 14px;
    }
  
    .checkbox.checkbox--sm:checked::after {
      left: 4px;
      top: 1px;
      width: 3px;
      height: 7px;
    }
  
    .checkbox.checkbox--md {
      width: 16px;
      height: 16px;
    }
  
    .checkbox.checkbox--lg {
      width: 20px;
      height: 20px;
    }
  
    .checkbox.checkbox--lg:checked::after {
      left: 7px;
      top: 3px;
      width: 5px;
      height: 10px;
    }
  
    /* Size modifiers for wrapper */
    .checkbox-wrapper.checkbox--sm .checkbox {
      width: 14px;
      height: 14px;
    }
  
    .checkbox-wrapper.checkbox--sm .checkbox:checked::after {
      left: 4px;
      top: 1px;
      width: 3px;
      height: 7px;
    }
  
    .checkbox-wrapper.checkbox--sm .checkbox-label {
      font-size: 13px;
    }
  
    .checkbox-wrapper.checkbox--lg .checkbox {
      width: 20px;
      height: 20px;
    }
  
    .checkbox-wrapper.checkbox--lg .checkbox:checked::after {
      left: 7px;
      top: 3px;
      width: 5px;
      height: 10px;
    }
  
    .checkbox-wrapper.checkbox--lg .checkbox-label {
      font-size: 15px;
    }
  </style>
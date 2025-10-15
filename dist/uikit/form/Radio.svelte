<script>
    /**
     * Radio Component - LLM-optimized with component--modifier pattern
     * 
     * PROPS (functional):
     * - group: any (bindable - shared value across radio group)
     * - value: any (this radio's value)
     * - disabled: boolean
     * - id: string
     * - label: string (optional - renders label next to radio)
     * - name: string (radio group name)
     * 
     * MODIFIERS (via class prop):
     * - Size: radio--sm | radio--md | radio--lg
     * 
     * USAGE:
     * <Radio bind:group={selected} value="option1" name="choice" label="Option 1" />
     * <Radio bind:group={selected} value="option2" name="choice" label="Option 2" />
     */
    
    export let group = undefined;
    export let value = undefined;
    export let disabled = false;
    export let id = "";
    export let label = "";
    export let name = "";
  </script>
  
  {#if label}
    <div class="radio-wrapper {$$props.class || ''}">
      <input
        {id}
        {name}
        type="radio"
        bind:group
        {value}
        {disabled}
        class="radio"
        on:change
      />
      <label for={id} class="radio-label">
        {label}
      </label>
    </div>
  {:else}
    <input
      {id}
      {name}
      type="radio"
      bind:group
      {value}
      {disabled}
      class="radio {$$props.class || ''}"
      on:change
    />
  {/if}
  
  <style>
    /* ============================================
       BASE RADIO
       ============================================ */
    .radio {
      appearance: none;
      width: 16px;
      height: 16px;
      border: 1px solid var(--border);
      border-radius: 50%;
      background: var(--bg-elevated);
      cursor: pointer;
      transition: all var(--transition-base);
      position: relative;
      flex-shrink: 0;
    }
  
    .radio:hover:not(:disabled) {
      border-color: var(--accent);
    }
  
    .radio:checked {
      border-color: var(--accent);
      background: var(--accent);
    }
  
    .radio:checked::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent-fg);
      transform: translate(-50%, -50%);
    }
  
    .radio:focus-visible {
      outline: 3px solid color-mix(in oklch, var(--accent) 20%, transparent);
      outline-offset: 2px;
    }
  
    .radio:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  
    /* ============================================
       WRAPPER WITH LABEL
       ============================================ */
    .radio-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
  
    .radio-label {
      font-size: 14px;
      color: var(--text);
      cursor: pointer;
      user-select: none;
    }
  
    .radio:disabled + .radio-label {
      opacity: 0.5;
      cursor: not-allowed;
    }
  
    /* ============================================
       SIZE MODIFIERS (via class)
       ============================================ */
    .radio.radio--sm {
      width: 14px;
      height: 14px;
    }
  
    .radio.radio--sm:checked::after {
      width: 5px;
      height: 5px;
    }
  
    .radio.radio--md {
      width: 16px;
      height: 16px;
    }
  
    .radio.radio--lg {
      width: 20px;
      height: 20px;
    }
  
    .radio.radio--lg:checked::after {
      width: 8px;
      height: 8px;
    }
  
    /* Size modifiers for wrapper */
    .radio-wrapper.radio--sm .radio {
      width: 14px;
      height: 14px;
    }
  
    .radio-wrapper.radio--sm .radio:checked::after {
      width: 5px;
      height: 5px;
    }
  
    .radio-wrapper.radio--sm .radio-label {
      font-size: 13px;
    }
  
    .radio-wrapper.radio--lg .radio {
      width: 20px;
      height: 20px;
    }
  
    .radio-wrapper.radio--lg .radio:checked::after {
      width: 8px;
      height: 8px;
    }
  
    .radio-wrapper.radio--lg .radio-label {
      font-size: 15px;
    }
  </style>
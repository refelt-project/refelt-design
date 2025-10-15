<script>
    /**
     * Switch Component - LLM-optimized with component--modifier pattern
     * 
     * PROPS (functional):
     * - checked: boolean (bindable)
     * - disabled: boolean
     * - id: string
     * - label: string (optional - renders label next to switch)
     * 
     * MODIFIERS (via class prop):
     * - Size: switch--sm | switch--md | switch--lg
     * 
     * USAGE:
     * <Switch bind:checked={enabled} label="Enable feature" />
     * <Switch bind:checked={value} id="my-switch" class="switch--lg" />
     */
    
    export let checked = false;
    export let disabled = false;
    export let id = "";
    export let label = "";
  </script>
  
  {#if label}
    <div class="switch-wrapper {$$props.class || ''}">
      <label for={id} class="switch-label">
        {label}
      </label>
      <label class="switch">
        <input
          {id}
          type="checkbox"
          bind:checked
          {disabled}
          class="switch-input"
          on:change
        />
        <span class="switch-track" class:checked>
          <span class="switch-thumb"></span>
        </span>
      </label>
    </div>
  {:else}
    <label class="switch {$$props.class || ''}">
      <input
        {id}
        type="checkbox"
        bind:checked
        {disabled}
        class="switch-input"
        on:change
      />
      <span class="switch-track" class:checked>
        <span class="switch-thumb"></span>
      </span>
    </label>
  {/if}
  
  <style>
    /* ============================================
       BASE SWITCH
       ============================================ */
    .switch {
      display: inline-flex;
      cursor: pointer;
    }
  
    .switch-input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  
    .switch-track {
      position: relative;
      display: inline-flex;
      align-items: center;
      width: 40px;
      height: 20px;
      background: var(--bg-elevated);
      border: 1px solid var(--border);
      border-radius: var(--radius-full);
      transition: all var(--transition-base);
    }
  
    .switch:hover .switch-track:not(.checked) {
      border-color: var(--border-strong);
    }
  
    .switch-track.checked {
      background: var(--accent);
      border-color: var(--accent);
    }
  
    .switch-thumb {
      display: block;
      width: 16px;
      height: 16px;
      background: var(--text);
      border-radius: 50%;
      transition: all var(--transition-base);
      transform: translateX(2px);
    }
  
    .switch-track.checked .switch-thumb {
      background: var(--accent-fg);
      transform: translateX(20px);
    }
  
    .switch-input:focus-visible + .switch-track {
      outline: 3px solid color-mix(in oklch, var(--accent) 20%, transparent);
      outline-offset: 2px;
    }
  
    .switch-input:disabled + .switch-track {
      opacity: 0.5;
      cursor: not-allowed;
    }
  
    /* ============================================
       WRAPPER WITH LABEL
       ============================================ */
    .switch-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
  
    .switch-label {
      font-size: 14px;
      color: var(--text);
      user-select: none;
    }
  
    .switch-input:disabled ~ .switch-label {
      opacity: 0.5;
    }
  
    /* ============================================
       SIZE MODIFIERS (via class)
       ============================================ */
    .switch.switch--sm .switch-track {
      width: 32px;
      height: 16px;
    }
  
    .switch.switch--sm .switch-thumb {
      width: 12px;
      height: 12px;
    }
  
    .switch.switch--sm .switch-track.checked .switch-thumb {
      transform: translateX(14px);
    }
  
    .switch.switch--md .switch-track {
      width: 40px;
      height: 20px;
    }
  
    .switch.switch--md .switch-thumb {
      width: 16px;
      height: 16px;
    }
  
    .switch.switch--lg .switch-track {
      width: 48px;
      height: 24px;
    }
  
    .switch.switch--lg .switch-thumb {
      width: 20px;
      height: 20px;
    }
  
    .switch.switch--lg .switch-track.checked .switch-thumb {
      transform: translateX(22px);
    }
  
    /* Size modifiers for wrapper */
    .switch-wrapper.switch--sm .switch-track {
      width: 32px;
      height: 16px;
    }
  
    .switch-wrapper.switch--sm .switch-thumb {
      width: 12px;
      height: 12px;
    }
  
    .switch-wrapper.switch--sm .switch-track.checked .switch-thumb {
      transform: translateX(14px);
    }
  
    .switch-wrapper.switch--sm .switch-label {
      font-size: 13px;
    }
  
    .switch-wrapper.switch--lg .switch-track {
      width: 48px;
      height: 24px;
    }
  
    .switch-wrapper.switch--lg .switch-thumb {
      width: 20px;
      height: 20px;
    }
  
    .switch-wrapper.switch--lg .switch-track.checked .switch-thumb {
      transform: translateX(22px);
    }
  
    .switch-wrapper.switch--lg .switch-label {
      font-size: 15px;
    }
  </style>
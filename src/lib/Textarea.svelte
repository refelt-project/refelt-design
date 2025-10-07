<script>
    /**
     * Textarea Component - LLM-optimized with component--modifier pattern
     * 
     * PROPS (functional):
     * - value: string (bindable)
     * - placeholder: string
     * - disabled: boolean
     * - id: string
     * - label: string
     * - rows: number (default: 4)
     * 
     * MODIFIERS (via class prop):
     * - Size: textarea--sm | textarea--md | textarea--lg
     * - Resize: textarea--resize-none | textarea--resize-vertical | textarea--resize-horizontal
     * 
     * USAGE:
     * <Textarea label="Comments" bind:value={comments} />
     * <Textarea placeholder="Enter notes..." rows={6} class="textarea--lg textarea--resize-none" />
     */
    
    export let value = "";
    export let placeholder = "";
    export let id = "";
    export let label = "";
    export let disabled = false;
    export let rows = 4;
  </script>
  
  {#if label}
    <label for={id} class="textarea-label">{label}</label>
  {/if}
  
  <textarea
    {id}
    {placeholder}
    {disabled}
    {rows}
    bind:value
    class="textarea {$$props.class || ''}"
    on:input
    on:focus
    on:blur
  />
  
  <style>
    /* ============================================
       LABEL
       ============================================ */
    .textarea-label {
      display: block;
      margin-bottom: var(--space-sm);
      font-size: 14px;
      font-weight: 500;
      color: var(--text);
    }
  
    /* ============================================
       BASE TEXTAREA
       ============================================ */
    .textarea {
      width: 100%;
      padding: 12px;
      background: var(--bg-elevated);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      color: var(--text);
      font-size: 14px;
      font-family: inherit;
      line-height: 1.5;
      resize: vertical;
      transition: all var(--transition-base);
    }
  
    .textarea:focus {
      outline: none;
      border-color: var(--accent);
    }
  
    .textarea::placeholder {
      color: var(--text-subtle);
    }
  
    .textarea:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  
    /* ============================================
       SIZE MODIFIERS (via class)
       ============================================ */
    .textarea.textarea--sm {
      padding: 8px 10px;
      font-size: 13px;
    }
  
    .textarea.textarea--md {
      padding: 12px;
      font-size: 14px;
    }
  
    .textarea.textarea--lg {
      padding: 14px 16px;
      font-size: 16px;
    }
  
    /* ============================================
       RESIZE MODIFIERS (via class)
       ============================================ */
    .textarea.textarea--resize-none {
      resize: none;
    }
  
    .textarea.textarea--resize-vertical {
      resize: vertical;
    }
  
    .textarea.textarea--resize-horizontal {
      resize: horizontal;
    }
  
    .textarea.textarea--resize-both {
      resize: both;
    }
  </style>
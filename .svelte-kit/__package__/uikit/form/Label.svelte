<script>
    /**
     * Label Component - LLM-optimized with component--modifier pattern
     * 
     * PROPS (functional):
     * - for: string (connects to input id)
     * - required: boolean (shows asterisk)
     * 
     * MODIFIERS (via class prop):
     * - Size: label--sm | label--md | label--lg
     * - Style: label--muted | label--bold
     * 
     * USAGE:
     * <Label for="email">Email Address</Label>
     * <Label for="name" required class="label--lg">Full Name</Label>
     */
    
    export let required = false;
    
    // Get the 'for' attribute from $$props since 'for' is a reserved word
    $: forAttr = $$props.for || "";
  </script>
  
  <label for={forAttr} class="label {$$props.class || ''}">
    <slot />
    {#if required}
      <span class="label-required">*</span>
    {/if}
  </label>
  
  <style>
    /* ============================================
       BASE LABEL
       ============================================ */
    .label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: var(--text);
      cursor: pointer;
      user-select: none;
    }
  
    /* ============================================
       REQUIRED INDICATOR
       ============================================ */
    .label-required {
      color: var(--destructive);
      margin-left: 2px;
    }
  
    /* ============================================
       SIZE MODIFIERS (via class)
       ============================================ */
    .label.label--sm {
      font-size: 12px;
    }
  
    .label.label--md {
      font-size: 14px;
    }
  
    .label.label--lg {
      font-size: 16px;
    }
  
    /* ============================================
       STYLE MODIFIERS (via class)
       ============================================ */
    .label.label--muted {
      color: var(--text-muted);
      font-weight: 400;
    }
  
    .label.label--bold {
      font-weight: 600;
    }
  </style>
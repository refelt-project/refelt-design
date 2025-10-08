<script>
  /**
   * Input Component - LLM-optimized with functional props
   * 
   * PROPS (functional):
   * - value: string (bindable)
   * - type: "text" | "email" | "password"
   * - placeholder: string
   * - disabled: boolean
   * - id: string
   * - label: string
   * 
   * MODIFIERS (via class prop):
   * - Size: input--sm | input--md | input--lg
   * 
   * USAGE:
   * <Input label="Email" type="email" bind:value={email} />
   * <Input placeholder="Search..." class="input--lg" />
   */
  
  export let value = "";
  export let placeholder = "";
  export let type = "text";
  export let id = "";
  export let label = "";
  export let disabled = false;

  // Silent validation
  const TYPES = ["text", "email", "password"];
  if (!TYPES.includes(type)) type = "text";
</script>

{#if label}
  <label for={id} class="input-label">{label}</label>
{/if}

{#if type === "email"}
  <input
    {id}
    type="email"
    {placeholder}
    {disabled}
    bind:value
    class="input {$$props.class || ''}"
    on:input
    on:focus
    on:blur
  />
{:else if type === "password"}
  <input
    {id}
    type="password"
    {placeholder}
    {disabled}
    bind:value
    class="input {$$props.class || ''}"
    on:input
    on:focus
    on:blur
  />
{:else}
  <input
    {id}
    type="text"
    {placeholder}
    {disabled}
    bind:value
    class="input {$$props.class || ''}"
    on:input
    on:focus
    on:blur
  />
{/if}

<style>
  /* ============================================
     LABEL
     ============================================ */
  .input-label {
    display: block;
    margin-bottom: var(--space-sm);
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
  }

  /* ============================================
     BASE INPUT
     ============================================ */
  .input {
    width: 100%;
    padding: 12px;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--text);
    font-size: 14px;
    font-family: inherit;
    transition: all var(--transition-base);
  }

  .input:focus {
    outline: none;
    border-color: var(--accent);
  }

  .input::placeholder {
    color: var(--text-subtle);
  }

  .input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* ============================================
     SIZE MODIFIERS (via class)
     ============================================ */
  .input.input--sm {
    padding: 8px 10px;
    font-size: 13px;
  }

  .input.input--md {
    padding: 12px;
    font-size: 14px;
  }

  .input.input--lg {
    padding: 14px 16px;
    font-size: 16px;
  }
</style>
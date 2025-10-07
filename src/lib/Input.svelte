<script>
  /**
   * Input Component - Type-safe input field
   * 
   * @typedef {"text" | "email" | "password"} Type
   * 
   * @type {string}
   */
  export let value = "";
  
  /**
   * @type {string}
   */
  export let placeholder = "";
  
  /**
   * @type {Type}
   */
  export let type = "text";
  
  /**
   * @type {string}
   */
  export let id = "";
  
  /**
   * @type {string}
   */
  export let label = "";

  /**
   * @type {boolean}
   */
  export let disabled = false;

  // ============================================
  // TYPE SAFETY - tylko dozwolone wartości
  // ============================================
  const ALLOWED_TYPES = ["text", "email", "password"];

  // Validation guard
  if (!ALLOWED_TYPES.includes(type)) {
    console.error(`[Input] Invalid type: "${type}". Allowed: ${ALLOWED_TYPES.join(", ")}`);
    type = "text"; // fallback
  }
</script>

<!--
  SECURITY: 
  - NO style prop accepted
  - NO $$restProps spread (except events)
  - Events forwarded: input, focus, blur
-->
{#if label}
  <label for={id} class="input-label">{label}</label>
{/if}

{#if type === "email"}
  <input
    {id}
    class="input"
    type="email"
    {placeholder}
    {disabled}
    bind:value
    on:input
    on:focus
    on:blur
  />
{:else if type === "password"}
  <input
    {id}
    class="input"
    type="password"
    {placeholder}
    {disabled}
    bind:value
    on:input
    on:focus
    on:blur
  />
{:else}
  <input
    {id}
    class="input"
    type="text"
    {placeholder}
    {disabled}
    bind:value
    on:input
    on:focus
    on:blur
  />
{/if}

<style>
  .input-label {
    display: block;
    margin-bottom: var(--space-sm);
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
  }

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
</style>
<script>
  // PROPS
  export let value = "";
  export let placeholder = "";
  export let type = "text"; // "text" | "email" | "password" | "number"
  export let id = "";
  export let label = "";
  export let disabled = false;

  // tylko dla number
  export let min = undefined;
  export let max = undefined;
  export let step = undefined;

  const TYPES = ["text", "email", "password", "number"];
  if (!TYPES.includes(type)) type = "text";
</script>

{#if label}
  <label for={id} class="input-label">{label}</label>
{/if}

{#if type === "email"}
  <input {id} type="email" {placeholder} {disabled} bind:value class="input {$$props.class || ''}" />
{:else if type === "password"}
  <input {id} type="password" {placeholder} {disabled} bind:value class="input {$$props.class || ''}" />
{:else if type === "number"}
  <input
    {id}
    type="number"
    {placeholder}
    {disabled}
    bind:value|number
    {min}
    {max}
    {step}
    inputmode="decimal"
    class="input {$$props.class || ''}"
  />
{:else}
  <input {id} type="text" {placeholder} {disabled} bind:value class="input {$$props.class || ''}" />
{/if}

<style>
  /* LABEL */
  .input-label {
    display: block;
    margin-bottom: var(--space-sm);
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
  }

  /* BASE */
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
    box-sizing: border-box;
  }

  .input:focus { outline: none; border-color: var(--accent); }
  .input::placeholder { color: var(--text-subtle); }
  .input:disabled { opacity: 0.5; cursor: not-allowed; }

  /* SIZE MODIFIERS */
  .input.input--sm { padding: 8px 10px; font-size: 13px; }
  .input.input--md { padding: 12px;     font-size: 14px; }
  .input.input--lg { padding: 14px 16px; font-size: 16px; }

  /* NUMBER UX: spójny wygląd (bez natywnych strzałek) */
  .input[type="number"]::-webkit-outer-spin-button,
  .input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
  .input[type="number"] { -moz-appearance: textfield; }
</style>

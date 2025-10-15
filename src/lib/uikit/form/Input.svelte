<!-- src/uikit/form/Input.svelte -->
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
  export let step = 1;

  const TYPES = ["text", "email", "password", "number"];
  if (!TYPES.includes(type)) type = "text";

  // helpery dla number
  const toNumber = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };

  const clamp = (n) => {
    if (min !== undefined && n < min) return min;
    if (max !== undefined && n > max) return max;
    return n;
  };

  function inc() {
    value = clamp(toNumber(value) + (step ?? 1));
  }

  function dec() {
    value = clamp(toNumber(value) - (step ?? 1));
  }

  function onKeydown(e) {
    if (disabled) return;
    if (e.key === "ArrowUp") {
      e.preventDefault();
      inc();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      dec();
    }
  }
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
  />
{:else if type === "password"}
  <input
    {id}
    type="password"
    {placeholder}
    {disabled}
    bind:value
    class="input {$$props.class || ''}"
  />
{:else if type === "number"}
  <!-- Shadcn-like segmented number input with +/- -->
  <div
    class="number-wrapper {$$props.class || ''}"
    data-disabled={disabled ? "" : null}
  >
    <input
      {id}
      type="number"
      bind:value
      {placeholder}
      {disabled}
      {min}
      {max}
      {step}
      inputmode="decimal"
      class="input input--number"
      style="font-variant-numeric: tabular-nums;"
      on:keydown={onKeydown}
      aria-label={label || id || "Number input"}
    />
    <button
      type="button"
      class="number-btn number-btn--minus"
      on:click={dec}
      aria-label="Decrease"
      {disabled}>−</button
    >
    <button
      type="button"
      class="number-btn number-btn--plus"
      on:click={inc}
      aria-label="Increase"
      {disabled}>+</button
    >
  </div>
{:else}
  <input
    {id}
    type="text"
    {placeholder}
    {disabled}
    bind:value
    class="input {$$props.class || ''}"
  />
{/if}

<style>
  /**
   * WSPÓLNE TOKENY (lokalne fallbacki na szary ring)
   * Jeśli masz globalne --ring, --border-strong itd., to zostaną użyte.
   */
  :root {
  }
  .input,
  .number-wrapper {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    --ring-color: var(
      --ring,
      color-mix(in oklch, var(--text) 16%, transparent)
    );
    --ring-width: 3px;
    --border-strong: var(
      --border-strong,
      color-mix(in oklch, var(--border) 60%, var(--text) 14%)
    );
  }

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
    transition:
      border-color var(--transition-base),
      box-shadow var(--transition-base),
      background var(--transition-base);
    box-sizing: border-box;
  }

  /* Spójny, SZARY ring dla wszystkich zwykłych inputów */
  .input:focus,
  .input:focus-visible {
    outline: none;
    border-color: var(--border-strong);
    box-shadow: 0 0 0 var(--ring-width) var(--ring-color);
  }

  .input::placeholder {
    color: var(--text-subtle);
  }
  .input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* SIZE MODIFIERS */
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

  /* NUMBER - usuń natywne strzałki */
  .input[type="number"]::-webkit-outer-spin-button,
  .input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .input[type="number"] {
    -moz-appearance: textfield;
  }

  /* === Shadcn-like NUMBER WRAPPER === */
  .number-wrapper {
    display: inline-grid;
    grid-template-columns: 1fr auto auto;
    align-items: stretch;
    width: 100%;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    /* KLUCZOWA ZMIANA: takie samo zaokrąglenie jak zwykłe inputy */
    border-radius: var(--radius-md);
    overflow: hidden;
    transition:
      border-color var(--transition-base),
      box-shadow var(--transition-base),
      background var(--transition-base);
  }

  /* SZARY ring na całym kontenerze number zamiast niebieskiego */
  .number-wrapper:has(.input--number:focus),
  .number-wrapper:has(.input--number:focus-visible) {
    border-color: var(--border-strong);
    box-shadow: 0 0 0 var(--ring-width) var(--ring-color);
  }

  .number-wrapper[data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--number {
    border: none;
    border-radius: 0;
    background: transparent;
    padding: 10px 12px;
    outline: none; /* czyści natywne */
    box-shadow: none; /* ring idzie na wrapperze */
  }

  .number-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 38px;
    padding: 0 10px;
    background: transparent;
    border: none;
    border-left: 1px solid var(--border);
    color: var(--text);
    font: inherit;
    cursor: pointer;
    transition:
      background var(--transition-base),
      color var(--transition-base);
  }

  .number-btn:hover {
    background: var(--bg-elevated);
  }
  .number-btn:active {
    background: color-mix(in oklch, var(--bg-elevated) 60%, black 4%);
  }
  .number-btn:disabled {
    cursor: not-allowed;
  }

  /* kompaktowe rozmiary jak w shadcn; spójne z resztą */
  .number-wrapper.input--sm {
    border-radius: var(--radius-md);
  }
  .number-wrapper.input--md {
    border-radius: var(--radius-md);
  }
  .number-wrapper.input--lg {
    border-radius: var(--radius-md);
  } /* zamiast full, żeby było identycznie */
</style>

<script>
  export let value = "";
  export let placeholder = "";
  export let type = "text";
  export let id = "";
  export let label = "";
</script>

{#if label}
  <label for={id} class="input-label">{label}</label>
{/if}

{#if type === "email"}
  <input
    {id}
    class="input"
    type="email"
    {placeholder}
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
    bind:value
    on:input
    on:focus
    on:blur
  />
{/if}

<style>
  .input-label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
  }

  .input {
    width: 100%;
    padding: 12px;
    background: var(--bg-elevated);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text);
    font-size: 14px;
    font-family: inherit;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .input:focus {
    outline: none;
    border-color: var(--accent);
  }

  .input::placeholder {
    color: var(--text-subtle);
  }
</style>
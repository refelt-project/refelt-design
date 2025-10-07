<script>
  export let value = "";
  export let placeholder = "";
  export let type = "text";
</script>

{#if type === "email"}
  <input
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
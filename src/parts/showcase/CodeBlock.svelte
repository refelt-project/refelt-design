<script>
  import { Button } from "@/lib/uikit";
  import { Copy, Check } from "lucide-svelte";
  
  export let code = "";
  export let language = "svelte";
  
  let copied = false;
  
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      copied = true;
      setTimeout(() => copied = false, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
</script>

<div class="code-block">
  <div class="code-header">
    <span class="code-language">{language}</span>
    <button 
      class="copy-btn" 
      on:click={copyCode}
      aria-label="Copy code"
    >
      {#if copied}
        <Check size={14} strokeWidth={2} />
      {:else}
        <Copy size={14} strokeWidth={2} />
      {/if}
    </button>
  </div>
  <pre class="code-content"><code>{code}</code></pre>
</div>

<style>
  /* ============================================
     CODE BLOCK - Swiss Monospace
     ============================================ */
  .code-block {
    border: 1px solid var(--border);
    background: var(--bg-elevated);
    border-radius: 2px;
    overflow: hidden;
    font-feature-settings: "liga" 0, "calt" 0;
  }

  /* ============================================
     HEADER - Minimal Chrome
     ============================================ */
  .code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }

  .code-language {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text-subtle);
    letter-spacing: 0.08em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .copy-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    background: transparent;
    border: none;
    border-radius: 2px;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .copy-btn:hover {
    background: var(--bg-elevated);
    color: var(--text);
  }

  .copy-btn:active {
    transform: scale(0.95);
  }

  /* ============================================
     CODE CONTENT - Swiss Monospace
     ============================================ */
  .code-content {
    margin: 0;
    padding: 20px;
    overflow-x: auto;
    font-family: 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.6;
    color: var(--text);
    background: var(--bg-elevated);
    font-weight: 400;
    letter-spacing: 0;
    font-variant-ligatures: none;
  }

  .code-content code {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  /* ============================================
     SCROLLBAR - Minimal
     ============================================ */
  .code-content::-webkit-scrollbar {
    height: 8px;
  }

  .code-content::-webkit-scrollbar-track {
    background: var(--bg);
  }

  .code-content::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 2px;
  }

  .code-content::-webkit-scrollbar-thumb:hover {
    background: var(--border-strong);
  }

  /* ============================================
     RESPONSIVE
     ============================================ */
  @media (max-width: 640px) {
    .code-content {
      font-size: 12px;
      padding: 16px;
    }
  }
</style>
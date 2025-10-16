<script>
  import { Card, Text } from "@/lib/uikit";
  import CodeBlock from "./CodeBlock.svelte";
  
  export let title = "";
  export let description = "";
  export let code = "";
  export let centered = false;
</script>

<div class="component-preview">
  {#if title}
    <div class="preview-header">
      <Text class="text--lg text--bold">{title}</Text>
      {#if description}
        <Text class="text--sm text--muted">{description}</Text>
      {/if}
    </div>
  {/if}
  
 
    <div class="preview-area" class:centered>
      <slot />
    </div>

  
  {#if code}
    <CodeBlock {code} />
  {/if}
</div>

<style>
  .component-preview {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
  }
  
  .preview-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .preview-card {
    border: 2px dashed var(--border);
    background: var(--bg);
  }
  
  .preview-area {
    padding: var(--space-xl);
    min-height: 120px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: flex-start;
  }
  
  .preview-area.centered {
    justify-content: center;
    align-items: center;
  }
  
  @media (max-width: 640px) {
    .preview-area {
      padding: var(--space-lg);
    }
  }
</style>
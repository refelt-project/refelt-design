<script>
    import Text from './Text.svelte';
    
    /**
     * CardHeader Component - shadcn/ui compatible
     * Contains title and optional action
     * 
     * @type {string}
     */
    export let title = "";
    
    /**
     * @type {string}
     */
    let className = "";
    export { className as class };
  </script>
  
  <div class="card-header {className}">
    <div class="card-header-content">
      {#if title}
        <Text size="lg" class="card-title">{title}</Text>
      {/if}
      
      <slot />
    </div>
    
    {#if $$slots.action}
      <div class="card-header-action">
        <slot name="action" />
      </div>
    {/if}
  </div>
  
  <style>
    .card-header {
      /* shadcn/ui exact structure */
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      padding: var(--space-lg); /* 24px */
      padding-bottom: 0;
    }
  
    .card-header-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex: 1;
    }
  
    .card-header-action {
      flex-shrink: 0;
    }
  
    /* Override Text styles for title */
    :global(.card-title) {
      margin: 0 0 12px 0 !important;
      font-weight: 500 !important;
      line-height: 24px !important;
    }
  </style>
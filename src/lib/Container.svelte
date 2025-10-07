<script>
  /**
   * Container Component - Centered content wrapper
   * No props needed - pure container
   */
</script>

<!--
  SECURITY: 
  - NO style prop accepted
  - NO $$restProps spread
  - Only class can be added via parent
-->
<div class="container">
  <slot />
</div>

<style>
  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--space-lg);
  }
</style>
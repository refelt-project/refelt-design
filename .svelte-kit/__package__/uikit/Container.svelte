<script>
  /**
   * Container Component - Centered content wrapper
   * 
   * NO PROPS - Pure container
   * 
   * USAGE:
   * <Container>
   *   <YourContent />
   * </Container>
   */
</script>

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
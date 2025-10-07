<script>
  // as: "h1" | "h2" | "h3" | "p"
  // size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  export let as = "p";
  export let size = "md";

  const sizeMap = {
    xxl: "clamp(48px, 8vw, 96px)",
    xl: "42px",
    lg: "18px",
    md: "14px",
    sm: "13px",
    xs: "12px"
  };

  $: fontSize = sizeMap[size] || sizeMap.md;
</script>

{#if as === "h1"}
  <h1 class="text text-heading" style="font-size: {fontSize};">
    <slot />
  </h1>
{:else if as === "h2"}
  <h2 class="text text-heading" style="font-size: {fontSize};">
    <slot />
  </h2>
{:else if as === "h3"}
  <h3 class="text text-heading" style="font-size: {fontSize};">
    <slot />
  </h3>
{:else}
  <p class="text text-body" style="font-size: {fontSize};">
    <slot />
  </p>
{/if}

<style>
  .text {
    margin: 0;
    padding: 0;
    color: var(--text);
    
    /* PREMIUM SYSTEM FONT STACK */
    font-family: 
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
    
    /* CRYSTAL CLEAR RENDERING */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    
    /* ADVANCED TYPOGRAPHY */
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
    font-optical-sizing: auto;
  }

  .text-heading {
    color: var(--text);
    /* Better number rendering in headings */
    font-variant-numeric: lining-nums;
  }

  .text-body {
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.6;
    color: var(--text);
    /* Proportional numbers look better in body text */
    font-variant-numeric: proportional-nums;
  }

  /* Specific heading styles - SUPER sharp and modern */
  h1.text-heading {
    font-weight: 800;
    letter-spacing: -0.05em;
    line-height: 1.1;
    /* Tighter tracking for large text */
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "ss01" 1;
  }

  h2.text-heading {
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.15;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
  }

  h3.text-heading {
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1.2;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
  }
</style>
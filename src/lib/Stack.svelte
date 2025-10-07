<script>
  // direction: "vertical" | "horizontal"
  // gap: "sm" | "md" | "lg" | "xl" | "xxl"
  export let direction = "vertical";
  export let gap = "md";

  const gapMap = {
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "48px",
    xxl: "64px"
  };

  $: gapValue = gapMap[gap] || gap;
</script>

<div class="stack stack-{direction}" style="gap: {gapValue}">
  <slot />
</div>

<style>
  .stack {
    display: flex;
  }

  .stack-vertical {
    flex-direction: column;
  }

  .stack-horizontal {
    flex-direction: row;
    align-items: center;
  }
</style>
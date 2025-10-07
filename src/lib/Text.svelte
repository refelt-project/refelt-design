<script>
  /**
   * Text Component - shadcn/ui compatible (4 sizes only)
   *
   * @typedef {"p" | "span"} As
   * @typedef {"sm" | "base" | "lg" | "xl"} Size
   *
   * @type {As}
   */
  export let as = "p";

  /**
   * @type {Size}
   */
  export let size = "base";

  /**
   * @type {boolean}
   */
  export let muted = false;

  /**
   * @type {string}
   */
  let className = "";
  export { className as class };

  // ============================================
  // TYPE SAFETY
  // ============================================
  const ALLOWED_AS = ["p", "span"];
  const ALLOWED_SIZES = ["sm", "base", "lg", "xl"];

  // Validation guards
  if (!ALLOWED_AS.includes(as)) {
    console.error(
      `[Text] Invalid as: "${as}". Allowed: ${ALLOWED_AS.join(", ")}`
    );
    as = "p";
  }

  if (!ALLOWED_SIZES.includes(size)) {
    console.error(
      `[Text] Invalid size: "${size}". Allowed: ${ALLOWED_SIZES.join(", ")}`
    );
    size = "base";
  }

  // ============================================
  // shadcn/ui SIZE SYSTEM
  // ============================================
  const sizeMap = {
    sm: { fontSize: "14px", lineHeight: "21px" }, // shadcn/ui exact
    base: { fontSize: "16px", lineHeight: "24px" }, // default
    lg: { fontSize: "18px", lineHeight: "28px" }, // larger
    xl: { fontSize: "20px", lineHeight: "28px" }, // heading-like
  };

  $: styles = sizeMap[size];
</script>

{#if as === "span"}
  <span
    class="text text-{size} {muted ? 'text-muted' : ''} {className}"
    style="font-size: {styles.fontSize}; line-height: {styles.lineHeight};"
  >
    <slot />
  </span>
{:else}
  <p
    class="text text-{size} {muted ? 'text-muted' : ''} {className}"
    style="font-size: {styles.fontSize}; line-height: {styles.lineHeight};"
  >
    <slot />
  </p>
{/if}

<style>
  .text {
    margin: 0;
    padding: 0;
    color: var(--text);

    /* PREMIUM SYSTEM FONT STACK */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
  }

  /* REMOVED properties (inherited from body):
     - font-smoothing
     - font-feature-settings
     - font-synthesis
     - text-rendering
     - font-optical-sizing
  */

  .text-muted {
    color: var(--text-muted);
  }

  /* Size-specific tweaks */
  .text-sm,
  .text-base {
    font-weight: 400;
  }

  .text-lg {
    font-weight: 500;
  }

  .text-xl {
    font-weight: 600;
  }
</style>

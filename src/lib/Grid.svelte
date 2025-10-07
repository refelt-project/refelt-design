<script>
    // NativeScript-like Grid component with RWD
    // columns: number | "auto-fit" | "auto-fill"
    // rows: number | "auto" (optional)
    // minColumnWidth: CSS value (for auto-fit/auto-fill)
    // gap: "sm" | "md" | "lg" | "xl" | "xxl"
    
    export let columns = "auto-fit";
    export let rows = "auto";
    export let minColumnWidth = "340px";
    export let gap = "lg";
  
    const gapMap = {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px",
      xxl: "64px"
    };
  
    $: gridTemplateColumns = computeColumns(columns, minColumnWidth);
    $: gridTemplateRows = computeRows(rows);
    $: gapValue = gapMap[gap] || gap;
  
    function computeColumns(cols, minWidth) {
      if (cols === "auto-fit") {
        return `repeat(auto-fit, minmax(${minWidth}, 1fr))`;
      }
      if (cols === "auto-fill") {
        return `repeat(auto-fill, minmax(${minWidth}, 1fr))`;
      }
      if (typeof cols === "number") {
        return `repeat(${cols}, 1fr)`;
      }
      // Direct CSS value
      return cols;
    }
  
    function computeRows(r) {
      if (r === "auto") {
        return "auto";
      }
      if (typeof r === "number") {
        return `repeat(${r}, auto)`;
      }
      // Direct CSS value
      return r;
    }
  </script>
  
  <div 
    class="grid" 
    style="
      grid-template-columns: {gridTemplateColumns}; 
      grid-template-rows: {gridTemplateRows}; 
      gap: {gapValue};
    "
  >
    <slot />
  </div>
  
  <style>
    .grid {
      display: grid;
    }
  </style>
<script>
    /**
     * CardFooter Component - shadcn/ui compatible
     * Footer area for actions/buttons
     * 
     * @type {string}
     */
    let className = "";
    export { className as class };
  </script>
  
  <div class="card-footer {className}">
    <slot />
  </div>
  
  <style>
    .card-footer {
      /* shadcn/ui exact padding */
      display: flex;
      align-items: center;
      gap: 8px;
      padding: var(--space-lg); /* 24px */
      padding-top: 0;
    }
  </style>
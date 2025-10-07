<script>
    // variant: "success" | "warning" | "error" | "info" | "pending"
    // size: "sm" | "md"
    export let variant = "info";
    export let size = "md";
  </script>
  
  <span class="badge badge-{variant} badge-{size}">
    <slot />
  </span>
  
  <style>
    .badge {
      display: inline-block;
      border-radius: 4px;
      font-weight: 500;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
  
    .badge-sm {
      padding: 2px 6px;
      font-size: 11px;
    }
  
    .badge-md {
      padding: 4px 8px;
      font-size: 12px;
    }
  
    /* Semantic Variants */
    .badge-success {
      background: var(--status-success-bg);
      color: var(--status-success);
    }
  
    .badge-warning {
      background: var(--status-warning-bg);
      color: var(--status-warning);
    }
  
    .badge-error {
      background: var(--status-error-bg);
      color: var(--status-error);
    }
  
    .badge-info {
      background: var(--status-info-bg);
      color: var(--status-info);
    }
  
    .badge-pending {
      background: var(--status-pending-bg);
      color: var(--status-pending);
    }
  </style>
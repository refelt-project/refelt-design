<script>
    /**
     * ItemLink – link-wiersz z ikoną prowadzącą i domyślną strzałką
     *
     * PROPS:
     * - href: string
     * - target?: string
     * - rel?: string (autododawane dla zewnętrznych)
     * - muted?: boolean (styl spokojniejszy)
     *
     * SLOTS:
     * - leading: miejsce na ikonę z lewej
     * - default: treść
     * - trailing: (opcjonalnie) własny element zamiast strzałki
     */
    export let href = '#';
    export let target = undefined;
    export let rel = undefined;
    export let muted = false;
  
    $: computedRel = rel ?? (target === '_blank' || href?.startsWith('http') ? 'noopener noreferrer' : undefined);
  </script>
  
  <a class="item-link {muted ? 'item-link--muted' : ''} {$$props.class || ''}" {href} {target} rel={computedRel}>
    <div class="item-icon">
      <slot name="leading" />
    </div>
    <div class="item-link__content">
      <slot />
    </div>
    <div class="item-link__trailing">
      <slot name="trailing">
        <!-- domyślna strzałka (SVG, bez zależności) -->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </svg>
      </slot>
    </div>
  </a>
  
  <style>
    .item-link {
      display: flex; align-items: center; gap: 12px; padding: 12px 16px;
      border: 1px solid var(--border); border-radius: var(--radius-md);
      text-decoration: none; color: var(--text); transition: all var(--transition-base);
    }
    .item-link:hover { background: var(--bg-elevated); }
    .item-link--muted { opacity: 0.9; }
    .item-icon { flex-shrink: 0; color: var(--accent); display: flex; }
    .item-link__content { flex: 1 1 auto; min-width: 0; }
    .item-link__trailing { display: flex; align-items: center; }
  </style>
  
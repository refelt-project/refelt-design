<script>
    /**
     * ItemCard – prosty, klikalny/nieklikalny wiersz-karta z miejscem na akcje
     *
     * PROPS:
     * - as: 'div' | 'button' | 'a'        ← wariant elementu bazowego
     * - href?: string                      ← używane gdy as==='a'
     * - disabled?: boolean                 ← dla button
     *
     * SLOTS:
     * - (default): treść po lewej (tytuł/opis)
     * - actions:   miejsce na przyciski/ikonki po prawej
     *
     * MODYFIKATORY (class):
     * - item-card--hoverless                ← bez efektu hover
     */
    export let as = 'div';
    export let href = undefined;
    export let disabled = false;
  
    // a11y dla <a> i <button>
    $: rel = as === 'a' && href?.startsWith('http') ? 'noopener noreferrer' : undefined;
  </script>
  
  <svelte:element
    this={as}
    class="item-card {$$props.class || ''}"
    {...(as === 'a' ? { href, rel } : {})}
    {...(as === 'button' ? { disabled } : {})}
  >
    <div class="item-card__content">
      <slot />
    </div>
    <div class="item-card__actions">
      <slot name="actions" />
    </div>
  </svelte:element>
  
  <style>
    .item-card {
      display: flex; align-items: center; justify-content: space-between;
      gap: 16px; padding: 16px; border: 1px solid var(--border);
      border-radius: var(--radius-md); transition: all var(--transition-base);
      text-decoration: none; color: var(--text);
    }
    .item-card:not(.item-card--hoverless):hover { background: var(--bg-elevated); }
    .item-card__content { min-width: 0; }
    .item-card__actions { display: flex; gap: 8px; align-items: center; }
  </style>
  
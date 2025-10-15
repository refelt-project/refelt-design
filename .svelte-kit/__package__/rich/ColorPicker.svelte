<script>
    /**
     * ColorPicker – wybór koloru jako grupa radio (wartości formularzowe)
     *
     * PROPS:
     * - group: string (bindable)   ← aktualnie wybrany kolor
     * - name: string               ← nazwa grupy radio
     * - options: string[]          ← np. ["blue","amber","green","rose"]
     * - idPrefix: string           ← prefiks id inputów
     * - disabled: boolean
     *
     * Używa natywnych <input type="radio"> by zachować semantykę form.
     */
    export let group = '';
    export let name = 'color';
    export let options = ['blue', 'amber', 'green', 'rose'];
    export let idPrefix = 'color';
    export let disabled = false;
  
    function isSelected(color) {
      return group === color;
    }
  </script>
  
  <div class="color-picker {$$props.class || ''}">
    {#each options as color}
      <label
        class="color-option color-{color} {isSelected(color) ? 'selected' : ''}"
        for={`${idPrefix}-${color}`}
        aria-label={`Pick ${color}`}
        title={color}
      >
        <input
          id={`${idPrefix}-${color}`}
          class="sr-only"
          type="radio"
          name={name}
          value={color}
          bind:group
          {disabled}
        />
        {#if isSelected(color)}
          <!-- znacznik wyboru -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16" height="16"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
        {/if}
      </label>
    {/each}
  </div>
  
  <style>
    .sr-only {
      position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
      overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;
    }
  
    .color-picker { display: flex; gap: 8px; }
  
    .color-option {
      position: relative;
      display: flex; align-items: center; justify-content: center;
      width: 32px; height: 32px; border-radius: 50%;
      cursor: pointer; transition: all var(--transition-base);
      outline-offset: 2px;
    }
    .color-option:hover { transform: scale(1.1); }
    .color-option.selected { outline: 2px solid var(--border); }
    .color-option svg { stroke: white; }
  
    /* Kolory – możesz rozszerzać paletę zgodnie z design system */
    .color-blue  { background: #3b82f6; }
    .color-amber { background: #f59e0b; }
    .color-green { background: #10b981; }
    .color-rose  { background: #f43f5e; }
  </style>
  
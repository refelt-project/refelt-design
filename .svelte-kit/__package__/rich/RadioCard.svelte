<script>
    /**
     * RadioCard – karta wyboru oparta o systemowe Radio
     *
     * PROPS:
     * - group: any (bindable)  ← WARTOŚĆ FORMULARZOWA
     * - value: any              ← WARTOŚĆ TEJ KARTY
     * - name: string            ← nazwa grupy
     * - title: string
     * - description: string
     * - id: string
     * - disabled: boolean
     *
     * MODYFIKATORY (class):
     * - radio-card--sm | --md | --lg
     */
    import { Stack, Text, Radio } from '@/lib/uikit';
  
    export let group = undefined;
    export let value = undefined;
    export let name = '';
    export let title = '';
    export let description = '';
    export let id = '';
    export let disabled = false;
  
    $: selected = group === value;
  </script>
  
  <label class="radio-card {$$props.class || ''} {selected ? 'selected' : ''}">
    <Stack class="stack--gap-sm">
      {#if title}
        <Text class="text--sm text--bold">{title}</Text>
      {/if}
      {#if description}
        <Text class="text--sm text--muted">{description}</Text>
      {/if}
      <slot />
    </Stack>
  
    <!-- systemowy Radio – spójny model formularza -->
    <Radio {id} {name} bind:group {value} {disabled} />
  </label>
  
  <style>
    .radio-card {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 16px;
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: all var(--transition-base);
    }
    .radio-card:hover { background: var(--bg-elevated); }
    .radio-card.selected {
      border-color: var(--accent);
      background: color-mix(in oklch, var(--accent) 5%, transparent);
    }
  
    /* Rozmiary */
    .radio-card.radio-card--sm { padding: 12px; }
    .radio-card.radio-card--lg { padding: 20px; }
  </style>
  
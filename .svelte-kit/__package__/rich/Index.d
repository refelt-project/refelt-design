// TypeScript definitions for Refelt Design Rich Components
import type { SvelteComponent } from 'svelte';

// ============================================
// THEME TOGGLE COMPONENT
// ============================================
export interface ThemeToggleProps {
  class?: string;
}

export class ThemeToggle extends SvelteComponent<ThemeToggleProps, {}, {}> {}

// ============================================
// RADIO CARD COMPONENT
// ============================================
export interface RadioCardProps {
  group?: any;
  value?: any;
  name?: string;
  title?: string;
  description?: string;
  id?: string;
  disabled?: boolean;
  class?: string;
}

export class RadioCard extends SvelteComponent<RadioCardProps, {}, { default: {} }> {}

// ============================================
// COLOR PICKER COMPONENT
// ============================================
export interface ColorPickerProps {
  group?: string;
  name?: string;
  options?: string[];
  idPrefix?: string;
  disabled?: boolean;
  class?: string;
}

export class ColorPicker extends SvelteComponent<ColorPickerProps, {}, {}> {}

// ============================================
// ITEM CARD COMPONENT
// ============================================
export interface ItemCardProps {
  as?: 'div' | 'button' | 'a';
  href?: string;
  disabled?: boolean;
  class?: string;
}

export class ItemCard extends SvelteComponent<
  ItemCardProps,
  {},
  { default: {}; actions?: {} }
> {}

// ============================================
// ITEM LINK COMPONENT
// ============================================
export interface ItemLinkProps {
  href?: string;
  target?: string;
  rel?: string;
  muted?: boolean;
  class?: string;
}

export class ItemLink extends SvelteComponent<
  ItemLinkProps,
  {},
  { default: {}; leading?: {}; trailing?: {} }
> {}
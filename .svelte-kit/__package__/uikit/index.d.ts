// TypeScript definitions for Refelt Design UIKit
import type { SvelteComponent } from 'svelte';

// ============================================
// BUTTON COMPONENT
// ============================================
export interface ButtonProps {
  variant?: 'default' | 'secondary' | 'accent' | 'destructive' | 'outline' | 'ghost' | 'link';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  class?: string;
}

export class Button extends SvelteComponent<ButtonProps, { click: MouseEvent }, { default: {} }> {}

// ============================================
// CARD COMPONENT
// ============================================
export interface CardProps {
  variant?: 'default' | 'elevated';
  class?: string;
}

export class Card extends SvelteComponent<
  CardProps,
  {},
  { default: {}; header?: {}; footer?: {} }
> {}

// ============================================
// CARD HEADER COMPONENT
// ============================================
export interface CardHeaderProps {
  title?: string;
  class?: string;
}

export class CardHeader extends SvelteComponent<
  CardHeaderProps,
  {},
  { default: {}; action?: {} }
> {}

// ============================================
// CARD FOOTER COMPONENT
// ============================================
export interface CardFooterProps {
  class?: string;
}

export class CardFooter extends SvelteComponent<CardFooterProps, {}, { default: {} }> {}

// ============================================
// BADGE COMPONENT
// ============================================
export interface BadgeProps {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'pending';
  class?: string;
}

export class Badge extends SvelteComponent<BadgeProps, {}, { default: {} }> {}

// ============================================
// SEPARATOR COMPONENT
// ============================================
export interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  class?: string;
}

export class Separator extends SvelteComponent<SeparatorProps, {}, {}> {}

// ============================================
// STACK COMPONENT
// ============================================
export interface StackProps {
  class?: string;
}

export class Stack extends SvelteComponent<StackProps, {}, { default: {} }> {}

// ============================================
// GRID COMPONENT
// ============================================
export interface GridProps {
  columns?: number | 'auto-fit' | 'auto-fill';
  rows?: number | 'auto';
  preset?: 'sm' | 'md' | 'lg';
  class?: string;
}

export class Grid extends SvelteComponent<GridProps, {}, { default: {} }> {}

// ============================================
// CONTAINER COMPONENT
// ============================================
export interface ContainerProps {
  class?: string;
}

export class Container extends SvelteComponent<ContainerProps, {}, { default: {} }> {}

// ============================================
// TEXT COMPONENT
// ============================================
export interface TextProps {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  class?: string;
}

export class Text extends SvelteComponent<TextProps, {}, { default: {} }> {}

// ============================================
// FORM COMPONENTS
// ============================================

// INPUT
export interface InputProps {
  value?: string | number;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  id?: string;
  label?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  class?: string;
}

export class Input extends SvelteComponent<
  InputProps,
  { input: InputEvent; focus: FocusEvent; blur: FocusEvent },
  {}
> {}

// TEXTAREA
export interface TextareaProps {
  value?: string;
  placeholder?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  rows?: number;
  class?: string;
}

export class Textarea extends SvelteComponent<
  TextareaProps,
  { input: InputEvent; focus: FocusEvent; blur: FocusEvent },
  {}
> {}

// CHECKBOX
export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: string;
  class?: string;
}

export class Checkbox extends SvelteComponent<CheckboxProps, { change: Event }, {}> {}

// RADIO
export interface RadioProps {
  group?: any;
  value?: any;
  disabled?: boolean;
  id?: string;
  label?: string;
  name?: string;
  class?: string;
}

export class Radio extends SvelteComponent<RadioProps, { change: Event }, {}> {}

// SWITCH
export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  label?: string;
  class?: string;
}

export class Switch extends SvelteComponent<SwitchProps, { change: Event }, {}> {}

// LABEL
export interface LabelProps {
  for?: string;
  required?: boolean;
  class?: string;
}

export class Label extends SvelteComponent<LabelProps, {}, { default: {} }> {}
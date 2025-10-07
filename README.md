# Native Svelte UI Kit

**Minimal. Fast. LLM-Friendly.**

## Philosophy

This UI kit is designed with ONE goal: **Make it easy for LLMs to build UIs quickly.**

- ✅ Minimal props
- ✅ Clear variants
- ✅ No over-engineering
- ✅ Native-ready (web → native with same API)
- ✅ Predictable naming

## Components

### NativeText
```svelte
<NativeText variant="title">Title</NativeText>
<NativeText variant="subtitle">Subtitle</NativeText>
<NativeText variant="body">Body text</NativeText>
<NativeText variant="small">Small text</NativeText>
```

**Variants:** `title` | `subtitle` | `body` | `small`

---

### NativeButton
```svelte
<NativeButton>Default</NativeButton>
<NativeButton size="small">Small</NativeButton>
```

**Props:**
- `size`: `"default"` | `"small"`

---

### NativeCard
```svelte
<NativeCard border="subtle" padding="default">
  <div slot="header">Header content</div>
  Main content
  <div slot="footer">Footer content</div>
</NativeCard>
```

**Props:**
- `border`: `"none"` | `"subtle"` | `"strong"`
- `padding`: `"default"` | `"small"`

**Slots:**
- `header` (optional)
- default (required)
- `footer` (optional)

---

### NativeInput
```svelte
<NativeInput
  type="email"
  placeholder="you@example.com"
  bind:value={email}
/>
```

**Props:**
- `value`: string
- `placeholder`: string
- `type`: string (default: "text")

---

### NativeContainer
```svelte
<NativeContainer>
  Content inside max-width container
</NativeContainer>
```

No props. Just wraps content in max-width container.

---

### NativeStack
```svelte
<NativeStack direction="vertical" gap="16px">
  <div>Item 1</div>
  <div>Item 2</div>
</NativeStack>
```

**Props:**
- `direction`: `"vertical"` | `"horizontal"`
- `gap`: CSS gap value (default: "16px")

---

## Usage

```javascript
import {
  NativeText,
  NativeButton,
  NativeCard,
  NativeInput,
  NativeContainer,
  NativeStack
} from './lib';
import './lib/styles.css';
```

## Theming

Toggle theme by adding `data-theme="light"` to `<html>` element:

```javascript
document.documentElement.setAttribute('data-theme', 'light');
```

## Why "Native"?

Component names start with "Native" because:
1. **Future-proof**: Same API can work with React Native / Svelte Native
2. **Clear intent**: These are foundational, native-feeling components
3. **Namespace**: Avoid conflicts with other UI libraries

## Design Principles

1. **No hover states** - Mobile-first, works everywhere
2. **Minimal variants** - Only what's absolutely needed
3. **CSS variables** - Easy theming
4. **Slots over props** - More flexible, less props
5. **No complex state** - Keep it simple

## Grid System

Built on 8px grid (`--grid: 8px`):
- Small padding: 16px (2 * grid)
- Default padding: 24px (3 * grid)
- Large gaps: 48px (6 * grid)

## LLM Instructions

When building UIs with this kit:
1. Always wrap in `<NativeContainer>`
2. Use `<NativeStack>` for layout
3. Use `<NativeCard>` for content blocks
4. Keep it simple - don't over-nest
5. Use `gap` prop instead of margin/padding

**Example:**
```svelte
<NativeContainer>
  <NativeStack direction="vertical" gap="48px">
    <NativeCard border="subtle">
      <NativeText variant="title">Hello</NativeText>
    </NativeCard>
  </NativeStack>
</NativeContainer>
```

---

**Built for speed. Designed for AI. Made for humans.**
# refelt-design

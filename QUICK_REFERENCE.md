# Refelt UI Kit - Quick Reference

## 🎯 Pattern: `component--modifier`

**Props** = semantic (variant, type)  
**Modifiers** = visual (size, style) via `class`

---

## Components

### Text
```svelte
<Text as="h1" class="text--xl text--bold">Title</Text>
<Text class="text--sm text--muted">Subtitle</Text>
```
**Modifiers:** `text--xs|sm|base|lg|xl|xxl`, `text--muted|subtle|bold`

---

### Button
```svelte
<Button variant="accent" class="btn--lg">Save</Button>
<Button variant="outline|ghost|destructive|link">Action</Button>
```
**Modifiers:** `btn--sm|md|lg`, `btn--rounded`

---

### Badge
```svelte
<Badge variant="success|warning|error|info|pending" class="badge--sm">
  Status
</Badge>
```

---

### Input
```svelte
<Input label="Email" type="email" bind:value={email} class="input--lg" />
```
**Modifiers:** `input--sm|md|lg`

---

### Checkbox
```svelte
<Checkbox bind:checked={value} label="Accept terms" class="checkbox--lg" />
```
**Modifiers:** `checkbox--sm|md|lg`

---

### Textarea
```svelte
<Textarea label="Comments" bind:value={text} rows={6} 
  class="textarea--lg textarea--resize-none" />
```
**Modifiers:** `textarea--sm|md|lg`, `textarea--resize-none|vertical|horizontal`

---

### Label
```svelte
<Label for="email" required class="label--lg label--bold">Email</Label>
```
**Modifiers:** `label--sm|md|lg`, `label--muted|bold`

---

### Card
```svelte
<Card variant="elevated|default" class="card--p-lg card--glass">
  Content
</Card>
```
**Modifiers:** `card--p-sm|lg`, `card--transparent|glass`, `card--border-dashed`

---

### Stack
```svelte
<Stack class="stack--gap-lg stack--horizontal stack--align-center">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
```
**Modifiers:** `stack--horizontal|vertical`, `stack--gap-sm|md|lg|xl|xxl`, `stack--align-start|center|end`

---

### Grid
```svelte
<Grid columns={3} preset="sm|md|lg" class="grid--gap-lg">
  <div>Item</div>
</Grid>
```
**Modifiers:** `grid--gap-sm|md|lg|xl|xxl`

---

### Separator
```svelte
<Separator />
<Separator orientation="vertical" class="separator--dashed separator--spacing-lg" />
```
**Modifiers:** `separator--dashed|dotted`, `separator--spacing-sm|md|lg|none`

---

### Container
```svelte
<Container>
  <!-- Max-width 1440px, auto-centered -->
</Container>
```

---

## Import
```svelte
import {
  Text, Button, Badge, Input, Checkbox, Textarea, Label,
  Card, Stack, Grid, Separator, Container
} from './lib';
```

---

## CSS Variables
```css
--space-sm|md|lg|xl|xxl
--radius-sm|md|lg|full
--text, --text-muted, --text-subtle
--bg, --bg-elevated, --bg-card
--border, --border-strong
--primary, --accent, --destructive, --secondary
```

---

## Size System
- **sm** = 8px spacing, 12-13px font
- **md** = 16px spacing, 14px font (default)
- **lg** = 24px spacing, 16-18px font
- **xl** = 48px spacing, 20px font
- **xxl** = 64px spacing, 24px font
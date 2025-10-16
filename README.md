# Refelt UI Kit - LLM Reference

## Pattern: `component--modifier`
Semantic props (behavior) + modifier classes (styling). NO inline styles.

## Components

### Text
```svelte
<Text as="p|span|h1-h6" class="text--xs|sm|base|lg|xl|xxl text--muted|subtle|bold|error">
```

### Button
```svelte
<Button variant="default|secondary|accent|destructive|outline|ghost|link" 
        type="button|submit|reset" disabled 
        class="btn--sm|md|lg btn--rounded" on:click>
```

### Badge
```svelte
<Badge variant="success|warning|error|info|pending" class="badge--sm|md">
```

### Card
```svelte
<Card variant="default|elevated" class="card--border-dashed|border-only card--p-sm|lg card--transparent|glass">
  <div slot="header">...</div>
  content
  <div slot="footer">...</div>
</Card>
```

### CardHeader / CardFooter
```svelte
<CardHeader title="...">
  <Text>...</Text>
  <div slot="action"><Button/></div>
</CardHeader>
<CardFooter>buttons</CardFooter>
```

### Stack
```svelte
<Stack class="stack--vertical|horizontal stack--gap-sm|md|lg|xl|xxl stack--align-start|center|end">
```

### Grid
```svelte
<Grid columns="auto-fit|auto-fill|number" rows="auto|number" preset="sm|md|lg"
      class="grid--gap-sm|md|lg|xl|xxl grid--lg-1|2|3 grid--md-1|2|3 grid--sm-1|2">
```
Presets: sm=240px, md=280px, lg=320px

### Separator
```svelte
<Separator orientation="horizontal|vertical" decorative 
           class="separator--dashed|dotted|space separator--spacing-sm|md|lg|xl|xxl|none">
```

### Container
```svelte
<Container>content</Container>
```

### Input
```svelte
<Input type="text|email|password|number" label="..." placeholder="..." 
       bind:value disabled min max step id
       class="input--sm|md|lg" on:input on:focus on:blur>
```
Number type has +/- buttons & arrow key support.

### Textarea
```svelte
<Textarea label="..." placeholder="..." rows={4} bind:value disabled id
          class="textarea--sm|md|lg textarea--resize-none|vertical|horizontal|both"
          on:input on:focus on:blur>
```

### Checkbox
```svelte
<Checkbox label="..." bind:checked disabled id class="checkbox--sm|md|lg" on:change>
```

### Radio
```svelte
<Radio bind:group value name label disabled id class="radio--sm|md|lg" on:change>
```

### Switch
```svelte
<Switch label="..." bind:checked disabled id class="switch--sm|md|lg" on:change>
```

### Label
```svelte
<Label for="..." required class="label--sm|md|lg label--muted|bold">
```

## Tokens
```css
/* Spacing (8px grid) */
--space-sm: 8px, --space-md: 16px, --space-lg: 24px, --space-xl: 48px, --space-xxl: 64px

/* Type */
--font-size-xs: 12px, sm: 14px, base: 16px, lg: 18px, xl: 20px, xxl: 36px

/* Radius */
--radius-sm: 4px, md: 8px, lg: 10px, full: 999px

/* Breakpoints */
--breakpoint-sm: 640px, md: 768px, lg: 1024px

/* Colors (OKLCH dark) */
--bg, --bg-elevated, --bg-card, --border, --text, --text-muted
--accent, --destructive, --primary, --secondary
--status-success/warning/error/info (+ -bg variants)
```

## Theme Toggle
```js
document.documentElement.setAttribute('data-theme', 'light|dark');
```

## Import
```js
import { Text, Button, Badge, Card, CardHeader, CardFooter, 
         Container, Stack, Grid, Separator,
         Input, Textarea, Checkbox, Radio, Switch, Label } from '$lib/uikit';
```

## Patterns
```svelte
<!-- Form -->
<Stack class="stack--gap-md">
  <Label for="x" required>Name</Label>
  <Input id="x" bind:value={name}/>
  <Checkbox label="Accept" bind:checked/>
  <Button variant="accent">Submit</Button>
</Stack>

<!-- Layout -->
<Container>
  <Stack class="stack--gap-lg">
    <Card>
      <CardHeader title="Title"/>
      <Grid preset="md" class="grid--gap-md">
        <Card class="card--p-sm">...</Card>
      </Grid>
      <CardFooter><Button/></CardFooter>
    </Card>
  </Stack>
</Container>
```

## Rules
✅ Use semantic props: `variant`, `disabled`, `bind:value`  
✅ Use modifier classes: `btn--lg`, `text--muted`  
✅ Combine: `<Button variant="accent" class="btn--lg">`  
❌ NO inline styles: `style="..."`  
❌ NO custom values: use tokens only
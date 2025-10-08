# 🔒 Refelt UI - Secured Design System

## ✅ Security Features

### 1. **Type Safety**
Wszystkie komponenty używają JSDoc type annotations dla IntelliSense:

```svelte
<Button variant="solid" size="md" />
<!-- ✅ Valid -->

<Button variant="whatever" />
<!-- ❌ Invalid - console error + fallback to default -->
```

### 2. **Validation Guards**
Każdy komponent ma runtime validation:

```javascript
const ALLOWED_VARIANTS = ["solid", "outline", "ghost"];

if (!ALLOWED_VARIANTS.includes(variant)) {
  console.error(`Invalid variant: "${variant}"`);
  variant = "solid"; // safe fallback
}
```

### 3. **No Inline Styles**
Komponenty **NIE** akceptują `style` prop:

```svelte
<!-- ❌ NIE ZADZIAŁA -->
<Button style="background: red;">Bad</Button>

<!-- ✅ ZADZIAŁA -->
<Button variant="solid">Good</Button>
```

### 4. **CSS Variables Only**
Wszystkie wartości spacing/colors z CSS vars:

```css
:root {
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  /* ... */
}
```

Zmiana `--grid: 8px` → `--grid: 12px` = cały system się dostosuje.

---

## 📦 Components API

### `<Stack>`
```svelte
<Stack 
  direction="vertical"  {/* "vertical" | "horizontal" */}
  gap="md"              {/* "sm" | "md" | "lg" | "xl" | "xxl" */}
>
  <Card>...</Card>
</Stack>
```

### `<Grid>`
```svelte
<Grid 
  columns="auto-fit"    {/* "auto-fit" | "auto-fill" | number */}
  rows="auto"           {/* "auto" | number */}
  minColumnWidth="340px"
  gap="lg"              {/* "sm" | "md" | "lg" | "xl" | "xxl" */}
>
  <Card>...</Card>
</Grid>
```

### `<Button>`
```svelte
<Button 
  variant="solid"       {/* "solid" | "outline" | "ghost" */}
  size="md"             {/* "sm" | "md" | "lg" */}
  disabled={false}
  on:click={handleClick}
>
  Click me
</Button>
```

### `<Card>`
```svelte
<Card 
  variant="default"     {/* "default" | "transparent" | "glass" */}
  border="subtle"       {/* "none" | "subtle" | "strong" */}
  padding="md"          {/* "sm" | "md" | "lg" */}
>
  <div slot="header">Header</div>
  Content
  <div slot="footer">Footer</div>
</Card>
```

### `<Badge>`
```svelte
<Badge 
  variant="info"        {/* "success" | "warning" | "error" | "info" | "pending" */}
  size="md"             {/* "sm" | "md" */}
>
  Status
</Badge>
```

### `<Text>`
```svelte
<Text 
  as="p"                {/* "h1" | "h2" | "h3" | "p" */}
  size="md"             {/* "xs" | "sm" | "md" | "lg" | "xl" | "xxl" */}
>
  Content
</Text>
```

### `<Input>`
```svelte
<Input 
  type="text"           {/* "text" | "email" | "password" */}
  label="Email"
  id="email-input"
  placeholder="you@example.com"
  disabled={false}
  bind:value={email}
  on:input={handleInput}
  on:focus={handleFocus}
  on:blur={handleBlur}
/>
```

### `<Container>`
```svelte
<Container>
  <Stack>...</Stack>
</Container>
```

---

## 🎨 Theming

### Zmienianie spacing scale:
```css
:root {
  --grid: 12px;  /* zmień z 8px na 12px */
}
/* Wszystkie komponenty się dostosują automatycznie */
```

### Zmienianie kolorów:
```css
:root {
  --accent: #6366f1;  /* zmień kolor akcji */
  --accent-fg: #ffffff;
}
```

### Dark/Light mode:
```javascript
// ThemeToggle.svelte już implementuje
document.documentElement.setAttribute('data-theme', 'light');
```

---

## 🚫 Co NIE zadziała (by design)

```svelte
<!-- ❌ Inline styles - ZABLOKOWANE -->
<Button style="padding: 100px;">Won't work</Button>

<!-- ❌ Niepoprawne wartości - FALLBACK -->
<Stack gap="huge">Falls back to "md"</Stack>

<!-- ❌ Custom spacing - ZABLOKOWANE -->
<Grid gap="999px">Falls back to "lg"</Grid>

<!-- ❌ Złe variant - FALLBACK -->
<Badge variant="custom">Falls back to "info"</Badge>
```

---

## ✅ Co ZADZIAŁA

```svelte
<!-- ✅ Poprawne API -->
<Stack gap="xl">
  <Button variant="solid" size="lg">Click</Button>
</Stack>

<!-- ✅ CSS classes (jeśli potrzebujesz custom) -->
<Button class="custom-class">Styled via CSS</Button>

<!-- ✅ Event forwarding -->
<Input 
  bind:value={email}
  on:input={(e) => console.log(e.target.value)}
/>
```

---

## 🔧 Customization

Jeśli potrzebujesz custom styling:

1. **Używaj CSS classes:**
```svelte
<Button class="my-custom-button">Click</Button>

<style>
  :global(.my-custom-button) {
    /* custom styles */
  }
</style>
```

2. **Lub modyfikuj CSS variables:**
```css
:root {
  --accent: #your-color;
  --space-md: 20px;
}
```

---

## 📝 Migration z starego Refelt

### Przed:
```svelte
<Stack gap="16px">  <!-- inline value -->
```

### Po:
```svelte
<Stack gap="md">  <!-- token -->
```

### Mapping:
- `8px` → `gap="sm"`
- `16px` → `gap="md"`
- `24px` → `gap="lg"`
- `48px` → `gap="xl"`
- `64px` → `gap="xxl"`

---

## 🎯 Philosophy

> **"Make it impossible to break, easy to use, and trivial to extend."**

- ✅ Runtime validation guards
- ✅ Type-safe props (JSDoc)
- ✅ CSS variables only
- ✅ No inline styles accepted
- ✅ Fallbacks for invalid values
- ✅ Console warnings in dev

---

**Made with ❤️ for Refelt**
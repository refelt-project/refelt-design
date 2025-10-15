cat > src/lib/index.js << 'EOF'
// Export all uikit components
export { default as Button } from './uikit/Button.svelte';
export { default as Card } from './uikit/Card.svelte';
export { default as Input } from './uikit/form/Input.svelte';
export { default as Stack } from './uikit/layout/Stack.svelte';
export { default as Grid } from './uikit/layout/Grid.svelte';
export { default as Container } from './uikit/layout/Container.svelte';
export { default as Text } from './uikit/typography/Text.svelte';
export { default as Badge } from './uikit/Badge.svelte';

// Export all rich components
export { default as ThemeToggle } from './rich/ThemeToggle.svelte';
EOF
// scripts/gen-dts.mjs
import { mkdir, writeFile, copyFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function ensureDir(p) {
  await mkdir(p, { recursive: true });
}

async function write(p, content) {
  await ensureDir(dirname(p));
  await writeFile(p, content, 'utf8');
}

async function main() {
  try {
    await ensureDir('dist/uikit');
    await copyFile('src/lib/uikit/styles.css', 'dist/uikit/styles.css');
  } catch {}

  const uikitDts = [
    "export { default as Text } from './Text.svelte';",
    "export { default as Button } from './Button.svelte';",
    "export { default as Badge } from './Badge.svelte';",
    "export { default as Card } from './Card.svelte';",
    "export { default as CardHeader } from './CardHeader.svelte';",
    "export { default as CardFooter } from './CardFooter.svelte';",
    "export { default as Container } from './Container.svelte';",
    "export { default as Stack } from './Stack.svelte';",
    "export { default as Grid } from './Grid.svelte';",
    "export { default as Separator } from './Separator.svelte';",
    "export { default as Input } from './form/Input.svelte';",
    "export { default as Checkbox } from './form/Checkbox.svelte';",
    "export { default as Textarea } from './form/Textarea.svelte';",
    "export { default as Label } from './form/Label.svelte';",
    "export { default as Radio } from './form/Radio.svelte';",
    "export { default as Switch } from './form/Switch.svelte';",
    ""
  ].join('\n');

  const richDts = [
    "export { default as ThemeToggle } from './ThemeToggle.svelte';",
    "export { default as RadioCard } from './RadioCard.svelte';",
    "export { default as ColorPicker } from './ColorPicker.svelte';",
    "export { default as ItemCard } from './ItemCard.svelte';",
    "export { default as ItemLink } from './ItemLink.svelte';",
    ""
  ].join('\n');

  const rootDts = [
    "export * from './uikit/index.js';",
    "export * from './rich/index.js';",
    ""
  ].join('\n');

  await write('dist/uikit/index.d.ts', uikitDts);
  await write('dist/rich/index.d.ts', richDts);
  await write('dist/index.d.ts', rootDts);

  console.log('✔ d.ts generated');
}

main().catch((e) => {
  console.error('gen-dts failed:', e);
  process.exit(1);
});

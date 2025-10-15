// scripts/assert-dts.mjs
import { access } from 'node:fs/promises';
import { constants } from 'node:fs';

async function mustExist(p) {
  try {
    await access(p, constants.F_OK);
    console.log('✓', p);
  } catch {
    console.error('✗ missing', p);
    process.exit(1);
  }
}

await mustExist('dist/index.d.ts');
await mustExist('dist/uikit/index.d.ts');
await mustExist('dist/rich/index.d.ts');

console.log('✔ All d.ts present');

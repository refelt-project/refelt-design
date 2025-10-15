// scripts/release.mjs
import { execSync } from 'node:child_process';

function sh(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

async function main() {
  const type = process.argv[2] ?? 'patch';
  if (!['patch', 'minor', 'major'].includes(type)) {
    console.error(`❌ Nieprawidłowy typ: ${type}. Użyj: patch | minor | major`);
    process.exit(1);
  }

  try {
    console.log('🏗️  Budowanie paczki...');
    sh('yarn build');

    console.log('🪶 Generowanie plików .d.ts...');
    sh('node scripts/gen-dts.mjs');

    console.log('🎨 Kopiowanie stylów...');
    sh('cp -f src/lib/uikit/styles.css dist/uikit/styles.css || true');

    console.log('📝 Dodawanie zmian do commita...');
    sh('git add .');

    console.log('💬 Tworzenie commita...');
    sh('git commit -m "chore(build): aktualizacja builda przed release" || echo "Brak zmian do commita"');

    console.log('📦 Podbijanie wersji...');
    sh(`npm version ${type} -m "chore(release): v%s"`);

    console.log('🚀 Push na GitHub (commit + tag)...');
    sh('git push && git push --tags');

    console.log('📤 Publikacja na npm...');
    sh('npm publish --access public');

    console.log('\n✅ Release zakończony sukcesem!');
  } catch (err) {
    console.error('❌ Błąd podczas release:', err);
    process.exit(1);
  }
}

main();

// scripts/release.mjs
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

function sh(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}
function out(cmd) {
  return execSync(cmd).toString().trim();
}

function bump(version, type) {
  const [maj, min, pat] = version.split('.').map(Number);
  if (type === 'major') return `${maj + 1}.0.0`;
  if (type === 'minor') return `${maj}.${min + 1}.0`;
  return `${maj}.${min}.${(pat ?? 0) + 1}`; // patch
}

function tagExists(tag) {
  try {
    execSync(`git rev-parse -q --verify refs/tags/${tag}`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function setPkgVersion(newVersion) {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  pkg.version = newVersion;
  writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
  return newVersion;
}

async function main() {
  const baseType = (process.argv[2] ?? 'patch').toLowerCase();
  if (!['patch', 'minor', 'major'].includes(baseType)) {
    console.error('❌ Użyj: patch | minor | major');
    process.exit(1);
  }

  try {
    // Upewnij się, że mamy najświeższe tagi (żeby wykrywać kolizje)
    try { sh('git fetch --tags'); } catch {}

    // 1) Budowanie artefaktów
    console.log('🏗️  Buduję…');
    sh('yarn build');

    console.log('🪶 Generuję .d.ts…');
    sh('node scripts/gen-dts.mjs');

    console.log('🎨 Kopiuję CSS…');
    sh('cp -f src/lib/uikit/styles.css dist/uikit/styles.css || true');

    // 2) Ustal wolną wersję (unikaj kolizji tagów)
    const current = JSON.parse(readFileSync('package.json', 'utf8')).version;
    let candidate = bump(current, baseType);
    let tag = `v${candidate}`;

    // Jeśli tag istnieje (np. już kiedyś wypchnięty), to podbijamy PATCH aż do wolnego
    while (tagExists(tag)) {
      candidate = bump(candidate, 'patch');
      tag = `v${candidate}`;
    }

    // 3) Zapisz wersję w package.json (bez automatycznego tagowania)
    console.log(`📦 Ustawiam wersję: ${candidate}`);
    setPkgVersion(candidate);

    // 4) Commit wszystkich zmian (zgodnie z prośbą: add . → commit)
    console.log('📝 Commituję zmiany…');
    try {
      sh('git add .');
      // --allow-empty na wypadek braku różnic poza wersją
      sh(`git commit -m "chore(release): ${tag}" --allow-empty`);
    } catch {}

    // 5) Tag
    console.log(`🏷️  Tworzę tag ${tag}…`);
    sh(`git tag -a ${tag} -m "chore(release): ${tag}"`);

    // 6) Push + publish
    console.log('🚀 Push (commit + tag)…');
    sh('git push');
    sh('git push --tags');

    console.log('📤 Publikuję na npm…');
    sh('npm publish --access public');

    console.log(`\n✅ Release OK: ${tag}`);
  } catch (err) {
    console.error('❌ Błąd podczas release:');
    console.error(err?.message ?? err);
    console.error('\n🔧 Jeśli trzeba, możesz usunąć kolizyjny tag:');
    console.error('   git tag -d vX.Y.Z && git push origin :refs/tags/vX.Y.Z');
    process.exit(1);
  }
}

main();

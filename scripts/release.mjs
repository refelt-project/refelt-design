// scripts/release.mjs
import { execSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';

function sh(cmd, opts = {}) {
  execSync(cmd, { stdio: 'inherit', ...opts });
}
function trySh(cmd) {
  try { sh(cmd); } catch { /* ignore */ }
}
async function getPkg() {
  const txt = await readFile('package.json', 'utf8');
  return JSON.parse(txt);
}
function isGitRepo() {
  try { execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' }); return true; }
  catch { return false; }
}

(async () => {
  const bump = process.env.BUMP || 'patch'; // np. BUMP=minor yarn release

  // 1) bump wersji
  sh(`npm version ${bump} --no-git-tag-version`);
  const { version, name } = await getPkg();
  console.log(`🔢 Nowa wersja: v${version}`);

  // 2) build (czyści dist, pakuje, generuje d.ts, weryfikuje, buduje demo)
  sh('yarn build');

  // 3) git commit + tag + push (jeśli repo)
  if (isGitRepo()) {
    trySh('git add -A');
    try { sh(`git commit -m "chore: release v${version}"`); }
    catch { console.log('ℹ️ Brak zmian do zacommitowania'); }

    trySh(`git tag -d v${version}`);
    trySh(`git push origin :refs/tags/v${version}`);
    trySh(`git tag v${version}`);

    trySh('git push origin HEAD');
    trySh(`git push origin v${version}`);
  } else {
    console.log('ℹ️ Pomijam git: brak repozytorium.');
  }

  // 4) publikacja
  console.log(`🚀 Publikuję v${version} na npm…`);

  try {
    // Jeśli masz NPM_TOKEN (CI lub lokalnie), ustawiamy go i jedziemy.
    if (process.env.NPM_TOKEN) {
      console.log('🔑 Wykryto NPM_TOKEN – publikacja z tokenem.');
      // npm sam czyta NPM_TOKEN z env; nie trzeba nic więcej
    }
    sh('npm publish --access public');
    console.log('\n✅ Opublikowano!');
    console.log(`🔗 npm: https://www.npmjs.com/package/${name}`);
  } catch (e) {
    const msg = String(e?.stderr || e?.stdout || e?.message || e);
    // typowe sygnały o braku logowania/uprawnień
    if (msg.match(/E401|code E401|need auth|You must be logged in|Not authorized/i)) {
      console.error('❌ Publikacja odrzucona (brak autoryzacji).');
      console.error('   Rozwiązania:');
      console.error('   • Uruchom: npm login');
      console.error('   • albo ustaw zmienną środowiskową NPM_TOKEN z uprawnieniem publish');
      process.exit(1);
    }
    throw e;
  }
})();

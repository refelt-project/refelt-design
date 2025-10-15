#!/usr/bin/env bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel 2>/dev/null || dirname "$0")"

PKG_NAME=$(node -p "require('./package.json').name")
CURR_VER=$(node -p "require('./package.json').version")
echo "📦 Pakiet: $PKG_NAME (current v$CURR_VER)"

# 🧾 upewnij się że publikacja idzie na npmjs.org (nie yarnpkg)
npm config set registry "https://registry.npmjs.org/"

# 🧹 commit zmian (jeśli są)
git add -A
git commit -m "chore: pre-release housekeeping" || echo "⏭️ Brak zmian do wstępnego commita"

# 🧱 build + typy
echo "🧱 Buduję paczkę…"
rm -rf dist
yarn build
node scripts/gen-dts.mjs || true
cp -f src/lib/uikit/styles.css dist/uikit/styles.css 2>/dev/null || true

# 🔢 podbicie wersji (z commitem i tagiem)
npm version patch -m "chore: release v%s"
NEW_VER=$(node -p "require('./package.json').version")
echo "✅ Nowa wersja: v$NEW_VER"

# 🚀 publikacja BEZ 2FA (bo jesteś zalogowany)
echo "🚀 Publikuję na npm (bez 2FA)…"
npm publish --access public --registry=https://registry.npmjs.org/

# ⬆️ push commit + tag
git push --follow-tags

echo "🎉 Opublikowano $PKG_NAME@$NEW_VER"

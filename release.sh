#!/bin/bash
set -e

cd "$(dirname "$0")"

BUMP_TYPE=${1:-patch}

# 🔢 Podbij wersję w package.json bez tagowania przez npm
npm version "$BUMP_TYPE" --no-git-tag-version

VERSION=$(node -p "require('./package.json').version")

# 🏗️ Build projektu (bezpośrednio przez npx)
npx vite build

# 💾 Commit + tag jeśli to repo gitowe
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git add .
  git commit -m "chore: release v$VERSION" || echo "⚠️ Brak zmian do zacommitowania"
  
  # Usuń tag lokalnie i zdalnie jeśli istnieje
  git tag -d "v$VERSION" 2>/dev/null || true
  git push origin ":refs/tags/v$VERSION" 2>/dev/null || true
  
  # Utwórz nowy tag
  git tag "v$VERSION"
  
  # Wypchaj commit i tagi
  git push origin HEAD || echo "⚠️ Push nie powiódł się"
  git push origin "v$VERSION" || echo "⚠️ Push taga nie powiódł się"
  
  echo "✅ Wypchnięto commit i tag v$VERSION"
else
  echo "ℹ️ Pomijam git: brak repozytorium."
fi

# 🚀 publikacja na npm
echo "📦 Publikuję wersję v$VERSION na npm..."
npm publish --access public

echo ""
echo "✅ Wersja v$VERSION opublikowana!"
echo "📦 https://www.npmjs.com/package/$(node -p "require('./package.json').name")"
#!/bin/bash
set -e

cd "$(dirname "$0")"  # zawsze działaj w katalogu projektu

BUMP_TYPE=${1:-patch}

# 🔢 Podbij wersję w package.json bez tagowania przez npm
npm version "$BUMP_TYPE" --no-git-tag-version

VERSION=$(node -p "require('./package.json').version")

# 🏗️ Build projektu
npm run build

# 💾 Commit + tag jeśli to repo gitowe
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git add .
  git commit -am "autocommit v$VERSION" || true
  git tag "v$VERSION" || true
  git push origin HEAD --tags
  echo "✅ Wypchnięto commit i tag v$VERSION"
else
  echo "ℹ️ Pomijam git: brak repozytorium."
fi

# 🚀 publikacja na npm
npm publish --access public

echo "✅ Wersja v$VERSION gotowa!"

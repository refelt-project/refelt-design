#!/bin/bash
set -e

cd "$(dirname "$0")"

BUMP_TYPE=${1:-patch}

# �� Podbij wersję
npm version "$BUMP_TYPE" --no-git-tag-version

VERSION=$(node -p "require('./package.json').version")

# 🏗️ Build TYLKO biblioteki (bez vite build!)
npx svelte-package

# 💾 Commit + tag
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git add .
  git commit -m "chore: release v$VERSION" || echo "⚠️ Brak zmian"
  
  git tag -d "v$VERSION" 2>/dev/null || true
  git push origin ":refs/tags/v$VERSION" 2>/dev/null || true
  
  git tag "v$VERSION"
  
  git push origin HEAD || echo "⚠️ Push failed"
  git push origin "v$VERSION" || echo "⚠️ Tag push failed"
  
  echo "✅ Pushed v$VERSION"
else
  echo "ℹ️ No git repo"
fi

# 🚀 Publish
echo "📦 Publishing v$VERSION..."
npm publish --access public

echo ""
echo "✅ v$VERSION published!"
echo "📦 https://www.npmjs.com/package/$(node -p "require('./package.json').name")"

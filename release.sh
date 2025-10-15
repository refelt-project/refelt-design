#!/usr/bin/env bash
set -euo pipefail

# -----------------------------
# USTAWIENIE KATALOGU PROJEKTU
# -----------------------------
if git rev-parse --show-toplevel >/dev/null 2>&1; then
  cd "$(git rev-parse --show-toplevel)"
else
  # Fallback: jeżeli skrypt leży w scripts/, wejdź poziom wyżej do katalogu z package.json
  cd "$(dirname "$0")/.."
fi

# Szybka weryfikacja
if [[ ! -f package.json ]]; then
  echo "❌ Nie znaleziono package.json w $(pwd)"
  exit 1
fi

PKG_NAME=$(node -p "require('./package.json').name")
echo "📦 Pakiet: $PKG_NAME"
echo "📁 CWD   : $(pwd)"

# -----------------------------
# PARAMETR PODBICIA WERSJI
# -----------------------------
BUMP_TYPE=${1:-patch}   # patch | minor | major | prepatch | preminor | premajor | prerelease

# -----------------------------
# SPRAWDŹ LOGOWANIE DO NPM
# -----------------------------
if ! npm whoami >/dev/null 2>&1; then
  echo "❌ Nie jesteś zalogowany do npm. Użyj: npm login"
  exit 1
fi

# -----------------------------
# PODBICIE WERSJI (bez tagowania przez npm)
# -----------------------------
npm version "$BUMP_TYPE" --no-git-tag-version
VERSION=$(node -p "require('./package.json').version")
echo "🔢 Nowa wersja: v$VERSION"

# -----------------------------
# CZYSTY BUILD
# -----------------------------
echo "🧹 Czyszczę dist/"
rm -rf dist

# 1) svelte-package + postpackage (kopiuje uikit/styles.css i generuje types)
echo "📦 Generuję paczkę (types, d.ts, style)…"
npm run package

# 2) vite build (bundle pod demo/preview jeśli masz)
echo "🏗️ Vite build…"
npx vite build

# -----------------------------
# GIT COMMIT + TAG (jeśli to repo git)
# -----------------------------
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "📝 Commituję zmiany…"
  git add .
  git commit -m "chore: release v$VERSION" || echo "⚠️ Brak zmian do zacommitowania"

  echo "🏷️ Ustawiam tag v$VERSION…"
  # Usuń istniejący tag (lokalnie i zdalnie), jeśli jest
  git tag -d "v$VERSION" 2>/dev/null || true
  git push origin ":refs/tags/v$VERSION" 2>/dev/null || true

  git tag "v$VERSION"

  echo "📤 Push commitów i taga…"
  git push origin HEAD || echo "⚠️ Push nie powiódł się"
  git push origin "v$VERSION" || echo "⚠️ Push taga nie powiódł się"

  echo "✅ Wypchnięto commit i tag v$VERSION"
else
  echo "ℹ️ Pomijam git: brak repozytorium."
fi

# -----------------------------
# PUBLIKACJA
# -----------------------------
echo "🚀 Publikuję v$VERSION na npm…"
npm publish --access public

echo ""
echo "✅ Opublikowano v$VERSION!"
echo "🔗 npm: https://www.npmjs.com/package/$PKG_NAME"

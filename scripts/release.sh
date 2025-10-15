#!/usr/bin/env bash
set -euo pipefail

# -----------------------------
# 1️⃣ Ustaw katalog projektu
# -----------------------------
cd "$(git rev-parse --show-toplevel 2>/dev/null || dirname "$0")"

PKG_NAME=$(node -p "require('./package.json').name")
echo "📦 Publikuję pakiet: $PKG_NAME"

# -----------------------------
# 2️⃣ Podbij wersję (bez sprawdzania czystości repo)
# -----------------------------
npm version patch --no-git-tag-version
VERSION=$(node -p "require('./package.json').version")
echo "🔢 Nowa wersja: v$VERSION"

# -----------------------------
# 3️⃣ Buduj paczkę
# -----------------------------
echo "🧱 Buduję paczkę…"
rm -rf dist
yarn build

# -----------------------------
# 4️⃣ Publikacja
# -----------------------------
echo "🚀 Publikuję na npm…"
npm publish --access public

echo "✅ Opublikowano refelt-design@$VERSION"

#!/usr/bin/env bash
# Re-compress a hero background clip for the web (smaller + faster start).
# Requires: brew install ffmpeg
#
# Usage:
#   ./scripts/optimize-hero-video.sh path/to/source.mp4
#
# Output: public/hero-compressed-local.mp4 (point the hero <video> src here if you use it)

set -euo pipefail
SRC="${1:-}"
if [[ -z "$SRC" || ! -f "$SRC" ]]; then
  echo "Usage: $0 <input.mp4>" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/hero-compressed-local.mp4"
mkdir -p "$ROOT/public"

ffmpeg -y -i "$SRC" \
  -an \
  -c:v libx264 -crf 28 -preset medium \
  -movflags +faststart \
  "$OUT"

ls -lh "$OUT"

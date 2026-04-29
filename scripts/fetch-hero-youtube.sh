#!/usr/bin/env bash
# Download the first 6s of a YouTube video in high quality and build public/hero-youtube-loop.mp4
# Requires: brew install yt-dlp ffmpeg
#
# Usage:
#   ./scripts/fetch-hero-youtube.sh 'https://www.youtube.com/watch?v=VIDEO_ID'

set -euo pipefail
URL="${1:-https://www.youtube.com/watch?v=qKpYH5SYUeo}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp /tmp/yt_hero.XXXXXX.mp4)"
OUT="$ROOT/public/hero-youtube-loop.mp4"

yt-dlp --no-playlist --download-sections "*0-6" \
  -f "bv*[height<=1080][ext=mp4]+ba[ext=m4a]/bv*[height<=1080]+ba/b[height<=1080]" \
  --merge-output-format mp4 -o "$TMP" "$URL"

ffmpeg -y -i "$TMP" -t 6 -an \
  -vf "scale='min(1280,iw)':-2:flags=lanczos" \
  -c:v libx264 -crf 21 -preset medium -pix_fmt yuv420p -movflags +faststart \
  "$OUT"

rm -f "$TMP"
ls -lh "$OUT"

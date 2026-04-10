#!/bin/bash
set -euo pipefail

# ──────────────────────────────────────────────────────────────
# generate-poster.sh — Generate a poster WebP from a video
# Usage: ./scripts/generate-poster.sh input.mov [timestamp]
# Default timestamp: 1 second
# ──────────────────────────────────────────────────────────────

if [ $# -lt 1 ]; then
  echo "Usage: $0 <input.mov> [timestamp_in_seconds]"
  echo "Example: $0 ./raw-videos/showroom.mov 3.5"
  exit 1
fi

INPUT="$1"
TIMESTAMP="${2:-1}"

if [ ! -f "$INPUT" ]; then
  echo "Error: File not found: $INPUT"
  exit 1
fi

if ! command -v ffmpeg &>/dev/null; then
  echo "Error: ffmpeg is not installed."
  exit 1
fi

BASENAME=$(basename "$INPUT")
NAME="${BASENAME%.*}"
NAME=$(echo "$NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
OUTDIR="./encoded-videos/$NAME"
mkdir -p "$OUTDIR"

OUTPUT="$OUTDIR/$NAME-poster.webp"

echo "Generating poster from $INPUT at ${TIMESTAMP}s..."

ffmpeg -y -i "$INPUT" -ss "$TIMESTAMP" -vframes 1 -vf "scale=1920:-2" \
  -c:v libwebp -quality 85 "$OUTPUT"

SIZE=$(stat -f%z "$OUTPUT" 2>/dev/null || stat -c%s "$OUTPUT" 2>/dev/null || wc -c < "$OUTPUT")
echo "Done: $OUTPUT ($((SIZE / 1024))KB)"

#!/bin/bash
set -euo pipefail

# ──────────────────────────────────────────────────────────────
# encode-videos.sh — Encode .mov source videos to web-optimized
# MP4 (H.264), WebM (VP9) at 720p/1080p/4K + poster WebP
# ──────────────────────────────────────────────────────────────

INPUT_DIR="${1:-./raw-videos}"
OUTPUT_DIR="./encoded-videos"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

# Check ffmpeg
if ! command -v ffmpeg &>/dev/null; then
  echo -e "${RED}Error: ffmpeg is not installed.${NC}"
  exit 1
fi

# Find .mov files (case-insensitive)
shopt -s nullglob nocaseglob
MOV_FILES=("$INPUT_DIR"/*.mov)
shopt -u nullglob nocaseglob

if [ ${#MOV_FILES[@]} -eq 0 ]; then
  echo -e "${RED}No .mov files found in ${INPUT_DIR}${NC}"
  exit 1
fi

echo -e "${CYAN}Found ${#MOV_FILES[@]} video(s) in ${INPUT_DIR}${NC}"
echo ""

TOTAL_ORIGINAL=0
TOTAL_ENCODED=0

filesize() {
  local file="$1"
  if [ -f "$file" ]; then
    stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null || wc -c < "$file"
  else
    echo 0
  fi
}

human_size() {
  local bytes=$1
  if [ "$bytes" -ge 1048576 ]; then
    local mb=$((bytes / 1048576))
    local remainder=$(( (bytes % 1048576) * 10 / 1048576 ))
    echo "${mb}.${remainder}MB"
  else
    echo "$((bytes / 1024))KB"
  fi
}

for MOV in "${MOV_FILES[@]}"; do
  BASENAME=$(basename "$MOV")
  NAME="${BASENAME%.*}"
  # Sanitize name: lowercase, replace spaces with hyphens
  NAME=$(echo "$NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
  OUTDIR="$OUTPUT_DIR/$NAME"
  mkdir -p "$OUTDIR"

  ORIGINAL_SIZE=$(filesize "$MOV")
  TOTAL_ORIGINAL=$((TOTAL_ORIGINAL + ORIGINAL_SIZE))

  # Get source resolution (trim trailing comma/whitespace from ffprobe csv output)
  SRC_WIDTH=$(ffprobe -v quiet -select_streams v:0 -show_entries stream=width -of csv=p=0 "$MOV" 2>/dev/null | tr -d ',' | tr -d '\r' | tr -d ' ' || echo "0")
  SRC_WIDTH=${SRC_WIDTH:-0}

  echo -e "${CYAN}Processing: ${BASENAME} ($(human_size "$ORIGINAL_SIZE"), ${SRC_WIDTH}px wide)${NC}"

  ENCODE_TOTAL=0

  # ── MP4 variants ──────────────────────────────────────────
  echo -e "  ${YELLOW}MP4 (H.264)${NC}"

  # 720p
  echo -n "    720p... "
  if ffmpeg -y -i "$MOV" -vf "scale=1280:-2" -c:v libx264 -crf 23 -preset slow \
    -pix_fmt yuv420p -movflags +faststart -an "$OUTDIR/$NAME-720.mp4" 2>/dev/null; then
    S=$(filesize "$OUTDIR/$NAME-720.mp4"); ENCODE_TOTAL=$((ENCODE_TOTAL + S))
    echo -e "${GREEN}$(human_size "$S")${NC}"
  else
    echo -e "${RED}FAILED${NC}"
  fi

  # 1080p
  if [ "$SRC_WIDTH" -ge 1920 ]; then
    echo -n "    1080p... "
    if ffmpeg -y -i "$MOV" -vf "scale=1920:-2" -c:v libx264 -crf 23 -preset slow \
      -pix_fmt yuv420p -movflags +faststart -an "$OUTDIR/$NAME-1080.mp4" 2>/dev/null; then
      S=$(filesize "$OUTDIR/$NAME-1080.mp4"); ENCODE_TOTAL=$((ENCODE_TOTAL + S))
      echo -e "${GREEN}$(human_size "$S")${NC}"
    else
      echo -e "${RED}FAILED${NC}"
    fi
  else
    echo -e "    ${YELLOW}1080p skipped (source ${SRC_WIDTH}px < 1920px)${NC}"
  fi

  # 4K
  if [ "$SRC_WIDTH" -ge 3840 ]; then
    echo -n "    4K... "
    if ffmpeg -y -i "$MOV" -vf "scale=3840:-2" -c:v libx264 -crf 23 -preset slow \
      -pix_fmt yuv420p -movflags +faststart -an "$OUTDIR/$NAME-4k.mp4" 2>/dev/null; then
      S=$(filesize "$OUTDIR/$NAME-4k.mp4"); ENCODE_TOTAL=$((ENCODE_TOTAL + S))
      echo -e "${GREEN}$(human_size "$S")${NC}"
    else
      echo -e "${RED}FAILED${NC}"
    fi
  else
    echo -e "    ${YELLOW}4K skipped (source ${SRC_WIDTH}px < 3840px)${NC}"
  fi

  # ── WebM variants ─────────────────────────────────────────
  echo -e "  ${YELLOW}WebM (VP9)${NC}"

  # 720p
  echo -n "    720p... "
  if ffmpeg -y -i "$MOV" -vf "scale=1280:-2" -c:v libvpx-vp9 -crf 32 -b:v 0 \
    -deadline good -an "$OUTDIR/$NAME-720.webm" 2>/dev/null; then
    S=$(filesize "$OUTDIR/$NAME-720.webm"); ENCODE_TOTAL=$((ENCODE_TOTAL + S))
    echo -e "${GREEN}$(human_size "$S")${NC}"
  else
    echo -e "${RED}FAILED${NC}"
  fi

  # 1080p
  if [ "$SRC_WIDTH" -ge 1920 ]; then
    echo -n "    1080p... "
    if ffmpeg -y -i "$MOV" -vf "scale=1920:-2" -c:v libvpx-vp9 -crf 30 -b:v 0 \
      -deadline good -an "$OUTDIR/$NAME-1080.webm" 2>/dev/null; then
      S=$(filesize "$OUTDIR/$NAME-1080.webm"); ENCODE_TOTAL=$((ENCODE_TOTAL + S))
      echo -e "${GREEN}$(human_size "$S")${NC}"
    else
      echo -e "${RED}FAILED${NC}"
    fi
  else
    echo -e "    ${YELLOW}1080p skipped (source ${SRC_WIDTH}px < 1920px)${NC}"
  fi

  # 4K
  if [ "$SRC_WIDTH" -ge 3840 ]; then
    echo -n "    4K... "
    if ffmpeg -y -i "$MOV" -vf "scale=3840:-2" -c:v libvpx-vp9 -crf 30 -b:v 0 \
      -deadline good -an "$OUTDIR/$NAME-4k.webm" 2>/dev/null; then
      S=$(filesize "$OUTDIR/$NAME-4k.webm"); ENCODE_TOTAL=$((ENCODE_TOTAL + S))
      echo -e "${GREEN}$(human_size "$S")${NC}"
    else
      echo -e "${RED}FAILED${NC}"
    fi
  else
    echo -e "    ${YELLOW}4K skipped (source ${SRC_WIDTH}px < 3840px)${NC}"
  fi

  # ── Poster ────────────────────────────────────────────────
  echo -n "  Poster... "
  if ffmpeg -y -i "$MOV" -ss 1 -vframes 1 -vf "scale=1920:-2" \
    -c:v libwebp -quality 85 "$OUTDIR/$NAME-poster.webp" 2>/dev/null; then
    S=$(filesize "$OUTDIR/$NAME-poster.webp"); ENCODE_TOTAL=$((ENCODE_TOTAL + S))
    echo -e "${GREEN}$(human_size "$S")${NC}"
  else
    echo -e "${RED}FAILED${NC}"
  fi

  TOTAL_ENCODED=$((TOTAL_ENCODED + ENCODE_TOTAL))
  SAVINGS=$(( (ORIGINAL_SIZE - ENCODE_TOTAL) * 100 / ORIGINAL_SIZE ))

  echo ""
  echo -e "  ${GREEN}✓ ${NAME}${NC}"
  echo -e "    Totale encoded: $(human_size "$ENCODE_TOTAL") (originale: $(human_size "$ORIGINAL_SIZE") → -${SAVINGS}%)"
  echo ""
done

echo -e "${GREEN}═══════════════════════════════════════════${NC}"
echo -e "${GREEN}Encoding completo!${NC}"
echo -e "  Video processati: ${#MOV_FILES[@]}"
echo -e "  Originali: $(human_size "$TOTAL_ORIGINAL")"
echo -e "  Encoded: $(human_size "$TOTAL_ENCODED")"
if [ "$TOTAL_ORIGINAL" -gt 0 ]; then
  TOTAL_SAVINGS=$(( (TOTAL_ORIGINAL - TOTAL_ENCODED) * 100 / TOTAL_ORIGINAL ))
  echo -e "  Risparmio: -${TOTAL_SAVINGS}%"
fi
echo -e "  Output: ${OUTPUT_DIR}/"
echo -e "${GREEN}═══════════════════════════════════════════${NC}"

/**
 * TTF/OTF → WOFF2 conversion via wawoff2 (WASM).
 * Usage: node scripts/convert-fonts.mjs
 *
 * Mapping:
 *   public/fonts/outfit/OutfitVariableFont_wght1.ttf → public/fonts/outfit/Outfit-Variable.woff2
 *   public/fonts/otf/Double-Porter-3.ttf            → public/fonts/display/DoublePorte3.woff2
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import wawoff2 from "wawoff2";

const ROOT = path.resolve(import.meta.dirname, "..");

const jobs = [
  {
    src: "public/fonts/outfit/OutfitVariableFont_wght1.ttf",
    dst: "public/fonts/outfit/Outfit-Variable.woff2",
  },
  {
    src: "public/fonts/otf/Double-Porter-3.ttf",
    dst: "public/fonts/display/DoublePorte3.woff2",
  },
];

async function convert({ src, dst }) {
  const inPath = path.join(ROOT, src);
  const outPath = path.join(ROOT, dst);
  if (!existsSync(inPath)) {
    console.warn(`SKIP ${src} — not found`);
    return;
  }
  await mkdir(path.dirname(outPath), { recursive: true });
  const ttf = await readFile(inPath);
  const woff2 = await wawoff2.compress(ttf);
  await writeFile(outPath, woff2);
  const ratio = ((1 - woff2.length / ttf.length) * 100).toFixed(1);
  console.log(`OK ${src} (${(ttf.length / 1024).toFixed(0)}KB) → ${dst} (${(woff2.length / 1024).toFixed(0)}KB) [-${ratio}%]`);
}

for (const j of jobs) {
  await convert(j);
}
console.log("Done.");

/**
 * Batch image optimizer for public/.
 *  - Resize to max 2048px (longest edge), no upscaling
 *  - PNG → palette + max compression (kept as PNG when transparency is present)
 *  - JPEG → mozjpeg progressive at QUALITY (default 78)
 *  - Skips files smaller than MIN_BYTES (already lean)
 *  - Skips AVIF/WebP/SVG/GIF/ICO (already optimal or not raster)
 *
 * next/image transcodes to AVIF/WebP at request time, so we don't pre-emit
 * sibling formats — that would duplicate disk usage.
 *
 * Usage: node scripts/optimize-images.mjs [--dry] [--max=2048] [--quality=78]
 */
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);

const DRY = !!args.dry;
const MAX_DIM = parseInt(args.max ?? "2048", 10);
const QUALITY = parseInt(args.quality ?? "78", 10);
const MIN_BYTES = 80 * 1024;
const SKIP_DIRS = new Set([".legacy", "_originals", ".originals"]);
const SKIP_EXT = new Set([".svg", ".ico", ".gif", ".webp", ".avif"]);
const RASTER_EXT = new Set([".jpg", ".jpeg", ".png"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      yield* walk(path.join(dir, entry.name));
    } else if (entry.isFile()) {
      yield path.join(dir, entry.name);
    }
  }
}

let totalIn = 0;
let totalOut = 0;
let processed = 0;
let skipped = 0;

for await (const file of walk(PUBLIC)) {
  const ext = path.extname(file).toLowerCase();
  if (SKIP_EXT.has(ext)) continue;
  if (!RASTER_EXT.has(ext)) continue;

  const st = await stat(file);
  if (st.size < MIN_BYTES) {
    skipped++;
    continue;
  }

  const rel = path.relative(ROOT, file);
  const buf = await readFile(file);
  const img = sharp(buf, { failOn: "none" });
  const meta = await img.metadata();
  if (!meta.width || !meta.height) {
    console.warn(`SKIP ${rel} — unreadable metadata`);
    skipped++;
    continue;
  }

  const needsResize = Math.max(meta.width, meta.height) > MAX_DIM;
  const pipeline = sharp(buf, { failOn: "none" }).rotate();
  if (needsResize) pipeline.resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true });

  let outBuf;
  if (ext === ".png") {
    outBuf = await pipeline.clone().png({ compressionLevel: 9, palette: true, effort: 9 }).toBuffer();
  } else {
    outBuf = await pipeline.clone().jpeg({ quality: QUALITY, mozjpeg: true, progressive: true }).toBuffer();
  }

  totalIn += buf.length;
  const willReplaceOriginal = outBuf.length < buf.length;
  totalOut += willReplaceOriginal ? outBuf.length : buf.length;
  processed++;

  console.log(
    `${rel}  ${(buf.length / 1024).toFixed(0)}KB → ` +
      `${(outBuf.length / 1024).toFixed(0)}KB` +
      (willReplaceOriginal ? ` (-${((1 - outBuf.length / buf.length) * 100).toFixed(0)}%)` : " (kept — bigger after re-encode)"),
  );

  if (DRY) continue;
  if (willReplaceOriginal) await writeFile(file, outBuf);
}

console.log("\n=== Summary ===");
console.log(`processed:  ${processed}`);
console.log(`skipped:    ${skipped}`);
console.log(`size in:    ${(totalIn / 1024 / 1024).toFixed(1)} MB`);
console.log(`size out:   ${(totalOut / 1024 / 1024).toFixed(1)} MB`);
console.log(`saved:      ${((totalIn - totalOut) / 1024 / 1024).toFixed(1)} MB`);

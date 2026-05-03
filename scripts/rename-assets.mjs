/**
 * Premium asset rename: kebab-case ASCII names for everything in public/.
 *  - drop spaces, parens, underscores, "upscayl" suffixes, "Screenshot" prefixes
 *  - pure URL-safe filenames
 *  - propagates renames into source files (src/**, docs/**, root *.md, *.ts, *.tsx, *.json)
 *
 * Usage: node scripts/rename-assets.mjs [--dry]
 */
import { readdir, stat, readFile, writeFile, rename } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const DRY = process.argv.includes("--dry");

const SKIP_DIRS = new Set([".legacy", "node_modules", ".next", ".git"]);

function slug(name) {
  // Strip extension first
  const ext = path.extname(name);
  let base = name.slice(0, name.length - ext.length);

  base = base
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "") // strip diacritics
    .replace(/_upscayl_4x_upscayl-standard-4x/gi, "")
    .replace(/wmremove-transformed/gi, "wm")
    .replace(/Gemini_Generated_Image_/g, "gen-")
    .replace(/Screenshot[ _-]\d{4}-\d{2}-\d{2}[ _-]\d+/gi, "screenshot")
    .replace(/WhatsApp Image \d{4}-\d{2}-\d{2} at \d+\.\d+\.\d+/gi, "wa")
    .replace(/[\s()]+/g, "-")     // spaces & parens → dash
    .replace(/[^a-zA-Z0-9\-.]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();

  return base + ext.toLowerCase();
}

async function* walk(dir, base = "") {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const fp = path.join(dir, entry.name);
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) yield* walk(fp, rel);
    else if (entry.isFile()) yield { fp, rel, name: entry.name };
  }
}

const renames = []; // { from, to, fromAbs, toAbs }
const used = new Set();

for await (const entry of walk(PUBLIC)) {
  const newName = slug(entry.name);
  if (newName === entry.name) continue;

  const dirAbs = path.dirname(entry.fp);
  const dirRel = path.dirname(entry.rel);

  // Disambiguate collisions
  let candidate = newName;
  let n = 1;
  while (used.has(path.join(dirAbs, candidate))) {
    const ext = path.extname(newName);
    const base = newName.slice(0, newName.length - ext.length);
    candidate = `${base}-${n}${ext}`;
    n++;
  }
  used.add(path.join(dirAbs, candidate));

  const fromRel = `/${dirRel === "." ? "" : `${dirRel}/`}${entry.name}`.replace(/^\/\//, "/");
  const toRel = `/${dirRel === "." ? "" : `${dirRel}/`}${candidate}`.replace(/^\/\//, "/");

  renames.push({
    from: fromRel,
    to: toRel,
    fromAbs: entry.fp,
    toAbs: path.join(dirAbs, candidate),
  });
}

console.log(`Planned ${renames.length} renames.`);
if (renames.length === 0) process.exit(0);

if (DRY) {
  for (const r of renames.slice(0, 50)) console.log(`  ${r.from}  →  ${r.to}`);
  if (renames.length > 50) console.log(`  ... and ${renames.length - 50} more`);
  process.exit(0);
}

// 1) Apply file renames
for (const r of renames) {
  await rename(r.fromAbs, r.toAbs);
  console.log(`mv ${r.from} → ${r.to}`);
}

// 2) Update references across source code
const SEARCH_DIRS = ["src", "docs"].map((d) => path.join(ROOT, d));
const SEARCH_EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".css", ".md", ".mdx", ".json", ".html"]);
const ROOT_FILES = ["next.config.ts", "package.json"];

const replacements = renames.map((r) => {
  // Encode the spaces/parens form as it appears in URLs (or raw)
  const rawFrom = r.from;
  const encFrom = rawFrom
    .replace(/ /g, "%20")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29");
  return { rawFrom, encFrom, to: r.to };
});

async function updateFile(fp) {
  const buf = await readFile(fp, "utf8");
  let out = buf;
  let hits = 0;
  for (const { rawFrom, encFrom, to } of replacements) {
    if (out.includes(rawFrom)) {
      out = out.split(rawFrom).join(to);
      hits++;
    }
    if (encFrom !== rawFrom && out.includes(encFrom)) {
      out = out.split(encFrom).join(to);
      hits++;
    }
  }
  if (hits > 0) {
    await writeFile(fp, out);
    console.log(`  patched ${path.relative(ROOT, fp)} (${hits} ref${hits === 1 ? "" : "s"})`);
  }
}

async function* walkSrc(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const fp = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkSrc(fp);
    else if (entry.isFile() && SEARCH_EXT.has(path.extname(entry.name).toLowerCase())) yield fp;
  }
}

for (const dir of SEARCH_DIRS) {
  try {
    for await (const fp of walkSrc(dir)) await updateFile(fp);
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
}
for (const f of ROOT_FILES) {
  try {
    await updateFile(path.join(ROOT, f));
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
  }
}

console.log("Done.");

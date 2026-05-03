# Public asset conventions

All static assets shipped with the site live under `public/`. Filenames follow
strict rules so URLs stay clean, CDN-safe, and consistent.

## Naming rules

- ASCII only — no accents, no emoji, no smart quotes.
- `kebab-case` only — lowercase letters, digits, dashes.
- No spaces, no parentheses, no underscores.
- Extensions are lowercase: `.jpg`, `.png`, `.webp`, `.woff2`, `.svg`, `.mp4`.
- Prefer `.jpg` for photographs, `.png` for graphics with transparency, `.webp`
  for already-compressed source files (e.g. screenshots from designers).
- Do **not** check in `*_upscayl_4x*` or other AI-upscaled variants — they
  bloat repo size and rarely beat a properly resized source.

## Directory layout

| Path                | Purpose                                              |
| ------------------- | ---------------------------------------------------- |
| `brandpartner/`     | Partner brand logos (Oknoplast, Korus, …)            |
| `certificazioni/`   | Certifications and quality marks                     |
| `fonts/display/`    | Display fonts (Double Porte 3) — WOFF2 only          |
| `fonts/outfit/`     | UI font (Outfit variable) — WOFF2 only               |
| `images/`           | General hero / page images                           |
| `logo/`             | Mood Abitare logos                                   |
| `moodabitarereal/`  | Real-life showroom & site photos                     |
| `porte-interne/`    | Internal-doors product gallery                       |
| `prodotti/`         | All product catalog imagery (cross-category)         |
| `reference/`        | Reference / mood-board images                        |
| `showroom/`         | Showroom photography                                 |
| `tapparelle/`       | Roller-shutter product gallery                       |

## Optimization

Heavy raster files are kept under ~2048px on the longest edge and re-encoded
with mozjpeg / palette-PNG. Run the optimizer when adding new files:

```bash
node scripts/optimize-images.mjs           # 2048px max, quality 78
node scripts/optimize-images.mjs --max=1600 --quality=72  # tighter
```

`next/image` transcodes to AVIF + WebP automatically at request time, so we
**don't** check in sibling `.avif` / `.webp` files.

## Renames

When renaming or moving an asset, run the rename helper to propagate refs
across `src/` and `docs/`:

```bash
node scripts/rename-assets.mjs --dry      # preview
node scripts/rename-assets.mjs            # apply
```

## Caching

Files under `fonts/`, `images/`, `logo/`, `videos/`, and `moodabitarereal/`
are served with `Cache-Control: public, max-age=31536000, immutable`
(see `next.config.ts`). Treat them as content-addressable: don't mutate a
filename's contents in place — pick a new name when content changes.

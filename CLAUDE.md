# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server with Turbopack (http://localhost:3000)
npm run build        # Production build (Next.js static + SSR)
npm run lint         # ESLint (flat config, no args needed)
npm start            # Serve production build
```

No test framework is configured. Sanity Studio runs at `/studio` (embedded route).

## Architecture

**Next.js 16 App Router** site for a premium home improvement showroom (Italian language only). React 19 with React Compiler enabled. Tailwind CSS v4 with `source(none)` directive — all classes are sourced from `src/`.

### Routing

- `src/app/` — pages: home, chi-siamo, contatti, finanziamento, premium-partner, progettazione-design, servizi-ristrutturazione, privacy-policy
- `src/app/prodotti/[slug]/page.tsx` — dynamic product pages (~35) generated via `generateStaticParams()` from `ALL_PRODUCTS` in constants
- `src/app/studio/` — embedded Sanity Studio
- `src/app/api/contact/` — contact form (Resend email)
- `src/app/api/revalidate/` — Sanity webhook ISR endpoint
- Legacy routes `blog/`, `progetti/` still exist but are removed from navigation

### Key data files

- `src/lib/constants.ts` — `MACRO_CATEGORIES`, `ALL_PRODUCTS`, `SITE_CONFIG`, `CONTACT_INFO`, `R2_CDN` (Cloudflare R2 video CDN)
- `src/lib/product-content.ts` — detailed product descriptions keyed by slug
- `src/lib/*-categories.ts` — per-product catalog category data (infissi-pvc, tapparelle, portoncini, porte-blindate, porte-interne)
- `src/lib/premium-catalog-data.ts` — brand partner catalog data
- `src/lib/product-details.ts`, `src/lib/window-details.ts`, `src/lib/details/` — technical specs

### Component organization

- `src/components/layout/` — Header (with MegaMenu, MobileNav), Footer, FreeConsultationBanner
- `src/components/products/` — catalog components per product type (InfissiPvcCatalog, PorteBlindateCatalog, etc.), ProductCatalog (generic), PremiumCatalog, galleries
- `src/components/animations/` — GSAP/Framer Motion wrappers (FadeInView, ParallaxImage, ClipReveal, WordReveal, etc.)
- `src/components/home/`, `src/components/sections/` — homepage and shared section components
- `src/components/shared/` — LazyOverlays (cookie consent, WhatsApp widget, site loader)

### Product page rendering

`prodotti/[slug]/page.tsx` selects the appropriate catalog component per slug using conditional logic — specific products (infissi-pvc, tapparelle, portoncini, porte-blindate, porte-interne) get dedicated catalog components; all others use `ProductCatalog` or `PremiumCatalog`. Hero images/videos are mapped via `heroImages` and `heroVideos` records at the top of the file.

### Sanity CMS

- Config: `sanity.config.ts`, schemas in `src/sanity/schemas/`
- 10 schema types: blogPost, brandPartner, heroSlide, product, productCategory, project, service, siteSettings, testimonial
- Queries: `src/lib/sanity/queries.ts`, client: `src/lib/sanity/client.ts`
- Requires `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`

## Conventions

### Typography (critical)

Three font families — never mix them:
- **Display** (`font-display` / CSS classes `.font-hero`, `.font-page-title`, `.font-section-title`, `.font-card-title`): Double Porte 3 with Gravitica fallback — headings only
- **Body** (`font-body` / `.text-body`): Cormorant Garamond — paragraph text
- **UI** (`font-ui` / `.text-ui`, `.text-label`, `.text-button`): Outfit — buttons, nav, labels

For accented capital A (À), use the `À` character directly or the `.accent-a` CSS class.

### Colors (Tailwind v4 theme tokens)

- `black-deep` (#2b2b2b), `black-soft` (#363636) — text/backgrounds
- `bordeaux` (#7A2638), `bordeaux-dark` (#611E2D) — accents/CTAs
- `cream` (#f5f5f0) — primary background
- `warm-gray` (#e8e8e3), `mid-gray` (#6b6b6b) — secondary

### Styling

Tailwind v4 with `@theme inline` block in `globals.css` for custom colors/fonts. Custom CSS utility classes (`.link-draw`, `.img-reveal`, `.btn-press`, `.border-glow`, `.stagger-children`, `.hero-grain`) are defined in globals.css — use these before creating new animations.

### Component patterns

- Server Components by default; `"use client"` only for interactive components
- GSAP for scroll-driven animations, Framer Motion for UI transitions
- Lenis for smooth scrolling (configured in LazyOverlays)
- `clsx` + `tailwind-merge` for conditional class merging (utility in `src/lib/utils.ts`)

### Brand rules

- Public-facing name is always **"Mood Abitare"**, never "Moschiano Srl" (legal/domain contexts only)
- All content in Italian
- Video assets served from Cloudflare R2 CDN (`R2_CDN` constant)

### SEO

- 301 redirects for old slugs configured in `next.config.ts`
- Schema.org JSON-LD (WebSite, Organization, LocalBusiness) in root layout
- Per-page metadata via `generateMetadata()` in dynamic routes
- `robots.ts`, `sitemap.ts`, `manifest.ts` at app root

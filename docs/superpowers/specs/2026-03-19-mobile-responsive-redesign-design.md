# Mobile Responsive Redesign — Design Spec

**Date:** 2026-03-19
**Scope:** Systematic mobile-first redesign of all components without touching desktop (lg+) breakpoints
**Approach:** B — Mobile-First Redesign
**Files affected:** ~27 files modified, 0 new files

---

## Principles

- **Never touch desktop breakpoints** — lg: and above stay untouched
- **Mobile = default**, sm/md = tablet bridge, lg+ = desktop
- **Disable CPU-heavy animations on mobile** — parallax, GSAP pinning
- **Minimum 44px touch targets** everywhere
- **Safe area insets** for notched devices
- **No text below 12px** on mobile

---

## Section 1: Global Foundations

### 1.1 — Minimum Text Size
Replace all instances of text below 12px on mobile:
- `text-[0.6rem]` (9.6px) → `text-[0.75rem]` (12px) minimum
- Affected: MobileNav brand labels, ProductBentoGrid brand pills, FormulaCard labels, RistrutturazioneBanner CTA, HomeServices badges, TitanoEvoBanner feature text, finanziamento stat labels

### 1.2 — Safe Area Insets
Add `env(safe-area-inset-bottom)` to all fixed-bottom elements:
- WhatsAppWidget
- CookieBanner
- ProductSheet sticky CTA
- MobileNav bottom CTA

### 1.3 — Touch Target Minimum (44x44px)
- CookieBanner checkboxes: `h-3 w-3` → `h-5 w-5` with 44px tap wrapper
- HeroSection nav arrows: ensure 44px hit area
- Carousel dots: ensure 44px tap area wrapper
- Button component: add `min-h-[44px]` to all variants

### 1.4 — Animation Performance
- `ParallaxImage.tsx` (animations folder): disable parallax on mobile via `useIsMobile()`. Note: the local ParallaxImage inside EditorialShowcase.tsx already handles this correctly — only the shared component needs fixing.
- `FinanziamentoBanner.tsx`: disable Framer Motion `useScroll`/`useTransform` parallax on mobile (same pattern as ParallaxImage)
- `StackingTimeline`: disable GSAP pinning on mobile, use simple stacked cards
- `.pulse-glow`: add `@media (prefers-reduced-motion: reduce)` to disable
- `TitanoEvoBanner.tsx`: disable `.animate-float` CSS animation on mobile via `prefers-reduced-motion` or conditional class

### 1.5 — globals.css Additions
- Safe-area bottom padding utility
- `@media (prefers-reduced-motion)` rules for continuous animations

---

## Section 2: Header & Mobile Navigation

### 2.1 — FreeConsultationBanner
- Mobile: entire banner becomes a tappable `<Link>` to `/contatti`
- Add arrow hint (→) to indicate interactivity
- Slightly more vertical padding (py-2.5)
- Desktop: unchanged

### 2.2 — MobileNav Panel
- Category labels: min 12px, bordeaux color, bold weight for visual hierarchy
- Brand text: min 12px (from 0.6rem/9.6px → 0.75rem/12px), better spacing
- Product count: pill badge style (`bg-warm-gray/50 px-2 rounded-full`)
- Arrow hints (→) on product links
- More vertical padding between items (14px vs 6px)
- Light separator lines between products

### 2.3 — MobileNav Sticky Bottom CTA
- Add sticky bottom bar: "Richiedi Preventivo" button + WhatsApp icon button
- Respects `env(safe-area-inset-bottom)`
- Pinned to bottom of nav panel

---

## Section 3: Home Page Sections

### 3.1 — HeroSection
- Mobile: nav arrows move from scattered positioning to a **bottom bar** pinned at the bottom of the hero viewport
- Bottom bar layout (left to right): dot indicators (left) | prev/next arrows (right)
- Arrows: `w-11 h-11` (44px) with border, positioned in a horizontal row with `gap-2`
- Dots: horizontal bar-style indicators (active = wider + opaque, inactive = narrow + translucent)
- Counter text "01/04" removed on mobile, replaced by dots
- Content area: add `pb-20` to clear the bottom bar
- Desktop: unchanged (keeps current arrow + counter positioning)

### 3.2 — ProductBentoGrid
- Mobile grid: first category spans full width (hero card), rest in 2-column grid
- Brand pills: min 12px text (from 0.6rem/9.6px → 0.75rem/12px), better padding
- Card heights: reduced from 18rem to proportional for compact scanning

### 3.3 — TitanoEvoBanner
- Mobile: change inner grid from `grid-cols-2` to `grid-cols-1 lg:grid-cols-2`
- The title/label section above the grid is already separate and centered — no change needed there
- Mobile stacked order: product image (full width) → features list below
- Features: convert from inline list with dashes to a 2-col mini-card grid (`grid-cols-2 gap-2`) with `bg-white p-3 rounded-md` cards
- Feature text: min 12px in card format
- Disable `.animate-float` on mobile (continuous CSS animation)
- Desktop: unchanged (keeps grid-cols-2 side-by-side layout)

### 3.4 — EditorialShowcase
- Increase mobile min-height from 220px to 260px
- Add more bottom padding for breathing room

### 3.5 — HomeServices
- Highlight badges: text from 0.7rem to 0.75rem
- Service row padding increased for touch comfort

### 3.6 — ValuePropositions
- Marquee height: from `h-[50vw]` to `h-[40vw]` on mobile
- Stats gap: from `gap-y-8` to `gap-y-6`

### 3.7 — RistrutturazioneBanner
- CTA text: from 0.7rem to 0.75rem
- Stat separator: slightly more visible

### 3.8 — FinanziamentoBanner
- Arrow button: from `w-10 h-10` to `w-11 h-11` (44px)

### 3.9 — TestimonialsCarousel
- Dot indicators: ensure wrapper has min 44px tap area

---

## Section 4: Product Pages & Components

### 4.1 — ProductCatalog
- Grid: from `grid-cols-1` to `grid-cols-2` on mobile (halves scrolling). Note: at 360px with gap-3 (12px), each card is ~168px wide — tight but viable. Card padding reduced from `p-5` to `p-3` on mobile to compensate. Product name and brand text remain readable at 13px/11px.
- Filter tabs: pill-style design with rounded borders, product counts visible inside each pill
- Tighter padding for better density

### 4.2 — ProductSheet
- Close button: from `w-9 h-9` to `w-11 h-11` (44px)
- Title: from `text-2xl` to `text-xl` on mobile to prevent overflow
- Spec labels: from bare text to card-style containers (bg + padding)
- Spec label text: from 0.7rem to 0.75rem/12px minimum (consistent with 12px floor principle)
- Sticky CTA: `env(safe-area-inset-bottom)` padding
- WhatsApp button: slightly larger (52px)

### 4.3 — HorizontalGallery
- Cards: add white background + rounded corners for visual containment
- Arrow hint (→) on "Scheda tecnica" link
- Gap: from 16px to 12px for tighter grid

---

## Section 5: Interior Pages

### 5.1 — StackingTimeline (Chi Siamo)
- Mobile: disable GSAP ScrollTrigger pinning entirely (wrap GSAP setup in `if (!isMobile)` guard)
- Card positioning: change from `absolute inset-0` to `relative` on mobile (cards are stacked absolutely for the GSAP animation — on mobile they become normal flow)
- Replace with vertical timeline layout:
  - Left edge: vertical line (`absolute left-[6px] w-px bg-white/8`) with bordeaux dot markers (`w-2.5 h-2.5 rounded-full bg-bordeaux`) at each card
  - Cards: `relative pl-6 mb-5` — positioned to the right of the timeline line
  - Card internal layout: keep `grid-cols-1` (already collapses from `lg:grid-cols-[1fr_1fr]`), remove the `lg:border-l` separator
  - Year + title inline: `flex items-baseline gap-3` instead of separate columns
- Animation: FadeInView stagger (delay 0.08 per card) instead of GSAP yPercent
- Natural scroll, no pinning, no jank
- Desktop: unchanged (keeps GSAP stacking with absolute positioning)

### 5.2 — DesignServiceRow (Progettazione)
- Note: the current component already shows descriptions on mobile as visible text. The issue is the desktop hover-fill interaction doesn't translate to touch — there's no visual feedback on tap, and the arrow is hidden (`hidden md:block`).
- Mobile changes:
  - Show the arrow on mobile too (remove `hidden md:block`, use a chevron/→ instead)
  - Add `active:bg-black-deep/[0.03]` tap feedback (subtle background flash on press)
  - Ensure description text has enough padding and doesn't feel cramped
  - Increase row padding from `py-5` to `py-6` for better touch spacing
- Desktop: unchanged (keeps hover fill effect)

### 5.3 — Contatti Page
- Phone/email links: add `py-2` for larger tap targets
- ContactForm checkbox: ensure 44px tap area wrapper

### 5.4 — Finanziamento Page
- Stat labels: text-[0.7rem] → text-[0.75rem]
- Tag pills: text-[0.7rem] → text-[0.75rem]
- Decorative "0%": reduce clamp min to prevent horizontal overflow on mobile

### 5.5 — Premium Partner Page
- Stat separator line: slightly more visible on mobile

---

## Section 6: Shared Components & UI Primitives

### 6.1 — CookieBanner
- "Accetta tutti": full-width primary button on mobile
- "Solo necessari" + "Personalizza": side-by-side below
- Cookie preference checkboxes: move into "Personalizza" expanded view
- Add `env(safe-area-inset-bottom)` padding

### 6.2 — PromoPopup
- Close button: move inside modal (from -top-3 -right-3 to top-3 right-3)
- Close button: 44px with blurred dark background
- Modal size: larger on mobile — near full-width, taller image area (~200px), more content padding (p-6)
- CTA button: full-width on mobile

### 6.3 — WhatsAppWidget
- Add safe-area-inset-bottom via inline style: `bottom: calc(6rem + env(safe-area-inset-bottom, 0px))`
- Hide when CookieBanner is visible: check for the `cookie-consent` localStorage key that CookieBanner sets on accept. If the key doesn't exist (banner is showing), shift the widget higher with `bottom: calc(12rem + env(safe-area-inset-bottom, 0px))` to clear the banner. No shared context needed — just read localStorage on mount.

### 6.4 — bento-grid.tsx (CRITICAL)
- Grid: `grid-cols-3` → `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`
- Row height: `auto-rows-[22rem]` → `auto-rows-[16rem] sm:auto-rows-[20rem] md:auto-rows-[22rem]`

### 6.5 — Button.tsx
- Add `min-h-[44px]` to all button size variants for touch target compliance

### 6.6 — ParallaxImage.tsx
- Add `useIsMobile()` check
- Mobile: static image with `object-cover`, no transform
- Desktop: unchanged (keeps parallax)

---

## Files NOT Modified (Already Well-Optimized)

- ServicesGrid.tsx
- AboutSection.tsx
- CTAFinale.tsx
- IntroEmozionale.tsx
- BrandLogos.tsx
- PortfolioGallery.tsx
- FadeInView.tsx
- HoverTilt.tsx
- MagneticButton.tsx
- Container.tsx
- Card.tsx
- SectionHeading.tsx
- SiteLoader.tsx
- Footer.tsx
- MegaMenu.tsx (desktop-only by design)
- PvcGalleryWithSheet.tsx (thin wrapper — implicitly covered by HorizontalGallery + ProductSheet changes)
- layout.tsx

---

## Testing Checklist

- [ ] iPhone SE (375px) — smallest common viewport
- [ ] iPhone 14/15 (390px) — most common iPhone
- [ ] iPhone Pro Max (430px) — large phone
- [ ] iPad Mini (768px) — tablet breakpoint
- [ ] Galaxy A series (360px) — popular Android
- [ ] Test with safe-area-inset (notched devices)
- [ ] Test with prefers-reduced-motion enabled
- [ ] Verify no horizontal overflow on any page
- [ ] Verify all touch targets >= 44px
- [ ] Verify no text below 12px
- [ ] Landscape orientation on phones (667x375, 844x390)
- [ ] Lighthouse mobile audit score

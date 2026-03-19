# Mobile Responsive Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the entire Mood Abitare website perfectly responsive on mobile with dedicated mobile UX, without touching desktop (lg+) breakpoints.

**Architecture:** Modify ~27 existing files — no new files. Changes are CSS class modifications, conditional rendering via `useIsMobile()`, and layout restructuring at mobile breakpoints only. Each task targets a logical group of related files.

**Tech Stack:** Next.js 16 (App Router), Tailwind CSS v4, GSAP, Framer Motion, TypeScript

**Spec:** `docs/superpowers/specs/2026-03-19-mobile-responsive-redesign-design.md`

**Critical constraint:** NEVER modify classes/behavior at `lg:` breakpoint or above. Only change default (mobile), `sm:`, and `md:` styles.

---

## File Map

| File | Action | Task |
|------|--------|------|
| `src/app/globals.css` | Modify | 1 |
| `src/components/ui/Button.tsx` | Modify | 1 |
| `src/components/ui/bento-grid.tsx` | Modify | 1 |
| `src/components/animations/ParallaxImage.tsx` | Modify | 1 |
| `src/components/layout/FreeConsultationBanner.tsx` | Modify | 2 |
| `src/components/layout/MobileNav.tsx` | Modify | 2 |
| `src/components/home/HeroSection.tsx` | Modify | 3 |
| `src/components/home/ProductBentoGrid.tsx` | Modify | 3 |
| `src/components/home/TitanoEvoBanner.tsx` | Modify | 3 |
| `src/components/home/EditorialShowcase.tsx` | Modify | 4 |
| `src/components/home/HomeServices.tsx` | Modify | 4 |
| `src/components/home/ValuePropositions.tsx` | Modify | 4 |
| `src/components/home/RistrutturazioneBanner.tsx` | Modify | 4 |
| `src/components/home/FinanziamentoBanner.tsx` | Modify | 4 |
| `src/components/home/TestimonialsCarousel.tsx` | Modify | 4 |
| `src/components/products/ProductCatalog.tsx` | Modify | 5 |
| `src/components/products/ProductSheet.tsx` | Modify | 5 |
| `src/components/products/HorizontalGallery.tsx` | Modify | 5 |
| `src/components/chi-siamo/StackingTimeline.tsx` | Modify | 6 |
| `src/components/progettazione-design/DesignServiceRow.tsx` | Modify | 6 |
| `src/app/contatti/page.tsx` | Modify | 7 |
| `src/components/contact/ContactForm.tsx` | Modify | 7 |
| `src/app/finanziamento/page.tsx` | Modify | 7 |
| `src/app/premium-partner/page.tsx` | Modify | 7 |
| `src/components/shared/CookieBanner.tsx` | Modify | 8 |
| `src/components/shared/PromoPopup.tsx` | Modify | 8 |
| `src/components/shared/WhatsAppWidget.tsx` | Modify | 8 |
| `src/components/finanziamento/FormulaCard.tsx` | Modify | 7 |

---

## Task 1: Global Foundations

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/ui/Button.tsx`
- Modify: `src/components/ui/bento-grid.tsx`
- Modify: `src/components/animations/ParallaxImage.tsx`

- [ ] **Step 1: Add safe-area and reduced-motion utilities to globals.css**

Open `src/app/globals.css`. Add these utilities after the existing custom classes:

```css
/* Safe area bottom padding for fixed elements on notched devices */
.pb-safe {
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

/* Disable continuous animations for reduced-motion preference */
@media (prefers-reduced-motion: reduce) {
  .pulse-glow,
  .animate-float {
    animation: none !important;
  }
}
```

- [ ] **Step 2: Fix bento-grid.tsx responsive columns**

Open `src/components/ui/bento-grid.tsx`. Find the grid container class with `grid-cols-3` and `auto-rows-[22rem]`. Change to:

```
grid-cols-1 sm:grid-cols-2 md:grid-cols-3
auto-rows-[16rem] sm:auto-rows-[20rem] md:auto-rows-[22rem]
```

Also update any `col-span-3` references to use `col-span-1 sm:col-span-2 md:col-span-3` where the item should span full width.

- [ ] **Step 3: Add min-h-[44px] to Button.tsx**

Open `src/components/ui/Button.tsx`. In the size variants object, add `min-h-[44px]` to each variant:

```
sm: "px-4 py-2 text-sm min-h-[44px]"
md: "px-6 py-3 text-base min-h-[44px]"
lg: "px-8 py-4 text-lg min-h-[44px]"
```

- [ ] **Step 4: Disable ParallaxImage on mobile**

Open `src/components/animations/ParallaxImage.tsx`. Add `useIsMobile` import and hook call. Wrap the `useScroll`/`useTransform` logic in a mobile check:

```tsx
import { useIsMobile } from "@/hooks/useIsMobile";

// Inside component:
const isMobile = useIsMobile();

// For the parallax transform, if mobile, set y to 0 (static):
const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : ["-20%", "20%"]);
```

This keeps the image rendered normally on mobile but removes the parallax motion.

- [ ] **Step 5: Verify build passes**

Run: `npm run build`
Expected: Build succeeds with 0 errors.

- [ ] **Step 6: Commit**

```bash
git add src/app/globals.css src/components/ui/Button.tsx src/components/ui/bento-grid.tsx src/components/animations/ParallaxImage.tsx
git commit -m "feat(mobile): global foundations — safe-area utils, touch targets, bento-grid fix, parallax disable"
```

---

## Task 2: Header & Mobile Navigation

**Files:**
- Modify: `src/components/layout/FreeConsultationBanner.tsx`
- Modify: `src/components/layout/MobileNav.tsx`

- [ ] **Step 1: Make FreeConsultationBanner tappable on mobile**

Open `src/components/layout/FreeConsultationBanner.tsx`. **Important: this is a Server Component — do NOT add hooks or `"use client"`.** Use a CSS-only approach:

Render BOTH a `<Link>` wrapper and a `<div>` wrapper. Hide the Link on desktop and the div on mobile using Tailwind:

```tsx
{/* Mobile: tappable link */}
<Link href="/contatti" className="md:hidden flex items-center justify-center gap-3 px-6 py-2.5 {/* existing color classes */}">
  <span className="text-[0.8rem]">{/* existing text */}</span>
  <span className="text-[0.75rem] opacity-60">→</span>
</Link>

{/* Desktop: existing static banner (unchanged) */}
<div className="hidden md:flex items-center justify-center gap-3 sm:gap-5 px-6 py-2 sm:py-2.5 {/* existing classes */}">
  {/* existing desktop content unchanged */}
</div>
```

This avoids converting a server component to a client component. Desktop behavior stays completely unchanged.

- [ ] **Step 2: Improve MobileNav text sizes and hierarchy**

Open `src/components/layout/MobileNav.tsx`. Make these changes:

1. Category labels: currently have both `text-label` (clamp starting at 12px) AND `text-[0.7rem]` (11.2px override). Remove the `text-[0.7rem]` override so `text-label` takes effect (already ≥12px). Add `text-bordeaux font-semibold`
2. Brand text: change `text-[0.6rem]` → `text-[0.75rem]`
3. Product count: change inline `text-[0.6rem]` to pill badge: `text-[0.75rem] bg-warm-gray/50 px-2 py-0.5 rounded-full`
4. Product links: add `→` arrow on the right side of each link
5. Increase product link padding from `py-2` to `py-3.5`
6. Add light separator: `border-b border-black-deep/5` between product items

- [ ] **Step 3: Add sticky bottom CTA to MobileNav**

At the bottom of the MobileNav panel (after the scrollable content, before the closing div), add a sticky CTA bar:

```tsx
<div className="sticky bottom-0 left-0 right-0 border-t border-black-deep/10 bg-white px-6 pt-4" style={{ paddingBottom: `calc(1rem + env(safe-area-inset-bottom, 0px))` }}>
  <div className="flex gap-3">
    <Link href="/contatti" className="flex-1 bg-black-deep text-white text-center py-3.5 text-button btn-press">
      Richiedi preventivo
    </Link>
    <a href={CONTACT_INFO.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[52px] bg-[#25D366] text-white rounded">
      {/* WhatsApp SVG icon */}
    </a>
  </div>
</div>
```

Import `CONTACT_INFO` from `@/lib/constants` and `Link` from `next/link`.

The scrollable content area above must have enough `pb` to not be hidden behind this bar.

- [ ] **Step 4: Verify build passes**

Run: `npm run build`
Expected: Build succeeds with 0 errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/FreeConsultationBanner.tsx src/components/layout/MobileNav.tsx
git commit -m "feat(mobile): header & navigation — tappable banner, nav hierarchy, sticky CTA"
```

---

## Task 3: Home Page — Critical Fixes

**Files:**
- Modify: `src/components/home/HeroSection.tsx`
- Modify: `src/components/home/ProductBentoGrid.tsx`
- Modify: `src/components/home/TitanoEvoBanner.tsx`

- [ ] **Step 1: Redesign HeroSection mobile navigation**

Open `src/components/home/HeroSection.tsx`. Add `useIsMobile` import and hook.

On mobile, replace the scattered arrow buttons and counter with a bottom bar:

```tsx
{/* Mobile bottom bar */}
<div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 lg:hidden"
     style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}>
  {/* Dot indicators */}
  <div className="flex gap-1.5">
    {slides.map((_, i) => (
      <div key={i} className={`h-[3px] rounded-full transition-all duration-300 ${
        i === current ? "w-6 bg-white" : "w-4 bg-white/25"
      }`} />
    ))}
  </div>
  {/* Arrow buttons */}
  <div className="flex gap-2">
    <button onClick={prev} className="w-11 h-11 flex items-center justify-center border border-white/30 bg-white/5">
      {/* Left arrow SVG */}
    </button>
    <button onClick={next} className="w-11 h-11 flex items-center justify-center border border-white/30 bg-white/5">
      {/* Right arrow SVG */}
    </button>
  </div>
</div>
```

Hide the existing desktop arrows and counter on mobile with `hidden lg:flex` / `hidden lg:block`. Add `pb-20 lg:pb-0` to the content area to clear the bottom bar.

- [ ] **Step 2: Fix ProductBentoGrid mobile layout**

Open `src/components/home/ProductBentoGrid.tsx`. Changes:

**Note:** ProductBentoGrid passes className overrides to the BentoGrid component. The base bento-grid.tsx was fixed in Task 1, but ProductBentoGrid already overrides grid classes via className prop. Update the className prop on `<BentoGrid>`:

1. Grid className prop: change to `grid-cols-2 md:grid-cols-2 lg:grid-cols-3` (overrides bento-grid.tsx defaults)
2. First card (Serramenti): add `col-span-2` to span full width on mobile and tablet
3. Row heights via className: `auto-rows-[14rem] md:auto-rows-[20rem] lg:auto-rows-[22rem]` (overrides bento-grid.tsx defaults)
4. Brand pills: change `text-[0.6rem]` → `text-[0.75rem]`
5. Gap via className: `gap-2.5 md:gap-4`

- [ ] **Step 3: Stack TitanoEvoBanner on mobile**

Open `src/components/home/TitanoEvoBanner.tsx`. Changes:

1. Inner grid: `grid-cols-1 lg:grid-cols-2` (was `grid-cols-2`)
2. On mobile, reverse order so image comes first: use `order-first lg:order-none` on the image column
3. Features section: convert to `grid grid-cols-2 gap-2` with each feature in a card:
   ```tsx
   <div className="bg-white p-3 rounded-md">
     <span className="text-bordeaux">✓</span>
     <span className="text-[0.75rem] text-black-deep block mt-1">{feature}</span>
   </div>
   ```
4. Feature text: the current code uses inline `style={{ fontSize: "clamp(0.65rem, 0.55rem + 0.4vw, 1.1rem)" }}`. Change clamp minimum from `0.65rem` to `0.75rem`: `fontSize: "clamp(0.75rem, 0.55rem + 0.4vw, 1.1rem)"`
5. Image: `w-full lg:w-[320px]` etc. — full width on mobile, fixed on desktop
6. Add conditional class to disable `animate-float` on mobile: use `useIsMobile()` and conditionally apply the animation class: `className={isMobile ? "" : "animate-float"}`

- [ ] **Step 4: Verify build passes**

Run: `npm run build`
Expected: Build succeeds with 0 errors.

- [ ] **Step 5: Visually verify on mobile viewport**

Run: `npm run dev`
Check at 375px viewport in Chrome DevTools:
- HeroSection: bottom bar visible with dots + arrows, content not cut off
- ProductBentoGrid: 2-col grid with first card full-width
- TitanoEvoBanner: stacked layout, readable features

- [ ] **Step 6: Commit**

```bash
git add src/components/home/HeroSection.tsx src/components/home/ProductBentoGrid.tsx src/components/home/TitanoEvoBanner.tsx
git commit -m "feat(mobile): home critical — hero nav bar, bento 2-col grid, titano stacked layout"
```

---

## Task 4: Home Page — Minor Tweaks

**Files:**
- Modify: `src/components/home/EditorialShowcase.tsx`
- Modify: `src/components/home/HomeServices.tsx`
- Modify: `src/components/home/ValuePropositions.tsx`
- Modify: `src/components/home/RistrutturazioneBanner.tsx`
- Modify: `src/components/home/FinanziamentoBanner.tsx`
- Modify: `src/components/home/TestimonialsCarousel.tsx`

- [ ] **Step 1: EditorialShowcase — increase mobile min-height**

Open `src/components/home/EditorialShowcase.tsx`. Find `min-h-[220px]` on image containers and change to `min-h-[260px]`. Add `pb-4` or increase existing bottom padding for breathing room on mobile sections.

- [ ] **Step 2: HomeServices — bump badge text and padding**

Open `src/components/home/HomeServices.tsx`. Changes:
1. Highlight badges: `text-[0.7rem]` → `text-[0.75rem]`
2. Service row padding: increase `py-7` to `py-8` on mobile for touch comfort

- [ ] **Step 3: ValuePropositions — reduce marquee height and stats gap**

Open `src/components/home/ValuePropositions.tsx`. Changes:
1. Marquee images: `h-[50vw]` → `h-[40vw] sm:h-[50vw]` (smaller on mobile, same on sm+)
2. Mobile stats gap: `gap-y-8` → `gap-y-6` on mobile only (keep `gap-y-8` for larger screens if needed)

- [ ] **Step 4: RistrutturazioneBanner — bump CTA text**

Open `src/components/home/RistrutturazioneBanner.tsx`. Changes:
1. CTA text: `text-[0.7rem]` → `text-[0.75rem]`
2. Stat separators (`w-px h-3`): change to `w-px h-4 bg-white/20` for better visibility

- [ ] **Step 5: FinanziamentoBanner — bump arrow to 44px**

Open `src/components/home/FinanziamentoBanner.tsx`. Changes:
1. Arrow button: `w-10 h-10` → `w-11 h-11`
2. Disable Framer Motion parallax on mobile: add `useIsMobile()` check. Neutralize BOTH transforms on mobile:
   - `y`: set to `[0, 0]` instead of `["-15%", "15%"]`
   - `imgScale`: set to `[1, 1]` instead of `[1.05, 1]`
   Pattern: `const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : ["-15%", "15%"])`

- [ ] **Step 6: TestimonialsCarousel — ensure 44px dot tap area**

Open `src/components/home/TestimonialsCarousel.tsx`. Ensure each dot button wrapper has `min-w-[44px] min-h-[44px]` with `flex items-center justify-center`. The visual dot can stay small, but the tappable area must be 44px.

- [ ] **Step 7: Verify build passes**

Run: `npm run build`
Expected: Build succeeds with 0 errors.

- [ ] **Step 8: Commit**

```bash
git add src/components/home/EditorialShowcase.tsx src/components/home/HomeServices.tsx src/components/home/ValuePropositions.tsx src/components/home/RistrutturazioneBanner.tsx src/components/home/FinanziamentoBanner.tsx src/components/home/TestimonialsCarousel.tsx
git commit -m "feat(mobile): home minor tweaks — text sizes, spacing, touch targets, parallax disable"
```

---

## Task 5: Product Components

**Files:**
- Modify: `src/components/products/ProductCatalog.tsx`
- Modify: `src/components/products/ProductSheet.tsx`
- Modify: `src/components/products/HorizontalGallery.tsx`

- [ ] **Step 1: ProductCatalog — 2-col mobile grid and pill filters**

Open `src/components/products/ProductCatalog.tsx`. Changes:

1. Product grid: change `grid-cols-1` to `grid-cols-2` for default (mobile)
2. Gap: `gap-4` → `gap-3` on mobile (keep `sm:gap-px`)
3. Card padding: `p-5` → `p-3 sm:p-6 lg:p-8` (tighter on mobile, preserve existing tablet/desktop progression)
4. Filter tabs: add `rounded-full border border-black-deep/10` to each tab button for pill style. Add product count inside each tab if data is available.

- [ ] **Step 2: ProductSheet — mobile optimizations**

Open `src/components/products/ProductSheet.tsx`. Changes:

1. Close button: `w-9 h-9` → `w-11 h-11`
2. Title: `text-2xl` → `text-xl sm:text-2xl`
3. Spec labels: wrap each spec pair in a card container:
   ```tsx
   <div className="bg-warm-gray/20 px-3 py-2.5 rounded-md">
     <span className="text-[0.75rem] uppercase tracking-wider text-black-deep/30">{label}</span>
     <span className="text-sm text-black-deep block mt-0.5">{value}</span>
   </div>
   ```
4. Spec label text: `text-[0.7rem]` → `text-[0.75rem]`
5. Sticky CTA: add `style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}`
6. WhatsApp button: `w-12` → `w-[52px]`

- [ ] **Step 3: HorizontalGallery — card styling and arrow hints**

Open `src/components/products/HorizontalGallery.tsx`. In the mobile grid (inside `isMobile` branch):

1. Wrap each card in `bg-white rounded-lg overflow-hidden`
2. Add padding to text area: `p-3`
3. "Scheda tecnica" link: add arrow `→` after text
4. Gap: `gap-4` → `gap-3`

- [ ] **Step 4: Verify build passes**

Run: `npm run build`
Expected: Build succeeds with 0 errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/products/ProductCatalog.tsx src/components/products/ProductSheet.tsx src/components/products/HorizontalGallery.tsx
git commit -m "feat(mobile): product components — 2-col catalog, sheet optimizations, gallery cards"
```

---

## Task 6: StackingTimeline & DesignServiceRow

**Files:**
- Modify: `src/components/chi-siamo/StackingTimeline.tsx`
- Modify: `src/components/progettazione-design/DesignServiceRow.tsx`

- [ ] **Step 1: StackingTimeline — mobile vertical timeline**

Open `src/components/chi-siamo/StackingTimeline.tsx`. This is the most complex change.

1. Import `useIsMobile` from `@/hooks/useIsMobile`
2. Add `const isMobile = useIsMobile()` in the component
3. Wrap GSAP `useGSAP` / `ScrollTrigger.create` in `if (!isMobile)` guard — the entire GSAP setup should only run on desktop
4. For the card container, conditionally render:

**Mobile layout (when `isMobile`):**
```tsx
<div className="relative pl-8">
  {/* Vertical timeline line */}
  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/8" />

  {timeline.map((item, i) => (
    <FadeInView key={item.year} delay={i * 0.08}>
      <div className="relative mb-6">
        {/* Dot marker */}
        <div className="absolute -left-8 top-2 w-2.5 h-2.5 rounded-full bg-bordeaux border-2 border-black-deep" />

        {/* Card */}
        <div className="bg-black-soft border border-white/6 px-5 py-6 rounded-lg">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-display font-bold text-white/15 text-xl">{item.year}</span>
            <h3 className="font-display font-medium text-white text-base">{item.title}</h3>
          </div>
          <p className="text-caption text-white/35">{item.description}</p>
        </div>
      </div>
    </FadeInView>
  ))}
</div>
```

**Desktop layout:** Keep existing GSAP-powered layout unchanged. Use `{isMobile ? <MobileTimeline /> : <DesktopTimeline />}` pattern.

5. Ensure the parent section's `min-h-screen` only applies on desktop: `lg:min-h-screen`

- [ ] **Step 2: DesignServiceRow — mobile touch feedback and arrow**

Open `src/components/progettazione-design/DesignServiceRow.tsx`. Changes:

1. Arrow visibility: change `hidden md:block` to always visible (remove `hidden md:`)
2. Add touch feedback: `active:bg-black-deep/[0.03]` to the row container
3. Row padding: `py-5` → `py-6` on mobile (keep `sm:py-6 lg:py-8` as is)
4. Ensure description has `mt-2` and adequate padding on mobile

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: Build succeeds with 0 errors.

- [ ] **Step 4: Visually verify**

Run: `npm run dev`
Check at 375px:
- Chi Siamo page: vertical timeline with dot markers, no jank, natural scroll
- Progettazione page: arrow visible, tap feedback works, descriptions readable

- [ ] **Step 5: Commit**

```bash
git add src/components/chi-siamo/StackingTimeline.tsx src/components/progettazione-design/DesignServiceRow.tsx
git commit -m "feat(mobile): timeline vertical layout, service row touch feedback"
```

---

## Task 7: Interior Pages & FormulaCard

**Files:**
- Modify: `src/app/contatti/page.tsx`
- Modify: `src/components/contact/ContactForm.tsx`
- Modify: `src/app/finanziamento/page.tsx`
- Modify: `src/app/premium-partner/page.tsx`
- Modify: `src/components/finanziamento/FormulaCard.tsx`

- [ ] **Step 1: Contatti page — tap targets**

Open `src/app/contatti/page.tsx`. Add `py-2` to all phone/email `<a>` links to increase tap area. Ensure they have `inline-block` or `block` display so padding applies.

- [ ] **Step 2: ContactForm — checkbox tap area**

Open `src/components/contact/ContactForm.tsx`. Find the privacy checkbox. Ensure the label wrapper (the clickable area) has `min-h-[44px]` and `flex items-center`. The checkbox itself stays `h-5 w-5` but the tappable area wrapping it must be at least 44px tall.

- [ ] **Step 3: Finanziamento page — text sizes and overflow**

Open `src/app/finanziamento/page.tsx`. Changes:

1. Stat labels `text-[0.7rem]` → `text-[0.75rem]` (search for all instances in the stats strip and esempio pratico sections)
2. Tag pills `text-[0.7rem]` → `text-[0.75rem]`
3. Decorative "0%": change `fontSize: "clamp(20rem, 40vw, 55rem)"` → `fontSize: "clamp(12rem, 40vw, 55rem)"` to prevent overflow on small screens
4. Disclaimer text `text-[0.75rem]` → keep as is (already 12px)

- [ ] **Step 4: FormulaCard — label text bump**

Open `src/components/finanziamento/FormulaCard.tsx`. Change all `text-[0.7rem]` → `text-[0.75rem]`.

- [ ] **Step 5: Premium Partner page — stat separator**

Open `src/app/premium-partner/page.tsx`. Find the stat separator `w-8 h-px bg-white/20` and change to `w-10 h-px bg-white/30` for better visibility on mobile.

- [ ] **Step 6: Verify build passes**

Run: `npm run build`
Expected: Build succeeds with 0 errors.

- [ ] **Step 7: Commit**

```bash
git add src/app/contatti/page.tsx src/components/contact/ContactForm.tsx src/app/finanziamento/page.tsx src/components/finanziamento/FormulaCard.tsx src/app/premium-partner/page.tsx
git commit -m "feat(mobile): interior pages — tap targets, text sizes, overflow fixes"
```

---

## Task 8: Shared Components (CookieBanner, PromoPopup, WhatsAppWidget)

**Files:**
- Modify: `src/components/shared/CookieBanner.tsx`
- Modify: `src/components/shared/PromoPopup.tsx`
- Modify: `src/components/shared/WhatsAppWidget.tsx`

- [ ] **Step 1: CookieBanner — mobile button layout and safe area**

Open `src/components/shared/CookieBanner.tsx`. Changes:

1. Button layout on mobile: replace the current `flex-wrap` with `flex-col sm:flex-row`:
   - "Accetta tutti": full-width primary button (`w-full sm:w-auto`)
   - "Solo necessari" + "Personalizza": in a `flex gap-2` row below on mobile, inline on desktop
2. Checkbox size: `h-3 w-3` → `h-5 w-5`
3. Checkbox label: ensure `min-h-[44px] flex items-center` for tap area
4. Safe area: add `style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}` to the banner container

- [ ] **Step 2: PromoPopup — larger modal, inside close button**

Open `src/components/shared/PromoPopup.tsx`. Changes:

1. Close button position: from `-top-3 -right-3` to `top-3 right-3`
2. Close button style: `w-11 h-11 bg-black/40 backdrop-blur-sm text-white` (44px, visible over images)
3. Close button: add `z-20` to ensure it's above the image
4. Modal width on mobile: `max-w-[100vw] sm:max-w-[90vw]` with `mx-2 sm:mx-4`
5. Image area: add `min-h-[200px]` to the image container on mobile for a taller image area (use `min-h-[200px] sm:min-h-0`)
6. Content padding: `p-4` → `p-5 sm:p-4` (more padding on mobile)
7. CTA button: add `w-full sm:w-auto` for full-width on mobile

- [ ] **Step 3: WhatsAppWidget — safe area and cookie banner awareness**

Open `src/components/shared/WhatsAppWidget.tsx`. Changes:

1. Replace `bottom-24` with inline style: `style={{ bottom: "calc(6rem + env(safe-area-inset-bottom, 0px))" }}`
2. Add cookie banner awareness: on mount, check for the cookie `mood_cookie_consent` (the CookieBanner uses `js-cookie` library with `Cookies.get("mood_cookie_consent")`). If the cookie doesn't exist (banner is showing), use higher bottom position: `bottom: "calc(12rem + env(safe-area-inset-bottom, 0px))"` to clear the banner. Import `Cookies` from `js-cookie` (already a project dependency). Add a `useEffect` with a short interval or MutationObserver to detect when the banner disappears and adjust position.

- [ ] **Step 4: Verify build passes**

Run: `npm run build`
Expected: Build succeeds with 0 errors.

- [ ] **Step 5: Visually verify shared components**

Run: `npm run dev` at 375px:
- CookieBanner: "Accetta tutti" full-width, secondary buttons side-by-side below, safe area spacing
- PromoPopup: close button inside, larger modal, full-width CTA
- WhatsAppWidget: proper bottom positioning, moves up when cookie banner shows

- [ ] **Step 6: Commit**

```bash
git add src/components/shared/CookieBanner.tsx src/components/shared/PromoPopup.tsx src/components/shared/WhatsAppWidget.tsx
git commit -m "feat(mobile): shared components — cookie banner layout, popup sizing, whatsapp safe area"
```

---

## Task 9: Final Verification

- [ ] **Step 1: Full build verification**

Run: `npm run build`
Expected: Build succeeds with 0 errors, same page count as before (~56 pages).

- [ ] **Step 2: Text size sweep verification**

Run a grep to confirm no remaining instances of sub-12px text:
```bash
grep -rn "text-\[0\.6rem\]\|text-\[0\.65rem\]\|text-\[0\.7rem\]" src/components/ src/app/ --include="*.tsx"
```
Expected: No matches, or only instances that are at `sm:` / `md:` / `lg:` breakpoints (not default mobile size).

- [ ] **Step 3: Visual QA at 375px**

Run: `npm run dev`, open Chrome DevTools at 375px (iPhone SE):

1. Home page: hero bottom bar, bento 2-col, titano stacked, all text readable
2. Product catalog: 2-col grid, pill filters
3. Chi Siamo: vertical timeline, no GSAP jank
4. Contatti: form usable, links tappable
5. Finanziamento: no horizontal overflow, text readable
6. Progettazione: rows with arrows, tap feedback
7. Cookie banner: stacked buttons, safe area
8. PromoPopup: close button inside, larger modal

- [ ] **Step 4: Visual QA at 768px (tablet)**

Verify sm/md breakpoints work as expected — nothing broken at the transition points.

- [ ] **Step 5: Desktop regression check at 1440px**

Verify NOTHING changed on desktop:
- Mega menu hover works
- GSAP stacking timeline works
- Parallax effects work
- All hover interactions work
- Bento grid is 3 columns

- [ ] **Step 6: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix(mobile): final QA adjustments"
```

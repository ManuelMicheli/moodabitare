# Premium Responsive Overhaul — Design Document

**Date:** 2026-03-03
**Scope:** Complete systematic overhaul of UI/UX for premium quality and perfect responsiveness

## Approach: Bottom-Up (Foundations First)

### Phase 1: Design System (globals.css + fonts)
- Fix circular CSS variable references for `--font-body` and `--font-ui`
- Fix `::selection` contrast (cream on bordeaux)
- Create `.font-page-title` class for hero titles (replace all inline `clamp()`)
- Add intermediate `sm:` responsive steps across all typography utilities
- Fix `text-charcoal-deep` → `text-black-deep` token

### Phase 2: Layout Components
- Header: add `sm:` breakpoint for logo, smooth transitions
- MobileNav: replace hardcoded pixel fonts with design system classes
- MegaMenu: replace hardcoded fonts, dynamic grid
- Footer: verify sm 2-col layout, consistency

### Phase 3: Home Page Components
- Unify all typography with design system
- Fix responsive gaps (missing sm: breakpoints)
- Fix ProductBentoGrid md/lg inconsistency
- Fix BrandLogos invisible text
- Normalize all section spacing

### Phase 4: Internal Pages
- Replace all inline clamp() hero titles with .font-page-title
- Fix ProductCatalog flex-wrap/overflow-x-auto conflict
- Verify responsive on all pages
- Fix Google Maps embed
- Ensure gutter consistency

### Phase 5: Cleanup
- Remove dead code (StackingTimeline, ChiSiamoHero, ScrollExpandMedia)
- Remove Figma capture script
- Remove or integrate unused Container component
- Fix CookieBanner/WhatsApp overlap
- Verify clean build

## Target Breakpoints
- Mobile: 390px
- SM: 640px
- MD: 768px
- LG: 1024px
- XL: 1280px
- 2XL: 1536px (if needed)

## Success Criteria
- Zero hardcoded pixel font sizes outside design system
- Consistent typography system across all pages
- Every page responsive on all breakpoints
- No dead code
- Clean build (0 errors, 0 warnings)

"use client";

import { useState, useCallback, useRef, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";
import { HorizontalGallery, type GalleryImage } from "./HorizontalGallery";
import { ProductSheet } from "./ProductSheet";
import type { PortonciniSubCategory } from "@/lib/portoncini-categories";
import type { ProductDetail } from "@/lib/product-details";

/* ── Material icons per ogni macro-categoria ─── */
const categoryIcons: Record<string, React.ReactNode> = {
  alluminio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeOpacity="0.4" />
    </svg>
  ),
  pvc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-2 3-2 6 0 9s-2 6 0 9" strokeOpacity="0.4" />
      <path d="M3 12h18" strokeOpacity="0.4" />
    </svg>
  ),
  cosmo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
      <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z" />
    </svg>
  ),
  kopen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

/* ── Tab bar ────────────────────────────────── */
function CategoryTabs({
  categories,
  activeId,
  onSelect,
  isMobile,
}: {
  categories: PortonciniSubCategory[];
  activeId: string;
  onSelect: (id: string) => void;
  isMobile: boolean;
}) {
  return (
    <div className={`flex ${isMobile ? "gap-1 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide" : "gap-2 flex-wrap"}`}>
      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelect(cat.id)}
            className={`relative flex items-center gap-2.5 px-5 py-3 rounded-full font-ui text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 flex-shrink-0 ${
              isActive
                ? "bg-black-deep text-white shadow-lg shadow-black-deep/20"
                : "bg-transparent text-black-deep/40 hover:text-black-deep/70 hover:bg-black-deep/[0.04]"
            }`}
          >
            <span className={isActive ? "text-white/70" : "text-black-deep/25"}>
              {categoryIcons[cat.id]}
            </span>
            {cat.label}
            <span
              className={`ml-1 text-[0.6rem] font-normal ${
                isActive ? "text-white/40" : "text-black-deep/20"
              }`}
            >
              {cat.products.length}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ── Main component ─────────────────────────── */
function PortonciniCatalogInner({
  categories,
  details,
}: {
  categories: PortonciniSubCategory[];
  details: Record<string, ProductDetail>;
}) {
  const isMobile = useIsMobile(640);
  const searchParams = useSearchParams();
  const sectionRef = useRef<HTMLElement>(null);

  // Determine initial tab from URL if present
  const initialTab = (() => {
    const prodotto = searchParams.get("prodotto");
    if (prodotto) {
      const cat = categories.find((c) =>
        c.products.some((p) => p.name === prodotto)
      );
      if (cat) return cat.id;
    }
    return categories[0]?.id ?? "";
  })();

  const [activeTab, setActiveTab] = useState(initialTab);
  const [selected, setSelected] = useState<GalleryImage | null>(() => {
    const prodotto = searchParams.get("prodotto");
    if (prodotto) {
      for (const cat of categories) {
        const match = cat.products.find((p) => p.name === prodotto);
        if (match && details[match.name]) return match;
      }
    }
    return null;
  });

  const activeCat = categories.find((c) => c.id === activeTab) ?? categories[0];

  // Build segments map for the active category
  const segments = Object.fromEntries(
    activeCat.products
      .filter((p) => details[p.name]?.segment)
      .map((p) => [p.name, details[p.name].segment])
  );

  const handleTabChange = useCallback((id: string) => {
    setActiveTab(id);
    // Scroll to section top so the new gallery starts fresh
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, []);

  const handleClick = useCallback(
    (img: GalleryImage) => {
      if (details[img.name]) setSelected(img);
    },
    [details]
  );

  const handleClose = useCallback(() => setSelected(null), []);

  const detail = selected ? details[selected.name] ?? null : null;

  return (
    <section ref={sectionRef} className="pt-16 sm:pt-20 lg:pt-28">
      <div className="px-6 sm:px-10 lg:px-20">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-3">
          <div className="w-8 h-px bg-bordeaux/40" />
          <span className="font-ui text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.25em] text-bordeaux/60 font-semibold">
            Catalogo Oknoplast &middot; Kopen
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-black-deep tracking-tight">
          La gamma completa
        </h2>
        <p className="mt-3 font-body text-sm sm:text-base text-black-deep max-w-2xl leading-relaxed">
          Dall&apos;alluminio Tenvis al PVC, dalle porte Cosmo alla linea premium Kopen:
          portoncini d&apos;ingresso per ogni stile architettonico e budget.
        </p>

        {/* Tabs */}
        <div className="mt-10 sm:mt-12">
          <CategoryTabs
            categories={categories}
            activeId={activeTab}
            onSelect={handleTabChange}
            isMobile={isMobile}
          />
        </div>

        {/* Active category tagline */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCat.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-6 mb-4 font-ui text-xs sm:text-sm text-black-deep/35 leading-relaxed"
          >
            {activeCat.tagline}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Product gallery — uses the same HorizontalGallery as all other product pages */}
      <HorizontalGallery
        key={activeCat.id}
        images={activeCat.products}
        alt="Portoncini"
        onImageClick={handleClick}
        segments={segments}
      />

      {/* Category count summary — desktop only */}
      {!isMobile && (
        <div className="px-6 sm:px-10 lg:px-20 mt-14 pt-10 border-t border-black-deep/[0.06] flex items-center gap-8 sm:gap-12">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-baseline gap-2">
              <span className="font-display text-xl sm:text-2xl font-semibold text-black-deep/80 tracking-tight">
                {cat.products.length}
              </span>
              <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-black-deep/25 font-medium">
                {cat.label}
              </span>
            </div>
          ))}
          <div className="ml-auto flex items-baseline gap-2">
            <span className="font-display text-xl sm:text-2xl font-semibold text-bordeaux tracking-tight">
              {categories.reduce((sum, c) => sum + c.products.length, 0)}
            </span>
            <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-black-deep/25 font-medium">
              Modelli totali
            </span>
          </div>
        </div>
      )}

      {/* Product sheet overlay */}
      <ProductSheet
        detail={detail}
        imageSrc={selected?.src ?? ""}
        onClose={handleClose}
      />
    </section>
  );
}

export function PortonciniCatalog(props: {
  categories: PortonciniSubCategory[];
  details: Record<string, ProductDetail>;
}) {
  return (
    <Suspense>
      <PortonciniCatalogInner {...props} />
    </Suspense>
  );
}

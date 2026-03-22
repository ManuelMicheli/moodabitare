"use client";

import { useState, useCallback, Suspense } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ProductSheet } from "./ProductSheet";
import type { GalleryImage } from "./HorizontalGallery";
import type { TapparelleSubCategory } from "@/lib/tapparelle-categories";
import type { ProductDetail } from "@/lib/product-details";

/* ── Material icons per ogni macro-categoria ─── */
const categoryIcons: Record<string, React.ReactNode> = {
  alluminio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeOpacity="0.4" />
    </svg>
  ),
  acciaio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  pvc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-2 3-2 6 0 9s-2 6 0 9" strokeOpacity="0.4" />
      <path d="M3 12h18" strokeOpacity="0.4" />
    </svg>
  ),
  screen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M2 7h20M2 11h20M2 15h20M2 19h20" strokeOpacity="0.3" />
    </svg>
  ),
};

/** Split "Brand — Product" into [brand, product] */
function splitName(name: string): [string | null, string] {
  const idx = name.indexOf(" — ");
  if (idx === -1) return [null, name];
  return [name.slice(0, idx), name.slice(idx + 3)];
}

/* ── Segment pill colors ────────────────────── */
const segmentColor: Record<string, string> = {
  Classic: "bg-black-deep/8 text-black-deep/55",
  Compact: "bg-sky-50 text-sky-700",
  Premium: "bg-bordeaux/10 text-bordeaux",
  "Top di gamma": "bg-bordeaux/15 text-bordeaux",
  Design: "bg-amber-50 text-amber-700",
  Sicurezza: "bg-red-50 text-red-700",
};

/* ── Product Card ───────────────────────────── */
function ProductCard({
  image,
  detail,
  isMobile,
  onClick,
}: {
  image: GalleryImage;
  detail?: ProductDetail;
  isMobile: boolean;
  onClick: () => void;
}) {
  const [, product] = splitName(image.name);
  const isPlaceholder = image.src.includes("placeholder");

  return (
    <button
      type="button"
      onClick={onClick}
      className="group/card flex flex-col text-left w-full"
    >
      {/* Image container */}
      <div
        className={`relative w-full overflow-hidden rounded-xl ${
          isMobile ? "aspect-[4/3]" : "aspect-[3/2]"
        } ${isPlaceholder ? "bg-warm-gray/60" : "bg-cream"}`}
      >
        {!isPlaceholder && (
          <Image
            src={image.src}
            alt={product}
            fill
            className="object-contain p-4 group-hover/card:scale-105 transition-transform duration-500 ease-out"
            sizes={isMobile ? "45vw" : "(max-width: 1024px) 30vw, 20vw"}
          />
        )}
        {isPlaceholder && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-ui text-[0.6rem] uppercase tracking-[0.2em] text-black-deep/50">
              Foto in arrivo
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black-deep/0 group-hover/card:bg-black-deep/5 transition-colors duration-300 rounded-xl" />
      </div>

      {/* Text */}
      <div className={isMobile ? "mt-3 px-1" : "mt-4"}>
        <p className={`font-display font-semibold leading-tight tracking-tight ${isMobile ? "text-sm" : "text-base lg:text-lg"} text-black-deep/85`}>
          {product}
        </p>
        {detail?.segment && (
          <span
            className={`inline-block mt-1.5 text-[0.55rem] sm:text-[0.6rem] font-ui font-semibold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full ${
              segmentColor[detail.segment] || "bg-black-deep/5 text-black-deep/70"
            }`}
          >
            {detail.segment}
          </span>
        )}
        {detail && (
          <span className="mt-1.5 text-[0.6rem] font-ui font-medium uppercase tracking-wider text-bordeaux/0 group-hover/card:text-bordeaux/60 transition-colors duration-300 block">
            Scheda tecnica
          </span>
        )}
      </div>
    </button>
  );
}

/* ── Tab bar ────────────────────────────────── */
function CategoryTabs({
  categories,
  activeId,
  onSelect,
  isMobile,
}: {
  categories: TapparelleSubCategory[];
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
function TapparelleCatalogInner({
  categories,
  details,
}: {
  categories: TapparelleSubCategory[];
  details: Record<string, ProductDetail>;
}) {
  const isMobile = useIsMobile(640);
  const searchParams = useSearchParams();

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

  const handleClick = useCallback(
    (img: GalleryImage) => {
      if (details[img.name]) setSelected(img);
    },
    [details]
  );

  const handleClose = useCallback(() => setSelected(null), []);

  const detail = selected ? details[selected.name] ?? null : null;

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="px-6 sm:px-10 lg:px-20">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-3">
          <div className="w-8 h-px bg-bordeaux/40" />
          <span className="font-ui text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.25em] text-bordeaux/60 font-semibold">
            Catalogo Pasini
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-black-deep tracking-tight">
          La gamma completa
        </h2>
        <p className="mt-3 font-body text-sm sm:text-base text-black-deep max-w-2xl leading-relaxed">
          Quattro famiglie di avvolgibili per ogni esigenza: dall&apos;alluminio coibentato
          all&apos;acciaio blindato, dal PVC anti-deformazione agli screen tecnici.
        </p>

        {/* Tabs */}
        <div className="mt-10 sm:mt-12">
          <CategoryTabs
            categories={categories}
            activeId={activeTab}
            onSelect={setActiveTab}
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
            className="mt-6 font-ui text-xs sm:text-sm text-black-deep/35 leading-relaxed"
          >
            {activeCat.tagline}
          </motion.p>
        </AnimatePresence>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`mt-8 sm:mt-10 grid gap-6 sm:gap-8 ${
              isMobile
                ? "grid-cols-2"
                : activeCat.products.length <= 4
                  ? "grid-cols-2 lg:grid-cols-4"
                  : "grid-cols-2 lg:grid-cols-4 xl:grid-cols-6"
            }`}
          >
            {activeCat.products.map((img, i) => (
              <motion.div
                key={img.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <ProductCard
                  image={img}
                  detail={details[img.name]}
                  isMobile={isMobile}
                  onClick={() => handleClick(img)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Category count summary — desktop only */}
        {!isMobile && (
          <div className="mt-14 pt-10 border-t border-black-deep/[0.06] flex items-center gap-8 sm:gap-12">
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
      </div>

      {/* Product sheet overlay */}
      <ProductSheet
        detail={detail}
        imageSrc={selected?.src ?? ""}
        onClose={handleClose}
      />
    </section>
  );
}

export function TapparelleCatalog(props: {
  categories: TapparelleSubCategory[];
  details: Record<string, ProductDetail>;
}) {
  return (
    <Suspense>
      <TapparelleCatalogInner {...props} />
    </Suspense>
  );
}

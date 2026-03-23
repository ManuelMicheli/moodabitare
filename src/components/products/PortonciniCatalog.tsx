"use client";

import { useState, useCallback, useRef, useLayoutEffect, Suspense } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { ProductSheet } from "./ProductSheet";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextRevealByWord } from "@/components/animations/TextRevealByWord";
import { DrawLine } from "@/components/animations/DrawLine";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { HoverTilt } from "@/components/animations/HoverTilt";
import type { GalleryImage } from "./HorizontalGallery";
import type { PortonciniSubCategory } from "@/lib/portoncini-categories";
import type { ProductDetail } from "@/lib/product-details";

/* ── Material icons ───────────────────────────── */
const categoryIcons: Record<string, React.ReactNode> = {
  alluminio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4 sm:w-5 sm:h-5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeOpacity="0.4" />
    </svg>
  ),
  pvc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4 sm:w-5 sm:h-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-2 3-2 6 0 9s-2 6 0 9" strokeOpacity="0.4" />
      <path d="M3 12h18" strokeOpacity="0.4" />
    </svg>
  ),
  cosmo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4 sm:w-5 sm:h-5">
      <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7z" />
    </svg>
  ),
  kopen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4 sm:w-5 sm:h-5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

function splitName(name: string): [string | null, string] {
  const idx = name.indexOf(" — ");
  if (idx === -1) return [null, name];
  return [name.slice(0, idx), name.slice(idx + 3)];
}

const segmentColor: Record<string, string> = {
  Classic: "bg-white/75 text-black-deep/60 backdrop-blur-sm",
  Compact: "bg-sky-50/80 text-sky-700 backdrop-blur-sm",
  Premium: "bg-bordeaux/10 text-bordeaux backdrop-blur-sm",
  "Top di gamma": "bg-bordeaux/15 text-bordeaux backdrop-blur-sm",
  Design: "bg-amber-50/80 text-amber-700 backdrop-blur-sm",
  Sicurezza: "bg-red-50/80 text-red-700 backdrop-blur-sm",
};

/* ── Premium Product Card ─────────────────────── */
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

  const cardContent = (
    <button type="button" onClick={onClick} className="group/card flex flex-col text-left w-full">
      <div
        className={cn(
          "relative w-full overflow-hidden",
          isMobile ? "aspect-[4/3] rounded-lg" : "aspect-[3/2] rounded-xl",
          isPlaceholder ? "bg-warm-gray/60" : "bg-white"
        )}
      >
        {!isPlaceholder ? (
          <Image
            src={image.src}
            alt={product}
            fill
            className={cn(
              "object-contain transition-all duration-700 ease-out",
              isMobile ? "p-4" : "p-6 lg:p-8",
              "group-hover/card:scale-[1.06]"
            )}
            sizes={isMobile ? "45vw" : "(max-width: 1024px) 30vw, 22vw"}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-ui text-[0.6rem] uppercase tracking-[0.2em] text-black-deep/30">Foto in arrivo</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/[0.04] via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[inherit]" />
        {detail?.segment && (
          <span className={cn("absolute top-3 right-3 text-[0.5rem] sm:text-[0.55rem] font-ui font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full", segmentColor[detail.segment] || "bg-white/80 text-black-deep/60 backdrop-blur-sm")}>
            {detail.segment}
          </span>
        )}
      </div>
      {/* Expanding line */}
      <div className={cn("mx-auto bg-bordeaux/40 group-hover/card:bg-bordeaux transition-all duration-500 ease-out rounded-full", isMobile ? "mt-2.5 h-[1.5px] w-6 group-hover/card:w-full" : "mt-4 h-[2px] w-8 group-hover/card:w-full")} />
      <div className={isMobile ? "mt-2.5 px-0.5" : "mt-4"}>
        <h3 className={cn("font-display font-semibold leading-tight tracking-tight text-black-deep/90 group-hover/card:text-black-deep transition-colors duration-300", isMobile ? "text-sm" : "text-base lg:text-lg")}>
          {product}
        </h3>
        {!isMobile && detail?.highlight && (
          <p className="mt-1.5 font-body text-[0.8rem] text-black-deep/70 leading-snug line-clamp-1 group-hover/card:text-black-deep transition-colors duration-300">
            {detail.highlight.split("—")[0].trim()}
          </p>
        )}
        {detail && (
          <div className="mt-2 flex items-center gap-1.5 overflow-hidden">
            <span className={cn("font-ui text-[0.6rem] font-semibold uppercase tracking-[0.12em] transition-all duration-400", isMobile ? "text-bordeaux/50" : "text-bordeaux/0 group-hover/card:text-bordeaux/70 translate-y-3 group-hover/card:translate-y-0")}>
              Scheda tecnica
            </span>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={cn("w-3 h-3 transition-all duration-400", isMobile ? "text-bordeaux/40" : "text-bordeaux/0 group-hover/card:text-bordeaux/50 translate-y-3 group-hover/card:translate-y-0 -translate-x-1 group-hover/card:translate-x-0")}>
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </div>
        )}
      </div>
    </button>
  );

  if (isMobile) return cardContent;
  return <HoverTilt maxTilt={4} scale={1.01} glare>{cardContent}</HoverTilt>;
}

/* ── Category Navigation with sliding indicator ── */
function CategoryNav({
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
  const navRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const btn = btnRefs.current.get(activeId);
    const nav = navRef.current;
    if (btn && nav) {
      const navRect = nav.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setIndicator({ left: btnRect.left - navRect.left, width: btnRect.width });
    }
  }, [activeId]);

  if (isMobile) {
    return (
      <div className="relative">
        <div className="flex gap-1.5 overflow-x-auto pb-3 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
          {categories.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <button key={cat.id} type="button" onClick={() => onSelect(cat.id)} className={cn("snap-start flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full font-ui text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300", isActive ? "bg-black-deep text-white shadow-lg shadow-black-deep/20" : "text-black-deep/35 hover:text-black-deep/60")}>
                <span className={isActive ? "text-white/60" : "text-black-deep/20"}>{categoryIcons[cat.id]}</span>
                {cat.label}
                <span className={cn("ml-0.5 text-[0.55rem] font-normal", isActive ? "text-white/40" : "text-black-deep/20")}>{cat.products.length}</span>
              </button>
            );
          })}
        </div>
        <div className="absolute right-0 top-0 bottom-3 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div ref={navRef} className="relative flex items-end border-b border-black-deep/[0.06]">
      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <button key={cat.id} ref={(el) => { if (el) btnRefs.current.set(cat.id, el); }} type="button" onClick={() => onSelect(cat.id)} className={cn("relative px-6 lg:px-10 pb-5 pt-2 transition-colors duration-300", isActive ? "text-black-deep" : "text-black-deep/25 hover:text-black-deep/50")}>
            <span className="font-display text-lg lg:text-xl xl:text-2xl font-semibold tracking-tight">{cat.label}</span>
            <sup className={cn("ml-1.5 font-ui text-[0.6rem] font-medium transition-colors duration-300", isActive ? "text-bordeaux" : "text-black-deep/20")}>{cat.products.length}</sup>
          </button>
        );
      })}
      <motion.div className="absolute bottom-0 h-[2px] bg-bordeaux" animate={{ left: indicator.left, width: indicator.width }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
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

  const initialTab = (() => {
    const prodotto = searchParams.get("prodotto");
    if (prodotto) {
      const cat = categories.find((c) => c.products.some((p) => p.name === prodotto));
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
  const handleClick = useCallback((img: GalleryImage) => { if (details[img.name]) setSelected(img); }, [details]);
  const handleClose = useCallback(() => setSelected(null), []);
  const detail = selected ? details[selected.name] ?? null : null;
  const totalProducts = categories.reduce((sum, c) => sum + c.products.length, 0);

  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="px-6 sm:px-10 lg:px-20">

        {/* ═══════════ Editorial Header ═══════════ */}
        <div className="flex items-center gap-4 mb-6">
          <DrawLine className="!w-12 !bg-bordeaux/40" duration={0.6} />
          <FadeInView delay={0.2}>
            <span className="font-ui text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.25em] text-bordeaux/60 font-semibold">
              Catalogo Oknoplast &middot; Kopen
            </span>
          </FadeInView>
        </div>

        <TextRevealByWord
          as="h2"
          className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-semibold text-black-deep tracking-tight leading-[1.1]"
          stagger={0.05}
        >
          Portoncini d&apos;ingresso per ogni architettura
        </TextRevealByWord>

        <FadeInView delay={0.4}>
          <p className="mt-5 sm:mt-6 font-body text-base sm:text-lg lg:text-xl text-black-deep/55 max-w-2xl leading-relaxed">
            Portoncini d&apos;ingresso in alluminio a taglio termico Tenvis, PVC ad alte
            prestazioni, la linea decorativa Cosmo e il premium Kopen.
          </p>
        </FadeInView>

        <DrawLine className="mt-10 sm:mt-12 !bg-black-deep/[0.06]" delay={0.5} />
        <FadeInView delay={0.6}>
          <div className="mt-8 flex items-center gap-8 sm:gap-12 lg:gap-16">
            {[
              { n: totalProducts, label: "Modelli" },
              { n: categories.length, label: "Linee" },
              { n: 3, label: "Brand" } as const,
            ].map((stat: { n: number; label: string; suffix?: string }) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <AnimatedCounter target={stat.n} suffix={stat.suffix} className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-black-deep tracking-tight" duration={1.8} />
                <span className="font-ui text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.15em] text-black-deep/30 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* ═══════════ Category Navigation ═══════════ */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <CategoryNav categories={categories} activeId={activeTab} onSelect={setActiveTab} isMobile={isMobile} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeCat.id} initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }} animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }} exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }} transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }} className="mt-6 sm:mt-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="flex-shrink-0 mt-0.5 text-black-deep/20">{categoryIcons[activeCat.id]}</span>
              <p className="font-body text-sm sm:text-base text-black-deep/45 leading-relaxed max-w-xl italic">{activeCat.tagline}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ═══════════ Product Grid ═══════════ */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCat.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className={cn("mt-10 sm:mt-14 grid gap-6 sm:gap-8 lg:gap-10", isMobile ? "grid-cols-2" : "grid-cols-2 lg:grid-cols-4 xl:grid-cols-5")}>
              {activeCat.products.map((img, i) => (
                <motion.div key={img.name} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}>
                  <ProductCard image={img} detail={details[img.name]} isMobile={isMobile} onClick={() => handleClick(img)} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ═══════════ Bottom Stats Bar (desktop) ═══════════ */}
        {!isMobile && (
          <FadeInView delay={0.2} className="mt-16 lg:mt-24">
            <DrawLine className="!bg-black-deep/[0.08]" once={false} />
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-10 lg:gap-16">
                {categories.map((cat) => (
                  <button key={cat.id} type="button" onClick={() => setActiveTab(cat.id)} className={cn("group flex items-baseline gap-2.5 transition-all duration-300 cursor-pointer", cat.id === activeTab ? "opacity-100" : "opacity-40 hover:opacity-70")}>
                    <AnimatedCounter target={cat.products.length} className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-black-deep tracking-tight" duration={1.5} />
                    <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-black-deep/50 font-medium group-hover:text-black-deep/70 transition-colors">{cat.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex items-baseline gap-3">
                <AnimatedCounter target={totalProducts} className="font-display text-2xl lg:text-3xl font-semibold text-bordeaux tracking-tight" duration={2} />
                <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-black-deep/25 font-medium">Modelli totali</span>
              </div>
            </div>
          </FadeInView>
        )}
      </div>

      <ProductSheet detail={detail} imageSrc={selected?.src ?? ""} onClose={handleClose} />
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

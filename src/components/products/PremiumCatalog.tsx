"use client";

import { useState, useCallback, useRef, useLayoutEffect, Suspense, useMemo } from "react";
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
import type { ProductDetail } from "@/lib/product-details";

/* ── Types ────────────────────────────────────── */

export interface PremiumCategory {
  id: string;
  label: string;
  tagline: string;
  icon?: React.ReactNode;
  products: GalleryImage[];
}

export interface PremiumCatalogProps {
  brandLabel: string;
  title: string;
  description: string;
  stats: { n: number; label: string; suffix?: string }[];
  categories?: PremiumCategory[];
  images?: GalleryImage[];
  details: Record<string, ProductDetail>;
  cover?: boolean;
}

/* ── Segment badge colors ─────────────────────── */

const segmentColor: Record<string, string> = {
  Classic: "bg-white/75 text-black-deep/60 backdrop-blur-sm",
  Comfort: "bg-blue-50/80 text-blue-700 backdrop-blur-sm",
  Compact: "bg-sky-50/80 text-sky-700 backdrop-blur-sm",
  Premium: "bg-bordeaux/10 text-bordeaux backdrop-blur-sm",
  "Top di gamma": "bg-bordeaux/15 text-bordeaux backdrop-blur-sm",
  Design: "bg-amber-50/80 text-amber-700 backdrop-blur-sm",
  Scorrevoli: "bg-emerald-50/80 text-emerald-700 backdrop-blur-sm",
  "Passive House": "bg-green-50/80 text-green-700 backdrop-blur-sm",
  Sicurezza: "bg-red-50/80 text-red-700 backdrop-blur-sm",
};

/** Split "Brand — Product" into [brand, product] */
function splitName(name: string): [string | null, string] {
  const idx = name.indexOf(" — ");
  if (idx === -1) return [null, name];
  return [name.slice(0, idx), name.slice(idx + 3)];
}

/* ── Premium Product Card ─────────────────────── */

function ProductCard({
  image,
  detail,
  isMobile,
  onClick,
  cover,
}: {
  image: GalleryImage;
  detail?: ProductDetail;
  isMobile: boolean;
  onClick: () => void;
  cover?: boolean;
}) {
  const [, product] = splitName(image.name);
  const isPlaceholder = image.src.includes("placeholder");

  const cardContent = (
    <button
      type="button"
      onClick={onClick}
      className="group/card flex flex-col text-left w-full"
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          isMobile ? "aspect-[4/3] rounded-lg" : cover ? "aspect-square rounded-xl" : "aspect-[4/3] rounded-xl",
          isPlaceholder ? "bg-warm-gray/60" : cover ? "bg-neutral-100" : "bg-white"
        )}
      >
        {!isPlaceholder ? (
          <Image
            src={image.src}
            alt={product}
            fill
            className={cn(
              "transition-all duration-700 ease-out",
              cover ? "object-cover" : "object-contain",
              cover ? "p-0" : isMobile ? "p-3" : "p-4 lg:p-5",
              cover ? "" : "group-hover/card:scale-[1.06]"
            )}
            sizes={isMobile ? "45vw" : "(max-width: 1024px) 30vw, 22vw"}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-ui text-[0.6rem] uppercase tracking-[0.2em] text-black-deep/30">
              Foto in arrivo
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/[0.04] via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[inherit]" />
      </div>
      {/* Expanding line */}
      <div className={cn("mx-auto bg-bordeaux/40 group-hover/card:bg-bordeaux transition-all duration-500 ease-out rounded-full", isMobile ? "mt-2.5 h-[1.5px] w-6 group-hover/card:w-full" : "mt-4 h-[2px] w-8 group-hover/card:w-full")} />
      <div className={isMobile ? "mt-2.5 px-0.5" : "mt-4"}>
        <div className="flex items-center gap-2 flex-wrap">
          <h3
            className={cn(
              "font-display font-semibold leading-tight tracking-tight",
              "text-black-deep/90 group-hover/card:text-black-deep transition-colors duration-300",
              isMobile ? "text-sm" : "text-base lg:text-lg"
            )}
          >
            {product}
          </h3>
          {detail?.segment && (
            <span
              className={cn(
                "text-[0.5rem] sm:text-[0.55rem] font-ui font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full",
                segmentColor[detail.segment] || "bg-white/80 text-black-deep/60 backdrop-blur-sm"
              )}
            >
              {detail.segment}
            </span>
          )}
        </div>
        {!isMobile && detail?.highlight && (
          <p className="mt-1.5 font-body text-[0.8rem] text-black-deep/70 leading-snug line-clamp-1 group-hover/card:text-black-deep transition-colors duration-300">
            {detail.highlight.split("—")[0].trim()}
          </p>
        )}
        {detail && (
          <div className="mt-2 flex items-center gap-1.5 overflow-hidden">
            <span
              className={cn(
                "font-ui text-[0.6rem] font-semibold uppercase tracking-[0.12em] transition-all duration-400",
                isMobile
                  ? "text-bordeaux/50"
                  : "text-bordeaux/0 group-hover/card:text-bordeaux/70 translate-y-3 group-hover/card:translate-y-0"
              )}
            >
              Scheda tecnica
            </span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "w-3 h-3 transition-all duration-400",
                isMobile
                  ? "text-bordeaux/40"
                  : "text-bordeaux/0 group-hover/card:text-bordeaux/50 translate-y-3 group-hover/card:translate-y-0 -translate-x-1 group-hover/card:translate-x-0"
              )}
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </div>
        )}
      </div>
    </button>
  );

  if (isMobile) return cardContent;
  return (
    <HoverTilt maxTilt={4} scale={1.01} glare>
      {cardContent}
    </HoverTilt>
  );
}

/* ── Category Navigation with sliding indicator ── */

function CategoryNav({
  categories,
  activeId,
  onSelect,
  isMobile,
}: {
  categories: PremiumCategory[];
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
      setIndicator({
        left: btnRect.left - navRect.left,
        width: btnRect.width,
      });
    }
  }, [activeId]);

  return (
    <div ref={navRef} className="relative flex items-end border-b border-black-deep/[0.06] overflow-x-auto scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0">
      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <button
            key={cat.id}
            ref={(el) => {
              if (el) btnRefs.current.set(cat.id, el);
            }}
            type="button"
            onClick={() => onSelect(cat.id)}
            className={cn(
              "relative flex-shrink-0 px-4 sm:px-6 lg:px-10 pb-4 sm:pb-5 pt-2 transition-colors duration-300",
              isActive
                ? "text-black-deep"
                : "text-black-deep/25 hover:text-black-deep/50"
            )}
          >
            <span className="font-display text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold tracking-tight">
              {cat.label}
            </span>
            <sup
              className={cn(
                "ml-1.5 font-ui text-[0.6rem] font-medium transition-colors duration-300",
                isActive ? "text-bordeaux" : "text-black-deep/20"
              )}
            >
              {cat.products.length}
            </sup>
          </button>
        );
      })}
      <motion.div
        className="absolute bottom-0 h-[2px] bg-bordeaux"
        animate={{ left: indicator.left, width: indicator.width }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </div>
  );
}

/* ── Main Component ───────────────────────────── */

function PremiumCatalogInner({
  brandLabel,
  title,
  description,
  stats,
  categories,
  images,
  details,
  cover,
}: PremiumCatalogProps) {
  const isMobile = useIsMobile(640);
  const searchParams = useSearchParams();

  const allProducts = useMemo(() => {
    if (categories) return categories.flatMap((c) => c.products);
    return images ?? [];
  }, [categories, images]);

  const totalProducts = allProducts.length;

  const hasCategories = categories && categories.length > 1;

  /* Determine initial tab from URL param */
  const initialTab = (() => {
    if (!categories) return "";
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
      for (const p of allProducts) {
        if (p.name === prodotto && details[p.name]) return p;
      }
    }
    return null;
  });

  const activeCat = categories?.find((c) => c.id === activeTab) ?? categories?.[0];
  const displayProducts = hasCategories && activeCat ? activeCat.products : allProducts;

  const handleClick = useCallback(
    (img: GalleryImage) => {
      if (details[img.name]) setSelected(img);
    },
    [details]
  );

  const handleClose = useCallback(() => setSelected(null), []);

  const detail = selected ? details[selected.name] ?? null : null;

  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="px-6 sm:px-10 lg:px-20">

        {/* ═══════════ Editorial Header ═══════════ */}
        <div className="flex items-center gap-4 mb-6">
          <DrawLine className="!w-12 !bg-bordeaux/40" duration={0.6} />
          <FadeInView delay={0.2}>
            <span className="font-ui text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.25em] text-bordeaux/60 font-semibold">
              {brandLabel}
            </span>
          </FadeInView>
        </div>

        <TextRevealByWord
          as="h2"
          className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-semibold text-black-deep tracking-tight leading-[1.1]"
          stagger={0.05}
        >
          {title}
        </TextRevealByWord>

        <FadeInView delay={0.4}>
          <p className="mt-5 sm:mt-6 font-body text-base sm:text-lg lg:text-xl text-black-deep/55 max-w-2xl leading-relaxed">
            {description}
          </p>
        </FadeInView>

        {/* Inline stats */}
        <DrawLine className="mt-10 sm:mt-12 !bg-black-deep/[0.06]" delay={0.5} />
        <FadeInView delay={0.6}>
          <div className="mt-8 flex flex-wrap items-center gap-8 sm:gap-12 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <AnimatedCounter
                  target={stat.n}
                  suffix={stat.suffix}
                  className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-black-deep tracking-tight"
                  duration={1.8}
                />
                <span className="font-ui text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.15em] text-black-deep/30 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* ═══════════ Category Navigation ═══════════ */}
        {hasCategories && (
          <>
            <div className="mt-14 sm:mt-16 lg:mt-20">
              <CategoryNav
                categories={categories}
                activeId={activeTab}
                onSelect={setActiveTab}
                isMobile={isMobile}
              />
            </div>

            {/* Category tagline with clip-path transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat?.id}
                initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
                className="mt-6 sm:mt-8"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  {activeCat?.icon && (
                    <span className="flex-shrink-0 mt-0.5 text-black-deep/20">
                      {activeCat.icon}
                    </span>
                  )}
                  <p className="font-body text-sm sm:text-base text-black-deep/45 leading-relaxed max-w-xl italic">
                    {activeCat?.tagline}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        )}

        {/* ═══════════ Product Grid ═══════════ */}
        {hasCategories ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={cn(
                  "mt-10 sm:mt-14 grid gap-6 sm:gap-8 lg:gap-10",
                  isMobile
                    ? "grid-cols-2"
                    : "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                )}
              >
                {displayProducts.map((img, i) => (
                  <motion.div
                    key={img.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.05,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <ProductCard
                      image={img}
                      detail={details[img.name]}
                      isMobile={isMobile}
                      onClick={() => handleClick(img)}
                      cover={cover}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div
            className={cn(
              "mt-10 sm:mt-14 grid gap-6 sm:gap-8 lg:gap-10",
              isMobile
                ? "grid-cols-2"
                : "grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
            )}
          >
            {displayProducts.map((img, i) => (
              <motion.div
                key={img.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <ProductCard
                  image={img}
                  detail={details[img.name]}
                  isMobile={isMobile}
                  onClick={() => handleClick(img)}
                  cover={cover}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* ═══════════ Bottom Stats Bar (desktop, with categories) ═══════════ */}
        {!isMobile && hasCategories && (
          <FadeInView delay={0.2} className="mt-16 lg:mt-24">
            <DrawLine className="!bg-black-deep/[0.08]" once={false} />
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-10 lg:gap-16">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveTab(cat.id)}
                    className={cn(
                      "group flex items-baseline gap-2.5 transition-all duration-300 cursor-pointer",
                      cat.id === activeTab ? "opacity-100" : "opacity-40 hover:opacity-70"
                    )}
                  >
                    <AnimatedCounter
                      target={cat.products.length}
                      className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-black-deep tracking-tight"
                      duration={1.5}
                    />
                    <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-black-deep/50 font-medium group-hover:text-black-deep/70 transition-colors">
                      {cat.label}
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex items-baseline gap-3">
                <AnimatedCounter
                  target={totalProducts}
                  className="font-display text-2xl lg:text-3xl font-semibold text-bordeaux tracking-tight"
                  duration={2}
                />
                <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-black-deep/25 font-medium">
                  Modelli totali
                </span>
              </div>
            </div>
          </FadeInView>
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

export function PremiumCatalog(props: PremiumCatalogProps) {
  return (
    <Suspense>
      <PremiumCatalogInner {...props} />
    </Suspense>
  );
}

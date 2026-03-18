"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MACRO_CATEGORIES, BRAND_PARTNERS } from "@/lib/constants";

interface MegaMenuProps {
  onNavigate?: () => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "serramenti-oscuranti-portoncini": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  ),
  "porte-interne-blindate": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <circle cx="16" cy="12" r="1.5" />
      <line x1="4" y1="2" x2="4" y2="22" strokeWidth="1.5" />
    </svg>
  ),
  "sistemi-sicurezza": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4">
      <path d="M12 2l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  "comfort-complementi": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  "outdoor": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  "casa-arredo": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4">
      <path d="M3 22V12a9 9 0 0 1 18 0v10" />
      <path d="M5 22v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <line x1="3" y1="22" x2="21" y2="22" />
    </svg>
  ),
  "riscaldamento-rinnovabili": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-4 h-4">
      <path d="M12 3v1m0 16v1m-8-9H3m18 0h-1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
};

const CATEGORY_PREVIEWS: Record<string, { src: string; alt: string }> = {
  "serramenti-oscuranti-portoncini": { src: "/images/Hero 1.jpg", alt: "Serramenti e infissi" },
  "porte-interne-blindate": { src: "/images/Hero 2.jpg", alt: "Porte interne e blindate" },
  "sistemi-sicurezza": { src: "/images/Alias-home.jpg", alt: "Sistemi di sicurezza" },
  "comfort-complementi": { src: "/images/Squareline_Tapparella_Vista_Ext_FINAL.jpg", alt: "Comfort e complementi" },
  "outdoor": { src: "/images/unplash1.avif", alt: "Outdoor e giardino" },
  "casa-arredo": { src: "/images/Hero cucina.jpg", alt: "Casa e arredo" },
  "riscaldamento-rinnovabili": { src: "/images/ristrutturazione-hero.webp", alt: "Riscaldamento e rinnovabili" },
};

export function MegaMenu({ onNavigate }: MegaMenuProps) {
  const [hoveredCategory, setHoveredCategory] = useState(MACRO_CATEGORIES[0].id);

  const uniqueProductCount = new Set(
    MACRO_CATEGORIES.flatMap((mc) => mc.products.map((p) => p.slug))
  ).size;

  const preview = CATEGORY_PREVIEWS[hoveredCategory];
  const hoveredLabel = MACRO_CATEGORIES.find((c) => c.id === hoveredCategory)?.label ?? "";

  const handleCategoryHover = useCallback((id: string) => {
    setHoveredCategory(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-[7.5rem] lg:top-[8.5rem] left-0 right-0 z-40"
    >
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="bg-black-deep/[0.97] backdrop-blur-xl">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20 py-6 lg:py-8">

          {/* Categories + Preview */}
          <div className="flex gap-6 xl:gap-8">

            {/* Left: 7 category columns */}
            <div className="flex-1 min-w-0 grid grid-cols-7 gap-5 xl:gap-7">
              {MACRO_CATEGORIES.map((category, catIndex) => (
                <CategoryColumn
                  key={category.id}
                  category={category}
                  catIndex={catIndex}
                  isActive={hoveredCategory === category.id}
                  onHover={handleCategoryHover}
                  onNavigate={onNavigate}
                />
              ))}
            </div>

            {/* Right: Preview square */}
            <div className="hidden xl:block w-60 2xl:w-72 flex-shrink-0">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-white/5">
                <AnimatePresence mode="wait">
                  {preview && (
                    <motion.div
                      key={hoveredCategory}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={preview.src}
                        alt={preview.alt}
                        fill
                        sizes="288px"
                        className="object-cover"
                      />
                      {/* Gradient overlay for label */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      {/* Category label */}
                      <div className="absolute bottom-0 inset-x-0 p-4">
                        <p className="font-display font-bold text-white text-sm leading-tight">
                          {hoveredLabel}
                        </p>
                        <span className="font-ui text-[0.6rem] uppercase tracking-widest text-white/60 mt-1 block">
                          Scopri la gamma
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between"
          >
            <p className="text-label text-white/20 text-[0.6rem]">
              {uniqueProductCount} prodotti &middot; {BRAND_PARTNERS.length} brand partner
            </p>
            <Link
              href="/prodotti"
              onClick={onNavigate}
              className="text-label text-[0.65rem] group flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200"
            >
              Tutti i prodotti
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryColumn({
  category,
  catIndex,
  isActive,
  onHover,
  onNavigate,
}: {
  category: (typeof MACRO_CATEGORIES)[number];
  catIndex: number;
  isActive: boolean;
  onHover: (id: string) => void;
  onNavigate?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.03 + catIndex * 0.03, duration: 0.3 }}
      className="group/col"
      onMouseEnter={() => onHover(category.id)}
    >
      {/* Category header */}
      <div className={`flex items-center gap-1.5 mb-3 pb-2 border-b transition-colors duration-200 ${isActive ? "border-white/20" : "border-white/[0.06]"}`}>
        <span className={`transition-colors duration-200 ${isActive ? "text-white" : "text-white/70"}`}>
          {CATEGORY_ICONS[category.id]}
        </span>
        <h3 className={`text-label text-[0.6rem] xl:text-[0.65rem] tracking-[0.1em] leading-tight transition-colors duration-200 ${isActive ? "text-white" : "text-white/80"}`}>
          {category.label}
        </h3>
      </div>

      {/* Products */}
      <ul className="space-y-0">
        {category.products.map((product, i) => (
          <motion.li
            key={`${category.id}-${product.slug}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08 + catIndex * 0.03 + i * 0.015, duration: 0.2 }}
          >
            <Link
              href={`/prodotti/${product.slug}`}
              onClick={onNavigate}
              className="group flex flex-col gap-0 py-1.5 px-2 -mx-2 rounded hover:bg-white/[0.04] transition-all duration-200 relative"
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover:h-3 bg-white/50 rounded-full transition-all duration-200" />

              <span className="font-card-title text-[0.82rem] xl:text-[0.88rem] text-white/80 group-hover:text-white transition-colors duration-200 leading-tight">
                {product.name}
              </span>
              {product.brand && (
                <span className="font-[var(--font-ui)] text-[0.55rem] xl:text-[0.58rem] uppercase tracking-[0.08em] text-white/50 group-hover:text-white/75 transition-colors duration-200">
                  {product.brand}
                </span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

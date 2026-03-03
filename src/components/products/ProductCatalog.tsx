"use client";

import { useState } from "react";
import Link from "next/link";
import { MACRO_CATEGORIES, ALL_PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? ALL_PRODUCTS.filter((p) => p.macroCategoryId === activeCategory)
    : ALL_PRODUCTS;

  return (
    <div>
      {/* Filter Tabs — with gradient fade hint on mobile */}
      <div className="relative mb-16 lg:mb-20">
        <div className="flex justify-start sm:justify-center gap-1 overflow-x-auto sm:overflow-visible pb-2 scrollbar-hide sm:flex-wrap">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "px-5 py-2.5 text-label transition-all flex-shrink-0",
              !activeCategory
                ? "bg-black-deep text-white"
                : "text-black-deep/40 hover:text-black-deep"
            )}
          >
            Tutti
          </button>
          {MACRO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 text-label transition-all flex-shrink-0",
                activeCategory === cat.id
                  ? "bg-black-deep text-white"
                  : "text-black-deep/40 hover:text-black-deep"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Fade hint — mobile only */}
        <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden" />
      </div>

      {/* Products Grid */}
      <StaggerContainer key={activeCategory ?? "all"} className="grid grid-cols-1 gap-4 sm:gap-px sm:bg-black/5 bg-transparent sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <StaggerItem key={product.slug}>
            <Link
              href={`/prodotti/${product.slug}`}
              className="group block bg-white"
            >
              <div className="aspect-[4/3] bg-warm-gray/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black-deep/0 group-hover:bg-black-deep/5 transition-all duration-500" />
              </div>
              <div className="p-5 sm:p-6 lg:p-8">
                <span className="text-label text-black-deep/25">
                  {product.brand}
                </span>
                <h3 className="mt-2 font-card-title text-black-deep group-hover:text-black-deep/60 transition-colors">
                  {product.name}
                </h3>
                <span className="inline-block mt-4 text-caption text-black-deep/30 group-hover:text-black-deep/60 transition-colors">
                  Scopri →
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

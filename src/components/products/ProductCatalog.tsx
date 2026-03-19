"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MACRO_CATEGORIES, ALL_PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export function ProductCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria");
  const [activeCategory, setActiveCategory] = useState<string | null>(
    MACRO_CATEGORIES.some((c) => c.id === initialCategory) ? initialCategory : null
  );

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
              "px-5 py-2.5 text-label transition-all flex-shrink-0 rounded-full border border-black-deep/10",
              !activeCategory
                ? "bg-black-deep text-white border-black-deep"
                : "text-black-deep/40 hover:text-black-deep"
            )}
          >
            Tutti
            <span className="ml-1.5 text-[0.6rem] opacity-50">{ALL_PRODUCTS.length}</span>
          </button>
          {MACRO_CATEGORIES.map((cat) => {
            const count = ALL_PRODUCTS.filter((p) => p.macroCategoryId === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-5 py-2.5 text-label transition-all flex-shrink-0 rounded-full border border-black-deep/10",
                  activeCategory === cat.id
                    ? "bg-black-deep text-white border-black-deep"
                    : "text-black-deep/40 hover:text-black-deep"
                )}
              >
                {cat.label}
                <span className="ml-1.5 text-[0.6rem] opacity-50">{count}</span>
              </button>
            );
          })}
        </div>
        {/* Fade hint — mobile only */}
        <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden" />
      </div>

      {/* Products Grid */}
      <StaggerContainer key={activeCategory ?? "all"} className="grid grid-cols-2 gap-3 sm:gap-px sm:bg-black/5 bg-transparent sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <StaggerItem key={product.slug} className="h-full">
            <Link
              href={`/prodotti/${product.slug}`}
              className="group flex flex-col h-full bg-white"
            >
              <div className="aspect-[4/3] bg-warm-gray/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black-deep/0 group-hover:bg-black-deep/5 transition-all duration-500" />
              </div>
              <div className="p-3 sm:p-6 lg:p-8 flex-1">
                {product.brand && (
                  <span className="text-label text-black-deep/25">
                    {product.brand}
                  </span>
                )}
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

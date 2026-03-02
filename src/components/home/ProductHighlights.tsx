"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { MACRO_CATEGORIES } from "@/lib/constants";

const categoryImages: Record<string, string> = {

  "arredo-casa": "/images/Gemini_Generated_Image_3jexw73jexw73jex.png",
};

export function ProductHighlights() {
  return (
    <section className="pt-32 lg:pt-44 pb-0">
      <div className="px-6 sm:px-10 lg:px-20 flex justify-end">
        <FadeInView>
          <div className="text-right max-w-2xl">
            <p className="text-label text-black-deep/50 mb-4">
              I nostri prodotti
            </p>
            <h2 className="font-section-title text-black-deep">
              Qualità e design per ogni ambiente
            </h2>
          </div>
        </FadeInView>
      </div>

      {/* Full-width image grid */}
      <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {MACRO_CATEGORIES.map((cat, i) => (
          <FadeInView key={cat.id} delay={i * 0.1}>
            <Link href={`/prodotti?categoria=${cat.id}`} className="group relative block aspect-[3/4] overflow-hidden bg-black-soft">
              {/* Category image or placeholder */}
              {categoryImages[cat.id] ? (
                <Image
                  src={categoryImages[cat.id]}
                  alt={cat.label}
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="absolute inset-0 bg-warm-gray/10 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black-deep/10 via-transparent to-black-deep/80 group-hover:to-black-deep/90 transition-all duration-700" />

              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <span className="text-label text-white/40">
                  {cat.products.length} prodotti
                </span>
                <h3 className="mt-2 font-display text-[clamp(1.5rem,1.2rem+1.5vw,2.25rem)] font-bold text-white leading-tight">
                  {cat.label}
                </h3>
                <div className="mt-4 overflow-hidden h-0 group-hover:h-8 transition-all duration-500">
                  <span className="text-caption text-white/50 flex items-center gap-2">
                    Scopri
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}

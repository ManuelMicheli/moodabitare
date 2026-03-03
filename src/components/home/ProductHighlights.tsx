"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";
import { MACRO_CATEGORIES } from "@/lib/constants";

const categoryImages: Record<string, string> = {
  "cucine-arredobagno": "/images/Gemini_Generated_Image_3jexw73jexw73jex.png",
  "serramenti-porte": "/images/Gemini_Generated_Image_elyr5pelyr5pelyr_upscayl_4x_upscayl-standard-4x.png",
  "oscuranti-comfort": "/images/Gemini_Generated_Image_agqw18agqw18agqw_upscayl_4x_upscayl-standard-4x.png",
};

export function ProductHighlights() {
  return (
    <section className="relative pt-20 lg:pt-44 pb-0">
      {/*
        Full sticky wrapper — includes text AND cards.
        The title sticks inside this, passes over text (z-20 > z-10),
        then slides behind the cards (z-10 < z-30),
        and lands in the gap at the bottom (pb spacing).
      */}
      <div className="relative">
        {/* Giant title — sticky, highest z over text, lowest z under cards */}
        <h2
          className="sticky top-[28vh] sm:top-[32vh] z-20 text-center px-4 sm:px-6 font-display font-bold uppercase leading-[0.85] tracking-[-0.03em] text-black-deep pointer-events-none select-none whitespace-nowrap"
          style={{ fontSize: "clamp(0.9rem, 4.2vw, 9rem)" }}
        >
          <AccentText>Qualità e design per ogni ambiente</AccentText>
        </h2>

        {/* Label + editorial quote — z-10, title passes OVER this */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 pt-8 lg:pt-12 pb-16 lg:pb-24">
          <FadeInView>
            <p className="text-label text-black-deep/40 mb-8">
              I nostri prodotti
            </p>
            <p
              className="font-body text-black-deep/80 leading-relaxed"
              style={{ fontSize: "clamp(1.25rem, 1rem + 1.5vw, 2rem)" }}
            >
              Selezioniamo solo i <em>migliori</em> brand italiani ed europei
              — per offrire soluzioni che uniscono estetica, prestazioni
              e <em>durata</em> nel tempo.
            </p>
          </FadeInView>
        </div>

        {/* Product cards — z-30, title passes BEHIND these */}
        <div className="relative z-30 grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-8 sm:max-w-[75%] sm:mx-auto">
          {MACRO_CATEGORIES.map((cat, i) => (
            <FadeInView key={cat.id} delay={i * 0.08}>
              <Link
                href={`/prodotti?categoria=${cat.id}`}
                className="group block overflow-hidden bg-black-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-warm-gray">
                  {categoryImages[cat.id] ? (
                    <Image
                      src={categoryImages[cat.id]}
                      alt={cat.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-black-soft" />
                  )}
                </div>
                <div className="p-4 sm:p-5 lg:p-5">
                  <span className="text-label text-white/40">
                    {cat.products.length} prodotti
                  </span>
                  <h3 className="mt-1 font-card-title text-white">
                    {cat.label}
                  </h3>
                  <span className="flex items-center gap-1 text-[0.7rem] text-white/0 group-hover:text-white/60 transition-all duration-300 h-0 group-hover:h-5 group-hover:mt-3 overflow-hidden translate-x-2 group-hover:translate-x-0">
                    Scopri
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>

        {/* Gap — sized to match the title height so it fully emerges from behind cards */}
        <div
          className="relative z-0"
          style={{ height: "clamp(5rem, 4rem + 10vw, 13rem)" }}
        />
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeInView } from "@/components/animations/FadeInView";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { AccentText } from "@/components/ui/AccentText";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { BentoGrid } from "@/components/ui/bento-grid";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Serramenti & Portoncini",
    brands: ["Oknoplast", "Korus", "Pail"],
    description:
      "Infissi in PVC, alluminio e legno. Portoncini, persiane, frangisole e tapparelle.",
    image: "/images/wmremove-transformed (69).webp",
    href: "/prodotti?categoria=serramenti-oscuranti-portoncini",
    products: 8,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    from: { x: -120, y: 0 },
  },
  {
    name: "Casa & Arredo",
    brands: ["Arrex", "Merati", "Ali Parquet"],
    description: "Cucine su misura, arredo bagno, ceramiche e parquet.",
    image: "/moodabitarereal/casa-arredo.jpeg",
    href: "/prodotti?categoria=casa-arredo",
    products: 6,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    from: { x: 0, y: -80 },
  },
  {
    name: "Riscaldamento & Energie",
    brands: ["Haier", "Samsung", "Ariston"],
    description: "Climatizzatori, pompe di calore, caldaie e fotovoltaico.",
    image: "/moodabitarereal/climatizzatore-samsung.webp",
    href: "/prodotti?categoria=riscaldamento-energie-rinnovabili",
    products: 6,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    from: { x: 0, y: -80 },
  },
  {
    name: "Sistemi di Sicurezza",
    brands: ["Erreci", "Alias", "Ecomet", "Inim"],
    description: "Grate, persiane blindate, allarmi e videosorveglianza.",
    image: "/images/Gemini_Generated_Image_elyr5pelyr5pelyr-opt.jpg",
    href: "/prodotti?categoria=sistemi-sicurezza",
    products: 3,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    from: { x: 120, y: 0 },
  },
  {
    name: "Porte Interne & Blindate",
    brands: ["Pail", "Alias", "Erreci"],
    description: "Design made in Italy e sicurezza certificata.",
    image: "/moodabitarereal/porte-showroom.jpeg",
    href: "/prodotti?categoria=porte-interne-blindate",
    products: 2,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    from: { x: 120, y: 0 },
  },
  {
    name: "Outdoor",
    brands: ["Tendarredo", "Mc Slide", "Persit"],
    description: "Pergole, tende da sole, vetrate panoramiche e piscine.",
    image: "/moodabitarereal/outdoor-pergola.webp",
    href: "/prodotti?categoria=outdoor",
    products: 7,
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    from: { x: -120, y: 0 },
  },
  {
    name: "Comfort & Complementi",
    brands: ["Bettio", "Sharknet", "Grifoflex", "Sinfonia"],
    description: "Zanzariere, tende tecniche, scale e ringhiere.",
    image: "/moodabitarereal/comfort-complementi.jfif",
    href: "/prodotti?categoria=comfort-complementi",
    products: 3,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    from: { x: 120, y: 0 },
  },
];

export function ProductBentoGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>("[data-card]");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    cards.forEach((card) => {
      const fromX = parseFloat(card.dataset.fromX || "0");
      const fromY = parseFloat(card.dataset.fromY || "0");
      const delay = parseFloat(card.dataset.delay || "0");

      gsap.set(card, {
        opacity: 0,
        x: isMobile ? 0 : fromX,
        y: isMobile ? 40 : fromY,
      });

      gsap.to(card, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.65,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          once: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll()
        .filter((t) => grid.contains(t.trigger as Element))
        .forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative pt-16 lg:pt-24 pb-0">
      <div className="relative">
        {/* Section title */}
        <h2
          className="text-center px-4 sm:px-6 font-display font-bold uppercase leading-[0.9] tracking-[-0.03em] text-black-deep whitespace-nowrap"
          style={{ fontSize: "clamp(1.15rem, 5.2vw, 9rem)" }}
        >
          <TextShimmer
            duration={4}
            spread={2}
            textLength={35}
            shimmerColor="#f5f5f0"
          >
            <AccentText>Qualità e design per ogni ambiente</AccentText>
          </TextShimmer>
        </h2>

        {/* Subtitle */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 sm:px-10 lg:px-20 pt-8 lg:pt-12 pb-16 lg:pb-24">
          {/* Decorative background text — full viewport width behind subtitle */}
          <div
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none -left-[50vw] -right-[50vw]"
            aria-hidden="true"
          >
            <span
              className="font-display font-bold text-black-deep/[0.04] leading-none block whitespace-nowrap"
              style={{ fontSize: "clamp(3.5rem, 10vw, 18rem)" }}
            >
              Mood Abitare
            </span>
          </div>
          <FadeInView>
            <p className="text-label text-black-deep/60 mb-8">
              I nostri prodotti
            </p>
            <p
              className="font-body text-black-deep/80 leading-relaxed max-w-[16rem] sm:max-w-none mx-auto sm:mx-0"
              style={{ fontSize: "clamp(1.25rem, 1rem + 1.5vw, 2rem)" }}
            >
              Selezioniamo solo i <em>migliori</em> brand italiani ed europei
              — per offrire soluzioni che uniscono estetica, prestazioni
              e <em>durata</em> nel tempo.
            </p>
          </FadeInView>
        </div>

        {/* Mobile cards — 50/50 split: text left, image right */}
        <div className="relative z-30 flex flex-col gap-3 px-4 md:hidden">
          {products.map((product, i) => (
            <FadeInView key={product.name} delay={i * 0.06}>
              <Link
                href={product.href}
                className="group flex overflow-hidden rounded-xl h-44 bg-cream border border-warm-gray/60"
              >
                {/* Left — text */}
                <div className="flex-1 flex flex-col justify-between p-4">
                  <div>
                    <span className="text-[0.6rem] font-ui font-medium uppercase tracking-wider text-black-deep/40">
                      {product.products} prodotti
                    </span>
                    <h3 className="font-card-title text-black-deep mt-0.5 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-[0.7rem] font-body text-black-deep/60 mt-1 leading-snug line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[0.6rem] font-ui font-medium uppercase tracking-wider text-bordeaux/70">
                      Scopri
                    </span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-bordeaux/70 transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                {/* Right — image */}
                <div className="relative w-[45%] flex-shrink-0 overflow-hidden">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="45vw"
                    />
                  )}
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>

        {/* Desktop bento grid — GSAP ScrollTrigger */}
        <div className="relative z-30 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:max-w-none lg:px-4">
            <BentoGrid ref={gridRef} className="grid-cols-2 lg:grid-cols-3 auto-rows-[20rem] lg:auto-rows-[22rem]">
              {products.map((product, i) => (
                <div
                  key={product.name}
                  data-card
                  data-from-x={product.from.x}
                  data-from-y={product.from.y}
                  data-delay={i * 0.12}
                  className={`${product.className} h-full`}
                >
                  <Link
                    href={product.href}
                    className="group relative flex flex-col justify-end overflow-hidden rounded-xl h-full bg-black-soft"
                  >
                    {"images" in product && product.images ? (
                      <div className="absolute inset-0 grid grid-cols-3 h-full">
                        {(product.images as string[]).map((src, j) => (
                          <div key={j} className="relative h-full">
                            <Image
                              src={src}
                              alt={`${product.name} ${j + 1}`}
                              fill
                              className="object-cover"
                              sizes="11vw"
                            />
                          </div>
                        ))}
                      </div>
                    ) : product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    <div className="pointer-events-none relative z-10 flex flex-col justify-end h-full p-5 sm:p-6">
                      <span className="text-label text-white/70 mb-1">
                        {product.products} prodotti
                      </span>
                      <h3 className="font-card-title text-white">
                        {product.name}
                      </h3>
                      <p className="text-caption text-white/80 mt-1 max-w-[30ch]">
                        {product.description}
                      </p>
                      <div className="flex items-end justify-between mt-3">
                        <div className="flex flex-wrap gap-1.5">
                          {product.brands.map((brand) => (
                            <span
                              key={brand}
                              className="text-[0.6rem] sm:text-[0.65rem] font-ui font-medium uppercase tracking-wider text-white/90 border border-white/20 rounded-full px-2.5 py-0.5"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                        <span className="flex-shrink-0 ml-3 flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/60 group-hover:bg-white group-hover:text-black-deep group-hover:border-white transition-all duration-300">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </BentoGrid>
          </div>

          {/* CTA */}
          <FadeInView delay={0.5}>
            <div className="mt-10 text-center">
              <MagneticButton as="span">
                <Link
                  href="/prodotti"
                  className="inline-flex items-center gap-2 text-button text-black-deep/60 hover:text-black-deep transition-colors"
                >
                  Vedi tutti i prodotti
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </MagneticButton>
            </div>
          </FadeInView>

        </div>

        <div
          className="relative z-0"
          style={{ height: "clamp(2rem, 1.5rem + 3vw, 5rem)" }}
        />
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";
import { BentoGrid } from "@/components/ui/bento-grid";

const products = [
  {
    name: "Finestre in PVC",
    brand: "Oknoplast",
    description:
      "Serramenti a 5 e 7 camere con isolamento termico e acustico superiore. Risparmio in bolletta tutto l\u2019anno.",
    image: "/images/wmremove-transformed (69).png",
    href: "/prodotti/finestre-pvc-oknoplast",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    name: "Porte Interne",
    brand: "Bertolotto",
    description: "Design made in Italy dal 1967, qualità artigianale.",
    image: "/images/bertolotto.webp",
    href: "/prodotti/porte-interne-bertolotto",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Portoncini in Alluminio",
    brand: "Oknoplast",
    description: "Ingresso unico, sicurezza RC2 di serie.",
    image: "/images/Bilico_antracite-eff-legno_FINAL.jpg",
    href: "/prodotti/portoncini-alluminio-oknoplast",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Cucine su Misura",
    brand: "Cucinesse",
    description: "Progettazione e realizzazione cucine personalizzate.",
    image: "/images/Gemini_Generated_Image_3jexw73jexw73jex.jpg",
    href: "/prodotti/cucine-cucinesse",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    name: "Porte Blindate",
    brand: "Alias",
    description: "Sicurezza certificata, design italiano.",
    image: "/images/Alias-home.jpg",
    href: "/prodotti/porte-blindate-alias",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
];

export function ProductBentoGrid() {
  return (
    <section className="relative pt-16 lg:pt-24 pb-0">
      <div className="relative">
        {/* Section title */}
        <h2
          className="text-center px-4 sm:px-6 font-display font-bold uppercase leading-[0.85] tracking-[-0.03em] text-black-deep sm:whitespace-nowrap"
          style={{ fontSize: "clamp(1.75rem, 4.2vw, 9rem)" }}
        >
          <AccentText>Qualità e design per ogni ambiente</AccentText>
        </h2>

        {/* Subtitle */}
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

        {/* Bento grid */}
        <div className="relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:max-w-none lg:px-4">
            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[18rem] md:auto-rows-[20rem] lg:auto-rows-[22rem]">
              {products.map((product, i) => (
                <FadeInView
                  key={product.name}
                  delay={i * 0.08}
                  className={`${product.className} h-full`}
                >
                  <Link
                    href={product.href}
                    className="group relative flex flex-col justify-end overflow-hidden rounded-xl h-full bg-black-soft"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="pointer-events-none relative z-10 flex flex-col gap-1 p-5 sm:p-6 transition-all duration-300 group-hover:-translate-y-10">
                      <span className="text-label text-white/50">
                        {product.brand}
                      </span>
                      <h3 className="font-card-title text-white mt-1">
                        {product.name}
                      </h3>
                      <p className="text-caption text-white/60 mt-1 max-w-[30ch]">
                        {product.description}
                      </p>
                    </div>
                    <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="pointer-events-auto text-button text-white/80 inline-flex items-center gap-2">
                        Scopri
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </BentoGrid>
          </div>

          {/* CTA */}
          <FadeInView delay={0.4}>
            <div className="mt-10 text-center">
              <Link
                href="/prodotti"
                className="inline-flex items-center gap-2 text-button text-black-deep/60 hover:text-black-deep transition-colors"
              >
                Vedi tutti i prodotti
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
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

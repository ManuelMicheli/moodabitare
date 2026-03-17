"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { FadeInView } from "@/components/animations/FadeInView";
import { useIsMobile } from "@/hooks/useIsMobile";

function ParallaxImage({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const el = containerRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;
        const progress = 1 - (rect.bottom / (windowH + rect.height));
        const offset = (progress - 0.5) * 30;
        img.style.transform = `translateY(${offset}%) scale(1.3)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <FadeInView delay={delay} className={className}>
      <div
        ref={containerRef}
        className="relative h-full min-h-[220px] overflow-hidden bg-warm-gray"
      >
        <div
          ref={imgRef}
          className="absolute inset-0 will-change-transform"
          style={{ transform: isMobile ? "none" : "translateY(0%) scale(1.3)" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </FadeInView>
  );
}

export function EditorialShowcase() {
  return (
    <section className="py-0">
      {/* Row 1: Image (4) | Text (4) | Image (4) */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* R1 — Photo left */}
        <FadeInView className="md:col-span-4">
          <div className="relative aspect-[2/1] overflow-hidden bg-warm-gray">
            <Image
              src="/images/Bilico_antracite-eff-legno_FINAL.jpg"
              alt="Portoncino d'ingresso in alluminio effetto legno"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </FadeInView>

        {/* R1 — Text center */}
        <FadeInView delay={0.1} className="md:col-span-4">
          <Link
            href="/prodotti/finestre-pvc-oknoplast"
            className="group flex flex-col items-center justify-center text-center h-full px-5 sm:px-8 lg:px-10 py-8 sm:py-10 bg-cream"
          >
            <h3 className="font-section-title text-black-deep">
              Simmetria e risparmio energetico
            </h3>
            <p className="mt-4 text-caption text-mid-gray leading-relaxed max-w-[28ch]">
              Finestre in PVC a 5 e 7 camere con trasmittanza fino a 0,73 W/m²K. Isolamento termico e acustico, risparmio in bolletta tutto l&apos;anno.
            </p>
            <span className="mt-5 text-button text-black-deep/40 group-hover:text-black-deep transition-colors">
              Scopri
            </span>
          </Link>
        </FadeInView>

        {/* R1 — Photo right */}
        <FadeInView delay={0.2} className="md:col-span-4">
          <div className="relative aspect-[2/1] overflow-hidden bg-warm-gray">
            <Image
              src="/images/Ekosol-frangisole_Grigio-scuro-soft_FINAL (1).jpg"
              alt="Frangisole Ekosol grigio scuro"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </FadeInView>
      </div>

      {/* Row 2: Text (3) | Wide Photo (6) | Text (3) */}
      <div className="grid grid-cols-1 md:grid-cols-12 mt-8 sm:mt-16 lg:mt-24">
        {/* R2 — Text left */}
        <FadeInView delay={0.15} className="md:col-span-3">
          <Link
            href="/prodotti/finestre-pvc-oknoplast"
            className="group flex flex-col justify-center h-full px-5 sm:px-8 lg:px-10 py-8 sm:py-10 bg-cream"
          >
            <h3 className="font-section-title text-black-deep">
              Luce naturale e design moderno
            </h3>
            <p className="mt-4 text-caption text-mid-gray leading-relaxed">
              Porte-finestre scorrevoli e alzanti scorrevoli Oknoplast: ampie superfici vetrate che eliminano la barriera tra interno ed esterno.
            </p>
            <span className="mt-5 text-button text-black-deep/40 group-hover:text-black-deep transition-colors">
              Scopri
            </span>
          </Link>
        </FadeInView>

        {/* R2 — Wide photo center with parallax */}
        <ParallaxImage
          src="/images/Gemini_Generated_Image_ykx5j2ykx5j2ykx5.jpg"
          alt="Ambiente moderno con serramenti Oknoplast"
          className="md:col-span-6"
          delay={0.25}
        />

        {/* R2 — Text right */}
        <FadeInView delay={0.3} className="md:col-span-3">
          <Link
            href="/prodotti/portoncini-alluminio-oknoplast"
            className="group flex flex-col items-end text-right justify-center h-full px-5 sm:px-8 lg:px-10 py-8 sm:py-10 bg-cream"
          >
            <h3 className="font-section-title text-black-deep">
              Tanti modelli per un ingresso unico
            </h3>
            <p className="mt-4 text-caption text-mid-gray leading-relaxed max-w-[30ch]">
              Portoncini d&apos;ingresso in alluminio Oknoplast, personalizzabili in finiture, colori e accessori. Classe antieffrazione RC2 di serie.
            </p>
            <span className="mt-5 text-button text-black-deep/40 group-hover:text-black-deep transition-colors">
              Scopri
            </span>
          </Link>
        </FadeInView>
      </div>

      {/* Bottom row — Testimonial + Bertolotto spotlight */}
      <div className="grid grid-cols-1 md:grid-cols-12 -mt-px">
        {/* Testimonial */}
        <FadeInView className="md:col-span-5" delay={0.2}>
          <div className="relative h-full min-h-[300px] md:min-h-[500px] bg-bordeaux flex flex-col justify-center px-5 sm:px-8 md:px-12 py-8 sm:py-12">
            {/* Large quote mark */}
            <div
              className="font-display text-white/15 leading-none select-none absolute top-6 left-5 sm:left-8 md:left-12"
              style={{ fontSize: "clamp(4rem, 3rem + 3vw, 6rem)" }}
            >
              &ldquo;
            </div>

            <blockquote className="relative z-10 mt-8">
              <p className="text-body text-white/90 italic leading-relaxed">
                Le porte Bertolotto sono arte e propria creazione.
                Il bello è anche incontrare con oggetti
                effettivi e di design come queste porte, che offrono
                una pura esperienza della qualità made in Italy.
              </p>
              <footer className="mt-6">
                <div className="h-px w-10 bg-cream/30 mb-4" />
                <cite className="text-label text-white/50 not-italic">
                  Esperienza in showroom
                </cite>
              </footer>
            </blockquote>
          </div>
        </FadeInView>

        {/* Bertolotto spotlight */}
        <FadeInView className="md:col-span-7" delay={0.3}>
          <Link href="/prodotti/porte-interne-bertolotto" className="group block">
            <div className="relative h-full min-h-[300px] md:min-h-[500px] bg-black-deep overflow-hidden">
              {/* Background image — subtle */}
              <Image
                src="/images/bertolotto.webp"
                alt="Porte interne Bertolotto"
                fill
                className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-14 py-8 sm:py-12">
                <p className="text-label text-white/40 mb-4">
                  Porte Interne
                </p>
                <h3 className="font-section-title text-white max-w-lg">
                  Bertolotto, le tue porte interne made in Italy
                </h3>
                <p className="mt-5 text-body text-white/60 max-w-md">
                  Affidati a Mood Abitare per scegliere le tue nuove porte interne in provincia di Varese.
                  Bertolotto, azienda piemontese che dal 1967 progetta e realizza porte d&apos;interni di alta qualità,
                  unisce artigianalità italiana e innovazione.
                </p>
                <div className="mt-6">
                  <span className="text-button text-white/70 group-hover:text-white transition-colors inline-flex items-center gap-2">
                    Scopri la collezione
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </FadeInView>
      </div>
    </section>
  );
}

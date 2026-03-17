"use client";

import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";
import { ShowroomBanner } from "@/components/home/ShowroomBanner";

const projects = [
  { title: "Villa Moderna a Varese", category: "Serramenti" },
  { title: "Appartamento Contemporaneo", category: "Serramenti" },
  { title: "Residenza di Lusso", category: "Serramenti" },
  { title: "Zona Giorno con Prolux Evolution", category: "Porte finestre" },
  { title: "Loft Industriale", category: "Serramenti" },
];

export function PortfolioGallery() {
  return (
    <section className="py-20 lg:py-44">
      <div className="px-6 sm:px-10 lg:px-20">
        <div className="text-center mb-10 lg:mb-24">
          <FadeInView>
            <p className="text-label text-black-deep/50 mb-6">
              I nostri progetti
            </p>
            <h2
              className="font-display font-bold uppercase leading-[0.85] tracking-[-0.03em] text-black-deep"
              style={{ fontSize: "clamp(2rem, 1.2rem + 5vw, 5.5rem)" }}
            >
              <AccentText>Lavori realizzati</AccentText>
            </h2>
          </FadeInView>
          <FadeInView delay={0.2}>
            <Link
              href="/progetti"
              className="text-button inline-block text-black-deep border-b border-black-deep/20 pb-1 hover:border-black-deep transition-colors mt-8"
            >
              Vedi tutti i progetti
            </Link>
          </FadeInView>
        </div>

        {/* Top row — 3 equal cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {projects.slice(0, 3).map((project, i) => (
            <FadeInView key={i} delay={0.1 * i}>
              <div className="relative aspect-[4/3] overflow-hidden bg-warm-gray flex items-center justify-center">
                <span className="text-mid-gray/40 font-ui text-sm uppercase tracking-widest">{project.category}</span>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Bottom row — 2 cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6 mt-4 lg:mt-6">
          {projects.slice(3, 5).map((project, i) => (
            <FadeInView key={i} delay={0.1 * (i + 3)}>
              <div className="relative aspect-[16/10] overflow-hidden bg-warm-gray flex items-center justify-center">
                <span className="text-mid-gray/40 font-ui text-sm uppercase tracking-widest">{project.category}</span>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Showroom card */}
        <div className="mt-4 lg:mt-6">
          <ShowroomBanner />
        </div>
      </div>
    </section>
  );
}

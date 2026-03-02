"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";

const projects = [
  { title: "Villa Moderna a Varese", category: "Serramenti", image: "/images/Squareline_Tapparella_Vista_Ext_FINAL.jpg" },
  { title: "Zona Giorno con Prolux Evolution", category: "Porte finestre", image: "/images/Zona-giorno-con-porta-balcone-Prolux-Evolution-copia-1536x768.jpg" },
  { title: "Residenza di Lusso", category: "Serramenti", image: "/images/Prolux-17.jpg" },
];

export function PortfolioGallery() {
  return (
    <section className="py-32 lg:py-44">
      <div className="px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <FadeInView>
            <p className="text-label text-black-deep/50 mb-4">
              I nostri progetti
            </p>
            <h2 className="font-section-title text-black-deep">
              Lavori realizzati
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <Link
              href="/progetti"
              className="text-button inline-block text-black-deep border-b border-black-deep/20 pb-1 hover:border-black-deep transition-colors"
            >
              Vedi tutti i progetti
            </Link>
          </FadeInView>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
          {/* Large left */}
          <FadeInView className="lg:col-span-7">
            <div className="relative aspect-[4/3] lg:aspect-[16/12] overflow-hidden bg-warm-gray">
              <Image
                src={projects[0].image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </FadeInView>

          {/* Right stack */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 lg:gap-6">
            {projects.slice(1, 3).map((project, i) => (
              <FadeInView key={i} delay={0.1 * (i + 1)}>
                <div className="relative aspect-[16/10] overflow-hidden bg-warm-gray">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

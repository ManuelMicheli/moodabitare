"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FadeInView } from "@/components/animations/FadeInView";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Marco R.",
    location: "Gorla Maggiore",
    text: "Professionalità e competenza. Ci hanno seguito dalla scelta dei serramenti fino all'installazione. Risultato eccellente.",
    projectType: "Sostituzione serramenti",
  },
  {
    name: "Laura B.",
    location: "Busto Arsizio",
    text: "Showroom bellissimo con tanti prodotti esposti. Consulenza impeccabile e preventivo dettagliato. Molto soddisfatta.",
    projectType: "Porte interne",
  },
  {
    name: "Giuseppe M.",
    location: "Castellanza",
    text: "Abbiamo ristrutturato casa con Mood Abitare. Un unico referente per tutto, dalla progettazione allo smaltimento dei vecchi infissi. Consigliatissimi!",
    projectType: "Ristrutturazione completa",
  },
  {
    name: "Francesca D.",
    location: "Varese",
    text: "Ottima esperienza con le finestre Oknoplast. Grande risparmio energetico e assistenza post-vendita impeccabile.",
    projectType: "Finestre PVC",
  },
];

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-32 lg:py-44 border-t border-black/5">
      <div className="px-6 sm:px-10 lg:px-20">
        <FadeInView>
          <p className="text-label text-black-deep/50 mb-4">
            Testimonianze
          </p>
          <h2 className="font-section-title text-black-deep mb-16 lg:mb-24">
            Cosa dicono i nostri clienti
          </h2>
        </FadeInView>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pr-6 lg:pr-10">
                <div className="h-full">
                  <div className="h-px w-12 bg-black-deep mb-8" />
                  <p className="text-body text-black-deep/60 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-8">
                    <p className="font-display text-[clamp(0.875rem,0.85rem+0.15vw,1rem)] font-medium text-black-deep tracking-wide">
                      {t.name}
                    </p>
                    <p className="mt-1 text-caption text-black-deep/50">
                      {t.location} — {t.projectType}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal line indicators */}
        <div className="mt-12 lg:mt-16 flex gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-px transition-all duration-500",
                i === selectedIndex ? "w-12 bg-black-deep" : "w-6 bg-black-deep/15"
              )}
              aria-label={`Testimonianza ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

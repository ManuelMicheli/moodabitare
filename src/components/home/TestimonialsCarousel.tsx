"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FadeInView } from "@/components/animations/FadeInView";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Anna Forziati",
    location: "Gorla Maggiore",
    text: "Consiglio questa ditta, ci siamo trovati benissimo con i lavori di ristrutturazione. Molto professionali e gentili.",
    projectType: "Ristrutturazione",
  },
  {
    name: "Gigi Barbi",
    location: "Varese",
    text: "Impresa consigliatissima, ristrutturazione completa di un appartamento in condominio al terzo piano — impianti, infissi, pavimenti, insomma tutto. Nessun tipo di problema, hanno gestito loro tutte le pratiche. Oltretutto, hanno presentato il preventivo più basso dei concorrenti!",
    projectType: "Ristrutturazione completa",
  },
  {
    name: "Francesco Cazzaniga",
    location: "Provincia di Varese",
    text: "5 stelle per la professionalità, Carmine e il team sempre disponibili e attenti alle esigenze del cliente. Consigliatissimo.",
    projectType: "Serramenti",
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
              <div key={i} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pr-6 sm:pr-8 lg:pr-10">
                <div className="h-full">
                  <div className="h-px w-12 bg-black-deep mb-8" />
                  <p className="text-body text-black-deep/60 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-8">
                    <p className="font-card-title text-black-deep">
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

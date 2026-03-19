"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextRevealByWord } from "@/components/animations/TextRevealByWord";
import { DrawLine } from "@/components/animations/DrawLine";
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
    <section className="py-20 lg:py-44 border-t border-black/5">
      <div className="px-6 sm:px-10 lg:px-20">
        <div className="mb-10 lg:mb-24">
          <FadeInView>
            <p className="text-label text-black-deep/50 mb-4">
              Testimonianze
            </p>
          </FadeInView>
          <TextRevealByWord
            as="h2"
            className="font-section-title text-black-deep"
            stagger={0.05}
          >
            Cosa dicono i nostri clienti
          </TextRevealByWord>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pr-6 sm:pr-8 lg:pr-10">
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {/* Animated quote mark */}
                  <motion.div
                    className="font-display text-bordeaux/10 leading-none select-none mb-4"
                    style={{ fontSize: "clamp(2.5rem, 2rem + 2vw, 4rem)" }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                  >
                    &ldquo;
                  </motion.div>

                  <DrawLine className="!w-12 !bg-black-deep mb-6" delay={i * 0.15} />

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
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal line indicators with smooth animation */}
        <div className="mt-12 lg:mt-16 flex gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center group"
              aria-label={`Testimonianza ${i + 1}`}
            >
              <span className="relative block h-px overflow-hidden" style={{ width: i === selectedIndex ? 48 : 24 }}>
                <span
                  className={cn(
                    "absolute inset-0 transition-all duration-500",
                    i === selectedIndex ? "bg-black-deep" : "bg-black-deep/15 group-hover:bg-black-deep/30"
                  )}
                />
                {i === selectedIndex && (
                  <motion.span
                    className="absolute inset-0 bg-bordeaux/40"
                    layoutId="testimonial-indicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

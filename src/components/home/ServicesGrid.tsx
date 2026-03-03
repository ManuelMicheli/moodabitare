"use client";

import { SERVICES } from "@/lib/constants";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-44 border-t border-black/5">
      {/* Heading top */}
      <div className="px-6 sm:px-10 lg:px-20">
        <FadeInView>
          <p className="text-label text-black-deep/50 mb-4">
            I nostri servizi
          </p>
          <h2 className="font-section-title text-black-deep">
            Dalla consulenza
            <br />
            alla posa in opera
          </h2>
          <p className="mt-6 text-body text-black-deep/50 max-w-lg">
            Un servizio completo e professionale per ogni esigenza della tua casa. Un unico referente, dalla progettazione allo smaltimento.
          </p>
        </FadeInView>
      </div>

      {/* Cards — 6 in fila, full-width */}
      <StaggerContainer className="mt-16 lg:mt-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" staggerDelay={0.08}>
        {SERVICES.map((service, i) => (
          <StaggerItem key={service.title}>
            <div className="relative aspect-[3/4] overflow-hidden bg-warm-gray/15 group cursor-pointer">
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-b from-black-deep/5 via-transparent to-black-deep/70 group-hover:to-black-deep/80 transition-all duration-700" />

              {/* Content overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <span className="text-label text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-[clamp(1rem,0.9rem+0.5vw,1.25rem)] font-medium text-white tracking-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

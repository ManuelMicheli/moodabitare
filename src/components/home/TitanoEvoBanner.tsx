"use client";

import Image from "next/image";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";

const features = [
  "Simmetria perfetta",
  "Maniglia tono su tono",
  "Design minimal",
  "Vetri extra-light",
  "Profilo a scomparsa",
];

export function TitanoEvoBanner() {
  return (
    <section className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 lg:pb-0">
      {/* Section subtitle + main title — above banner */}
      <div className="text-center mb-8 sm:mb-10 px-6">
        <FadeInView>
          <p className="font-ui text-xs sm:text-sm font-medium text-bordeaux tracking-[0.25em] uppercase mb-4 sm:mb-5">
            <AccentText>Novità Oknoplast</AccentText>
          </p>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h2
            className="font-display font-bold text-black-deep uppercase leading-none tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.2rem, 1.5rem + 3.5vw, 5rem)" }}
          >
            Titano <span className="text-bordeaux">EVO OC</span>
          </h2>
        </FadeInView>
      </div>

      {/* Banner full width — features left, image right */}
      <div className="relative bg-black-soft overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10 md:px-16">
          <div className="grid grid-cols-2 items-center gap-4 sm:gap-6 lg:gap-12">
            {/* Left — Feature list */}
            <div className="flex justify-end py-8 sm:py-10 lg:py-12">
              <FadeInView delay={0.2}>
                <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 sm:gap-4">
                      <span className="w-4 sm:w-6 lg:w-8 h-[2px] bg-white shrink-0" />
                      <span
                        className="font-display text-white/60 uppercase tracking-[0.08em]"
                        style={{ fontSize: "clamp(0.65rem, 0.55rem + 0.4vw, 1.1rem)" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </FadeInView>
            </div>

            {/* Right — Product image */}
            <div className="relative flex items-center justify-center lg:justify-start py-6 lg:py-10">
              <FadeInView delay={0.2}>
                <div className="relative w-[140px] h-[160px] sm:w-[220px] sm:h-[250px] md:w-[320px] md:h-[350px] lg:w-[340px] lg:h-[370px] xl:w-[380px] xl:h-[410px]">
                  <Image
                    src="/images/titano-evo-oc-eletto-prodotto-2024_copia-removebg-preview.png"
                    alt="Titano EVO OC — Eletto Prodotto dell'Anno 2024"
                    fill
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 8px 40px rgba(0,0,0,0.12))",
                    }}
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, (max-width: 1024px) 360px, 440px"
                  />
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";

export function PremiumPartnerBanner() {
  return (
    <section className="relative h-[75vh] min-h-[500px] flex items-end justify-end text-white overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/Oknoplast-azienda-vista-aerea 1.png"
        alt="Oknoplast azienda vista aerea"
        fill
        className="object-cover"
        quality={85}
        priority={false}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-black-deep/85 via-black-deep/50 to-transparent" />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 pb-12 lg:pb-16">
        <div className="flex flex-col items-end text-right">
          <FadeInView>
            <p className="text-label text-white/50 mb-4">
              Premium Partner Oknoplast
            </p>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="font-section-title text-white">
              Il partner ideale
              <br />
              per la tua casa
            </h2>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="mt-5 text-body text-white/60 max-w-md">
              Moschiano Srl è stata selezionata come Premium Partner Oknoplast per la provincia di Varese.
              Una ristretta rete di operatori che garantisce qualità ed eccellenza.
            </p>
          </FadeInView>

          {/* Stats row */}
          <FadeInView delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-8 lg:gap-10">
              {[
                { value: "30+", label: "Anni di esperienza" },
                { value: "100%", label: "PVC riciclabile" },
                { value: "RC2", label: "Classe antieffrazione" },
                { value: "A+", label: "Efficienza energetica" },
              ].map((item) => (
                <div key={item.label} className="text-right">
                  <div className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-white leading-none">
                    {item.value}
                  </div>
                  <div className="mt-3 h-px w-8 bg-white/20 ml-auto" />
                  <p className="mt-3 text-caption text-white/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInView>

          <FadeInView delay={0.4}>
            <div className="mt-8">
              <Link
                href="/premium-partner"
                className="text-button inline-block bg-white text-black-deep px-8 py-4 hover:bg-white/85 transition-colors"
              >
                Scopri i vantaggi
              </Link>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}

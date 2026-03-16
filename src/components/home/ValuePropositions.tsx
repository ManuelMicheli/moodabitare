"use client";

import Image from "next/image";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { FadeInView } from "@/components/animations/FadeInView";
import { AboutSection } from "@/components/home/AboutSection";
import { VALUE_PROPOSITIONS } from "@/lib/constants";

export function ValuePropositions() {
  return (
    <section>
      {/* Image */}
      <div className="relative h-[56vw] sm:h-[70vh] overflow-hidden">
        <Image
          src="/images/Home-bertolotto-opt.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* About — scroll-reveal text */}
      <AboutSection />

      {/* Title + Stats */}
      <div className="py-12 lg:py-16 px-6 sm:px-10 lg:px-20">
        {/* Mobile layout */}
        <div className="lg:hidden">
          <FadeInView>
            <div className="text-center mb-10">
              <p className="text-label text-black-deep/40 mb-3">
                I numeri che ci definiscono
              </p>
              <h2 className="font-section-title text-black-deep">
                La nostra esperienza in cifre
              </h2>
            </div>
          </FadeInView>
          <div className="grid grid-cols-2 gap-y-8 gap-x-6">
            {VALUE_PROPOSITIONS.map((item, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold leading-none text-black-deep">
                    <AnimatedCounter target={item.number} suffix={item.suffix} />
                  </div>
                  <div className="mt-2 h-px w-8 bg-bordeaux/30 mx-auto" />
                  <p className="text-caption text-black-deep/50 mt-2">
                    {item.label}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:divide-x lg:divide-black/10">
          <FadeInView>
            <div className="pr-10">
              <p className="text-label text-black-deep/40 mb-4">
                I numeri che ci definiscono
              </p>
              <h2 className="font-section-title text-black-deep">
                La nostra esperienza in cifre
              </h2>
            </div>
          </FadeInView>
          {VALUE_PROPOSITIONS.map((item, i) => (
            <FadeInView key={i} delay={i * 0.15}>
              <div className="px-10 last:pr-0 text-left">
                <div className="font-display text-[clamp(2.5rem,4vw,4rem)] font-bold leading-none text-black-deep">
                  <AnimatedCounter target={item.number} suffix={item.suffix} />
                </div>
                <div className="mt-3 h-px w-10 bg-black-deep/15" />
                <p className="text-caption text-black-deep/50 mt-3">
                  {item.label}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>

    </section>
  );
}

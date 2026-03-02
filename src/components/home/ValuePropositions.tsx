"use client";

import Image from "next/image";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { FadeInView } from "@/components/animations/FadeInView";
import { VALUE_PROPOSITIONS } from "@/lib/constants";

export function ValuePropositions() {
  return (
    <section>
      {/* Image */}
      <div className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/images/Home-bertolotto.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Title + Stats — single row below image */}
      <div className="py-12 lg:py-16 px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x lg:divide-black/10">
          {/* Title */}
          <FadeInView>
            <div className="col-span-2 lg:col-span-1 lg:pr-10">
              <p className="text-label text-black-deep/40 mb-4">
                I numeri che ci definiscono
              </p>
              <h2 className="font-display text-[clamp(1.5rem,2vw,2rem)] font-bold leading-tight text-black-deep">
                La nostra esperienza in cifre
              </h2>
            </div>
          </FadeInView>

          {/* Stats */}
          {VALUE_PROPOSITIONS.map((item, i) => (
            <FadeInView key={i} delay={i * 0.15}>
              <div className="lg:px-10 last:lg:pr-0 text-center lg:text-left">
                <div className="font-display text-[clamp(2.5rem,4vw,4rem)] font-bold leading-none text-black-deep">
                  <AnimatedCounter target={item.number} suffix={item.suffix} />
                </div>
                <div className="mt-3 h-px w-10 bg-black-deep/15 mx-auto lg:mx-0" />
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

"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AccentText } from "@/components/ui/AccentText";
import { useIsMobile } from "@/hooks/useIsMobile";
import { FadeInView } from "@/components/animations/FadeInView";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export function StackingTimeline({ items }: { items: TimelineItem[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile(1024);

  useEffect(() => {
    if (isMobile) return;

    const wrapper = wrapperRef.current;
    const pinned = pinnedRef.current;
    if (!wrapper || !pinned) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const total = cards.length;

    // Initially hide all cards except the first
    cards.forEach((card, i) => {
      if (i > 0) {
        gsap.set(card, { yPercent: 100, opacity: 0 });
      }
    });

    // Pin the whole section for (total - 1) card transitions
    const mainTrigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: `+=${(total - 1) * 100}%`,
      pin: pinned,
      pinSpacing: true,
      scrub: true,
      animation: buildTimeline(cards, total),
    });

    function buildTimeline(cards: HTMLDivElement[], total: number) {
      const tl = gsap.timeline();

      for (let i = 1; i < total; i++) {
        // Slide new card up from below
        tl.to(
          cards[i],
          { yPercent: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
          (i - 1) * 1.2
        );
        // Slightly push previous card down and fade
        tl.to(
          cards[i - 1],
          { scale: 0.95, opacity: 0.3, duration: 1, ease: "power2.inOut" },
          (i - 1) * 1.2
        );
      }

      return tl;
    }

    return () => {
      mainTrigger.kill();
    };
  }, [items, isMobile]);

  return (
    <div ref={wrapperRef} className="bg-black-deep">
      <div ref={pinnedRef} className={`${isMobile ? "" : "min-h-screen"} flex flex-col text-white`}>
        {/* Header */}
        <div className="pt-20 lg:pt-28 pb-10 lg:pb-16 px-6 sm:px-10 lg:px-20 text-center flex-shrink-0">
          <p className="text-label text-white/20 mb-5">Il nostro percorso</p>
          <h2 className="font-section-title">
            <AccentText>Il nostro cammino, insieme a voi</AccentText>
          </h2>
        </div>

        {/* Card area */}
        {isMobile ? (
          /* Mobile: vertical timeline */
          <div className="relative pl-8 px-6 pb-12">
            {/* Vertical timeline line */}
            <div className="absolute left-[calc(1.5rem+7px)] top-2 bottom-2 w-px bg-white/8" />

            {items.map((item, i) => (
              <FadeInView key={item.year} delay={i * 0.08}>
                <div className="relative mb-6">
                  {/* Dot marker */}
                  <div className="absolute -left-8 top-2 w-2.5 h-2.5 rounded-full bg-bordeaux border-2 border-black-deep" />

                  {/* Card */}
                  <div className="bg-black-soft border border-white/6 px-5 py-6 rounded-lg">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-display font-bold text-white/15 text-xl">{item.year}</span>
                      <h3 className="font-display font-medium text-white text-base">{item.title}</h3>
                    </div>
                    <p className="text-caption text-white/35">{item.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        ) : (
          /* Desktop: GSAP-powered stacking cards */
          <div className="flex-1 relative px-6 sm:px-10 lg:px-20 pb-12 lg:pb-20">
            <div className="relative h-full max-w-5xl mx-auto">
              {items.map((item, i) => (
                <div
                  key={item.year}
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className="absolute inset-0 flex items-center"
                >
                  <div
                    className="w-full bg-black-soft border border-white/6 px-5 py-7 sm:px-8 sm:py-10 lg:px-14 lg:py-14 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-0"
                    style={{ boxShadow: "0 12px 48px rgba(0,0,0,0.5)" }}
                  >
                    {/* Left — year + title */}
                    <div className="flex items-baseline gap-5 lg:gap-7 lg:pr-14">
                      <span
                        className="font-display font-bold leading-none text-white/8 flex-shrink-0"
                        style={{ fontSize: "clamp(2.5rem, 2rem + 2vw, 4.5rem)" }}
                      >
                        {item.year}
                      </span>
                      <div>
                        <p className="text-label text-white/15 mb-2">
                          Capitolo {String(i + 1).padStart(2, "0")}
                        </p>
                        <h3
                          className="font-display font-medium leading-[1.05] tracking-[-0.02em] text-white"
                          style={{
                            fontSize: "clamp(1.25rem, 1rem + 1vw, 1.75rem)",
                          }}
                        >
                          <AccentText>{item.title}</AccentText>
                        </h3>
                      </div>
                    </div>

                    {/* Right — description */}
                    <div className="lg:pl-14 lg:border-l lg:border-white/6 flex items-center">
                      <p className="font-display text-caption text-white/35 max-w-sm leading-[1.65]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

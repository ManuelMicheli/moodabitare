"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Villa Moderna a Varese", category: "Serramenti", location: "Varese", year: "2024" },
  { title: "Ristrutturazione Appartamento", category: "Ristrutturazione", location: "Busto Arsizio", year: "2024" },
  { title: "Showroom Commerciale", category: "Porte", location: "Castellanza", year: "2023" },
  { title: "Residenza di Lusso", category: "Arredo", location: "Gallarate", year: "2023" },
  { title: "Casa sul Lago", category: "Serramenti", location: "Gavirate", year: "2023" },
  { title: "Attico Centro Storico", category: "Ristrutturazione", location: "Varese", year: "2022" },
];

export function HorizontalProjectsScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

    const ctx = gsap.context(() => {
      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Progress bar
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
            // Counter
            if (counterRef.current) {
              const idx = Math.min(
                projects.length,
                Math.floor(self.progress * projects.length) + 1
              );
              counterRef.current.textContent = String(idx).padStart(2, "0");
            }
          },
        },
      });

      // Fade-in cards as they enter
      const cards = track.querySelectorAll<HTMLElement>(".project-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.4, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left 90%",
              end: "left 50%",
              scrub: true,
            },
          }
        );
      });
    }, section);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      {/* Fixed UI overlay — counter + progress */}
      <div className="absolute bottom-6 lg:bottom-10 left-6 sm:left-10 lg:left-20 right-6 sm:right-10 lg:right-20 z-20 pointer-events-none">
        <div className="flex items-center gap-4">
          <span className="text-label text-black-deep/40">
            <span ref={counterRef}>01</span>
            <span className="mx-1">/</span>
            <span>{String(projects.length).padStart(2, "0")}</span>
          </span>
          <div className="flex-1 h-[1px] bg-black-deep/10">
            <div
              ref={progressRef}
              className="h-full bg-gold origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>

      {/* Scrolling track */}
      <div
        ref={trackRef}
        className="flex items-stretch h-screen gap-5 lg:gap-7 pl-6 sm:pl-10 lg:pl-20 pr-6 sm:pr-10 lg:pr-20 py-6 lg:py-10"
      >
        {projects.map((project, i) => (
          <article
            key={i}
            className="project-card group relative flex-shrink-0 w-[82vw] sm:w-[55vw] lg:w-[38vw]"
          >
            <div className="relative w-full h-full bg-warm-gray/30 border border-black-deep/5 flex flex-col justify-between p-6 lg:p-10 group-hover:bg-warm-gray/60 transition-colors duration-500">
              {/* Number index */}
              <span className="font-display font-extralight text-6xl lg:text-8xl text-black-deep/8">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Project info */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-label text-black-deep/40">
                    {project.category}
                  </span>
                  <span className="w-4 h-[1px] bg-black-deep/15" />
                  <span className="text-label text-black-deep/30">
                    {project.location}
                  </span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-black-deep leading-tight tracking-tight">
                  {project.title}
                </h3>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-caption text-black-deep/25">
                    {project.year}
                  </span>
                  <div className="flex items-center gap-2 text-black-deep/30 group-hover:text-gold transition-colors duration-300">
                    <span className="text-button text-xs">Scopri</span>
                    <svg
                      className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Final CTA card */}
        <article className="flex-shrink-0 w-[82vw] sm:w-[55vw] lg:w-[38vw] flex items-center justify-center border border-black-deep/5">
          <div className="text-center px-10">
            <p className="font-display font-extralight text-7xl lg:text-8xl text-black-deep/8 mb-8">
              ?
            </p>
            <h3 className="font-section-title text-black-deep mb-4">
              Il tuo prossimo progetto
            </h3>
            <p className="text-body text-mid-gray mb-10 max-w-sm mx-auto">
              Realizziamo insieme la casa dei tuoi sogni. Ogni progetto parte da un&apos;idea.
            </p>
            <Link
              href="/contatti"
              className="inline-block px-10 py-4 bg-black-deep text-white text-button hover:bg-gold hover:text-black-deep transition-colors duration-300"
            >
              Parliamone
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

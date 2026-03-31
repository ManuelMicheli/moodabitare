"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CurtainHeroProps {
  children: React.ReactNode;
}

export function CurtainHero({ children }: CurtainHeroProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(inner, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom top",
          scrub: 0.3,
          pin: true,
          pinSpacing: false,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="overflow-hidden">
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}

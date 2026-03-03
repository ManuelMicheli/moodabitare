"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WordRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function WordReveal({ text, className, style }: WordRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>(".wr-word");

    gsap.set(words, { opacity: 0, y: 12 });

    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.04,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === el)
        .forEach((t) => t.kill());
    };
  }, []);

  return (
    <p ref={containerRef} className={className} style={style}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="wr-word inline-block mr-[0.3em]">
          {word}
        </span>
      ))}
    </p>
  );
}

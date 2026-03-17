"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";

interface TextRevealByWordProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * TextRevealByWord — premium text entrance
 * Each word slides up and fades in with a stagger effect.
 * Creates a cinematic reading experience.
 */
export function TextRevealByWord({
  children,
  className,
  style,
  delay = 0,
  stagger = 0.04,
  as = "h2",
}: TextRevealByWordProps) {
  const isMobile = useIsMobile();
  const words = children.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? stagger * 0.6 : stagger,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      y: isMobile ? "60%" : "100%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const Tag = motion[as];

  return (
    <Tag
      className={cn("flex flex-wrap", className)}
      style={style}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: isMobile ? "-30px" : "-50px" }}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.3em]">
          <motion.span className="inline-block" variants={child}>
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

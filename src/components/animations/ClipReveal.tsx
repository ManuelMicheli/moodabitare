"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
}

const clipPaths = {
  up: {
    hidden: "inset(100% 0% 0% 0%)",
    visible: "inset(0% 0% 0% 0%)",
  },
  down: {
    hidden: "inset(0% 0% 100% 0%)",
    visible: "inset(0% 0% 0% 0%)",
  },
  left: {
    hidden: "inset(0% 100% 0% 0%)",
    visible: "inset(0% 0% 0% 0%)",
  },
  right: {
    hidden: "inset(0% 0% 0% 100%)",
    visible: "inset(0% 0% 0% 0%)",
  },
};

/**
 * ClipReveal — premium entrance animation
 * Content reveals via clip-path mask, creating a cinematic unveiling effect.
 * Different from FadeInView — no opacity change, pure clip mask.
 */
export function ClipReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.8,
  once = true,
}: ClipRevealProps) {
  const isMobile = useIsMobile();
  const clip = clipPaths[direction];

  return (
    <motion.div
      className={cn(className)}
      initial={{ clipPath: clip.hidden }}
      whileInView={{ clipPath: clip.visible }}
      viewport={{ once, margin: isMobile ? "-30px" : "-50px" }}
      transition={{
        duration: isMobile ? duration * 0.8 : duration,
        delay,
        ease: [0.77, 0, 0.175, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

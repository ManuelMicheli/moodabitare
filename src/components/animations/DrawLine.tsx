"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DrawLineProps {
  className?: string;
  direction?: "horizontal" | "vertical";
  delay?: number;
  duration?: number;
  once?: boolean;
}

/**
 * DrawLine — decorative line that draws itself on scroll
 * Adds elegant separation between sections with animated reveal.
 */
export function DrawLine({
  className,
  direction = "horizontal",
  delay = 0,
  duration = 0.8,
  once = true,
}: DrawLineProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <motion.div
      className={cn(
        isHorizontal ? "h-px w-full" : "w-px h-full",
        "bg-black-deep/10",
        className
      )}
      initial={{ scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once, margin: "-30px" }}
      transition={{
        duration,
        delay,
        ease: [0.77, 0, 0.175, 1],
      }}
      style={{ transformOrigin: isHorizontal ? "left" : "top" }}
    />
  );
}

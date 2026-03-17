"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "span";
}

/**
 * MagneticButton — premium micro-interaction
 * Element subtly follows cursor on hover, creating a luxurious magnetic feel.
 * Automatically disabled on mobile for performance.
 */
export function MagneticButton({
  children,
  className,
  strength = 0.3,
  as = "div",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      setPosition({ x, y });
    },
    [strength, isMobile]
  );

  const handleLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const Tag = as === "span" ? motion.span : motion.div;

  return (
    <Tag
      ref={ref}
      className={cn("inline-block", className)}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.2 }}
    >
      {children}
    </Tag>
  );
}

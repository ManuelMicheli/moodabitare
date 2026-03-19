"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface DesignServiceRowProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export function DesignServiceRow({
  number,
  title,
  description,
  index,
}: DesignServiceRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className="group relative cursor-pointer overflow-hidden border-b border-[#E5E5E5] active:bg-black-deep/[0.03]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
      >
        {/* Fill background — plain div + CSS transition */}
        <div
          className="absolute inset-0 bg-[#0A0A0A] pointer-events-none"
          aria-hidden="true"
          style={{
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: hovered ? "left center" : "right center",
            transition: "transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-4 sm:gap-6 lg:gap-10 py-6 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
          {/* Number */}
          <span
            className={`font-display font-bold leading-none shrink-0 w-12 sm:w-16 lg:w-20 transition-colors duration-300 ${hovered ? "text-white" : "text-[#1A1A1A]"}`}
            style={{ fontSize: "clamp(1.75rem, 1.5rem + 1.5vw, 3.5rem)" }}
          >
            {number}
          </span>

          {/* Text block */}
          <div className="flex-1 min-w-0">
            <h3
              className={`font-display font-medium leading-[1.1] tracking-[-0.02em] uppercase transition-colors duration-300 ${hovered ? "text-white" : "text-[#1A1A1A]"}`}
              style={{ fontSize: "clamp(1.25rem, 1rem + 1vw, 2.75rem)" }}
            >
              {title}
            </h3>
            <p className={`mt-2 lg:mt-3 text-sm lg:text-base leading-relaxed max-w-2xl transition-colors duration-300 ${hovered ? "text-white/75" : "text-[#6B7280]"}`}>
              {description}
            </p>
          </div>

          {/* Arrow */}
          <span
            className={`text-2xl lg:text-3xl shrink-0 transition-all duration-300 ${hovered ? "text-white translate-x-2" : "text-[#1A1A1A]"}`}
            aria-hidden
          >
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

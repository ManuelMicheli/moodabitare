"use client";

import { BRAND_PARTNERS } from "@/lib/constants";

export function BrandLogos() {
  return (
    <section className="py-6 lg:py-8 border-b border-warm-gray/30 overflow-hidden bg-white">
      <div className="marquee-container">
        <div className="marquee-track">
          {[...BRAND_PARTNERS, ...BRAND_PARTNERS].map((brand, i) => (
            <span
              key={`a-${i}`}
              className="text-label flex-shrink-0 whitespace-nowrap px-8"
              style={{ color: brand.color }}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

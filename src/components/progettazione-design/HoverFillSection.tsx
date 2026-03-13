"use client";

import { DesignServiceRow } from "./DesignServiceRow";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

interface HoverFillSectionProps {
  services: ServiceItem[];
}

export function HoverFillSection({ services }: HoverFillSectionProps) {
  return (
    <section className="py-20 lg:py-36 bg-[#F7F5F2]">
      <div className="px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-12 lg:mb-20">
          <p className="text-label text-black-deep/30 mb-5">
            Il nostro approccio
          </p>
          <h2
            className="font-display font-medium leading-[1.1] tracking-[-0.02em] text-black-deep"
            style={{ fontSize: "clamp(1.75rem, 1.25rem + 2vw, 3.5rem)" }}
          >
            Cinque passi verso la casa ideale
          </h2>
        </div>

        {/* Service rows */}
        <div className="border-t border-[#E5E5E5]">
          {services.map((service, i) => (
            <DesignServiceRow
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

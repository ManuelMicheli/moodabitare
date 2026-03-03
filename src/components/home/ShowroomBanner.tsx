"use client";

import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { CONTACT_INFO, OPENING_HOURS } from "@/lib/constants";

export function ShowroomBanner() {
  return (
    <FadeInView>
      <div className="relative py-8 sm:py-0 sm:aspect-[16/3] overflow-hidden bg-black-soft flex items-center">
        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Left */}
          <div>
            <p className="text-caption text-white/35 mb-2">Showroom — 300 mq</p>
            <p className="font-section-title text-white">
              Vieni a trovarci
            </p>
            <p className="text-ui text-white/50 text-sm mt-2">
              {CONTACT_INFO.address}, {CONTACT_INFO.city} ({CONTACT_INFO.province})
            </p>
          </div>

          {/* Right */}
          <div className="flex-shrink-0">
            <Link
              href="/contatti"
              className="text-button inline-block border border-white/20 text-white px-6 py-4 hover:border-white/50 transition-colors"
            >
              Prenota una visita
            </Link>
          </div>
        </div>
      </div>
    </FadeInView>
  );
}

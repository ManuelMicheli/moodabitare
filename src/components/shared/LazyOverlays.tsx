"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(
  () => import("@/components/shared/SmoothScroll").then((m) => m.SmoothScroll),
  { ssr: false }
);
const WhatsAppWidget = dynamic(
  () => import("@/components/shared/WhatsAppWidget").then((m) => m.WhatsAppWidget),
  { ssr: false }
);
const CookieBanner = dynamic(
  () => import("@/components/shared/CookieBanner").then((m) => m.CookieBanner),
  { ssr: false }
);

export function LazyOverlays() {
  return (
    <>
      <SmoothScroll />
      <WhatsAppWidget />
      <CookieBanner />
    </>
  );
}

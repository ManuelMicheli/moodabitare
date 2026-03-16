"use client";

import dynamic from "next/dynamic";

const SiteLoader = dynamic(
  () => import("@/components/shared/SiteLoader").then((m) => m.SiteLoader),
  { ssr: false }
);
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
const PromoPopup = dynamic(
  () => import("@/components/shared/PromoPopup").then((m) => m.PromoPopup),
  { ssr: false }
);

export function LazyOverlays() {
  return (
    <>
      <SiteLoader />
      <SmoothScroll />
      <WhatsAppWidget />
      <CookieBanner />
      <PromoPopup />
    </>
  );
}

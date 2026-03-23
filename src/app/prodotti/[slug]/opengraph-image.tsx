import { ImageResponse } from "next/og";
import { ALL_PRODUCTS } from "@/lib/constants";
import { productContent } from "@/lib/product-content";

export const runtime = "edge";
export const alt = "Mood Abitare — Prodotto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  const content = productContent[slug];

  const name = product?.name ?? "Prodotto";
  const brand = product?.brand ?? "";
  const tagline = content?.tagline ?? "Scopri la gamma da Mood Abitare";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #2b2b2b 0%, #363636 50%, #2b2b2b 100%)",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Top bordeaux accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#7A2638",
            display: "flex",
          }}
        />

        {/* Top: brand + category label */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "2px",
              textTransform: "uppercase" as const,
              display: "flex",
            }}
          >
            Mood Abitare
          </div>
          {brand && (
            <div
              style={{
                fontSize: "18px",
                color: "#7A2638",
                marginTop: "8px",
                fontWeight: 600,
                display: "flex",
              }}
            >
              {brand}
            </div>
          )}
        </div>

        {/* Center: product name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-1px",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.5)",
              marginTop: "16px",
              lineHeight: 1.4,
              maxWidth: "800px",
              display: "flex",
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Bottom: location */}
        <div
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.25)",
            display: "flex",
          }}
        >
          Gorla Maggiore (VA) — Showroom 300mq — Premium Partner Oknoplast
        </div>

        {/* Bottom bordeaux accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#7A2638",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

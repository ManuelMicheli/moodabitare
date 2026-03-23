import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mood Abitare — Serramenti, Porte e Ristrutturazioni a Varese";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #2b2b2b 0%, #363636 50%, #2b2b2b 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative bordeaux accent line */}
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

        {/* Icon: two roofs + window */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 512 512"
          style={{ marginBottom: "24px" }}
        >
          <path
            d="M76 296 L196 168 L316 296"
            fill="none"
            stroke="#7A2638"
            strokeWidth="28"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M196 316 L336 148 L476 316"
            fill="none"
            stroke="white"
            strokeWidth="28"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <rect
            x="216"
            y="336"
            width="88"
            height="88"
            rx="4"
            fill="none"
            stroke="white"
            strokeWidth="16"
          />
          <line x1="260" y1="336" x2="260" y2="424" stroke="white" strokeWidth="10" />
          <line x1="216" y1="380" x2="304" y2="380" stroke="white" strokeWidth="10" />
        </svg>

        {/* Brand name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-1px",
            display: "flex",
          }}
        >
          Mood Abitare
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.6)",
            marginTop: "12px",
            display: "flex",
          }}
        >
          Serramenti, Porte, Ristrutturazioni e Arredo Casa
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.35)",
            marginTop: "24px",
            display: "flex",
          }}
        >
          Showroom 300mq a Gorla Maggiore (VA) — Premium Partner Oknoplast
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

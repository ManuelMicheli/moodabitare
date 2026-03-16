import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mood Abitare — Serramenti, Porte e Ristrutturazioni",
    short_name: "Mood Abitare",
    description:
      "Oltre 30 anni di esperienza in serramenti, porte, ristrutturazioni e arredo casa nella provincia di Varese.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5f0",
    theme_color: "#2b2b2b",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

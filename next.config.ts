import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self' https://pub-7ff329c7d3de4b8fa141f32872a7b34e.r2.dev",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://cdn.sanity.io https://www.google-analytics.com https://www.googletagmanager.com",
      "font-src 'self'",
      "connect-src 'self' https://pub-7ff329c7d3de4b8fa141f32872a7b34e.r2.dev https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://*.sanity.io",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: ["sanity", "@sanity/client", "@sanity/image-url"],
  // SEO: remove trailing slashes for canonical URL consistency
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [70, 75, 90],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  redirects: async () => [
    // SEO: non-www → www redirect (primary canonical domain)
    {
      source: "/:path*",
      has: [{ type: "host", value: "moodabitare.it" }],
      destination: "https://www.moodabitare.it/:path*",
      permanent: true,
    },
    // SEO: legacy domain moschianosrl.it → moodabitare.it (entrambe le varianti host)
    {
      source: "/:path*",
      has: [{ type: "host", value: "moschianosrl.it" }],
      destination: "https://www.moodabitare.it/:path*",
      permanent: true,
    },
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.moschianosrl.it" }],
      destination: "https://www.moodabitare.it/:path*",
      permanent: true,
    },
    // 301 redirects: old product slugs → new slugs
    { source: "/prodotti/finestre-pvc-oknoplast", destination: "/prodotti/infissi-pvc", permanent: true },
    { source: "/prodotti/finestre-alluminio-oknoplast", destination: "/prodotti/infissi-alluminio", permanent: true },
    { source: "/prodotti/serramenti-legno-giannattasio", destination: "/prodotti/infissi-legno", permanent: true },
    { source: "/prodotti/monoblocchi-vmc-alpac", destination: "/prodotti/infissi-pvc", permanent: true },
    { source: "/prodotti/porte-interne-bertolotto", destination: "/prodotti/porte-interne", permanent: true },
    { source: "/prodotti/portoncini-alluminio-oknoplast", destination: "/prodotti/portoncini", permanent: true },
    { source: "/prodotti/porte-blindate-alias", destination: "/prodotti/porte-blindate", permanent: true },
    { source: "/prodotti/grate-inferriate-alias", destination: "/prodotti/grate-sicurezza", permanent: true },
    { source: "/prodotti/avvolgibili-pasini", destination: "/prodotti/tapparelle", permanent: true },
    { source: "/prodotti/persiane-erreci", destination: "/prodotti/persiane", permanent: true },
    { source: "/prodotti/tende-tecniche-sharknet", destination: "/prodotti/tende-tecniche", permanent: true },
    { source: "/prodotti/zanzariere-zanzar-sistem", destination: "/prodotti/zanzariere", permanent: true },
    { source: "/prodotti/cucine-cucinesse", destination: "/prodotti/cucine-su-misura", permanent: true },
    { source: "/prodotti/arredo-bagno-merati", destination: "/prodotti/arredo-bagno", permanent: true },
    { source: "/prodotti/sanitari-rubinetteria-karag", destination: "/prodotti/sanitari", permanent: true },
    { source: "/prodotti/parquet-laminati-skema", destination: "/prodotti/parquet", permanent: true },
    { source: "/prodotti/scale-ringhiere-fontanot", destination: "/prodotti/scale-ringhiere", permanent: true },
  ],
  headers: async () => [
    {
      source: "/(.*)",
      headers: securityHeaders,
    },
    {
      source: "/fonts/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/images/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/logo/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/videos/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/moodabitarereal/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    // Note: HTML pages are served by Next.js with sensible defaults.
    // Don't override /prodotti/* with immutable — pages must revalidate on deploy.
  ],
};

export default nextConfig;

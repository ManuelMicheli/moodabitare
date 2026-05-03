import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--ff-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  preload: true,
});

export const outfit = localFont({
  src: [
    {
      path: "../public/fonts/outfit/outfit-variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--ff-ui",
  display: "swap",
  preload: true,
});

export const doublePorte = localFont({
  src: [
    {
      path: "../public/fonts/display/doubleporte3.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--ff-display",
  display: "swap",
  preload: true,
});

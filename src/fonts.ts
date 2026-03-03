import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const outfit = localFont({
  src: "../public/fonts/outfit/OutfitVariableFont_wght1.ttf",
  variable: "--font-ui",
  display: "swap",
});

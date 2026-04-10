import { Cormorant_Garamond, Albert_Sans } from "next/font/google";
import localFont from "next/font/local";

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const outfit = localFont({
  src: "../public/fonts/outfit/OutfitVariableFont_wght1.ttf",
  variable: "--font-ui",
  display: "swap",
});

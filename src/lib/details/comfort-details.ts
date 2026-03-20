import type { ProductDetail } from "../product-details";
import {
  grifoflexDetails,
  bettioDetails,
  sharknetZanzariereDetails,
  sharknetTendeDetails,
  zanzarSistemDetails,
  sinfoniaDetails,
} from "../brand-product-details";

/* ── ZANZARIERE — Grifoflex / Bettio / Sharknet ─────────────── */

export const zanzariereDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(grifoflexDetails).map(([k, v]) => [`Grifoflex — ${k}`, v])),
  ...Object.fromEntries(Object.entries(bettioDetails).map(([k, v]) => [`Bettio — ${k}`, v])),
  ...Object.fromEntries(Object.entries(sharknetZanzariereDetails).map(([k, v]) => [`Sharknet — ${k.replace("SharkNet ", "")}`, v])),
};

/* ── TENDE TECNICHE — Sharknet / Zanzar Sistem ───────────────── */

export const tendeTecnicheDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(sharknetTendeDetails).map(([k, v]) => [`Sharknet — ${k.replace("SharkNet ", "")}`, v])),
  ...Object.fromEntries(Object.entries(zanzarSistemDetails).map(([k, v]) => [`Zanzar Sistem — ${k}`, v])),
};

/* ── SCALE E RINGHIERE — Sinfonia ────────────────────────────── */

export const scaleDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(sinfoniaDetails).map(([k, v]) => [`Sinfonia — ${k}`, v])),
};

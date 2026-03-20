import type { ProductDetail } from "../product-details";
import {
  haierDetails,
  samsungDetails,
  aristonDetails,
  hermannDetails,
} from "../brand-product-details";

/* ── CLIMATIZZATORI — Haier / Samsung ────────────────────────── */

export const climatizzatoriDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(haierDetails).map(([k, v]) => [`Haier — ${k}`, v])),
  ...Object.fromEntries(Object.entries(samsungDetails).map(([k, v]) => [`Samsung — ${k}`, v])),
};

/* ── POMPE DI CALORE — Ariston ───────────────────────────────── */

export const pompeCaloreDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(aristonDetails).map(([k, v]) => [`Ariston — ${k}`, v])),
};

/* ── CALDAIE — Hermann ───────────────────────────────────────── */

export const caldaiaDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(hermannDetails).map(([k, v]) => [`Hermann — ${k}`, v])),
};

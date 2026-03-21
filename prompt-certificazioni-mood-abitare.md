# PROMPT — Sezione Certificazioni per Mood Abitare

## Contesto Progetto

Sito web **Mood Abitare** (Moschiano SRL) — azienda di serramenti con showroom a Gorla Maggiore (VA).
Stack: **Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP**.

### Palette

- Nero principale: `#111111`
- Off-white / sfondo: `#F5F2EE`
- Bordeaux accent: `#8B1A1A`

### Font

- Display / titoli: `DM Serif Display` (italic per statement)
- Body / UI: `DM Sans`

---

## Obiettivo

Crea un componente `CertificazioniSection` che mostra le 6 certificazioni professionali dell'azienda in una griglia di card eleganti con icone SVG custom inline, titolo, riferimento normativo e descrizione.

---

## Specifiche del Componente

### File da creare

```
src/components/sections/CertificazioniSection.tsx
src/data/certificazioni.ts
```

### Struttura dati — `src/data/certificazioni.ts`

Crea un file TypeScript con un array `certificazioni` contenente i seguenti 6 oggetti. Ogni oggetto ha queste proprietà:

```ts
interface Certificazione {
  id: string;
  title: string;
  subtitle: string; // riferimento normativo
  description: string;
  iconPath: string; // SVG path(s) per l'icona — vedi sotto
}
```

**Dati delle 6 certificazioni:**

1. **Certificazione Elettrica**
   - id: `"elettrica"`
   - subtitle: `"DM 37/08"`
   - description: `"Abilitazione professionale per la progettazione, installazione e manutenzione di impianti elettrici civili e industriali, in conformità al Decreto Ministeriale 37/08."`
   - Icona: fulmine dentro cerchio tratteggiato

2. **Certificazione Idraulica**
   - id: `"idraulica"`
   - subtitle: `"DM 37/08"`
   - description: `"Qualifica professionale per l'installazione, manutenzione e riparazione di impianti idrosanitari, di riscaldamento e condizionamento, secondo la normativa vigente."`
   - Icona: goccia d'acqua dentro cerchio tratteggiato

3. **Certificazione F-Gas**
   - id: `"fgas"`
   - subtitle: `"Reg. UE 517/2014"`
   - description: `"Certificazione obbligatoria per imprese che operano su apparecchiature contenenti gas fluorurati ad effetto serra — installazione, manutenzione, riparazione e smantellamento di impianti di climatizzazione e refrigerazione."`
   - Icona: fiamma/gas stilizzato con linee orizzontali, dentro cerchio tratteggiato

4. **Patentino Posa Clima**
   - id: `"posaclima"`
   - subtitle: `"UNI 11673 · EQF3"`
   - description: `"Patentino nazionale di Posatore/Installatore Senior livello Europeo EQF3, certificato da ente accreditato Accredia. Qualifica per la posa in opera dei serramenti secondo la norma UNI 11673."`
   - Icona: badge/patentino (rettangolo con banda superiore e linee di testo), dentro cerchio tratteggiato

5. **Posatore Esperto di Posa Clima**
   - id: `"posatore-esperto"`
   - subtitle: `"PosaClima"`
   - description: `"Qualifica di Posatore Esperto PosaClima e Tecnico per la Riqualificazione Energetica del Foro Finestra. Formazione avanzata sulla corretta posa ad alta efficienza termoacustica dei serramenti."`
   - Icona: finestra/serramento con raggi di efficienza energetica, dentro cerchio tratteggiato

6. **Installatore Certificato INIM**
   - id: `"inim"`
   - subtitle: `"INIM Electronics"`
   - description: `"Qualifica di Installatore Certificato INIM per la progettazione e installazione di sistemi antintrusione, antincendio e domotica. Prodotti 100% Made in Italy, certificati IMQ secondo norme CEI e EN."`
   - Icona: scudo con checkmark, dentro cerchio tratteggiato

---

### Componente — `src/components/sections/CertificazioniSection.tsx`

#### Layout Generale

- Sfondo: `#F5F2EE` (bg-offwhite o equivalente Tailwind custom)
- Padding verticale generoso: `py-24 md:py-32`
- Max width: `max-w-7xl mx-auto px-6`

#### Header Sezione

- Eyebrow text: `"Garanzia di qualità"` — font DM Sans, 11px, font-semibold, uppercase, letter-spacing 0.2em, colore bordeaux `#8B1A1A`
- Titolo: `"Le Nostre Certificazioni"` — font DM Serif Display, italic, size clamp(32px, 5vw, 52px), colore `#111111`
- Linea decorativa sotto il titolo: 48px di larghezza, 2px di altezza, colore bordeaux `#8B1A1A`, centrata, margin-top 24px
- Tutto centrato

#### Griglia Card

- CSS Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Gap: `24px` (`gap-6`)

#### Singola Card

**Stato default:**
- Background: `rgba(255,255,255,0.6)` con `backdrop-blur-sm`
- Border: `1px solid rgba(17,17,17,0.08)`
- Border-radius: `0` (angoli vivi — stile editoriale)
- Padding: `40px 36px 36px`
- Linea accent top: posizione absolute, top 0 left 0, altezza 2px, larghezza 48px, colore `#8B1A1A`
- Numero ordinale (01, 02...) in alto a destra: DM Serif Display, 13px, colore `rgba(17,17,17,0.15)`

**Stato hover (con Framer Motion):**
- Background transisce a `#111111`
- Linea accent top si espande a `width: 100%`
- Icona: colore da `#111111` a `#8B1A1A`, leggero scale(1.08)
- Titolo: colore da `#111111` a `#F5F2EE`
- Subtitle: resta bordeaux, opacity 0.9
- Descrizione: colore da `rgba(17,17,17,0.55)` a `rgba(245,242,238,0.7)`
- Numero ordinale: colore da `rgba(17,17,17,0.15)` a `rgba(245,242,238,0.3)`
- Transition: `duration: 0.5, ease: [0.23, 1, 0.32, 1]` (cubic-bezier smooth)

**Contenuto card (dall'alto in basso):**
1. Icona SVG inline — 56x56px, colore `currentColor`
2. Margin bottom 28px
3. Titolo — DM Serif Display, 22px, font-normal, colore `#111111`, line-height 1.25
4. Subtitle/norma — DM Sans, 11px, font-semibold, uppercase, letter-spacing 0.12em, colore `#8B1A1A`, margin-bottom 16px
5. Divisore sottile: 32px larghezza, 1px altezza, colore `rgba(17,17,17,0.1)`, margin-bottom 16px
6. Descrizione — DM Sans, 14px, font-light, line-height 1.7, colore `rgba(17,17,17,0.55)`

#### Animazione Entrata (Framer Motion)

Ogni card entra con stagger animation al scroll:
- `initial={{ opacity: 0, y: 30 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `viewport={{ once: true, amount: 0.2 }}`
- `transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}`

#### Footer Nota

Sotto la griglia, centrato, margin-top 56px:
- Testo: `"Tutte le certificazioni sono regolarmente aggiornate e disponibili per consultazione presso il nostro showroom."`
- DM Sans, 13px, font-normal, colore `rgba(17,17,17,0.35)`, line-height 1.6

---

### Icone SVG

Crea le 6 icone come componenti SVG inline React (non file separati). Ogni icona:
- ViewBox: `0 0 64 64`
- Stroke-based (no fill), `stroke="currentColor"`, strokeWidth principale 2.5, dettagli 1.5
- Ogni icona ha un cerchio tratteggiato esterno: `<circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" />`
- Stile: lineare, minimale, elegante — coerente con l'estetica premium del brand

**Icona 1 — Fulmine (Elettrica):**
Path del fulmine: `M36 6L18 34h12l-4 24 22-30H34l2-22z`

**Icona 2 — Goccia (Idraulica):**
Path goccia: `M32 8C32 8 16 26 16 38a16 16 0 0 0 32 0C48 26 32 8 32 8z`
Riflesso interno: `M26 40a6 6 0 0 0 6 6`

**Icona 3 — Gas/Fiamma (F-Gas):**
Fiamma: `M20 44c0-8 6-10 6-18a6 6 0 0 1 12 0c0 8 6 10 6 18a12 12 0 0 1-24 0z`
Linee orizzontali: `M28 36h8`, `M26 40h12`, `M28 44h8`
Raggi superiori: `M32 8v10`, `M22 12l4 6`, `M42 12l-4 6`

**Icona 4 — Patentino/Badge (Posa Clima):**
Rettangolo: `<rect x="14" y="16" width="36" height="26" rx="3" />`
Banda: `M14 24h36`
Linee testo: `M22 30h10`, `M22 35h6`
Foto placeholder: `<rect x="38" y="28" width="8" height="10" rx="1.5" />`
Stand: `M32 42v8`, `M26 50h12`

**Icona 5 — Finestra/Serramento (Posatore Esperto):**
Muro: `M16 46V18h32v28`
Pavimento: `M12 46h40`
Finestra: `<rect x="24" y="24" width="16" height="18" rx="1" />`
Montanti: `M28 24v18`, `M36 24v18`, `M24 32h16`
Raggi efficienza: `M20 14l4 4`, `M44 14l-4 4`, `M32 10v8`

**Icona 6 — Scudo con Check (INIM):**
Scudo: `M32 10L14 22v16c0 10 8 16 18 18 10-2 18-8 18-18V22L32 10z`
Checkmark: `M24 33l5 5 11-11`

---

## Integrazione

Dopo aver creato il componente, importalo nella pagina principale e posizionalo nella sequenza delle sezioni del sito (tipicamente dopo la sezione servizi o chi siamo). Esempio:

```tsx
import { CertificazioniSection } from '@/components/sections/CertificazioniSection';

// Nella page.tsx, aggiungi:
<CertificazioniSection />
```

---

## Note Importanti

- **Non** usare librerie di icone esterne — tutte le icone sono SVG inline custom
- Usa `"use client"` in cima al componente per gli hook React (useState per hover)
- Assicurati che i font DM Serif Display e DM Sans siano già configurati nel progetto (dovrebbero esserlo già tramite next/font/google o il layout)
- Le transizioni hover devono essere fluide e raffinate — no scatti, no delay eccessivi
- Il componente deve essere fully responsive: 1 colonna su mobile, 2 su tablet, 3 su desktop
- Mantieni la coerenza con il design system esistente del sito Mood Abitare

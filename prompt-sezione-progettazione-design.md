# PROMPT CLAUDE CODE — Sezione "Progettazione e Design" con Hover Fill Animation

## Contesto del progetto

Stiamo lavorando sul sito di **Mood Abitare by Moschiano Solution** — azienda di serramenti, porte, ristrutturazioni e arredo casa con sede a Gorla Maggiore (VA). Il sito è un progetto Next.js 15 con TypeScript, Tailwind CSS e Framer Motion. Devi creare una nuova sezione homepage chiamata **"Progettazione e Design"**.

---

## Effetto visivo di riferimento — HOVER FILL ANIMATION

L'effetto da replicare è una lista verticale di voci numerate con un'animazione di riempimento al passaggio del mouse. Ecco la specifica esatta:

### Struttura base (stato idle)
- Lista verticale di item full-width, ciascuno separato da un sottile bordo orizzontale (`border-bottom: 1px solid` colore grigio chiaro, es. `#E5E5E5`)
- Ogni riga contiene: **numero a due cifre** (01, 02, 03...) allineato a sinistra + **titolo in uppercase bold** a destra del numero
- Tipografia: numero in font light/regular di dimensione grande (~48-56px desktop), titolo in font bold/semibold uppercase con letter-spacing leggero (~36-44px desktop)
- Colore testo di default: nero/grigio scuro (`#1A1A1A`)
- Sfondo sezione: bianco o grigio chiarissimo (`#F7F5F2` o `#FAFAFA`)
- Padding verticale generoso per ogni riga (~24-32px)
- Layout contenuto centrato con max-width (es. `max-w-6xl` o `max-w-7xl`) ma le righe si estendono full-width fino ai bordi del container

### Effetto hover — FILL NERO da sinistra a destra
- Al passaggio del mouse su una riga, un **background nero (#0A0A0A)** si espande da sinistra a destra riempiendo tutta la riga
- L'animazione è realizzata tramite un **pseudo-elemento `::before`** o un `<div>` posizionato in assoluto con:
  - `position: absolute; top: 0; left: 0; bottom: 0;`
  - **Stato idle:** `width: 0%` (o `scaleX(0)` con `transform-origin: left`)
  - **Stato hover:** `width: 100%` (o `scaleX(1)`)
  - **Transizione:** `transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)` — easing morbido ma deciso
- Il **testo diventa bianco** (#FFFFFF) al hover, con transizione sincronizzata (`transition: color 0.3s ease`)
- Anche il **bordo separatore** cambia colore al nero durante l'hover
- Il contenuto testuale (numero + titolo) deve stare **sopra** il fill (z-index superiore al pseudo-elemento)

### Effetto mouse-leave — FILL che esce a destra
- Quando il mouse lascia la riga, il fill nero **NON torna indietro da destra a sinistra** (non sarebbe fluido)
- Invece, il fill **scorre via verso destra** e scompare dal lato destro
- Questo si ottiene cambiando il `transform-origin` dinamicamente:
  - **On hover enter:** `transform-origin: left` → `scaleX(0)` → `scaleX(1)` (entra da sinistra)
  - **On hover leave:** `transform-origin: right` → `scaleX(1)` → `scaleX(0)` (esce verso destra)
- Implementazione consigliata con Framer Motion: usa `onHoverStart` e `onHoverEnd` per gestire lo stato e cambiare `originX` da `0` a `1` a seconda della direzione

### Responsive
- Su **mobile** (< 768px): i numeri diventano più piccoli (~28-32px), i titoli ~20-24px, il padding si riduce. L'effetto hover resta attivo per il tap (opzionale: puoi disabilitarlo su touch e usare solo un bordo sinistro nero come indicatore di "attivo")
- Su **tablet**: dimensioni intermedie proporzionali

---

## Contenuto della sezione

### Headline della sezione (sopra la lista)
**Sovratitolo:** Progettazione e Design
**Titolo principale:** Le tue idee prendono forma
**Sottotitolo (opzionale):** Ogni casa racconta una storia unica. Il nostro metodo parte dall'ascolto per comprendere come vivi i tuoi spazi.

### Le 5 voci della lista

```
01    CONSULENZA SU MISURA
02    PROGETTAZIONE A 360°
03    ESPERIENZA IN SHOWROOM
04    RENDER 3D E VISUALIZZAZIONE
05    CONSEGNA CHIAVI IN MANO
```

### Descrizione estesa (opzionale — da mostrare on hover o sotto ogni voce)

Se vuoi aggiungere una riga di descrizione sotto ogni titolo (visibile di default o solo al hover), usa questi testi:

1. **Consulenza su misura** — Ascoltiamo le tue esigenze, analizziamo gli spazi e proponiamo soluzioni che uniscono estetica e funzionalità.
2. **Progettazione a 360°** — Dai serramenti agli interni: un unico team per serramenti, cucine su misura, arredo bagno e ristrutturazioni complete.
3. **Esperienza in showroom** — Nel nostro showroom di 300 mq a Gorla Maggiore puoi toccare con mano materiali, confrontare finiture e colori dal vivo.
4. **Render 3D e visualizzazione** — Il nostro architetto dà forma alle tue idee con render fotorealistici, così puoi vedere il risultato prima dell'installazione.
5. **Consegna chiavi in mano** — Un unico referente dalla progettazione allo smaltimento: ci occupiamo di tutto noi, con posa certificata.

**Regola:** le descrizioni, se presenti, devono avere font-size più piccolo (~16-18px), colore più chiaro (grigio medio), e al hover diventare bianche insieme al resto del testo.

---

## Specifiche tecniche di implementazione

### Struttura del componente

```
src/components/sections/ProgettazioneDesign.tsx
```

oppure il path coerente con il codebase esistente.

### Struttura JSX indicativa

```tsx
<section className="py-24 bg-white">
  {/* Header della sezione */}
  <div className="max-w-7xl mx-auto px-6 mb-16">
    <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
      Progettazione e Design
    </p>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
      Le tue idee prendono forma
    </h2>
  </div>

  {/* Lista con hover fill */}
  <div className="w-full">
    {items.map((item, index) => (
      <DesignServiceRow
        key={item.id}
        number={String(index + 1).padStart(2, '0')}
        title={item.title}
        description={item.description}
      />
    ))}
  </div>
</section>
```

### Componente DesignServiceRow — Logica hover

Il singolo row deve gestire l'animazione del fill con Framer Motion. Approccio consigliato:

```tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface DesignServiceRowProps {
  number: string;
  title: string;
  description?: string;
}

export default function DesignServiceRow({ number, title, description }: DesignServiceRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [exitDirection, setExitDirection] = useState<'left' | 'right'>('left');

  return (
    <motion.div
      className="relative w-full border-b border-gray-200 cursor-pointer overflow-hidden"
      onHoverStart={() => {
        setExitDirection('left');  // fill enters from left
        setIsHovered(true);
      }}
      onHoverEnd={() => {
        setExitDirection('right'); // fill exits to right
        setIsHovered(false);
      }}
    >
      {/* Background fill overlay */}
      <motion.div
        className="absolute inset-0 bg-[#0A0A0A]"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
        }}
        style={{
          originX: exitDirection === 'left' ? 0 : 1,
        }}
        transition={{
          duration: 0.5,
          ease: [0.77, 0, 0.175, 1], // cubic-bezier aggressivo ma fluido
        }}
      />

      {/* Contenuto — z-index sopra il fill */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex items-baseline gap-8 md:gap-16">
        <motion.span
          className="text-3xl md:text-5xl font-light tabular-nums"
          animate={{ color: isHovered ? '#FFFFFF' : '#1A1A1A' }}
          transition={{ duration: 0.3 }}
        >
          {number}
        </motion.span>

        <div className="flex-1">
          <motion.h3
            className="text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide"
            animate={{ color: isHovered ? '#FFFFFF' : '#1A1A1A' }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>

          {description && (
            <motion.p
              className="mt-2 text-base md:text-lg max-w-2xl"
              animate={{ color: isHovered ? 'rgba(255,255,255,0.75)' : '#6B7280' }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Freccia o icona opzionale a destra */}
        <motion.div
          className="hidden md:flex items-center"
          animate={{
            color: isHovered ? '#FFFFFF' : '#1A1A1A',
            x: isHovered ? 8 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
```

---

## Palette colori (coerente col brand Mood Abitare)

| Token | Valore | Uso |
|-------|--------|-----|
| Background sezione | `#FFFFFF` o `#F7F5F2` | Sfondo della sezione |
| Testo default | `#1A1A1A` | Numeri e titoli |
| Testo secondario | `#6B7280` | Descrizioni |
| Bordo separatore | `#E5E5E5` | Linea tra le righe |
| Fill hover | `#0A0A0A` | Background nero al passaggio del mouse |
| Testo hover | `#FFFFFF` | Numeri, titoli e freccia al hover |
| Testo hover secondario | `rgba(255,255,255,0.75)` | Descrizioni al hover |

---

## Animazioni con Framer Motion

- **Fill background:** `scaleX` da 0 a 1 con `duration: 0.5` e easing `[0.77, 0, 0.175, 1]`
- **Cambio colore testo:** `duration: 0.3` con easing standard
- **Freccia laterale:** traslazione `x: 0 → 8px` al hover con `duration: 0.3`
- **Entrata in viewport (opzionale):** le righe possono avere un leggero stagger di entrata con `whileInView` (fade-in + slide-up, stagger 0.1s tra le righe)

---

## Checklist prima di completare

- [ ] Il componente è creato come file separato e importato nella homepage
- [ ] L'effetto hover funziona con fill nero da sinistra a destra (enter) e uscita a destra (leave)
- [ ] Il testo cambia a bianco in modo fluido durante l'hover
- [ ] Il primo item ha anche un `border-top` per chiudere visivamente la lista
- [ ] Il layout è perfettamente responsive (mobile → tablet → desktop)
- [ ] Le animazioni usano Framer Motion (non CSS puro, per coerenza col progetto)
- [ ] Il contenuto testuale corrisponde esattamente a quello specificato sopra
- [ ] La sezione si integra nel layout della homepage senza rompere le sezioni adiacenti
- [ ] Il codice è tipizzato correttamente in TypeScript
- [ ] Nessun import inutilizzato, nessun warning ESLint

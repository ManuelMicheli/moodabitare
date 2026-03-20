import type { ProductDetail } from "../product-details";

/* ── GRATE DI SICUREZZA — Erreci ─────────────────────────────── */

export const grateDetails: Record<string, ProductDetail> = {
  "Erreci — Sikura": {
    name: "Sikura",
    brand: "Erreci",
    segment: "Sicurezza Classe 4",
    description:
      "La prima e unica grata di sicurezza con snodo certificata in Classe 4 antieffrazione. Profili in acciaio zincato carbonitrurato con tubolare interno anti-taglio. Ingombro di soli 35 mm, compatibile con monoblocchi senza modifiche agli infissi.",
    highlight: "Unica inferriata con snodo certificata Classe 4 in Italia — solo 35 mm",
    specs: [
      { label: "Materiale", value: "Acciaio zincato carbonitrurato" },
      { label: "Classe antieffrazione", value: "Classe 4 — EN 1627" },
      { label: "Ingombro", value: "Solo 35 mm" },
      { label: "Serratura", value: "Cilindro europeo antitrapano" },
      { label: "Telaio", value: "Sezione 20×30×2 mm, 7 tipologie" },
      { label: "Verniciatura", value: "Polveri poliesteri a forno 180°C" },
    ],
    colors: "Gamma RAL completa, verniciatura a polvere Classe 2",
    features: ["Snodo brevettato", "Carbonitrurati anti-taglio", "Compatibile monoblocchi", "Profili di compensazione fuori squadra"],
  },
  "Erreci — Evoluta 18": {
    name: "Evoluta 18",
    brand: "Erreci",
    segment: "Sicurezza Classe 3",
    description:
      "Grata di sicurezza con lo speciale snodo brevettato Erreci per apertura fluida e chiusura sicura. Telaio robusto in acciaio zincato sezione 40×30 mm, serratura a 3 punti con cilindro europeo antitrapano.",
    highlight: "Snodo brevettato esclusivo — apertura fluida, telaio 40×30 mm",
    specs: [
      { label: "Materiale", value: "Acciaio zincato" },
      { label: "Classe antieffrazione", value: "Classe 3 — EN 1627" },
      { label: "Telaio", value: "Sezione 40×30×2 mm" },
      { label: "Serratura", value: "3 punti con cilindro europeo antitrapano" },
      { label: "Apertura", value: "A battente con snodo brevettato" },
      { label: "Produzione", value: "Su misura, 100% Made in Italy" },
    ],
    colors: "Gamma RAL completa, verniciatura a polvere Classe 2",
    features: ["Snodo brevettato", "Telaio robusto 40×30 mm", "Serratura 3 punti", "Su misura"],
  },
  "Erreci — Libera": {
    name: "Libera",
    brand: "Erreci",
    segment: "Sicurezza Classe 3",
    description:
      "Inferriata con cerniera a scomparsa brevettata che elimina ogni sporgenza, offrendo un'estetica pulita e un profilo ultra-sottile. Serratura ad infilare a 3 punti con cilindro europeo antitrapano.",
    highlight: "Cerniera a scomparsa brevettata — sicurezza invisibile, design puro",
    specs: [
      { label: "Materiale", value: "Acciaio zincato" },
      { label: "Classe antieffrazione", value: "Classe 3 — EN 1627" },
      { label: "Cerniera", value: "A scomparsa brevettata" },
      { label: "Serratura", value: "Ad infilare, 3 punti, cilindro europeo" },
      { label: "Ante", value: "Profili 40/50×30×2 mm" },
      { label: "Verniciatura", value: "Polveri poliesteri a forno 180°C" },
    ],
    colors: "Gamma RAL completa, verniciatura a polvere Classe 2",
    features: ["Cerniera a scomparsa", "Design minimale", "Profilo ultra-sottile", "Edifici di pregio"],
  },
  "Erreci — Marina": {
    name: "Marina",
    brand: "Erreci",
    segment: "Sicurezza Classe 3",
    description:
      "La prima inferriata in alluminio con struttura interna in acciaio: il guscio esterno offre resistenza alla corrosione e leggerezza visiva, il cuore in acciaio garantisce protezione certificata. Ideale per zone costiere.",
    highlight: "Alluminio fuori, acciaio dentro — anticorrosione, ideale zone marine",
    specs: [
      { label: "Esterno", value: "Alluminio anodizzato o verniciato" },
      { label: "Interno", value: "Struttura portante in acciaio blindato" },
      { label: "Classe antieffrazione", value: "Classe 3 — EN 1627" },
      { label: "Serratura", value: "3 punti con cilindro europeo antitrapano" },
      { label: "Resistenza", value: "Anticorrosione per zone costiere" },
      { label: "Produzione", value: "Su misura, 100% Made in Italy" },
    ],
    colors: "Gamma RAL completa, ossidazioni, finiture speciali",
    features: ["Doppio materiale alluminio + acciaio", "Anticorrosione", "Leggerezza visiva", "Ville al mare"],
  },
};

/* ── PERSIANE BLINDATE — Erreci / Ecomet ─────────────────────── */

export const persianeBlinDateDetails: Record<string, ProductDetail> = {
  "Erreci — Maxima Scudo": {
    name: "Maxima Scudo",
    brand: "Erreci",
    segment: "Sicurezza Classe 3",
    description:
      "Persiana con profili sovradimensionati in acciaio e sistema anti-sfilamento nascosto. Serratura a gancio a 3 punti con escursione catenacci 25 mm. Telaio sagomato a tubo profilato pre-zincato 20/10 con aletta di copertura 20 mm.",
    highlight: "Profili acciaio sovradimensionati — anti-sfilamento nascosto, Classe 3",
    specs: [
      { label: "Struttura", value: "Acciaio pre-zincato 20/10" },
      { label: "Classe antieffrazione", value: "Classe 3 — EN 1627" },
      { label: "Serratura", value: "A gancio, 3 punti, escursione 25 mm" },
      { label: "Telaio", value: "Tubo profilato con aletta 20 mm" },
      { label: "Spessore anta", value: "45 mm" },
      { label: "Verniciatura", value: "Polvere Classe 2, gamma RAL + effetto legno" },
    ],
    colors: "Verde, Marrone, Grigio gotico, RAL 7001/1013/9010/8017/6005/6009, effetto legno",
    features: ["Acciaio sovradimensionato", "Anti-sfilamento nascosto", "Ovaline o stecche", "Verniciatura Classe 2"],
  },
  "Erreci — Combi CE": {
    name: "Combi CE",
    brand: "Erreci",
    segment: "Premium",
    description:
      "Sistema combinato che abbina la grata di sicurezza Libera CE alla persiana Maxima sullo stesso cardine, con telaio unico di soli 9 cm. Doppia protezione antieffrazione Classe 3 con innumerevoli combinazioni estetiche.",
    highlight: "Grata + persiana sullo stesso cardine — doppia protezione in 9 cm",
    specs: [
      { label: "Componenti", value: "Grata Libera CE + persiana Maxima" },
      { label: "Classe antieffrazione", value: "Classe 3 — EN 1627" },
      { label: "Spessore telaio", value: "Solo 9 cm" },
      { label: "Persiane abbinabili", value: "Classic, Diamante, Skuro, Scandola" },
      { label: "Cerniere", value: "Ad infilare autolubrificanti con rostri antistrappo" },
      { label: "Serratura grata", value: "3 punti con cilindro europeo antitrapano" },
    ],
    colors: "Gamma RAL completa, finiture differenziate grata/persiana",
    features: ["Doppia protezione", "Telaio unico 9 cm", "Cerniere autolubrificanti", "Apertura indipendente"],
  },
  "Ecomet — ECO Persiana": {
    name: "ECO Persiana",
    brand: "Ecomet",
    segment: "Sicurezza Classe 3",
    description:
      "Persiana blindata in acciaio zincato altoresistenziale assemblata a 90° con serratura a 3 punti e gancio centrale in acciaio temprato. Certificata Classe 3 secondo UNI-ENV 1627. Oltre 28 varianti cromatiche.",
    highlight: "Acciaio altoresistenziale con gancio temprato — Classe 3 certificata",
    specs: [
      { label: "Struttura", value: "Acciaio zincato altoresistenziale, assemblaggio a 90°" },
      { label: "Classe antieffrazione", value: "Classe 3 — UNI-ENV 1627" },
      { label: "Serratura", value: "3 punti: gancio temprato + paletto superiore automatico" },
      { label: "Cilindro", value: "Europeo di sicurezza" },
      { label: "Protezione", value: "Rostri antistrappo, aletta triplice spessore 45/10" },
      { label: "Verniciatura", value: "Polveri poliestere, 24 colori + 4 effetto legno" },
    ],
    colors: "24 colori standard RAL + 4 effetto legno con sublimazione",
    features: ["Gancio temprato", "Paletto automatico", "Rostri antistrappo", "4 finiture legno sublimate"],
  },
  "Ecomet — ECO Combinato": {
    name: "ECO Combinato",
    brand: "Ecomet",
    segment: "Premium",
    description:
      "Sistema combinato grata + persiana su unico cardine nelle versioni ECOPLUS (persiana acciaio) ed ECOCOMB (persiana legno, alluminio o PVC). Profili in acciaio zincato con elementi tondi, quadri o ad occhiello.",
    highlight: "Grata + persiana su unico cardine — ECOPLUS o ECOCOMB, Classe 3",
    specs: [
      { label: "Versioni", value: "ECOPLUS (acciaio) / ECOCOMB (legno, alluminio, PVC)" },
      { label: "Classe antieffrazione", value: "Classe 3 — UNI-ENV 1627" },
      { label: "Grata", value: "Acciaio zincato con elementi tondi, quadri o occhiello" },
      { label: "Configurazione", value: "1 o 2 ante apribili su cardine unico" },
      { label: "Serratura", value: "3 punti con cilindro europeo" },
      { label: "Produzione", value: "Su misura, Made in Italy" },
    ],
    colors: "24 colori RAL per la grata, persiana personalizzabile",
    features: ["ECOPLUS o ECOCOMB", "Grata e persiana su stesso cardine", "Combinabile con materiali esistenti", "Su misura"],
  },
};

/* ── ALLARME E VIDEOSORVEGLIANZA — Inim ──────────────────────── */

export const allarmeDetails: Record<string, ProductDetail> = {
  "Inim — SmartLiving 1050": {
    name: "SmartLiving 1050",
    brand: "Inim",
    segment: "Premium",
    description:
      "Centrale antifurto ibrida filare/wireless Air2 con comunicazione bidirezionale, fino a 50 terminali espandibili. BUS ad alta velocità, gestione da app e cloud Inim. Certificata EN 50131 Grado 3.",
    highlight: "Centrale ibrida filare + wireless Air2 — Grado 3, app e cloud",
    specs: [
      { label: "Tecnologia", value: "Ibrida: BUS filare + wireless Air2 bidirezionale" },
      { label: "Terminali", value: "Fino a 50 (espandibili)" },
      { label: "Certificazione", value: "EN 50131-3 Grado 3" },
      { label: "Connettività", value: "LAN, PSTN, GSM, GPRS, 3G con AES" },
      { label: "Gestione", value: "App Inim + Cloud + SmartLeague" },
      { label: "Contenitore", value: "Metallico con tamper antisabotaggio" },
    ],
    colors: "Contenitore metallico bianco; tastiere bianco e nero",
    features: ["Wireless Air2 868 MHz", "BUS alta velocità", "App + Cloud", "Domotica integrata"],
  },
  "Inim — Prime 060S": {
    name: "Prime 060S",
    brand: "Inim",
    segment: "Premium",
    description:
      "Centrale professionale con scheda di rete integrata. Gestisce fino a 500 sensori e 30 aree, conforme Grado 3 EN 50131 e ATS6 EN 50136. Connettività LAN nativa e servizio Inim Cloud.",
    highlight: "Fino a 500 sensori e 30 aree — scheda di rete integrata, Grado 3",
    specs: [
      { label: "Sensori", value: "Fino a 500 collegabili" },
      { label: "Aree", value: "Fino a 30 gestibili" },
      { label: "Certificazione", value: "EN 50131 Grado 3, EN 50136 ATS6" },
      { label: "Rete", value: "LAN integrata con DHCP, NTP, AES" },
      { label: "Domotica", value: "4 espansioni: avvolgibili, veneziane, luci" },
      { label: "Cloud", value: "Inim Cloud nativo" },
    ],
    colors: "Contenitore metallico professionale",
    features: ["LAN integrata", "500 sensori", "Grado 3 + ATS6", "4 espansioni domotiche"],
  },
  "Inim — Sol": {
    name: "Sol",
    brand: "Inim",
    segment: "Design",
    description:
      "Centrale antifurto completamente wireless, all-in-one, con portata radio fino a 4,5 km. Tecnologia QuickGO per configurazione rapida tramite QR-code. Disponibile nelle versioni Sol/S evo, Sol/G evo e Sol/P con touch-screen.",
    highlight: "All-in-one wireless — portata 4,5 km, configurazione QuickGO con QR-code",
    specs: [
      { label: "Tecnologia", value: "Wireless all-in-one con predisposizione BUS" },
      { label: "Portata radio", value: "Fino a 4,5 km" },
      { label: "Certificazione", value: "EN 50131 Grado 2" },
      { label: "Configurazione", value: "QuickGO — 30 dispositivi via QR-code" },
      { label: "Connettività", value: "Wi-Fi, LAN, Cloud Inim" },
      { label: "Display (Sol/P)", value: "Touch-screen a colori" },
    ],
    colors: "Bianco con frontale elegante; Sol/P con display a colori",
    features: ["Completamente wireless", "QuickGO QR-code", "Portata 4,5 km", "Modulo Wi-Fi"],
  },
  "Inim — Air2 Sensori Wireless": {
    name: "Air2 Sensori Wireless",
    brand: "Inim",
    segment: "Sicurezza",
    description:
      "Gamma di sensori di movimento wireless bidirezionali 868 MHz della serie QTech: volumetrici da interno, a tenda, Pet Immune e da esterno. Comunicazione bidirezionale per verifica deterministica delle segnalazioni.",
    highlight: "Bidirezionali 868 MHz — verifica deterministica, Pet Immune, esterno IP54",
    specs: [
      { label: "Frequenza", value: "868 MHz bidirezionale" },
      { label: "Portata", value: "Fino a 12 m, apertura 90°" },
      { label: "Tecnologie", value: "IR, doppia IR+microonde, Pet Immune (25 kg)" },
      { label: "Certificazione", value: "EN 50131-2-2 Grado 2" },
      { label: "Antisabotaggio", value: "Apertura, rimozione, mascheramento" },
      { label: "Esterno", value: "Copertura 120°, IP54" },
    ],
    colors: "Bianco, design compatto e discreto",
    features: ["Bidirezionale", "Pet Immune 25 kg", "Doppia tecnologia IR+MW", "Antimascheramento"],
  },
};

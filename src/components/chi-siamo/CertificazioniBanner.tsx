import Image from "next/image";
import { FadeInView } from "@/components/animations/FadeInView";

const certificazioni = [
  {
    src: "/certificazioni/cert1.jpg",
    alt: "Certificato VOC classe A+ Oknoplast",
    description:
      "CERTIFICATO VOC in classe A+: i prodotti non rilasciano nell'ambiente alcuna sostanza nociva per la salute.",
  },
  {
    src: "/certificazioni/cert2.jpg",
    alt: "Marchio di qualità europeo ift Rosenheim",
    description:
      "Il marchio di qualità europeo certifica la qualità dei prodotti e gli standard di produzione.",
  },
  {
    src: "/certificazioni/cert3.jpg",
    alt: "Partner KlimaHaus CasaClima Oknoplast",
    description:
      "I Partner CasaClima sono certificati per le competenze tecniche in materia di efficienza energetica.",
  },
  {
    src: "/certificazioni/cert4.jpg",
    alt: "Certificazione ift Zertifiziert Oknoplast",
    description:
      "Il processo produttivo ed il controllo qualità sono conformi alla normativa EN 14351-1:2006+A1:2010.",
  },
  {
    src: "/certificazioni/cert5.jpg",
    alt: "Certificazione BSI Oknoplast",
    description:
      "I processi di gestione ambientale sono conformi ai requisiti ISO 14001:2015.",
  },
  {
    src: "/certificazioni/cert6.jpg",
    alt: "Marcatura CE Oknoplast",
    description:
      "Conformità dei serramenti alla norma UNI EN 14351-1 e alla Direttiva Europea 89/106.",
  },
];

export function CertificazioniBanner() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="px-6 sm:px-10 lg:px-20">
        <FadeInView>
          <p className="text-label text-black-deep/40 text-center mb-4">
            Garanzia di qualità
          </p>
          <h2 className="font-section-title text-black-deep text-center mb-14 lg:mb-20">
            Certificazioni Oknoplast
          </h2>
        </FadeInView>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-14 lg:gap-y-20 w-full">
          {certificazioni.map((cert, i) => (
            <FadeInView key={i} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full h-20 sm:h-24 lg:h-28 mb-5">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 250px"
                  />
                </div>
                <p className="font-display text-sm sm:text-base text-black-deep/70 leading-relaxed max-w-[280px]">
                  {cert.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

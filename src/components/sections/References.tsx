import { useState } from 'react'
import { ChevronDown, FileText } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Oeffentlich gezeigt werden nur Zeugnisse von Pruefungsbehoerden/Schulen,
 * unterzeichnet von Amtspersonen in offizieller Funktion - nicht private
 * Kontaktdaten Dritter. Personenkennziffern (z. B. AHV-Nummer) werden vor
 * der Veroeffentlichung geschwaerzt.
 *
 * Die Arbeitszeugnisse frueherer Arbeitgeber liegen bewusst NICHT im
 * oeffentlichen Ordner (siehe unterlagen-privat/, gitignoriert) - sie tragen
 * private Telefonnummern der Unterzeichnenden fuer Referenzauskuenfte. Sie
 * werden der Bewerbung beigelegt statt weltweit abrufbar gemacht.
 */
const documents = [
  {
    title: 'Abschlusszeugnis Applikationsentwickler EFZ',
    caption: 'Schulisches Abschlusszeugnis, WISS Schulen für Wirtschaft Informatik Immobilien, Zürich, 8. Juli 2026.',
    image: '/BewerbungsPortfolio-Metallbau/zeugnisse/abschlusszeugnis-applikationsentwickler-efz.jpg',
    pdf: '/BewerbungsPortfolio-Metallbau/zeugnisse/abschlusszeugnis-applikationsentwickler-efz.pdf',
  },
  {
    title: 'Fähigkeitszeugnis Metallbauer EFZ',
    caption: 'Eidgenössisches Fähigkeitszeugnis, Amt für Berufsbildung und Mittelschulen Uri, 23. Juni 2015.',
    image: '/BewerbungsPortfolio-Metallbau/zeugnisse/faehigkeitszeugnis-metallbauer-efz.jpg',
    pdf: '/BewerbungsPortfolio-Metallbau/zeugnisse/faehigkeitszeugnis-metallbauer-efz.pdf',
  },
]

export function References() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="references" className="py-24 px-6" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Zeugnisse"
          subtitle="Abschluss- und Fähigkeitszeugnis – Arbeitszeugnisse sende ich gerne auf Anfrage zu"
        />

        <div className="flex justify-center mb-10">
          <button
            type="button"
            onClick={() => setExpanded(v => !v)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all"
            style={{
              background: 'var(--color-accent-glow)',
              color: 'var(--color-accent)',
              border: '1px solid rgba(13,148,136,0.25)',
            }}
            aria-expanded={expanded}
          >
            <ChevronDown
              size={18}
              className="transition-transform duration-300"
              style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
            />
            {expanded ? 'Zeugnisse ausblenden' : 'Zeugnisse anzeigen'}
          </button>
        </div>

        <p
          className="text-center text-sm max-w-xl mx-auto mb-10"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Meine Arbeitszeugnisse früherer Arbeitgeber lege ich jeder Bewerbung bei
          oder sende sie auf Anfrage gerne zu.
        </p>

        {expanded && (
          <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
            {documents.map((doc, i) => (
              <AnimatedSection key={doc.title} delay={(i % 4) * 0.1}>
                <figure className="card h-full overflow-hidden rounded-2xl">
                  <a
                    href={doc.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[var(--color-bg-elevated)]"
                    aria-label={`${doc.title} als PDF öffnen`}
                  >
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="aspect-[4/3] w-full object-contain p-3"
                      loading="lazy"
                    />
                  </a>
                  <figcaption className="border-t border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-base leading-snug" style={{ color: 'var(--color-text-primary)' }}>
                      {doc.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {doc.caption}
                    </p>
                    <a
                      href={doc.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:underline"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      <FileText size={14} />
                      Als PDF öffnen
                    </a>
                  </figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

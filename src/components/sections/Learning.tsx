import { useState } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const collections = [
  {
    title: 'Sammlung von Patrik Hafner',
    description:
      'Persönliche Microsoft Learn Sammlung mit ausgewählten Lernmodulen rund um Softwareentwicklung, Cloud und moderne Technologien.',
    url: 'https://learn.microsoft.com/de-ch/collections/ypg4aetxn7xmjk?&sharingId=2A7ECE64A14FD4F7',
    color: 'from-[#0d9488] to-[#1e293b]',
    image: 'sammlung-persoenlich.webp',
    imageAlt: 'Aufgeschlagenes Buch mit Doktorhut als Sinnbild für die persönliche Lernsammlung',
  },
  {
    title: 'Microsoft Learn Sammlung',
    description:
      'Weitere Lernpfade und Module zur kontinuierlichen Weiterbildung im IT-Bereich.',
    url: 'https://learn.microsoft.com/de-ch/collections/pez5hzt0qrp0m5?&sharingId=2A7ECE64A14FD4F7',
    color: 'from-[#0891b2] to-[#0d9488]',
    image: 'microsoft-learn.webp',
    imageAlt: 'Microsoft-Logo, umgeben von Symbolen für Cloud, Code und Ausbildung',
  },
]

const certificates = [
  {
    title: 'Cambridge English Preliminary - Vorderseite',
    caption: 'Grade B, CEFR Level B1, Overall Score 155 - Prüfung vom 30. Juni 2025',
    image: '/BewerbungsPortfolio-Metallbau/zertifikate/cambridge-preliminary-vorderseite.jpg',
  },
  {
    title: 'Cambridge English Preliminary - Rückseite',
    caption: 'Offizielle Einordnung der Preliminary-Prüfung und CEFR-Kompetenzstufen',
    image: '/BewerbungsPortfolio-Metallbau/zertifikate/cambridge-preliminary-rueckseite.jpg',
  },
]

export function Learning() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="learning" className="py-24 px-6 bg-[var(--color-bg-base)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Weiterbildung"
          subtitle="Zertifikate und kontinuierliches Lernen"
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
            {expanded ? 'Zertifikat ausblenden' : `${certificates.length} Zertifikate anzeigen`}
          </button>
        </div>

        {expanded && (
          <div className="grid gap-6 lg:grid-cols-2 mb-10">
            {certificates.map((certificate, i) => (
              <AnimatedSection key={certificate.title} delay={i * 0.1}>
                <figure className="card h-full overflow-hidden rounded-2xl">
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[var(--color-bg-elevated)]"
                    aria-label={`${certificate.title} in voller Größe öffnen`}
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="aspect-[3/4] w-full object-contain p-3"
                      loading="lazy"
                    />
                  </a>
                  <figcaption className="border-t border-[var(--color-border)] p-5">
                    <h3 className="font-bold text-base leading-snug" style={{ color: 'var(--color-text-primary)' }}>
                      {certificate.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {certificate.caption}
                    </p>
                  </figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        )}

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {collections.map((col, i) => (
            <AnimatedSection key={col.title} delay={i * 0.1}>
              <a
                href={col.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group block h-full rounded-2xl overflow-hidden"
              >
                <div className={`relative h-32 bg-gradient-to-br ${col.color} overflow-hidden`}>
                  <img
                    src={`${import.meta.env.BASE_URL}weiterbildung/${col.image}`}
                    alt={col.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width={760}
                    height={250}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-bold text-base leading-snug" style={{ color: 'var(--color-text-primary)' }}>
                      {col.title}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="shrink-0 mt-0.5 transition-colors group-hover:text-[var(--color-accent)]"
                      style={{ color: 'var(--color-text-muted)' }}
                    />
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                    {col.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:underline"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    <ExternalLink size={14} />
                    Sammlung auf Microsoft Learn ansehen
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-8 text-center">
            <a
              href="https://learn.microsoft.com/de-ch/users/patrikhafner-1163/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              style={{
                background: 'var(--color-accent-glow)',
                color: 'var(--color-accent)',
                border: '1px solid rgba(13,148,136,0.25)',
              }}
            >
              <ExternalLink size={14} />
              Vollständiges Microsoft Learn Profil ansehen
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

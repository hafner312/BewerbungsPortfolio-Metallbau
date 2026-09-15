import { SectionHeading } from '../ui/SectionHeading'

/** Der Fliesstext ist in benannte Abschnitte gegliedert statt ein Textblock */
const abschnitte = [
  {
    nr: '01',
    titel: 'Wer ich bin',
    text: 'Ich bin gelernter Metallbauer EFZ mit über zehn Jahren Berufserfahrung und arbeite mit Leidenschaft an präzisen, hochwertigen Metallbauarbeiten. Dabei verbinde ich handwerkliches Können mit einer strukturierten Arbeitsweise.',
  },
  {
    nr: '02',
    titel: 'Was ich mitbringe',
    text: 'Präzises Arbeiten nach technischen Zeichnungen, technisches Verständnis, Zuverlässigkeit und Qualitätsbewusstsein. Zusätzlich habe ich eine Ausbildung zum Applikationsentwickler EFZ absolviert, was mir ein analytisches, lösungsorientiertes Denken mitgibt.',
  },
  {
    nr: '03',
    titel: 'Womit ich arbeite',
    text: 'Montage- und Fertigungsarbeiten, Schweisstechnik und technisches Zeichnen. Zusätzlich bringe ich IT-Kenntnisse aus meiner Zweitausbildung mit, die mir bei der digitalen Dokumentation und Planung zugutekommen.',
  },
]

/** Eckdaten als Leiste - Kacheln kommen auf der Seite schon oft genug vor */
const fakten = [
  { label: 'Abschluss', value: 'Metallbauer EFZ', zusatz: 'sowie Applikationsentwickler EFZ' },
  { label: 'Berufserfahrung', value: '10+ Jahre', zusatz: 'im Metallbau' },
  { label: 'Schwerpunkt', value: 'Montage & Fertigung', zusatz: 'nach technischer Zeichnung' },
  { label: 'Standort', value: 'Altdorf, Uri', zusatz: 'Schweiz' },
]

export function About() {
  return (
    // Warmer Cremeton - bewusst der einzige warme Abschnitt der Seite.
    <section id="about" className="py-24 px-6" style={{ background: '#faf6ef' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="&Uuml;ber mich"
          subtitle="Metallbauer EFZ mit Zusatzausbildung in der Applikationsentwicklung"
        />

        <div className="grid lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] gap-12 lg:gap-16 items-start">
          {/* ---------------- Portrait ---------------- */}
          {/* Rahmen und Bild liegen in einem eigenen Wrapper - die Unterschrift
              darf breiter sein als das Foto, ohne den Rahmen mitzuziehen. */}
          <figure className="mx-auto w-full max-w-[300px]">
            <div className="relative">
              {/* Versetzter Rahmen statt farbigem Block - ruhig und gerade */}
              <span
                aria-hidden="true"
                className="absolute -z-10 rounded-[20px]"
                style={{
                  inset: '18px -18px -18px 18px',
                  border: '1px solid rgba(120, 100, 70, 0.35)',
                }}
              />
              <img
                src="/BewerbungsPortfolio-Metallbau/photo.jpeg"
                alt="Patrik Hafner"
                width={300}
                height={375}
                loading="lazy"
                className="relative block w-full aspect-[4/5] object-cover object-top rounded-[18px]"
                style={{ boxShadow: '0 14px 36px rgba(60, 45, 25, 0.16)' }}
              />
            </div>
            <figcaption className="mt-5 text-sm text-balance" style={{ color: '#8a7a63' }}>
              <span className="mono">Patrik Hafner</span> &middot; Altdorf, Uri
            </figcaption>
          </figure>

          {/* ---------------- Gegliederter Text ---------------- */}
          <div className="space-y-8">
            {abschnitte.map((a) => (
              <div
                key={a.nr}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-1 items-baseline"
              >
                <span
                  className="mono text-sm font-bold"
                  style={{ color: 'var(--color-accent)' }}
                  aria-hidden="true"
                >
                  {a.nr}
                </span>
                <h3
                  className="display font-bold text-lg leading-tight"
                  style={{ color: '#2b2419' }}
                >
                  {a.titel}
                </h3>
                <span aria-hidden="true" />
                <p
                  className="text-[15px] md:text-base leading-relaxed"
                  style={{ color: '#5b5040' }}
                >
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Eckdaten ueber die volle Breite - in der schmalen Spalte wurde
            "Applikationsentwickler" mitten im Wort umbrochen. */}
        {/* Auf schmalen Displays einspaltig: zweispaltig war die Spalte zu
            schmal fuer "Applikationsentwickler EFZ" und der Text lief ueber. */}
        <dl
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 pt-7"
          style={{ borderTop: '1px solid rgba(120, 100, 70, 0.28)' }}
        >
          {fakten.map((f) => (
            <div key={f.label} className="min-w-0">
              <dt
                className="text-[11px] font-bold uppercase tracking-[0.14em] mb-2"
                style={{ color: 'var(--color-accent-light)' }}
              >
                {f.label}
              </dt>
              <dd
                className="display font-bold text-lg leading-tight"
                style={{ color: '#2b2419', hyphens: 'auto', overflowWrap: 'anywhere' }}
              >
                {f.value}
              </dd>
              <dd className="text-xs mt-1" style={{ color: '#8a7a63' }}>
                {f.zusatz}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { Award, Briefcase, Download, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { timeline } from '../../data/timeline'
import type { TimelineEntry } from '../../types'

/** Symbol, Beschriftung und Farbe je Eintragsart */
const art = {
  work: { Icon: Briefcase, label: 'Berufserfahrung', color: '#0d9488', glow: 'rgba(13,148,136,0.14)' },
  education: { Icon: GraduationCap, label: 'Ausbildung', color: '#b7791f', glow: 'rgba(217,163,58,0.16)' },
  certification: { Icon: Award, label: 'Zertifikat', color: '#0891b2', glow: 'rgba(8,145,178,0.14)' },
} as const

/** true, sobald der Viewport mindestens Desktop-Breite hat */
function useWideScreen() {
  const [wide, setWide] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setWide(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return wide
}

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const wide = useWideScreen()
  const { Icon, label, color, glow } = art[entry.type]

  // Auf dem Desktop wechseln sich die Karten links und rechts der Linie ab
  const links = index % 2 === 0

  // Schmale Displays blenden von unten ein - ein seitlicher Versatz wuerde
  // dort ueber den Bildschirmrand hinausragen.
  const initial = wide
    ? { opacity: 0, x: links ? -40 : 40 }
    : { opacity: 0, y: 24 }

  return (
    <div className="relative pl-16 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-14 pb-10 last:pb-0">
      {/* Punkt auf der Linie - deckend, damit die Linie dahinter verschwindet */}
      <span
        className="absolute left-6 lg:left-1/2 top-7 -translate-x-1/2 flex items-center justify-center w-11 h-11 rounded-full border-2 z-10"
        style={{ borderColor: color, background: '#1b3757', color }}
        aria-hidden="true"
      >
        <Icon size={17} />
      </span>

      <motion.div
        ref={ref}
        initial={initial}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
        className={links ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-2 lg:row-start-auto'}
      >
        <article
          className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
          style={{
            background: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border)',
            boxShadow: '0 1px 2px rgba(15,23,42,0.05), 0 6px 18px rgba(15,23,42,0.06)',
          }}
        >
          <div
            className={`flex flex-wrap items-center gap-2 mb-3 ${links ? 'lg:justify-end' : ''}`}
          >
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
              style={{ background: glow, color }}
            >
              <Icon size={12} />
              {label}
            </span>
            <span
              className="mono text-xs font-medium uppercase tracking-widest"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {entry.date}
            </span>
          </div>

          <h3
            className="display font-bold text-lg leading-snug"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {entry.title}
          </h3>

          <p className="text-sm mt-1 mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            <span className="font-semibold">{entry.organization}</span>
            <span style={{ color: 'var(--color-text-muted)' }}> · {entry.location}</span>
          </p>

          <ul className="space-y-1.5">
            {entry.description.map((punkt, i) => (
              <li
                key={i}
                className={`text-sm flex gap-2 ${links ? 'lg:flex-row-reverse lg:text-right' : ''}`}
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                <span className="flex-1">{punkt}</span>
              </li>
            ))}
          </ul>
        </article>
      </motion.div>
    </div>
  )
}

export function Timeline() {
  return (
    // Eigenes tiefes Blau - bewusst weder das Gruen von Navigation und Footer
    // noch das Mint der uebrigen Abschnitte, damit die Seite nicht eintoenig
    // wirkt und der Lebenslauf als wichtigster Teil hervorsticht.
    <section
      id="timeline"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(165deg, #274a72 0%, #1d3a5c 55%, #162c47 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading
          title="Lebenslauf"
          subtitle="Mein beruflicher und akademischer Werdegang"
          onDark
        />

        <div className="flex justify-center mb-14">
          <Button
            as="a"
            href="/BewerbungsPortfolio-Metallbau/bewerbungsunterlagen/lebenslauf.pdf?v=20260716"
            variant="primary"
          >
            <Download size={16} />
            Lebenslauf als PDF
          </Button>
        </div>

        <div className="relative">
          {/* Durchgehende Linie, oben und unten weich auslaufend */}
          <span
            className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background:
                'linear-gradient(180deg, transparent 0%, rgba(148,197,235,0.45) 8%, rgba(148,197,235,0.45) 92%, transparent 100%)',
            }}
            aria-hidden="true"
          />

          {timeline.map((entry, i) => (
            <TimelineItem key={`${entry.title}-${i}`} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

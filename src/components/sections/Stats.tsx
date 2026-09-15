import { AppWindow, Boxes, Layers, Timer } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { CountUp } from '../ui/CountUp'
import { projects } from '../../data/projects'
import { skills } from '../../data/skills'

const liveDemos = projects.filter((p) => p.liveUrl).length
const technologien = skills.length
const fachbereiche = new Set(skills.map((s) => s.category)).size

const kennzahlen = [
  {
    icon: AppWindow,
    wert: liveDemos,
    suffix: '',
    label: 'Projekte live im Netz',
    hinweis: 'jedes direkt ausprobierbar',
  },
  {
    icon: Boxes,
    wert: technologien,
    suffix: '',
    label: 'Technologien im Einsatz',
    hinweis: 'von React bis Kubernetes',
  },
  {
    icon: Layers,
    wert: fachbereiche,
    suffix: '',
    label: 'Fachbereiche',
    hinweis: 'Frontend, Backend, DevOps, Tools',
  },
  {
    icon: Timer,
    wert: 10,
    suffix: '+',
    label: 'Jahre Berufserfahrung',
    hinweis: 'inkl. Quereinstieg in die Informatik',
  },
]

export function Stats() {
  return (
    <section
      className="py-16 px-6 relative overflow-hidden"
      style={{ background: 'var(--color-bg-surface)' }}
      aria-label="Kennzahlen"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {kennzahlen.map((k, i) => {
          const Icon = k.icon
          return (
            <AnimatedSection key={k.label} delay={i * 0.08}>
              <div className="card h-full rounded-2xl p-5 md:p-6 text-center flex flex-col items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-1"
                  style={{
                    background: 'var(--color-accent-glow)',
                    color: 'var(--color-accent)',
                  }}
                >
                  <Icon size={21} />
                </span>

                <span
                  className="display text-3xl md:text-4xl font-bold leading-none"
                  style={{ color: 'var(--color-accent)' }}
                >
                  <CountUp to={k.wert} suffix={k.suffix} />
                </span>

                <span
                  className="text-sm font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {k.label}
                </span>

                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {k.hinweis}
                </span>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
}

import { Layout, Server, Cloud, Wrench } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { skills, categoryLabels } from '../../data/skills'
import type { Skill } from '../../types'

/**
 * Jede Kategorie bekommt ein eigenes Symbol und eine eigene Farbe, damit sich
 * die vier Karten auf einen Blick unterscheiden lassen. Die Technologie-Chips
 * behalten bewusst ihre offiziellen Markenfarben.
 */
const kategorie: Record<
  Skill['category'],
  { Icon: typeof Layout; von: string; bis: string; ton: string; wash: string; schatten: string }
> = {
  frontend: {
    Icon: Layout, von: '#0891b2', bis: '#22d3ee', ton: '#0e7490',
    wash: 'rgba(34,211,238,0.09)', schatten: 'rgba(34,211,238,0.45)',
  },
  backend: {
    Icon: Server, von: '#6d28d9', bis: '#a78bfa', ton: '#6d28d9',
    wash: 'rgba(167,139,250,0.10)', schatten: 'rgba(139,92,246,0.42)',
  },
  devops: {
    Icon: Cloud, von: '#0d9488', bis: '#2dd4bf', ton: '#0f766e',
    wash: 'rgba(45,212,191,0.10)', schatten: 'rgba(45,212,191,0.45)',
  },
  tools: {
    Icon: Wrench, von: '#b45309', bis: '#fbbf24', ton: '#b45309',
    wash: 'rgba(251,191,36,0.10)', schatten: 'rgba(245,158,11,0.45)',
  },
}

const categories = Object.keys(categoryLabels) as Skill['category'][]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--color-bg-base)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Fähigkeiten"
          subtitle="Technologien und Werkzeuge, mit denen ich arbeite"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const { Icon, von, bis, ton, wash, schatten } = kategorie[cat]
            const items = skills.filter((s) => s.category === cat)

            return (
              <AnimatedSection key={cat} delay={i * 0.08}>
                <div
                  className="group relative h-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(150deg, ${wash} 0%, rgba(255,255,255,0) 55%), #ffffff`,
                    border: '1px solid var(--color-border)',
                    boxShadow: '0 1px 2px rgba(15,23,42,0.05), 0 6px 18px rgba(15,23,42,0.06)',
                  }}
                >
                  {/* Farbleiste oben - macht die Kategorie sofort erkennbar */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1.5"
                    style={{ background: `linear-gradient(90deg, ${von}, ${bis})` }}
                  />

                  {/* Grosses, sehr blasses Symbol als Hintergrundmotiv */}
                  <Icon
                    aria-hidden="true"
                    className="absolute -right-6 -bottom-6 transition-transform duration-500 group-hover:scale-110"
                    size={150}
                    style={{ color: von, opacity: 0.06 }}
                  />

                  <div className="relative p-6 pt-7">
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${von}, ${bis})`,
                          boxShadow: `0 4px 14px ${schatten}`,
                        }}
                      >
                        <Icon size={21} className="text-white" />
                      </span>

                      <div>
                        <h3
                          className="display font-bold text-lg leading-tight"
                          style={{ color: 'var(--color-text-primary)' }}
                        >
                          {categoryLabels[cat]}
                        </h3>
                        <span
                          className="mono inline-block mt-1 px-2 py-0.5 rounded-md text-[11px] font-semibold"
                          style={{ background: wash, color: ton }}
                        >
                          {items.length} Technologien
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge key={skill.name}>{skill.name}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

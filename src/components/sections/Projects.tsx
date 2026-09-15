import { ExternalLink, Github, Info, Sparkles, Users } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { useHoverBeimScrollen } from '../ui/useHoverBeimScrollen'
import { projects } from '../../data/projects'

export function Projects() {
  // sorgt dafuer, dass die Demo-Einblendung auch beim Scrollen erscheint
  const beimScrollen = useHoverBeimScrollen('data-projekt')

  return (
    <section id="projects" className="py-24 px-6" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projekte"
          subtitle="Ausgewählte Arbeiten aus meiner Entwicklertätigkeit"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const isHighlight = !!project.highlight
            const ueberfahren = beimScrollen === project.title
            return (
              <AnimatedSection key={project.title} delay={i * 0.08}>
                <div
                  data-projekt={project.title}
                  className={`card card-project group relative h-full flex flex-col rounded-2xl overflow-hidden ${
                    isHighlight ? 'pulse-ring' : ''
                  }`}
                  style={
                    isHighlight
                      ? { border: '2px solid var(--color-accent)' }
                      : undefined
                  }
                >
                  <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    {project.image ? (
                      <>
                        <img
                          src={`${import.meta.env.BASE_URL}projekte/${project.image}`}
                          alt={project.imageAlt ?? ''}
                          loading="lazy"
                          decoding="async"
                          width={880}
                          height={495}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Zarter Verlauf am unteren Rand: laesst das Bild weich in
                            die Karte uebergehen, statt hart abzuschneiden */}
                        <div
                          className="absolute inset-0"
                          aria-hidden="true"
                          style={{
                            background:
                              'linear-gradient(180deg, rgba(15,23,42,0) 72%, rgba(15,23,42,0.16) 100%)',
                          }}
                        />
                      </>
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-6xl drop-shadow-lg transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6">
                        {project.icon}
                      </span>
                    )}

                    {isHighlight && (
                      <span
                        className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                        style={{ background: 'var(--color-accent-2)' }}
                      >
                        <Sparkles size={13} />
                        {project.highlight}
                      </span>
                    )}

                    {/* Sachliche Kennzeichnung (z. B. Teamprojekt) - bewusst
                        zurueckhaltender als das Hervorhebungs-Abzeichen und
                        links, damit sich beide nie ueberdecken */}
                    {project.label && (
                      <span
                        className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md backdrop-blur-sm"
                        style={{ background: 'rgba(12, 43, 41, 0.85)' }}
                      >
                        <Users size={13} />
                        {project.label}
                      </span>
                    )}

                    {/* Abdunklung ist rein visuell, geklickt wird nur der
                        Knopf darin */}
                    {project.liveUrl && (
                      <div
                        className={`demo-einblendung absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 ${
                          ueberfahren ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ background: 'rgba(8, 40, 38, 0.55)' }}
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105"
                          style={{ background: 'var(--color-accent)' }}
                        >
                          <ExternalLink size={15} />
                          Live-Demo öffnen
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 p-6 gap-3.5">
                    <h3
                      className="display font-bold text-xl leading-snug"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-secondary)' }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    {/* Die Demo wird ueber das Bild geoeffnet, hier steht darum
                        nur noch der Quellcode - im dunklen Gruen der Navigation,
                        damit er sich klar vom Tuerkis der Demo abhebt */}
                    <div
                      className="flex flex-wrap items-center gap-3 pt-4 mt-1"
                      style={{ borderTop: '1px solid rgba(30,58,80,0.14)' }}
                    >
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                          style={{
                            background: 'var(--color-frame)',
                            boxShadow: '0 3px 12px rgba(12,43,41,0.28)',
                          }}
                        >
                          <Github size={15} />
                          Code ansehen
                        </a>
                      )}
                    </div>

                    {project.hostingNote && (
                      <p
                        className="flex items-start gap-1.5 text-xs leading-relaxed"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        <Info size={13} className="mt-0.5 flex-shrink-0" />
                        {project.hostingNote}
                      </p>
                    )}
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

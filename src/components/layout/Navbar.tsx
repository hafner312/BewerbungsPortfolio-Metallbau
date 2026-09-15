import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'

const navLinks = [
  { label: '\u00dcber mich', href: '#about' },
  { label: 'F\u00e4higkeiten', href: '#skills' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Lebenslauf', href: '#timeline' },
  { label: 'Zeugnisse', href: '#references' },
  { label: 'Weiterbildung', href: '#learning' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-Spy: hebt den Menuepunkt des gerade sichtbaren Abschnitts hervor
  useEffect(() => {
    const ids = [...navLinks.map((l) => l.href), '#contact'].map((h) => h.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const sichtbar = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (sichtbar) setActiveId(sichtbar.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? 'shadow-[0_4px_24px_rgba(12,43,41,0.28)]' : ''
      }`}
      style={{
        // Dunkles Tannengruen, oben minim durchscheinend - beim Scrollen deckend
        background: scrolled ? 'var(--color-frame)' : 'rgba(12, 43, 41, 0.88)',
        borderBottom: `1px solid ${scrolled ? 'var(--color-frame-border)' : 'transparent'}`,
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="group flex items-center gap-2.5">
          <span
            className="flex items-center justify-center w-9 h-9 rounded-xl text-white font-bold text-sm shadow-md transition-transform duration-200 group-hover:scale-105 group-hover:rotate-3"
            style={{
              background:
                'linear-gradient(135deg, var(--color-accent), var(--color-accent-light))',
            }}
          >
            PH
          </span>
          <span className="display font-bold text-lg text-white tracking-tight">
            Patrik Hafner
          </span>
        </a>

        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => {
            const aktiv = activeId === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={aktiv ? 'true' : undefined}
                className={`group relative px-1 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  aktiv
                    ? 'text-[var(--color-frame-accent)]'
                    : 'text-[var(--color-frame-text)] hover:text-[var(--color-frame-accent)]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-1 right-1 -bottom-0.5 h-0.5 rounded-full bg-[var(--color-frame-accent)] origin-left transition-transform duration-300 ${
                    aktiv ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            )
          })}
          <a
            href="#contact"
            className="ml-2 lg:ml-4 px-5 py-2 rounded-full text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
            style={{
              background:
                'linear-gradient(135deg, var(--color-accent), var(--color-accent-light))',
            }}
          >
            Kontakt
          </a>
        </div>

        <button
          className="md:hidden text-[var(--color-frame-text)] hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Men\u00fc \u00f6ffnen"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
        style={{
          scaleX: progress,
          background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-cyan))',
        }}
        aria-hidden="true"
      />

      {menuOpen && (
        <div
          className="md:hidden backdrop-blur-xl shadow-md px-6 py-4"
          style={{
            background: 'var(--color-frame)',
            borderBottom: '1px solid var(--color-frame-border)',
          }}
        >
          <ul className="flex flex-col gap-1">
            {[...navLinks, { label: 'Kontakt', href: '#contact' }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2.5 px-2 rounded-lg text-[var(--color-frame-text)] hover:text-[var(--color-frame-accent)] hover:bg-[var(--color-frame-soft)] transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

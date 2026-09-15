import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { ChevronDown, MapPin } from 'lucide-react'
import { Button } from '../ui/Button'
import { RotatingText } from '../ui/RotatingText'
import { CodeCard } from '../ui/CodeCard'

const rollen = [
  'Metallbauer EFZ',
  'Montage & Fertigung',
  'Schweisstechnik',
  'Technisches Zeichnen',
  'Applikationsentwicklung',
]

const stack = ['Metallbau', 'Montage', 'Schweissen', 'Konstruktion', 'Qualitätskontrolle', 'IT-Affinität']

export function Hero() {
  return (
    // pt-28/pb-20 halten den Inhalt frei von der fixen Navigationsleiste (4rem)
    // und vom Scroll-Pfeil am unteren Rand.
    <section
      id="hero"
      className="grain min-h-screen flex items-center px-6 pt-28 pb-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #04201f 0%, #06282f 45%, #041a24 100%)' }}
    >
      <div className="aurora" aria-hidden="true" />
      <div className="aurora aurora-2" aria-hidden="true" />
      {/* Abdunklung ueber dem Farbnebel: haelt den Text jederzeit gut lesbar */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(70% 60% at 30% 45%, rgba(3, 20, 22, 0.72) 0%, rgba(3, 20, 22, 0.35) 55%, transparent 100%)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
        {/* ---------------- linke Spalte: Inhalt ---------------- */}
        <div className="text-center lg:text-left">
          <span
            className="rise-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border backdrop-blur-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#a7f3e4',
              borderColor: 'rgba(167, 243, 228, 0.35)',
              boxShadow: '0 2px 16px rgba(20, 184, 166, 0.25)',
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                style={{ background: 'var(--color-success)' }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ background: 'var(--color-success)' }}
              />
            </span>
            Offen f&uuml;r neue Stellen &middot; sofort verf&uuml;gbar
          </span>

          <h1
            className="shine-text-light rise-in text-5xl md:text-6xl xl:text-7xl font-bold mb-4 leading-[1.05] pb-1"
            style={{ animationDelay: '0.08s' }}
          >
            Patrik Hafner
          </h1>

          <p
            className="rise-in text-lg md:text-xl mb-2"
            style={{ color: 'rgba(255,255,255,0.9)', animationDelay: '0.16s' }}
          >
            Metallbauer EFZ
          </p>

          <p
            className="rise-in text-lg md:text-xl mb-6 font-medium flex items-center justify-center lg:justify-start gap-2 flex-wrap"
            style={{ color: 'rgba(255,255,255,0.9)', animationDelay: '0.22s' }}
          >
            <span className="font-light" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Schwerpunkt:
            </span>
            <RotatingText items={rollen} />
          </p>

          <p
            className="rise-in text-base md:text-lg mb-7 max-w-xl mx-auto lg:mx-0"
            style={{ color: 'rgba(255,255,255,0.72)', lineHeight: '1.75', animationDelay: '0.3s' }}
          >
            Ich arbeite präzise und zuverlässig im Metallbau, von der technischen
            Zeichnung bis zur fertigen Montage – ergänzt durch Kenntnisse in der
            Applikationsentwicklung.
          </p>

          {/* Technologien als Beleg statt blosser Behauptung */}
          <ul
            className="rise-in flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            style={{ animationDelay: '0.36s' }}
          >
            {stack.map((t) => (
              <li
                key={t}
                className="mono px-3 py-1 rounded-lg text-xs font-medium"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.82)',
                  border: '1px solid rgba(255,255,255,0.16)',
                }}
              >
                {t}
              </li>
            ))}
          </ul>

          <div
            className="rise-in flex flex-wrap gap-4 justify-center lg:justify-start items-center"
            style={{ animationDelay: '0.42s' }}
          >
            <Button as="a" href="#projects" variant="primary" size="lg">
              Meine Projekte
            </Button>
            <Button
              as="a"
              href="/BewerbungsPortfolio-Metallbau/bewerbungsunterlagen/lebenslauf.pdf?v=20260716"
              variant="outlineLight"
              size="lg"
            >
              Lebenslauf als PDF
            </Button>
          </div>

          <div
            className="rise-in flex gap-5 justify-center lg:justify-start items-center mt-7"
            style={{ animationDelay: '0.48s' }}
          >
            <a
              href="https://github.com/hafner312"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.7)' }}
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:hafner312@gmail.com"
              className="transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.7)' }}
              aria-label="E-Mail senden"
            >
              <MdEmail size={24} />
            </a>
            <span
              className="inline-flex items-center gap-1.5 text-sm"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              <MapPin size={15} />
              Altdorf, Uri
            </span>
          </div>
        </div>

        {/* ---------------- rechte Spalte: Code-Karte ----------------
            Auch auf Smartphone und Tablet sichtbar; dort steht sie unter
            dem Text und ist mittig gesetzt. */}
        <div
          className="rise-in flex justify-center lg:justify-end"
          style={{ animationDelay: '0.3s' }}
        >
          <CodeCard />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors animate-bounce z-10"
        style={{ color: 'rgba(255,255,255,0.65)' }}
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}

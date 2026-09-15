/**
 * Kleine Code-Karte fuer den Hero: zeigt die wichtigsten Eckdaten in der
 * Sprache, in der ich arbeite - kompakter als ein Fliesstext und fuellt die
 * rechte Seite des Hero, ohne vom Namen abzulenken.
 */
const zeilen: { einzug?: number; teile: [string, string][] }[] = [
  { teile: [['const', 'k'], [' patrik', 'v'], [' = {', 'p']] },
  { einzug: 1, teile: [['rolle', 'a'], [': ', 'p'], ["'Metallbauer EFZ'", 's'], [',', 'p']] },
  { einzug: 1, teile: [['standort', 'a'], [': ', 'p'], ["'Altdorf, Uri'", 's'], [',', 'p']] },
  { einzug: 1, teile: [['stack', 'a'], [': [', 'p'], ["'Montage'", 's'], [', ', 'p'], ["'Schweissen'", 's'], [', ', 'p'], ["'Konstruktion'", 's'], ['],', 'p']] },
  { einzug: 1, teile: [['sucht', 'a'], [': ', 'p'], ["'Festanstellung'", 's'], [',', 'p']] },
  { einzug: 1, teile: [['verfuegbar', 'a'], [': ', 'p'], ['true', 'b'], [',', 'p']] },
  { teile: [['}', 'p']] },
]

const farbe: Record<string, string> = {
  k: '#c084fc', // Schluesselwort
  v: '#7dd3fc', // Variablenname
  a: '#5eead4', // Eigenschaft
  s: '#fcd34d', // Zeichenkette
  b: '#fb923c', // Wahrheitswert
  p: '#94a3b8', // Satzzeichen
}

export function CodeCard() {
  return (
    <div
      // Die leichte Neigung erst ab Desktop - auf schmalen Displays wirkt sie
      // gedraengt und kostet unnoetig Breite.
      className="relative w-full max-w-md rounded-2xl overflow-hidden transition-transform duration-500 ease-out lg:-rotate-[1.6deg] hover:rotate-0 hover:-translate-y-1"
      style={{
        background: 'rgba(6, 20, 31, 0.82)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(125, 211, 252, 0.28)',
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.04), 0 28px 70px rgba(0, 0, 0, 0.55), 0 0 60px rgba(45, 212, 191, 0.18)',
      }}
    >
      {/* Fensterleiste */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: '#f87171' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#fbbf24' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#34d399' }} />
        <span className="mono ml-2 text-xs" style={{ color: '#64748b' }}>
          patrik.ts
        </span>
      </div>

      {/* Schrift waechst mit der Breite, damit die laengste Zeile
          ("rolle: 'Applikationsentwickler EFZ',") auch auf schmalen
          Displays ohne seitliches Scrollen hineinpasst */}
      <pre
        className="mono px-4 py-4 text-[10.5px] sm:px-5 sm:py-5 sm:text-[12px] lg:text-[13px] leading-relaxed overflow-x-auto"
        style={{ color: '#94a3b8', margin: 0 }}
      >
        <code>
          {zeilen.map((zeile, i) => (
            <div key={i} style={{ paddingLeft: `${(zeile.einzug ?? 0) * 1.5}rem` }}>
              {zeile.teile.map(([text, typ], j) => (
                <span key={j} style={{ color: farbe[typ] }}>
                  {text}
                </span>
              ))}
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

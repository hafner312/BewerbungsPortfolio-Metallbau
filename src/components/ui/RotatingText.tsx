import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface RotatingTextProps {
  items: string[]
  /** Anzeigedauer pro Eintrag in Millisekunden */
  interval?: number
  className?: string
}

/**
 * Blendet nacheinander verschiedene Begriffe ein – der Platz bleibt dabei
 * reserviert, damit die Zeile darunter nicht springt.
 */
export function RotatingText({ items, interval = 2600, className = '' }: RotatingTextProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, interval)
    return () => window.clearInterval(id)
  }, [items.length, interval])

  return (
    <span className={`relative inline-grid align-bottom ${className}`}>
      {/* Unsichtbarer längster Eintrag hält die Breite stabil */}
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">
        {items.reduce((a, b) => (b.length > a.length ? b : a), '')}
      </span>

      {/* Kein mode="wait": beide Eintraege liegen in derselben Rasterzelle und
          blenden ineinander ueber - sonst entstuende kurz eine leere Luecke. */}
      <AnimatePresence>
        <motion.span
          key={items[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="col-start-1 row-start-1 whitespace-nowrap text-left"
          style={{ color: 'var(--color-accent)' }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

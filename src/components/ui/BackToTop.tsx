import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

/** Runder Knopf unten rechts, der ab einem Drittel Scrolltiefe erscheint. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Zurück nach oben"
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full text-white hover:-translate-y-0.5 transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-light))',
            // Heller Ring: sonst geht der Knopf auf dem dunklen Footer unter
            boxShadow:
              '0 0 0 2px rgba(255,255,255,0.85), 0 6px 20px rgba(12,43,41,0.45)',
          }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

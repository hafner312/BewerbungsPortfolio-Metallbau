import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface CountUpProps {
  to: number
  duration?: number
  suffix?: string
}

/** Zählt beim Sichtbarwerden von 0 auf den Zielwert hoch. */
export function CountUp({ to, duration = 1400, suffix = '' }: CountUpProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }

    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // weiches Ausklingen zum Schluss
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * to))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

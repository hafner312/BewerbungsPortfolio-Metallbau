import { useEffect, useState } from 'react'

/**
 * Browser aktualisieren den :hover-Zustand beim Scrollen nicht, solange die
 * Maus stillsteht. Wer mit dem Zeiger ueber den Projekten scrollt, sieht die
 * Demo-Einblendung deshalb erst, wenn er die Maus bewegt.
 *
 * Der Hook merkt sich die letzte Zeigerposition und ermittelt daraus, welches
 * Element mit dem angegebenen Datenattribut gerade darunter liegt - sowohl
 * beim Scrollen als auch bei jeder Zeigerbewegung. Die Bewegung ist wichtig:
 * sonst bliebe die zuletzt beim Scrollen erkannte Karte markiert, auch wenn
 * der Zeiger laengst auf einer anderen liegt.
 *
 * @param attribut Datenattribut, das die Elemente kennzeichnet (z. B. 'data-projekt')
 * @returns Wert des Attributs des aktuell ueberfahrenen Elements, sonst null
 */
export function useHoverBeimScrollen(attribut: string): string | null {
  const [aktiv, setAktiv] = useState<string | null>(null)

  useEffect(() => {
    // Bewusst ohne Media-Query-Wache: die Listener sind guenstig, und auf
    // Touch-Geraeten gibt es schlicht keine Zeigerbewegung, die sie ausloest.
    let x = -1
    let y = -1
    let zuletzt = 0

    // Zeitliche Drosselung statt requestAnimationFrame: rAF ruht in nicht
    // gezeichneten Tabs, und elementFromPoint ist guenstig genug.
    const pruefen = () => {
      if (x < 0) return
      const jetzt = Date.now()
      if (jetzt - zuletzt < 60) return
      zuletzt = jetzt

      const unterZeiger = document.elementFromPoint(x, y)
      const karte = unterZeiger?.closest(`[${attribut}]`)
      // Gleicher Wert loest in React kein erneutes Rendern aus
      setAktiv(karte ? karte.getAttribute(attribut) : null)
    }

    const bewegt = (e: PointerEvent | MouseEvent) => {
      x = e.clientX
      y = e.clientY
      pruefen()
    }

    // Verlaesst der Zeiger das Fenster, kommen keine Bewegungen mehr -
    // die Markierung wuerde sonst haengen bleiben.
    const verlassen = () => {
      x = -1
      y = -1
      setAktiv(null)
    }

    window.addEventListener('pointermove', bewegt, { passive: true })
    window.addEventListener('mousemove', bewegt, { passive: true })
    window.addEventListener('scroll', pruefen, { passive: true })
    document.addEventListener('pointerleave', verlassen)
    window.addEventListener('blur', verlassen)

    return () => {
      window.removeEventListener('pointermove', bewegt)
      window.removeEventListener('mousemove', bewegt)
      window.removeEventListener('scroll', pruefen)
      document.removeEventListener('pointerleave', verlassen)
      window.removeEventListener('blur', verlassen)
    }
  }, [attribut])

  return aktiv
}

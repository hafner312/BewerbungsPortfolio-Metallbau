interface SectionHeadingProps {
  title: string
  subtitle?: string
  /** Helle Schrift fuer Abschnitte mit dunklem Hintergrund */
  onDark?: boolean
}

export function SectionHeading({ title, subtitle, onDark = false }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2
        className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
        style={{ color: onDark ? '#ffffff' : 'var(--color-text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base md:text-lg max-w-xl mx-auto"
          style={{ color: onDark ? 'rgba(255,255,255,0.74)' : 'var(--color-text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-5 flex items-center justify-center gap-1.5" aria-hidden="true">
        <span
          className="w-12 h-[3px] rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${
              onDark ? '#7dd3fc' : 'var(--color-accent)'
            })`,
          }}
        />
        <span
          className="w-2 h-2 rounded-full"
          style={{ background: onDark ? '#7dd3fc' : 'var(--color-accent)' }}
        />
        <span
          className="w-12 h-[3px] rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--color-accent-2), transparent)' }}
        />
      </div>
    </div>
  )
}

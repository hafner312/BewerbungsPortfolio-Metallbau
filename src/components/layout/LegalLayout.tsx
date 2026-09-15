import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg-base)' }}>
      <header className="px-6 py-6">
        <div className="max-w-3xl mx-auto">
          <a
            href="/BewerbungsPortfolio-Metallbau/"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <ArrowLeft size={16} />
            Zurück zur Startseite
          </a>
        </div>
      </header>

      <main className="flex-1 px-6 pb-24">
        <div className="max-w-3xl mx-auto card rounded-2xl p-8 md:p-12" style={{ background: 'var(--color-bg-surface)' }}>
          <h1 className="font-bold text-3xl mb-8" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)' }}>
            {title}
          </h1>
          <div className="space-y-6 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {children}
          </div>
        </div>
      </main>

      <footer className="px-6 py-8 text-center text-sm" style={{ color: 'var(--color-text-muted)' }}>
        <a href="/BewerbungsPortfolio-Metallbau/impressum.html" className="hover:underline" style={{ color: 'var(--color-text-muted)' }}>
          Impressum
        </a>
        {' · '}
        <a href="/BewerbungsPortfolio-Metallbau/datenschutz.html" className="hover:underline" style={{ color: 'var(--color-text-muted)' }}>
          Datenschutz
        </a>
      </footer>
    </div>
  )
}

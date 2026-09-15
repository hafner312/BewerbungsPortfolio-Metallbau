import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AlertCircle, CheckCircle, Mail, MapPin, Send } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { sendContactEmail } from '../../lib/emailjs'
import type { ContactFormData } from '../../types'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>()

  async function onSubmit(data: ContactFormData) {
    try {
      await sendContactEmail(data)
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:bg-white focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent-glow)] transition-all duration-200'

  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'var(--color-bg-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Kontakt"
          subtitle="Ich freue mich über Nachrichten und Anfragen"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Du hast eine spannende Stelle oder ein Projekt? Schreib mir gerne.
                Ich antworte in der Regel innerhalb von 24 Stunden.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:hafner312@gmail.com"
                  className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] transition-colors"
                >
                  <Mail size={18} className="text-[var(--color-accent)]" />
                  hafner312@gmail.com
                </a>
                <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <MapPin size={18} className="text-[var(--color-accent)]" />
                  Altdorf, Uri – Schweiz
                </div>
                <a
                  href="https://github.com/hafner312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-light)] transition-colors"
                >
                  <FaGithub size={18} className="text-[var(--color-accent)]" />
                  github.com/hafner312
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 p-8 rounded-2xl border border-[var(--color-success)]/30 bg-[var(--color-success)]/10">
                <CheckCircle size={48} className="text-[var(--color-success)]" />
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                  Nachricht gesendet!
                </h3>
                <p className="text-[var(--color-text-secondary)] text-center">
                  Vielen Dank! Ich melde mich so bald wie möglich.
                </p>
                <Button variant="ghost" onClick={() => setStatus('idle')}>
                  Weitere Nachricht senden
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card space-y-4 rounded-3xl p-6 md:p-8"
                noValidate
              >
                <div>
                  <input
                    {...register('from_name', { required: 'Name ist erforderlich' })}
                    placeholder="Dein Name"
                    className={inputClass}
                  />
                  {errors.from_name && (
                    <p className="text-[var(--color-error)] text-xs mt-1">
                      {errors.from_name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register('from_email', {
                      required: 'E-Mail ist erforderlich',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Ungültige E-Mail' },
                    })}
                    type="email"
                    placeholder="deine@email.de"
                    className={inputClass}
                  />
                  {errors.from_email && (
                    <p className="text-[var(--color-error)] text-xs mt-1">
                      {errors.from_email.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register('subject', { required: 'Betreff ist erforderlich' })}
                    placeholder="Betreff"
                    className={inputClass}
                  />
                  {errors.subject && (
                    <p className="text-[var(--color-error)] text-xs mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register('message', {
                      required: 'Nachricht ist erforderlich',
                      minLength: { value: 20, message: 'Mindestens 20 Zeichen' },
                    })}
                    rows={5}
                    placeholder="Deine Nachricht..."
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-[var(--color-error)] text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-[var(--color-error)] text-sm p-3 rounded-lg bg-[var(--color-error)]/10">
                    <AlertCircle size={16} />
                    Fehler beim Senden. Bitte versuche es erneut.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Wird gesendet...'
                  ) : (
                    <>
                      <Send size={16} />
                      Nachricht senden
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-[var(--color-text-muted)]">
                  Mit dem Absenden stimmst du der Verarbeitung deiner Angaben gemäss{' '}
                  <a href="/BewerbungsPortfolio-Metallbau/datenschutz.html" className="underline hover:text-[var(--color-accent)]">
                    Datenschutzerklärung
                  </a>{' '}
                  zu.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

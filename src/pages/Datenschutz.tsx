import { LegalLayout } from '../components/layout/LegalLayout'

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <section>
        <h2 className="font-semibold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Verantwortliche Person
        </h2>
        <p>
          Patrik Hafner, Altdorf, Uri &middot; Schweiz<br />
          E-Mail: <a href="mailto:hafner312@gmail.com" style={{ color: 'var(--color-accent)' }}>hafner312@gmail.com</a>
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Kontaktformular
        </h2>
        <p>
          Wenn du das Kontaktformular auf dieser Website nutzt, werden die von dir eingegebenen
          Daten (Name, E-Mail-Adresse, Nachricht) über den Dienst EmailJS verarbeitet und per
          E-Mail an mich weitergeleitet, um deine Anfrage zu beantworten. Diese Website selbst
          speichert keine Formulardaten in einer Datenbank. Rechtsgrundlage ist deine Einwilligung
          durch das aktive Absenden des Formulars.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Hosting
        </h2>
        <p>
          Diese Website wird über GitHub Pages (GitHub Inc.) gehostet. Beim Aufruf der Website
          verarbeitet der Hosting-Anbieter automatisch technische Zugriffsdaten (z. B.
          IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite) in Server-Logs, wie dies
          bei jedem Webseitenaufruf technisch üblich ist. Auf diese Logs habe ich keinen Zugriff
          und keinen Einfluss.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Keine Cookies, kein Tracking
        </h2>
        <p>
          Diese Website verwendet keine Analyse- oder Tracking-Cookies und keine Werbe- oder
          Analysedienste wie z. B. Google Analytics.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Deine Rechte
        </h2>
        <p>
          Nach dem Schweizer Datenschutzgesetz (DSG) hast du das Recht auf Auskunft, Berichtigung,
          Löschung und Einschränkung der Verarbeitung deiner Daten. Wende dich dazu einfach per
          E-Mail an mich.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Änderungen
        </h2>
        <p>
          Diese Datenschutzerklärung kann bei Bedarf angepasst werden, z. B. bei Änderungen der
          Website oder der rechtlichen Vorgaben. Stand: Juli 2026.
        </p>
      </section>
    </LegalLayout>
  )
}

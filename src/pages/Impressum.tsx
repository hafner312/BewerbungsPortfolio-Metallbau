import { LegalLayout } from '../components/layout/LegalLayout'

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <section>
        <h2 className="font-semibold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Verantwortlich für den Inhalt
        </h2>
        <p>
          Patrik Hafner<br />
          Altdorf, Uri &middot; Schweiz<br />
          E-Mail: <a href="mailto:hafner312@gmail.com" style={{ color: 'var(--color-accent)' }}>hafner312@gmail.com</a>
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Art der Website
        </h2>
        <p>
          Diese Website ist ein privates, nicht-kommerzielles Portfolio zur Bewerbung um
          Arbeitsstellen. Es werden keine Waren oder Dienstleistungen angeboten oder verkauft.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-base mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Haftungsausschluss
        </h2>
        <p>
          Für die Inhalte externer Links (z. B. zu GitHub oder Microsoft Learn) wird keine
          Haftung übernommen. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren
          Betreiber verantwortlich.
        </p>
      </section>
    </LegalLayout>
  )
}

import styles from './booking.module.css'

export default function Booking() {
  return (
    <section className={styles.booking} id="rezervacia">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.label}>Rezervácia termínu</p>

          <h2>Vyberte si termín, ktorý vám vyhovuje</h2>

          <p className={styles.text}>
            Rezerváciu si môžete jednoducho vytvoriť online cez rezervačný
            systém. Vyberte si voľný dátum a čas z aktuálne dostupných termínov.
          </p>

          <div className={styles.calendlyWrapper}>
            <iframe
              src="https://calendly.com/caspredusu/30min?hide_gdpr_banner=1&hide_landing_page_details=1&hide_landing_page_title=1&background_color=ffffff&text_color=000000&primary_color=000000"
              width="100%"
              height="700"
              frameBorder="0"
              title="Calendly rezervácia"
            />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContent}>
            <p className={styles.cardLabel}>Online rezervácia</p>

            <h3>Dostupné termíny</h3>

            <ul>
              <li>Jednoduchý výber dátumu</li>
              <li>Automatické potvrdenie rezervácie</li>
              <li>Prehľadné dostupné časy</li>
              <li>Rezervácia z mobilu aj počítača</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
import styles from './contact.module.css'

export function Contact() {
  return (
    <section id="kontakt" className="section">
      <div className={`container ${styles.wrap}`}>
        <div>
          <p className="eyebrow">Kontakt a rezervácia</p>
          <h2>Máte otázky alebo sa chcete objednať?</h2>
          <p>
            Vyplňte kontaktný formulár a ozvem sa vám čo najskôr. Do správy
            môžete napísať, o akú službu máte záujem, preferovaný termín alebo
            stručný popis otázky.
          </p>
        </div>

        <form className={styles.form} action="/api/contact" method="POST">
          <label>
            Meno
            <input type="text" name="name" required />
          </label>

          <label>
            E-mail
            <input type="email" name="email" required />
          </label>

          <label>
            Telefón
            <input type="tel" name="phone" />
          </label>

          <label>
            Služba
            <select name="service" defaultValue="">
              <option value="" disabled>
                Vyberte službu
              </option>
              <option>Emočný kód</option>
              <option>Masáž hlavy</option>
              <option>Masáž rúk</option>
              <option>Workshop</option>
            </select>
          </label>

          <label>
            Správa
            <textarea name="message" rows={5} required />
          </label>

          <button type="submit" className="btn">
            Odoslať
          </button>
        </form>
      </div>
    </section>
  )
}

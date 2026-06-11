import styles from './contact.module.css'

export function Contact() {
  return (
    <section id="kontakt" className="section">
      <div className={`container ${styles.wrap}`}>
        <div className={styles.card}>
          <p className="eyebrow">Kontaktné údaje</p>

          <h2>Kontakt</h2>

          <p>
            V prípade otázok ma môžete kontaktovať e-mailom.
            Rezerváciu termínu si jednoducho vytvoríte cez online rezervačný
            systém.
          </p>

          <div className={styles.info}>
            <div>
              <strong>E-mail</strong>
              <p>
                <a href="mailto:caspredusu@gmail.com">
                  caspredusu@gmail.com
                </a>
              </p>
            </div>

            <div>
              <strong>Kontaktná osoba</strong>
              <p>Mária Rehušová</p>
            </div>

            <div>
              <strong>Spoločnosť</strong>
              <p>REKOFIN MR, s.r.o.</p>
            </div>

            <div>
              <strong>Sídlo</strong>
              <p>
                Šustekova 15
                <br />
                851 04 Bratislava – Petržalka
              </p>
            </div>

            <div>
              <strong>IČO</strong>
              <p>50 439 707</p>
            </div>

            <div>
              <strong>Obchodný register</strong>
              <p>
                Mestský súd Bratislava III
                <br />
                oddiel Sro, vložka č. 113432/B
              </p>
            </div>

            <div>
              <strong>IBAN</strong>
              <p>SK05 8330 0000 0023 0128 6494</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

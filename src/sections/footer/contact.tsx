import Link from 'next/link'
import { HouseIcon } from 'lucide-react'
import styles from './legal.module.css'

export function Contact() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <HouseIcon size={18} />
          <span>Návrat na hlavnú stránku</span>
        </Link>

        <h1>Kontakt</h1>

        <p>
          V prípade otázok ma môžete kontaktovať e-mailom.
          Rezerváciu termínu si jednoducho vytvoríte cez online rezervačný
          systém.
        </p>

        <div className={styles.card}>
          <p>
            <strong>E-mail</strong>
            <br />
            <a href="mailto:caspredusu@gmail.com">
              caspredusu@gmail.com
            </a>
          </p>

          <p>
            <strong>Kontaktná osoba</strong>
            <br />
            Mária Rehušová
          </p>

          <p>
            <strong>Spoločnosť</strong>
            <br />
            REKOFIN MR, s.r.o.
          </p>

          <p>
            <strong>Sídlo</strong>
            <br />
            Šustekova 15
            <br />
            851 04 Bratislava – Petržalka
          </p>

          <p>
            <strong>IČO</strong>
            <br />
            50 439 707
          </p>

          <p>
            <strong>Obchodný register</strong>
            <br />
            Mestský súd Bratislava III
            <br />
            oddiel Sro, vložka č. 113432/B
          </p>

          <p>
            <strong>IBAN</strong>
            <br />
            SK05 8330 0000 0023 0128 6494
          </p>
        </div>
      </div>
    </main>
  )
}
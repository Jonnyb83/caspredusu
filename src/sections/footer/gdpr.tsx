import Link from 'next/link'
import { ArrowLeft, HouseIcon } from 'lucide-react'
import styles from './legal.module.css'

export function Gdpr() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <HouseIcon size={18} />
          <span>Návrat na hlavnú stránku</span>
        </Link>

        <h1>Ochrana osobných údajov (GDPR)</h1>

        <div className={styles.card}>
          <p>
            Prevádzkovateľ webovej stránky spracúva osobné údaje v súlade
            s platnými právnymi predpismi Slovenskej republiky a Európskej únie.
          </p>

          <h2>Aké údaje spracúvame</h2>

          <p>
            Meno, e-mailová adresa, telefónne číslo a ďalšie údaje, ktoré nám
            dobrovoľne poskytnete pri rezervácii služby alebo komunikácii.
          </p>

          <h2>Účel spracovania</h2>

          <p>
            Údaje používame výlučne za účelom komunikácie, rezervácie termínov
            a poskytovania služieb.
          </p>

          <h2>Ochrana údajov</h2>

          <p>
            Vaše údaje neposkytujeme tretím stranám, pokiaľ to nevyžaduje zákon.
          </p>

          <h2>Práva dotknutej osoby</h2>

          <p>
            Máte právo požiadať o prístup k údajom, ich opravu, vymazanie alebo
            obmedzenie spracovania.
          </p>
        </div>
      </div>
    </main>
  )
}
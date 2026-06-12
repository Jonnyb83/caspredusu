import Link from 'next/link'
import { ArrowLeft, HouseIcon } from 'lucide-react'
import styles from './legal.module.css'

export function Vop() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <HouseIcon size={18} />
          <span>Návrat na hlavnú stránku</span>
        </Link>

        <h1>Všeobecné obchodné podmienky</h1>

        <div className={styles.card}>
          <p>
            Tieto všeobecné obchodné podmienky upravujú základné pravidlá
            poskytovania služieb v oblasti relaxácie, masáží a podpory
            emocionálnej pohody.
          </p>

          <h2>Poskytovateľ služieb</h2>
          <p>
            Služby poskytuje Mária Rehušová prostredníctvom spoločnosti
            REKOFIN MR, s.r.o.
          </p>

          <h2>Objednanie služby</h2>
          <p>
            Klient si môže službu objednať prostredníctvom online rezervačného
            systému alebo e-mailovej komunikácie.
          </p>

          <h2>Ceny služieb</h2>
          <p>
            Ceny služieb sú uvedené v cenníku na webovej stránke.
            Prevádzkovateľ si vyhradzuje právo ceny aktualizovať.
          </p>

          <h2>Zrušenie termínu</h2>
          <p>
            V prípade, že sa klient nemôže dostaviť na dohodnutý termín,
            odporúčame oznámiť zrušenie alebo zmenu termínu čo najskôr.
          </p>

          <h2>Dôležité upozornenie</h2>
          <p>
            Poskytované služby slúžia ako podpora psychickej pohody,
            relaxácie a osobného rozvoja. Nenahrádzajú lekársku,
            psychologickú ani inú odbornú zdravotnú starostlivosť.
          </p>

          <h2>Záverečné ustanovenia</h2>
          <p>
            Používaním webovej stránky a objednaním služby klient potvrdzuje,
            že sa oboznámil s týmito podmienkami.
          </p>
        </div>
      </div>
    </main>
  )
}
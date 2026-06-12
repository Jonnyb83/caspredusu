import styles from './legal.module.css'

export function Cookies() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1>Cookies</h1>

        <div className={styles.card}>
          <p>
            Táto webová stránka môže používať súbory cookies za účelom
            zabezpečenia správneho fungovania webu a zlepšenia používateľského
            zážitku.
          </p>

          <h2>Čo sú cookies</h2>

          <p>
            Cookies sú malé textové súbory ukladané vo vašom zariadení počas
            návštevy webovej stránky.
          </p>

          <h2>Na čo sa používajú</h2>

          <p>
            Pomáhajú zabezpečiť správne fungovanie stránky, zapamätanie
            používateľských nastavení a zlepšovanie služieb.
          </p>

          <h2>Analytické nástroje</h2>

          <p>
            V budúcnosti môže stránka využívať analytické nástroje na
            vyhodnocovanie návštevnosti a zlepšovanie obsahu.
          </p>

          <h2>Správa cookies</h2>

          <p>
            Používateľ môže používanie cookies obmedziť alebo zakázať vo
            svojom internetovom prehliadači.
          </p>
        </div>
      </div>
    </main>
  )
}
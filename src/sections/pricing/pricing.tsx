import styles from './pricing.module.css'

const prices = [
  ['Antimigrenózna a antistresová masáž hlavy', '20 min', '15 €'],
  ['Reflexná a regeneračná masáž rúk', '20 min', '15 €'],
  ['Workshop – Spoznajte Emočný kód', '60 min', '25 €'],
  ['Emočný kód – sedenie na diaľku', 'individuálne', '(za uvoľnenú 1 emóciu) 1,50 € '],
]

export function Pricing() {
  return (
    <section id="cennik" className="section sectionAlt">
      <div className="container">
        <div className="sectionHeader">
          <p className="eyebrow">Cenník</p>
          <h2>Prehľad služieb a cien</h2>
        </div>

        <div className={styles.list}>
          {prices.map(([name, duration, price]) => (
            <div key={name} className={styles.row}>
              <div>
                <h3>{name}</h3>
                <p>{duration}</p>
              </div>
              <strong>{price}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

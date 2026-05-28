import styles from './session-info.module.css'

const steps = [
  ['Kontakt a rezervácia', 'Cez formulár napíšete základné informácie a stručný popis toho, čo vás aktuálne trápi alebo na čom chcete pracovať.'],
  ['Dohodnutie termínu', 'Spoločne si dohodneme termín sedenia, ktorý vám bude vyhovovať.'],
  ['Samotné sedenie', 'Sedenie prebieha na diaľku z pohodlia vášho domova. Nemusíte byť online ani nikam cestovať.'],
  ['Spätná väzba', 'Po sedení dostanete e-mail s informáciami o priebehu a odporúčaniami.'],
]

export function SessionInfo() {
  return (
    <section className="section sectionAlt">
      <div className="container">
        <div className="sectionHeader">
          <p className="eyebrow">Priebeh</p>
          <h2>Ako prebieha sedenie</h2>
          <p>Dĺžka sedenia je približne 10 až 30 minút.</p>
        </div>

        <div className={styles.steps}>
          {steps.map(([title, text], index) => (
            <article key={title} className={styles.step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

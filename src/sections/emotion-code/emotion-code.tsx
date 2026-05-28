import styles from './emotion-code.module.css'

const items = [
  'zvládanie stresu a psychického napätia',
  'podpora emocionálnej pohody',
  'vnútorné uvoľnenie a relax',
  'zlepšenie celkovej psychickej rovnováhy',
]

export function EmotionCode() {
  return (
    <section id="emocny-kod" className="section">
      <div className={`container ${styles.wrap}`}>
        <div>
          <p className="eyebrow">Emočný kód</p>
          <h2>Podpora emocionálnej pohody na diaľku.</h2>
          <p>
            Emočný kód je podporná metóda zameraná na prácu s emocionálnou
            záťažou a vnútorným napätím. Pomáha ľuďom lepšie porozumieť svojim
            emóciám a podporiť psychickú pohodu.
          </p>
          <p>
            Sedenie prebieha na diaľku a nevyžaduje vašu fyzickú prítomnosť.
            Počas sedenia môžete oddychovať, čítať si alebo sa venovať bežným
            činnostiam.
          </p>
        </div>

        <div className={styles.panel}>
          <h3>V čom môže byť podpora užitočná</h3>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.note}>
            Táto služba nenahrádza lekársku ani psychologickú starostlivosť.
          </p>
        </div>
      </div>
    </section>
  )
}

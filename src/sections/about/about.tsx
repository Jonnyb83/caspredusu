import styles from './about.module.css'

export function About() {
  return (
    <section id="o-mne" className="section">
      <div className={`container ${styles.wrap}`}>
        <div className={styles.photoPlaceholder}>Priestor pre fotografiu</div>
        <div>
          <p className="eyebrow">O mne</p>
          <h2>Bezpečný priestor pre oddych, uvoľnenie a pokoj.</h2>
          <p>
            Volám sa Mária Rehušová a venujem sa relaxačným terapiám a práci s
            emocionálnou pohodou.
          </p>
          <p>
            Som certifikovaná praktička metódy Emotion Code. Certifikát som
            získala v roku 2026 na Discover Healing Institute.
          </p>
          <p>
            Mojím cieľom je vytvoriť bezpečný priestor, kde si ľudia môžu
            oddýchnuť, uvoľniť stres a venovať čas sami sebe.
          </p>
        </div>
      </div>
    </section>
  )
}

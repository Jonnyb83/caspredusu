import styles from './disclaimer.module.css'

export function Disclaimer() {
  return (
    <section className={styles.disclaimer}>
      <div className={`container ${styles.box}`}>
        <h2>Dôležité upozornenie</h2>
        <p>
          Poskytované služby slúžia ako podpora psychickej pohody, relaxácie a
          osobného rozvoja. Nie som lekár ani psychoterapeut a neposkytujem
          zdravotnú starostlivosť, lekárske diagnózy ani psychologické
          poradenstvo.
        </p>
        <p>
          Služby nenahrádzajú odbornú lekársku alebo psychologickú pomoc.
          Všetky informácie zdieľané počas komunikácie považujem za dôverné.
        </p>
      </div>
    </section>
  )
}

import styles from './services.module.css'

const services = [
  {
    title: 'Emočný kód',
    text: 'Jemná podporná metóda zameraná na uvoľnenie emocionálnej záťaže a vnútorného napätia. Sedenie prebieha na diaľku z pohodlia vášho domova.',
  },
  {
    title: 'Antimigrenózna a antistresová masáž hlavy',
    text: 'Hlboko relaxačná masáž zameraná na uvoľnenie stresu, napätia a únavy. Pomáha pri psychickom vyčerpaní a dlhodobom strese.',
  },
  {
    title: 'Reflexná a regeneračná masáž rúk',
    text: 'Relaxačná masáž podporujúca uvoľnenie tela, zlepšenie cirkulácie a celkovú pohodu organizmu.',
  },
]

export function Services() {
  return (
    <section id="sluzby" className="section sectionAlt">
      <div className="container">
        <div className="sectionHeader">
          <p className="eyebrow">Moje služby</p>
          <h2>Jednoduchá starostlivosť o telo, pokoj a vnútornú rovnováhu.</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

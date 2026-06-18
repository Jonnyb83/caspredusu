import styles from './services.module.css'

const services = [
  {
    title: 'Emočný kód',
    text:
      'Jemná podporná metóda zameraná na uvoľnenie emocionálnej záťaže a vnútorného napätia. Sedenie prebieha na diaľku z pohodlia vášho domova.',
  },

  {
    title: 'Antistresový program pre tvár',
    text:
      'Doprajte si hlboké uvoľnenie a chvíľu pokoja. Tento jemný harmonizačný rituál je zameraný na stimuláciu relaxačných zón na tvári prostredníctvom cielených dotykov a jemného tlaku. Bez použitia krémov či olejov pomáha navodiť pocit uvoľnenia, oddychu a celkovej pohody.',
  },

  {
    title: 'Antistresový program pre unavené ruky',
    text:
      'Naše ruky sú počas dňa neustále v pohybe a často v sebe nesú napätie a únavu. Jemná stimulácia harmonizačných bodov a relaxačných zón na rukách podporuje uvoľnenie, príjemný pocit ľahkosti a vnútorného pokoja. Procedúra prebieha nasucho, bez použitia krémov a olejov.',
  },
]

export function Services() {
  return (
    <section id="sluzby" className="section sectionAlt">
      <div className="container">
        <div className="sectionHeader">
          <p className="eyebrow">Moje služby</p>

          <h2>
            Jednoduchá starostlivosť o telo, pokoj a vnútornú rovnováhu.
          </h2>
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
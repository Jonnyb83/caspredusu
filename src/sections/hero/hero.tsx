'use client'

import { useEffect, useState } from 'react'
import styles from './hero.module.css'

const slides = [
  {
    title: 'Emočný kód na diaľku',
    image: './images/hero/emocny_kod.png',
  },
  {
    title: 'Antimigrenózna a antistresová masáž hlavy',
    image: './images/hero/masaz_hlavy.png',
  },
  {
    title: 'Reflexná a regeneračná masáž rúk',
    image: './images/hero/masaz_ruk.png',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.hero} id="uvod">
      <div className={styles.content}>
        <p className={styles.label}>Relax • pohoda • vnútorný pokoj</p>

        <h1>Cítite sa vyčerpaní z každodenného stresu a povinností?</h1>

        <p className={styles.text}>
          Doprajte si chvíľu pokoja, regenerácie a starostlivosti o seba.
          Pomáham ľuďom nájsť väčší vnútorný pokoj, uvoľnenie a psychickú
          pohodu prostredníctvom relaxačných masáží a práce s emocionálnou
          záťažou.
        </p>

        <div className={styles.actions}>
          <a href="#kontakt" className={styles.primaryButton}>
            Objednať sa
          </a>

          <div className={styles.dots}>
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={`${styles.dot} ${
                  activeSlide === index ? styles.activeDot : ''
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Zobraziť slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`${styles.slide} ${
              activeSlide === index ? styles.activeSlide : ''
            }`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className={styles.slideOverlay}>
              <p>{slide.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
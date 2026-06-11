'use client'

import { useState } from 'react'
import styles from './about.module.css'

const certificates = [
  {
    src: '/images/doc/hlava.png',
    alt: 'Certifikát Hlava',
  },
  {
    src: '/images/doc/Emocny_kod.png',
    alt: 'Certifikát Emotion Code',
  },
  {
    src: '/images/doc/ruky.png',
    alt: 'Certifikát Ruky',
  },
]

export function About() {
  const [selected, setSelected] = useState<number | null>(null)

  const prevCertificate = () => {
    if (selected === null) return

    setSelected(
      selected === 0
        ? certificates.length - 1
        : selected - 1
    )
  }

  const nextCertificate = () => {
    if (selected === null) return

    setSelected(
      selected === certificates.length - 1
        ? 0
        : selected + 1
    )
  }

  return (
    <section id="o-mne" className="section">
      <div className={`container ${styles.wrap}`}>
        <div className={styles.profile}>
          <img
            src="/images/doc/profil.jpeg"
            alt="Mária Rehušová"
            className={styles.photo}
          />
        </div>

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

          <div className={styles.certificates}>
            {certificates.map((certificate, index) => (
              <img
                key={certificate.src}
                src={certificate.src}
                alt={certificate.alt}
                className={
                  index === 1
                    ? styles.verticalCert
                    : styles.horizontalCert
                }
                onClick={() => setSelected(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {selected !== null && (
        <div
          className={styles.lightbox}
          onClick={() => setSelected(null)}
        >
          <button
            className={styles.close}
            onClick={() => setSelected(null)}
          >
            ✕
          </button>

          <button
            className={styles.arrowLeft}
            onClick={(e) => {
              e.stopPropagation()
              prevCertificate()
            }}
          >
            ‹
          </button>

          <img
            src={certificates[selected].src}
            alt={certificates[selected].alt}
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className={styles.arrowRight}
            onClick={(e) => {
              e.stopPropagation()
              nextCertificate()
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
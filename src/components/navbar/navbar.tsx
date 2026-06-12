import Link from 'next/link'
import styles from './navbar.module.css'

const links = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#emocny-kod', label: 'Emočný kód' },
  { href: '#o-mne', label: 'O mne' },
  { href: '#cennik', label: 'Cenník' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Hlavná navigácia">
        <Link href="/" className={styles.logo}>
          Pokoj a rovnováha
        </Link>

        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <a href="#rezervacia" className={styles.cta}>
          Rezervovať
        </a>
      </nav>
    </header>
  )
}
import styles from './navbar.module.css'

const links = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#emocny-kod', label: 'Emočný kód' },
  { href: '#o-mne', label: 'O mne' },
  { href: '#cennik', label: 'Cenník' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Hlavná navigácia">
        <a href="#" className={styles.logo}>
          Pokoj a rovnováha
        </a>

        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a href="#rezervacia" className={styles.cta}>
          Rezervovať
        </a>
      </nav>
    </header>
  )
}

import Link from 'next/link'
import styles from './footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p>© {new Date().getFullYear()} Čas pre dušu</p>
          <p>Emocionálna pohoda • Relax • Vnútorná rovnováha</p>
        </div>

        <nav className={styles.links}>
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/gdpr">GDPR</Link>
          <Link href="/vop">VOP</Link>
          <Link href="/cookies">Cookies</Link>
        </nav>
      </div>
    </footer>
  )
}
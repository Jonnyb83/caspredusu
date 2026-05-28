import styles from './footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>© {new Date().getFullYear()} Pokoj a rovnováha</p>
        <p>Relax, masáže a emocionálna pohoda</p>
      </div>
    </footer>
  )
}

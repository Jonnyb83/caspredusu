'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './cookie-banner.module.css'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')

    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  function acceptCookies() {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <strong>Cookies</strong>
        <p>
          Táto stránka používa nevyhnutné cookies pre správne fungovanie webu.
          Rezervačný systém Calendly môže používať vlastné cookies.
        </p>
      </div>

      <div className={styles.actions}>
        <Link href="/cookies">Viac informácií</Link>
        <button onClick={acceptCookies}>Prijať</button>
      </div>
    </div>
  )
}
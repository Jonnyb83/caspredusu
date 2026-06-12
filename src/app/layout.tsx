import type { Metadata } from 'next'
import { CookieBanner } from '@/components/cookie-banner/cookie-banner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Čas pre dušu | Relax, masáže a Emočný kód',
  description:
    'Prezentačný web pre relaxačné masáže, emocionálnu pohodu, Emočný kód a online rezervácie.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
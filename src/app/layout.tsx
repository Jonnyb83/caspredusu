import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Relax, masáže a Emočný kód',
  description:
    'Jednoduchý prezentačný web pre relaxačné masáže, emocionálnu pohodu a rezervácie cez kontaktný formulár.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  )
}

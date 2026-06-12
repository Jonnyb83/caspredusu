import { Navbar } from '@/components/navbar/navbar'
import Hero from '@/sections/hero/hero'
import { Services } from '@/sections/services/services'
import { EmotionCode } from '@/sections/emotion-code/emotion-code'
import { SessionInfo } from '@/sections/session-info/session-info'
import Booking from '@/sections/booking/booking'
import { About } from '@/sections/about/about'
import { Pricing } from '@/sections/pricing/pricing'
import { Disclaimer } from '@/sections/disclaimer/disclaimer'
import { Footer } from '@/sections/footer/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <EmotionCode />
        <SessionInfo />
        <Booking />
        <Pricing />
        <Disclaimer />
      </main>

      <Footer />
    </>
  )
}
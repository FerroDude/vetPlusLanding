import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Benefits } from '../components/Benefits'
import { Features } from '../components/Features'
import { Audiences } from '../components/Audiences'
import { HowItWorks } from '../components/HowItWorks'
import { Faq } from '../components/Faq'
import { CtaBanner } from '../components/CtaBanner'
import { Footer } from '../components/Footer'

type LandingPageProps = {
  /** When true, layout is scoped for the /edit live preview panel */
  embedded?: boolean
}

export function LandingPage({ embedded = false }: LandingPageProps) {
  return (
    <div className={embedded ? 'landing landing--embedded' : 'landing'}>
      <Header embedded={embedded} />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <Audiences />
        <HowItWorks />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

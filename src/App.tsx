import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Features } from './components/Features'
import { Audiences } from './components/Audiences'
import { HowItWorks } from './components/HowItWorks'
import { Faq } from './components/Faq'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
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
    </>
  )
}

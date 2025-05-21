import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { FeaturesSectionV2 } from './components/FeaturesSectionV2'
import { HowItWorksSection } from './components/HowItWorksSection'
import { AnimatedTestimonials } from './components/ui/AnimatedTestimonials'
import { ConfettiPricingSection } from './components/ui/ConfettiPricingSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

function App() {
  

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSectionV2 />
        <HowItWorksSection />
        <AnimatedTestimonials />
        <ConfettiPricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App

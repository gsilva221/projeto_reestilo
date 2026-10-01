import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { BrandPillars } from '../components/sections/BrandPillars'
import { FeaturedProducts } from '../components/sections/FeaturedProducts'
import { HeroSection } from '../components/sections/HeroSection'
import { HowItWorks } from '../components/sections/HowItWorks'
import { ImpactSection } from '../components/sections/ImpactSection'
import { InstagramSection } from '../components/sections/InstagramSection'
import { PurposeSection } from '../components/sections/PurposeSection'

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PurposeSection />
        <BrandPillars />
        <HowItWorks />
        <FeaturedProducts />
        <ImpactSection />
        <InstagramSection />
      </main>
      <SiteFooter />
    </>
  )
}
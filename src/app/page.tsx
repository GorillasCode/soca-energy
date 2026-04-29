import { AboutSection } from "@/components/ui/about-section"
import { AdvantageSection } from "@/components/ui/advantage-section"
import { AeroHero } from "@/components/ui/aero-hero"
import { ContactSection } from "@/components/ui/contact-section"
import { FaqSection } from "@/components/ui/faq-section"
import { GoingGreenSection } from "@/components/ui/going-green-section"
import { ServicesSection } from "@/components/ui/services-section"
import { SiteFooter } from "@/components/ui/site-footer"
import { SiteHeader } from "@/components/ui/site-header"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <AeroHero />
        <AboutSection />
        <AdvantageSection />
        <ServicesSection />
        <GoingGreenSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

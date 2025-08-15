import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { UrgencySection } from "@/components/urgency-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ImageGallery } from "@/components/image-gallery"
import { SpecsTable } from "@/components/specs-table"
import { SocialProofSection } from "@/components/social-proof-section"
import { FAQSection } from "@/components/faq-section"
import { LocationSection } from "@/components/location-section"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="urgency">
          <UrgencySection />
        </div>
        <div id="benefits">
          <BenefitsSection />
        </div>
        <div id="gallery">
          <ImageGallery />
        </div>
        <div id="specs">
          <SpecsTable />
        </div>
        <div id="social-proof">
          <SocialProofSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <div id="location">
          <LocationSection />
        </div>
        <div id="contact">
          <ContactForm />
        </div>

        {/* Footer */}
        <footer className="bg-card py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">
              © 2024 Hyundai Grand i10 Sales. Cam kết chất lượng và dịch vụ tốt nhất.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

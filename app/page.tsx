import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ImageGallery } from "@/components/image-gallery"
import { SpecsTable } from "@/components/specs-table"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        <div id="hero">
          <HeroSection />
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

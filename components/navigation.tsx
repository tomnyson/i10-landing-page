"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">H</span>
            </div>
            <span className="font-semibold text-lg">Hyundai Grand i10</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Trang chủ
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Ưu điểm
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Hình ảnh
            </button>
            <button
              onClick={() => scrollToSection("specs")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Thông số
            </button>
            <button
              onClick={() => scrollToSection("social-proof")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Đánh giá
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Địa chỉ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Liên hệ
            </button>

            {/* Call Button */}
            <Button
              onClick={() => window.open("tel:0349728472")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Phone className="w-4 h-4 mr-2" />
              Gọi ngay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Trang chủ
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Ưu điểm
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Hình ảnh
              </button>
              <button
                onClick={() => scrollToSection("specs")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Thông số
              </button>
              <button
                onClick={() => scrollToSection("social-proof")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Đánh giá
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Địa chỉ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Liên hệ
              </button>

              <Button
                onClick={() => window.open("tel:0349728472")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                Gọi ngay: 0349.728.472
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-card to-background">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/z6289819807293_3b0e05aeac8e4ac4877e53cd735d2325.jpg-WY4Ru21IkTAKm05dklmFEuHlk9wxYE.jpeg"
          alt="2020 Hyundai Grand i10 Vàng Nâu"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
          ⭐ XE SIÊU LƯỚT - CHÍNH CHỦ BÁN
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Hyundai Grand i10 2020
          <span className="block text-primary">Chỉ 310 Triệu - Rẻ Nhất Thị Trường</span>
        </h1>

        <div className="mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-2xl md:text-3xl text-muted-foreground line-through">320 triệu</span>
            <span className="text-4xl md:text-5xl font-bold text-destructive">310 triệu</span>
          </div>
          <Badge variant="destructive" className="text-lg px-6 py-2 animate-pulse">
            🔥 TIẾT KIỆM 10 TRIỆU - CÒN 3 NGÀY!
          </Badge>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          ✅ ODO thật 60.000km ✅ Bảo dưỡng đầy đủ ✅ Không đâm đụng, ngập nước
          <br/>
          <strong className="text-primary">Cam kết hoàn tiền 100% nếu phát hiện gian dối!</strong>
        </p>

        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/uVdiQXsY7xU"
                title="Video Giới Thiệu Hyundai Grand i10 2020 Màu Vàng Nâu"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
            <Phone className="mr-2 h-5 w-5" />
            GỌI NGAY: 0349.728.472
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Calendar className="mr-2 h-5 w-5" />
            XEM XE MIỄN PHÍ TẠI NHÀ
          </Button>
        </div>

        <div className="mt-8 flex justify-center">
          <Badge variant="destructive" className="text-base px-6 py-2">
            �️ BẢO HÀNH 12 THÁNG - HOÀN TIỀN 100% NẾU GIAN DỐI
          </Badge>
        </div>
      </div>
    </section>
  )
}

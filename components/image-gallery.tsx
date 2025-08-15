import { Card, CardContent } from "@/components/ui/card"
import { Camera } from "lucide-react"
import phiatruocImg from "@/assets/phiatruoc.jpg"
import phiasauImg from "@/assets/phiasau.jpg"
import hongxeImg from "@/assets/hongxe.jpg"
import trongxeImg from "@/assets/trongxe.jpg"
import ghesauImg from "@/assets/ghesau.jpg"
import volangImg from "@/assets/volang.jpg"

const carImages = [
  {
    src: phiatruocImg,
    title: "Góc Nhìn Phía Trước",
    description: "Thiết kế đầu xe hiện đại, đèn pha sắc nét",
  },
  {
    src: phiasauImg,
    title: "Góc Nhìn Phía Sau",
    description: "Đuôi xe gọn gàng, đèn hậu LED",
  },
  {
    src: hongxeImg,
    title: "Góc Nhìn Bên Hông",
    description: "Sơn zin căng bóng, không một vết xước dăm",
  },
  {
    src: trongxeImg,
    title: "Nội Thất Khoang Lái",
    description: "Vô lăng da, màn hình giải trí hiện đại",
  },
  {
    src: ghesauImg,
    title: "Hàng Ghế Sau",
    description: "Rộng rãi, sạch sẽ, phù hợp gia đình",
  },
  {
    src: volangImg,
    title: "Khoang Máy & ODO",
    description: "Máy móc sạch sẽ, ODO chuẩn 60.000km",
  },
]

export function ImageGallery() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">Chi Tiết Từng Góc Cạnh</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Camera className="h-5 w-5" />
            Hình Ảnh Nói Lên Tất Cả
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-background border-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={typeof image.src === 'string' ? image.src : image.src.src}
                  alt={image.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{image.title}</h3>
                <p className="text-muted-foreground text-sm">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

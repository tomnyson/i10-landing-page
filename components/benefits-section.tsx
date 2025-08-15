import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Fuel, FileText, Calendar, Star } from "lucide-react"

const benefits = [
  {
    icon: Calendar,
    title: "Model 2020 Đời Cao",
    description: "Thiết kế hiện đại, trang bị đầy đủ tính năng an toàn và tiện nghi.",
  },
  {
    icon: CheckCircle,
    title: "ODO Chuẩn 60.000 km",
    description: "Xe đi ít, máy móc cực êm và bền bỉ. Bảo dưỡng định kỳ đầy đủ.",
  },
  {
    icon: Star,
    title: "Màu Vàng Cát Hiếm Có",
    description: "Sang trọng, sạch sẽ và nổi bật.",
  },
  {
    icon: Shield,
    title: "Cam Kết Vàng",
    description: "BAO ĐÂM ĐỤNG, NGẬP NƯỚC. Phát hiện lỗi tặng xe ngay!",
  },
  {
    icon: Fuel,
    title: "Tiết Kiệm Nhiên Liệu",
    description: "Động cơ 1.2L cực kỳ tiết kiệm, di chuyển linh hoạt trong thành phố.",
  },
  {
    icon: FileText,
    title: "Pháp Lý Minh Bạch",
    description: "Giấy tờ đầy đủ, sang tên nhanh gọn trong ngày.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Tại Sao Chọn Chiếc Xe Này?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Những lý do thuyết phục để bạn tin tưởng lựa chọn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

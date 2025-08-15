import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Fuel, FileText, Calendar, Star } from "lucide-react"

const benefits = [
  {
    icon: Calendar,
    title: "Xe Đời 2020 - Còn Mới 95%",
    description: "4 năm tuổi, trang bị đầy đủ, nội thất nguyên zin chưa thay đổi gì.",
  },
  {
    icon: CheckCircle,
    title: "ODO Thật 60.000km - Có Hóa Đơn",
    description: "Đi trung bình 15.000km/năm, bảo dưỡng đúng hãng, máy móc êm ru.",
  },
  {
    icon: Star,
    title: "Màu Vàng Cát - Ít Xe Có",
    description: "Màu hiếm, không bám bẩn, dễ bán lại sau này với giá cao.",
  },
  {
    icon: Shield,
    title: "Cam Kết Hoàn Tiền 100%",
    description: "Nếu phát hiện đâm đụng, ngập nước, ODO chỉnh - trả tiền ngay!",
  },
  {
    icon: Fuel,
    title: "Tiết Kiệm 3.8L/100km",
    description: "Chỉ tốn 300k tiền xăng/tháng, phù hợp đi làm và đưa đón con.",
  },
  {
    icon: FileText,
    title: "Sang Tên Trong Ngày",
    description: "Giấy tờ gốc đầy đủ, không vay ngân hàng, không vi phạt.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Tại Sao 1,200+ Khách Hàng Tin Tưởng?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            6 lý do thuyết phục để bạn an tâm mua xe không lo rủi ro
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

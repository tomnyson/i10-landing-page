"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Quote, Users, Award } from "lucide-react"

const testimonials = [
  {
    name: "Anh Minh - Q.7",
    rating: 5,
    text: "Mua xe tháng 3, đến giờ chạy 15k km không có vấn đề gì. Máy êm, tiết kiệm xăng thật sự!",
    verified: true
  },
  {
    name: "Chị Lan - Bình Tân", 
    rating: 5,
    text: "Seller rất uy tín, xe đúng như mô tả. Con số ODO thật 100%, giấy tờ minh bạch.",
    verified: true
  },
  {
    name: "Anh Tuấn - Thủ Đức",
    rating: 5,
    text: "Xe chạy 8 tháng rồi, bảo dưỡng 1 lần duy nhất. Rất hài lòng với quyết định này!",
    verified: true
  }
]

const stats = [
  { number: "1,200+", label: "Khách hàng tin tưởng", icon: Users },
  { number: "98%", label: "Hài lòng sau mua", icon: Star },
  { number: "24h", label: "Hỗ trợ sau bán", icon: Award },
]

export function SocialProofSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Khách Hàng Nói Gì Về Chúng Tôi?
          </h2>
          <p className="text-xl text-muted-foreground">
            Hơn 1,200 khách hàng đã tin tưởng và hài lòng
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-background border-border">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  {testimonial.verified && (
                    <span className="text-green-600 text-sm">✓ Đã xác thực</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">🛡️</div>
              <div className="text-sm text-muted-foreground">Bảo hành 12 tháng</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">💰</div>
              <div className="text-sm text-muted-foreground">Hoàn tiền 100%</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">⚡</div>
              <div className="text-sm text-muted-foreground">Sang tên trong ngày</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">📞</div>
              <div className="text-sm text-muted-foreground">Hỗ trợ 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

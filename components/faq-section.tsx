"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "Xe này có còn bảo hành không?",
    answer: "Hết bảo hành rồi nhé"
  },
  {
    question: "Tại sao giá rẻ hơn thị trường?",
    answer: "Cá nhân bán không qua môi giới và đại lý cam kết rẻ nhất thị trường"
  },
  {
    question: "Có thể trả góp không? Lãi suất bao nhiêu?",
    answer: "Có thể vay trả góp nhé liên hệ ngân hàng gần nhất để biết thêm thông tin"
  },
  {
    question: "Xe có bị tai nạn hay ngập nước không?",
    answer: "Cam kết 100% xe không tai nạn, không ngập nước. Chúng tôi có báo cáo kiểm định từ trung tâm uy tín và chịu trách nhiệm pháp lý về thông tin này."
  },
  {
    question: "Số km trên đồng hồ có chính xác không?",
    answer: "ODO hiển thị 60,000km là số thật 100%. Xe có sổ bảo dưỡng đầy đủ tại đại lý chính hãng, có thể kiểm tra lịch sử bảo dưỡng."
  },
  {
    question: "Giấy tờ xe có đầy đủ không?",
    answer: "Đầy đủ: Giấy đăng ký, Chứng nhận kiểm định, Bảo hiểm, Sổ bảo dưỡng. Hỗ trợ sang tên trong ngày, không phát sinh chi phí ẩn."
  },
  {
    question: "Cách thức mua xe?",
    answer: "Làm việc trực tiếp tại phòng công chứng, sang tên và rút hồ sơ"
  }
]

export function FAQSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Giải đáp mọi thắc mắc của bạn về chiếc Hyundai Grand i10 2020 này
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-center text-primary">
                  Vẫn Còn Thắc Mắc?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-center text-muted-foreground">
                  Liên hệ ngay để được tư vấn chi tiết và xem xe trực tiếp
                </p>
                
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('tel:0901234567')}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Gọi Ngay: 0349528472
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://zalo.me/0349528472')}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat Zalo
                  </Button>
                </div>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    💬 <strong>Trả lời trong 2 phút</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    🚗 <strong>Hỗ trợ xem xe 24/7</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Bottom */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Đã Sẵn Sàng Sở Hữu Chiếc Xe Này?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Chỉ còn 1 chiếc duy nhất. Đặt cọc ngay để giữ xe!
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Đặt Cọc Ngay - Chỉ 10 Triệu
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              ⏰ Ưu đãi có thể kết thúc bất kỳ lúc nào
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

// Phiên bản đơn giản sử dụng FormSubmit.co
// Thay YOUR_EMAIL bằng email thật của bạn
const FORM_SUBMIT_EMAIL = "tabletkindfire@gmail.com";

export function ContactFormSimple() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">Liên Hệ Ngay Hôm Nay</h2>
            <p className="text-xl text-muted-foreground">Đừng bỏ lỡ cơ hội sở hữu chiếc xe tuyệt vời này</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Thông Tin Liên Hệ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Điện thoại</p>
                    <p className="text-muted-foreground">0349.728.472 (Zalo)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@hyundai-sales.vn</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Địa chỉ</p>
                    <p className="text-muted-foreground">Showroom Hyundai, TP.HCM</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-primary font-semibold text-center">🎯 Cam kết phản hồi trong 30 phút!</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form - FormSubmit.co version */}
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Đăng Ký Xem Xe</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  action={`https://formsubmit.co/${FORM_SUBMIT_EMAIL}`} 
                  method="POST"
                  className="space-y-4"
                >
                  {/* Hidden fields for FormSubmit configuration */}
                  <input type="hidden" name="_subject" value="Đăng ký xem xe Hyundai Grand i10" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
                  
                  <div>
                    <Input 
                      name="name"
                      placeholder="Họ và tên *" 
                      className="bg-input border-border" 
                      required 
                    />
                  </div>

                  <div>
                    <Input 
                      type="tel" 
                      name="phone"
                      placeholder="Số điện thoại *" 
                      className="bg-input border-border" 
                      required 
                    />
                  </div>

                  <div>
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="Email" 
                      className="bg-input border-border" 
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tin nhắn (thời gian thuận tiện để xem xe, câu hỏi...)"
                      className="bg-input border-border min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3"
                  >
                    GỬI THÔNG TIN LIÊN HỆ
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Thông tin của bạn sẽ được bảo mật tuyệt đối
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

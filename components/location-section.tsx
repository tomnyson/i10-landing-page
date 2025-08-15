"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Car } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Địa Chỉ Xem Xe</h2>
            <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5" />
              Ghé thăm showroom để trải nghiệm trực tiếp
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Map */}
            <Card className="overflow-hidden bg-background border-border">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.9645445123456!2d108.04123456789!3d12.6789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1svi!2svn!4v1640995200000!5m2!1svi!2svn&q=11+Lương+Thế+Vinh,+Buôn+Ma+Thuột,+Đắk+Lắk"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bản đồ showroom 11 Lương Thế Vinh, BMT"
                  ></iframe>
                </div>
            </Card>

            {/* Location Info */}
            <div className="space-y-4">
              <Card className="bg-background border-border">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    Thông Tin Showroom
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Địa chỉ</p>
                      <p className="text-muted-foreground text-sm">11 Lương Thế Vinh, Buôn Ma Thuột</p>
                      <p className="text-muted-foreground text-sm">Thành phố Buôn Ma Thuột, Đắk Lắk</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Hotline</p>
                      <p className="text-muted-foreground text-sm">0349.728.472 (Zalo)</p>
                      <p className="text-xs text-muted-foreground">Hỗ trợ 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Giờ làm việc</p>
                      <p className="text-muted-foreground text-sm">Thứ 2 - Chủ nhật: 8:00 - 18:00</p>
                      <p className="text-xs text-muted-foreground">Nghỉ các ngày lễ</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Car className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Dịch vụ</p>
                      <p className="text-muted-foreground text-sm">✅ Xem xe trực tiếp</p>
                      <p className="text-muted-foreground text-sm">✅ Lái thử miễn phí</p>
                      <p className="text-muted-foreground text-sm">✅ Tư vấn tận tình</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-primary mb-2">🚗 Hẹn Lịch Xem Xe</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    Đặt lịch trước để được phục vụ tốt nhất
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <a 
                      href="tel:0349728472"
                      className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Gọi ngay
                    </a>
                    <a 
                      href="https://zalo.me/0349728472"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Chat Zalo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

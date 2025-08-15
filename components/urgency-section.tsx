"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, AlertCircle, Zap } from "lucide-react"

export function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  const [viewersCount, setViewersCount] = useState(12)

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    // Simulate viewers count changes
    const viewersTimer = setInterval(() => {
      setViewersCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        const newCount = prev + change
        return Math.max(8, Math.min(25, newCount))
      })
    }, 8000)

    return () => {
      clearInterval(timer)
      clearInterval(viewersTimer)
    }
  }, [])

  return (
    <section className="py-12 bg-gradient-to-r from-red-50 to-orange-50 border-y-2 border-red-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Alert */}
          <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white border-0 mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <AlertCircle className="h-8 w-8 mr-3 animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                  ⚠️ CẢNH BÁO: Chỉ Còn 1 Chiếc Duy Nhất!
                </h2>
              </div>
              <p className="text-center text-lg opacity-90">
                Xe này đang được <strong>{viewersCount} người khác quan tâm</strong> cùng lúc. 
                Hành động ngay để không bỏ lỡ!
              </p>
            </CardContent>
          </Card>

          {/* Countdown Timer */}
          <Card className="bg-white border-2 border-red-300 mb-6">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Ưu Đãi Giá 310 Triệu Kết Thúc Sau:
                  </h3>
                </div>
                
                <div className="flex justify-center gap-4 mb-4">
                  <div className="bg-red-600 text-white rounded-lg p-3 min-w-16">
                    <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-sm">Giờ</div>
                  </div>
                  <div className="bg-red-600 text-white rounded-lg p-3 min-w-16">
                    <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-sm">Phút</div>
                  </div>
                  <div className="bg-red-600 text-white rounded-lg p-3 min-w-16">
                    <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-sm">Giây</div>
                  </div>
                </div>

                <p className="text-red-600 font-semibold mb-4">
                  Sau thời gian này, giá sẽ tăng lên 340 triệu (theo giá thị trường)
                </p>

                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white pulse-animation"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Đặt Cọc Ngay - Giữ Giá 310 Triệu
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Scarcity Indicators */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-yellow-50 border-yellow-300">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">🔥</div>
                <div className="font-bold text-gray-800">Hot Deal</div>
                <div className="text-sm text-gray-600">Giá rẻ nhất thị trường</div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-300">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">👥</div>
                <div className="font-bold text-gray-800">{viewersCount} Người</div>
                <div className="text-sm text-gray-600">Đang xem cùng lúc</div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-300">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-bold text-gray-800">Giao Ngay</div>
                <div className="text-sm text-gray-600">Trong vòng 24h</div>
              </CardContent>
            </Card>
          </div>

          {/* Social Proof Alerts */}
          <div className="mt-6 space-y-3">
            <div className="bg-green-100 border border-green-300 rounded-lg p-3">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-green-800 text-sm">
                  <strong>5 phút trước:</strong> Anh Minh (Q.7) vừa hẹn lịch xem xe
                </span>
              </div>
            </div>
            
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-blue-800 text-sm">
                  <strong>12 phút trước:</strong> Chị Lan (Bình Tân) vừa gọi tư vấn
                </span>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-8 text-center">
            <Badge variant="destructive" className="mb-4 text-sm">
              ⚡ Còn 1 chiếc cuối cùng
            </Badge>
            <div>
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg px-8 py-3">
                🚗 Đặt Cọc Ngay - Chỉ 10 Triệu
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              💰 Hoàn lại 100% nếu không hài lòng
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}

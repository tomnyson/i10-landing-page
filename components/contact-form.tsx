"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      setSubmitMessage('Vui lòng điền đầy đủ thông tin bắt buộc!');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('Đang gửi...');

    try {
      console.log('Sending data:', formData);
      
      // Gửi qua API route để tránh CORS
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('API Response:', result);
      
      if (result.success) {
        setSubmitMessage('✅ Đã gửi thông tin thành công! Chúng tôi sẽ liên hệ với bạn sớm.');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitMessage(`❌ ${result.message}`);
      }

    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('❌ Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };
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
                    <p className="text-muted-foreground">tabletkindfire@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Địa chỉ</p>
                    <p className="text-muted-foreground">Xem xe tại 11 Lương Thế Vinh, Phường Buôn Ma Thuộc</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-primary font-semibold text-center">🎯 Cam kết phản hồi trong 30 phút!</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Đăng Ký Xem Xe</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Họ và tên *" 
                      className="bg-input border-border" 
                      required 
                    />
                  </div>

                  <div>
                    <Input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Số điện thoại *" 
                      className="bg-input border-border" 
                      required 
                    />
                  </div>

                  <div>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email" 
                      className="bg-input border-border" 
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tin nhắn (thời gian thuận tiện để xem xe, câu hỏi...)"
                      className="bg-input border-border min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3"
                  >
                    {isSubmitting ? 'ĐANG GỬI...' : 'GỬI THÔNG TIN LIÊN HỆ'}
                  </Button>

                  {submitMessage && (
                    <div className={`text-center p-3 rounded-lg ${
                      submitMessage.includes('✅') 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}>
                      {submitMessage}
                    </div>
                  )}

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

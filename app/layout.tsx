import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bán Hyundai Grand i10 2020 Chỉ 310 Triệu - Rẻ Nhất TP.HCM | Cam Kết ODO Thật',
  description: 'Hyundai Grand i10 2020 màu vàng cát chỉ 310 triệu, ODO 28k km thật 100%. Bảo hành 12 tháng, sang tên trong ngày. Liên hệ ngay: 0349.728.472',
  keywords: 'hyundai grand i10 2020, xe cũ giá rẻ, oto cũ tphcm, xe hyundai cũ, grand i10 cũ, mua bán xe cũ, xe hơi cũ giá rẻ',
  authors: [{ name: 'Hyundai Grand i10 Sales' }],
  creator: 'Hyundai Grand i10 Sales',
  publisher: 'Hyundai Grand i10 Sales',
  robots: 'index, follow',
  metadataBase: new URL('https://hyundai-i10-sales.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: '/',
    title: 'Bán Hyundai Grand i10 2020 Chỉ 310 Triệu - Rẻ Nhất TP.HCM',
    description: 'Hyundai Grand i10 2020 màu vàng cát chỉ 310 triệu, ODO 28k km thật 100%. Bảo hành 12 tháng, sang tên trong ngày.',
    siteName: 'Hyundai Grand i10 Sales',
    images: [
      {
        url: '/2020-hyundai-grand-i10-sand-yellow-front.png',
        width: 1200,
        height: 630,
        alt: 'Hyundai Grand i10 2020 màu vàng cát - Mặt trước',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bán Hyundai Grand i10 2020 Chỉ 310 Triệu - Rẻ Nhất TP.HCM',
    description: 'Hyundai Grand i10 2020 màu vàng cát chỉ 310 triệu, ODO 28k km thật 100%. Bảo hành 12 tháng, sang tên trong ngày.',
    images: ['/2020-hyundai-grand-i10-sand-yellow-front.png'],
  },
  category: 'Automotive',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <head>
        <StructuredData />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-google-search-console-verification-code" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0066cc" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="VN-33" />
        <meta name="geo.placename" content="Buôn Ma Thuột, Đắk Lắk" />
        <meta name="geo.position" content="12.6667;108.0500" />
        <meta name="ICBM" content="12.6667, 108.0500" />
        
        {/* Business Info */}
        <meta name="contact" content="0349728472" />
        <meta name="author" content="Hyundai Grand i10 Sales" />
        <meta name="copyright" content="© 2024 Hyundai Grand i10 Sales" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}

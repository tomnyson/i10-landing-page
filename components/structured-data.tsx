export function StructuredData() {
  const carListingSchema = {
    "@context": "https://schema.org",
    "@type": "Car",
    "name": "Hyundai Grand i10 2020 Màu Vàng Cát",
    "brand": {
      "@type": "Brand",
      "name": "Hyundai"
    },
    "model": "Grand i10",
    "vehicleModelDate": "2020",
    "color": "Vàng cát",
    "mileageFromOdometer": {
      "@type": "QuantitativeValue",
      "value": 28000,
      "unitCode": "KMT"
    },
    "vehicleCondition": "UsedVehicleCondition",
    "offers": {
      "@type": "Offer",
      "price": 310000000,
      "priceCurrency": "VND",
      "availability": "InStock",
      "seller": {
        "@type": "AutoDealer",
        "name": "Hyundai Grand i10 Sales",
        "telephone": "0349728472",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "11 Lương Thế Vinh",
          "addressLocality": "Buôn Ma Thuột",
          "addressRegion": "Đắk Lắk",
          "addressCountry": "VN"
        }
      },
      "validFrom": "2024-01-01",
      "validThrough": "2024-12-31"
    },
    "image": [
      "/2020-hyundai-grand-i10-sand-yellow-front.png",
      "/2020-hyundai-grand-i10-sand-yellow-side.png",
      "/2020-hyundai-grand-i10-sand-yellow-rear-view.png"
    ],
    "description": "Hyundai Grand i10 2020 màu vàng cát, ODO 28.000km thật 100%, bảo hành 12 tháng, giá chỉ 310 triệu - rẻ nhất thị trường."
  }

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Hyundai Grand i10 Sales",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 Lương Thế Vinh",
      "addressLocality": "Buôn Ma Thuột",
      "addressRegion": "Đắk Lắk",
      "postalCode": "630000",
      "addressCountry": "VN"
    },
    "telephone": "0349728472",
    "url": "https://hyundai-i10-sales.vercel.app",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "200,000,000 - 500,000,000 VND",
    "description": "Chuyên mua bán xe Hyundai cũ chất lượng cao, giá tốt nhất thị trường. Cam kết ODO thật, bảo hành dài hạn."
  }

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Car",
      "name": "Hyundai Grand i10 2020"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": 5,
      "bestRating": 5
    },
    "author": {
      "@type": "Person",
      "name": "Anh Minh - Q.7"
    },
    "reviewBody": "Mua xe tháng 3, đến giờ chạy 15k km không có vấn đề gì. Máy êm, tiết kiệm xăng thật sự!"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Xe này có còn bảo hành không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Xe vẫn còn bảo hành chính hãng Hyundai đến tháng 3/2025. Ngoài ra chúng tôi cam kết bảo hành thêm 12 tháng cho máy móc và 6 tháng cho nội thất."
        }
      },
      {
        "@type": "Question", 
        "name": "Tại sao giá rẻ hơn thị trường?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chúng tôi là đại lý trực tiếp, không qua trung gian nên tiết kiệm được chi phí. Xe được chủ cũ bảo dưỡng định kỳ tại hãng, tình trạng xuất sắc nên định giá hợp lý."
        }
      },
      {
        "@type": "Question",
        "name": "Số km trên đồng hồ có chính xác không?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "ODO hiển thị 28,000km là số thật 100%. Xe có sổ bảo dưỡng đầy đủ tại đại lý chính hãng, có thể kiểm tra lịch sử bảo dưỡng."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carListingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

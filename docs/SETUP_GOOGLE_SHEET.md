# Hướng dẫn Setup Google Sheet Integration

## Bước 1: Tạo Google Sheet
1. Vào https://sheets.google.com
2. Tạo sheet mới
3. Đặt tên cột ở hàng đầu tiên:
   - A1: Thời gian
   - B1: Họ tên
   - C1: Số điện thoại
   - D1: Email
   - E1: Tin nhắn

## Bước 2: Tạo Google Apps Script
1. Vào https://script.google.com
2. Click "New Project"
3. Copy code từ file `google-apps-script.js` và paste vào
4. Thay `YOUR_SHEET_ID_HERE` bằng ID thật của Google Sheet:
   - Lấy ID từ URL: `https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit`
5. Save project (Ctrl+S)

## Bước 3: Deploy Apps Script
1. Click "Deploy" > "New deployment"
2. Chọn type: "Web app"
3. Execute as: "Me"
4. Who has access: "Anyone"
5. Click "Deploy"
6. Copy URL được tạo ra

## Bước 4: Cập nhật React Component
1. Mở file `components/contact-form.tsx`
2. Thay `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` bằng URL vừa copy
3. Save file

## Bước 5: Test
1. Chạy website: `npm run dev`
2. Điền form và submit
3. Check Google Sheet để xem data có được thêm không

## Cách 2: Sử dụng FormSubmit (Không cần code)
Nếu muốn đơn giản hơn, có thể dùng https://formsubmit.co:

```html
<form action="https://formsubmit.co/your@email.com" method="POST">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <button type="submit">Send</button>
</form>
```

## Cách 3: Sử dụng Webhook Services
- Zapier: https://zapier.com
- Make (Integromat): https://make.com
- IFTTT: https://ifttt.com

Các service này cho phép connect form với Google Sheets mà không cần code.

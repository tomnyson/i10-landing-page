# Troubleshooting Google Sheets Integration

## 🔍 Debug Steps

### Step 1: Test Google Apps Script URL
Mở URL này trong browser để kiểm tra script hoạt động:
```
https://script.google.com/macros/s/AKfycby7MDLaUjj7fK139xjnSWdW_P_v_3LJ9ZRHuK-kOcP-5n3gU0UP4_QmLnnb1MADw72xNQ/exec
```

Bạn sẽ thấy message: "Contact Form API is working"

### Step 2: Kiểm tra Google Sheet Setup
1. **Sheet ID đúng chưa?**
   - URL: `https://docs.google.com/spreadsheets/d/1ojC3fvFR9aaYtKMHefegEEYRVz_Ib7RnhXZg09SmT20/edit`
   - ID: `1ojC3fvFR9aaYtKMHefegEEYRVz_Ib7RnhXZg09SmT20`

2. **Sheet có headers chưa?**
   - A1: Thời gian
   - B1: Họ tên  
   - C1: Số điện thoại
   - D1: Email
   - E1: Tin nhắn

3. **Permissions đúng chưa?**
   - Apps Script có quyền access Sheet?
   - Script được deploy với "Anyone" access?

### Step 3: Test Form Submission
1. Mở website: http://localhost:3004
2. Điền form và submit
3. Sẽ mở tab mới hiển thị kết quả
4. Nếu thành công → check Google Sheet
5. Nếu lỗi → đọc error message

### Step 4: Check Browser Console
1. Mở DevTools (F12)
2. Vào Console tab
3. Submit form
4. Xem có error gì không

## 🛠️ Common Issues & Solutions

### Issue 1: "Script not found"
- **Cause:** URL sai hoặc script chưa deploy
- **Fix:** Redeploy script with correct permissions

### Issue 2: "Permission denied" 
- **Cause:** Script không có quyền access Sheet
- **Fix:** 
  1. Mở Apps Script
  2. Run function một lần để authorize
  3. Grant permissions

### Issue 3: "Sheet not found"
- **Cause:** Sheet ID sai
- **Fix:** Copy đúng ID từ URL của Sheet

### Issue 4: Data không hiển thị
- **Cause:** Sheet chưa có headers hoặc sai format
- **Fix:** Add headers ở row 1

## 🧪 Test với Postman/curl
```bash
curl -X POST \
  'https://script.google.com/macros/s/AKfycby7MDLaUjj7fK139xjnSWdW_P_v_3LJ9ZRHuK-kOcP-5n3gU0UP4_QmLnnb1MADw72xNQ/exec' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'name=Test&phone=123456789&email=test@test.com&message=Test message'
```

## 📝 Next Steps
1. Chạy test trên
2. Báo cáo kết quả
3. Nếu vẫn lỗi, share screenshot error message

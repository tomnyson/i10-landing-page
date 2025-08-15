// Google Apps Script code để paste vào script.google.com
// 1. Vào https://script.google.com
// 2. Tạo New Project
// 3. Paste code này vào
// 4. Deploy as Web App

function doPost(e) {
  try {
    let data;
    
    // Log để debug
    console.log('Request type:', e.postData ? e.postData.type : 'No postData');
    console.log('Parameters:', e.parameter);
    
    // Xử lý cả JSON và FormData
    if (e.postData && e.postData.contents) {
      try {
        // Thử parse JSON trước
        data = JSON.parse(e.postData.contents);
        console.log('Parsed JSON data:', data);
      } catch (jsonError) {
        console.log('Not JSON, using form parameters');
        // Nếu không phải JSON, dùng form parameters
        data = {
          name: e.parameter.name || 'No name provided',
          phone: e.parameter.phone || 'No phone provided', 
          email: e.parameter.email || 'No email provided',
          message: e.parameter.message || 'No message provided'
        };
      }
    } else {
      // Fallback cho form data
      data = {
        name: e.parameter.name || 'No name provided',
        phone: e.parameter.phone || 'No phone provided', 
        email: e.parameter.email || 'No email provided',
        message: e.parameter.message || 'No message provided'
      };
    }
    
    console.log('Final processed data:', data);
    
    // Kiểm tra xem có data không
    if (!data.name || data.name === 'No name provided') {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Không nhận được dữ liệu từ form'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // ID của Google Sheet
    const SHEET_ID = '1ojC3fvFR9aaYtKMHefegEEYRVz_Ib7RnhXZg09SmT20';
    
    try {
      const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
      
      // Thêm dòng mới với data
      const timestamp = new Date();
      const newRow = [
        timestamp,
        data.name,
        data.phone,
        data.email,
        data.message
      ];
      
      console.log('Adding row:', newRow);
      sheet.appendRow(newRow);
      
      // Return success response with CORS headers
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          message: 'Đã gửi thông tin thành công!',
          data: data,
          timestamp: timestamp
        }))
        .setMimeType(ContentService.MimeType.JSON);
      
    } catch (sheetError) {
      console.error('Sheet error:', sheetError);
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Lỗi Google Sheet: ' + sheetError.toString(),
          sheetId: SHEET_ID
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
      
  } catch (error) {
    console.error('General error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Có lỗi xảy ra: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Contact Form API is working'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

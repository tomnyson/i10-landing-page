import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby7MDLaUjj7fK139xjnSWdW_P_v_3LJ9ZRHuK-kOcP-5n3gU0UP4_QmLnnb1MADw72xNQ/exec';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('Proxy received:', body);
    
    // Validate required fields
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, message: 'Tên và số điện thoại là bắt buộc!' },
        { status: 400 }
      );
    }

    // Forward request to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    console.log('Google Apps Script response:', result);

    return NextResponse.json(result);
    
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Lỗi server: ' + (error as Error).message 
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

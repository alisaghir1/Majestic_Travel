import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ 
        error: 'Invalid file type. Only JPEG, PNG, WebP, and AVIF images are allowed.' 
      }, { status: 400 });
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({ 
        error: 'File size too large. Maximum size is 5MB.' 
      }, { status: 400 });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const extension = file.name.split('.').pop();
    const baseName = file.name.replace(/\.[^/.]+$/, '');
    const sanitizedBaseName = baseName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    const fileName = `${sanitizedBaseName}-${timestamp}.${extension}`;

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = new Uint8Array(bytes);

    // Upload to Supabase Storage
    const { data, error } = await supabaseAdmin.storage
      .from('testimonial-images')
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false
      });

    if (error) {
      console.error('Upload error:', error);
      return NextResponse.json({ 
        error: 'Upload failed: ' + error.message 
      }, { status: 500 });
    }

    // Get public URL
    const { data: { publicUrl } } = supabaseAdmin.storage
      .from('testimonial-images')
      .getPublicUrl(fileName);

    return NextResponse.json({ 
      success: true, 
      url: publicUrl,
      fileName: fileName
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ 
      error: 'Internal server error during upload: ' + error.message 
    }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

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
    const extension = path.extname(file.name);
    const baseName = path.basename(file.name, extension);
    const sanitizedBaseName = baseName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    const fileName = `${sanitizedBaseName}-${timestamp}${extension}`;

    // Ensure the destinations directory exists
    const destinationsDir = path.join(process.cwd(), 'public', 'destinations');
    try {
      await mkdir(destinationsDir, { recursive: true });
    } catch (error) {
      // Directory might already exist, which is fine
    }

    // Save the file
    const filePath = path.join(destinationsDir, fileName);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    await writeFile(filePath, buffer);

    // Return the public URL
    const publicUrl = `/destinations/${fileName}`;
    
    return NextResponse.json({ 
      success: true, 
      url: publicUrl,
      fileName: fileName
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ 
      error: 'Internal server error during upload' 
    }, { status: 500 });
  }
}

// API to get list of existing destination images
export async function GET() {
  try {
    const { readdir } = await import('fs/promises');
    const destinationsDir = path.join(process.cwd(), 'public', 'destinations');
    
    try {
      const files = await readdir(destinationsDir);
      const imageFiles = files
        .filter(file => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
        .map(file => ({
          name: file,
          url: `/destinations/${file}`
        }));
      
      return NextResponse.json({ images: imageFiles });
    } catch (error) {
      // Directory doesn't exist or is empty
      return NextResponse.json({ images: [] });
    }
  } catch (error) {
    console.error('Error reading destinations directory:', error);
    return NextResponse.json({ 
      error: 'Error reading images directory' 
    }, { status: 500 });
  }
}
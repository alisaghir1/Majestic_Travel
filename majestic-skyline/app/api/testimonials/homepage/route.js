import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'testimonials.json');

// Helper function to read testimonials data
const readTestimonials = () => {
  try {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading testimonials data:', error);
    return [];
  }
};

// GET - Fetch featured testimonials for homepage
export async function GET() {
  try {
    const testimonials = readTestimonials();
    
    // Filter for featured and approved testimonials only
    const featuredTestimonials = testimonials.filter(
      testimonial => testimonial.featured === true && testimonial.status === 'approved'
    );

    return NextResponse.json(featuredTestimonials);
  } catch (error) {
    console.error('Error fetching featured testimonials:', error);
    return NextResponse.json({ error: 'Failed to fetch featured testimonials' }, { status: 500 });
  }
}
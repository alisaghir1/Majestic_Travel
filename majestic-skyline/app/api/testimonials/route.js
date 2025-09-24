import { promises as fs } from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'testimonials.json');

export async function GET() {
  try {
    // Read all testimonials
    const data = await fs.readFile(dataFile, 'utf-8');
    const testimonials = JSON.parse(data);
    return new Response(JSON.stringify(testimonials), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error reading testimonials:', error);
    return new Response(JSON.stringify({ error: 'Failed to read testimonials' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    // Add a new testimonial
    const body = await request.json();
    const data = await fs.readFile(dataFile, 'utf-8');
    const testimonials = JSON.parse(data);
    const newTestimonial = { 
      id: Date.now(), 
      createdAt: new Date().toISOString(),
      featured: false,
      status: 'approved',
      ...body 
    };
    testimonials.push(newTestimonial);
    await fs.writeFile(dataFile, JSON.stringify(testimonials, null, 2));
    return new Response(JSON.stringify(newTestimonial), {
      headers: { 'Content-Type': 'application/json' },
      status: 201,
    });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return new Response(JSON.stringify({ error: 'Failed to create testimonial' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(request) {
  try {
    // Update a testimonial
    const body = await request.json();
    const data = await fs.readFile(dataFile, 'utf-8');
    const testimonials = JSON.parse(data);
    const index = testimonials.findIndex(testimonial => testimonial.id === body.id);
    
    if (index === -1) {
      return new Response(JSON.stringify({ error: 'Testimonial not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    testimonials[index] = { ...testimonials[index], ...body, updatedAt: new Date().toISOString() };
    await fs.writeFile(dataFile, JSON.stringify(testimonials, null, 2));
    return new Response(JSON.stringify(testimonials[index]), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating testimonial:', error);
    return new Response(JSON.stringify({ error: 'Failed to update testimonial' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(request) {
  try {
    // Delete a testimonial
    const body = await request.json();
    const id = parseInt(body.id);
    
    const data = await fs.readFile(dataFile, 'utf-8');
    const testimonials = JSON.parse(data);
    const filteredTestimonials = testimonials.filter(testimonial => testimonial.id !== id);
    
    await fs.writeFile(dataFile, JSON.stringify(filteredTestimonials, null, 2));
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete testimonial' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
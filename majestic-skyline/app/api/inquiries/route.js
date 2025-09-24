import { promises as fs } from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'inquiries.json');

export async function GET() {
  // Read all inquiries
  const data = await fs.readFile(dataFile, 'utf-8');
  return new Response(data, {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  // Add a new inquiry (usually from contact form)
  const body = await request.json();
  const data = await fs.readFile(dataFile, 'utf-8');
  const inquiries = JSON.parse(data);
  const newInquiry = { 
    id: Date.now(), 
    createdAt: new Date().toISOString(),
    status: 'new',
    replied: false,
    ...body 
  };
  inquiries.push(newInquiry);
  await fs.writeFile(dataFile, JSON.stringify(inquiries, null, 2));
  return new Response(JSON.stringify(newInquiry), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
}

export async function PUT(request) {
  // Update an inquiry (mark as replied, change status, etc.)
  const body = await request.json();
  const data = await fs.readFile(dataFile, 'utf-8');
  const inquiries = JSON.parse(data);
  const index = inquiries.findIndex(inquiry => inquiry.id === body.id);
  
  if (index === -1) {
    return new Response(JSON.stringify({ error: 'Inquiry not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  inquiries[index] = { ...inquiries[index], ...body, updatedAt: new Date().toISOString() };
  await fs.writeFile(dataFile, JSON.stringify(inquiries, null, 2));
  return new Response(JSON.stringify(inquiries[index]), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(request) {
  // Delete an inquiry
  const body = await request.json();
  const id = parseInt(body.id);
  
  const data = await fs.readFile(dataFile, 'utf-8');
  const inquiries = JSON.parse(data);
  const filteredInquiries = inquiries.filter(inquiry => inquiry.id !== id);
  
  await fs.writeFile(dataFile, JSON.stringify(filteredInquiries, null, 2));
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
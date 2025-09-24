import { promises as fs } from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'services.json');

export async function GET() {
  // Read all services
  const data = await fs.readFile(dataFile, 'utf-8');
  return new Response(data, {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  // Add a new service
  const body = await request.json();
  const data = await fs.readFile(dataFile, 'utf-8');
  const services = JSON.parse(data);
  const newService = { 
    id: Date.now(), 
    createdAt: new Date().toISOString(),
    ...body 
  };
  services.push(newService);
  await fs.writeFile(dataFile, JSON.stringify(services, null, 2));
  return new Response(JSON.stringify(newService), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
}

export async function PUT(request) {
  // Update a service
  const body = await request.json();
  const data = await fs.readFile(dataFile, 'utf-8');
  const services = JSON.parse(data);
  const index = services.findIndex(service => service.id === body.id);
  
  if (index === -1) {
    return new Response(JSON.stringify({ error: 'Service not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  services[index] = { ...services[index], ...body, updatedAt: new Date().toISOString() };
  await fs.writeFile(dataFile, JSON.stringify(services, null, 2));
  return new Response(JSON.stringify(services[index]), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(request) {
  // Delete a service
  const body = await request.json();
  const id = parseInt(body.id);
  
  const data = await fs.readFile(dataFile, 'utf-8');
  const services = JSON.parse(data);
  const filteredServices = services.filter(service => service.id !== id);
  
  await fs.writeFile(dataFile, JSON.stringify(filteredServices, null, 2));
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

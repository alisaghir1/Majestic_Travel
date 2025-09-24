import { promises as fs } from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'services.json');

export async function GET() {
  try {
    // Read all services
    const data = await fs.readFile(dataFile, 'utf-8');
    const services = JSON.parse(data);
    
    // Filter only services marked for homepage display and are active
    const homepageServices = services.filter(service => 
      service.showOnHomepage === true && service.active !== false
    );
    
    return new Response(JSON.stringify(homepageServices), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error reading homepage services:', error);
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
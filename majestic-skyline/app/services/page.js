import ServicesPageClient from './client';
import { generatePageMetadata } from "../lib/metadata";
import fs from 'fs';
import path from 'path';

export async function generateMetadata({ searchParams }) {
  const locale = (await searchParams)?.lang || 'en';
  return generatePageMetadata('services', locale);
}

async function getServices() {
  try {
    // For server-side rendering, read directly from file system
    if (typeof window === 'undefined') {
      const filePath = path.join(process.cwd(), 'data', 'services.json');
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const services = JSON.parse(fileContents);
        return Array.isArray(services) ? services.filter(service => service.active !== false) : [];
      }
      return [];
    }
    
    // For client-side, use fetch as fallback
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
    const response = await fetch(`${baseUrl}/api/services`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.error('Failed to fetch services:', response.statusText);
      return [];
    }
    
    const services = await response.json();
    return Array.isArray(services) ? services.filter(service => service.active !== false) : [];
  } catch (error) {
    console.error('Error fetching services:', error);
    // Return empty array instead of throwing error
    return [];
  }
}

export default async function ServicesPage({ searchParams }) {
  const locale = (await searchParams)?.lang || 'en';
  const services = await getServices();
  
  return <ServicesPageClient services={services} locale={locale} />;
}
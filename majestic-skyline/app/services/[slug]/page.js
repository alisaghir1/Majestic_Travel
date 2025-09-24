import { generateServiceMetadata } from "@/app/lib/metadata";
import ServicePageClient from './client';
import fs from 'fs';
import path from 'path';

export async function generateMetadata({ params, searchParams }) {
  const locale = (await searchParams)?.lang || 'en';
  return await generateServiceMetadata((await params).slug, locale);
}

async function getServiceData(slug) {
  try {
    // For server-side rendering, read directly from file system
    if (typeof window === 'undefined') {
      const filePath = path.join(process.cwd(), 'data', 'services.json');
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const services = JSON.parse(fileContents);
        return Array.isArray(services) ? services.find(service => service.slug === slug) : null;
      }
      return null;
    }
    
    // For client-side, use fetch as fallback
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
    const response = await fetch(`${baseUrl}/api/services`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.error('Failed to fetch services:', response.statusText);
      return null;
    }
    
    const services = await response.json();
    return Array.isArray(services) ? services.find(service => service.slug === slug) : null;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

export default async function ServicePage({ params, searchParams }) {
  const locale = (await searchParams)?.lang || 'en';
  const serviceData = await getServiceData((await params).slug);
  
  if (!serviceData) {
    // If no dynamic service found, render the existing static service pages
    return <div>Service not found</div>;
  }

  return <ServicePageClient serviceData={serviceData} locale={locale} />;
}
import { generateServiceMetadata } from "@/app/lib/metadata";
import ServicePageClient from './client';
import { supabaseAdmin, TABLES } from '../../../lib/supabase';

export async function generateStaticParams() {
  try {
    const { data: services, error } = await supabaseAdmin
      .from(TABLES.SERVICES)
      .select('slug')
      .eq('active', true);
    
    if (error) {
      console.error('Error fetching services for static params:', error);
      return [];
    }
    
    return services.map((service) => ({
      slug: service.slug,
    }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}

export async function generateMetadata({ params, searchParams }) {
  const locale = (await searchParams)?.lang || 'en';
  return await generateServiceMetadata((await params).slug, locale);
}

async function getServiceData(slug) {
  try {
    // Use Supabase for both server and client side
    const { data, error } = await supabaseAdmin
      .from(TABLES.SERVICES)
      .select('*')
      .eq('slug', slug)
      .eq('active', true)
      .single();
    
    if (error) {
      console.error('Supabase error:', error);
      return null;
    }
    
    return data;
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
import ServicesPageClient from './client';
import { generatePageMetadata } from "../lib/metadata";
import { supabaseAdmin, TABLES } from '../../lib/supabase';

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

export async function generateMetadata({ searchParams }) {
  const locale = (await searchParams)?.lang || 'en';
  return generatePageMetadata('services', locale);
}

async function getServices() {
  try {
    // Use Supabase for both server and client side
    const { data, error } = await supabaseAdmin
      .from(TABLES.SERVICES)
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Supabase error:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export default async function ServicesPage({ searchParams }) {
  const locale = (await searchParams)?.lang || 'en';
  const services = await getServices();
  
  return <ServicesPageClient services={services} locale={locale} />;
}
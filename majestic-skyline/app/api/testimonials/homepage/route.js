import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

// GET - Fetch featured testimonials for homepage
export async function GET() {
  try {
    const { data: testimonials, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('status', 'approved')
      .eq('featured', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching homepage testimonials:', error);
      return NextResponse.json([]);
    }

    return NextResponse.json(testimonials || []);
  } catch (error) {
    console.error('Error reading homepage testimonials:', error);
    return NextResponse.json([]);
  }
}
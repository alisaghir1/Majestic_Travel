import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

// GET - Fetch featured destinations for homepage
export async function GET() {
  try {
    const { data: destinations, error } = await supabase
      .from('destinations')
      .select('*')
      .eq('active', true)
      .eq('show_on_homepage', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching homepage destinations:', error);
      return NextResponse.json([]);
    }

    return NextResponse.json(destinations || []);
  } catch (error) {
    console.error('Error reading homepage destinations:', error);
    return NextResponse.json([]);
  }
}
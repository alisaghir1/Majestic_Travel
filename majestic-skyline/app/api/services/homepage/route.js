import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

export async function GET() {
  try {
    const { data: services, error } = await supabase
      .from('services')
      .select('*')
      .eq('active', true)
      .eq('show_on_homepage', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching homepage services:', error);
      return NextResponse.json([]);
    }

    return NextResponse.json(services || []);
  } catch (error) {
    console.error('Error reading homepage services:', error);
    return NextResponse.json([]);
  }
}
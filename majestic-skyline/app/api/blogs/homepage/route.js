import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

export async function GET() {
  try {
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('active', true)
      .eq('show_on_homepage', true)
      .order('created_at', { ascending: false })
      .limit(6);

    if (error) {
      console.error('Error fetching homepage blogs:', error);
      return NextResponse.json([]);
    }

    return NextResponse.json(blogs || []);
  } catch (error) {
    console.error('Error reading homepage blogs:', error);
    return NextResponse.json([]);
  }
}
import { NextResponse } from 'next/server';
import { supabaseAdmin, TABLES } from '../../../lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from(TABLES.TESTIMONIALS)
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading testimonials:', error);
    return NextResponse.json({ error: 'Failed to read testimonials' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Received testimonial data:', body); // Debug log
    const currentTime = new Date().toISOString();
    
    // Transform data to match database schema
    const transformedData = {
      name: body.name || { en: '', ar: '' },
      message: body.message || body.testimonial || { en: '', ar: '' },
      profession: body.profession || body.position || { en: '', ar: '' },
      location: body.location || { en: '', ar: '' },
      rating: body.rating || 5,
      image: body.image || body.avatar || '',
      featured: Boolean(body.featured),
      status: body.status || 'approved',
      email: body.email || '',
      created_at: currentTime,
      updated_at: currentTime
    };
    
    console.log('Transformed testimonial data:', transformedData); // Debug log
    
    const { data, error } = await supabaseAdmin
      .from(TABLES.TESTIMONIALS)
      .insert([transformedData])
      .select()
      .single();
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to create testimonial: ' + error.message }, { status: 500 });
    }
    
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, ...updateFields } = body;
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    // Transform data to match database schema
    const transformedData = {};
    
    if (updateFields.name) transformedData.name = updateFields.name;
    if (updateFields.message || updateFields.testimonial) {
      transformedData.message = updateFields.message || updateFields.testimonial;
    }
    if (updateFields.profession || updateFields.position) {
      transformedData.profession = updateFields.profession || updateFields.position;
    }
    if (updateFields.location) transformedData.location = updateFields.location;
    if (updateFields.rating !== undefined) transformedData.rating = updateFields.rating;
    if (updateFields.image || updateFields.avatar) {
      transformedData.image = updateFields.image || updateFields.avatar;
    }
    if (updateFields.featured !== undefined) transformedData.featured = Boolean(updateFields.featured);
    if (updateFields.status) transformedData.status = updateFields.status;
    if (updateFields.email !== undefined) transformedData.email = updateFields.email;
    
    transformedData.updated_at = new Date().toISOString();
    
    const { data, error } = await supabaseAdmin
      .from(TABLES.TESTIMONIALS)
      .update(transformedData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to update testimonial: ' + error.message }, { status: 500 });
    }
    
    if (!data) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating testimonial:', error);
    return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const body = await request.json();
    const { id } = body;
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    const { error } = await supabaseAdmin
      .from(TABLES.TESTIMONIALS)
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to delete testimonial: ' + error.message }, { status: 500 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
  }
}
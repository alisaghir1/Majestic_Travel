import { NextResponse } from 'next/server';
import { supabase, supabaseAdmin } from '../../../lib/supabase';

// GET - Fetch all destinations
export async function GET() {
  try {
    const { data: destinations, error } = await supabase
      .from('destinations')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching destinations:', error);
      return NextResponse.json({ error: 'Failed to fetch destinations' }, { status: 500 });
    }

    return NextResponse.json(destinations || []);
  } catch (error) {
    console.error('Error in destinations GET:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new destination
export async function POST(request) {
  try {
    const destinationData = await request.json();
    console.log('Received destination data:', destinationData); // Debug log
    
    // Transform data to match database schema - only include valid fields
    const transformedData = {};
    
    // Only add fields that exist in our schema
    if (destinationData.title) transformedData.title = destinationData.title;
    if (destinationData.description) transformedData.description = destinationData.description;
    if (destinationData.shortDescription || destinationData.short_description) {
      transformedData.short_description = destinationData.shortDescription || destinationData.short_description;
    }
    if (destinationData.image || destinationData.imageUrl) {
      transformedData.image = destinationData.image || destinationData.imageUrl;
    }
    if (destinationData.region) transformedData.region = destinationData.region;
    if (destinationData.category) transformedData.category = destinationData.category;
    if (destinationData.price) transformedData.price = destinationData.price;
    if (destinationData.location) transformedData.location = destinationData.location;
    if (destinationData.highlights) transformedData.highlights = destinationData.highlights;
    if (destinationData.includes) transformedData.includes = destinationData.includes;
    
    // Boolean fields with defaults
    transformedData.active = destinationData.active !== undefined ? destinationData.active : true;
    transformedData.featured = destinationData.featured !== undefined ? destinationData.featured : false;
    transformedData.show_on_homepage = destinationData.showOnHomepage !== undefined ? destinationData.showOnHomepage : false;
    
    // Generate timestamp for creation
    const now = new Date().toISOString();
    transformedData.created_at = now;
    transformedData.updated_at = now;
    
    console.log('Transformed destination data:', transformedData); // Debug log
    
    const { data: newDestination, error } = await supabaseAdmin
      .from('destinations')
      .insert([transformedData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to create destination: ' + error.message }, { status: 500 });
    }

    return NextResponse.json(newDestination);
  } catch (error) {
    console.error('Error in destinations POST:', error);
    return NextResponse.json({ error: 'Internal server error: ' + error.message }, { status: 500 });
  }
}

// PUT - Update existing destination
export async function PUT(request) {
  try {
    const destinationData = await request.json();
    const { id, ...updateFields } = destinationData;

    if (!id) {
      return NextResponse.json({ error: 'Destination ID is required' }, { status: 400 });
    }

    // Transform data to match database schema
    const transformedData = {};
    
    if (updateFields.title) transformedData.title = updateFields.title;
    if (updateFields.description) transformedData.description = updateFields.description;
    if (updateFields.shortDescription || updateFields.short_description) {
      transformedData.short_description = updateFields.shortDescription || updateFields.short_description;
    }
    if (updateFields.image || updateFields.imageUrl) {
      transformedData.image = updateFields.image || updateFields.imageUrl;
    }
    if (updateFields.region) transformedData.region = updateFields.region;
    if (updateFields.category) transformedData.category = updateFields.category;
    if (updateFields.price) transformedData.price = updateFields.price;
    if (updateFields.location) transformedData.location = updateFields.location;
    if (updateFields.highlights) transformedData.highlights = updateFields.highlights;
    if (updateFields.includes) transformedData.includes = updateFields.includes;
    if (updateFields.active !== undefined) transformedData.active = updateFields.active;
    if (updateFields.featured !== undefined) transformedData.featured = updateFields.featured;
    if (updateFields.showOnHomepage !== undefined) transformedData.show_on_homepage = updateFields.showOnHomepage;
    
    transformedData.updated_at = new Date().toISOString();

    const { data: updatedDestination, error } = await supabaseAdmin
      .from('destinations')
      .update(transformedData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating destination:', error);
      return NextResponse.json({ error: 'Failed to update destination: ' + error.message }, { status: 500 });
    }

    return NextResponse.json(updatedDestination);
  } catch (error) {
    console.error('Error in destinations PUT:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete destination
export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Destination ID is required' }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from('destinations')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting destination:', error);
      return NextResponse.json({ error: 'Failed to delete destination' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in destinations DELETE:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
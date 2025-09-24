import { NextResponse } from 'next/server';
import { supabase, supabaseAdmin } from '../../../lib/supabase';

// GET - Fetch all services
export async function GET() {
  try {
    const { data: services, error } = await supabase
      .from('services')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching services:', error);
      return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
    }

    return NextResponse.json(services || []);
  } catch (error) {
    console.error('Error in services GET:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new service
export async function POST(request) {
  try {
    const serviceData = await request.json();
    console.log('Received service data:', serviceData); // Debug log
    
    // Transform data to match database schema - only include valid fields
    const transformedData = {};
    
    // Only add fields that exist in our schema
    if (serviceData.title) transformedData.title = serviceData.title;
    if (serviceData.name || serviceData.title) transformedData.name = serviceData.name || serviceData.title;
    if (serviceData.shortDescription || serviceData.short_description) {
      transformedData.short_description = serviceData.shortDescription || serviceData.short_description;
    }
    if (serviceData.description) transformedData.description = serviceData.description;
    if (serviceData.sections) transformedData.sections = serviceData.sections;
    if (serviceData.price || serviceData.priceRange) {
      transformedData.price = serviceData.price || serviceData.priceRange;
    }
    if (serviceData.features || serviceData.includedServices) {
      transformedData.features = serviceData.features || serviceData.includedServices;
    }
    if (serviceData.image || serviceData.imageUrl) {
      transformedData.image = serviceData.image || serviceData.imageUrl;
    }
    if (serviceData.slug) transformedData.slug = serviceData.slug;
    if (serviceData.category) transformedData.category = serviceData.category;
    if (serviceData.tags) transformedData.tags = serviceData.tags;
    
    // Boolean fields with defaults
    transformedData.active = serviceData.active !== undefined ? serviceData.active : true;
    transformedData.show_on_homepage = serviceData.showOnHomepage !== undefined ? serviceData.showOnHomepage : false;
    
    // Generate timestamp for creation
    const now = new Date().toISOString();
    transformedData.created_at = now;
    transformedData.updated_at = now;
    
    console.log('Transformed data:', transformedData); // Debug log
    
    const { data: newService, error } = await supabaseAdmin
      .from('services')
      .insert([transformedData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to create service: ' + error.message }, { status: 500 });
    }

    return NextResponse.json(newService);
  } catch (error) {
    console.error('Error in services POST:', error);
    return NextResponse.json({ error: 'Internal server error: ' + error.message }, { status: 500 });
  }
}

// PUT - Update existing service
export async function PUT(request) {
  try {
    const serviceData = await request.json();
    const { id, ...updateFields } = serviceData;

    if (!id) {
      return NextResponse.json({ error: 'Service ID is required' }, { status: 400 });
    }

    // Transform data to match database schema
    const transformedData = {
      title: updateFields.title,
      name: updateFields.name || updateFields.title,
      short_description: updateFields.shortDescription || updateFields.short_description,
      description: updateFields.description,
      sections: updateFields.sections,
      price: updateFields.price || updateFields.priceRange || updateFields.price_range,
      features: updateFields.features || updateFields.includedServices || updateFields.included_services,
      image: updateFields.image || updateFields.imageUrl || updateFields.image_url,
      slug: updateFields.slug,
      category: updateFields.category,
      tags: updateFields.tags,
      active: updateFields.active,
      show_on_homepage: updateFields.showOnHomepage !== undefined ? updateFields.showOnHomepage : updateFields.show_on_homepage,
      updated_at: new Date().toISOString()
    };

    // Remove undefined values
    Object.keys(transformedData).forEach(key => {
      if (transformedData[key] === undefined) {
        delete transformedData[key];
      }
    });

    const { data: updatedService, error } = await supabaseAdmin
      .from('services')
      .update(transformedData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating service:', error);
      return NextResponse.json({ error: 'Failed to update service: ' + error.message }, { status: 500 });
    }

    return NextResponse.json(updatedService);
  } catch (error) {
    console.error('Error in services PUT:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete service
export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Service ID is required' }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from('services')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting service:', error);
      return NextResponse.json({ error: 'Failed to delete service: ' + error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in services DELETE:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

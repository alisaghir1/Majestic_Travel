import { NextResponse } from 'next/server';
import { supabase, supabaseAdmin } from '../../../lib/supabase';

// GET - Fetch all blogs
export async function GET() {
  try {
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching blogs:', error);
      return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }

    // Transform database fields to match client expectations
    const transformedBlogs = (blogs || []).map(blog => ({
      ...blog,
      // Convert snake_case to camelCase for client compatibility
      readTime: blog.read_time,
      showOnHomepage: blog.show_on_homepage,
      // Keep snake_case fields as well for backward compatibility
      read_time: blog.read_time,
      show_on_homepage: blog.show_on_homepage
    }));

    return NextResponse.json(transformedBlogs);
  } catch (error) {
    console.error('Error in blogs GET:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new blog
export async function POST(request) {
  try {
    const blogData = await request.json();
    console.log('Received blog data:', blogData); // Debug log
    
    // Transform data to match database schema
    const transformedData = {};
    
    // Map fields that exist in our schema
    if (blogData.slug) transformedData.slug = blogData.slug;
    if (blogData.title) transformedData.title = blogData.title;
    if (blogData.excerpt) transformedData.excerpt = blogData.excerpt;
    if (blogData.sections) transformedData.sections = blogData.sections;
    if (blogData.category) transformedData.category = blogData.category;
    if (blogData.author) transformedData.author = blogData.author;
    if (blogData.readTime || blogData.read_time) {
      transformedData.read_time = blogData.readTime || blogData.read_time;
    }
    if (blogData.image) transformedData.image = blogData.image;
    if (blogData.tags) transformedData.tags = blogData.tags;
    
    // Boolean fields with defaults
    transformedData.active = blogData.active !== undefined ? blogData.active : true;
    transformedData.show_on_homepage = blogData.showOnHomepage !== undefined ? blogData.showOnHomepage : false;
    
    // Generate timestamp for creation
    const now = new Date().toISOString();
    transformedData.created_at = now;
    transformedData.updated_at = now;
    
    console.log('Transformed blog data:', transformedData); // Debug log
    
    const { data: newBlog, error } = await supabaseAdmin
      .from('blogs')
      .insert([transformedData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to create blog: ' + error.message }, { status: 500 });
    }

    return NextResponse.json(newBlog);
  } catch (error) {
    console.error('Error in blogs POST:', error);
    return NextResponse.json({ error: 'Internal server error: ' + error.message }, { status: 500 });
  }
}

// PUT - Update existing blog
export async function PUT(request) {
  try {
    const blogData = await request.json();
    const { id, ...updateFields } = blogData;

    if (!id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
    }

    // Transform data to match database schema
    const transformedData = {};
    
    if (updateFields.slug) transformedData.slug = updateFields.slug;
    if (updateFields.title) transformedData.title = updateFields.title;
    if (updateFields.excerpt) transformedData.excerpt = updateFields.excerpt;
    if (updateFields.sections) transformedData.sections = updateFields.sections;
    if (updateFields.category) transformedData.category = updateFields.category;
    if (updateFields.author) transformedData.author = updateFields.author;
    if (updateFields.readTime || updateFields.read_time) {
      transformedData.read_time = updateFields.readTime || updateFields.read_time;
    }
    if (updateFields.image) transformedData.image = updateFields.image;
    if (updateFields.tags) transformedData.tags = updateFields.tags;
    if (updateFields.active !== undefined) transformedData.active = updateFields.active;
    if (updateFields.showOnHomepage !== undefined) transformedData.show_on_homepage = updateFields.showOnHomepage;
    
    transformedData.updated_at = new Date().toISOString();

    const { data: updatedBlog, error } = await supabaseAdmin
      .from('blogs')
      .update(transformedData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating blog:', error);
      return NextResponse.json({ error: 'Failed to update blog: ' + error.message }, { status: 500 });
    }

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error('Error in blogs PUT:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete blog
export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog:', error);
      return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in blogs DELETE:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
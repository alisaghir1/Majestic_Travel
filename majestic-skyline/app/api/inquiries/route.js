import { NextResponse } from 'next/server';
import { supabaseAdmin, TABLES } from '../../../lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from(TABLES.INQUIRIES)
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading inquiries:', error);
    return NextResponse.json({ error: 'Failed to read inquiries' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Received inquiry data:', body); // Debug log
    const currentTime = new Date().toISOString();
    
    // Combine all inquiry details into message if they don't fit existing schema
    let fullMessage = body.message || '';
    
    // Add additional form details to the message
    if (body.inquiryType) {
      fullMessage = `Inquiry Type: ${body.inquiryType}\n\n${fullMessage}`;
    }
    if (body.destination) {
      fullMessage = `Destination: ${body.destination}\n${fullMessage}`;
    }
    if (body.persons) {
      fullMessage = `Number of Persons: ${body.persons}\n${fullMessage}`;
    }
    
    const newInquiry = {
      name: body.name || '',
      email: body.email || '',
      phone: body.phone || '', // Keep phone field even if empty
      message: fullMessage.trim(),
      status: body.status || 'new',
      created_at: currentTime,
      updated_at: currentTime
    };
    
    const { data, error } = await supabaseAdmin
      .from(TABLES.INQUIRIES)
      .insert([newInquiry])
      .select()
      .single();
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to create inquiry: ' + error.message }, { status: 500 });
    }
    
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    return NextResponse.json({ error: 'Failed to create inquiry' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    
    console.log('PUT /api/inquiries - Received data:', { id, updateData });
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    updateData.updated_at = new Date().toISOString();
    
    const { data, error } = await supabaseAdmin
      .from(TABLES.INQUIRIES)
      .update(updateData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to update inquiry: ' + error.message }, { status: 500 });
    }
    
    if (!data) {
      return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 });
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating inquiry:', error);
    return NextResponse.json({ error: 'Failed to update inquiry' }, { status: 500 });
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
      .from(TABLES.INQUIRIES)
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to delete inquiry: ' + error.message }, { status: 500 });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    return NextResponse.json({ error: 'Failed to delete inquiry' }, { status: 500 });
  }
}
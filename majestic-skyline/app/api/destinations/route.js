import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'destinations.json');

// Helper function to read destinations data
const readDestinations = () => {
  try {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading destinations data:', error);
    return [];
  }
};

// Helper function to write destinations data
const writeDestinations = (destinations) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(destinations, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing destinations data:', error);
    return false;
  }
};

// GET - Fetch all destinations
export async function GET() {
  try {
    const destinations = readDestinations();
    return NextResponse.json(destinations);
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return NextResponse.json({ error: 'Failed to fetch destinations' }, { status: 500 });
  }
}

// POST - Create new destination
export async function POST(request) {
  try {
    const newDestination = await request.json();
    const destinations = readDestinations();
    
    // Generate new ID
    const maxId = destinations.length > 0 ? Math.max(...destinations.map(d => d.id)) : 0;
    newDestination.id = maxId + 1;
    newDestination.createdAt = new Date().toISOString();
    
    destinations.push(newDestination);
    
    if (writeDestinations(destinations)) {
      return NextResponse.json(newDestination, { status: 201 });
    } else {
      return NextResponse.json({ error: 'Failed to save destination' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error creating destination:', error);
    return NextResponse.json({ error: 'Failed to create destination' }, { status: 500 });
  }
}

// PUT - Update existing destination
export async function PUT(request) {
  try {
    const updatedDestination = await request.json();
    const destinations = readDestinations();
    
    const index = destinations.findIndex(d => d.id === updatedDestination.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Destination not found' }, { status: 404 });
    }
    
    // Preserve original creation date
    updatedDestination.createdAt = destinations[index].createdAt;
    updatedDestination.updatedAt = new Date().toISOString();
    
    destinations[index] = updatedDestination;
    
    if (writeDestinations(destinations)) {
      return NextResponse.json(updatedDestination);
    } else {
      return NextResponse.json({ error: 'Failed to update destination' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error updating destination:', error);
    return NextResponse.json({ error: 'Failed to update destination' }, { status: 500 });
  }
}

// DELETE - Remove destination
export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const destinations = readDestinations();
    
    const filteredDestinations = destinations.filter(d => d.id !== id);
    
    if (filteredDestinations.length === destinations.length) {
      return NextResponse.json({ error: 'Destination not found' }, { status: 404 });
    }
    
    if (writeDestinations(filteredDestinations)) {
      return NextResponse.json({ message: 'Destination deleted successfully' });
    } else {
      return NextResponse.json({ error: 'Failed to delete destination' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error deleting destination:', error);
    return NextResponse.json({ error: 'Failed to delete destination' }, { status: 500 });
  }
}
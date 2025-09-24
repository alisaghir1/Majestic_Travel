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

// GET - Fetch featured destinations for homepage
export async function GET() {
  try {
    const destinations = readDestinations();
    
    // Filter for active destinations that are marked to show on homepage
    const featuredDestinations = destinations
      .filter(destination => destination.active !== false && destination.showOnHomepage === true)
      .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    
    return NextResponse.json(featuredDestinations);
  } catch (error) {
    console.error('Error fetching featured destinations:', error);
    return NextResponse.json({ error: 'Failed to fetch featured destinations' }, { status: 500 });
  }
}
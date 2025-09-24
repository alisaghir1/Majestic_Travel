import { promises as fs } from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'blogs.json');

export async function GET() {
  try {
    // Read all blogs
    const data = await fs.readFile(dataFile, 'utf-8');
    const blogs = JSON.parse(data);
    
    // Filter only blogs marked as featured (showOnHomepage) and are active
    const featuredBlogs = blogs.filter(blog => 
      blog.showOnHomepage === true && blog.active !== false
    );
    
    // Sort by creation date (newest first) and limit to 6 for homepage
    const sortedBlogs = featuredBlogs
      .sort((a, b) => new Date(b.createdAt || b.publishedAt || 0) - new Date(a.createdAt || a.publishedAt || 0))
      .slice(0, 6);
    
    return new Response(JSON.stringify(sortedBlogs), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error reading featured blogs:', error);
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
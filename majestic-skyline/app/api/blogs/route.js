import { promises as fs } from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'blogs.json');

export async function GET() {
  // Read all blogs
  const data = await fs.readFile(dataFile, 'utf-8');
  return new Response(data, {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  // Add a new blog
  const body = await request.json();
  const data = await fs.readFile(dataFile, 'utf-8');
  const blogs = JSON.parse(data);
  const newBlog = { 
    id: Date.now(), 
    slug: body.slug || body.title?.toLowerCase().replace(/\s+/g, '-'),
    createdAt: new Date().toISOString(),
    status: 'draft',
    ...body 
  };
  blogs.push(newBlog);
  await fs.writeFile(dataFile, JSON.stringify(blogs, null, 2));
  return new Response(JSON.stringify(newBlog), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
}

export async function PUT(request) {
  // Update a blog
  const body = await request.json();
  const data = await fs.readFile(dataFile, 'utf-8');
  const blogs = JSON.parse(data);
  const index = blogs.findIndex(blog => blog.id === body.id);
  
  if (index === -1) {
    return new Response(JSON.stringify({ error: 'Blog not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  blogs[index] = { ...blogs[index], ...body, updatedAt: new Date().toISOString() };
  await fs.writeFile(dataFile, JSON.stringify(blogs, null, 2));
  return new Response(JSON.stringify(blogs[index]), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(request) {
  // Delete a blog
  const body = await request.json();
  const id = parseInt(body.id);
  
  const data = await fs.readFile(dataFile, 'utf-8');
  const blogs = JSON.parse(data);
  const filteredBlogs = blogs.filter(blog => blog.id !== id);
  
  await fs.writeFile(dataFile, JSON.stringify(filteredBlogs, null, 2));
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
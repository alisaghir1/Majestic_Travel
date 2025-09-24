import { generateBlogMetadata } from "@/app/lib/metadata";
import BlogPageClient from './client';
import fs from 'fs';
import path from 'path';

export async function generateMetadata({ params, searchParams }) {
  const locale = (await searchParams)?.lang || 'en';
  return await generateBlogMetadata((await params).slug, locale);
}

async function getBlogData(slug) {
  try {
    // For server-side rendering, read directly from file system
    if (typeof window === 'undefined') {
      const filePath = path.join(process.cwd(), 'data', 'blogs.json');
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const blogs = JSON.parse(fileContents);
        return Array.isArray(blogs) ? blogs.find(blog => blog.slug === slug) : null;
      }
      return null;
    }
    
    // For client-side, use fetch as fallback
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
    const response = await fetch(`${baseUrl}/api/blogs`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      console.error('Failed to fetch blogs:', response.statusText);
      return null;
    }
    
    const blogs = await response.json();
    return Array.isArray(blogs) ? blogs.find(blog => blog.slug === slug) : null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export default async function BlogPage({ params, searchParams }) {
  const locale = (await searchParams)?.lang || 'en';
  const blogData = await getBlogData((await params).slug);
  
  if (!blogData) {
    // If no dynamic blog found, render the existing static blog pages
    return <div>Blog post not found</div>;
  }

  return <BlogPageClient blogData={blogData} locale={locale} />;
}
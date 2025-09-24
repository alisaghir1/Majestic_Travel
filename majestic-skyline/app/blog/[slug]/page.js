import { generateBlogMetadata } from "@/app/lib/metadata";
import BlogPageClient from './client';
import { supabase } from '../../../lib/supabase';
import fs from 'fs';
import path from 'path';

export async function generateMetadata({ params, searchParams }) {
  const locale = (await searchParams)?.lang || 'en';
  return await generateBlogMetadata((await params).slug, locale);
}

async function getBlogData(slug) {
  try {
    // Server-side: Use direct Supabase client instead of HTTP fetch
    if (typeof window === 'undefined') {
      try {
        const { data: blogs, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('active', true)
          .order('created_at', { ascending: false });

        if (!error && blogs) {
          // Transform database fields to match client expectations (same as API)
          const transformedBlogs = blogs.map(blog => ({
            ...blog,
            readTime: blog.read_time,
            showOnHomepage: blog.show_on_homepage,
            read_time: blog.read_time,
            show_on_homepage: blog.show_on_homepage
          }));
          
          const blog = transformedBlogs.find(blog => blog.slug === slug);
          if (blog) {
            console.log('Found blog in Supabase (server-side):', blog.slug);
            return blog;
          }
        }
      } catch (supabaseError) {
        console.warn('Supabase direct access failed, falling back to static data:', supabaseError);
      }
      
      // Fallback to static JSON file only if Supabase fails
      const filePath = path.join(process.cwd(), 'data', 'blogs.json');
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const blogs = JSON.parse(fileContents);
        const blog = Array.isArray(blogs) ? blogs.find(blog => blog.slug === slug) : null;
        if (blog) {
          console.log('Found blog in static JSON:', blog.slug);
          return blog;
        }
      }
    } else {
      // Client-side: Use fetch API
      const response = await fetch('/api/blogs', {
        cache: 'no-store'
      });
      
      if (response.ok) {
        const blogs = await response.json();
        const blog = Array.isArray(blogs) ? blogs.find(blog => blog.slug === slug) : null;
        if (blog) {
          console.log('Found blog via API (client-side):', blog.slug);
          return blog;
        }
      }
    }
    
    return null;
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
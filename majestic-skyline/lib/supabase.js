import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Client for frontend operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Admin client for server-side operations (bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Database table names
export const TABLES = {
  BLOGS: 'blogs',
  DESTINATIONS: 'destinations', 
  SERVICES: 'services',
  TESTIMONIALS: 'testimonials',
  INQUIRIES: 'inquiries'
}

// Storage bucket names
export const STORAGE_BUCKETS = {
  BLOGS: 'blog-images',
  DESTINATIONS: 'destination-images',
  SERVICES: 'service-images', 
  TESTIMONIALS: 'testimonial-images'
}
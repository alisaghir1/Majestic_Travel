# Supabase Setup Guide for Majestic Travel

## 🚀 Quick Setup Steps

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com) 
2. Sign up/Login and create a new project
3. Choose a region close to your users
4. Wait for the project to be ready (~2 minutes)

### 2. Get Your Credentials
From your Supabase Dashboard:
- **Project URL**: `https://your-project-id.supabase.co`
- **API Keys**: 
  - `anon/public` key (for frontend)
  - `service_role` key (for admin operations)

### 3. Update Environment Variables
Replace the placeholder values in your `.env` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

### 4. Run Database Schema
1. Go to your Supabase Dashboard
2. Click on "SQL Editor" in the sidebar
3. Create a new query
4. Copy and paste the entire content from `supabase/schema.sql`
5. Click "Run" to execute the schema

### 5. Setup Storage Buckets
1. Go to "Storage" in your Supabase Dashboard
2. Create the following buckets (make them **public**):
   - `blog-images`
   - `destination-images` 
   - `service-images`
   - `testimonial-images`

### 6. Configure Storage Policies
For each bucket, set these policies:
- **Public Access**: Allow public read access
- **Upload Access**: Allow authenticated uploads (we'll handle auth in code)

## 📊 Database Schema Overview

### Tables Created:
- **blogs**: Blog posts with bilingual content and sections
- **destinations**: Travel destinations with pricing and includes
- **services**: Travel services with features and sections  
- **testimonials**: Customer reviews with ratings
- **inquiries**: Contact form submissions

### Key Features:
- **Bilingual Support**: JSONB fields for English/Arabic content
- **Automatic Timestamps**: created_at/updated_at tracking
- **Row Level Security**: Public read, admin full access
- **Indexing**: Optimized for common queries
- **Data Validation**: Check constraints for ratings, status

## 🔒 Security Features

### Row Level Security (RLS)
- Public users can only read active/approved content
- Admin operations use service role key
- Contact form allows public submissions

### API Security
- Frontend uses anon key (limited permissions)
- Admin operations use service role key
- All data properly validated

## 🎯 Next Steps After Setup

1. ✅ Update `.env` with your actual Supabase credentials
2. ✅ Run the SQL schema in Supabase Dashboard
3. ✅ Create storage buckets
4. ✅ Test the connection by running the migration script

The migration will automatically:
- Migrate all your JSON data to Supabase
- Update all API endpoints
- Fix image upload issues
- Enable real-time updates

**Ready to go live with Supabase! 🚀**
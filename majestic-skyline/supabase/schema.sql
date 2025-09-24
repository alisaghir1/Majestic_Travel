-- Majestic Travel Database Schema for Supabase
-- Run this script in your Supabase SQL editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Blogs Table
CREATE TABLE blogs (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title JSONB NOT NULL DEFAULT '{"en": "", "ar": ""}',
  excerpt JSONB NOT NULL DEFAULT '{"en": "", "ar": ""}',
  sections JSONB NOT NULL DEFAULT '[]',
  category TEXT,
  author JSONB DEFAULT '{"en": "", "ar": ""}',
  read_time JSONB DEFAULT '{"en": "", "ar": ""}',
  image TEXT,
  tags JSONB DEFAULT '{"en": [], "ar": []}',
  active BOOLEAN DEFAULT true,
  show_on_homepage BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Destinations Table  
CREATE TABLE destinations (
  id BIGSERIAL PRIMARY KEY,
  title JSONB NOT NULL DEFAULT '{"en": "", "ar": ""}',
  description JSONB NOT NULL DEFAULT '{"en": "", "ar": ""}',
  short_description JSONB DEFAULT '{"en": "", "ar": ""}',
  image TEXT,
  region TEXT,
  category TEXT,
  price JSONB DEFAULT '{"en": "", "ar": ""}',
  location JSONB DEFAULT '{"en": "", "ar": ""}',
  highlights JSONB DEFAULT '{"en": [], "ar": []}',
  includes JSONB DEFAULT '{"en": [], "ar": []}',
  featured BOOLEAN DEFAULT false,
  show_on_homepage BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Services Table
CREATE TABLE services (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title JSONB NOT NULL DEFAULT '{"en": "", "ar": ""}',
  name JSONB DEFAULT '{"en": "", "ar": ""}',
  description JSONB NOT NULL DEFAULT '{"en": "", "ar": ""}',
  short_description JSONB DEFAULT '{"en": "", "ar": ""}',
  sections JSONB DEFAULT '[]',
  category TEXT,
  price JSONB DEFAULT '{"en": "", "ar": ""}',
  image TEXT,
  tags JSONB DEFAULT '{"en": [], "ar": []}',
  features JSONB DEFAULT '{"en": [], "ar": []}',
  active BOOLEAN DEFAULT true,
  show_on_homepage BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Testimonials Table
CREATE TABLE testimonials (
  id BIGSERIAL PRIMARY KEY,
  name JSONB NOT NULL DEFAULT '{"en": "", "ar": ""}',
  message JSONB NOT NULL DEFAULT '{"en": "", "ar": ""}',
  content JSONB DEFAULT '{"en": "", "ar": ""}', -- alias for message for compatibility
  profession JSONB DEFAULT '{"en": "", "ar": ""}',
  title JSONB DEFAULT '{"en": "", "ar": ""}', -- alias for profession for compatibility
  location JSONB DEFAULT '{"en": "", "ar": ""}',
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  status TEXT DEFAULT 'approved' CHECK (status IN ('pending', 'approved', 'rejected')),
  featured BOOLEAN DEFAULT false,
  image TEXT,
  email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Inquiries Table
CREATE TABLE inquiries (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'pending', 'responded', 'in_progress', 'resolved', 'closed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_blogs_slug ON blogs(slug);
CREATE INDEX idx_blogs_active ON blogs(active);
CREATE INDEX idx_blogs_category ON blogs(category);
CREATE INDEX idx_blogs_created_at ON blogs(created_at DESC);

CREATE INDEX idx_destinations_region ON destinations(region);
CREATE INDEX idx_destinations_category ON destinations(category);
CREATE INDEX idx_destinations_featured ON destinations(featured);
CREATE INDEX idx_destinations_active ON destinations(active);

CREATE INDEX idx_services_slug ON services(slug);
CREATE INDEX idx_services_category ON services(category);
CREATE INDEX idx_services_active ON services(active);

CREATE INDEX idx_testimonials_status ON testimonials(status);
CREATE INDEX idx_testimonials_featured ON testimonials(featured);
CREATE INDEX idx_testimonials_rating ON testimonials(rating);

CREATE INDEX idx_inquiries_status ON inquiries(status);
CREATE INDEX idx_inquiries_email ON inquiries(email);
CREATE INDEX idx_inquiries_created_at ON inquiries(created_at DESC);

-- Update timestamps trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_blogs_updated_at BEFORE UPDATE ON blogs 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_destinations_updated_at BEFORE UPDATE ON destinations 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_inquiries_updated_at BEFORE UPDATE ON inquiries 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
-- Enable RLS on all tables
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Public read access for active content
CREATE POLICY "Public read access for active blogs" ON blogs
    FOR SELECT USING (active = true);

CREATE POLICY "Public read access for active destinations" ON destinations
    FOR SELECT USING (active = true);

CREATE POLICY "Public read access for active services" ON services
    FOR SELECT USING (active = true);

CREATE POLICY "Public read access for approved testimonials" ON testimonials
    FOR SELECT USING (status = 'approved');

-- Admin full access (will be configured with service role key)
CREATE POLICY "Admin full access blogs" ON blogs
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin full access destinations" ON destinations
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin full access services" ON services
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin full access testimonials" ON testimonials
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Admin full access inquiries" ON inquiries
    FOR ALL USING (auth.role() = 'service_role');

-- Public can insert inquiries (contact form)
CREATE POLICY "Public can create inquiries" ON inquiries
    FOR INSERT WITH CHECK (true);
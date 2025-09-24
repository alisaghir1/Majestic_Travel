require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs').promises;
const path = require('path');

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables!');
  console.log('Make sure you have NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env.local file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Table constants
const TABLES = {
  TESTIMONIALS: 'testimonials',
  INQUIRIES: 'inquiries'
};

const dataDir = path.join(process.cwd(), 'data');

async function migrateTestimonials() {
  try {
    console.log('📝 Starting testimonials migration...');
    
    const testimonialsPath = path.join(dataDir, 'testimonials.json');
    const testimonialsData = await fs.readFile(testimonialsPath, 'utf-8');
    const testimonials = JSON.parse(testimonialsData);
    
    if (!testimonials || testimonials.length === 0) {
      console.log('⚠️ No testimonials found to migrate');
      return;
    }
    
    console.log(`Found ${testimonials.length} testimonials to migrate`);
    
    for (const testimonial of testimonials) {
      try {
        const migratedTestimonial = {
          name: testimonial.name || { en: testimonial.clientName || '', ar: '' },
          position: testimonial.position || { en: testimonial.clientPosition || '', ar: '' },
          company: testimonial.company || { en: testimonial.clientCompany || '', ar: '' },
          testimonial: testimonial.testimonial || { 
            en: testimonial.content || testimonial.text || testimonial.message || '', 
            ar: '' 
          },
          rating: testimonial.rating || 5,
          avatar: testimonial.avatar || testimonial.image || '',
          featured: testimonial.featured || false,
          status: testimonial.status || 'approved',
          created_at: testimonial.createdAt || testimonial.created_at || new Date().toISOString(),
          updated_at: testimonial.updatedAt || testimonial.updated_at || new Date().toISOString()
        };
        
        const { data, error } = await supabase
          .from(TABLES.TESTIMONIALS)
          .insert([migratedTestimonial]);
        
        if (error) {
          console.error(`❌ Error migrating testimonial ${testimonial.id}:`, error);
        } else {
          console.log(`✅ Migrated testimonial: ${migratedTestimonial.name.en || 'Unknown'}`);
        }
      } catch (err) {
        console.error(`❌ Error processing testimonial:`, err);
      }
    }
    
  } catch (error) {
    console.error('❌ Error during testimonials migration:', error);
  }
}

async function migrateInquiries() {
  try {
    console.log('📧 Starting inquiries migration...');
    
    const inquiriesPath = path.join(dataDir, 'inquiries.json');
    const inquiriesData = await fs.readFile(inquiriesPath, 'utf-8');
    const inquiries = JSON.parse(inquiriesData);
    
    if (!inquiries || inquiries.length === 0) {
      console.log('⚠️ No inquiries found to migrate');
      return;
    }
    
    console.log(`Found ${inquiries.length} inquiries to migrate`);
    
    for (const inquiry of inquiries) {
      try {
        const migratedInquiry = {
          name: inquiry.name || inquiry.fullName || '',
          email: inquiry.email || '',
          phone: inquiry.phone || inquiry.phoneNumber || '',
          message: inquiry.message || inquiry.content || '',
          subject: inquiry.subject || 'General Inquiry',
          status: inquiry.status || 'new',
          replied: inquiry.replied || false,
          created_at: inquiry.createdAt || inquiry.created_at || new Date().toISOString(),
          updated_at: inquiry.updatedAt || inquiry.updated_at || new Date().toISOString()
        };
        
        const { data, error } = await supabase
          .from(TABLES.INQUIRIES)
          .insert([migratedInquiry]);
        
        if (error) {
          console.error(`❌ Error migrating inquiry ${inquiry.id}:`, error);
        } else {
          console.log(`✅ Migrated inquiry from: ${migratedInquiry.name || migratedInquiry.email}`);
        }
      } catch (err) {
        console.error(`❌ Error processing inquiry:`, err);
      }
    }
    
  } catch (error) {
    console.error('❌ Error during inquiries migration:', error);
  }
}

async function main() {
  console.log('🚀 Starting data migration to Supabase...\n');
  
  await migrateTestimonials();
  console.log(''); // Empty line for better readability
  await migrateInquiries();
  
  console.log('\n🎉 Migration completed!');
}

main().catch(console.error);
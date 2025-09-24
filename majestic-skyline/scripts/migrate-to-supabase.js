import dotenv from 'dotenv'
import { supabaseAdmin } from '../lib/supabase.js'
import fs from 'fs'
import path from 'path'

// Load environment variables
dotenv.config()

// Read JSON data files
const readJsonFile = (filePath) => {
  try {
    const fullPath = path.join(process.cwd(), filePath)
    const fileContent = fs.readFileSync(fullPath, 'utf8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error)
    return []
  }
}

const migrateBlogs = async () => {
  console.log('🔄 Migrating blogs...')
  const blogs = readJsonFile('data/blogs.json')
  
  for (const blog of blogs) {
    try {
      const { error } = await supabaseAdmin
        .from('blogs')
        .upsert({
          id: blog.id,
          slug: blog.slug,
          title: blog.title || { en: '', ar: '' },
          excerpt: blog.excerpt || { en: '', ar: '' },
          sections: blog.sections || [],
          category: blog.category || '',
          author: blog.author || { en: '', ar: '' },
          read_time: blog.readTime || { en: '', ar: '' },
          image: blog.image || '',
          tags: blog.tags || { en: [], ar: [] },
          active: blog.active !== false,
          show_on_homepage: blog.showOnHomepage || false,
          created_at: blog.createdAt || new Date().toISOString(),
          updated_at: blog.updatedAt || new Date().toISOString()
        })
      
      if (error) {
        console.error('Error migrating blog:', blog.id, error)
      } else {
        console.log('✅ Migrated blog:', blog.slug)
      }
    } catch (error) {
      console.error('Error processing blog:', blog.id, error)
    }
  }
}

const migrateDestinations = async () => {
  console.log('🔄 Migrating destinations...')
  const destinations = readJsonFile('data/destinations.json')
  
  for (const destination of destinations) {
    try {
      const { error } = await supabaseAdmin
        .from('destinations')
        .upsert({
          id: destination.id,
          title: destination.title || { en: '', ar: '' },
          description: destination.description || { en: '', ar: '' },
          short_description: destination.shortDescription || { en: '', ar: '' },
          image: destination.image || '',
          region: destination.region || '',
          category: destination.category || '',
          price: destination.price || { en: '', ar: '' },
          location: destination.location || { en: '', ar: '' },
          highlights: destination.highlights || { en: [], ar: [] },
          includes: destination.includes || { en: [], ar: [] },
          featured: destination.featured || false,
          show_on_homepage: destination.showOnHomepage || false,
          active: destination.active !== false,
          created_at: destination.createdAt || new Date().toISOString(),
          updated_at: destination.updatedAt || new Date().toISOString()
        })
      
      if (error) {
        console.error('Error migrating destination:', destination.id, error)
      } else {
        console.log('✅ Migrated destination:', destination.title?.en || destination.id)
      }
    } catch (error) {
      console.error('Error processing destination:', destination.id, error)
    }
  }
}

const migrateServices = async () => {
  console.log('🔄 Migrating services...')
  const services = readJsonFile('data/services.json')
  
  for (const service of services) {
    try {
      const { error } = await supabaseAdmin
        .from('services')
        .upsert({
          id: service.id,
          slug: service.slug,
          title: service.title || { en: '', ar: '' },
          name: service.name || { en: '', ar: '' },
          description: service.description || { en: '', ar: '' },
          short_description: service.shortDescription || { en: '', ar: '' },
          sections: service.sections || [],
          category: service.category || '',
          price: service.price || { en: '', ar: '' },
          image: service.image || '',
          tags: service.tags || { en: [], ar: [] },
          features: service.features || { en: [], ar: [] },
          active: service.active !== false,
          show_on_homepage: service.showOnHomepage || false,
          created_at: service.createdAt || new Date().toISOString(),
          updated_at: service.updatedAt || new Date().toISOString()
        })
      
      if (error) {
        console.error('Error migrating service:', service.id, error)
      } else {
        console.log('✅ Migrated service:', service.slug)
      }
    } catch (error) {
      console.error('Error processing service:', service.id, error)
    }
  }
}

const migrateTestimonials = async () => {
  console.log('🔄 Migrating testimonials...')
  const testimonials = readJsonFile('data/testimonials.json')
  
  for (const testimonial of testimonials) {
    try {
      const { error } = await supabaseAdmin
        .from('testimonials')
        .upsert({
          id: testimonial.id,
          name: testimonial.name || { en: '', ar: '' },
          message: testimonial.message || testimonial.content || { en: '', ar: '' },
          content: testimonial.content || testimonial.message || { en: '', ar: '' },
          profession: testimonial.profession || testimonial.title || { en: '', ar: '' },
          title: testimonial.title || testimonial.profession || { en: '', ar: '' },
          location: testimonial.location || { en: '', ar: '' },
          rating: testimonial.rating || 5,
          status: testimonial.status || 'approved',
          featured: testimonial.featured || false,
          image: testimonial.image || '',
          email: testimonial.email || '',
          created_at: testimonial.createdAt || new Date().toISOString(),
          updated_at: testimonial.updatedAt || new Date().toISOString()
        })
      
      if (error) {
        console.error('Error migrating testimonial:', testimonial.id, error)
      } else {
        console.log('✅ Migrated testimonial:', testimonial.name?.en || testimonial.id)
      }
    } catch (error) {
      console.error('Error processing testimonial:', testimonial.id, error)
    }
  }
}

const migrateInquiries = async () => {
  console.log('🔄 Migrating inquiries...')
  const inquiries = readJsonFile('data/inquiries.json')
  
  for (const inquiry of inquiries) {
    try {
      const { error } = await supabaseAdmin
        .from('inquiries')
        .upsert({
          id: inquiry.id,
          name: inquiry.name || '',
          email: inquiry.email || '',
          phone: inquiry.phone || '',
          message: inquiry.message || '',
          status: inquiry.status || 'new',
          created_at: inquiry.createdAt || new Date().toISOString(),
          updated_at: inquiry.updatedAt || new Date().toISOString()
        })
      
      if (error) {
        console.error('Error migrating inquiry:', inquiry.id, error)
      } else {
        console.log('✅ Migrated inquiry:', inquiry.id)
      }
    } catch (error) {
      console.error('Error processing inquiry:', inquiry.id, error)
    }
  }
}

const runMigration = async () => {
  console.log('🚀 Starting Supabase migration...\n')
  
  try {
    await migrateBlogs()
    console.log('')
    
    await migrateDestinations()
    console.log('')
    
    await migrateServices()
    console.log('')
    
    await migrateTestimonials()
    console.log('')
    
    await migrateInquiries()
    console.log('')
    
    console.log('🎉 Migration completed successfully!')
    console.log('💡 You can now switch your app to use Supabase!')
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
  }
}

// Run migration if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runMigration()
}

export { runMigration }
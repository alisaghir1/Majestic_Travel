import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

// Load environment variables
dotenv.config()

// Create Supabase admin client directly
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

console.log('Supabase URL:', supabaseUrl)
console.log('Service Key available:', !!supabaseServiceKey)

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials!')
  console.error('URL:', supabaseUrl)
  console.error('Service Key:', supabaseServiceKey ? 'Present' : 'Missing')
  process.exit(1)
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Read JSON data files
const readJsonFile = (filePath) => {
  try {
    const fullPath = path.join(process.cwd(), filePath)
    const fileContent = fs.readFileSync(fullPath, 'utf8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message)
    return []
  }
}

const migrateBlogs = async () => {
  console.log('🔄 Migrating blogs...')
  const blogs = readJsonFile('data/blogs.json')
  console.log(`Found ${blogs.length} blogs to migrate`)
  
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
        console.error('❌ Error migrating blog:', blog.id, error.message)
      } else {
        console.log('✅ Migrated blog:', blog.slug)
      }
    } catch (error) {
      console.error('❌ Error processing blog:', blog.id, error.message)
    }
  }
}

const migrateServices = async () => {
  console.log('🔄 Migrating services...')
  const services = readJsonFile('data/services.json')
  console.log(`Found ${services.length} services to migrate`)
  
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
        console.error('❌ Error migrating service:', service.id, error.message)
      } else {
        console.log('✅ Migrated service:', service.slug)
      }
    } catch (error) {
      console.error('❌ Error processing service:', service.id, error.message)
    }
  }
}

const runMigration = async () => {
  console.log('🚀 Starting Supabase migration...\n')
  
  try {
    await migrateBlogs()
    console.log('')
    
    await migrateServices()
    console.log('')
    
    console.log('🎉 Migration completed successfully!')
    console.log('💡 You can now test your admin panel with Supabase!')
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message)
  }
}

// Run migration
runMigration()
// Utility functions for generating dynamic metadata
import fs from 'fs';
import path from 'path';

// Fetch service data from file system (server-side) or API (client-side)
const getServiceData = async (serviceSlug) => {
  try {
    // For server-side, read directly from file system
    if (typeof window === 'undefined') {
      const filePath = path.join(process.cwd(), 'data', 'services.json');
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const services = JSON.parse(fileContents);
        return Array.isArray(services) ? services.find(service => service.slug === serviceSlug) : null;
      }
      return null;
    }
    
    // For client-side, use fetch
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || window.location.origin}/api/services`);
    const services = await response.json();
    return services.find(service => service.slug === serviceSlug);
  } catch (error) {
    console.error('Error fetching service data:', error);
    return null;
  }
};

// Fetch blog data from file system (server-side) or API (client-side)
const getBlogData = async (blogSlug) => {
  try {
    // For server-side, read directly from file system
    if (typeof window === 'undefined') {
      const filePath = path.join(process.cwd(), 'data', 'blogs.json');
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const blogs = JSON.parse(fileContents);
        return Array.isArray(blogs) ? blogs.find(blog => blog.slug === blogSlug) : null;
      }
      return null;
    }
    
    // For client-side, use fetch
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || window.location.origin}/api/blogs`);
    const blogs = await response.json();
    return blogs.find(blog => blog.slug === blogSlug);
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return null;
  }
};

export const generateServiceMetadata = async (serviceSlug, language = 'en') => {
  // First try to get data from admin system
  const serviceData = await getServiceData(serviceSlug);
  
  if (serviceData) {
    const baseTitle = language === 'ar' ? ' | ماجستيك سكايلاين' : ' | Majestic Skyline';
    
    // Helper function to get localized content
    const getLocalizedContent = (content) => {
      if (typeof content === 'object' && content !== null) {
        return content[language] || content.en || content.ar || '';
      }
      return content || '';
    };

    // Helper function to get localized array
    const getLocalizedArray = (content) => {
      if (typeof content === 'object' && content !== null && !Array.isArray(content)) {
        return content[language] || content.en || content.ar || [];
      }
      return Array.isArray(content) ? content : [];
    };

    const title = getLocalizedContent(serviceData.title);
    const description = getLocalizedContent(serviceData.description);
    const content = getLocalizedContent(serviceData.content);
    const tags = getLocalizedArray(serviceData.tags);
    
    const metaDescription = description || (content ? content.substring(0, 160) : '');
    const metaKeywords = tags.length > 0 ? tags.join(', ') : serviceData.category;
    
    return {
      title: `${title}${baseTitle}`,
      description: metaDescription,
      keywords: metaKeywords,
      openGraph: {
        title: title,
        description: metaDescription,
        type: 'website',
        images: serviceData.image ? [{ url: serviceData.image, alt: title }] : [],
        locale: language === 'ar' ? 'ar_AE' : 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: title,
        description: metaDescription,
        images: serviceData.image ? [serviceData.image] : [],
      },
      alternates: {
        canonical: `/services/${serviceSlug}`,
        languages: {
          'en': `/services/${serviceSlug}?lang=en`,
          'ar': `/services/${serviceSlug}?lang=ar`,
        },
      },
    };
  }

  // Fallback to default metadata if no dynamic data found
  return {
    title: language === 'ar' ? 'خدمات السفر | ماجستيك سكايلاين' : 'Travel Services | Majestic Skyline',
    description: language === 'ar' ? 'خدمات سفر متميزة من ماجستيك سكايلاين' : 'Premium travel services from Majestic Skyline',
    keywords: language === 'ar' ? 'خدمات سفر, وكالة سفر, دبي' : 'travel services, travel agency, Dubai',
  };
};

export const generateBlogMetadata = async (slug, language = 'en') => {
  // Try to get data from admin system
  const blogData = await getBlogData(slug);
  
  if (!blogData) {
    return {
      title: language === 'ar' ? 'المدونة | ماجستيك سكايلاين' : 'Blog | Majestic Skyline',
      description: language === 'ar' ? 'اقرأ أحدث مقالات السفر والنصائح' : 'Read the latest travel articles and tips',
      keywords: language === 'ar' ? 'مدونة السفر, نصائح السفر, دبي' : 'travel blog, travel tips, Dubai',
    };
  }

  const baseTitle = language === 'ar' ? ' | ماجستيك سكايلاين' : ' | Majestic Skyline';
  
  // Helper function to get localized content
  const getLocalizedContent = (content) => {
    if (typeof content === 'object' && content !== null) {
      return content[language] || content.en || content.ar || '';
    }
    return content || '';
  };

  // Helper function to get localized array
  const getLocalizedArray = (content) => {
    if (typeof content === 'object' && content !== null && !Array.isArray(content)) {
      return content[language] || content.en || content.ar || [];
    }
    return Array.isArray(content) ? content : [];
  };

  const title = getLocalizedContent(blogData.title);
  const excerpt = getLocalizedContent(blogData.excerpt);
  const author = getLocalizedContent(blogData.author);
  const tags = getLocalizedArray(blogData.tags);
  
  // Generate description from excerpt or first section content
  let description = excerpt;
  if (!description && blogData.sections && blogData.sections.length > 0) {
    const firstSectionContent = getLocalizedContent(blogData.sections[0].content);
    description = firstSectionContent.substring(0, 160);
  }
  
  const metaKeywords = tags.length > 0 ? tags.join(', ') : blogData.category;
  
  return {
    title: `${title}${baseTitle}`,
    description: description,
    keywords: metaKeywords,
    authors: [{ name: author || 'Majestic Skyline' }],
    publishedTime: blogData.createdAt,
    modifiedTime: blogData.updatedAt,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      publishedTime: blogData.createdAt,
      modifiedTime: blogData.updatedAt,
      authors: [author || 'Majestic Skyline'],
      images: blogData.image ? [{ url: blogData.image, alt: title }] : [],
      locale: language === 'ar' ? 'ar_AE' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: blogData.image ? [blogData.image] : [],
    },
    alternates: {
      canonical: `/blog/${slug}`,
      languages: {
        'en': `/blog/${slug}?lang=en`,
        'ar': `/blog/${slug}?lang=ar`,
      },
    },
  };
};

export const generatePageMetadata = (pageKey, language = 'en') => {
  const pageMeta = {
    home: {
      en: {
        title: 'Majestic Skyline - Premier Travel Agency in Dubai | Luxury Travel Services',
        description: 'Discover the world with Majestic Skyline, Dubai\'s premier travel agency. Luxury travel packages, flights, hotels, and personalized travel experiences.',
        keywords: ['travel agency Dubai', 'luxury travel', 'travel packages', 'Dubai travel services', 'international travel', 'vacation packages']
      },
      ar: {
        title: 'ماجستيك سكايلاين - وكالة السفر الرائدة في دبي | خدمات السفر الفاخرة',
        description: 'اكتشف العالم مع ماجستيك سكايلاين، وكالة السفر الرائدة في دبي. باقات سفر فاخرة وطيران وفنادق وتجارب سفر شخصية.',
        keywords: ['وكالة سفر دبي', 'سفر فاخر', 'باقات سفر', 'خدمات سفر دبي', 'سفر دولي', 'باقات عطلات']
      }
    },
    about: {
      en: {
        title: 'About Us - Majestic Skyline Travel Agency Dubai',
        description: 'Learn about Majestic Skyline, Dubai\'s trusted travel partner. Our story, mission, and commitment to exceptional travel experiences.',
        keywords: ['about Majestic Skyline', 'travel agency Dubai', 'travel company', 'Dubai travel experts']
      },
      ar: {
        title: 'عنا - وكالة سفر ماجستيك سكايلاين دبي',
        description: 'تعرف على ماجستيك سكايلاين، شريك السفر الموثوق في دبي. قصتنا ورسالتنا والتزامنا بتجارب السفر الاستثنائية.',
        keywords: ['عن ماجستيك سكايلاين', 'وكالة سفر دبي', 'شركة سفر', 'خبراء السفر دبي']
      }
    },
    contact: {
      en: {
        title: 'Contact Us - Majestic Skyline Travel Agency Dubai',
        description: 'Get in touch with Majestic Skyline for all your travel needs. Contact our travel experts in Dubai for personalized assistance.',
        keywords: ['contact travel agency', 'Dubai travel contact', 'travel consultation', 'Majestic Skyline contact']
      },
      ar: {
        title: 'اتصل بنا - وكالة سفر ماجستيك سكايلاين دبي',
        description: 'تواصل مع ماجستيك سكايلاين لجميع احتياجات السفر. اتصل بخبراء السفر لدينا في دبي للحصول على مساعدة شخصية.',
        keywords: ['الاتصال بوكالة السفر', 'اتصال السفر دبي', 'استشارة السفر', 'اتصال ماجستيك سكايلاين']
      }
    },
    destinations: {
      en: {
        title: 'Travel Destinations - Explore the World with Majestic Skyline',
        description: 'Discover amazing travel destinations with Majestic Skyline. From exotic beaches to cultural cities, find your perfect getaway.',
        keywords: ['travel destinations', 'vacation destinations', 'holiday destinations', 'travel packages', 'international destinations']
      },
      ar: {
        title: 'وجهات السفر - استكشف العالم مع ماجستيك سكايلاين',
        description: 'اكتشف وجهات السفر المدهشة مع ماجستيك سكايلاين. من الشواطئ الغريبة إلى المدن الثقافية، اعثر على رحلتك المثالية.',
        keywords: ['وجهات السفر', 'وجهات العطلات', 'وجهات الإجازات', 'باقات السفر', 'وجهات دولية']
      }
    },
    services: {
      en: {
        title: 'Travel Services - Complete Travel Solutions | Majestic Skyline',
        description: 'Explore our comprehensive travel services including flights, hotels, tours, visa assistance, and more. Professional travel solutions in Dubai.',
        keywords: ['travel services', 'flight booking', 'hotel reservation', 'tour packages', 'visa services', 'Dubai travel agency']
      },
      ar: {
        title: 'خدمات السفر - حلول السفر الكاملة | ماجستيك سكايلاين',
        description: 'استكشف خدمات السفر الشاملة بما في ذلك الطيران والفنادق والجولات ومساعدة التأشيرة والمزيد. حلول السفر المهنية في دبي.',
        keywords: ['خدمات السفر', 'حجز الطيران', 'حجز الفنادق', 'باقات الجولات', 'خدمات التأشيرة', 'وكالة سفر دبي']
      }
    }
  };

  const meta = pageMeta[pageKey]?.[language] || pageMeta[pageKey]?.en;
  
  if (!meta) {
    return {
      title: language === 'ar' ? 'ماجستيك سكايلاين - وكالة السفر' : 'Majestic Skyline - Travel Agency',
      description: language === 'ar' ? 'وكالة سفر متميزة في دبي' : 'Premium travel agency in Dubai',
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.join(', '),
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      locale: language === 'ar' ? 'ar_AE' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
};
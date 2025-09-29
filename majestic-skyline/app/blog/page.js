'use client';

import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight, Calendar, User, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 1340px)': {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      '(max-width: 800px)': {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
    },
  });

  const getLocalizedContent = (content) => {
    if (typeof content === 'object' && content !== null) {
      return content[language] || content.en || content.ar || '';
    }
    return content || '';
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(language === 'ar' ? 'ar-AE' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/blogs');
        if (response.ok) {
          const data = await response.json();
          const activeBlogs = data
            .filter(blog => blog.active !== false)
            .sort((a, b) => new Date(b.createdAt || b.publishedAt || 0) - new Date(a.createdAt || a.publishedAt || 0));
          setBlogs(activeBlogs || []);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-[#1c355e] via-[#2a4a7a] to-[#8b7866] py-32 px-4 mb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-semibold">
              {language === 'ar' ? 'مدونة السفر' : 'Travel Blog'}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            {language === 'ar' ? 'رحلات استثنائية' : 'Exceptional Journeys'}
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'اكتشف نصائح السفر والوجهات المدهشة من خلال مقالاتنا المختارة بعناية. رحلات استثنائية وتجارب لا تُنسى تنتظرك'
              : 'Discover travel tips and amazing destinations through our carefully curated articles. Exceptional journeys and unforgettable experiences await you'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="text-4xl font-bold">{blogs.length}</div>
              <div className="text-lg opacity-90">
                {language === 'ar' ? 'مقالة مفيدة' : 'Helpful Articles'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-lg opacity-90">
                {language === 'ar' ? 'وجهة مميزة' : 'Amazing Destinations'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="text-4xl font-bold">1000+</div>
              <div className="text-lg opacity-90">
                {language === 'ar' ? 'نصيحة قيمة' : 'Valuable Tips'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1c355e] mb-6">
            {language === 'ar' ? 'أحدث المقالات' : 'Latest Articles'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'استكشف مقالاتنا الحديثة المليئة بالنصائح والإرشادات لجعل رحلتك القادمة استثنائية'
              : 'Explore our latest articles filled with tips and guidance to make your next journey exceptional'
            }
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <span className="ml-4 text-white text-lg">
              {language === 'ar' ? 'جاري تحميل المقالات...' : 'Loading articles...'}
            </span>
          </div>
        ) : blogs.length > 0 ? (
          <div className="relative max-w-fit mx-auto">
            <div ref={sliderRef} className="keen-slider">
              {blogs.map((blog, index) => {
                const blogTitle = getLocalizedContent(blog.title);
                const blogExcerpt = getLocalizedContent(blog.excerpt);
                const blogAuthor = getLocalizedContent(blog.author);
                const blogReadTime = getLocalizedContent(blog.readTime);
                const blogSlug = blog.slug || generateSlug(blogTitle);
                const formattedDate = formatDate(blog.createdAt || blog.publishedAt);
                
                return (
                  <div key={blog.id || index} className="keen-slider__slide">
                    <article className="bg-white  shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl mx-3 h-full group border border-gray-100">
                      <div className="relative h-80 overflow-hidden">
                        {blog.image ? (
                          <Image
                            src={blog.image}
                            alt={blogTitle}
                            width={500}
                            height={320}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#1c355e] via-[#2a4a7a] to-[#8b7866] flex items-center justify-center">
                            <span className="text-white text-6xl font-bold">
                              {blogTitle?.charAt(0) || 'B'}
                            </span>
                          </div>
                        )}
                        
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                        
                        {blog.showOnHomepage && (
                          <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            <Tag size={14} className="inline mr-2" />
                            {language === 'ar' ? 'مميز' : 'Featured'}
                          </div>
                        )}
                        
                        {blog.category && (
                          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm text-[#1c355e] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            {blog.category}
                          </div>
                        )}
                      </div>

                      <div className="p-8">
                        <div className="flex items-center justify-between text-sm text-[#8b7866] mb-4">
                          <div className="flex items-center space-x-4">
                            {blogAuthor && (
                              <div className="flex items-center space-x-2">
                                <User size={16} />
                                <span className="font-medium">{blogAuthor}</span>
                              </div>
                            )}
                            {blogReadTime && (
                              <div className="flex items-center space-x-2">
                                <Clock size={16} />
                                <span>{blogReadTime}</span>
                              </div>
                            )}
                          </div>
                          {formattedDate && (
                            <div className="flex items-center space-x-2">
                              <Calendar size={16} />
                              <span>{formattedDate}</span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-[#1c355e] mb-4 line-clamp-2 group-hover:text-[#8b7866] transition-colors duration-300">
                          {blogTitle}
                        </h3>

                        <p className="text-gray-600 text-lg mb-6 line-clamp-3 leading-relaxed">
                          {blogExcerpt || `${blogTitle}... ${language === 'ar' ? 'اقرأ المزيد لاكتشاف التفاصيل المثيرة' : 'Read more to discover exciting details'}`}
                        </p>

                        <div className="flex justify-between items-center">
                          <Link
                            href={`/blog/${blogSlug}`}
                            className="inline-flex items-center bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/btn"
                          >
                            {language === 'ar' ? 'اقرأ المقال' : 'Read Article'}
                            <svg 
                              className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                          
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>

            {blogs.length > 3 && (
              <>
                <button
                  onClick={() => slider.current?.prev()}
                  className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white text-[#1c355e] cursor-pointer p-3 rounded-full hover:bg-[#1c355e] hover:text-white hover:scale-110 border border-white transition z-10 shadow-lg"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => slider.current?.next()}
                  className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white text-[#1c355e] cursor-pointer p-3 rounded-full hover:bg-[#1c355e] hover:text-white hover:scale-110 border border-white transition z-10 shadow-lg"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-lg max-w-2xl mx-auto">
            <div className="mb-6">
              <svg className="w-20 h-20 text-[#1c355e]/50 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-[#1c355e] mb-4">
              {language === 'ar' ? 'لا توجد مقالات متاحة حالياً' : 'No Articles Available Yet'}
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {language === 'ar' 
                ? 'سيتم عرض مقالاتنا المميزة هنا قريباً. ترقبوا محتوى رائع عن السفر والاستكشاف'
                : 'Our amazing travel articles will appear here soon. Stay tuned for great content about travel and exploration'
              }
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Link>
          </div>
        )}
      </section>

    </div>
  );
}

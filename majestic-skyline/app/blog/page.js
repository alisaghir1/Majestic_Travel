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
    <section className="bg-gradient-to-br from-[#1c355e] via-[#2a4a7a] to-[#8b7866] py-20 px-4 min-h-screen mt-30">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {language === 'ar' ? 'مدونة السفر' : 'Travel Blog'}
        </h2>
        <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto">
          {language === 'ar' 
            ? 'اكتشف نصائح السفر والوجهات المدهشة من خلال مقالاتنا المختارة بعناية'
            : 'Discover travel tips and amazing destinations through our carefully curated articles'
          }
        </p>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <span className="ml-4 text-white text-lg">
              {language === 'ar' ? 'جاري تحميل المقالات...' : 'Loading articles...'}
            </span>
          </div>
        ) : blogs.length > 0 ? (
          <div className="relative max-w-7xl mx-auto">
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
                    <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-500 mx-2 h-full">
                      <div className="relative h-64 overflow-hidden">
                        {blog.image ? (
                          <Image
                            src={blog.image}
                            alt={blogTitle}
                            width={400}
                            height={256}
                            className="w-full h-full object-cover hover:scale-110 transition duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#1c355e] to-[#8b7866] flex items-center justify-center">
                            <span className="text-white text-4xl font-bold">
                              {blogTitle?.charAt(0) || 'B'}
                            </span>
                          </div>
                        )}
                        
                        {blog.showOnHomepage && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            <Tag size={12} className="inline mr-1" />
                            {language === 'ar' ? 'مميز' : 'Featured'}
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between text-sm text-[#8b7866] mb-3">
                          {blog.category && (
                            <span className="bg-[#8b7866]/10 text-[#8b7866] px-2 py-1 rounded-full text-xs font-medium">
                              {blog.category}
                            </span>
                          )}
                          {formattedDate && (
                            <div className="flex items-center">
                              <Calendar size={12} className="mr-1" />
                              {formattedDate}
                            </div>
                          )}
                        </div>

                        <h3 className="text-2xl font-semibold text-[#1c355e] mb-3 line-clamp-2">
                          {blogTitle}
                        </h3>

                        <p className="text-gray-600 text-base mb-4 line-clamp-3">
                          {blogExcerpt || blogTitle}
                        </p>

                        <div className="flex items-center justify-between text-sm text-[#8b7866] mb-4">
                          {blogAuthor && (
                            <div className="flex items-center">
                              <User size={12} className="mr-1" />
                              {blogAuthor}
                            </div>
                          )}
                          {blogReadTime && (
                            <div className="flex items-center">
                              <Clock size={12} className="mr-1" />
                              {blogReadTime}
                            </div>
                          )}
                        </div>

                        <div className="text-right">
                          <Link
                            href={`/blog/${blogSlug}`}
                            className="inline-flex items-center text-[#1c355e] hover:text-[#8b7866] font-medium transition duration-300 group"
                          >
                            {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                            <svg 
                              className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
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
          <div className="text-center py-20">
            <div className="mb-4">
              <svg className="w-16 h-16 text-white/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {language === 'ar' ? 'لا توجد مقالات متاحة حالياً' : 'No Articles Available'}
            </h3>
            <p className="text-white/70 mb-6">
              {language === 'ar' 
                ? 'سيتم عرض المقالات هنا عند إضافتها'
                : 'Articles will appear here when published'
              }
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

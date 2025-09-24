"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { RTLWrapper } from "@/app/components/RTLWrapper";
import { useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";

export default function BlogPageClient({ blogData, locale }) {
  const { language } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  
  // Prioritize context language over URL parameter
  const currentLang = language;

  // Update URL when language changes
  useEffect(() => {
    if (language !== locale) {
      const urlParams = new URLSearchParams(searchParams);
      urlParams.set('lang', language);
      router.replace(`/blog/${params.slug}?${urlParams.toString()}`, { scroll: false });
    }
  }, [language, locale, router, searchParams, params.slug]);

  // Helper function to get content in current language
  const getLocalizedContent = (content) => {
    if (typeof content === 'object' && content !== null) {
      return content[currentLang] || content.en || content.ar || '';
    }
    return content || '';
  };

  // Helper function to get array content in current language
  const getLocalizedArray = (content) => {
    if (typeof content === 'object' && content !== null && !Array.isArray(content)) {
      return content[currentLang] || content.en || content.ar || [];
    }
    return Array.isArray(content) ? content : [];
  };

  const title = getLocalizedContent(blogData.title);
  const excerpt = getLocalizedContent(blogData.excerpt);
  const author = getLocalizedContent(blogData.author);
  const readTime = getLocalizedContent(blogData.readTime);
  const tags = getLocalizedArray(blogData.tags);
  const sections = blogData.sections || [];

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (currentLang === 'ar') {
      return date.toLocaleDateString('ar-AE', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <RTLWrapper>
      <div className="pt-60 pb-24 bg-[#f2f2f7] mx-auto text-gray-800">
        {/* Hero */}
        <div className="relative h-[40rem] mb-16">
          {blogData.image ? (
            <Image
              src={blogData.image}
              alt={title}
              fill
              className="object-cover rounded-xl"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-[#1c355e] to-[#2a4a7a] rounded-xl"></div>
          )}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {title}
              </h1>
              {excerpt && (
                <p className="text-lg md:text-xl opacity-90">
                  {excerpt}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Article Meta */}
        <div className="container mx-auto px-5 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-4">
                {author && (
                  <span className="flex items-center gap-2">
                    <span className="font-medium">{currentLang === 'ar' ? 'بواسطة:' : 'By:'}</span>
                    {author}
                  </span>
                )}
                {blogData.createdAt && (
                  <span className="flex items-center gap-2">
                    <span className="font-medium">{currentLang === 'ar' ? 'تاريخ النشر:' : 'Published:'}</span>
                    {formatDate(blogData.createdAt)}
                  </span>
                )}
              </div>
              {readTime && (
                <span className="bg-[#1c355e] text-white px-3 py-1 rounded-full text-xs">
                  {readTime}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <section className="space-y-8 container mx-auto px-5 mb-20 text-lg leading-relaxed">
          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <article key={section.id || index} className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1c355e] mb-6">
                {getLocalizedContent(section.title)}
              </h2>
              
              {/* Section Image */}
              {section.image && (
                <div className="mb-6">
                  <Image
                    src={section.image}
                    alt={getLocalizedContent(section.title)}
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                </div>
              )}
              
              {/* Section Content */}
              <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                {getLocalizedContent(section.content).split('\n').map((paragraph, pIndex) => (
                  paragraph.trim() && <p key={pIndex} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </article>
          ))}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#1c355e] mb-4">
                {currentLang === 'ar' ? 'العلامات' : 'Tags'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#f2f2f7] text-[#1c355e] px-3 py-1 rounded-full text-sm hover:bg-[#1c355e] hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Related Articles / CTA */}
        <div className="text-center container mx-auto px-5 max-w-2xl">
          <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
            {currentLang === 'ar' ? 'هل أعجبك هذا المقال؟' : 'Enjoyed This Article?'}
          </h4>
          <p className="mb-6 text-[#8b7866]">
            {currentLang === 'ar' 
              ? 'تصفح المزيد من المقالات أو ابدأ في التخطيط لرحلتك القادمة معنا.'
              : 'Browse more articles or start planning your next trip with us.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-block bg-[#8b7866] hover:bg-[#7a6b59] text-white px-6 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
            >
              {currentLang === 'ar' ? 'المزيد من المقالات' : 'More Articles'}
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-[#1c355e] hover:bg-[#2a4a7a] text-white px-6 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
            >
              {currentLang === 'ar' ? 'خطط رحلتك' : 'Plan Your Trip'}
            </Link>
          </div>
        </div>
      </div>
    </RTLWrapper>
  );
}
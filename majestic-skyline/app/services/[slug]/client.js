"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { RTLWrapper } from "@/app/components/RTLWrapper";
import { useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";

export default function ServicePageClient({ serviceData, locale }) {
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
      router.replace(`/services/${params.slug}?${urlParams.toString()}`, { scroll: false });
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

  const title = getLocalizedContent(serviceData.title);
  const description = getLocalizedContent(serviceData.description);
  const price = getLocalizedContent(serviceData.price);
  const features = getLocalizedArray(serviceData.features);
  const sections = serviceData.sections || [];

  return (
    <RTLWrapper>
      <div className="pt-60 pb-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 mx-auto text-gray-800 min-h-screen">
        {/* Enhanced Hero Section */}
        <div className="relative h-[50rem] mb-20 container mx-auto px-5">
          <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
            {serviceData.image ? (
              <>
                <Image
                  src={serviceData.image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1c355e] via-[#2a4a7a] to-[#8b7866] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>
              </div>
            )}
            
            {/* Hero Content */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-12 text-white w-full">
                {/* Breadcrumb */}
                <nav className="mb-6">
                  <Link
                    href="/services"
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {currentLang === 'ar' ? '← العودة للخدمات' : '← Back to Services'}
                  </Link>
                </nav>
                
                {/* Category Badge */}
                {serviceData.category && (
                  <div className="mb-6">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {currentLang === 'ar' 
                        ? serviceData.category === 'business' ? 'تجاري' : serviceData.category === 'leisure' ? 'ترفيهي' : serviceData.category === 'specialized' ? 'متخصص' : serviceData.category
                        : serviceData.category.charAt(0).toUpperCase() + serviceData.category.slice(1)
                      }
                    </span>
                  </div>
                )}
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {title}
                </h1>
                
                {price && (
                  <div className="mb-6">
                    <span className="bg-gradient-to-r from-[#8b7866] to-[#1c355e] text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                      {price}
                    </span>
                  </div>
                )}
                
                <p className="text-xl md:text-2xl leading-relaxed max-w-4xl font-light opacity-90">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <section className="container mx-auto px-5 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Dynamic Sections */}
              {sections.map((section, index) => (
                <div 
                  key={section.id || index} 
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Section Image */}
                  {section.image && (
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={section.image}
                        alt={getLocalizedContent(section.title)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-[#1c355e] mb-6 group-hover:text-[#8b7866] transition-colors duration-300">
                      {getLocalizedContent(section.title)}
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      {getLocalizedContent(section.content).split('\n').map((paragraph, pIndex) => (
                        paragraph.trim() && (
                          <p key={pIndex} className="mb-4">
                            {paragraph}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Features Card */}
              {features && features.length > 0 && (
                <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-8">
                  <h3 className="text-2xl font-bold text-[#1c355e] mb-6 flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#1c355e] to-[#8b7866] rounded-full mr-3"></div>
                    {currentLang === 'ar' ? 'المميزات المتضمنة' : 'Included Features'}
                  </h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#1c355e] to-[#8b7866] rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 group-hover:text-[#1c355e] transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-[#1c355e] to-[#8b7866] text-white rounded-3xl shadow-lg p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">
                    {currentLang === 'ar' ? 'هل تحتاج مساعدة؟' : 'Need Help?'}
                  </h3>
                  
                  <p className="mb-6 leading-relaxed opacity-90">
                    {currentLang === 'ar' 
                      ? 'خبراؤنا في السفر جاهزون لمساعدتك في تخصيص هذه الخدمة حسب احتياجاتك.'
                      : 'Our travel experts are ready to help you customize this service to your needs.'
                    }
                  </p>
                  
                  <Link
                    href="/contact"
                    className="group inline-flex items-center w-full justify-center bg-white text-[#1c355e] px-6 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
                  >
                    <span className="mr-2">{currentLang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <div className="container mx-auto max-w-4xl px-5">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#1c355e] via-[#2a4a7a] to-[#8b7866] text-white rounded-3xl shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative z-10 text-center py-16 px-8">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {currentLang === 'ar' ? 'جاهز لحجز هذه الخدمة؟' : 'Ready to Book This Service?'}
              </h2>
              
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
                {currentLang === 'ar' 
                  ? 'اتصل بخبراء السفر لدينا لتخصيص هذه الخدمة وفقًا لاحتياجاتك والحصول على أفضل العروض.'
                  : 'Contact our travel experts to customize this service for your needs and get the best deals.'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-white text-[#1c355e] font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span className="mr-2">{currentLang === 'ar' ? 'احصل على عرض أسعار' : 'Get Quote'}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link
                  href="/services"
                  className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-[#1c355e] transition-all duration-300"
                >
                  <span className="mr-2">{currentLang === 'ar' ? 'استكشف خدمات أخرى' : 'Explore Other Services'}</span>
                  <svg className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RTLWrapper>
  );
}
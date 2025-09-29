"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { RTLWrapper } from "../components/RTLWrapper";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ServicesPageClient({ services, locale }) {
  const { language } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Prioritize context language over URL parameter
  const currentLang = language;
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 6;
  
  // Calculate pagination
  const totalPages = Math.ceil(services.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = services.slice(startIndex, endIndex);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to services section
    const servicesSection = document.querySelector('#services-grid');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update URL when language changes
  useEffect(() => {
    if (language !== locale) {
      const params = new URLSearchParams(searchParams);
      params.set('lang', language);
      router.replace(`/services?${params.toString()}`, { scroll: false });
    }
  }, [language, locale, router, searchParams]);

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

  return (
    <RTLWrapper>
      <div className="pt-60 pb-24 bg-gradient-to-br mt from-gray-50 via-blue-50 to-indigo-50 mx-auto text-gray-800 min-h-screen">
        {/* Hero Section with Enhanced Design */}
        <div className="relative text-center mb-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c355e]/5 to-[#8b7866]/5 rounded-3xl transform -rotate-1"></div>
          <div className="relative z-10 py-16">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
                {currentLang === 'ar' ? 'خدمات مميزة' : 'Premium Services'}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#1c355e] via-[#2a4a7a] to-[#8b7866] bg-clip-text text-transparent mb-8 leading-tight">
              {currentLang === 'ar' ? 'خدمات السفر الفاخرة' : 'Luxury Travel Services'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              {currentLang === 'ar' 
                ? 'نحن نحول أحلام السفر إلى تجارب استثنائية مع خدماتنا المتميزة والمصممة خصيصاً لك'
                : 'We transform travel dreams into extraordinary experiences with our premium, personalized services'
              }
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-[#1c355e] to-[#8b7866] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Services Grid with Enhanced Cards */}
        <div className="container mx-auto px-5">
          {services.length > 0 ? (
            <>
              <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentServices.map((service, index) => {
                const title = getLocalizedContent(service.title);
                const description = getLocalizedContent(service.description);
                const price = getLocalizedContent(service.price);
                const features = getLocalizedArray(service.features);

                return (
                  <div 
                    key={service.id} 
                    className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1c355e] via-[#8b7866] to-[#1c355e] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-white rounded-3xl m-1">
                      
                      {/* Service Image with Overlay */}
                      <div className="relative h-56 overflow-hidden rounded-t-3xl">
                        {service.image ? (
                          <>
                            <Image
                              src={service.image}
                              alt={title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          </>
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#1c355e] via-[#2a4a7a] to-[#8b7866] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-30">
                              <div className="w-full h-full" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
                              }}></div>
                            </div>
                            <span className="relative text-white text-xl font-bold z-10">{title}</span>
                          </div>
                        )}
                        
                        {/* Category Badge */}
                        {service.category && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="bg-white/90 backdrop-blur-sm text-[#1c355e] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                              {currentLang === 'ar' 
                                ? service.category === 'business' ? 'تجاري' : service.category === 'leisure' ? 'ترفيهي' : service.category === 'specialized' ? 'متخصص' : service.category
                                : service.category.charAt(0).toUpperCase() + service.category.slice(1)
                              }
                            </span>
                          </div>
                        )}

                        {/* Price Badge */}
                        {price && (
                          <div className="absolute bottom-4 right-4 z-10">
                            <span className="bg-gradient-to-r from-[#8b7866] to-[#1c355e] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                              {price}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Service Content */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-[#1c355e] mb-4 group-hover:text-[#8b7866] transition-colors duration-300">
                          {title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                          {description}
                        </p>
                        
                        {/* Features with Icons */}
                        {features && features.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-[#1c355e] mb-3 uppercase">
                              {currentLang === 'ar' ? 'المميزات' : 'Features'}
                            </h4>
                            <div className="space-y-2">
                              {features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-gradient-to-r from-[#1c355e] to-[#8b7866] rounded-full mr-3 flex-shrink-0"></div>
                                  <span>{feature}</span>
                                </div>
                              ))}
                              {features.length > 3 && (
                                <div className="flex items-center text-sm text-[#8b7866] font-medium">
                                  <div className="w-2 h-2 bg-[#8b7866] rounded-full mr-3 flex-shrink-0"></div>
                                  <span>{currentLang === 'ar' ? `+${features.length - 3} مميزات أخرى` : `+${features.length - 3} more features`}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* CTA Button */}
                        <Link
                          href={`/services/${service.slug}${currentLang === 'ar' ? '?lang=ar' : ''}`}
                          className="group/btn relative w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white font-semibold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden"
                        >
                          <span className="relative z-10">
                            {currentLang === 'ar' ? 'استكشف الخدمة' : 'Explore Service'}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-[#8b7866] to-[#1c355e] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                          <svg className="w-5 h-5 ml-2 relative z-10 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
                })}
              </div>
              
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 mb-8">
                  <div className="flex items-center space-x-2 bg-white rounded-2xl shadow-lg p-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        currentPage === 1
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-[#1c355e] hover:bg-gray-100 hover:scale-105'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                          currentPage === page
                            ? 'bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white shadow-lg transform scale-105'
                            : 'text-[#1c355e] hover:bg-gray-100 hover:scale-105'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        currentPage === totalPages
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-[#1c355e] hover:bg-gray-100 hover:scale-105'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="bg-white rounded-3xl p-12 shadow-lg max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1c355e] to-[#8b7866] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#1c355e] mb-4">
                  {currentLang === 'ar' ? 'لا توجد خدمات متاحة حالياً' : 'No Services Available Yet'}
                </h2>
                <p className="text-gray-600 text-lg">
                  {currentLang === 'ar' 
                    ? 'ستظهر خدماتنا المميزة هنا قريباً. يرجى المراجعة لاحقاً أو اتصل بنا للحصول على خدمات مخصصة.'
                    : 'Our premium services will appear here soon. Please check back later or contact us for custom services.'
                  }
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative container mx-auto max-w-6xl px-5">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#1c355e] via-[#2a4a7a] to-[#8b7866] text-white rounded-3xl shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-50">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative z-10 text-center py-20 px-8">
              <div className="mb-8">
                <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase">
                  {currentLang === 'ar' ? 'ابدأ رحلتك' : 'Start Your Journey'}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                {currentLang === 'ar' ? 'جاهز لتخطيط رحلتك المثالية؟' : 'Ready to Plan Your Perfect Adventure?'}
              </h2>
              
              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light opacity-90">
                {currentLang === 'ar' 
                  ? 'خبراؤنا في السفر يتطلعون لمساعدتك في إنشاء ذكريات لا تُنسى. دعنا نصمم تجربة سفر مثالية خصيصاً لك'
                  : 'Our travel experts are excited to help you create unforgettable memories. Let us craft the perfect travel experience just for you'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center px-8 py-4 bg-white text-[#1c355e] font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <span className="mr-2">{currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link
                  href="/destinations"
                  className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-[#1c355e] transition-all duration-300"
                >
                  <span className="mr-2">{currentLang === 'ar' ? 'استكشف الوجهات' : 'Explore Destinations'}</span>
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
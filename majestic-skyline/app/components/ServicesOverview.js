
"use client";
import { useState, useEffect } from 'react';
import { Plane, Hotel, Map, Briefcase, Heart, ShieldCheck, Star, Globe, Car, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { RTLWrapper } from "./RTLWrapper";

export default function ServicesOverview() {
  const { t, language } = useLanguage();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Icon mapping for different service categories
  const getServiceIcon = (category) => {
    const iconProps = { size: 40, className: "text-[#8b7866]" };
    
    switch (category?.toLowerCase()) {
      case 'business':
        return <Briefcase {...iconProps} />;
      case 'leisure':
        return <Heart {...iconProps} />;
      case 'transportation':
        return <Car {...iconProps} />;
      case 'accommodation':
        return <Hotel {...iconProps} />;
      case 'specialized':
        return <Star {...iconProps} />;
      default:
        return <Globe {...iconProps} />;
    }
  };

  // Helper function to get localized content
  const getLocalizedContent = (content) => {
    if (typeof content === 'object' && content !== null) {
      return content[language] || content.en || content.ar || '';
    }
    return content || '';
  };

  // Generate service slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  // Fetch homepage services
  useEffect(() => {
    const fetchHomepageServices = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/services/homepage');
        if (response.ok) {
          const data = await response.json();
          setServices(data || []);
        }
      } catch (error) {
        console.error('Error fetching homepage services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomepageServices();
  }, []);

  return (
    <RTLWrapper>
      <section className="py-20 px-4 bg-[#1c355e]">
        <div className="container mx-auto px-5 text-start">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8b7866] mb-6">{t('servicesOverview.title')}</h2>
          <p className="text-white mb-14 mx-auto md:text-xl">
            {t('servicesOverview.subtitle')}
          </p>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8b7866]"></div>
              <span className="ml-4 text-white text-lg">
                {language === 'ar' ? 'جاري تحميل الخدمات...' : 'Loading services...'}
              </span>
            </div>
          ) : services.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => {
                const serviceName = getLocalizedContent(service.title || service.name);
                const serviceDesc = getLocalizedContent(service.description);
                const serviceSlug = service.slug || generateSlug(serviceName);
                
                return (
                  <Link
                    key={service.id || index}
                    href={`/services/${serviceSlug}`}
                    className="group bg-[#f2f2f7] border border-gray-200 rounded-2xl shadow-md p-8 text-left hover:scale-110 hover:shadow-xl transition duration-300 hover:border-[#8b7866]"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      {getServiceIcon(service.category)}
                      {service.image && (
                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                          <Image
                            src={service.image}
                            alt={serviceName}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1c355e] mb-3 group-hover:underline">
                      {serviceName}
                    </h3>
                    <p className="text-black text-base leading-relaxed line-clamp-3">
                      {serviceDesc}
                    </p>
                    {service.price && (
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <span className="text-sm font-semibold text-[#8b7866]">
                          {getLocalizedContent(service.price)}
                        </span>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="mb-4">
                <Package size={64} className="text-[#8b7866] mx-auto mb-4" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {language === 'ar' ? 'لا توجد خدمات متاحة حالياً' : 'No Services Available'}
              </h3>
              <p className="text-white/70 mb-6">
                {language === 'ar' 
                  ? 'سيتم عرض الخدمات هنا عند إضافتها وتفعيل خيار العرض في الصفحة الرئيسية'
                  : 'Services will appear here when added and marked to show on homepage'
                }
              </p>
              <Link
                href="/services"
                className="inline-block bg-[#8b7866] text-white px-8 py-3 rounded-lg hover:bg-[#7a6b5a] transition-colors duration-300"
              >
                {language === 'ar' ? 'تصفح جميع الخدمات' : 'Browse All Services'}
              </Link>
            </div>
          )}
        </div>
      </section>
    </RTLWrapper>
  );
}

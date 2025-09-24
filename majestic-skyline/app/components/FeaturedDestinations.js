'use client';

import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from "../contexts/LanguageContext";

export default function FeaturedDestinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, isRTL, language } = useLanguage();
  
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 30 },
      },
    },
  });

  // Helper function to get localized content
  const getLocalizedContent = (content) => {
    if (typeof content === 'object' && content !== null) {
      return content[language] || content.en || content.ar || '';
    }
    return content || '';
  };

  // Fetch featured destinations from API
  useEffect(() => {
    const fetchFeaturedDestinations = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/destinations/homepage');
        if (response.ok) {
          const data = await response.json();
          setDestinations(data || []);
        }
      } catch (error) {
        console.error('Error fetching featured destinations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedDestinations();
  }, []);

  return (
    <section className={`w-full py-20 bg-[#f2f2f7] relative ${isRTL ? 'text-right' : 'text-left'}`} dir="ltr">
      <div className="mx-auto px-5">
        <h2 className={`text-4xl md:text-5xl text-[#1c355e] font-bold mb-5 text-center`}>
          {t('featuredDestinations.title')}
        </h2>
        <p className={`text-lg md:text-xl text-[#444] text-center mb-15 max-w-3xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('featuredDestinations.subtitle')}
        </p>

        {/* Carousel */}
        <div className="relative">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1c355e]"></div>
              <span className="ml-4 text-[#1c355e] text-lg">
                {language === 'ar' ? 'جاري تحميل الوجهات...' : 'Loading destinations...'}
              </span>
            </div>
          ) : destinations.length > 0 ? (
            <div ref={sliderRef} className="keen-slider">
              {destinations.map((destination, index) => {
                const title = getLocalizedContent(destination.title);
                const description = getLocalizedContent(destination.description);
                const price = getLocalizedContent(destination.price);
                const includes = destination.includes?.[language] || destination.includes?.en || [];
                
                return (
                  <div
                    key={destination.id || index}
                    className="keen-slider__slide bg-white rounded-2xl overflow-hidden"
                  >
                    <div className="w-full xl:h-[45rem] h-[30rem] relative hover:opacity-90 hover:shadow-2xl transition-all duration-300 ease-in-out">
                      {destination.image ? (
                        <Image
                          src={destination.image}
                          alt={title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-2xl"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#1c355e] to-[#8b7866] flex items-center justify-center rounded-t-2xl">
                          <span className="text-white text-4xl font-bold">
                            {title?.charAt(0) || 'D'}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <h3 className={`text-2xl md:text-3xl text-[#1c355e] font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {title}
                      </h3>
                      <p className={`text-[#8b7866] text-xl md:text-2xl leading-relaxed mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {description}
                      </p>
                      {price && (
                        <p className={`text-lg md:text-xl text-[#4e4e4e] font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                          {price}
                        </p>
                      )}
                      {includes.length > 0 && (
                        <ul className={`text-lg md:text-xl text-[#6e6e6e] list-disc mb-4 ${isRTL ? 'list-inside text-right' : 'list-inside text-left'}`}>
                          {includes.slice(0, 3).map((item, i) => (
                            <li key={i} className={isRTL ? 'text-right' : 'text-left'}>{item}</li>
                          ))}
                        </ul>
                      )}
                      <Link
                        href="/contact"
                        className={`inline-block bg-[#1c355e] text-white py-2 px-4 rounded-lg w-full text-center text-2xl hover:bg-[#8b7866] transition ${isRTL ? 'text-center' : 'text-center'}`}
                      >
                        {t('featuredDestinations.bookNowButton')}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-[#1c355e] mb-2">
                {language === 'ar' ? 'لا توجد وجهات مميزة حالياً' : 'No Featured Destinations Available'}
              </h3>
              <p className="text-[#8b7866]">
                {language === 'ar' 
                  ? 'سيتم عرض الوجهات المميزة هنا عند إضافتها'
                  : 'Featured destinations will appear here when added'
                }
              </p>
            </div>
          )}

          {/* Arrows */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-[#1c355e] hover:text-white transition z-10"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-[#1c355e] hover:text-white transition z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

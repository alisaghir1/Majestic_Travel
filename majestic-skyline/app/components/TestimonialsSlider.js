'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from 'react';

export default function TestimonialsSlider() {
  const { t, isRTL, language } = useLanguage();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
    autoplay: {
      delay: 5000, // Time interval between slides (in ms)
      pauseOnHover: true, 
    },
  });

  useEffect(() => {
    fetchFeaturedTestimonials();
  }, []);

  const fetchFeaturedTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials/homepage');
      const data = await response.json();
      setTestimonials(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching featured testimonials:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className={`w-full py-24 bg-[#1c355e] text-white ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl text-[#f9f7f4] font-bold mb-4 font-serif ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('testimonials.title')}
          </h2>
          <div className="flex justify-center items-center h-64">
            <div className="text-[#8b7866] text-lg">Loading testimonials...</div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className={`w-full py-24 bg-[#1c355e] text-white ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl text-[#f9f7f4] font-bold mb-4 font-serif ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('testimonials.title')}
          </h2>
          <div className="flex justify-center items-center h-64">
            <div className="text-[#8b7866] text-lg">No testimonials available.</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`w-full py-24 bg-[#1c355e] text-white ${isRTL ? 'text-right' : 'text-left'}`} dir="ltr">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl text-[#f9f7f4] font-bold mb-4 font-serif ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('testimonials.title')}
        </h2>
        <p className={`text-lg md:text-xl text-[#8b7866] mx-auto mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('testimonials.subtitle')}
        </p>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider hover:scale-105 transition-all duration-300">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id || index}
                className="keen-slider__slide bg-[#f9f7f4] text-[#1c355e] shadow-xl p-10 flex flex-col items-center justify-center gap-6 rounded-xl"
              >
                <Quote className="text-[#8b7866] w-10 h-10" />
                <p className={`text-2xl leading-relaxed text-center italic max-w-2xl ${isRTL ? 'text-right' : 'text-center'}`}>
                  &ldquo;{testimonial.message?.[language] || testimonial.message}&rdquo;
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <div className="flex flex-col items-center">
                    {testimonial.image && (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name?.[language] || testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mb-3"
                        width={64}
                        height={64}
                      />
                    )}
                    <span className="text-2xl font-semibold">
                      {testimonial.name?.[language] || testimonial.name}
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-lg text-[#8b7866]">
                        {testimonial.profession?.[language] || testimonial.profession || testimonial.location?.[language] || testimonial.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-6 h-6 ${i < (testimonial.rating || 5) ? 'text-[#f9c72e] fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio and Travel Style */}
                {(testimonial.bio?.[language] || testimonial.bio || testimonial.travelStyle?.[language] || testimonial.travelStyle) && (
                  <div className="mt-6 text-center">
                    {(testimonial.bio?.[language] || testimonial.bio) && (
                      <p className={`text-lg text-[#8b7866] italic ${isRTL ? 'text-right' : 'text-center'}`}>
                        &ldquo;{testimonial.bio?.[language] || testimonial.bio}&rdquo;
                      </p>
                    )}
                    {(testimonial.travelStyle?.[language] || testimonial.travelStyle) && (
                      <span className={`text-md font-semibold mt-2 block text-[#1c355e] ${isRTL ? 'text-right' : 'text-center'}`}>
                        {t('testimonials.travelStylePrefix')} {testimonial.travelStyle?.[language] || testimonial.travelStyle}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#1c355e] text-white p-2 rounded-full hover:bg-[#1c355e] hover:text-[#8b7866] hover:scale-110 border border-white transition z-10"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-[#1c355e] text-white p-2 rounded-full hover:bg-[#1c355e] hover:text-[#8b7866] hover:scale-110 border border-white transition z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

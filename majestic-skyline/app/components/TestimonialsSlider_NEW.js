'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useLanguage } from "../contexts/LanguageContext";

export default function TestimonialsSlider() {
  const { t, isRTL } = useLanguage();
  
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
    autoplay: {
      delay: 500, // Time interval between slides (in ms)
      pauseOnHover: false, 
    },
  });

  const testimonialKeys = ['emily', 'daniel', 'sofia'];

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
            {testimonialKeys.map((key, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-[#f9f7f4] text-[#1c355e] shadow-xl p-10 flex flex-col items-center justify-center gap-6 rounded-xl"
              >
                <Quote className="text-[#8b7866] w-10 h-10" />
                <p className={`text-2xl leading-relaxed text-center italic max-w-2xl ${isRTL ? 'text-right' : 'text-center'}`}>
                  &ldquo;{t(`testimonials.testimonials.${key}.message`)}&rdquo;
                </p>

                <div className="flex items-center gap-4 mt-6 ">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-semibold">{t(`testimonials.testimonials.${key}.name`)}</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-lg text-[#8b7866]">{t(`testimonials.testimonials.${key}.profession`)}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6" style={{ color: '#f9c72e' }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio and Travel Style */}
                <div className="mt-6 text-center">
                  <p className={`text-lg text-[#8b7866] italic ${isRTL ? 'text-right' : 'text-center'}`}>
                    &ldquo;{t(`testimonials.testimonials.${key}.bio`)}&rdquo;
                  </p>
                  <span className={`text-md font-semibold mt-2 block text-[#1c355e] ${isRTL ? 'text-right' : 'text-center'}`}>
                    {t('testimonials.travelStylePrefix')} {t(`testimonials.testimonials.${key}.travelStyle`)}
                  </span>
                </div>
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

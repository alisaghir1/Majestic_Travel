'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from "../contexts/LanguageContext";

export default function FeaturedDestinations() {
  const { t, isRTL } = useLanguage();
  
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

  const destinations = [
    {
      key: 'georgia',
      image: '/destinations/georgia.jpg',
    },
    {
      key: 'thailand',
      image: '/destinations/thailand.jpg',
    },
    {
      key: 'greece',
      image: '/destinations/greece.jpg',
    },
    {
      key: 'southAfrica',
      image: '/destinations/south-africa.jpg',
    },
    {
      key: 'iceland',
      image: '/destinations/iceland.jpg',
    },
  ];

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
          <div ref={sliderRef} className="keen-slider">
            {destinations.map(({ key, image }, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white rounded-2xl  overflow-hidden"
              >
                <div className="w-full xl:h-[45rem] h-[30rem] relative hover:opacity-90 hover:shadow-2xl transition-all duration-300 ease-in-out">
                  <Image
                    src={image}
                    alt={t(`featuredDestinations.destinations.${key}.name`)}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-2xl md:text-3xl text-[#1c355e] font-bold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t(`featuredDestinations.destinations.${key}.name`)}
                  </h3>
                  <p className={`text-[#8b7866] text-xl md:text-2xl leading-relaxed mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t(`featuredDestinations.destinations.${key}.description`)}
                  </p>
                  <p className={`text-lg md:text-xl text-[#4e4e4e] font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('featuredDestinations.pricePrefix')} {t(`featuredDestinations.destinations.${key}.price`)}
                  </p>
                  <ul className={`text-lg md:text-xl text-[#6e6e6e] list-disc mb-4 ${isRTL ? 'list-inside text-right' : 'list-inside text-left'}`}>
                    {t(`featuredDestinations.destinations.${key}.includes`).map((item, i) => (
                      <li key={i} className={isRTL ? 'text-right' : 'text-left'}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-block bg-[#1c355e] text-white py-2 px-4 rounded-lg w-full text-center text-2xl hover:bg-[#8b7866] transition ${isRTL ? 'text-center' : 'text-center'}`}
                  >
                    {t('featuredDestinations.bookNowButton')}
                  </Link>
                </div>
              </div>
            ))}
          </div>

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

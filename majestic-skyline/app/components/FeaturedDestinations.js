'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeaturedDestinations() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
        '(min-width: 750px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 30 },
      },
    },
  });

  const destinations = [
    {
      name: 'Georgia for a weekend escape',
      image: '/destinations/georgia.jpg',
      description:
        'Escape to Tbilisi’s cozy cafés and colorful balconies, unwind in the sulfur baths, and sip world-class wine from ancient vineyards nestled in the Caucasus Mountains. A quick break that feels like a different world.',
    },
    {
      name: 'Thailand for food and beach lovers',
      image: '/destinations/thailand.jpg',
      description:
        'From the street markets of Bangkok to the golden shores of Phuket and Krabi, Thailand is a sensory feast. Enjoy spicy curries, scenic temples, lush jungles, and laid-back island vibes all in one trip.',
    },
    {
      name: 'Greece for laid-back elegance',
      image: '/destinations/greece.jpg',
      description:
        'Sail across the Aegean to discover Santorini sunsets, Athens’ ancient wonders, and hidden tavernas where time slows down. Greece balances history, flavor, and beauty like no other.',
    },
    {
      name: 'South Africa for wildlife',
      image: '/destinations/south-africa.jpg',
      description:
        'Journey into the heart of Africa on a real safari. Spot lions, elephants, and rhinos in Kruger National Park, tour Cape Town’s dramatic coastlines, and taste award-winning wines in Stellenbosch.',
    },
    {
      name: 'Iceland for natural drama',
      image: '/destinations/iceland.jpg',
      description:
        'Imagine walking between tectonic plates, bathing in blue geothermal waters, and watching the aurora dance above waterfalls and glaciers. Iceland is a raw, untouched masterpiece of nature.',
    },
  ];

  return (
    <section className="w-full py-20 bg-[#f9f7f4] text-start relative">
      <div className="mx-auto px-5">
        <h2 className="text-3xl md:text-4xl text-[#1c355e] font-bold mb-20 text-center">
          Featured Destinations
        </h2>

        {/* Carousel */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {destinations.map(({ name, image, description }, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white rounded-t-4xl overflow-hidden"
              >
                <div className="w-full 2xl:h-[45rem] h-[30rem] relative hover:opacity-80 transition-all duration-300 ease-in-out">
                  <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl text-[#1c355e] font-bold mb-2">
                    {name}
                  </h3>
                  <p className="text-[#8b7866] text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute top-1/2 left-[5] transform -translate-y-1/2 bg-white shadow-xl p-1 rounded-xl hover:bg-[#1c355e] hover:text-white transition z-10"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute top-1/2 right-[5] transform -translate-y-1/2 bg-white shadow-md p-1 rounded-xl hover:bg-[#1c355e] hover:text-white transition z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
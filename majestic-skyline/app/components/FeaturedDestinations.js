'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedDestinations() {
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
      name: 'Georgia for a weekend escape',
      image: '/destinations/georgia.jpg',
      description:
        'Explore charming cobblestone streets, mountain landscapes, and warm Georgian hospitality on a quick getaway.',
      price: 'From AED 1,999 / person',
      includes: ['Flights & Hotel', 'Daily Breakfast', 'Tbilisi City Tour'],
    },
    {
      name: 'Thailand for food and beach lovers',
      image: '/destinations/thailand.jpg',
      description:
        'Savor world-renowned street food, relax on tropical beaches, and dive into vibrant island life.',
      price: 'From AED 2,499 / person',
      includes: ['Roundtrip Flights', '4-Star Hotel', 'Phi Phi Island Tour'],
    },
    {
      name: 'Greece for laid-back elegance',
      image: '/destinations/greece.jpg',
      description:
        'Wander through whitewashed villages, discover ancient ruins, and unwind by the blue Aegean Sea.',
      price: 'From AED 3,299 / person',
      includes: ['Flight & Stay', 'Breakfast', 'Athens City Pass'],
    },
    {
      name: 'South Africa for wildlife',
      image: '/destinations/south-africa.jpg',
      description:
        'Embark on thrilling safaris, witness the Big Five, and experience diverse cultures and dramatic coastlines.',
      price: 'From AED 3,899 / person',
      includes: ['Safari Lodging', 'Meals Included', 'Cape Town Tour'],
    },
    {
      name: 'Iceland for natural drama',
      image: '/destinations/iceland.jpg',
      description:
        'Discover waterfalls, volcanoes, and northern lights in a land where nature truly takes center stage.',
      price: 'From AED 4,499 / person',
      includes: ['Flights & Hotel', 'Northern Lights Tour', 'Blue Lagoon Entry'],
    },
  ];

  return (
    <section className="w-full py-20 bg-[#f2f2f7] text-start relative">
      <div className="mx-auto px-5">
        <h2 className="text-4xl md:text-5xl text-[#1c355e] font-bold mb-5 text-center">
          Featured Destinations
        </h2>
        <p className="text-lg md:text-xl text-[#444] text-center mb-15 max-w-3xl mx-auto">
  Discover some of the most beautiful and unique travel destinations that will make your next getaway unforgettable. Whether you're looking for adventure, relaxation, or cultural experiences, our featured destinations offer something special for every type of traveler. Let us help you plan your dream vacation today!
</p>

        {/* Carousel */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {destinations.map(({ name, image, description, price, includes }, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white rounded-2xl  overflow-hidden"
              >
                <div className="w-full xl:h-[45rem] h-[30rem] relative hover:opacity-90 hover:shadow-2xl transition-all duration-300 ease-in-out">
                  <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl md:text-3xl text-[#1c355e] font-bold mb-2">
                    {name}
                  </h3>
                  <p className="text-[#8b7866] text-xl md:text-2xl leading-relaxed mb-3">
                    {description}
                  </p>
                  <p className="text-lg md:text-xl text-[#4e4e4e] font-semibold mb-2">{price}</p>
                  <ul className="text-lg md:text-xl text-[#6e6e6e] list-disc list-inside mb-4">
                    {includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#1c355e] text-white py-2 px-4 rounded-lg w-full text-center text-2xl hover:bg-[#8b7866] transition"
                  >
                    Book Now
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

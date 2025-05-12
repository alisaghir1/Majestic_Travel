'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight, Quote,Star  } from 'lucide-react';
import Image from 'next/image';

export default function TestimonialsSlider() {
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

  const testimonials = [
    {
      name: 'Emily R.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      message:
        'We have traveled a lot, but this was the first time it felt completely stress-free. The whole trip was smooth and well-organized.',
      profession: 'Travel Blogger',
      rating: 5,
      bio: 'Emily loves exploring off-the-beaten-path destinations and sharing her experiences with her large audience.',
      travelStyle: 'Adventure & Nature',
    },
    {
      name: 'Daniel M.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      message:
        'The itinerary was thoughtful and perfectly paced. We actually felt like we were on vacation, not rushing between stops!',
      profession: 'Photographer',
      rating: 4,
      bio: 'Daniel has traveled to over 30 countries, capturing moments and stories through his photography.',
      travelStyle: 'Photography & Culture',
    },
    {
      name: 'Sofia G.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      message:
        'Quick responses, real local tips, and a team that really listened to what we wanted. Cannot wait for our next trip!',
      profession: 'Content Creator',
      rating: 5,
      bio: 'Sofia is a content creator who shares her travel adventures and lifestyle through engaging videos and blog posts.',
      travelStyle: 'Luxury & Relaxation',
    },
  ];

  return (
    <section className="w-full py-24 bg-[#1c355e] text-white">
      <div className="container mx-auto px-6">
     <h2 className="text-4xl md:text-5xl text-[#f9f7f4] font-bold mb-4 text-start font-serif">
  What Our Travelers Say
</h2>
<p className="text-lg md:text-xl text-[#8b7866] mx-auto mb-12">
  Discover firsthand experiences from those who have traveled with us. Our travelers share their stories of unforgettable adventures and seamless journeys.
</p>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider hover:scale-105 transition-all duration-300">
            {testimonials.map(
              ({ name, image, message, profession, country, rating, bio, travelStyle }, index) => (
                <div
                  key={index}
                  className="keen-slider__slide bg-[#f9f7f4] text-[#1c355e] shadow-xl p-10 flex flex-col items-center justify-center gap-6 rounded-xl"
                >
                  <Quote className="text-[#8b7866] w-10 h-10" />
                  <p className="text-2xl leading-relaxed text-center italic max-w-2xl ">
                    “{message}”
                  </p>

                  <div className="flex items-center gap-4 mt-6 ">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <Image src={image} alt={name} width={100} height={100} />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-semibold">{name}</span>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-lg text-[#8b7866]">{profession}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(rating)].map((_, i) => (
                       <Star key={i} className="w-6 h-6" style={{ color: '#f9c72e' }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bio and Travel Style */}
                  <div className="mt-6 text-center">
                    <p className="text-lg text-[#8b7866] italic">&ldquo;{bio}&rdquo;</p>
                    <span className="text-md font-semibold mt-2 block text-[#1c355e]">{`Travel Style: ${travelStyle}`}</span>
                  </div>
                </div>
              )
            )}
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

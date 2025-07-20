'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function BlogCarousel() {
const [sliderRef, slider] = useKeenSlider({
  loop: true,
  slides: {
    perView: 3, // Default for large screens
    spacing: 20,
  },
  breakpoints: {
    '(max-width: 1340px)': {
      slides: {
        perView: 2, // 2 slides per view on tablets
        spacing: 15, // Adjust spacing for tablets
      },
    },
    '(max-width: 800px)': {
      slides: {
        perView: 1, // 1 slide per view on mobile devices
        spacing: 10, // Adjust spacing for mobile devices
      },
    },
  },
});

  const { language, t, isRTL } = useLanguage();

  const blogPosts = [
    {
      titleKey: "baliVsMaldivesTitle",
      subtitleKey: "baliVsMaldivesSubtitle", 
      contentKey: "baliVsMaldivesContent",
      image: "/destinations/bali.jpg",
      date: "April 15, 2025",
      slug: "bali-vs-maldives-which-is-better",
    },
    {
      titleKey: "hiddenGemsTitle",
      subtitleKey: "hiddenGemsSubtitle",
      contentKey: "hiddenGemsContent",
      image: "/blogs/hidden-gems.jpeg",
      date: "March 25, 2025",
      slug: "hidden-gems-near-dubai",
    },
    {
      titleKey: "visaFreeTitle",
      subtitleKey: "visaFreeSubtitle",
      contentKey: "visaFreeContent",
      image: "/destinations/dubai.jpg",
      date: "January 9, 2025",
      slug: "top-10-visa-free-travel-destinations",
    },
    {
      titleKey: "summerTravelTitle",
      subtitleKey: "summerTravelSubtitle",
      contentKey: "summerTravelContent",
      image: "/blogs/summer.jpg",
      date: "February 12, 2025",
      slug: "where-to-travel-in-summer",
    },
    {
      titleKey: "georgiaTitle",
      subtitleKey: "georgiaSubtitle", 
      contentKey: "georgiaContent",
      image: "/destinations/georgia.jpg",
      date: "February 12, 2025",
      slug: "why-georgia-remains-a-favorite-for-uae-travelers",
    },
    {
      titleKey: "mistakesTitle",
      subtitleKey: "mistakesSubtitle",
      contentKey: "mistakesContent",
      image: "/blogs/mistakes.jpg",
      date: "February 25, 2025",
      slug: "common-mistakes-travelers-from-the-uae-make",
    },
    {
      titleKey: "groupTourTitle",
      subtitleKey: "groupTourSubtitle",
      contentKey: "groupTourContent",
      image: "/blogs/group-tour.jpeg",
      date: "April 2, 2025",
      slug: "how-to-choose-between-a-group-tour-and-a-private-itinerary",
    },
    {
      titleKey: "perfectTripTitle",
      subtitleKey: "perfectTripSubtitle",
      contentKey: "perfectTripContent",
      image: "/blogs/the-perfect-plan.jpg",
      date: "February 15, 2025",
      slug: "how-to-plan-a-perfect-trip-abroad-without-stress",
    },
    {
      titleKey: "checklistTitle",
      subtitleKey: "checklistSubtitle",
      contentKey: "checklistContent",
      image: "/blogs/travel-checklist.jpg",
      date: "June 3, 2025",
      slug: "what-to-prepare-before-flying-out-from-dubai",
    },
    {
      titleKey: "insuranceTitle",
      subtitleKey: "insuranceSubtitle",
      contentKey: "insuranceContent",
      image: "/blogs/insurance.jpg",
      date: "january 24, 2025",
      slug: "travel-insurance-101-why-it-matters-for-every-trip",
    },
  ];

  return (
    <section className="w-full pb-12 pt-60 bg-[#f2f2f7] text-white">
      <div className="xl:px-20 mx-auto px-5">
        <h2 className={`text-4xl md:text-5xl text-[#1c355e] font-bold mb-4 font-serif ${
          isRTL ? 'text-right' : 'text-left'
        }`}>
          {t('blogPage.blogTitle')}
        </h2>
        <p className={`text-lg md:text-xl text-[#8b7866] mx-auto mb-12 ${
          isRTL ? 'text-right' : 'text-left'
        }`}>
          {t('blogPage.blogSubtitle')}
        </p>

        {/* Carousel always LTR */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider ">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className={`keen-slider__slide bg-white text-[#1c355e] p-6 flex flex-col items-center justify-center gap-6 rounded-xl ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                >
                  <div className="w-full xl:h-[45rem] h-[30rem] object-cover relative rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={t(`blogPage.${post.titleKey}`)}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className={`text-2xl font-semibold text-[#1c355e] mt-4 ${
                    isRTL ? 'text-right' : 'text-center'
                  }`}>
                    {t(`blogPage.${post.titleKey}`)}
                  </h3>
                  <p className={`text-sm text-[#8b7866] mb-5 ${
                    isRTL ? 'text-right' : 'text-center'
                  }`}>
                    {t(`blogPage.${post.subtitleKey}`)}
                  </p>
                  <p className={`text-[#8b7866] text-base mb-4 ${
                    isRTL ? 'text-right' : 'text-center'
                  }`}>
                    {t(`blogPage.${post.contentKey}`).slice(0, 100)}...
                  </p>
                  <div className={`flex justify-between items-center text-[#8b7866] w-full ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}>
                    <span className="text-sm">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#1c355e] hover:text-[#8b7866] transition duration-300"
                    >
                      {t('blogPage.readMore')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => slider.current?.prev()}
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white text-[#1c355e] cursor-pointer p-2 rounded-full hover:bg-[#1c355e] hover:text-[#8b7866] hover:scale-110 border border-white transition z-10"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => slider.current?.next()}
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white text-[#1c355e] cursor-pointer p-2 rounded-full hover:bg-[#1c355e] hover:text-[#8b7866] hover:scale-110 border border-white transition z-10"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
  );
}

'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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

  const blogPosts = [
    {
      title: "Bali vs Maldives_ Which Destination Is Better for Your Honeymoon",
      subtitle: "Bali and the Maldives. Both offer beauty, peace, and romance, but they deliver very different experiences",
      image: "/destinations/bali.jpg",
      content:
        "Majestic Skyline helps newlyweds choose the best destination for their honeymoon based on budget, travel style, and expectations. This guide compares Bali and the Maldives to help you make the right choice for your perfect escape.",
      date: "April 15, 2025",
      slug: "bali-vs-maldives-which-is-better",
    },
    {
      title: "Hidden Gems Near Dubai for a Long Weekend Escape",
      subtitle: "Dubai offers world-class experiences, but sometimes, a short break outside the city is all you need to reset.",
      image: "/blogs/hidden-gems.jpeg",
      content:
        "Majestic Skyline helps Dubai-based travelers discover lesser-known places that are easy to reach, yet full of character. Below is a curated list of hidden gems near Dubai that can be explored in three to four days.",
      date: "March 25, 2025",
      slug: "hidden-gems-near-dubai",
    },
    {
      title: "Top 10 Visa-Free Travel Destinations for UAE Residents in 2025",
      subtitle: "Traveling from the UAE has never been easier. In 2025, UAE passport holders and residents have access to several stunning destinations without the need for a visa in advance. ",
      image: "/blogs/summer.jpg",
      content:
        "Majestic Skyline, based in Dubai, helps travelers discover exciting places that don’t require complex visa applications. Below is a curated list of the top 10 visa-free travel destinations for UAE citizens and residents in 2025—complete with reasons to go, ideal travel seasons, and what to expect.",
      date: "January 9, 2025",
      slug: "top-10-visa-free-travel-destinations",
    },
        {
      title: "Where to Travel in Summer 2025 to Escape the Dubai Heat",
      subtitle: "Dubai summers can be intense. When temperatures rise, many residents start looking for cooler places to relax.",
      image: "/destinations/dubai.jpg",
      content:
        "destinations offer fresh air, scenic views, and ideal weather. Majestic Skyline, a Dubai-based travel agency, recommends carefully selected spots that remain pleasant during the hottest months in the UAE. These destinations are known for cooler climates, natural landscapes, and great accessibility from Dubai.",
      date: "February 12, 2025",
      slug: "where-to-travel-in-summer",
    },
        {
      title: "Why Georgia Remains a Favorite for UAE Travelers",
      subtitle: "Georgia continues to be one of the most visited destinations among UAE residents.",
      image: "/destinations/georgia.jpg",
      content:
        "Travelers from the UAE seek cooler weather, rich history, and unique food experiences. Georgia checks all the boxes. This blog explores why Georgia is still the go-to place for travelers in Dubai and across the UAE in 2025.",
      date: "February 12, 2025",
      slug: "why-georgia-remains-a-favorite-for-uae-travelers",
    },
        {
      title: "5 Common Mistakes Travelers from the UAE Make (and How to Avoid Them)",
      subtitle: ". As a Dubai-based travel agency, Majestic Skyline has seen patterns among frequent travelers, especially those flying from the UAE. This guide highlights the top five mistakes and practical ways to avoid them.",
      image: "/blogs/mistakes.jpg",
      content:
        "Majestic Skyline, based in Dubai, helps travelers discover exciting places that don’t require complex visa applications. Below is a curated list of the top 10 visa-free travel destinations for UAE citizens and residents in 2025—complete with reasons to go, ideal travel seasons, and what to expect.",
      date: "February 25, 2025",
      slug: "common-mistakes-travelers-from-the-uae-make",
    },
          {
      title: "How to Choose Between a Group Tour and a Private Itinerary",
      subtitle: "Traveling brings excitement, but planning the trip can be overwhelming.",
      image: "/blogs/group-tour.jpeg",
      content:
        " At Majestic Skyline, a Dubai-based travel agency, we help travelers from the UAE make smarter decisions based on their preferences and needs.This guide explains the differences, benefits, and potential drawbacks of both. You’ll also find helpful tips to decide what fits your travel goals.",
      date: "April 2, 2025",
      slug: "how-to-choose-between-a-group-tour-and-a-private-itinerary",
    },
          {
      title: "How to Plan a Perfect Trip Abroad Without Stress",
      subtitle: "raveling abroad should bring excitement, not pressure. Whether you’re exploring a new culture, celebrating a milestone, or taking a break from your routine, preparation makes the difference.",
      image: "/blogs/the-perfect-plan.jpg",
      content:
        "Majestic Skyline helps UAE residents plan international trips without hassle. The key is knowing what steps matter, what can go wrong, and how to stay one step ahead. This guide breaks down each part of the planning process into clear, manageable steps—so you can focus on the experience, not the stress.",
      date: "February 15, 2025",
      slug: "how-to-plan-a-perfect-trip-abroad-without-stress",
    },
          {
      title: "Travel Checklist: What to Prepare Before Flying Out from Dubai",
      subtitle: "Getting ready for an international trip from Dubai involves more than just booking a flight. ",
      image: "/blogs/travel-checklist.jpg",
      content:
        "Majestic Skyline, based in Dubai, helps travelers stay organized with clear, reliable guidance. This checklist covers everything you need before heading to the airport—whether it’s your first trip or your tenth.",
      date: "June 3, 2025",
      slug: "what-to-prepare-before-flying-out-from-dubai",
    },
          {
      title: "Travel Insurance 101: Why It Matters for Every Trip",
      subtitle: "Travel brings joy, excitement, and unforgettable experiences. But unexpected events can turn a dream trip into a stressful memory.",
      image: "/blogs/insurance.jpg",
      content:
        "hat’s where travel insurance comes in. Whether flying from Dubai for business or leisure, having protection in place is a smart move. At Majestic Skyline, we see many travelers overlook this step. This guide explains why travel insurance is essential, what it covers, and how to choose the right plan for every journey.",
      date: "january 24, 2025",
      slug: "travel-insurance-101-why-it-matters-for-every-trip",
    },
    
  ];

  return (
    <section className="w-full pb-12 pt-60 bg-[#f2f2f7] text-white">
      <div className="xl:px-20 mx-auto px-5">
        <h2 className="text-4xl md:text-5xl text-[#1c355e] font-bold mb-4 text-start font-serif">
          Our Blog
        </h2>
        <p className="text-lg md:text-xl text-[#8b7866] mx-auto mb-12">
          Get inspired by our latest blog posts to fuel your next adventure.
        </p>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider ">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="keen-slider__slide  bg-white text-[#1c355e]  p-6 flex flex-col items-center justify-center gap-6 rounded-xl"
              >
                <div className="w-full  xl:h[45rem] h-[30rem] object-cover relative rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-[#1c355e] mt-4">{post.title}</h3>
                <p className="text-sm text-[#8b7866] mb-5">{post.subtitle}</p>
                <p className="text-[#8b7866] text-base mb-4">{post.content.slice(0, 100)}...</p>
                <div className="flex justify-between items-center text-[#8b7866]">
                  <span className="text-sm">{post.date}</span>
                </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#1c355e] hover:text-[#8b7866] transition duration-300"
                  >
                    Read More
                  </Link>
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

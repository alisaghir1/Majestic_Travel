"use client";
import { Plane, BedDouble, Heart, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HoneymoonsAndRomanticGetaways() {
  return (
    <div className="pt-60 pb-24 bg-[#f2f2f7] mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/honeymoon.jpg"
          alt="Honeymoons & Romantic Getaways"
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Honeymoons & Romantic Getaways from Dubai
          </h1>
        </div>
      </div>

      {/* Full Content Section */}
      <section className="space-y-8 container mx-auto px-5 mb-20 text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-[#1c355e]">
          Personalized Honeymoon and Couples Travel Planning from Dubai
        </h2>
        <p>
          Majestic Skyline offers custom honeymoon planning and romantic travel experiences for couples in Dubai looking to celebrate love, connection, and new beginnings. Whether you're newly married or simply taking time to reconnect, we design intimate trips that reflect your style, pace, and dreams. From tropical islands to scenic cities and private resorts, every itinerary is created with care.
        </p>
        <p>
          Our Dubai-based travel agency specializes in organizing seamless and meaningful escapes for couples. Whether you’re planning your post-wedding getaway, anniversary trip, or a surprise vacation for two, we help you create memories that last a lifetime—without stress or hassle.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Why Couples in Dubai Choose Majestic Skyline
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Custom romantic packages tailored to each couple’s style and budget</strong></li>
          <li><strong>Dedicated travel planner to handle all bookings and requests</strong></li>
          <li><strong>Wide selection of destinations with private and scenic stays</strong></li>
          <li><strong>Visa and travel support for honeymoon destinations</strong></li>
          <li><strong>24/7 assistance during your trip for peace of mind</strong></li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Custom Honeymoon Packages
        </h3>
        <p>
          No couple is the same—and no honeymoon should be either. We build your itinerary based on personal preferences: relaxed or adventurous, urban or tropical, budget-conscious or luxury-focused. Our team recommends destinations that match your dates, weather preferences, and travel history.
        </p>

        <h4 className="text-xl font-semibold text-[#1c355e]">
          Tropical Island Getaways
        </h4>
        <p>
          Popular honeymoon locations include the Maldives, Seychelles, Zanzibar, Bali, and Mauritius. These destinations offer beachside resorts, stunning sunsets, and privacy for couples who want to relax and unwind together.
        </p>

        <h4 className="text-xl font-semibold text-[#1c355e]">
          Cultural Honeymoons
        </h4>
        <p>
          For couples who love history and art, we plan romantic trips to cities like Florence, Kyoto, Istanbul, or Prague. These locations offer charming streets, rich traditions, and cozy hotels in beautiful settings.
        </p>

        <h4 className="text-xl font-semibold text-[#1c355e]">
          Mountain & Nature Retreats
        </h4>
        <p>
          Some couples prefer cool mountain air and scenic views. We offer packages to places like Cappadocia, the Swiss Alps, Ubud, or the Dolomites. These trips often include nature walks, spa experiences, and local adventure activities.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Private Experiences for Couples
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Secluded Stays:</strong> Romantic accommodations selected for privacy and atmosphere.</li>
          <li><strong>Sunset Cruises and Scenic Tours:</strong> Private boat rides, hot air balloons, and scenic drives.</li>
          <li><strong>Couples Spa and Wellness Packages:</strong> Wellness activities like couple’s massages and spa treatments.</li>
          <li><strong>Custom Celebrations:</strong> Personalized room decor, gifts, and surprise celebrations.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Romantic Travel for Every Budget
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Affordable Honeymoons:</strong> Beautiful, budget-friendly options in Georgia, Sri Lanka, Thailand, and Turkey.</li>
          <li><strong>Luxury Romantic Escapes:</strong> Private transfers, upgraded suites, and exclusive excursions.</li>
          <li><strong>Eco-Friendly Romance:</strong> Sustainable travel options like eco-resorts and community-based lodges.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Visa & Travel Support for Honeymooners
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Couples Visa Assistance:</strong> Help with visa applications, documents, and embassy requirements.</li>
          <li><strong>Travel Insurance Options:</strong> Travel insurance to cover medical, baggage, and trip delays.</li>
          <li><strong>Flight and Seating Arrangements:</strong> Special arrangements for couples’ seating and upgrades.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Honeymoon & Romantic Travel Inspiration
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Maldives:</strong> Overwater villas, white sand beaches, private snorkeling excursions.</li>
          <li><strong>Santorini:</strong> Cliffside views, charming local villages, sunset moments.</li>
          <li><strong>Kyoto:</strong> Historic shrines, peaceful gardens, authentic Japanese hospitality.</li>
          <li><strong>Cappadocia:</strong> Hot air balloon rides, cave hotels, scenic landscapes.</li>
          <li><strong>Bali:</strong> Jungle resorts, rice terraces, couples yoga retreats.</li>
          <li><strong>Georgia (Tbilisi & Kazbegi):</strong> Cozy mountain stays, cobblestone streets, local charm.</li>
          <li><strong>Paris:</strong> Classic romance, iconic landmarks, riverside walks.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {[
            {
              q: "How early should we book our honeymoon?",
              a: "Ideally, 2 to 6 months before your travel date, especially for peak seasons. This allows time for visa preparation and preferred room availability.",
            },
            {
              q: "Do you offer package deals with flights and hotels?",
              a: "Yes. Our packages are built to include flights, hotels, transfers, and activities. You can add or remove items as needed.",
            },
            {
              q: "Can you plan surprise honeymoons or proposal trips?",
              a: "Absolutely. We’ve helped many clients organize surprise trips, proposals abroad, and secret romantic getaways.",
            },
            {
              q: "Do you offer trips inside the UAE for couples?",
              a: "Yes. For couples preferring staycations, we arrange romantic getaways in Ras Al Khaimah, Fujairah, Abu Dhabi, and the Dubai desert.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group p-5 border border-gray-300 rounded-lg transition-all duration-300 "
            >
              <summary className="cursor-pointer font-medium text-[#1c355e] text-lg group-open:mb-2 transition-all duration-300">
                {faq.q}
              </summary>
              <p className="text-[#8b7866] opacity-0 group-open:opacity-100 transition-opacity duration-500">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center container mx-auto px-5 max-w-2xl">
        <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
          Celebrate Love with Thoughtful Planning
        </h4>
        <p className="mb-6 text-[#8b7866]">
          Majestic Skyline turns romantic travel into something special. Whether you're newly married or just planning a quiet trip for two, our Dubai-based team is here to listen, plan, and deliver a beautiful experience made just for you.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white py-3 px-6 rounded-full text-lg font-semibold transition-colors duration-300 ease-in-out"
        >
          Start Planning Your Honeymoon.
        </Link>
      </div>
    </div>
  );
}

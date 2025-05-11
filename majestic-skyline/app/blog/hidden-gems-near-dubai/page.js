'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HiddenGemsNearDubai = () => {
  return (
    <section className="bg-[#f2f2f7] text-[#1c355e] pt-32 pb-20">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] mb-16">
        <Image
          src="/blogs/hidden-gems.jpeg"
          alt="Hidden Gems Near Dubai"
          layout="fill"
          objectFit="cover"
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-serif max-w-4xl leading-tight drop-shadow-md">
            Hidden Gems Near Dubai for a Long Weekend Escape
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 xl:px-32 space-y-12 mx-auto text-lg leading-relaxed">
        <p className="xl:text-2xl text-xl">
          Dubai offers world-class experiences, but sometimes, a short break outside the city is all you need to reset. Fortunately, there are many hidden gems just a few hours from Dubai that are ideal for a long weekend escape.
        </p>
        <p className="xl:text-2xl text-xl">
          These destinations offer nature, history, and culture—without long-haul flights or busy airports. Whether you’re traveling solo, with family, or as a couple, these short-haul options are perfect for a quick recharge.
        </p>
        <p className="xl:text-2xl text-xl">
          Majestic Skyline helps Dubai-based travelers discover lesser-known places that are easy to reach, yet full of character. Below is a curated list of hidden gems near Dubai that can be explored in three to four days.
        </p>

        {/* Sections for Each Destination */}
        {[
          {
            title: '1. Jebel Akhdar, Oman',
            details: [
              'Distance from Dubai: ~6 hours by road',
              'Type of Destination: Mountain retreat',
              'Overview: Known for cool weather and terraced farms, this peaceful mountain destination in Oman offers scenic views and serenity.',
              'Top Experiences:',
              [
                'Walk through ancient villages carved into cliffs',
                'Explore rose plantations during spring bloom',
                'Hike the Wadi Bani Habib trail for mountain views',
              ],
              'Best Time to Visit: October to April',
              'Travel Tips: 4WD vehicles are required to enter. Majestic Skyline arranges transfers and accommodation in advance.',
            ],
          },
          {
            title: '2. Khasab, Oman',
            details: [
              'Distance from Dubai: ~3.5 hours by road',
              'Type of Destination: Coastal and cultural',
              'Overview: A part of Oman’s Musandam Peninsula, known for dramatic fjords and clear waters—ideal for nature without flying.',
              'Top Experiences:',
              [
                'Join a dhow cruise through Musandam fjords',
                'Spot dolphins in their natural habitat',
                'Visit the 17th-century Khasab Castle',
              ],
              'Best Time to Visit: October to March',
              'Travel Tips: Bring your passport—even for land crossings. UAE residents are eligible for simplified entry.',
            ],
          },
          {
            title: '3. AlUla, Saudi Arabia',
            details: [
              'Distance from Dubai: ~3 hours by flight',
              'Type of Destination: Desert history and archaeology',
              'Overview: Featuring ancient tombs and sandstone cliffs, AlUla is ideal for history lovers and photographers.',
              'Top Experiences:',
              [
                'Explore Hegra, a UNESCO World Heritage Site',
                'Visit Maraya, the world’s largest mirrored structure',
                'Enjoy desert stargazing or a heritage village tour',
              ],
              'Best Time to Visit: October to March',
              'Travel Tips: Direct flights and e-visa services make this destination easy for UAE travelers.',
            ],
          },
          {
            title: '4. Nizwa, Oman',
            details: [
              'Distance from Dubai: ~5 hours by road',
              'Type of Destination: Cultural and historical',
              'Overview: A cultural hub with forts, markets, and palm valleys—ideal for a peaceful and authentic escape.',
              'Top Experiences:',
              [
                'Explore Nizwa Fort and climb the tower',
                'Wander the souq and sample local dates',
                'Visit nearby Jabreen Castle or Bahla Fort',
              ],
              'Best Time to Visit: November to March',
              'Travel Tips: Pairs well with Jebel Akhdar or Jebel Shams for a longer loop.',
            ],
          },
          {
            title: '5. Sohar, Oman',
            details: [
              'Distance from Dubai: ~3 hours by road',
              'Type of Destination: Coastal and historical',
              'Overview: A relaxed port town with clean beaches, forts, and a peaceful atmosphere.',
              'Top Experiences:',
              [
                'Relax at the beach or in resort pools',
                'Explore Sohar Fort and its museum',
                'Try Omani seafood dishes at local restaurants',
              ],
              'Best Time to Visit: November to April',
              'Travel Tips: Can be combined with other parts of northern Oman in a weekend loop.',
            ],
          },
          {
            title: '6. Hatta, UAE',
            details: [
              'Distance from Dubai: ~1.5 hours by road',
              'Type of Destination: Nature and adventure',
              'Overview: Nestled in the Hajar Mountains, perfect for kayaking, hiking, and glamping.',
              'Top Experiences:',
              [
                'Kayak at Hatta Dam',
                'Bike or hike mountain trails',
                'Stay in a dome tent or mountain lodge',
              ],
              'Best Time to Visit: October to March',
              'Travel Tips: Day trips are popular, but overnight stays offer a fuller experience.',
            ],
          },
          {
            title: '7. Ras Al Khaimah, UAE',
            details: [
              'Distance from Dubai: ~1.5 hours by road',
              'Type of Destination: Mountain, beach, and relaxation',
              'Overview: Offers a blend of beach resorts and mountain adventures, including the UAE’s highest peak.',
              'Top Experiences:',
              [
                'Ride the world’s longest zipline at Jebel Jais',
                'Relax at beachfront resorts',
                'Camp under the stars in desert or mountains',
              ],
              'Best Time to Visit: October to April',
              'Travel Tips: Great for both luxury and adventure seekers on a short drive from Dubai.',
            ],
          },
        ].map((section, index) => (
          <div key={index} className="xl:text-xl text-lg">
            <h2 className="xl:text-4xl text-3xl font-bold mb-10">{section.title}</h2>
            {section.details.map((item, idx) =>
              Array.isArray(item) ? (
                <ul key={idx} className="list-disc list-inside mt-2">
                  {item.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p key={idx}>{item}</p>
              )
            )}
          </div>
        ))}

        {/* Final CTA */}
        <div className="mt-40 xl:text-xl text:lg pt-10 text-center w-full border-t-2">
          <p className="text-2xl font-medium mb-4">
            Escape the Ordinary. Discover the Unexpected.
          </p>
          <p className="mb-6">
            Majestic Skyline curates weekend adventures that are close to Dubai, yet feel like a whole world away.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1c355e] text-white px-6 py-3 rounded-md hover:bg-[#2c466f] transition"
          >
            Start Planning Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HiddenGemsNearDubai;

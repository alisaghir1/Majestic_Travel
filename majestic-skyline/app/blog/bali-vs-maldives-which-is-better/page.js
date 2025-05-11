'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BaliVsMaldives = () => {
  return (
    <section className="bg-[#f2f2f7] text-[#1c355e] pt-32 pb-20">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] mb-16">
        <Image
          src="/destinations/bali.jpg"
          alt="Bali vs Maldives Honeymoon"
          layout="fill"
          objectFit="cover"
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-serif max-w-4xl leading-tight drop-shadow-md">
            Bali vs Maldives: Which Destination Is Better for Your Honeymoon?
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 xl:px-32 space-y-12   mx-auto text-lg leading-relaxed">
        <p className='xl:text-2xl text-xl'>
          Planning a honeymoon is one of the most exciting parts of starting a new life together. For couples in Dubai, two destinations often come to mind—Bali and the Maldives. Both offer beauty, peace, and romance, but they deliver very different experiences.
        </p>
        <p className='xl:text-2xl text-xl'>
          Majestic Skyline helps newlyweds choose the best destination for their honeymoon based on budget, travel style, and expectations. This guide compares Bali and the Maldives to help you make the right choice for your perfect escape.
        </p>

        {/* Section 1 */}
        <div className='xl:text-xl text-lg'>
          <h2 className="xl:text-4xl text-3xl font-bold mb-10">1. Location and Accessibility from Dubai</h2>
          <p><strong>Bali:</strong> Located in Indonesia, in Southeast Asia. The flight from Dubai takes around nine hours, often with a short layover depending on the airline.</p>
          <p><strong>Entry Requirements:</strong> UAE citizens can enter Bali visa-free. Residents can apply for a visa on arrival.</p>
          <p><strong>Time Difference:</strong> Bali is four hours ahead of Dubai (GMT+8).</p>
          <p><strong>Maldives:</strong> The Maldives is a chain of islands in the Indian Ocean. Flights from Dubai take around four and a half hours, usually direct.</p>
          <p><strong>Entry Requirements:</strong> Visa on arrival is available for both UAE citizens and residents.</p>
          <p><strong>Time Difference:</strong> The Maldives is one hour ahead of Dubai (GMT+5).</p>
          <p><strong>Summary:</strong> Maldives is easier to reach for a short honeymoon. Bali requires more travel time but offers a longer adventure feel.</p>
        </div>

        {/* Section 2 */}
        <div className='xl:text-xl text-lg'>
          <h2 className="xl:text-4xl text-3xl font-bold mb-10">2. Scenery and Atmosphere</h2>
          <p><strong>Bali:</strong> Features volcanoes, rice terraces, rainforests, and beaches. The landscape varies across the island, ideal for couples who enjoy both land and sea.</p>
          <p><strong>Atmosphere:</strong> Spiritual, artistic, and vibrant. Ubud offers jungle views and yoga; Seminyak and Canggu provide a lively beach scene.</p>
          <p><strong>Maldives:</strong> Over 1,000 islands with white sands and turquoise water. Each resort is on its own private island.</p>
          <p><strong>Atmosphere:</strong> Calm, intimate, and private. Perfect for disconnecting from the world.</p>
          <p><strong>Summary:</strong> Bali is more diverse and lively. Maldives is more exclusive and serene.</p>
        </div>

        {/* Section 3 */}
        <div className='xl:text-xl text-lg'>
          <h2 className="xl:text-4xl text-3xl font-bold mb-10">3. Accommodation Options</h2>
          <p><strong>Bali:</strong> From budget villas to luxury resorts. Jungle-view villas with private pools and boutique hotels near rice fields are common.</p>
          <p><strong>Variety:</strong> Mix of city, beach, and countryside stays in one trip.</p>
          <p><strong>Maldives:</strong> Famous for overwater villas and beachfront suites. Most resorts are five-star and all-inclusive.</p>
          <p><strong>Variety:</strong> One experience per resort. Changing islands requires boat or seaplane transfers.</p>
          <p><strong>Summary:</strong> Bali offers more variety and flexibility. Maldives is a one-resort escape.</p>
        </div>

        {/* Section 4 */}
        <div className='xl:text-xl text-lg'>
          <h2 className="xl:text-4xl text-3xl font-bold mb-10">4. Honeymoon Activities</h2>
          <p><strong>Bali:</strong> Cultural experiences, nature treks, yoga, spas, temples, cooking classes.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Visit Uluwatu Temple at sunset</li>
            <li>Swing above rice fields in Tegallalang</li>
            <li>Spa treatments in the jungle</li>
            <li>Beach clubs in Seminyak</li>
          </ul>
          <p className="mt-2"><strong>Maldives:</strong> Water-based relaxation: snorkeling, kayaking, sunset cruises.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Snorkel in coral reefs</li>
            <li>Candlelit dinners on the beach</li>
            <li>Seaplane tours</li>
            <li>Ocean-view spa relaxation</li>
          </ul>
          <p><strong>Summary:</strong> Bali is for active couples; Maldives for peaceful luxury seekers.</p>
        </div>

        {/* Section 5 */}
        <div className='xl:text-xl text-lg'>
          <h2 className="xl:text-4xl text-3xl font-bold mb-10">5. Weather and Best Time to Travel</h2>
          <p><strong>Bali:</strong> Best from April to October (dry season). Sunny, low humidity, occasional short rains.</p>
          <p><strong>Maldives:</strong> Best from November to April. Calm seas and mostly clear skies.</p>
          <p><strong>Summary:</strong> Bali is ideal in summer. Maldives is perfect during Dubai’s winter season.</p>
        </div>

        {/* Section 6 */}
        <div className='xl:text-xl text-lg'>
          <h2 className="xl:text-4xl text-3xl font-bold mb-10">6. Cost and Budget Flexibility</h2>
          <p><strong>Bali:</strong> Budget-friendly with luxury available. Average mid-range daily spend: AED 400–800 per couple.</p>
          <p><strong>Maldives:</strong> More expensive due to private island logistics. AED 1,500–3,000 per couple per day.</p>
          <p><strong>Summary:</strong> Bali offers flexibility. Maldives provides exclusive luxury.</p>
        </div>

        {/* Section 7 */}
        <div className='xl:text-xl text-lg'>
          <h2 className="xl:text-4xl text-3xl font-bold mb-10">7. Food and Dining</h2>
          <p><strong>Bali:</strong> Local dishes, street food, vegetarian options, and global cuisine.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Balinese nasi campur</li>
            <li>Seafood grills on the beach</li>
            <li>Trendy cafés in Canggu and Ubud</li>
          </ul>
          <p className="mt-2"><strong>Maldives:</strong> Full-board resorts with international fine dining.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Fresh ocean catch</li>
            <li>Overwater dining</li>
            <li>Sunset meals on the sand</li>
          </ul>
          <p><strong>Summary:</strong> Bali offers more food variety. Maldives focuses on luxury dining.</p>
        </div>

        {/* Section 8 */}
        <div className='xl:text-xl text-lg'>
          <h2 className="xl:text-4xl text-3xl font-bold mb-10">8. Privacy and Romance</h2>
          <p><strong>Bali:</strong> Private villas offer intimacy, but popular sites can get crowded.</p>
          <p><strong>Maldives:</strong> Total seclusion with adult-only zones, butlers, and in-room luxury.</p>
          <p><strong>Summary:</strong> Maldives ensures consistent privacy. Bali is romantic with more activity.</p>
        </div>

        {/* Section 9 */}
        <div className='xl:text-xl text-lg'>
          <h2 className="xl:text-4xl text-3xl font-bold mb-10">9. Which One Is Right for You?</h2>
          <p><strong>Choose Bali if:</strong></p>
          <ul className="list-disc list-inside mt-2">
            <li>You want a mix of culture, nature, and beach</li>
            <li>You enjoy exploring and activities</li>
            <li>You’re on a moderate honeymoon budget</li>
            <li>You want variety in your trip</li>
            <li>You’re traveling in summer</li>
          </ul>
          <p className="mt-4"><strong>Choose Maldives if:</strong></p>
          <ul className="list-disc list-inside mt-2">
            <li>You want quiet privacy and luxury</li>
            <li>You love ocean views</li>
            <li>You want one resort without moving</li>
            <li>You have a higher budget</li>
            <li>You’re traveling between November–April</li>
          </ul>
        </div>

        {/* Section 10 */}
        <div className='xl:text-xl text-lg mb-20 flex flex-col gap-5'>
          <h2 className="xl:text-4xl text-3xl font-bold mb-10">10. Frequently Asked Questions</h2>
          <p><strong>Can we combine both in one trip?</strong> Yes. Majestic Skyline arranges multi-stop honeymoons with connecting flights.</p>
          <p><strong>Is Bali safe for honeymooners?</strong> Yes, it’s very honeymoon-friendly. Follow local customs and travel guidelines.</p>
          <p><strong>Do we need travel insurance?</strong> Yes, we recommend it for delays, medical needs, or changes.</p>
          <p><strong>Which destination is easier for UAE residents?</strong> Maldives is closer; Bali offers more variety.</p>
        </div>

        {/* Final CTA */}
        <div className="mt-40 xl:text-xl text:lg pt-10 text-center w-full border-t-2">
          <p className="text-xl font-medium mb-4">
            Let Your Honeymoon Reflect Who You Are.
          </p>
          <p className="mb-6">
            Whether you choose variety and culture or calm and luxury, Majestic Skyline makes it simple, special, and stress-free.
          </p>
          <Link
            href="/contact" // or "#contact"
            className="inline-block bg-[#1c355e] text-white px-6 py-3 rounded-md hover:bg-[#2c466f] transition"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BaliVsMaldives;

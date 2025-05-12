"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopVisaFreeDestinations2025 = () => {
  return (
    <section className="bg-[#f2f2f7] text-[#1c355e] pt-32 pb-20">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] mb-16">
        <Image
          src="/destinations/dubai.jpg"
          alt="Visa-Free Travel Destinations for UAE Residents"
          layout="fill"
          objectFit="cover"
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-serif max-w-4xl leading-tight drop-shadow-md">
            Top 10 Visa-Free Travel Destinations for UAE Residents in 2025
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 xl:px-32 space-y-12 mx-auto text-lg leading-relaxed">
        <p className="xl:text-2xl text-xl">
          Traveling from the UAE has never been easier. In 2025, UAE passport
          holders and residents have access to several stunning destinations
          without the need for a visa in advance. Whether you&#39;re planning a
          quick getaway, a family trip, or a romantic escape, visa-free
          destinations help save time, reduce paperwork, and make spontaneous
          travel possible.
        </p>
        <p className="xl:text-2xl text-xl">
          Majestic Skyline, based in Dubai, helps travelers discover exciting
          places that don&#39;t require complex visa applications. Below is a
          curated list of the top 10 visa-free travel destinations for UAE
          citizens and residents in 2025—complete with reasons to go, ideal
          travel seasons, and what to expect.
        </p>

        {/* Destination Sections */}
        {[
          {
            title: "1. Georgia",
            details: [
              "Distance from Dubai: ~3 hours",
              "Visa Policy: Visa-free for UAE residents and citizens (up to 90 days)",
              "Why Go: Scenic mountains, historic towns, and affordable prices—ideal for short trips or extended holidays.",
              "Top Places to Visit:",
              [
                "Tbilisi: Cobblestone streets, sulfur baths, and cafes",
                "Gudauri: Skiing in winter, hiking in summer",
                "Kazbegi: Jaw-dropping views and ancient monasteries",
              ],
              "Best Time to Travel: April to June and September to November",
            ],
          },
          {
            title: "2. Maldives",
            details: [
              "Distance from Dubai: ~4.5 hours",
              "Visa Policy: Visa on arrival (30 days) for UAE citizens and residents",
              "Why Go: Private beaches, turquoise waters, and luxurious resorts—perfect for honeymoons and quiet escapes.",
              "Top Experiences:",
              [
                "Overwater stays",
                "Snorkeling around coral reefs",
                "Sunset boat trips",
              ],
              "Best Time to Travel: November to April",
            ],
          },
          {
            title: "3. Azerbaijan",
            details: [
              "Distance from Dubai: ~3 hours",
              "Visa Policy: Visa-free for UAE citizens, visa on arrival or e-visa for residents",
              "Why Go: A mix of Eastern charm and modern city life—ideal for urban explorers and countryside lovers.",
              "Top Places to Visit:",
              [
                "Baku Boulevard and Flame Towers",
                "Gobustan Rock Art Reserve",
                "Sheki: Traditional architecture and mountains",
              ],
              "Best Time to Travel: April to June and September to November",
            ],
          },
          {
            title: "4. Armenia",
            details: [
              "Distance from Dubai: ~3 hours",
              "Visa Policy: Visa-free for UAE citizens and residents (up to 180 days)",
              "Why Go: Rich culture, historic churches, and mountain views—peaceful, welcoming, and affordable.",
              "Top Experiences:",
              [
                "Yerevan's Republic Square",
                "Lake Sevan for summer swimming",
                "Geghard Monastery and Garni Temple",
              ],
              "Best Time to Travel: May to October",
            ],
          },
          {
            title: "5. Thailand",
            details: [
              "Distance from Dubai: ~6 hours",
              "Visa Policy: Visa-free for UAE citizens (up to 30 days), e-visa or visa on arrival for residents",
              "Why Go: Perfect blend of beaches, culture, city life, and mountains—great for all types of travelers.",
              "Top Destinations:",
              [
                "Bangkok for shopping and food",
                "Phuket for beach lovers",
                "Chiang Mai for temples and trekking",
              ],
              "Best Time to Travel: November to February",
            ],
          },
          {
            title: "6. Indonesia (Bali)",
            details: [
              "Distance from Dubai: ~9 hours",
              "Visa Policy: Visa-free for UAE citizens, visa on arrival for residents",
              "Why Go: Bali is top for nature, wellness, and culture—ideal for digital detox or long vacations.",
              "Top Experiences:",
              [
                "Ubud for rice fields and yoga",
                "Seminyak for beach sunsets",
                "Nusa Penida for island adventure",
              ],
              "Best Time to Travel: April to October",
            ],
          },
          {
            title: "7. Montenegro",
            details: [
              "Distance from Dubai: ~6 hours",
              "Visa Policy: Visa-free for UAE passport holders (90 days); residents can enter with valid Schengen/US/UK visa",
              "Why Go: Quiet coastlines, medieval towns, and scenic landscapes—without Western Europe prices.",
              "Top Places to Visit:",
              [
                "Kotor Bay: UNESCO old town",
                "Budva for beaches and nightlife",
                "Durmitor for nature lovers",
              ],
              "Best Time to Travel: May to September",
            ],
          },
          {
            title: "8. Serbia",
            details: [
              "Distance from Dubai: ~6 hours",
              "Visa Policy: Visa-free for UAE citizens (90 days); residents require e-visa or valid US/UK/Schengen visa",
              "Why Go: Balkan charm, vibrant cities, and peaceful nature—great for culture-focused trips.",
              "Top Experiences:",
              [
                "Belgrade neighborhoods and river cruises",
                "Novi Sad and Petrovaradin Fortress",
                "Tara National Park for lakes and forests",
              ],
              "Best Time to Travel: April to October",
            ],
          },
          {
            title: "9. Seychelles",
            details: [
              "Distance from Dubai: ~5 hours",
              "Visa Policy: Visa-free for UAE passport holders and residents (entry permit on arrival)",
              "Why Go: Calm islands with pristine beaches and exotic rock formations—perfect for peaceful luxury.",
              "Top Islands to Visit:",
              [
                "Mahe for resorts and city life",
                "Praslin for white beaches and nature",
                "La Digue for bike rides and slow travel",
              ],
              "Best Time to Travel: April, May, October, and November",
            ],
          },
          {
            title: "10. Kazakhstan",
            details: [
              "Distance from Dubai: ~4.5 hours",
              "Visa Policy: Visa-free for UAE citizens (30 days); residents may require e-visa",
              "Why Go: A blend of futuristic cities and raw nature—Central Asia rising star.",
              "Top Experiences:",
              [
                "Almaty: Tree-lined streets and mountains",
                "Charyn Canyon: Like a mini Grand Canyon",
                "Astana: Unique architecture and modern vibes",
              ],
              "Best Time to Travel: Spring and autumn",
            ],
          },
        ].map((place, index) => (
          <div key={index} className="xl:text-xl text-lg">
            <h2 className="xl:text-4xl text-3xl font-bold mb-10">
              {place.title}
            </h2>
            {place.details.map((item, idx) =>
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

        {/* Travel Tips Section */}
        <div className="xl:text-xl text-lg space-y-6 mt-20">
          <h2 className="text-3xl xl:text-4xl font-bold mb-4">
            Travel Tips for Visa-Free Travel from Dubai
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Always Double-Check Entry Rules:</strong> Visa policies
              can change without notice. Our team confirms the latest entry
              requirements before booking.
            </li>
            <li>
              <strong>Carry Proper Documentation:</strong> Even visa-free
              destinations may ask for hotel bookings, return tickets, or
              insurance.
            </li>
            <li>
              <strong>Use Travel Insurance:</strong> Protect yourself against
              delays, cancellations, and emergencies.
            </li>
            <li>
              <strong>Plan in Advance for Holidays:</strong> Public holidays in
              the UAE make these spots busy—early booking is key.
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="xl:text-xl text-lg space-y-6 mt-20">
          <h2 className="text-3xl xl:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p>
            <strong>
              Do visa-free destinations mean I don&#39;t need any documents?
            </strong>
            <br />
            No. You still need a valid passport, confirmed return ticket, and
            sometimes proof of hotel booking or insurance.
          </p>
          <p>
            <strong>
              Can UAE residents travel visa-free to all the countries above?
            </strong>
            <br />
            Not all. Some destinations are visa-free for citizens only.
            Residents may need e-visas or special conditions.
          </p>
          <p>
            <strong>
              Does Majestic Skyline help with visa-on-arrival or e-visas?
            </strong>
            <br />
            Yes. We assist with applications, flight bookings, accommodation,
            and travel insurance for all destinations.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mt-40 xl:text-xl text:lg pt-10 text-center w-full border-t-2">
          <p className="text-2xl font-medium mb-4">
            Ready to Travel Without the Paperwork?
          </p>
          <p className="mb-6">
            Majestic Skyline helps you explore beautiful visa-free destinations
            from Dubai—quickly, smoothly, and affordably. Whether you&#39;re
            planning a short break or a long escape, we&#39;ll guide you every step
            of the way.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1c355e] text-white px-6 py-3 rounded-md hover:bg-[#2c466f] transition"
          >
            Plan Your Getaway
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopVisaFreeDestinations2025;

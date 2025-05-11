"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhereToTravel = () => {
  return (
    <section className="bg-[#f2f2f7] text-[#1c355e] pt-32 pb-20">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] mb-16">
        <Image
          src="/destinations/dubai.jpg"
          alt="Summer Escape from Dubai"
          layout="fill"
          objectFit="cover"
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-serif max-w-4xl leading-tight drop-shadow-md">
            Where to Travel in Summer 2025 to Escape the Dubai Heat
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 xl:px-32 space-y-12 mx-auto text-lg leading-relaxed">
        <p className="xl:text-2xl text-xl">
          Dubai summers can be intense. When temperatures rise, many residents
          start looking for cooler places to relax. If you’re planning a trip
          between June and August 2025, several destinations offer fresh air,
          scenic views, and ideal weather.
        </p>
        <p className="xl:text-2xl text-xl">
          Majestic Skyline, a Dubai-based travel agency, recommends carefully
          selected spots that remain pleasant during the hottest months in the
          UAE. These destinations are known for cooler climates, natural
          landscapes, and great accessibility from Dubai.
        </p>
        <p className="xl:text-2xl text-xl">
          Below is a guide to the best places to travel in summer 2025 to escape
          the Dubai heat—complete with ideas for nature, city breaks, family
          escapes, and romantic holidays.
        </p>

        {/* Sections for Each Destination */}
        {[
          {
            title: "1. Europe",
            destinations: [
              {
                name: "Switzerland",
                type: "Ideal for: Families, couples, nature lovers",
                overview:
                  "Switzerland is known for its cool summer weather, green valleys, and postcard-perfect villages. The air stays crisp even in July, making it a refreshing escape from Dubai’s heat.",
                topPlaces: [
                  "Interlaken: Lakes, mountains, and adventure sports",
                  "Lucerne: Scenic boat rides and alpine views",
                  "Zermatt: Close-up views of the Matterhorn",
                ],
                popularActivities: [
                  "Cable car rides to mountain peaks",
                  "Walks through meadows and old towns",
                  "Chocolate and cheese tasting experiences",
                ],
                bestTravelPeriod:
                  "June to August offers sunshine without the extreme heat.",
              },
              {
                name: "Austria",
                type: "Ideal for: Nature escapes, road trips, music lovers",
                overview:
                  "Austria stays comfortable in summer. Mountain villages, cool lakes, and historical towns make it an easy choice for UAE residents seeking mild temperatures and beautiful landscapes.",
                topPlaces: [
                  "Hallstatt: Peaceful lakeside village",
                  "Salzburg: Music and culture surrounded by green hills",
                  "Zell am See: Perfect for lakeside stays and hikes",
                ],
                popularActivities: [
                  "Visit Mozart’s birthplace",
                  "Explore salt mines and ice caves",
                  "Enjoy nature trails and bike paths",
                ],
                bestTravelPeriod:
                  "July and August provide perfect weather for outdoor activities.",
              },
              {
                name: "Georgia (Gudauri & Kazbegi)",
                type: "Ideal for: Short getaways, adventure seekers",
                overview:
                  "Georgia is a quick escape from Dubai. While Tbilisi can get warm, the mountains of Gudauri and Kazbegi remain cool and scenic all summer.",
                topPlaces: [
                  "Stepantsminda (Kazbegi): Home to the Gergeti Trinity Church",
                  "Gudauri: High-altitude landscapes, perfect for hiking",
                ],
                popularActivities: [
                  "Horseback riding",
                  "Mountain lodge stays",
                  "Waterfall and valley treks",
                ],
                bestTravelPeriod:
                  "June to September for clear skies and cooler air.",
              },
            ],
          },
          {
            title: "2. Asia",
            destinations: [
              {
                name: "Japan (Hokkaido)",
                type: "Ideal for: Families, solo travelers, cultural explorers",
                overview:
                  "While Tokyo and Osaka heat up in summer, Japan’s northern island Hokkaido remains mild. It’s a refreshing destination filled with flower fields, lakes, and local traditions.",
                topPlaces: [
                  "Furano: Lavender fields and rolling hills",
                  "Sapporo: Modern city with a cool breeze",
                  "Lake Toya: Volcanoes and hot springs nearby",
                ],
                popularActivities: [
                  "Visit flower parks and national parks",
                  "Take scenic drives through rural towns",
                  "Taste fresh seafood and local sweets",
                ],
                bestTravelPeriod:
                  "July to August is peak lavender season and summer festivals.",
              },
              {
                name: "Indonesia (Bali Highlands)",
                type: "Ideal for: Couples, wellness travelers, retreat seekers",
                overview:
                  "Bali’s coastal areas can be humid, but regions like Ubud, Bedugul, and Munduk remain cooler due to higher altitude. These locations offer nature, peace, and cultural richness.",
                topPlaces: [
                  "Ubud: Art, yoga, and rice terraces",
                  "Bedugul: Botanical gardens and lakes",
                  "Munduk: Waterfalls and quiet mountain resorts",
                ],
                popularActivities: [
                  "Sunrise walks through rice fields",
                  "Visits to temples and local farms",
                  "Spa treatments and health retreats",
                ],
                bestTravelPeriod:
                  "June to September is dry season, ideal for exploration.",
              },
            ],
          },
          {
            title: "3. Eastern Europe & The Balkans",
            destinations: [
              {
                name: "Slovenia",
                type: "Ideal for: Couples, photographers, nature lovers",
                overview:
                  "Slovenia is compact, peaceful, and full of green landscapes. It stays cool in summer, especially in the Alps and near lakes.",
                topPlaces: [
                  "Lake Bled: Fairytale scenery and rowboat rides",
                  "Ljubljana: Clean and quiet capital with café culture",
                  "Triglav National Park: Forests, rivers, and hiking",
                ],
                popularActivities: [
                  "Paddle across Lake Bled",
                  "Hike to waterfalls and rivers",
                  "Explore caves and castles",
                ],
                bestTravelPeriod:
                  "June through August for warm but not hot days.",
              },
              {
                name: "Montenegro",
                type: "Ideal for: History lovers, families, slow travelers",
                overview:
                  "Montenegro offers cool inland areas and comfortable coastal temperatures. Towns like Kotor remain fresh during early mornings and evenings even in July.",
                topPlaces: [
                  "Kotor: Walled city and mountain trails",
                  "Durmitor: A UNESCO-protected national park",
                  "Cetinje: Cultural center near the mountains",
                ],
                popularActivities: [
                  "Swim in freshwater lakes",
                  "Walk fortress walls with sunset views",
                  "Enjoy quiet beaches along the Adriatic",
                ],
                bestTravelPeriod:
                  "June and early July avoid peak crowds and provide ideal weather.",
              },
            ],
          },
        ].map((section, index) => (
          <div key={index} className="xl:text-xl text-lg">
            <h2 className="xl:text-4xl text-3xl font-bold mb-10">
              {section.title}
            </h2>
            {section.destinations.map((destination, idx) => (
              <div key={idx} className="space-y-8 mb-12">
                <h3 className="xl:text-3xl text-2xl font-semibold mb-6">
                  {destination.name}
                </h3>
                <p>{destination.type}</p>
                <p className="mt-2">{destination.overview}</p>

                <div className="space-y-4 mt-4">
                  <h4 className="text-xl font-semibold">Top Places to Visit</h4>
                  <ul className="list-disc list-inside">
                    {destination.topPlaces.map((place, i) => (
                      <li key={i}>{place}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mt-4">
                  <h4 className="text-xl font-semibold">Popular Activities</h4>
                  <ul className="list-disc list-inside">
                    {destination.popularActivities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </div>

                <p className="mt-4 font-bold">
                  Best Travel Period: {destination.bestTravelPeriod}
                </p>
              </div>
            ))}
          </div>
        ))}

        {/* Final CTA */}
        <div className="mt-40 xl:text-xl text:lg pt-10 text-center w-full border-t-2">
          <p className="text-2xl font-medium mb-4">
            Cool Down Somewhere Beautiful This Summer
          </p>
          <p className="mb-6">
            Summer doesn’t have to mean staying indoors. Majestic Skyline helps
            travelers in Dubai escape the heat with cool-weather destinations
            that refresh the mind and body.
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

export default WhereToTravel;

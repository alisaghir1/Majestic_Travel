"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CommonUaeTravelMistakes = () => {
  return (
    <section className="bg-[#f2f2f7] text-[#1c355e] pt-32 pb-20">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] mb-16">
        <Image
          src="/blogs/mistakes.jpg"
          alt="5 Common Mistakes Travelers from the UAE Make"
          layout="fill"
          objectFit="cover"
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-serif max-w-4xl leading-tight drop-shadow-md">
            5 Common Mistakes Travelers from the UAE Make (and How to Avoid
            Them)
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 xl:px-32 space-y-12 mx-auto text-lg leading-relaxed">
        <p className="xl:text-2xl text-xl">
          Traveling from the UAE offers endless opportunities, but even the most
          experienced globetrotters can slip up. Mistakes often happen before
          departure, during the trip, or at unexpected moments. As a Dubai-based
          travel agency, Majestic Skyline has seen patterns among frequent
          travelers, especially those flying from the UAE. This guide highlights
          the top five mistakes and practical ways to avoid them.
        </p>

        <h2 className="xl:text-4xl text-3xl font-bold mt-10">
          1. Overlooking Visa Requirements
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Ignoring Destination-Specific Entry Rules:</strong> Many
            travelers assume their UAE passport or residency offers free entry
            everywhere. Not all countries allow visa-free access.
          </li>
          <li>
            <strong>Example:</strong> Thailand allows visa-free stays for UAE
            passport holders but not for all residents. Schengen countries need
            pre-approval, often weeks in advance.
          </li>
          <li>
            <strong>Solution:</strong> Check official embassy websites before
            booking. Verify for both layover countries and final destinations.
            Don’t forget transit visa requirements.
          </li>
          <li>
            <strong>Relying on Travel Agents Without Verification:</strong>{" "}
            Blind trust can lead to overlooked details or outdated info.
          </li>
          <li>
            <strong>Solution:</strong> Always cross-check visa info via official
            channels or reliable platforms. Laws change frequently.
          </li>
        </ul>

        <h2 className="xl:text-4xl text-3xl font-bold mt-10">
          2. Booking Flights Without Flexibility
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Choosing the Cheapest Flight Without Thinking:</strong> Low
            fares can come with midnight arrivals, long layovers, and travel
            stress.
          </li>
          <li>
            <strong>Example:</strong> Landing at midnight with no transport or
            facing a 10-hour layover with visa issues.
          </li>
          <li>
            <strong>Solution:</strong> Consider total travel time and comfort.
            Especially if traveling with family or elders.
          </li>
          <li>
            <strong>Forgetting to Review Airline Policies:</strong> Not all
            airlines include checked baggage or seat selection.
          </li>
          <li>
            <strong>Solution:</strong> Read airline rules on luggage and fees.
            Use trusted booking platforms with transparent policies.
          </li>
        </ul>

        <h2 className="xl:text-4xl text-3xl font-bold mt-10">
          3. Not Considering Weather and Local Seasons
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Packing the Wrong Clothes:</strong> UAE weather doesn’t
            apply globally. Spring in Europe can still mean snow.
          </li>
          <li>
            <strong>Solution:</strong> Research the climate for your
            destination. Use trusted sources and always bring a light jacket.
          </li>
          <li>
            <strong>Ignoring Public Holidays Abroad:</strong> Some tourists
            arrive when everything is shut due to national holidays.
          </li>
          <li>
            <strong>Example:</strong> Japan’s Golden Week or European Christmas
            periods lead to limited services and higher costs.
          </li>
          <li>
            <strong>Solution:</strong> Check local calendars when planning.
            Avoid national holidays unless attending events.
          </li>
        </ul>

        <h2 className="xl:text-4xl text-3xl font-bold mt-10">
          4. Not Budgeting Properly
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Underestimating Exchange Rates:</strong> Airport kiosks and
            ATMs abroad can offer poor rates with hidden fees.
          </li>
          <li>
            <strong>Solution:</strong> Compare UAE exchange houses before you
            fly. Consider travel cards or currency wallets.
          </li>
          <li>
            <strong>Overspending on Impulse Purchases:</strong> Small expenses
            add up fast — from snacks to souvenirs.
          </li>
          <li>
            <strong>Solution:</strong> Set a daily budget and stick to it. Use
            preloaded cards and keep a spending log.
          </li>
        </ul>

        <h2 className="xl:text-4xl text-3xl font-bold mt-10">
          5. Ignoring Health and Travel Insurance
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Skipping Travel Insurance:</strong> Many travelers assume
            UAE health coverage works abroad — it usually doesn’t.
          </li>
          <li>
            <strong>Example:</strong> A simple ER visit in the US can cost
            hundreds of dollars.
          </li>
          <li>
            <strong>Solution:</strong> Buy travel insurance that covers medical
            emergencies, cancellations, and baggage loss.
          </li>
          <li>
            <strong>Not Taking Required Vaccinations:</strong> Some countries
            require or recommend vaccinations before arrival.
          </li>
          <li>
            <strong>Example:</strong> Yellow Fever vaccines are mandatory in
            some African and South American countries.
          </li>
          <li>
            <strong>Solution:</strong> Visit the health section on embassy
            sites. Get any shots at least a month before travel.
          </li>
        </ul>

        {/* Call to Action */}

        <div className="mt-40 xl:text-xl text:lg pt-10 text-center w-full border-t-2">
          <p className="mb-6">
            Plan smarter. Travel easier. Fly with confidence. Contact Majestic
            Skyline today to start your next adventure without the usual
            mistakes.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1c355e] text-white px-6 py-3 rounded-md hover:bg-[#2c466f] transition"
          >
            Contact Us to Plan a Worry-Free Trip
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommonUaeTravelMistakes;

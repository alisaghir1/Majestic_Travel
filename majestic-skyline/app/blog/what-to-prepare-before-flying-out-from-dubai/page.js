"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const TravelChecklistDubai = () => {
  return (
    <section className="bg-[#f2f2f7] text-[#1c355e] pt-32 pb-20">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] mb-16">
        <Image
          src="/blogs/travel-checklist.jpg"
          alt="Travel Checklist: What to Prepare Before Flying Out from Dubai"
          layout="fill"
          objectFit="cover"
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-serif max-w-4xl leading-tight drop-shadow-md">
            Travel Checklist: What to Prepare Before Flying Out from Dubai
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 xl:px-32 space-y-12 mx-auto text-lg leading-relaxed">
        <p className="xl:text-2xl text-xl">
          Getting ready for an international trip from Dubai involves more than
          just booking a flight. Forgetting key documents or skipping important
          steps can delay or even cancel your travel plans. For UAE citizens and
          residents, preparing properly saves time, reduces stress, and makes
          your journey smooth from start to finish.
        </p>
        <p className="xl:text-2xl text-xl">
          Majestic Skyline, based in Dubai, helps travelers stay organized with
          clear, reliable guidance. This checklist covers everything you need
          before heading to the airport—whether it’s your first trip or your
          tenth.
        </p>

        {/* 1. Travel Documents */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">1. Travel Documents</h2>
        <p>
          <strong>Check Passport Validity:</strong> Many countries require at
          least six months of passport validity from your travel date. Renew
          early to avoid surprises at immigration.
        </p>
        <p>
          <strong>Secure Visas and Entry Permits:</strong> Visa policies vary by
          nationality and destination. Some countries offer visa-free or
          visa-on-arrival access, while others require e-visas or embassy
          appointments. UAE citizens often have more travel freedom, while
          residents should apply early.
        </p>
        <p><strong>Key Reminders</strong></p>
        <ul className="list-disc list-inside">
          <li>Print copies of all visas</li>
          <li>Double-check travel dates and entry conditions</li>
          <li>Confirm if you need transit visas for layovers</li>
        </ul>
        <p className="mt-4">
          <strong>Photocopies and Backups:</strong> Keep hard and soft copies of
          your passport, visa, Emirates ID, and any entry requirements. Use
          cloud storage for extra backup.
        </p>

        {/* 2. Flight and Booking Essentials */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">2. Flight and Booking Essentials</h2>
        <p>
          <strong>Confirm Flight Details:</strong> Review your flight time,
          terminal, and airline at least 24 hours before departure. Airports in
          Dubai (DXB and DWC) serve many airlines, so always verify which
          terminal to arrive at.
        </p>
        <p>
          <strong>Online Check-In:</strong> Check in online 24 to 48 hours
          before departure to select seats and avoid long queues. Many airlines
          also allow baggage pre-payment online.
        </p>
        <p>
          <strong>Boarding Pass and Itinerary:</strong> Download or print your
          boarding pass and full itinerary. Some countries require a printed
          copy for immigration or visa confirmation.
        </p>
        <p>
          <strong>Frequent Flyer Numbers:</strong> Link your loyalty account
          during booking or check-in to collect miles.
        </p>

        {/* 3. Baggage and Packing */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">3. Baggage and Packing</h2>
        <p>
          <strong>Understand Airline Baggage Rules:</strong> Each airline has
          different baggage policies. Confirm weight, size, and quantity limits
          for both cabin and checked luggage.
        </p>
        <p><strong>Typical Allowance from Dubai:</strong></p>
        <ul className="list-disc list-inside">
          <li>Economy: 20–30kg checked, 7–10kg cabin</li>
          <li>Business: 40–50kg checked, 10–15kg cabin</li>
        </ul>
        <p className="mt-4">
          <strong>Pack Essentials in Carry-On:</strong> Important documents,
          electronics, medications, and valuables should stay in your hand
          luggage.
        </p>
        <p><strong>Useful Items to Include:</strong></p>
        <ul className="list-disc list-inside">
          <li>Chargers and adapters</li>
          <li>Headphones</li>
          <li>Small toiletries (under 100ml each)</li>
          <li>Snacks and a water bottle (empty before security)</li>
        </ul>
        <p className="mt-4">
          <strong>Clothing and Weather Prep:</strong> Pack based on the climate
          at your destination. Bring layers for unpredictable weather. Shoes
          should match the terrain and daily plans.
        </p>

        {/* 4. Health and Safety */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">4. Health and Safety</h2>
        <p>
          <strong>Travel Insurance:</strong> Health emergencies and
          cancellations can happen unexpectedly. Travel insurance protects
          against high costs and gives access to 24-hour assistance abroad.
        </p>
        <p><strong>Coverage Includes:</strong></p>
        <ul className="list-disc list-inside">
          <li>Medical care</li>
          <li>Trip delays or missed connections</li>
          <li>Baggage loss</li>
          <li>Personal liability abroad</li>
        </ul>
        <p className="mt-4">
          <strong>Vaccination and Health Requirements:</strong> Some countries
          ask for proof of specific vaccines. COVID-19 requirements have relaxed
          in many places but still apply in some regions.
        </p>
        <p>
          <strong>Prescription Medications:</strong> Pack necessary medicines in
          original packaging with a doctor’s note, especially when traveling to
          countries with strict import rules.
        </p>

        {/* 5. Money and Banking */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">5. Money and Banking</h2>
        <p>
          <strong>Inform Your Bank:</strong> Card activity abroad may be flagged
          as suspicious. Notify your bank of your travel dates and destinations
          to avoid blocked transactions.
        </p>
        <p>
          <strong>Exchange Currency:</strong> It’s useful to carry small amounts
          of local currency for taxis, tips, or emergencies. Exchange at the
          airport, banks, or approved exchange houses in Dubai.
        </p>
        <p>
          <strong>International Cards and Apps:</strong> Use a travel-friendly
          card or app with low foreign exchange fees. Make sure your cards work
          with contactless payments at your destination.
        </p>

        {/* 6. Connectivity and Technology */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">6. Connectivity and Technology</h2>
        <p>
          <strong>Activate International Roaming:</strong> Check if your local
          provider offers roaming packages. Activate roaming before your trip if
          needed.
        </p>
        <p>
          <strong>Buy a Local SIM or eSIM:</strong> If traveling for longer, a
          local SIM or eSIM saves on mobile data costs. Check coverage and
          compatibility in advance.
        </p>
        <p><strong>Download Useful Apps:</strong></p>
        <ul className="list-disc list-inside">
          <li>Maps (offline access)</li>
          <li>Translation tools</li>
          <li>Currency converters</li>
          <li>Airline and airport apps</li>
        </ul>

        {/* Conclusion */}
        <p className="xl:text-2xl text-xl mt-10">
          Preparation is the key to stress-free travel. With this checklist,
          you’ll be ready for takeoff from Dubai, equipped with the documents,
          tools, and confidence needed to enjoy your journey. Don’t leave it to
          chance—pack smart, plan ahead, and travel with peace of mind.
        </p>
        <p className="xl:text-2xl text-xl">
          Majestic Skyline is here to support UAE travelers at every stage—from
          trip planning to last-minute travel prep. Reach out for expert help or
          personalized packing advice before your next trip.
        </p>

        {/* Call to Action */}
        <div className="mt-40 xl:text-xl text:lg pt-10 text-center w-full border-t-2">
          <p className="mb-6">
            Ready to fly stress-free? Contact Majestic Skyline today for
            travel planning and expert checklists customized for your next
            destination.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1c355e] text-white px-6 py-3 rounded-md hover:bg-[#2c466f] transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravelChecklistDubai;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const PlanPerfectTrip = () => {
  return (
    <section className="bg-[#f2f2f7] text-[#1c355e] pt-32 pb-20">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] mb-16">
        <Image
          src="/blogs/the-perfect-plan.jpg"
          alt="How to Plan a Perfect Trip Abroad Without Stress"
          layout="fill"
          objectFit="cover"
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-serif max-w-4xl leading-tight drop-shadow-md">
            How to Plan a Perfect Trip Abroad Without Stress
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 xl:px-32 space-y-12 mx-auto text-lg leading-relaxed">
        <p className="xl:text-2xl text-xl">
          Traveling abroad should bring excitement, not pressure. Whether you&#39;re
          exploring a new culture, celebrating a milestone, or taking a break
          from your routine, preparation makes the difference. For many
          Dubai-based travelers, time is limited—and so is patience for delays,
          confusion, or unexpected issues.
        </p>
        <p className="xl:text-2xl text-xl">
          Majestic Skyline helps UAE residents plan international trips without
          hassle. The key is knowing what steps matter, what can go wrong, and
          how to stay one step ahead. This guide breaks down each part of the
          planning process into clear, manageable steps—so you can focus on the
          experience, not the stress.
        </p>

        {/* 1. Choose the Right Destination */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">
          1. Choose the Right Destination
        </h2>
        <p>
          <strong>Match Your Goals to the Place:</strong> Each traveler is
          different. Some want rest, others want adventure. Some need
          kid-friendly resorts, while others prefer silent retreats. Choosing a
          destination based on your interests is the first step in reducing
          stress.
        </p>
        <p>
          <strong>Questions to Consider:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>Do you want a beach, city, or nature escape?</li>
          <li>Is the goal relaxation, discovery, or celebration?</li>
          <li>How far are you willing to travel from Dubai?</li>
        </ul>
        <p className="mt-4">
          <strong>Understand the Season and Weather:</strong> Travel during the
          right time. Off-season may save money, but poor weather can affect
          activities. Research climate conditions before finalizing dates.
        </p>
        <p className="mt-2">
          <strong>Popular Summer Escapes:</strong> Switzerland, Georgia,
          Austria, Bali highlands
        </p>
        <p>
          <strong>Winter Favorites:</strong> Maldives, Sri Lanka, Kenya,
          southern Europe
        </p>

        {/* 2. Set a Realistic Budget */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">
          2. Set a Realistic Budget
        </h2>
        <p>
          <strong>Create a Clear Spending Plan:</strong> Unexpected expenses
          create unnecessary stress. Knowing how much you can spend on each part
          of the trip helps avoid last-minute surprises.
        </p>
        <p className="mt-2">
          <strong>Main Expense Areas:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>Flights</li>
          <li>Accommodation</li>
          <li>Transfers</li>
          <li>Meals</li>
          <li>Entry fees or excursions</li>
          <li>Travel insurance</li>
          <li>Shopping and incidentals</li>
        </ul>
        <p className="mt-4">
          <strong>Plan for Flexibility:</strong> Adding a buffer of 10 to 15%
          above your target budget is wise. This allows you to handle changes in
          flight prices or upgrades without worry.
        </p>

        {/* 3. Book Flights and Accommodation Early */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">
          3. Book Flights and Accommodation Early
        </h2>
        <p>
          <strong>Compare Prices Without Getting Overwhelmed:</strong> Flights
          can vary widely in price depending on timing. Booking too late or too
          early can lead to overpaying. Use tools that monitor trends or let
          Majestic Skyline track flight deals for you.
        </p>
        <p className="mt-2">
          <strong>Smart Booking Window:</strong> 2 to 4 months before the trip is
          ideal for international flights.
        </p>
        <p className="mt-4">
          <strong>Pick the Right Stay for Your Trip Style:</strong> Hotels are
          not one-size-fits-all. A boutique hotel in a quiet area may work for
          couples, while families might need larger rooms or apartments.
          Proximity to transport is also key.
        </p>
        <p className="mt-2">
          <strong>Dubai-Based Travelers Often Prefer:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>Beachfront resorts in Asia</li>
          <li>Central hotels in European cities</li>
          <li>Private villas for honeymoons</li>
        </ul>

        {/* 4. Secure Travel Documents */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">
          4. Secure Travel Documents
        </h2>
        <p>
          <strong>Check Passport Validity Early:</strong> Many countries require
          at least six months of passport validity on arrival. Renew early to
          avoid emergencies.
        </p>
        <p className="mt-2">
          <strong>Confirm Visa Requirements:</strong> Visa rules differ for UAE
          citizens and residents. Some destinations allow visa-free entry, while
          others need e-visas or embassy appointments. Majestic Skyline confirms
          and assists with all document needs.
        </p>
        <p className="mt-2">
          <strong>Prepare Printed and Digital Copies:</strong> Having both
          formats ready for passports, bookings, and insurance helps in case of
          lost luggage, device failure, or customs checks.
        </p>

        {/* 5. Build a Thoughtful Itinerary */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">
          5. Build a Thoughtful Itinerary
        </h2>
        <p>
          <strong>Balance Movement and Rest:</strong> Too many destinations in
          one trip causes fatigue. Fewer stops with deeper experiences help
          create lasting memories and keep stress low.
        </p>
        <p className="mt-2">
          <strong>Book Activities in Advance:</strong> Popular museums, shows,
          or tours often sell out. Pre-booking ensures entry and helps avoid
          long queues or price surges.
        </p>
        <p className="mt-2">
          <strong>Top Picks from Dubai Travelers:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>Museum passes in Paris</li>
          <li>Sunset cruises in Santorini</li>
          <li>Cooking classes in Tokyo</li>
          <li>Safari drives in Kenya</li>
        </ul>
        <p className="mt-2">
          <strong>Leave Room for Flexibility:</strong> Some of the best moments
          happen unplanned. Don&#39;t fill every hour. Keep space for rest,
          spontaneous stops, or unexpected discoveries.
        </p>

        {/* 6. Sort Out Travel Insurance */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">
          6. Sort Out Travel Insurance
        </h2>
        <p>
          <strong>Protect Yourself Against Delays or Illness:</strong> Medical
          costs abroad can be high. Delayed flights or lost bags can affect the
          trip. A basic insurance policy reduces the impact of these events.
        </p>
        <p className="mt-2">
          <strong>Required for Some Destinations:</strong> Schengen countries,
          the UK, and others require proof of coverage during visa applications.
        </p>
        <p className="mt-2">
          <strong>Majestic Skyline Offers Travel Insurance Add-ons:</strong>{" "}
          Options include coverage for adventure activities, cancellations, and
          even COVID-related expenses.
        </p>

        {/* 7. Arrange Transport and Transfers */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">
          7. Arrange Transport and Transfers
        </h2>
        <p>
          <strong>Plan Airport Pickups in Advance:</strong> Arriving in a new
          city can be tiring. Having a confirmed ride to your hotel reduces
          confusion and keeps the mood relaxed.
        </p>

        {/* Conclusion */}
        <p className="xl:text-2xl text-xl mt-10">
          A perfect trip starts with smart planning. With the right
          destination, budget, and itinerary, travel stress fades—and memories
          shine. Whether  you&#39;re planning your first journey or your fiftieth,
          Majestic Skyline helps you travel better, smoother, and more
          confidently.
        </p>

        {/* Call to Action */}
        <div className="mt-40 xl:text-xl text:lg pt-10 text-center w-full border-t-2">
          <p className="mb-6">
            Ready to plan a stress-free adventure? Contact Majestic Skyline
            today, and let us handle the details while you enjoy the journey.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1c355e] text-white px-6 py-3 rounded-md hover:bg-[#2c466f] transition"
          >
            Plan My Trip
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlanPerfectTrip;

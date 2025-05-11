"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const TravelInsurance101 = () => {
  return (
    <section className="bg-[#f2f2f7] text-[#1c355e] pt-32 pb-20">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] mb-16">
        <Image
          src="/blogs/insurance.jpg"
          alt="Travel Insurance 101: Why It Matters for Every Trip"
          layout="fill"
          objectFit="cover"
          className="rounded-b-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-serif max-w-4xl leading-tight drop-shadow-md">
            Travel Insurance 101: Why It Matters for Every Trip
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 xl:px-32 space-y-12 mx-auto text-lg leading-relaxed">
        <p className="xl:text-2xl text-xl">
          Travel brings joy, excitement, and unforgettable experiences. But
          unexpected events can turn a dream trip into a stressful memory. Flight
          delays, lost luggage, sudden illness—anything can happen once you step
          outside the UAE. That’s where travel insurance comes in.
        </p>
        <p className="xl:text-2xl text-xl">
          At Majestic Skyline, we see many travelers overlook this step. This
          guide explains why travel insurance is essential, what it covers, and
          how to choose the right plan for every journey.
        </p>

        {/* 1. Understanding Travel Insurance Basics */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">1. Understanding Travel Insurance Basics</h2>
        <p>
          <strong>What Travel Insurance Covers:</strong> Travel insurance is a
          plan that protects travelers against risks during trips. These
          policies cover different problems based on the plan you choose.
        </p>
        <ul className="list-disc list-inside">
          <li>Trip cancellations</li>
          <li>Medical emergencies</li>
          <li>Lost or delayed baggage</li>
          <li>Missed connections</li>
          <li>Natural disasters or political unrest</li>
        </ul>
        <p className="mt-4">
          Each policy has its own terms. Reading the fine print before purchase
          helps avoid misunderstandings.
        </p>
        <p>
          <strong>What It Doesn’t Include:</strong> Not all issues fall under
          coverage. Some plans exclude specific events.
        </p>
        <ul className="list-disc list-inside">
          <li>Pre-existing health conditions</li>
          <li>High-risk sports without special coverage</li>
          <li>Traveling against government advice</li>
          <li>Losses due to negligence</li>
        </ul>

        {/* 2. Medical Protection During Travel */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">2. Medical Protection During Travel</h2>
        <p>
          <strong>Emergency Treatment Abroad:</strong> Medical costs abroad can
          be shocking. Even a minor injury could mean hundreds of dollars in
          fees. Countries like the USA, Canada, or Switzerland are known for
          expensive healthcare.
        </p>
        <p>
          <strong>Why It Matters:</strong> UAE health insurance rarely extends
          overseas. Travel insurance fills that gap.
        </p>
        <p>
          <strong>Access to Global Assistance:</strong> Most providers offer
          24/7 help lines. Travelers can reach out for hospital referrals,
          medical translations, or even emergency evacuations.
        </p>
        <ul className="list-disc list-inside">
          <li>Access to nearby hospitals</li>
          <li>Help arranging emergency flights</li>
          <li>Language support for local medical staff</li>
        </ul>

        {/* 3. Financial Coverage for Trip Issues */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">3. Financial Coverage for Trip Issues</h2>
        <p>
          <strong>Trip Cancellation and Interruption:</strong> Illness,
          accidents, or even work emergencies can lead to last-minute
          cancellations.
        </p>
        <ul className="list-disc list-inside">
          <li>Non-refundable tickets</li>
          <li>Hotel reservations</li>
          <li>Prepaid excursions or car rentals</li>
        </ul>
        <p>
          <strong>Delayed or Missed Flights:</strong> Travel insurance includes
          compensation for delays or missed connections.
        </p>
        <p>
          <em>Example:</em> A weather delay causes an overnight stay. Insurance
          can cover hotel and food costs.
        </p>

        {/* 4. Baggage Protection */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">4. Baggage Protection</h2>
        <p>
          <strong>Lost, Stolen, or Damaged Luggage:</strong> Insurance can help
          reimburse for lost or delayed baggage.
        </p>
        <ul className="list-disc list-inside">
          <li>Refunds for lost or stolen bags</li>
          <li>Replacement cost for essentials</li>
          <li>Coverage for personal items inside luggage</li>
        </ul>
        <p>
          <strong>Emergency Shopping Reimbursement:</strong> Delayed bags often
          mean buying clothes or toiletries. Save receipts—claims require proof
          of purchase.
        </p>

        {/* 5. Extra Benefits and Services */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">5. Extra Benefits and Services</h2>
        <p>
          <strong>Personal Liability Coverage:</strong> Some plans cover if a
          traveler accidentally causes harm or damages property.
        </p>
        <p>
          <strong>Travel Assistance Services:</strong> Providers offer more than
          just coverage—like embassy support, lost passport help, or emergency
          cash advances.
        </p>
        <ul className="list-disc list-inside">
          <li>Embassy contacts</li>
          <li>Cash advances</li>
          <li>Support during strikes or closures</li>
        </ul>

        {/* 6. How to Choose the Right Policy */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">6. How to Choose the Right Policy</h2>
        <p>
          <strong>Match the Plan to Your Trip Type:</strong> A family holiday,
          solo adventure, or business trip each has unique risks.
        </p>
        <ul className="list-disc list-inside">
          <li>Single-trip plans</li>
          <li>Multi-trip plans</li>
          <li>Long-stay coverage</li>
          <li>Adventure travel plans</li>
        </ul>
        <p>
          <strong>Compare Providers and Read Reviews:</strong> Not all companies
          are equal. Compare coverage limits, service ratings, and claim speed.
        </p>

        {/* 7. Travel Insurance for UAE Residents */}
        <h2 className="xl:text-4xl text-3xl font-bold mt-10">7. Travel Insurance for UAE Residents</h2>
        <p>
          <strong>Why It Matters:</strong> UAE passport holders often travel far
          and face unique risks—long-haul flights, complex itineraries, and
          health requirements.
        </p>
        <ul className="list-disc list-inside">
          <li>Baggage delays</li>
          <li>Flight issues from weather or fog</li>
          <li>Illness in remote destinations</li>
        </ul>
        <p>
          <strong>Common Mistakes Travelers Make:</strong> Many skip insurance
          or rely on airline coverage.
        </p>
        <ul className="list-disc list-inside">
          <li>Relying only on credit card insurance</li>
          <li>Assuming local medical insurance applies abroad</li>
          <li>Choosing the cheapest policy without reading the terms</li>
        </ul>

        {/* Conclusion */}
        <p className="xl:text-2xl text-xl mt-10">
          Travel insurance is often the most ignored yet most valuable part of
          travel planning. It doesn’t stop problems from happening—but it softens
          the impact.
        </p>
        <p className="xl:text-2xl text-xl">
          Whether heading to Europe, Asia, or Africa, travelers from Dubai and
          across the UAE benefit from peace of mind, reduced financial risk, and
          smoother recovery when the unexpected strikes.
        </p>

        {/* Call to Action */}
        <div className="mt-40 xl:text-xl text:lg pt-10 text-center w-full border-t-2">
          <p className="mb-6">
            Need help choosing the right travel insurance plan? Contact Majestic
            Skyline today for guidance tailored to your trip.
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

export default TravelInsurance101;

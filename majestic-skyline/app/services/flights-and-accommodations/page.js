"use client";
import {
  Plane,
  BedDouble,
  LayoutList,
  MapPin,
  Users,
  Calendar,
  DollarSign,
  Hotel,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FlightsAndAccommodation() {
  return (
    <div className="pt-60 pb-24 mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/flight-and-accommodation.jpg"
          alt="Flights and Hotels"
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Flights & Accommodations from Dubai
          </h1>
        </div>
      </div>

      {/* Full Content Section */}
      <section className="space-y-8 container mx-auto px-5 mb-20 text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-[#1c355e]">
          Reliable Flight and Hotel Booking Services for Global Travelers Based in Dubai
        </h2>
        <p>
          Majestic Skyline offers professional flight and accommodation booking services for individuals, families, and business travelers departing from Dubai. Whether you’re looking for affordable tickets, luxury stays, or bundled packages, we simplify every step.
        </p>
        <p>
          Our Dubai-based team secures the best travel deals based on your route, preferences, and timing—saving you hours of research and ensuring peace of mind.
        </p>
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Your One-Stop Solution for Booking Flights and Hotels from the UAE
        </h3>
        <p>
          Finding the right flight or hotel can feel overwhelming with endless options online. Prices change quickly. Policies vary. Reviews can be confusing. Majestic Skyline makes the process easy, fast, and secure.
        </p>
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Why Travelers in Dubai Book Their Flights and Stays Through Us:
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Dubai-Based Experts:</strong> Speak with real local agents who understand your needs and offer in-person support when required.
          </li>
          <li>
            <strong>Exclusive Travel Deals:</strong> Get access to unpublished rates on flights and hotels, available only through our agency.
          </li>
          <li>
            <strong>Fast Changes & Support:</strong> Need to modify your booking? We handle updates, upgrades, and cancellations quickly and clearly.
          </li>
          <li>
            <strong>Transparent Pricing:</strong> We eliminate hidden charges and give you full clarity on what you’re paying for.
          </li>
          <li>
            <strong>Bundled Flight + Hotel Packages:</strong> Save time and money with curated travel bundles that fit weekend escapes or long holidays.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          FAQs:
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Can I book my hotel and flight separately?</strong> Yes. You can book just one or both. We offer flexible booking services based on your needs.
          </li>
          <li>
            <strong>Do you handle flight check-ins?</strong> We assist with online check-ins and send your boarding pass via email or WhatsApp if requested.
          </li>
          <li>
            <strong>How do I know my hotel is legitimate?</strong> We work only with trusted and verified partners. Every booking comes with confirmation vouchers and customer support.
          </li>
          <li>
            <strong>Are the prices you offer cheaper than online platforms?</strong> In many cases, yes. We access closed-user group fares and wholesale hotel rates not visible to the public.
          </li>
        </ul>
        <p className="pt-4">
          Majestic Skyline helps travelers in Dubai book flights and accommodation with ease, safety, and affordability.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center container mx-auto px-5 max-w-2xl">
        <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
          Book Your Flights and Hotels with Confidence
        </h4>
        <p className="mb-6 text-gray-700">
          Let us handle the details so you can focus on enjoying your journey.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white px-6 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
        >
          Get Your Travel Quote Now
        </Link>
      </div>
    </div>
  );
}

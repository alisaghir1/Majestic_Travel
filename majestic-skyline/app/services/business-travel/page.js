'use client';
import {
  Plane,
  BedDouble,
  Users,
  Briefcase,
  Hotel,
  Calendar,
  DollarSign,
  ShieldCheck,
  LayoutList,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CorporateTravelSolutions() {
  return (
    <div className="pt-60 pb-24 bg-[#f2f2f7] mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/business-travel.jpeg"
          alt="Corporate Travel Solutions"
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Corporate Travel Solutions from Dubai
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="space-y-8 container mx-auto px-5 mb-20 text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-[#1c355e]">
          Smart Business Travel Services for Companies Based in the UAE
        </h2>
        <p>
          Majestic Skyline offers specialized corporate travel services designed for businesses, government delegations, and professionals traveling from Dubai. Whether you're sending a team to a trade fair in Germany, hosting clients in Asia, or organizing an executive retreat in the Mediterranean, our team takes care of every travel detail—accurately, efficiently, and discreetly.
        </p>
        <p>
          From flight bookings and hotel reservations to conference coordination and airport transfers, our Dubai-based agency manages end-to-end corporate travel with unmatched reliability. We serve startups, SMEs, and large enterprises across various industries.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Why Companies in Dubai Choose Majestic Skyline for Business Travel
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>Personalized support from a dedicated corporate travel advisor</li>
          <li>Fast, cost-effective bookings based on business schedules</li>
          <li>Streamlined group travel arrangements</li>
          <li>Custom billing, reporting, and expense tracking</li>
          <li>Strong partnerships with international airlines and hotel chains</li>
          <li>Emergency support and last-minute rebooking solutions</li>
        </ul>

        {/* FAQ Section */}
        <section className="mb-24 container mx-auto px-5">
          <h3 className="text-2xl font-semibold mb-6 text-[#1c355e]">FAQs</h3>
          <div className="space-y-4">
            {[
              {
                q: "How early should I start planning?",
                a: "We recommend at least 4–8 weeks in advance, more for complex trips.",
              },
              {
                q: "Can I book if I'm not in Dubai?",
                a: "Absolutely. We work with international clients via secure online channels.",
              },
              {
                q: "What if I need to cancel?",
                a: "We assist with cancellations based on provider policies and suggest flexible bookings.",
              },
              {
                q: "Do you provide travel insurance?",
                a: "Yes, we offer tailored travel insurance options for corporate clients, including medical and trip cancellation coverage.",
              },
              {
                q: "Can you handle large corporate group bookings?",
                a: "Yes, we specialize in managing large group bookings, including conference delegations, team retreats, and international exhibitions.",
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
      </section>

      {/* CTA */}
      <div className="text-center container mx-auto px-5 max-w-2xl">
        <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
          Make Corporate Travel Smarter, Not Harder
        </h4>
        <p className="mb-6 text-[#8b7866]">
          Talk to our corporate travel team today and simplify how your business moves.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white px-6 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
        >
          Book a Consultation
        </Link>
      </div>
    </div>
  );
}

"use client";
import { Plane, Globe, MessageSquare, RefreshCcw, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TravelPlanning() {
  return (
    <div className="pt-60 bg-[#f2f2f7] pb-24 mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/custom-travel.jpg"
          alt="Custom Travel Planning"
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/50  flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Custom Planning Services
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="space-y-6 container mx-auto px-5 mb-16">
        <h2 className="text-3xl font-bold text-[#1c355e]">
          Custom Travel Planning from Dubai to the World
        </h2>
        <p>
          Majestic Skyline offers complete travel planning services from our
          base in Dubai, helping travelers create unforgettable experiences
          across the globe. Whether you're seeking a relaxing beach break, an
          adventurous mountain escape, or a culturally rich city tour, we manage
          every detail.
        </p>
        <p>
          Smart planning saves time, reduces stress, and lets you focus on what
          really matters — your experience.
        </p>
      </section>

      {/* Why Choose */}
      <section className="space-y-6 mb-16 container mx-auto px-5">
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Why Choose Majestic Skyline?
        </h3>
        <p>
          Travel planning can feel like work. We simplify the process by
          handling flights, hotels, activities, budgeting, and more. From Dubai,
          we serve clients globally with tailored, seamless travel solutions.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-20 container mx-auto px-5">
        <h3 className="text-2xl font-semibold mb-6 text-[#1c355e]">
          Key Features
        </h3>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Personalized Itinerary Design",
              icon: <Plane size={56} className="text-[#1c355e]" />,
              text: "No two travelers are the same. Whether you want a food tour in Asia or a historical trip in Europe, we plan accordingly.",
            },
            {
              title: "Expert Destination Recommendations",
              icon: <Globe size={56} className="text-[#1c355e]" />,
              text: "Not sure where to go? We match you with ideal destinations based on your interests, budget, and visa needs.",
            },
            {
              title: "Real-Time Consultation from Dubai",
              icon: <MessageSquare size={56} className="text-[#1c355e]" />,
              text: "Meet us in person or virtually. Get real-time support and updates throughout your planning process.",
            },
            {
              title: "Flexible Planning Options",
              icon: <RefreshCcw size={56} className="text-[#1c355e]" />,
              text: "Last-minute change? We stay flexible, adjusting plans and bookings even while you travel.",
            },
            {
              title: "Budget Optimization",
              icon: <Wallet size={56} className="text-[#1c355e]" />,
              text: "We help you maximize your budget — from flights to fine dining — without compromising comfort.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className=" rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-[#1c355e] mb-2">
                {feature.title}
              </h4>
              <p className="text-[#8b7866]">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-20 container mx-auto px-5">
        <h3 className="text-2xl font-semibold mb-6 text-[#1c355e]">
          How It Works
        </h3>
        <ol className="list-decimal list-inside space-y-4 text-[#8b7866]">
          <li>
            <strong>Consultation:</strong> We start with a chat about your
            travel goals, budget, and preferences.
          </li>
          <li>
            <strong>Proposal:</strong> We send you a detailed travel proposal
            with options and costs.
          </li>
          <li>
            <strong>Finalize:</strong> You approve the plan, and we book
            everything and deliver your itinerary.
          </li>
          <li>
            <strong>Support:</strong> Enjoy 24/7 travel support, updates, and
            flexibility during your trip.
          </li>
        </ol>
      </section>

      {/* Types of Trips */}
      <section className="mb-20 container mx-auto px-5">
        <h3 className="text-2xl font-semibold mb-6 text-[#1c355e]">
          Types of Trips We Plan
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
          <li>Leisure Holidays</li>
          <li>Luxury Escapes</li>
          <li>Adventure Travel</li>
          <li>Family-Friendly Itineraries</li>
          <li>Cultural & Historical Tours</li>
        </ul>
      </section>

      {/* FAQ with transition */}
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

      {/* CTA */}
      <div className="text-center container mx-auto px-5 max-w-2xl">
        <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
          Start Planning Today
        </h4>
        <p className="mb-6 text-[#8b7866]">
          Let us create your dream trip with care, clarity, and confidence.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white px-6 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
        >
          Request a Free Consultation
        </Link>
      </div>
    </div>
  );
}

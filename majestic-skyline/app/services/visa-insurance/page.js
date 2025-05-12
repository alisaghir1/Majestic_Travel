"use client";
import { CreditCard, Briefcase, Shield, MapPin, ClipboardList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VisaAndInsuranceServices() {
  return (
    <div className="pt-60 pb-24 bg-[#f2f2f7] mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/visa-insurance.jpg"
          alt="Visa & Insurance Services"
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Visa & Insurance Services for Dubai-Based Travelers
          </h1>
        </div>
      </div>

      {/* Full Content Section */}
      <section className="space-y-8 container mx-auto px-5 mb-20 text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-[#1c355e]">
          Comprehensive Visa and Travel Insurance Services for Dubai-Based Travelers
        </h2>
        <p>
          Majestic Skyline provides complete visa and travel insurance services from our Dubai office, helping travelers secure essential documentation and protection before every trip. Whether you&#39;re visiting Europe, the United States, Asia, or Africa, our team simplifies the visa application process and offers reliable insurance solutions to protect your journey.
        </p>
        <p>
          With ever-changing visa regulations, long waiting times, and complex forms, applying on your own can be frustrating. Our Dubai-based visa experts assist with every step, reducing the risk of rejection and saving time. In addition, our travel insurance plans cover medical emergencies, trip cancellations, baggage loss, and more—giving you peace of mind before takeoff.
        </p>

        {/* Why Dubai Residents Choose Majestic Skyline */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Why Dubai Residents Choose Majestic Skyline for Visa and Insurance Needs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <MapPin size={40} />, text: "Local service desk for document collection and consultation" },
            { icon: <CreditCard size={40} />, text: "Visa support for tourism, business, transit, and work-related travel" },
            { icon: <Briefcase size={40} />, text: "Multilingual staff familiar with embassy requirements" },
            { icon: <Shield size={40} />, text: "Access to affordable, comprehensive travel insurance policies" },
            { icon: <ClipboardList size={40} />, text: "Emergency support throughout the visa and travel process" },
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="p-4  rounded-lg shadow-lg flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-[#8b7866]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Visa Assistance Services */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Visa Assistance Services in Dubai
        </h3>
        <div className="space-y-8">
          {[
            {
              title: "Tourist Visa Application Support",
              description:
                "Planning a vacation? Majestic Skyline helps Dubai-based travelers obtain tourist visas for popular destinations such as the Schengen zone, the UK, USA, Japan, Australia, and more.",
              icon: <MapPin size={40} />,
            },
            {
              title: "Business Visa Coordination",
              description:
                "Attending a conference, meeting clients, or joining a trade fair abroad? We support business visa applications with official invitation letters, hotel confirmations, and flight details.",
              icon: <Briefcase size={40} />,
            },
            {
              title: "Transit Visa Services",
              description:
                "Many countries require transit visas even for short layovers. We help travelers flying through airports like London Heathrow, Frankfurt, or Toronto prepare the correct documents.",
              icon: <CreditCard size={40} />,
            },
            {
              title: "Work Visa and Long-Stay Visa Guidance",
              description:
                "Applying for a work permit or long-stay visa can be complicated. Our team supports job seekers and expatriates relocating from Dubai by coordinating embassy requirements.",
              icon: <Shield size={40} />,
            },
            {
              title: "Visa for Families and Groups",
              description:
                "We handle visa applications for families traveling together. That includes preparing sponsor letters, marriage certificates, children's birth documents, and more.",
              icon: <ClipboardList size={40} />,
            },
            {
              title: "Urgent Visa Application Handling",
              description:
                "Need a visa on short notice? We manage express visa processing whenever possible and maintain strong relationships with local embassies and visa centers.",
              icon: <CreditCard size={40} />,
            },
          ].map((service, i) => (
            <div key={i} className="flex items-start space-x-6">
              <div className="p-4  rounded-lg shadow-lg flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#1c355e]">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Countries We Support for Visa Applications */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Countries We Support for Visa Applications
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "France", "Germany", "Italy", "Netherlands", "Spain", "Switzerland", "Greece", "UK", "USA", "Canada", "Japan", "South Korea", "China", "Thailand", "India", "Saudi Arabia", "Oman", "Kenya", "South Africa", "Morocco"
          ].map((country, i) => (
            <div key={i} className=" p-4 rounded-lg shadow-md text-center">
              {country}
            </div>
          ))}
        </div>

        {/* Our Visa Process */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Our Visa Process in 5 Simple Steps
        </h3>
        <div className="space-y-8">
          {[
            { step: "Step 1: Free Consultation", description: "We begin with a consultation to understand your destination, travel purpose, and timeline." },
            { step: "Step 2: Application Preparation", description: "Our visa team completes application forms, reviews your paperwork, and prepares required documents." },
            { step: "Step 3: Appointment Booking", description: "We schedule your embassy or VFS appointment and offer priority slots when available." },
            { step: "Step 4: Pre-Interview Briefing", description: "Guidance on dress code, expected questions, and tips for a successful interview." },
            { step: "Step 5: Tracking and Passport Collection", description: "Once submitted, we monitor your application status and arrange passport collection." },
          ].map((step, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="p-4  rounded-lg shadow-lg flex items-center justify-center">
                <ClipboardList size={40} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#1c355e]">{step.step}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Insurance Services */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Travel Insurance Services in Dubai
        </h3>
        <p>
          Traveling without insurance can lead to major costs in case of medical emergencies or cancellations. Majestic Skyline offers comprehensive travel insurance policies including emergency medical care, trip cancellation, lost baggage, and more.
        </p>

        {/* Insurance Plan Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Schengen Visa-Compliant Insurance", description: "We offer Schengen-approved travel insurance from licensed UAE providers." },
            { title: "Annual Multi-Trip Insurance", description: "Annual plans covering multiple trips throughout the year for frequent travelers." },
            { title: "Family and Student Travel Coverage", description: "Custom policies for family vacations and students studying abroad." },
          ].map((plan, i) => (
            <div key={i} className=" p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-[#1c355e]">{plan.title}</h4>
              <p>{plan.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center container mx-auto px-5 max-w-2xl">
          <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
            Travel Confidently with the Right Documents and Coverage
          </h4>
          <p className="mb-6 text-[#8b7866]">
            Majestic Skyline helps Dubai-based travelers secure visas and insurance with ease and accuracy. Whether you&#39;re planning a family trip, attending a global summit, or heading abroad for education, we ensure you&#39;re prepared before departure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white py-3 px-6 rounded-full text-lg font-semibold transition-colors duration-300 ease-in-out"
          >
            Contact Us For Expert Visa Guidance.
          </Link>
        </div>
      </section>
    </div>
  );
}

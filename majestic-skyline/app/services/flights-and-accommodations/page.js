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
import { useLanguage } from "@/app/contexts/LanguageContext";
import { RTLWrapper } from "@/app/components/RTLWrapper";
import { flightsAccommodationsTranslations } from "@/app/translations/services/flights-and-accommodations";

export default function FlightsAndAccommodation() {
  const { language } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let value = flightsAccommodationsTranslations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <RTLWrapper>
    <div className="pt-60 pb-24 bg-[#f2f2f7] mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/flight-and-accommodation.jpg"
          alt={t('heroImageAlt')}
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            {t('heroTitle')}
          </h1>
        </div>
      </div>

      {/* Full Content Section */}
      <section className="space-y-8 container mx-auto px-5 mb-20 text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-[#1c355e]">
          {t('mainTitle')}
        </h2>
        <p>
          {t('mainParagraph1')}
        </p>
        <p>
          {t('mainParagraph2')}
        </p>
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('solutionTitle')}
        </h3>
        <p>
          {t('solutionParagraph')}
        </p>
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('whyChooseTitle')}
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          {(t('whyChooseItems') || []).map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> {item.description}
            </li>
          ))}
        </ul>
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('faqTitle')}
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          {(t('faqItems') || []).map((faq, index) => (
            <li key={index}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>
        <p className="pt-4">
          {t('conclusionParagraph')}
        </p>
      </section>

      {/* CTA */}
      <div className="text-center container mx-auto px-5 max-w-2xl">
        <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
          {t('ctaTitle')}
        </h4>
        <p className="mb-6 text-[#8b7866]">
          {t('ctaDescription')}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white px-6 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
        >
          {t('ctaButton')}
        </Link>
      </div>
    </div>
    </RTLWrapper>
  );
}

"use client";
import { Plane, Globe, MessageSquare, RefreshCcw, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { RTLWrapper } from "@/app/components/RTLWrapper";
import { customTravelTranslations } from "@/app/translations/services/custom-travel";

export default function TravelPlanning() {
  const { language } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let value = customTravelTranslations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
  return (
    <RTLWrapper>
    <div className="pt-60 bg-[#f2f2f7] pb-24 mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/custom-travel.jpg"
          alt={t('heroImageAlt')}
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/50  flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            {t('heroTitle')}
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="space-y-6 container mx-auto px-5 mb-16">
        <h2 className="text-3xl font-bold text-[#1c355e]">
          {t('introTitle')}
        </h2>
        <p>
          {t('introParagraph1')}
        </p>
        <p>
          {t('introParagraph2')}
        </p>
      </section>

      {/* Why Choose */}
      <section className="space-y-6 mb-16 container mx-auto px-5">
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('whyChooseTitle')}
        </h3>
        <p>
          {t('whyChooseDescription')}
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-20 container mx-auto px-5">
        <h3 className="text-2xl font-semibold mb-6 text-[#1c355e]">
          {t('keyFeaturesTitle')}
        </h3>
        <div className="grid md:grid-cols-2 gap-10">
          {(t('features') || []).map((feature, index) => (
            <div
              key={index}
              className=" rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-300"
            >
              <div className="mb-4">
                {index === 0 && <Plane size={56} className="text-[#1c355e]" />}
                {index === 1 && <Globe size={56} className="text-[#1c355e]" />}
                {index === 2 && <MessageSquare size={56} className="text-[#1c355e]" />}
                {index === 3 && <RefreshCcw size={56} className="text-[#1c355e]" />}
                {index === 4 && <Wallet size={56} className="text-[#1c355e]" />}
              </div>
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
          {t('processTitle')}
        </h3>
        <ol className="list-decimal list-inside space-y-4 text-[#8b7866]">
          {(t('process') || []).map((step, index) => (
            <li key={index}>
              <strong>{step.title}</strong> {step.desc}
            </li>
          ))}
        </ol>
      </section>

      {/* Types of Trips */}
      <section className="mb-20 container mx-auto px-5">
        <h3 className="text-2xl font-semibold mb-6 text-[#1c355e]">
          {t('tripTypesTitle')}
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
          {(t('tripTypes') || []).map((tripType, index) => (
            <li key={index}>{tripType}</li>
          ))}
        </ul>
      </section>

      {/* FAQ with transition */}
      <section className="mb-24 container mx-auto px-5">
        <h3 className="text-2xl font-semibold mb-6 text-[#1c355e]">{t('faqTitle')}</h3>
        <div className="space-y-4">
          {(t('faq') || []).map((faq, i) => (
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

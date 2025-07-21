"use client";
import { Plane, BedDouble, Heart, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { RTLWrapper } from "@/app/components/RTLWrapper";
import { romanticEscapesTranslations } from "@/app/translations/services/romantic-escapes";

export default function HoneymoonsAndRomanticGetaways() {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let result = romanticEscapesTranslations[language];
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  };
  return (
    <RTLWrapper>
    <div className="pt-60 pb-24 bg-[#f2f2f7] mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/honeymoon.jpg"
          alt={t('hero.description')}
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            {t('hero.title')}
          </h1>
        </div>
      </div>

      {/* Full Content Section */}
      <section className="space-y-8 container mx-auto px-5 mb-20 text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-[#1c355e]">
          {t('mainTitle')}
        </h2>
        <p>
          {t('intro.paragraph1')}
        </p>
        <p>
          {t('intro.paragraph2')}
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('whyChooseUs.title')}
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          {t('whyChooseUs.reasons').map((reason, index) => (
            <li key={index}><strong>{reason}</strong></li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('customPackages.title')}
        </h3>
        <p>
          {t('customPackages.description')}
        </p>

        <h4 className="text-xl font-semibold text-[#1c355e]">
          {t('customPackages.types.tropical.title')}
        </h4>
        <p>
          {t('customPackages.types.tropical.description')}
        </p>

        <h4 className="text-xl font-semibold text-[#1c355e]">
          {t('customPackages.types.cultural.title')}
        </h4>
        <p>
          {t('customPackages.types.cultural.description')}
        </p>

        <h4 className="text-xl font-semibold text-[#1c355e]">
          {t('customPackages.types.nature.title')}
        </h4>
        <p>
          {t('customPackages.types.nature.description')}
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('privateExperiences.title')}
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          {t('privateExperiences.experiences').map((experience, index) => (
            <li key={index}><strong>{experience.title}</strong> {experience.description}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('budgetOptions.title')}
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          {t('budgetOptions.options').map((option, index) => (
            <li key={index}><strong>{option.title}</strong> {option.description}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('visaSupport.title')}
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          {t('visaSupport.services').map((service, index) => (
            <li key={index}><strong>{service.title}</strong> {service.description}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('inspiration.title')}
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          {t('inspiration.destinations').map((destination, index) => (
            <li key={index}><strong>{destination.title}</strong> {destination.description}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('faq.title')}
        </h3>
        <div className="space-y-4">
          {t('faq.questions').map((faq, i) => (
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
          {t('cta.title')}
        </h4>
        <p className="mb-6 text-[#8b7866]">
          {t('cta.subtitle')}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white py-3 px-6 rounded-full text-lg font-semibold transition-colors duration-300 ease-in-out"
        >
          {t('cta.button')}
        </Link>
      </div>
    </div>
    </RTLWrapper>
  );
}

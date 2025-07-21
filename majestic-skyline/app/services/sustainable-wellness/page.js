"use client";
import { Leaf, HeartPulse, Globe, Yoga, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { RTLWrapper } from "@/app/components/RTLWrapper";
import { sustainableWellnessTranslations } from "@/app/translations/services/sustainable-wellness";

export default function SustainableAndWellnessTravel() {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let result = sustainableWellnessTranslations[language];
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
          src="/services/sustainble-travel.jpg"
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

      {/* Content */}
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

        <h3 className="text-2xl font-semibold text-[#1c355e]">{t('sustainableTravel.title')}</h3>
        <h4 className="text-xl font-semibold text-[#1c355e]">{t('sustainableTravel.ecoDestinations.title')}</h4>
        <p>
          {t('sustainableTravel.ecoDestinations.description')}
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">{t('sustainableTravel.greenHotels.title')}</h4>
        <p>
          {t('sustainableTravel.greenHotels.description')}
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">{t('sustainableTravel.communityTravel.title')}</h4>
        <p>
          {t('sustainableTravel.communityTravel.description')}
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">{t('sustainableTravel.lowImpact.title')}</h4>
        <p>
          {t('sustainableTravel.lowImpact.description')}
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">{t('sustainableTravel.carbonConscious.title')}</h4>
        <p>
          {t('sustainableTravel.carbonConscious.description')}
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">{t('wellnessExperiences.title')}</h3>
        <h4 className="text-xl font-semibold text-[#1c355e]">{t('wellnessExperiences.yogaRetreats.title')}</h4>
        <p>
          {t('wellnessExperiences.yogaRetreats.description')}
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">{t('wellnessExperiences.detoxHolidays.title')}</h4>
        <p>
          {t('wellnessExperiences.detoxHolidays.description')}
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">{t('wellnessExperiences.mindfulnessRetreats.title')}</h4>
        <p>
          {t('wellnessExperiences.mindfulnessRetreats.description')}
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">{t('wellnessExperiences.natureHealing.title')}</h4>
        <p>
          {t('wellnessExperiences.natureHealing.description')}
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">{t('wellnessExperiences.holisticHealth.title')}</h4>
        <p>
          {t('wellnessExperiences.holisticHealth.description')}
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">{t('destinations.title')}</h3>
        <ul className="list-disc pl-6 space-y-3">
          {t('destinations.locations').map((location, index) => (
            <li key={index}><strong>{location.name}</strong> {location.description}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">{t('planningProcess.title')}</h3>
        <ol className="list-decimal pl-6 space-y-3">
          {t('planningProcess.steps').map((step, index) => (
            <li key={index}><strong>{step.title}</strong> {step.description}</li>
          ))}
        </ol>

        <h3 className="text-2xl font-semibold text-[#1c355e]">{t('whyTravel.title')}</h3>
        <ul className="list-disc pl-6 space-y-3">
          {t('whyTravel.reasons').map((reason, index) => (
            <li key={index}><strong>{reason.title}</strong> {reason.description}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">{t('faq.title')}</h3>
        <div className="space-y-4">
          {t('faq.questions').map((faq, i) => (
            <details
              key={i}
              className="group p-5 border border-gray-300 rounded-lg transition-all duration-300"
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

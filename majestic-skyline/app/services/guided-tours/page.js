"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { RTLWrapper } from "@/app/components/RTLWrapper";
import { guidedToursTranslations } from "@/app/translations/services/guided-tours";

export default function GuidedToursAndExperiences() {
  const { language } = useLanguage();

  const t = (key) => {
    return guidedToursTranslations[language]?.[key] || key;
  };

  return (
    <RTLWrapper>
    <div className="pt-60 bg-[#f2f2f7] pb-24 mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/guided-tours.jpg"
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

      {/* Main Content */}
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
          {t('whyChooseTitle')}
        </h3>

        {/* Grid layout for this section only */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t('whyChooseItems').map((item, index) => (
            <div key={index} className=" p-5 rounded-xl shadow-sm border">
              <p>● {item}</p>
            </div>
          ))}
        </div>

        {/* Rest of the content */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('culturalTitle')}
        </h3>
        <p>
          <strong>{t('localGuides')}</strong> {t('localGuidesDesc')}
        </p>
        <p>
          <strong>{t('monuments')}</strong> {t('monumentsDesc')}
        </p>
        <p>
          <strong>{t('museums')}</strong> {t('museumsDesc')}
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('foodTitle')}
        </h3>
        <p>
          <strong>{t('streetFood')}</strong> {t('streetFoodDesc')}
        </p>
        <p>
          <strong>{t('cookingClasses')}</strong> {t('cookingClassesDesc')}
        </p>
        <p>
          <strong>{t('marketTours')}</strong> {t('marketToursDesc')}
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('natureTitle')}
        </h3>
        <p>
          <strong>{t('safaris')}</strong> {t('safarisDesc')}
        </p>
        <p>
          <strong>{t('birdwatching')}</strong> {t('birdwatchingDesc')}
        </p>
        <p>
          <strong>{t('ecoTours')}</strong> {t('ecoToursDesc')}
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('adventureTitle')}
        </h3>
        <p>
          <strong>{t('hiking')}</strong> {t('hikingDesc')}
        </p>
        <p>
          <strong>{t('waterSports')}</strong> {t('waterSportsDesc')}
        </p>
        <p>
          <strong>{t('extremeSports')}</strong> {t('extremeSportsDesc')}
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('familyTitle')}
        </h3>
        <p>
          <strong>{t('themeParks')}</strong> {t('themeParksDesc')}
        </p>
        <p>
          <strong>{t('animalEncounters')}</strong> {t('animalEncountersDesc')}
        </p>
        <p>
          <strong>{t('workshops')}</strong> {t('workshopsDesc')}
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('vipTitle')}
        </h3>
        <p>
          <strong>{t('exclusiveAccess')}</strong> {t('exclusiveAccessDesc')}
        </p>
        <p>
          <strong>{t('personalDrivers')}</strong> {t('personalDriversDesc')}
        </p>
        <p>
          <strong>{t('luxuryTrips')}</strong> {t('luxuryTripsDesc')}
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('choosingTitle')}
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          {t('criteria').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('faqTitle')}
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          {t('faqItems').map((faq, index) => (
            <li key={index}>
              <strong>{faq.question}</strong> {faq.answer}
            </li>
          ))}
        </ul>

        <p className="pt-4">
          {t('ctaParagraph1')}
        </p>
        <p>
          {t('ctaParagraph2')}
        </p>
      </section>

      {/* CTA */}
      <div className="text-center container mx-auto px-5 max-w-2xl">
        <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
          {t('ctaTitle')}
        </h4>
        <p className="mb-6 text-[#8b7866]">
          {t('ctaSubtitle')}
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

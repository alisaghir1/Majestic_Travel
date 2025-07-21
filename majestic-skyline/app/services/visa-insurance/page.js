"use client";
import { CreditCard, Briefcase, Shield, MapPin, ClipboardList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { RTLWrapper } from "@/app/components/RTLWrapper";
import { visaInsuranceTranslations } from "@/app/translations/services/visa-insurance";

export default function VisaAndInsuranceServices() {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let result = visaInsuranceTranslations[language];
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
          src="/services/visa-insurance.jpg"
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

        {/* Why Dubai Residents Choose Majestic Skyline */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('whyChooseUs.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t('whyChooseUs.reasons').map((reason, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="p-4  rounded-lg shadow-lg flex items-center justify-center">
                {i === 0 && <MapPin size={40} />}
                {i === 1 && <CreditCard size={40} />}
                {i === 2 && <Briefcase size={40} />}
                {i === 3 && <Shield size={40} />}
                {i === 4 && <ClipboardList size={40} />}
              </div>
              <p className="text-[#8b7866]">{reason}</p>
            </div>
          ))}
        </div>

        {/* Visa Assistance Services */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('visaServices.title')}
        </h3>
        <div className="space-y-8">
          {t('visaServices.services').map((service, i) => (
            <div key={i} className="flex items-start space-x-6">
              <div className="p-4 rounded-lg shadow-lg flex items-center justify-center">
                {i === 0 && <MapPin size={40} />}
                {i === 1 && <Briefcase size={40} />}
                {i === 2 && <CreditCard size={40} />}
                {i === 3 && <Shield size={40} />}
                {i === 4 && <ClipboardList size={40} />}
                {i === 5 && <CreditCard size={40} />}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#1c355e] mb-2">
                  {service.title}
                </h4>
                <p className="text-[#8b7866]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Countries We Support for Visa Applications */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('supportedCountries.title')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {t('supportedCountries.countries').map((country, i) => (
            <div key={i} className=" p-4 rounded-lg shadow-md text-center">
              {country}
            </div>
          ))}
        </div>

        {/* Our Visa Process */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('visaProcess.title')}
        </h3>
        <div className="space-y-8">
          {t('visaProcess.steps').map((step, i) => (
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
          {t('insuranceServices.title')}
        </h3>
        <p>
          {t('insuranceServices.description')}
        </p>

        {/* Insurance Plan Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t('insuranceServices.plans').map((plan, i) => (
            <div key={i} className=" p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-[#1c355e]">{plan.title}</h4>
              <p>{plan.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center container mx-auto px-5 max-w-2xl">
          <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
            {t('cta.title')}
          </h4>
          <p className="mb-6 text-[#8b7866]">
            {t('cta.description')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white py-3 px-6 rounded-full text-lg font-semibold transition-colors duration-300 ease-in-out"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
    </RTLWrapper>
  );
}

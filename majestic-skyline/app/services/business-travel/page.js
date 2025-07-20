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
import { useLanguage } from '../../contexts/LanguageContext';
import { RTLWrapper } from '../../components/RTLWrapper';
import { businessTravelTranslations } from '../../translations/services/business-travel';

export default function CorporateTravelSolutions() {
  const { language } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let value = businessTravelTranslations[language];
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
            src="/services/business-travel.jpeg"
            alt={t('heroAlt')}
            fill
            className="object-cover rounded-xl"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
              {t('heroTitle')}
            </h1>
          </div>
        </div>

        {/* Content */}
        <section className="space-y-8 container mx-auto px-5 mb-20 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold text-[#1c355e]">
            {t('mainTitle')}
          </h2>
          <p>
            {t('paragraph1')}
          </p>
          <p>
            {t('paragraph2')}
          </p>

          <h3 className="text-2xl font-semibold text-[#1c355e]">
            {t('whyChooseUsTitle')}
          </h3>
          <ul className="list-disc pl-6 space-y-3">
            {t('whyChooseUsPoints').map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* FAQ Section */}
          <section className="mb-24 container mx-auto px-5">
            <h3 className="text-2xl font-semibold mb-6 text-[#1c355e]">{t('faqTitle')}</h3>
            <div className="space-y-4">
              {t('faqs').map((faq, i) => (
                <details
                  key={i}
                  className="group p-5 border border-gray-300 rounded-lg transition-all duration-300 "
                >
                  <summary className="cursor-pointer font-medium text-[#1c355e] text-lg group-open:mb-2 transition-all duration-300">
                    {faq.question}
                  </summary>
                  <p className="text-[#8b7866] opacity-0 group-open:opacity-100 transition-opacity duration-500">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
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
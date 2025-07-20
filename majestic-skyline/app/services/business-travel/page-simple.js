'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { RTLWrapper } from '../../components/RTLWrapper';
import { businessTravelTranslations } from '../../translations/services/business-travel';

export default function BusinessTravelPage() {
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
      <div className="pt-20 pb-24 bg-[#f2f2f7] mx-auto text-gray-800">
        {/* Hero Section */}
        <div className="relative h-[50vh] mb-16 container mx-auto px-5">
          <Image
            src="/services/business-travel.jpg"
            alt={t('heroAlt')}
            fill
            className="object-cover rounded-xl"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {t('heroTitle')}
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="container mx-auto px-5 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c355e] mb-6">
              {t('mainTitle')}
            </h2>
            <p className="text-lg text-[#8b7866] mb-4 leading-relaxed">
              {t('paragraph1')}
            </p>
            <p className="text-lg text-[#8b7866] mb-8 leading-relaxed">
              {t('paragraph2')}
            </p>
          </div>
        </section>

        {/* Simple CTA Section */}
        <section className="container mx-auto px-5 mb-16">
          <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1c355e] mb-4">
              {t('ctaTitle')}
            </h3>
            <p className="text-lg text-[#8b7866] mb-6">
              {t('ctaDescription')}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {t('ctaButton')}
            </Link>
          </div>
        </section>
      </div>
    </RTLWrapper>
  );
}

"use client";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { RTLWrapper } from "../components/RTLWrapper";

export default function AboutUs() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full pb-20 pt-60 bg-[#f4f4f9] text-[#1c355e]">
      <div className=" mx-auto px-5">

        {/* Section: Our Story */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Section: Our Story */}
        <div className="mb-20 text-center">
          <RTLWrapper>
            <h2 className="text-4xl xl:text-5xl font-bold text-[#8b7866] mb-4 text-center">
              {t('aboutPage.ourStoryTitle')}
            </h2>
          </RTLWrapper>
          {/* Using Next.js Image component */}
          <div className="mt-12 relative rounded-lg shadow-lg w-full h-[500px]">
            <Image 
              src="/about.jpg" 
              alt={t('aboutPage.altText')}
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <RTLWrapper>
            <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4 mt-20">
              {t('aboutPage.beginningTitle')}
            </h3>
            <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#8b7866] text-center">
              {t('aboutPage.beginningDescription')}
            </p>
          </RTLWrapper>

        </div>

        {/* Section: Why Dubai */}
        <div className="mb-20">
          <RTLWrapper>
            <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4">
              {t('aboutPage.dubaiTitle')}
            </h3>
            <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#8b7866] text-center">
              {t('aboutPage.dubaiDescription')}
            </p>
          </RTLWrapper>
        </div>
      </div>

        {/* Section: How We Grew */}
        <div className="mb-20">
          <RTLWrapper>
            <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4">
              {t('aboutPage.growthTitle')}
            </h3>
            <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#8b7866] text-center">
              {t('aboutPage.growthDescription')}
            </p>
          </RTLWrapper>
        </div>

        {/* Section: What We Offer Today */}
        <div className="mb-20">
          <RTLWrapper>
            <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4">
              {t('aboutPage.todayTitle')}
            </h3>
            <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#8b7866] text-center">
              {t('aboutPage.todayDescription')}
            </p>
          </RTLWrapper>
        </div>

        {/* Section: Client Stories */}
        <div className="mb-20">
          <RTLWrapper>
            <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4">
              {t('aboutPage.clientStoriesTitle')}
            </h3>
            <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#8b7866] text-center">
              {t('aboutPage.clientStoriesDescription')}
            </p>
          </RTLWrapper>
        </div>

        {/* Section: Vision & Mission */}
        <div className="mb-20">
          <RTLWrapper>
            <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4">
              {t('aboutPage.visionMissionTitle')}
            </h3>
            <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#8b7866] text-center">
              {t('aboutPage.visionMissionDescription')}
            </p>
          </RTLWrapper>
        </div>

        {/* Section: Our Core Values */}
        <div className="mb-20">
          <RTLWrapper>
            <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4">
              {t('aboutPage.coreValuesTitle')}
            </h3>
            <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
            <ul className="text-lg max-w-4xl mx-auto list-disc leading-relaxed text-[#8b7866] space-y-4 px-5">
              <li>
                <strong>{t('aboutPage.authenticityTitle')}</strong> {t('aboutPage.authenticityDescription')}
              </li>
              <li>
                <strong>{t('aboutPage.reliabilityTitle')}</strong> {t('aboutPage.reliabilityDescription')}
              </li>
              <li>
                <strong>{t('aboutPage.flexibilityTitle')}</strong> {t('aboutPage.flexibilityDescription')}
              </li>
              <li>
                <strong>{t('aboutPage.cultureRespectTitle')}</strong> {t('aboutPage.cultureRespectDescription')}
              </li>
              <li>
                <strong>{t('aboutPage.serviceSalesTitle')}</strong> {t('aboutPage.serviceSalesDescription')}
              </li>
            </ul>
          </RTLWrapper>
        </div>
      </div>
    </section>
  );
}

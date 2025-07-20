"use client";
import { PlaneTakeoff } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { RTLWrapper } from "./RTLWrapper";

export default function IntroSection() {
  const { t } = useLanguage();

  return (
    <RTLWrapper>
      <section className="w-full py-28  text-center">
        <div className="container mx-auto px-5 flex flex-col items-center gap-8">
          {/* Large Airplane Icon */}
          <div className="bg-[#1c355e] text-white p-6 rounded-full shadow-lg">
            <PlaneTakeoff size={64} />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#1c355e] leading-tight max-w-4xl">
            {t('introSection.title')} <span className="text-[#8b7866]">{t('introSection.titleHighlight')}</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#333] leading-relaxed max-w-3xl">
            {t('introSection.description')}
          </p>
        </div>
      </section>
    </RTLWrapper>
  );
}

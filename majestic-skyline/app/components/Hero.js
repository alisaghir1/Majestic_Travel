"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { RTLWrapper } from "./RTLWrapper";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <RTLWrapper>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/main.jpg"
            alt="Hero Background"
            className="object-cover"
            fill
            priority
          />
        </div>

        {/* Overlay */}
         <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full text-center text-white px-4">
          <div className="flex items-center flex-col">
            <h1 className="text-4xl text-[#8b7866] md:text-6xl font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              {t('hero.subtitle')}
            </p>
            <Link
              href="/destinations"
              className="bg-[#1c355e] hover:bg-[#8b7866] text-white px-6 py-5 rounded-xl text-lg transition duration-200"
            >
              {t('hero.buttonText')}
            </Link>
          </div>
        </div>
      </section>
    </RTLWrapper>
  );
}

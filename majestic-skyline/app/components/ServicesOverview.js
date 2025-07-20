
"use client";
import { Plane, Hotel, Map, Briefcase, Heart, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { RTLWrapper } from "./RTLWrapper";

export default function ServicesOverview() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Plane size={40} className="text-[#8b7866]" />,
      titleKey: "customTravel",
      descriptionKey: "customTravel",
      href: "/services/custom-travel",
    },
    {
      icon: <Hotel size={40} className="text-[#8b7866]" />,
      titleKey: "flightsHotels",
      descriptionKey: "flightsHotels",
      href: "/services/flights-and-accommodations",
    },
    {
      icon: <Map size={40} className="text-[#8b7866]" />,
      titleKey: "guidedTours",
      descriptionKey: "guidedTours",
      href: "/services/guided-tours",
    },
    {
      icon: <Briefcase size={40} className="text-[#8b7866]" />,
      titleKey: "businessTravel",
      descriptionKey: "businessTravel",
      href: "/services/business-travel",
    },
    {
      icon: <Heart size={40} className="text-[#8b7866]" />,
      titleKey: "romanticEscapes",
      descriptionKey: "romanticEscapes",
      href: "/services/romantic-escapes",
    },
    {
      icon: <ShieldCheck size={40} className="text-[#8b7866]" />,
      titleKey: "visaInsurance",
      descriptionKey: "visaInsurance",
      href: "/services/visa-insurance",
    },
  ];

  return (
    <RTLWrapper>
      <section className="py-20 px-4 bg-[#1c355e]">
        <div className="container mx-auto px-5 text-start">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8b7866] mb-6">{t('servicesOverview.title')}</h2>
          <p className="text-white mb-14  mx-auto md:text-xl">
            {t('servicesOverview.subtitle')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map(({ icon, titleKey, descriptionKey, href }, index) => (
              <Link
                key={index}
                href={href}
                className="group bg-[#f2f2f7] border border-gray-200 rounded-2xl shadow-md p-8 text-left hover:scale-110 hover:shadow-xl transition duration-300 hover:border-[#8b7866]"
              >
                <div className="mb-6">{icon}</div>
                <h3 className="text-2xl font-semibold text-[#1c355e] mb-3 group-hover:underline">
                  {t(`servicesOverview.services.${titleKey}.title`)}
                </h3>
                <p className="text-black text-base leading-relaxed">{t(`servicesOverview.services.${descriptionKey}.description`)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </RTLWrapper>
  );
}

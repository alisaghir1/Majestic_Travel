'use client';
import {
  Car,
  MapPin,
  Shield,
  Clock,
  Star,
  Plane,
  Phone,
  Users,
  Navigation,
  Globe,
  CheckCircle,
  Calendar,
  Coffee,
  Wifi,
  ArrowRight,
  Sparkles,
  Heart,
  Building,
  Bus,
  Route,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from "@/app/contexts/LanguageContext";
import { RTLWrapper } from "@/app/components/RTLWrapper";
import { transportationTranslations } from "@/app/translations/services/transportation";

export default function TransportationServices() {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let result = transportationTranslations[language];
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  };

  const transportTypes = t('transportTypes').map((type, index) => ({
    icon: [
      <Car key="car" className="w-8 h-8" />,
      <Bus key="bus" className="w-8 h-8" />,
      <Plane key="plane" className="w-8 h-8" />,
      <Sparkles key="sparkles" className="w-8 h-8" />
    ][index],
    name: type.name,
    description: type.description,
    features: type.features,
    price: ["120", "80", "100", "150"][index],
    gradient: [
      "from-[#1c355e] to-[#8b7866]",
      "from-[#8b7866] to-[#1c355e]",
      "from-[#1c355e] to-[#2a4a73]",
      "from-[#8b7866] to-[#a68b5b]"
    ][index],
    items: type.items
  }));
  const benefits = t('benefits').map((benefit, index) => ({
    icon: [
      <Navigation key="navigation" className="w-12 h-12" />,
      <Clock key="clock" className="w-12 h-12" />,
      <Shield key="shield" className="w-12 h-12" />,
      <Heart key="heart" className="w-12 h-12" />
    ][index],
    title: benefit.title,
    description: benefit.description,
    color: ["text-[#1c355e]", "text-[#8b7866]", "text-[#1c355e]", "text-[#8b7866]"][index],
    bg: ["bg-blue-100", "bg-amber-100", "bg-blue-50", "bg-amber-50"][index]
  }));

  const process = t('process').map((step, index) => ({
    step: ["01", "02", "03", "04"][index],
    title: step.title,
    desc: step.desc,
    icon: [
      <Calendar key="calendar" className="w-6 h-6" />,
      <CheckCircle key="check" className="w-6 h-6" />,
      <Users key="users" className="w-6 h-6" />,
      <Route key="route" className="w-6 h-6" />
    ][index]
  }));

  const destinations = t('destinations').map((destination, index) => ({
    icon: [
      <Building key="building" className="w-6 h-6" />,
      <Star key="star" className="w-6 h-6" />,
      <MapPin key="mappin" className="w-6 h-6" />,
      <Globe key="globe" className="w-6 h-6" />
    ][index],
    name: destination.name,
    description: destination.description
  }));

  return (
    <RTLWrapper>
    <div className="min-h-screen bg-[#f2f2f7] mt-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c355e] via-[#8b7866] to-[#1c355e] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white rounded-full px-6 py-2 shadow-lg">
                <Car className="w-5 h-5 text-[#1c355e] mr-2" />
                <span className="text-[#1c355e] font-semibold">{t('hero.badge')}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                {t('hero.title')}
                <span className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] bg-clip-text text-transparent"> {t('hero.highlight')}</span>
                <br />{t('hero.subtitle')}
              </h1>
              <p className="text-xl text-[#8b7866] leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  {t('hero.cta1')}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-[#1c355e] text-[#1c355e] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1c355e] hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  {t('hero.cta2')}
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/services/transportation.jpg"
                  alt="Transportation Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1c355e]/20 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black text-[#1c355e]">100+</div>
                <div className="text-[#8b7866]">Destinations</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black text-[#8b7866]">24/7</div>
                <div className="text-[#1c355e]">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              {t('transportHeading.title')} <span className="text-[#8b7866]">{t('transportHeading.highlight')}</span>
            </h2>
            <p className="text-xl text-[#8b7866] max-w-2xl mx-auto">
              {t('transportHeading.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportTypes.map((transport, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Gradient Header */}
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${transport.gradient} rounded-t-3xl`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${transport.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {transport.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{transport.name}</h3>
                  <p className="text-gray-600 mb-4">{transport.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-black text-gray-900">{t('common.aed')} {transport.price}</span>
                    <span className="text-gray-500 ml-2">{t('common.starting')}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {transport.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Vehicle Types */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {transport.items.map((item, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <Link
                    href="/contact"
                    className={`w-full bg-gradient-to-r ${transport.gradient} text-white py-3 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
                  >
                    {t('common.bookNow')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-[#1c355e] to-[#8b7866]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              {t('benefitsHeading.title')}
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t('benefitsHeading.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-24 h-24 ${benefit.bg} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={benefit.color}>
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Covered */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              {t('destinationsHeading.title')} <span className="text-[#8b7866]">{t('destinationsHeading.highlight')}</span>
            </h2>
            <p className="text-xl text-[#8b7866] max-w-2xl mx-auto">
              {t('destinationsHeading.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {destinations.map((destination, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#1c355e] to-[#8b7866] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {destination.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1c355e] mb-2">{destination.name}</h3>
                <p className="text-[#8b7866]">{destination.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              {t('processHeading.title')} <span className="text-[#8b7866]">{t('processHeading.highlight')}</span>
            </h2>
            <p className="text-xl text-[#8b7866]">{t('processHeading.subtitle')}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#1c355e] to-[#8b7866] transform translate-x-4"></div>
                  )}
                  
                  {/* Step Circle */}
                  <div className="relative z-10 inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-[#1c355e] to-[#8b7866] rounded-full text-white mb-4 shadow-lg">
                    <div className="absolute inset-0 bg-white rounded-full scale-75 flex items-center justify-center">
                      <div className="text-[#1c355e]">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-sm font-bold text-[#1c355e] mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-[#1c355e] mb-2">{step.title}</h3>
                  <p className="text-[#8b7866]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              {t('featuresHeading.title')} <span className="text-[#8b7866]">{t('featuresHeading.highlight')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t('features').map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-[#1c355e] mr-3 flex-shrink-0" />
                <span className="text-[#8b7866] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Standards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              {t('vehicleHeading.title')} <span className="text-[#8b7866]">{t('vehicleHeading.highlight')}</span>
            </h2>
            <p className="text-xl text-[#8b7866] max-w-2xl mx-auto">
              {t('vehicleHeading.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t('vehicleStandards').map((standard, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1c355e] to-[#8b7866] rounded-2xl text-white mb-6">
                  {[<Shield key="shield" className="w-8 h-8" />, <Sparkles key="sparkles" className="w-8 h-8" />, <Zap key="zap" className="w-8 h-8" />][index]}
                </div>
                <h3 className="text-xl font-bold text-[#1c355e] mb-4">{standard.title}</h3>
                <p className="text-[#8b7866] mb-6 leading-relaxed">{standard.description}</p>
                <div className="space-y-2">
                  {standard.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              {t('faqHeading.title')} <span className="text-[#8b7866]">{t('faqHeading.highlight')}</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {t('faq').map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="cursor-pointer p-6 font-bold text-lg text-[#1c355e] hover:text-[#8b7866] transition-colors duration-300">
                  {faq.q}
                </summary>
                <div className="px-6 pb-6 text-[#8b7866] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1c355e] via-[#8b7866] to-[#1c355e]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#1c355e] px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                {t('cta.bookTransport')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="tel:+971555555555"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1c355e] transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('cta.callNow')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </RTLWrapper>
  );
}

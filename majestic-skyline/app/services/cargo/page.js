'use client';
import {
  Package,
  MapPin,
  Shield,
  Clock,
  Star,
  Plane,
  Phone,
  Truck,
  FileText,
  Globe,
  CheckCircle,
  Camera,
  Scale,
  Navigation,
  Send,
  Box,
  Zap,
  Heart,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { RTLWrapper } from '../../components/RTLWrapper';
import { cargoTranslations } from '../../translations/services/cargo';

export default function CargoServices() {
  const { language } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let value = cargoTranslations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
  const cargoTypes = [
    {
      icon: <Package className="w-8 h-8" />,
      name: t('cargoTypes.standard.name'),
      description: t('cargoTypes.standard.description'),
      features: t('cargoTypes.standard.features'),
      price: t('cargoTypes.standard.price'),
      gradient: "from-[#1c355e] to-[#8b7866]",
      items: t('cargoTypes.standard.items')
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: t('cargoTypes.express.name'),
      description: t('cargoTypes.express.description'),
      features: t('cargoTypes.express.features'),
      price: t('cargoTypes.express.price'),
      gradient: "from-[#8b7866] to-[#1c355e]",
      items: t('cargoTypes.express.items')
    },
    {
      icon: <Box className="w-8 h-8" />,
      name: t('cargoTypes.fragile.name'),
      description: t('cargoTypes.fragile.description'),
      features: t('cargoTypes.fragile.features'),
      price: t('cargoTypes.fragile.price'),
      gradient: "from-[#1c355e] to-[#2a4a73]",
      items: t('cargoTypes.fragile.items')
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: t('cargoTypes.special.name'),
      description: t('cargoTypes.special.description'),
      features: t('cargoTypes.special.features'),
      price: t('cargoTypes.special.price'),
      gradient: "from-[#8b7866] to-[#a68b5b]",
      items: t('cargoTypes.special.items')
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: t('benefits.global.title'),
      description: t('benefits.global.description'),
      color: "text-[#1c355e]",
      bg: "bg-blue-100"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: t('benefits.fast.title'),
      description: t('benefits.fast.description'),
      color: "text-[#8b7866]",
      bg: "bg-amber-100"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: t('benefits.secure.title'),
      description: t('benefits.secure.description'),
      color: "text-[#1c355e]",
      bg: "bg-blue-50"
    },
    {
      icon: <Navigation className="w-12 h-12" />,
      title: t('benefits.tracking.title'),
      description: t('benefits.tracking.description'),
      color: "text-[#8b7866]",
      bg: "bg-amber-50"
    }
  ];

  const process = [
    { step: "01", title: t('process.step1.title'), desc: t('process.step1.desc'), icon: <Send className="w-6 h-6" /> },
    { step: "02", title: t('process.step2.title'), desc: t('process.step2.desc'), icon: <FileText className="w-6 h-6" /> },
    { step: "03", title: t('process.step3.title'), desc: t('process.step3.desc'), icon: <Navigation className="w-6 h-6" /> },
    { step: "04", title: t('process.step4.title'), desc: t('process.step4.desc'), icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const faqItems = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') }
  ];

  return (
    <RTLWrapper>
    <div className="min-h-screen bg-[#f2f2f7] mt-20">
      {/* Hero Section - Updated with original colors */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c355e] via-[#8b7866] to-[#1c355e] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white rounded-full px-6 py-2 shadow-lg">
                <Package className="w-5 h-5 text-[#1c355e] mr-2" />
                <span className="text-[#1c355e] font-semibold">{t('heroLabel')}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                {t('heroTitle1')}
                <span className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] bg-clip-text text-transparent"> {t('heroTitle2')}</span>
                <br />{t('heroTitle3')}
              </h1>
              <p className="text-xl text-[#8b7866] leading-relaxed">
                {t('heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {t('heroButton1')}
                </button>
                <button className="border-2 border-[#1c355e] text-[#1c355e] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1c355e] hover:text-white transition-all duration-300">
                  {t('heroButton2')}
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/services/cargo.jpg"
                  alt={t('heroImageAlt')}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1c355e]/20 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black text-[#1c355e]">{t('stat1Number')}</div>
                <div className="text-[#8b7866]">{t('stat1Label')}</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black text-[#8b7866]">{t('stat2Number')}</div>
                <div className="text-[#1c355e]">{t('stat2Label')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cargo Types - Updated colors */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              {t('cargoTypesTitle')} <span className="text-[#8b7866]">{t('cargoTypesSubtitle')}</span>
            </h2>
            <p className="text-xl text-[#8b7866] max-w-2xl mx-auto">
              {t('cargoTypesDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(cargoTypes || []).map((cargo, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Gradient Header */}
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${cargo.gradient} rounded-t-3xl`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${cargo.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {cargo.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cargo.name}</h3>
                  <p className="text-gray-600 mb-4">{cargo.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-black text-gray-900">AED {cargo.price}</span>
                    <span className="text-gray-500 ml-2">{t('startingFrom')}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {(cargo.features || []).map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Items */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(cargo.items || []).map((item, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <button className={`w-full bg-gradient-to-r ${cargo.gradient} text-white py-3 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}>
                    {t('selectPlan')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Updated colors */}
      <section className="py-20 bg-gradient-to-r from-[#1c355e] to-[#8b7866]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              {t('benefitsTitle')}
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t('benefitsDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(benefits || []).map((benefit, index) => (
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

      {/* Process - Updated colors */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              {t('processTitle')} <span className="text-[#8b7866]">{t('processSubtitle')}</span>
            </h2>
            <p className="text-xl text-[#8b7866]">{t('processDescription')}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {(process || []).map((step, index) => (
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

      {/* Features - Updated colors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              {t('featuresTitle')} <span className="text-[#8b7866]">{t('featuresSubtitle')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {(t('features') || []).map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-[#1c355e] mr-3 flex-shrink-0" />
                <span className="text-[#8b7866] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Updated colors */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              {t('faqTitle')} <span className="text-[#8b7866]">{t('faqSubtitle')}</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {(faqItems || []).map((faq, index) => (
              <details key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
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

      {/* CTA - Updated colors */}
      <section className="py-20 bg-gradient-to-r from-[#1c355e] via-[#8b7866] to-[#1c355e]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#1c355e] px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                {t('ctaButton1')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="tel:+971555555555"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1c355e] transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('ctaButton2')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </RTLWrapper>
  );
}

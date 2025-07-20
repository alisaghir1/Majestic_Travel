'use client';
import {
  Car,
  MapPin,
  Shield,
  Clock,
  Star,
  CreditCard,
  Phone,
  Users,
  Fuel,
  Settings,
  Award,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { RTLWrapper } from '../../components/RTLWrapper';
import { carRentalTranslations } from '../../translations/services/car-rental';

export default function CarRentalServices() {
  const { language } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let value = carRentalTranslations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const carTypes = [
    {
      icon: <Car className="w-6 h-6" />,
      name: t('carTypes.economy.name'),
      description: t('carTypes.economy.description'),
      features: t('carTypes.economy.features'),
      price: t('carTypes.economy.price'),
      image: "/services/economy-car.jpg",
      cars: t('carTypes.economy.cars')
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: t('carTypes.suv.name'),
      description: t('carTypes.suv.description'),
      features: t('carTypes.suv.features'),
      price: t('carTypes.suv.price'),
      image: "/services/family-suv.jpg",
      cars: t('carTypes.suv.cars')
    },
    {
      icon: <Award className="w-6 h-6" />,
      name: t('carTypes.luxury.name'),
      description: t('carTypes.luxury.description'),
      features: t('carTypes.luxury.features'),
      price: t('carTypes.luxury.price'),
      image: "/services/luxury.avif",
      cars: t('carTypes.luxury.cars')
    },
    {
      icon: <Settings className="w-6 h-6" />,
      name: t('carTypes.commercial.name'),
      description: t('carTypes.commercial.description'),
      features: t('carTypes.commercial.features'),
      price: t('carTypes.commercial.price'),
      image: "/services/commercial-van.jpg",
      cars: t('carTypes.commercial.cars')
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-[#1c355e]" />,
      title: t('benefits.insurance'),
      description: t('benefits.insuranceDesc')
    },
    {
      icon: <Clock className="w-8 h-8 text-[#1c355e]" />,
      title: t('benefits.support'),
      description: t('benefits.supportDesc')
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#1c355e]" />,
      title: t('benefits.locations'),
      description: t('benefits.locationsDesc')
    },
    {
      icon: <Star className="w-8 h-8 text-[#1c355e]" />,
      title: t('benefits.fleet'),
      description: t('benefits.fleetDesc')
    }
  ];

  return (
    <RTLWrapper>
    <div className="pt-60 pb-24 bg-[#f2f2f7] mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/car-rental.jpg"
          alt={t('heroAlt')}
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 px-4">
              {t('heroTitle')}
            </h1>
            <p className="text-white text-xl md:text-2xl px-4 max-w-2xl">
              {t('heroSubtitle')}
            </p>
          </div>
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

        {/* Car Types Grid */}
        <div className="grid md:grid-cols-2 gap-6 my-16">
          {carTypes.map((car, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Car Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#1c355e] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {car.price}
                </div>
              </div>
              
              {/* Car Details */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#1c355e] p-3 rounded-full text-white mr-4">
                    {car.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1c355e]">{car.name}</h3>
                    <p className="text-[#8b7866]">{car.description}</p>
                  </div>
                </div>
                
                {/* Available Car Models */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#1c355e] mb-2">{t('availableModels')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {car.cars.map((carModel, i) => (
                      <span key={i} className="bg-gray-100 text-[#8b7866] px-2 py-1 rounded-md text-xs">
                        {carModel}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {car.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Book Now Button */}
                <Link href="/contact" className="w-full bg-[#1c355e] hover:bg-[#8b7866] text-white py-2 px-4 rounded-lg transition-colors duration-300 block text-center">
                  {t('bookNow')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <section className="my-16">
          <h3 className="text-2xl font-semibold text-[#1c355e] mb-8 text-center">
            {t('benefitsTitle')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-[#1c355e] mb-2">{benefit.title}</h4>
                <p className="text-[#8b7866] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features List */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          {t('featuresTitle')}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="list-disc pl-6 space-y-3">
            {t('featuresList1').map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <ul className="list-disc pl-6 space-y-3">
            {t('featuresList2').map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Booking Process */}
        <section className="my-16 bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            {t('processTitle')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {t('processSteps').map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white text-[#1c355e] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="my-16">
          <h3 className="text-2xl font-semibold text-[#1c355e] mb-8 text-center">
            {t('testimonialsTitle')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {t('testimonials').map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[#8b7866] italic mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="font-semibold text-[#1c355e]">- {testimonial.author}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section className="my-16 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-[#1c355e] mb-6 text-center">
            {t('offersTitle')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {t('offers').map((offer, index) => (
              <div key={index} className={`border-2 ${index === 0 ? 'border-[#1c355e]' : 'border-[#8b7866]'} p-6 rounded-lg`}>
                <h4 className={`font-bold ${index === 0 ? 'text-[#1c355e]' : 'text-[#8b7866]'} mb-2`}>{offer.title}</h4>
                <p className="text-[#8b7866] mb-3">{offer.description}</p>
                <div className="text-sm text-gray-600">{offer.validity || offer.code}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24 container mx-auto px-5">
          <h3 className="text-2xl font-semibold mb-6 text-[#1c355e]">{t('faqTitle')}</h3>
          <div className="space-y-4">
            {t('faqs').map((faq, i) => (
              <details
                key={i}
                className="group p-5 border border-gray-300 rounded-lg transition-all duration-300 hover:shadow-md"
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white px-8 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
          >
            {t('ctaButton')}
          </Link>
          <Link
            href="tel:+971555555555"
            className="inline-flex items-center justify-center border-2 border-[#1c355e] text-[#1c355e] hover:bg-[#1c355e] hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
          >
            <Phone className="w-5 h-5 mr-2" />
            {t('ctaButtonCall')}
          </Link>
        </div>
      </div>
    </div>
    </RTLWrapper>
  );
}

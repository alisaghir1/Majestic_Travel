'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from '../contexts/LanguageContext';
import { RTLWrapper } from '../components/RTLWrapper';

const DestinationsPage = () => {
  const { t, isRTL, language } = useLanguage();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('/api/destinations');
        const data = await response.json();
        setDestinations(data.filter(destination => destination.active));
      } catch (error) {
        console.error('Error fetching destinations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  // Group destinations by region
  const groupByRegion = (destinations) => {
    return destinations.reduce((acc, destination) => {
      const region = destination.region;
      if (!acc[region]) {
        acc[region] = [];
      }
      acc[region].push(destination);
      return acc;
    }, {});
  };

  const groupedDestinations = groupByRegion(destinations);

  if (loading) {
    return (
      <RTLWrapper>
        <div className="xl:px-20 px-5 pb-12 pt-60 mx-auto space-y-16 bg-[#f2f2f7]">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </RTLWrapper>
    );
  }
  
  return (
    <RTLWrapper>
      <div className="xl:px-20 px-5 pb-12 pt-60  mx-auto space-y-16 bg-[#f2f2f7]">
        {/* Header */}
        <header className="text-center">
          <h1 className="xl:text-5xl text-4xl font-bold [#1c355e] mb-4 text-[#1c355e]">
            {t('destinationsPage.pageTitle')}
          </h1>
          <p className="text-lg text-[#8b7866]">{t('destinationsPage.pageSubtitle')}</p>
        </header>

        {/* Dynamic Destinations by Region */}
        <section>
          {/* Middle East & North Africa */}
          {groupedDestinations['middle-east'] && groupedDestinations['middle-east'].length > 0 && (
            <div className="mb-12">
              <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3 mb-4 text-[#8b7866]">
                {t('destinationsPage.middleEastTitle')}
              </h3>
              <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
                {t('destinationsPage.middleEastDescription')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedDestinations['middle-east'].map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    image={destination.image}
                    title={destination.title[language]}
                    description={destination.description[language]}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Asia */}
          {groupedDestinations['asia'] && groupedDestinations['asia'].length > 0 && (
            <div className="mb-12">
              <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3 mb-4 text-[#8b7866]">
                {t('destinationsPage.asiaTitle')}
              </h3>
              <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
                {t('destinationsPage.asiaDescription')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedDestinations['asia'].map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    image={destination.image}
                    title={destination.title[language]}
                    description={destination.description[language]}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Europe */}
          {groupedDestinations['europe'] && groupedDestinations['europe'].length > 0 && (
            <div className="mb-12">
              <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3 mb-4 text-[#8b7866]">
                {t('destinationsPage.europeTitle')}
              </h3>
              <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
                {t('destinationsPage.europeDescription')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedDestinations['europe'].map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    image={destination.image}
                    title={destination.title[language]}
                    description={destination.description[language]}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Africa */}
          {groupedDestinations['africa'] && groupedDestinations['africa'].length > 0 && (
            <div className="mb-12">
              <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3 mb-4 text-[#8b7866]">
                {t('destinationsPage.africaTitle')}
              </h3>
              <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
                {t('destinationsPage.africaDescription')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedDestinations['africa'].map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    image={destination.image}
                    title={destination.title[language]}
                    description={destination.description[language]}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Hidden Gems */}
          {groupedDestinations['hidden-gems'] && groupedDestinations['hidden-gems'].length > 0 && (
            <div className="mb-12">
              <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3 mb-4 text-[#8b7866]">
                {t('destinationsPage.hiddenGemsTitle')}
              </h3>
              <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
                {t('destinationsPage.hiddenGemsDescription')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedDestinations['hidden-gems'].map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    image={destination.image}
                    title={destination.title[language]}
                    description={destination.description[language]}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Luxury Escapes */}
          {groupedDestinations['luxury'] && groupedDestinations['luxury'].length > 0 && (
            <div className="mb-12">
              <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3 mb-4 text-[#8b7866]">
                {t('destinationsPage.luxuryEscapesTitle')}
              </h3>
              <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
                {t('destinationsPage.luxuryEscapesDescription')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedDestinations['luxury'].map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    image={destination.image}
                    title={destination.title[language]}
                    description={destination.description[language]}
                  />
                ))}
              </div>
            </div>
          )}
        </section>

      {/* Seasonal Picks */}
      <section className="mt-16">
        <h2 className="xl:text-5xl text-4xl font-bold  text-center border-b-3 w-fit mx-auto mb-20 pt-20  text-[#8b7866]">
          {t('destinationsPage.seasonalPicksTitle')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Winter */}
          <div className="mb-10 border p-5 rounded-xl border-[#1c355e]">
            <h3 className="xl:text-3xl text-2xl font-bold text-[#1c355e] mb-4">
              {t('destinationsPage.winterEscapes.title')}
            </h3>
            <ul className="list-disc xl:text-xl text-lg list-inside text-[#8b7866]">
              {t('destinationsPage.winterEscapes.destinations').map((destination, index) => (
                <li key={index}>{destination}</li>
              ))}
            </ul>
          </div>

          {/* Spring */}
          <div className="mb-10 border p-5 rounded-xl border-[#1c355e]">
            <h3 className="xl:text-3xl text-2xl font-bold text-[#1c355e] mb-4">
              {t('destinationsPage.springAdventures.title')}
            </h3>
            <ul className="list-disc list-inside xl:text-xl text-lg text-[#8b7866]">
              {t('destinationsPage.springAdventures.destinations').map((destination, index) => (
                <li key={index}>{destination}</li>
              ))}
            </ul>
          </div>

          {/* Summer */}
          <div className="mb-10 border p-5 rounded-xl border-[#1c355e]">
            <h3 className="xl:text-3xl text-2xl font-bold text-[#1c355e] mb-4">
              {t('destinationsPage.summerEscapes.title')}
            </h3>
            <ul className="list-disc list-inside xl:text-xl text-lg text-[#8b7866]">
              {t('destinationsPage.summerEscapes.destinations').map((destination, index) => (
                <li key={index}>{destination}</li>
              ))}
            </ul>
          </div>

          {/* Autumn */}
          <div className="mb-10 border p-5 rounded-xl border-[#1c355e]">
            <h3 className="xl:text-3xl text-2xl font-bold text-[#1c355e] mb-4">
              {t('destinationsPage.autumnTrips.title')}
            </h3>
            <ul className="list-disc list-inside xl:text-xl text-lg text-[#8b7866]">
              {t('destinationsPage.autumnTrips.destinations').map((destination, index) => (
                <li key={index}>{destination}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ with transition */}
      <section className="mb-24">
        <h3 className="xl:text-4xl text-3xl font-semibold mb-6 text-[#1c355e]">{t('destinationsPage.faqTitle')}</h3>
        <div className="space-y-4">
          {t('destinationsPage.faqs').map((faq, i) => (
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

      {/* CTA */}
      <section className="text-center container mx-auto px-5 max-w-2xl mb-20">
        <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
          {t('destinationsPage.ctaTitle')}
        </h4>
        <p className="mb-6 text-[#8b7866]">
          {t('destinationsPage.ctaDescription')}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white px-6 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
        >
          {t('destinationsPage.ctaButton')}
        </Link>
      </section>
    </div>
    </RTLWrapper>
  );
};

const DestinationCard = ({ image, title, description }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
    <div className="relative w-full h-[30rem] xl:h-[45rem]">
      {" "}
      {/* Container for layout='fill' */}
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <div className="p-4">
      <h4 className="xl:text-3xl text-[#1c355e] text-2xl font-semibold mb-2">
        {title}
      </h4>
      <p className="xl:text-xl text-[#8b7866] text-lg">{description}</p>
    </div>
  </div>
);
export default DestinationsPage;

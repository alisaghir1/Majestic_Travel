'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from '../contexts/LanguageContext';
import { RTLWrapper } from '../components/RTLWrapper';

const DestinationsPage = () => {
  const { t, isRTL } = useLanguage();
  
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

      {/* By Region */}
      <section>
        {/* Middle East & North Africa */}
        <div className="mb-12">
          <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3  mb-4 text-[#8b7866]">
            {t('destinationsPage.middleEastTitle')}
          </h3>
          <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
            {t('destinationsPage.middleEastDescription')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Jordan */}
            <DestinationCard
              image="/destinations/jordan-petra.jpg"
              title={t('destinationsPage.jordan.title')}
              description={t('destinationsPage.jordan.description')}
            />
            {/* Oman */}
            <DestinationCard
              image="/destinations/oman.jpg"
              title={t('destinationsPage.oman.title')}
              description={t('destinationsPage.oman.description')}
            />
            {/* Egypt */}
            <DestinationCard
              image="/destinations/egypt.jpg"
              title={t('destinationsPage.egypt.title')}
              description={t('destinationsPage.egypt.description')}
            />
            {/* Morocco */}
            <DestinationCard
              image="/destinations/marakesh.jpg"
              title={t('destinationsPage.morocco.title')}
              description={t('destinationsPage.morocco.description')}
            />
            {/* Lebanon */}
            <DestinationCard
              image="/destinations/beirut.jpg"
              title={t('destinationsPage.lebanon.title')}
              description={t('destinationsPage.lebanon.description')}
            />
          </div>
        </div>

        {/* Asia */}
        <div className="mb-12">
          <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3  mb-4 text-[#8b7866]">
            {t('destinationsPage.asiaTitle')}
          </h3>
          <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
            {t('destinationsPage.asiaDescription')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Thailand */}
            <DestinationCard
              image="/destinations/thailand.jpg"
              title={t('destinationsPage.thailand.title')}
              description={t('destinationsPage.thailand.description')}
            />
            {/* Indonesia */}
            <DestinationCard
              image="/destinations/bali.jpg"
              title={t('destinationsPage.indonesia.title')}
              description={t('destinationsPage.indonesia.description')}
            />
            {/* Japan */}
            <DestinationCard
              image="/destinations/japan.jpg"
              title={t('destinationsPage.japan.title')}
              description={t('destinationsPage.japan.description')}
            />
            {/* Vietnam */}
            <DestinationCard
              image="/destinations/vietnam.jpg"
              title={t('destinationsPage.vietnam.title')}
              description={t('destinationsPage.vietnam.description')}
            />
            {/* Sri Lanka */}
            <DestinationCard
              image="/destinations/sri-lanka.jpg"
              title={t('destinationsPage.sriLanka.title')}
              description={t('destinationsPage.sriLanka.description')}
            />
          </div>
        </div>

        {/* Europe */}
        <div className="mb-12">
          <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3  mb-4 text-[#8b7866]">
            {t('destinationsPage.europeTitle')}
          </h3>
          <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
            {t('destinationsPage.europeDescription')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Italy */}
            <DestinationCard
              image="/destinations/italy.jpg"
              title={t('destinationsPage.italy.title')}
              description={t('destinationsPage.italy.description')}
            />
            {/* Greece */}
            <DestinationCard
              image="/destinations/greece.jpg"
              title={t('destinationsPage.greece.title')}
              description={t('destinationsPage.greece.description')}
            />
            {/* France */}
            <DestinationCard
              image="/destinations/france.jpg"
              title={t('destinationsPage.france.title')}
              description={t('destinationsPage.france.description')}
            />
            {/* Georgia */}
            <DestinationCard
              image="/destinations/georgia.jpg"
              title={t('destinationsPage.georgia.title')}
              description={t('destinationsPage.georgia.description')}
            />
            {/* Switzerland */}
            <DestinationCard
              image="/destinations/switzerland.jpg"
              title={t('destinationsPage.switzerland.title')}
              description={t('destinationsPage.switzerland.description')}
            />
          </div>
        </div>

        {/* Africa */}
        <div className="mb-12">
          <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3  mb-4 text-[#8b7866]">
            {t('destinationsPage.africaTitle')}
          </h3>
          <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
            {t('destinationsPage.africaDescription')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kenya */}
            <DestinationCard
              image="/destinations/kenya.jpeg"
              title={t('destinationsPage.kenya.title')}
              description={t('destinationsPage.kenya.description')}
            />
            {/* South Africa */}
            <DestinationCard
              image="/destinations/south-africa.jpg"
              title={t('destinationsPage.southAfrica.title')}
              description={t('destinationsPage.southAfrica.description')}
            />
            {/* Tanzania */}
            <DestinationCard
              image="/destinations/tanzania.jpg"
              title={t('destinationsPage.tanzania.title')}
              description={t('destinationsPage.tanzania.description')}
            />
          </div>
        </div>
      </section>

      {/* Hidden Gems */}
      <section>
        <h2 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3  mb-4 text-[#8b7866]">{t('destinationsPage.hiddenGemsTitle')}</h2>
        <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
          {t('destinationsPage.hiddenGemsDescription')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DestinationCard
            image="/destinations/bosnia.jpg"
            title={t('destinationsPage.bosnia.title')}
            description={t('destinationsPage.bosnia.description')}
          />
          <DestinationCard
            image="/destinations/uzbekistan.jpg"
            title={t('destinationsPage.uzbekistan.title')}
            description={t('destinationsPage.uzbekistan.description')}
          />
          <DestinationCard
            image="/destinations/albania.jpg"
            title={t('destinationsPage.albania.title')}
            description={t('destinationsPage.albania.description')}
          />
          <DestinationCard
            image="/destinations/philippines.webp"
            title={t('destinationsPage.philippines.title')}
            description={t('destinationsPage.philippines.description')}
          />
          <DestinationCard
            image="/destinations/montenegro.jpg"
            title={t('destinationsPage.montenegro.title')}
            description={t('destinationsPage.montenegro.description')}
          />
        </div>
      </section>

      {/* Luxury Escapes */}
      <section className="mt-16">
        <h2 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3  mb-4 text-[#8b7866]">
          {t('destinationsPage.luxuryEscapesTitle')}
        </h2>
        <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
          {t('destinationsPage.luxuryEscapesDescription')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DestinationCard
            image="/destinations/maldives.jpg"
            title={t('destinationsPage.maldives.title')}
            description={t('destinationsPage.maldives.description')}
          />
          <DestinationCard
            image="/destinations/seychelles.jpg"
            title={t('destinationsPage.seychelles.title')}
            description={t('destinationsPage.seychelles.description')}
          />
          <DestinationCard
            image="/destinations/switzerland-1.jpg"
            title={t('destinationsPage.switzerlandLuxury.title')}
            description={t('destinationsPage.switzerlandLuxury.description')}
          />
          <DestinationCard
            image="/destinations/dubai.jpg"
            title={t('destinationsPage.dubaiStaycations.title')}
            description={t('destinationsPage.dubaiStaycations.description')}
          />
        </div>
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

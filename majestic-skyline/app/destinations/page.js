import React from "react";
import Image from "next/image";
import Link from "next/link";

const DestinationsPage = () => {
  return (
    <div className="xl:px-20 px-5 pb-12 pt-60  mx-auto space-y-16 bg-[#f2f2f7]">
      {/* Header */}
      <header className="text-center">
        <h1 className="xl:text-5xl text-4xl font-bold [#1c355e] mb-4 text-[#1c355e]">
          Top Travel Destinations from Dubai | Explore with Majestic Skyline
        </h1>
        <p className="text-lg text-[#8b7866]">Destinations</p>
      </header>

      {/* By Region */}
      <section>
        {/* Middle East & North Africa */}
        <div className="mb-12">
          <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3  mb-4 text-[#8b7866]">
            Middle East & North Africa
          </h3>
          <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
            Dubai&#39;s location gives travelers easy access to cultural cities,
            desert landscapes, and ancient wonders across the MENA region.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Jordan */}
            <DestinationCard
              image="/destinations/jordan-petra.jpg"
              title="Jordan"
              description="Amman, Petra, and the Dead Sea offer history and relaxation. Visit ancient sites, float in salt-rich waters, and explore hidden canyons."
            />
            {/* Oman */}
            <DestinationCard
              image="/destinations/oman.jpg"
              title="Oman"
              description="Muscat and Salalah provide a peaceful escape. Discover green mountains, coastal drives, and quiet wadis perfect for weekend trips."
            />
            {/* Egypt */}
            <DestinationCard
              image="/destinations/egypt.jpg"
              title="Egypt"
              description="Cairo and Luxor attract travelers seeking history and vibrant street life. Visit the pyramids, cruise the Nile, and experience local markets."
            />
            {/* Morocco */}
            <DestinationCard
              image="/destinations/marakesh.jpg"
              title="Morocco"
              description="Marrakech, Fes, and Chefchaouen combine colors, spices, and tradition. Walk through souks, relax in riads, and trek the Atlas Mountains."
            />
            {/* Lebanon */}
            <DestinationCard
              image="/destinations/beirut.jpg"
              title="Lebanon"
              description="Beirut, Byblos, and the Qadisha Valley mix culture and nature. Taste local cuisine, visit monasteries, and enjoy Mediterranean beaches."
            />
          </div>
        </div>

        {/* Asia */}
        <div className="mb-12">
          <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3  mb-4 text-[#8b7866]">
            Asia
          </h3>
          <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
            From high-energy cities to calm coastlines, Asia remains a top
            choice for UAE-based travelers seeking diversity and affordability.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Thailand */}
            <DestinationCard
              image="/destinations/thailand.jpg"
              title="Thailand"
              description="Bangkok, Chiang Mai, and Phuket offer vibrant markets, sacred temples, and tropical beaches. Ideal for both short holidays and extended stays."
            />
            {/* Indonesia */}
            <DestinationCard
              image="/destinations/bali.jpg"
              title="Indonesia"
              description="Bali and Lombok are popular for surf, jungle retreats, and cultural experiences. Explore rice terraces, yoga villages, and local traditions."
            />
            {/* Japan */}
            <DestinationCard
              image="/destinations/japan.jpg"
              title="Japan"
              description="Tokyo, Kyoto, and Osaka are clean, efficient, and full of character. See cherry blossoms in spring or enjoy autumn colors in temples and parks."
            />
            {/* Vietnam */}
            <DestinationCard
              image="/destinations/vietnam.jpg"
              title="Vietnam"
              description="Hanoi and Hoi An provide scenic landscapes and coastal charm. Try street food, boat through limestone caves, and visit floating villages."
            />
            {/* Sri Lanka */}
            <DestinationCard
              image="/destinations/sri-lanka.jpg"
              title="Sri Lanka"
              description="Ella, Galle, and Kandy are filled with greenery, wildlife, and beaches. A great mix of culture and nature for couples and families."
            />
          </div>
        </div>

        {/* Europe */}
        <div className="mb-12">
          <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3  mb-4 text-[#8b7866]">
            Europe
          </h3>
          <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
            Ideal for summer escapes or winter holidays, Europe offers a blend
            of nature, architecture, and local flavor.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Italy */}
            <DestinationCard
              image="/destinations/italy.jpg"
              title="Italy"
              description="Rome, Florence, and Venice mix art, food, and scenic views. Explore ancient ruins, stay in hillside villages, or enjoy coastal drives."
            />
            {/* Greece */}
            <DestinationCard
              image="/destinations/greece.jpg"
              title="Greece"
              description="Athens, Santorini, and Crete are full of sunshine, ruins, and whitewashed houses. Perfect for honeymoons or relaxed cultural trips."
            />
            {/* France */}
            <DestinationCard
              image="/destinations/france.jpg"
              title="France"
              description="Paris, Nice, and the Loire Valley bring romance, history, and countryside charm. Discover museums, castles, and hidden neighborhoods."
            />
            {/* Georgia */}
            <DestinationCard
              image="/destinations/georgia.jpg"
              title="Georgia"
              description="Tbilisi, Gudauri, and Kazbegi offer mountains, hot springs, and warm hospitality. A short flight from Dubai and visa-free for many."
            />
            {/* Switzerland */}
            <DestinationCard
              image="/destinations/switzerland.jpg"
              title="Switzerland"
              description="Zurich, Lucerne, and Interlaken are ideal for nature lovers. Snow-capped mountains, lakes, and scenic train rides make every trip memorable."
            />
          </div>
        </div>

        {/* Africa */}
        <div className="mb-12">
          <h3 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3  mb-4 text-[#8b7866]">
            Africa
          </h3>
          <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
            Untouched landscapes and strong cultural identity make Africa a
            rising destination for explorers from Dubai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kenya */}
            <DestinationCard
              image="/destinations/kenya.jpeg"
              title="Kenya"
              description="Nairobi and the Maasai Mara are perfect for safari lovers. Spot lions, giraffes, and elephants in vast savannahs."
            />
            {/* South Africa */}
            <DestinationCard
              image="/destinations/south-africa.jpg"
              title="South Africa"
              description="Cape Town, the Garden Route, and Kruger National Park combine modern cities, scenic coasts, and wild nature."
            />
            {/* Tanzania */}
            <DestinationCard
              image="/destinations/tanzania.jpg"
              title="Tanzania"
              description="Zanzibar and Serengeti National Park balance beach and safari. Visit stone towns, snorkel in clear waters, and experience big game wildlife."
            />
          </div>
        </div>
      </section>

      {/* Hidden Gems */}
      <section>
        <h2 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3  mb-4 text-[#8b7866]">Hidden Gems</h2>
        <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
          Off-the-beaten-path locations offering a quieter, more authentic
          experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DestinationCard
            image="/destinations/bosnia.jpg"
            title="Bosnia & Herzegovina"
            description="Mostar and Sarajevo feature beautiful rivers, Ottoman architecture, and welcoming locals."
          />
          <DestinationCard
            image="/destinations/uzbekistan.jpg"
            title="Uzbekistan"
            description="Samarkand and Bukhara showcase stunning Islamic art, history, and colorful bazaars."
          />
          <DestinationCard
            image="/destinations/albania.jpg"
            title="Albania"
            description="Tirana and the Albanian Riviera offer beaches, green landscapes, and Mediterranean beauty—without the crowds."
          />
          <DestinationCard
            image="/destinations/philippines.webp"
            title="Philippines (Palawan)"
            description="Remote beaches, island hopping, and underground rivers. Perfect for nature lovers and adventure seekers."
          />
          <DestinationCard
            image="/destinations/montenegro.jpg"
            title="Montenegro"
            description="Kotor and Budva have medieval towns and scenic coastlines, offering calm and beauty for couples and solo travelers."
          />
        </div>
      </section>

      {/* Luxury Escapes */}
      <section className="mt-16">
        <h2 className="xl:text-4xl text-3xl font-bold [#1c355e] text-center mx-auto w-fit border-b-3  mb-4 text-[#8b7866]">
          Luxury Escapes
        </h2>
        <p className="text-[#1c355e] xl:text-2xl text-xl mb-10 text-center">
          Ideal for honeymoons, anniversaries, or those wanting a more exclusive
          experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DestinationCard
            image="/destinations/maldives.jpg"
            title="Maldives"
            description="Private overwater villas and calm turquoise waters. Full privacy for couples or family groups seeking comfort and seclusion."
          />
          <DestinationCard
            image="/destinations/seychelles.jpg"
            title="Seychelles"
            description="Quiet beaches, granite rocks, and green hills. A short flight from Dubai and a top choice for romantic travelers."
          />
          <DestinationCard
            image="/destinations/switzerland-1.jpg"
            title="Switzerland"
            description="Luxury trains, lake-view hotels, and alpine spas. High-end winter escapes and summer hikes surrounded by mountains."
          />
          <DestinationCard
            image="/destinations/dubai.jpg"
            title="Dubai Staycations"
            description="Exclusive stays at beach resorts, desert camps, or wellness retreats within the UAE—no flight required."
          />
        </div>
      </section>

      {/* Seasonal Picks */}
      <section className="mt-16">
        <h2 className="xl:text-5xl text-4xl font-bold  text-center border-b-3 w-fit mx-auto mb-20 pt-20  text-[#8b7866]">
          Seasonal Picks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Winter */}
          <div className="mb-10 border p-5 rounded-xl border-[#1c355e]">
            <h3 className="xl:text-3xl text-2xl font-bold text-[#1c355e] mb-4">
              Winter Escapes (December to February)
            </h3>
            <ul className="list-disc xl:text-xl text-lg list-inside text-[#8b7866]">
              <li>
                Austria : Ski resorts, Christmas markets, and scenic alpine
                villages
              </li>
              <li>
                Japan : Snow festivals, hot springs, and traditional winter
                meals
              </li>
              <li>
                Maldives : Dry season brings the clearest skies and smoothest
                sea
              </li>
              <li>
                Georgia (Gudauri) : Snow activities, fireplaces, and mountain
                views
              </li>
            </ul>
          </div>

          {/* Spring */}
          <div className="mb-10 border p-5 rounded-xl border-[#1c355e]">
            <h3 className="xl:text-3xl text-2xl font-bold text-[#1c355e] mb-4">
              Spring Adventures (March to May)
            </h3>
            <ul className="list-disc list-inside xl:text-xl text-lg text-[#8b7866]">
              <li>
                Netherlands : Tulip fields, cycling paths, and canal views
              </li>
              <li>
                South Korea : Cherry blossoms, ancient palaces, and light spring
                rains
              </li>
              <li>
                Portugal : Pleasant weather, fewer crowds, and coastal charm
              </li>
              <li>
                Nepal : Clear skies and ideal trekking conditions in the
                Himalayas
              </li>
            </ul>
          </div>

          {/* Summer */}
          <div className="mb-10 border p-5 rounded-xl border-[#1c355e]">
            <h3 className="xl:text-3xl text-2xl font-bold text-[#1c355e] mb-4">
              Summer Escapes (June to August)
            </h3>
            <ul className="list-disc list-inside xl:text-xl text-lg text-[#8b7866]">
              <li>
                Switzerland : Lakeside towns, hiking trails, and scenic drives
              </li>
              <li>
                Indonesia : Bali is dry, lush, and full of spiritual and natural
                spots
              </li>
              <li>
                UK & Ireland : Mild weather, festivals, and historic castles
              </li>
              <li>Kenya : Great migration season for safari lovers</li>
            </ul>
          </div>

          {/* Autumn */}
          <div className="mb-10 border p-5 rounded-xl border-[#1c355e]">
            <h3 className="xl:text-3xl text-2xl font-bold text-[#1c355e] mb-4">
              Autumn Trips (September to November)
            </h3>
            <ul className="list-disc list-inside xl:text-xl text-lg text-[#8b7866]">
              <li>
                Turkey (Cappadocia) : Balloon rides, warm days, and crisp
                evenings
              </li>
              <li>
                Italy : Harvest season, fewer tourists, and cultural events
              </li>
              <li>
                Jordan : Comfortable temperatures for exploring Petra and Wadi
                Rum
              </li>
              <li>
                Vietnam : Best conditions for both northern mountains and
                southern beaches
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ with transition */}
      <section className="mb-24">
        <h3 className="xl:text-4xl text-3xl font-semibold mb-6 text-[#1c355e]">FAQs</h3>
        <div className="space-y-4">
          {[
            {
              q: "What is the best time to visit Europe from Dubai?",
              a: "May to September offers long daylight hours and pleasant temperatures. For fewer crowds, April and October are good choices.",
            },
            {
              q: "Which destinations are visa-free for UAE residents?",
              a: "Georgia, Armenia, Azerbaijan, Maldives, Thailand, and some Caribbean nations offer visa-free or visa-on-arrival access for UAE residents.",
            },
            {
              q: "Can Majestic Skyline suggest custom destinations?",
              a: "Yes. We plan fully personalized itineraries based on your interests, travel history, and budget.",
            },
            {
              q: "Do you book flights and stays for these destinations?",
              a: "Absolutely. We manage all aspects of your trip—transportation, accommodations, experiences, and documentation.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group p-5 border border-gray-300 rounded-lg transition-all duration-300 "
            >
              <summary className="cursor-pointer font-medium text-[#1c355e] text-lg group-open:mb-2 transition-all duration-300">
                {faq.q}
              </summary>
              <p className="text-[#8b7866] opacity-0 group-open:opacity-100 transition-opacity duration-500">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center container mx-auto px-5 max-w-2xl mb-20">
        <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
          Your Dream Destination Awaits
        </h4>
        <p className="mb-6 text-[#8b7866]">
          Majestic Skyline helps you discover the world from Dubai—whether
          you&#39;re seeking nature, history, luxury, or something entirely new. Let
          us guide you to destinations that reflect your style and timing.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white px-6 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
        >
          Contact Us to Start Planning
        </Link>
      </section>
    </div>
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

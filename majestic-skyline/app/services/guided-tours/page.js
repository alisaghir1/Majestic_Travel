"use client";
import Image from "next/image";
import Link from "next/link";

export default function GuidedToursAndExperiences() {
  return (
    <div className="pt-60 bg-[#f2f2f7] pb-24 mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/guided-tours.jpg"
          alt="Guided Tours and Experiences"
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Guided Tours & Experiences | Discover the World Beyond the Surface
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="space-y-8 container mx-auto px-5 mb-20 text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-[#1c355e]">
          Explore More with Curated Tours and Authentic Experiences from Dubai
        </h2>
        <p>
          Majestic Skyline connects Dubai-based travelers to the most meaningful
          experiences around the world. Whether you want a private museum tour
          in Florence, a street food trail in Bangkok, or a desert safari in
          Morocco, our guided tour options go beyond the surface. Each
          experience is selected to give you more than just sightseeing—our goal
          is to help you connect with the soul of each place.
        </p>
        <p>
          We organize private, semi-private, and group tours in over 70
          countries. All experiences are built into your itinerary based on your
          interests, budget, and time. From culturally immersive walking tours
          to adrenaline-fueled outdoor adventures, Majestic Skyline delivers
          activities that turn a trip into a memory.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Why Travelers in Dubai Choose Majestic Skyline for Tours and
          Activities
        </h3>

        {/* Grid layout for this section only */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className=" p-5 rounded-xl shadow-sm border">
            <p>● Access to local guides and experience providers worldwide</p>
          </div>
          <div className=" p-5 rounded-xl shadow-sm border">
            <p>● Personalized recommendations based on your style of travel</p>
          </div>
          <div className=" p-5 rounded-xl shadow-sm border">
            <p>
              ● Verified experiences with excellent ratings and real reviews
            </p>
          </div>
          <div className=" p-5 rounded-xl shadow-sm border">
            <p>● Seamless integration of tours into your travel schedule</p>
          </div>
          <div className=" p-5 rounded-xl shadow-sm border">
            <p>● Full support before, during, and after each activity</p>
          </div>
        </div>

        {/* Rest of the content */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Cultural & Historical Tours
        </h3>
        <p>
          <strong>Walking Tours with Local Guides</strong> One of the best ways
          to understand a city is on foot. We offer guided walking tours in
          historical towns, capital cities, and UNESCO sites. From the streets
          of Rome to old town Sarajevo, you get to explore hidden alleys,
          historic buildings, and unique viewpoints with someone who lives
          there.
        </p>
        <p>
          <strong>Museum and Art Tours</strong> Skip-the-line access to famous
          museums such as the Louvre in Paris, Uffizi in Florence, or the Prado
          in Madrid. We pair clients with English-speaking (or bilingual) art
          historians who bring each masterpiece to life.
        </p>
        <p>
          <strong>Religious Pilgrimage Tours</strong> We arrange visits to
          spiritual landmarks like the Vatican, Mecca, Al-Aqsa, and Buddhist
          temples in Southeast Asia. Our team ensures appropriate scheduling for
          prayer times, modest dress, and respectful conduct throughout.
        </p>
        <p>
          <strong>Ancient Ruins and Archeology Trips</strong> Discover Petra in
          Jordan, the pyramids in Egypt, or Machu Picchu in Peru with
          archaeologist-led tours. We include transportation, entry permits, and
          historical explanations often missed by mainstream packages.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Food & Culinary Experiences
        </h3>
        <p>
          <strong>Street Food Trails</strong> Explore the food culture of cities
          like Istanbul, Mumbai, or Ho Chi Minh through guided food walks.
          Sample authentic dishes, learn about local ingredients, and visit
          markets that define the taste of the city.
        </p>
        <p>
          <strong>Cooking Classes Abroad</strong> Want to learn how to make
          pasta in Italy or sushi in Tokyo? Our culinary tours include hands-on
          cooking classes with locals—often in their homes or private studios.
          These are great for couples, families, and solo travelers.
        </p>
        <p>
          <strong>Distillery Visits</strong> Tour vineyards in Georgia, France,
          or South Africa. Tastings are included, along with private guides who
          explain each step of the process. Transport from your hotel is
          provided for safety and convenience.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Nature & Wildlife Adventures
        </h3>
        <p>
          <strong>Safari and Wildlife Tracking</strong> Book guided wildlife
          tours in Kenya, Tanzania, Sri Lanka, or South Africa. Whether you want
          to see the Big Five or go birdwatching in the Amazon, our team helps
          arrange licensed and ethical tours.
        </p>
        <p>
          <strong>Mountain and Forest Hikes</strong> From the Alps to the
          Himalayas, hiking trips with certified guides are available for all
          skill levels. Choose from day hikes or multi-day treks. Support
          includes permits, local transport, and gear rental if needed.
        </p>
        <p>
          <strong>National Park Experiences</strong> Our Dubai clients love
          exploring protected natural areas. We plan tours in places like Banff
          in Canada, Yosemite in the U.S., or Plitvice in Croatia. Every
          detail—from entry passes to packed meals—is handled.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Adventure & Outdoor Activities
        </h3>
        <p>
          <strong>Water-Based Activities</strong> Enjoy guided kayaking in New
          Zealand, scuba diving in the Maldives, or white-water rafting in Costa
          Rica. Every activity is booked with safety-certified providers,
          including equipment and insurance coverage.
        </p>
        <p>
          <strong>Snow and Ice Adventures</strong> Traveling during winter? We
          organize snowmobile rides in Finland, ice cave tours in Iceland, and
          skiing trips in the Alps. Gear, clothing rentals, and experienced
          instructors are arranged in advance.
        </p>
        <p>
          <strong>Extreme Sports for Thrill-Seekers</strong> For those who love
          adrenaline, we offer bungee jumping, zip-lining, rock climbing,
          skydiving, and paragliding—all with reliable operators and medical
          backup. We review safety records before booking any provider.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Family-Friendly Tours
        </h3>
        <p>
          <strong>Theme Park Access and VIP Passes</strong> Families traveling
          from Dubai often visit major theme parks like Disneyland Paris,
          Universal Studios Singapore, or Legoland. We provide ticket bookings,
          fast-track access, and family transport.
        </p>
        <p>
          <strong>Animal Encounters for Kids</strong> Visit elephant sanctuaries
          in Thailand, aquariums in Japan, or safari parks in Kenya. These tours
          are designed for young travelers—safe, interactive, and guided by
          specialists trained to work with children.
        </p>
        <p>
          <strong>Interactive Workshops and Classes</strong> Educational travel
          doesn’t have to be boring. We include pottery, art, language, and
          dance workshops suitable for kids and teens. These activities are
          often run by community centers or local artists.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Private & VIP Tour Options
        </h3>
        <p>
          <strong>Exclusive Access to Iconic Sites</strong> Book early morning
          or after-hours access to major landmarks like the Vatican, Versailles,
          or the Acropolis. These private tours are ideal for photography lovers
          and couples seeking quiet, exclusive experiences.
        </p>
        <p>
          <strong>Personal Drivers and Tour Guides</strong> Avoid crowds and
          explore at your own pace with a private driver-guide. This is popular
          for day trips around cities or countryside explorations—such as
          Tuscany, the Scottish Highlands, or Cappadocia.
        </p>
        <p>
          <strong>Yacht, Helicopter & Luxury Day Trips</strong> For high-end
          travelers, we offer yacht rentals in Greece, helicopter tours in New
          York, and luxury desert safaris in Dubai. These options are ideal for
          special occasions like birthdays, proposals, or anniversaries.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          How We Choose Tour Providers
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>Guide certification and language fluency</li>
          <li>Transportation quality and insurance</li>
          <li>Clear cancellation policies</li>
          <li>Real reviews and client feedback</li>
          <li>Cultural and ethical responsibility</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Frequently Asked Questions
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Are your tours available in Arabic?</strong> Yes. Many tours
            have Arabic-speaking guides. Let us know your language preference
            during booking.
          </li>
          <li>
            <strong>Can I customize my guided tours?</strong> Absolutely. All
            tours can be customized based on pace, duration, and interests.
          </li>
          <li>
            <strong>Are these tours suitable for solo travelers?</strong> Yes.
            We offer group join-in tours or private experiences for solo
            travelers, depending on budget.
          </li>
          <li>
            <strong>Do you offer refunds for cancellations?</strong> Yes.
            Refunds depend on provider policies. We’ll walk you through flexible
            options during booking.
          </li>
        </ul>

        <p className="pt-4">
          Discover cultures, flavors, stories, and landscapes with Majestic
          Skyline’s guided tour services. Let us take care of the logistics
          while you enjoy experiences that stay with you long after you return.
        </p>
        <p>
          Reach out today to book guided tours and local experiences from Dubai
          with trusted global providers.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center container mx-auto px-5 max-w-2xl">
        <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
          Explore More Than Just Places
        </h4>
        <p className="mb-6 text-[#8b7866]">
          Let Majestic Skyline take you on experiences that go far beyond
          sightseeing.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white px-6 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
        >
          Book Your Guided Tour Now
        </Link>
      </div>
    </div>
  );
}

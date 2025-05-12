import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full pb-20 pt-60 bg-[#f4f4f9] text-[#1c355e]">
      <div className=" mx-auto px-5">

        {/* Section: Our Story */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Section: Our Story */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl xl:text-5xl font-bold text-[#8b7866] mb-4 text-center">Our Story</h2>
          {/* Using Next.js Image component */}
          <div className="mt-12 relative rounded-lg shadow-lg w-full h-[500px]">
            <Image 
              src="/about.jpg" 
              alt="Our Story" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <h3 className="text-3xl font-semibold text-[#1c355e] mb-4 mt-20">Where It All Began</h3>
          <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#8b7866]">
            Majestic Skyline started in Dubai with one clear goal—make travel feel personal again. What began as a simple idea grew into a trusted travel company built on real relationships and local insight. The founders, long-time residents of the UAE, noticed a gap in the market. Most agencies offered generic packages that lacked cultural depth and customization. So, they set out to create a new standard for travel services in the region.
          </p>
          

        </div>

        {/* Section: Why Dubai */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4">Why Dubai Was the Perfect Launchpad</h3>
          <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#8b7866] text-center">
            Dubai brings the world together. Its central location, international airports, and thriving tourism industry make it ideal for a global travel agency. From short getaways to complex multi-city tours, the city provided the tools and energy to build something different. Majestic Skyline chose Dubai because it reflects what we stand for—global vision with local roots.
          </p>
        </div>
      </div>

        {/* Section: How We Grew */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4">How We Grew</h3>
          <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#8b7866] text-center">
            Word of mouth, genuine service, and local partnerships helped us grow faster than expected. Travelers started coming back, referring friends, and sharing their journeys online. In a city where tourism is always evolving, we stayed flexible. That flexibility allowed us to offer bespoke solutions for corporate travelers, honeymooners, family groups, and solo explorers. As our client base expanded, so did our services—covering flights, hotels, visas, tours, and more.
          </p>
        </div>

        {/* Section: What We Offer Today */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4">What We Offer Today</h3>
          <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#8b7866] text-center">
            Majestic Skyline is now a one-stop travel solution based in Dubai. We handle every detail—from planning to execution. Our service list includes custom travel packages, visa assistance, international tours, airport transfers, hotel bookings, and destination weddings. Each service is backed by local experience and real-time support.
          </p>
        </div>

        {/* Section: Client Stories */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4">Client Stories That Shaped Us</h3>
          <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#8b7866] text-center">
            Every traveler left a mark. One couple shared how their anniversary in Santorini, arranged down to the last sunset, was the highlight of their year. A corporate team from Riyadh praised how every stop of their European trip went without a glitch. These stories drive us. We continue to listen, adapt, and deliver.
          </p>
        </div>

        {/* Section: Vision & Mission */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4">Vision & Mission</h3>
          <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed text-[#8b7866] text-center">
            Majestic Skyline exists to make travel meaningful. Travel isn’t just movement; it’s connection, discovery, and memory-making. That belief guides every service we offer.
          </p>
        </div>

        {/* Section: Our Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#1c355e] text-center mb-4">Our Core Values</h3>
          <div className="border-t-4 border-[#8b7866] w-48 mx-auto mb-8"></div>
          <ul className="text-lg max-w-4xl mx-auto list-disc leading-relaxed text-[#8b7866] space-y-4 px-5">
            <li><strong>Authenticity:</strong> We believe travel should reflect who you are. No generic packages. No fake promises.</li>
            <li><strong>Reliability:</strong> We do what we say. Clients trust us because we handle the stress so they can focus on the experience.</li>
            <li><strong>Flexibility:</strong> Plans change. We stay adaptable to meet the needs of our travelers.</li>
            <li><strong>Respect for Culture:</strong> We ensure travelers understand and respect the places they visit, leading to better experiences.</li>
            <li><strong>Service Before Sales:</strong> We advise like friends, not salespeople. This has built long-term loyalty with travelers.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

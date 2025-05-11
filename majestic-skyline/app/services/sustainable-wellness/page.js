"use client";
import { Leaf, HeartPulse, Globe, Yoga, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SustainableAndWellnessTravel() {
  return (
    <div className="pt-60 pb-24 bg-[#f2f2f7] mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/sustainble-travel.jpg"
          alt="Sustainable & Wellness Travel"
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Sustainable & Wellness Travel from Dubai
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="space-y-8 container mx-auto px-5 mb-20 text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-[#1c355e]">
          Mindful Travel Experiences for a Healthier You and a Healthier Planet
        </h2>
        <p>
          Majestic Skyline designs sustainable and wellness-focused travel experiences for conscious travelers based in Dubai. Whether you’re looking for an eco-friendly holiday, a digital detox, or a rejuvenating wellness retreat, our team helps you discover destinations that support both inner peace and environmental awareness. Travel can restore—not only your energy, but also your relationship with nature and yourself.
        </p>
        <p>
          Our Dubai-based travel planners curate journeys that minimize environmental impact, support local communities, and nourish body and mind. From eco-lodges in the jungle to mountaintop retreats and coastal sanctuaries, each experience is designed to align with your values and improve your wellbeing.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Why Wellness and Eco-Conscious Travelers Choose Majestic Skyline
        </h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Customized eco-tourism and wellness itineraries tailored to your lifestyle</strong></li>
          <li><strong>Access to certified sustainable accommodations and low-impact experiences</strong></li>
          <li><strong>Retreat packages including yoga, meditation, fitness, and nutrition guidance</strong></li>
          <li><strong>Partnerships with wellness resorts and nature-focused tour operators</strong></li>
          <li><strong>24/7 Dubai-based support during planning and travel</strong></li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">Sustainable Travel Options</h3>
        <h4 className="text-xl font-semibold text-[#1c355e]">Eco-Friendly Destinations</h4>
        <p>
          We help travelers explore destinations that lead in sustainability, such as Costa Rica, Bhutan, Finland, Sri Lanka, and the Azores. These countries promote responsible tourism through conservation programs, clean energy, and community-based experiences.
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">Green Hotels and Lodges</h4>
        <p>
          We prioritize stays at certified eco-hotels, organic farms, and off-grid lodges. These properties use solar power, avoid single-use plastics, recycle waste, and source food locally. Many also engage in reforestation, animal protection, or local education initiatives.
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">Community-Based Travel</h4>
        <p>
          Support local people, not just big brands. We organize village homestays, community tours, and workshops with local artisans. These trips give you a deeper connection with the culture and directly benefit host communities.
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">Low-Impact Activities</h4>
        <p>
          Enjoy travel that leaves a light footprint. Activities include kayaking, hiking, cycling, birdwatching, and snorkeling in marine reserves. These are planned with ethical operators who respect natural ecosystems and wildlife.
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">Carbon-Conscious Trip Planning</h4>
        <p>
          We help you reduce emissions by suggesting direct flights, public transport use, and local food sourcing. For those who wish to offset their footprint, we offer optional carbon compensation through verified programs.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">Wellness Travel Experiences</h3>
        <h4 className="text-xl font-semibold text-[#1c355e]">Yoga Retreats and Spiritual Escapes</h4>
        <p>
          Reconnect with your body through daily yoga practice in tranquil settings like Bali, India, or the Greek islands. We partner with retreat centers that offer morning flows, guided meditation, and breathwork sessions.
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">Detox and Cleansing Holidays</h4>
        <p>
          Need a reset? We offer detox programs focused on clean eating, fasting, herbal treatments, and energy work. These trips are ideal for anyone dealing with stress, fatigue, or lifestyle imbalance.
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">Mindfulness and Meditation Retreats</h4>
        <p>
          Silence can be healing. Join structured programs in locations like Ubud, Chiang Mai, or rural Portugal, where you disconnect from noise and focus on inner stillness, guided by experienced facilitators.
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">Nature-Focused Healing Retreats</h4>
        <p>
          Travelers seeking peace through nature can choose forest therapy, ocean healing, or mountain immersion. We select environments where natural surroundings support recovery and relaxation.
        </p>
        <h4 className="text-xl font-semibold text-[#1c355e]">Holistic Health Programs</h4>
        <p>
          Our wellness trips may include sessions with life coaches, nutritionists, physiotherapists, or massage therapists. These programs often offer structured support with clear daily routines and balanced nutrition.
        </p>

        <h3 className="text-2xl font-semibold text-[#1c355e]">Destinations for Sustainable & Wellness Travel</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Bali:</strong> Plant-based resorts, yoga studios, jungle retreats</li>
          <li><strong>Sri Lanka:</strong> Ayurveda centers, mountain hikes, eco-resorts</li>
          <li><strong>Thailand:</strong> Detox spas, beach meditation, mindful cooking</li>
          <li><strong>Portugal:</strong> Surf and yoga camps, rural ecolodges, nature escapes</li>
          <li><strong>India:</strong> Traditional yoga schools, Vedic therapies, Himalayan healing</li>
          <li><strong>Bhutan:</strong> Spiritual journeys, clean air, cultural harmony</li>
          <li><strong>Nepal:</strong> Guided trekking, Buddhist retreats, slow travel villages</li>
          <li><strong>Georgia:</strong> Mountain detox escapes, farm stays, healing waters</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">How We Plan Your Wellness or Sustainable Holiday</h3>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Discovery Call:</strong> We begin with a conversation to understand your current state—physically, mentally, and emotionally. We discuss your goals, whether it's rest, clarity, movement, or recovery.</li>
          <li><strong>Curated Options:</strong> Based on your timeline and budget, we present a selection of wellness resorts, retreat centers, and eco-stay locations. Each proposal includes accommodation, meal plans, activity schedules, and optional extras.</li>
          <li><strong>Trip Structuring:</strong> We coordinate flights, transport, pre-retreat stays (if needed), and any visa or insurance requirements. You receive a clear daily outline for your retreat or journey.</li>
          <li><strong>During the Trip:</strong> We remain in touch throughout your travel. Whether it’s a missed transfer or program rescheduling, our Dubai team is available by phone or WhatsApp.</li>
          <li><strong>Post-Trip Check-In:</strong> We follow up after your return to support integration of what you experienced—and help you plan future wellness-focused travel when you’re ready.</li>
        </ol>

        <h3 className="text-2xl font-semibold text-[#1c355e]">Why Travel Consciously with Majestic Skyline</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Local Insight from Dubai:</strong> Our team lives and works in the UAE, so we understand your lifestyle pressures. We design trips that allow for true relaxation and detachment from daily noise.</li>
          <li><strong>Focus on Integrity:</strong> We only work with partners who align with core ethical values—environmental protection, fair wages, and authentic wellness practices.</li>
          <li><strong>Personalized, Not Trendy:</strong> We don’t follow fads. We listen to your needs and suggest experiences that support your personal growth and peace.</li>
          <li><strong>Real Support, Not Just Bookings:</strong> We care about the outcome of your trip, not just the itinerary. That’s why we check in, help you prepare emotionally, and provide post-travel care if needed.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#1c355e]">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {[
            {
              q: "Can I go on a wellness retreat solo?",
              a: "Absolutely. Most retreats are designed to welcome solo travelers and create safe, inclusive environments.",
            },
            {
              q: "Are wellness retreats only for yoga experts?",
              a: "No. All skill levels are welcome. Many programs cater to beginners and focus on healing and self-awareness more than performance.",
            },
            {
              q: "Can I bring a friend or partner?",
              a: "Yes. Wellness travel is great for couples or friends. Shared accommodations and private sessions can be arranged.",
            },
            {
              q: "Is sustainable travel more expensive?",
              a: "Not always. Many eco-friendly accommodations are reasonably priced. You also spend more consciously, avoiding waste and excess.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group p-5 border border-gray-300 rounded-lg transition-all duration-300"
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
      <div className="text-center container mx-auto px-5 max-w-2xl">
        <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
          Travel Gently. Return Renewed.
        </h4>
        <p className="mb-6 text-[#8b7866]">
          Majestic Skyline helps Dubai travelers plan sustainable escapes and wellness journeys that restore balance and expand awareness. Whether you’re seeking silence in the mountains, renewal by the sea, or purpose through community connection, we help you find the right path.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white py-3 px-6 rounded-full text-lg font-semibold transition-colors duration-300 ease-in-out"
        >
          Start Planning Your Wellness Journey
        </Link>
      </div>
    </div>
  );
}

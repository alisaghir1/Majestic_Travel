import { PlaneTakeoff } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="w-full py-28  text-center">
      <div className="container mx-auto px-5 flex flex-col items-center gap-8">
        {/* Large Airplane Icon */}
        <div className="bg-[#1c355e] text-white p-6 rounded-full shadow-lg">
          <PlaneTakeoff size={64} />
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1c355e] leading-tight max-w-4xl">
          Your Journey Starts with <span className="text-[#8b7866]">Majestic Skyline</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#333] leading-relaxed max-w-3xl">
          Based in the heart of Dubai, Majestic Skyline is more than just a travel agency — we&#39;re your personal guide to unforgettable experiences. Whether you&#39;re chasing adventure, relaxation, or discovery, we craft tailor-made trips that match your personality and pace. Say goodbye to cookie-cutter itineraries, and hello to travel that feels like you.
        </p>
      </div>
    </section>
  );
}

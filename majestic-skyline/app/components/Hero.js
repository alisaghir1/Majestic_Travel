import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Hero Background"
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Overlay */}
       <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-4xl text-[#8b7866] md:text-6xl font-bold mb-4">
            Explore the World with Majestic Skyline
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Unforgettable journeys, curated just for you.
          </p>
          <Link
            href="/destinations"
            className="bg-[#1c355e]  hover:bg-[#8b7866] text-white px-6 py-5 rounded-xl text-lg transition duration-200"
          >
            Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}

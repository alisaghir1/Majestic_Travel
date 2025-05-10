
import { Plane, Hotel, Map, Briefcase, Heart, ShieldCheck } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Plane size={40} className="text-[#8b7866]" />,
    title: "Custom Travel Planning",
    description: "Tailor-made itineraries that match your dreams and schedule perfectly.",
    href: "/services/custom-travel",
  },
  {
    icon: <Hotel size={40} className="text-[#8b7866]" />,
    title: "Flights & Hotels",
    description: "Book the best flights and top-rated accommodations at great prices.",
    href: "/services/flights-and-accommodations",
  },
  {
    icon: <Map size={40} className="text-[#8b7866]" />,
    title: "Guided Tours",
    description: "Experience curated tours with local experts and cultural insights.",
    href: "/services/guided-tours",
  },
  {
    icon: <Briefcase size={40} className="text-[#8b7866]" />,
    title: "Business Travel",
    description: "Efficient, professional travel solutions for busy corporate clients.",
    href: "/services/business-travel",
  },
  {
    icon: <Heart size={40} className="text-[#8b7866]" />,
    title: "Romantic Escapes",
    description: "Plan unforgettable honeymoons, anniversaries, or couples' retreats.",
    href: "/services/romantic-escapes",
  },
  {
    icon: <ShieldCheck size={40} className="text-[#8b7866]" />,
    title: "Visa & Insurance Help",
    description: "Get assistance with visa applications and travel insurance coverage.",
    href: "/services/visa-insurance",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 px-4 bg-[#1c355e]">
      <div className="container mx-auto px-5 text-start">
        <h2 className="text-4xl md:text-5xl font-bold text-[#8b7866] mb-6">Our Main Services</h2>
        <p className="text-white mb-14  mx-auto md:text-xl">
          Explore our core travel services crafted to make your journey effortless and memorable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ icon, title, description, href }, index) => (
            <Link
              key={index}
              href={href}
              className="group bg-[#f2f2f7] border border-gray-200 rounded-2xl shadow-md p-8 text-left hover:scale-110 hover:shadow-xl transition duration-300 hover:border-[#8b7866]"
            >
              <div className="mb-6">{icon}</div>
              <h3 className="text-2xl font-semibold text-[#1c355e] mb-3 group-hover:underline">
                {title}
              </h3>
              <p className="text-black text-base leading-relaxed">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

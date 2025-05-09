import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import ServicesOverview from "./components/ServicesOverview";

export default function Home() {
  return (
    <div className="bg-[#f2f2f7]">
    <Hero />
    <IntroSection />
    <ServicesOverview />
    </div>
  );
}

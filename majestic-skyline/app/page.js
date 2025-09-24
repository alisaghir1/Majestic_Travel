import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import ServicesOverview from "./components/ServicesOverview";
import FeaturedDestinations from "./components/FeaturedDestinations";
import TestimonialsSlider from "./components/TestimonialsSlider";
import { generatePageMetadata } from "./lib/metadata";
// import NewsletterSignUp from "./components/NewsletterSignup";

export async function generateMetadata() {
  return generatePageMetadata('home', 'en');
}

export default function Home() {
  return (
    <div className="bg-[#f2f2f7]">
    <Hero />
    <IntroSection />
    <ServicesOverview />
    <FeaturedDestinations />
    <TestimonialsSlider />
    </div>
  );
}

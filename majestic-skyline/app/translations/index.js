// Main translations index file
import { navbarTranslations } from './components/navbar.js';
import { heroTranslations } from './components/hero.js';
import introSectionTranslations from './components/introSection.js';
import servicesOverviewTranslations from './components/servicesOverview.js';
import featuredDestinationsTranslations from './components/featuredDestinations.js';
import { testimonialsTranslations } from './components/testimonials.js';
import { newsletterTranslations } from './components/newsletter.js';
import { footerTranslations } from './components/footer.js';

// Page translations
import { contactPageTranslations } from './pages/contact.js';
import { aboutPageTranslations } from './pages/about.js';
import { destinationsPageTranslations } from './pages/destinations.js';
import { blogPageTranslations } from './pages/blog.js';

export const translations = {
  en: {
    // Component translations
    navbar: navbarTranslations.en,
    hero: heroTranslations.en,
    introSection: introSectionTranslations.en,
    servicesOverview: servicesOverviewTranslations.en,
    featuredDestinations: featuredDestinationsTranslations.en,
    testimonials: testimonialsTranslations.en,
    newsletter: newsletterTranslations.en,
    footer: footerTranslations.en,
    
    // Page translations
    contactPage: contactPageTranslations.en,
    aboutPage: aboutPageTranslations.en,
    destinationsPage: destinationsPageTranslations.en,
    blogPage: blogPageTranslations.en,
  },
  ar: {
    // Component translations
    navbar: navbarTranslations.ar,
    hero: heroTranslations.ar,
    introSection: introSectionTranslations.ar,
    servicesOverview: servicesOverviewTranslations.ar,
    featuredDestinations: featuredDestinationsTranslations.ar,
    testimonials: testimonialsTranslations.ar,
    newsletter: newsletterTranslations.ar,
    footer: footerTranslations.ar,
    
    // Page translations
    contactPage: contactPageTranslations.ar,
    aboutPage: aboutPageTranslations.ar,
    destinationsPage: destinationsPageTranslations.ar,
    blogPage: blogPageTranslations.ar,
  }
};

// Export individual translation modules for easier access
export {
  navbarTranslations,
  heroTranslations,
  introSectionTranslations,
  servicesOverviewTranslations,
  featuredDestinationsTranslations,
  testimonialsTranslations,
  newsletterTranslations,
  footerTranslations,
  contactPageTranslations,
  aboutPageTranslations,
  destinationsPageTranslations,
  blogPageTranslations,
};

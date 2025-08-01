"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { RTLWrapper } from "./RTLWrapper";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, isRTL } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent body scroll when mobile menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const serviceLinks = [
    { labelKey: "navbar.customTravel", href: "/services/custom-travel" },
    { labelKey: "navbar.flightsAccommodations", href: "/services/flights-and-accommodations" },
    { labelKey: "navbar.guidedTours", href: "/services/guided-tours" },
    { labelKey: "navbar.businessTravel", href: "/services/business-travel" },
    { labelKey: "navbar.romanticEscapes", href: "/services/romantic-escapes" },
    { labelKey: "navbar.visaInsurance", href: "/services/visa-insurance" },
    { labelKey: "navbar.sustainableWellness", href: "/services/sustainable-wellness" },
    { labelKey: "navbar.carRental", href: "/services/car-rental" },
    { labelKey: "navbar.cargoServices", href: "/services/cargo" },
    { labelKey: "navbar.hotelReservations", href: "/services/hotel-reservation" },
    { labelKey: "navbar.privateJet", href: "/services/private-jet" },
    { labelKey: "navbar.transportation", href: "/services/transportation" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else { 
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup body scroll lock on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close mobile menu and restore scroll when clicking menu items
  const handleMobileMenuClose = () => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <RTLWrapper>
      <header
        className={`fixed text-xl top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl py-3"
            : "bg-white/90 backdrop-blur-sm shadow-lg py-6"
        }`}
      >
      <div className="mx-auto xl:px-20 px-5 flex items-center justify-between transition-all duration-500 ease-in-out">
        {/* Logo */}
        <Link href="/" className="block transform hover:scale-105 transition-transform duration-300">
          <Image
            src="/logo.svg"
            alt="logo image"
            width={150}
            height={150}
            className={`transition-all duration-500 ease-in-out ${
              scrolled ? "w-40 sm:w-44 md:w-48 lg:w-52" : "w-50 sm:w-52 md:w-56 lg:w-64"
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className={`hidden lg:flex items-center text-[#8b7866] font-medium relative ${
          isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'
        }`}>
          <Link
            className="hover:text-[#1c355e] transition-all duration-300 relative group"
            href="/"
          >
            {t('navbar.home')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1c355e] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            className="hover:text-[#1c355e] transition-all duration-300 relative group"
            href="/about"
          >
            {t('navbar.about')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1c355e] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <span className="hover:text-[#1c355e] cursor-pointer flex items-center gap-1 transition-all duration-300 relative group">
              {t('navbar.services')}
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
              />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1c355e] transition-all duration-300 group-hover:w-full"></span>
            </span>
            <div className={`absolute top-full left-0 bg-white/95 backdrop-blur-lg shadow-2xl mt-2 rounded-2xl p-6 w-80 transition-all duration-300 ease-in-out transform ${
              servicesDropdownOpen 
                ? 'opacity-100 translate-y-0 visible' 
                : 'opacity-0 translate-y-2 invisible'
            }`}>
              <div className="grid grid-cols-1 gap-3">
                {serviceLinks.map(({ labelKey, href }, index) => (
                  <Link
                    key={href}
                    href={href}
                    className="block text-[#8b7866] hover:text-[#1c355e] hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-300 transform hover:translate-x-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {t(labelKey)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            className="hover:text-[#1c355e] transition-all duration-300 relative group"
            href="/destinations"
          >
            {t('navbar.destinations')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1c355e] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            className="hover:text-[#1c355e] transition-all duration-300 relative group"
            href="/blog"
          >
            {t('navbar.blog')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1c355e] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white px-6 py-2 rounded-full hover:shadow-lg hover:from-[#8b7866] hover:to-[#1c355e] transform hover:scale-105 transition-all duration-300"
            href="/contact"
          >
            {t('navbar.contact')}
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden transition-all duration-300 cursor-pointer relative z-50 p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block h-0.5 w-6 bg-[#1c355e] transform transition duration-300 ease-in-out ${
              menuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
            }`}></span>
            <span className={`absolute block h-0.5 w-6 bg-[#1c355e] transform transition duration-300 ease-in-out ${
              menuOpen ? 'opacity-0' : 'opacity-100 translate-y-2'
            }`}></span>
            <span className={`absolute block h-0.5 w-6 bg-[#1c355e] transform transition duration-300 ease-in-out ${
              menuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 bg-white/95 backdrop-blur-lg transition-all duration-500 ease-in-out z-40 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ 
          top: scrolled ? '76px' : '100px',
          height: `calc(100vh - ${scrolled ? '76px' : '100px'})`
        }}
      >
        <div className="h-full overflow-y-auto">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex flex-col space-y-4">
              <Link
                className="text-xl text-[#8b7866] hover:text-[#1c355e] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50"
                href="/"
                onClick={handleMobileMenuClose}
              >
                {t('navbar.home')}
              </Link>
              <Link
                className="text-xl text-[#8b7866] hover:text-[#1c355e] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50"
                href="/about"
                onClick={handleMobileMenuClose}
              >
                {t('navbar.about')}
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="flex items-center justify-between text-xl text-[#8b7866] hover:text-[#1c355e] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50"
                >
                  <span>{t('navbar.services')}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  servicesDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-2 space-y-2 bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-3">
                    {serviceLinks.map(({ labelKey, href }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={handleMobileMenuClose}
                        className="block text-base text-[#8b7866] hover:text-[#1c355e] transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/70"
                      >
                        {t(labelKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                className="text-xl text-[#8b7866] hover:text-[#1c355e] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50"
                href="/destinations"
                onClick={handleMobileMenuClose}
              >
                {t('navbar.destinations')}
              </Link>
              <Link
                className="text-xl text-[#8b7866] hover:text-[#1c355e] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50"
                href="/blog"
                onClick={handleMobileMenuClose}
              >
                {t('navbar.blog')}
              </Link>
              <Link
                className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white px-6 py-3 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center text-xl font-medium mt-4"
                href="/contact"
                onClick={handleMobileMenuClose}
              >
                {t('navbar.contact')}
              </Link>
              <div className="mt-4 flex justify-center">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Ensure mobile menu doesn't interfere with page scroll */
        body.menu-open {
          overflow: hidden;
        }
      `}</style>
    </header>
    </RTLWrapper>
  );
}

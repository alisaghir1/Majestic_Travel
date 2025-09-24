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
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(false);
  const { t, isRTL, language } = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent body scroll when mobile menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Fetch services dynamically
  const fetchServices = async () => {
    if (services.length > 0) return; // Don't fetch if already loaded
    
    setServicesLoading(true);
    try {
      const response = await fetch('/api/services');
      if (response.ok) {
        const data = await response.json();
        setServices(data || []);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setServicesLoading(false);
    }
  };

  // Helper function to get localized content
  const getLocalizedContent = (content) => {
    if (typeof content === 'object' && content !== null) {
      return content[language] || content.en || content.ar || '';
    }
    return content || '';
  };

  // Generate service slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  // Handle services dropdown with dynamic loading
  const handleServicesMouseEnter = () => {
    setServicesDropdownOpen(true);
    fetchServices();
  };

  const handleServicesMouseLeave = () => {
    setServicesDropdownOpen(false);
  };

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
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <Link
              href="/services"
              className="hover:text-[#1c355e] cursor-pointer flex items-center gap-1 transition-all duration-300 relative group"
            >
              {t('navbar.services')}
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
              />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1c355e] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className={`absolute top-full left-0 bg-white/95 backdrop-blur-lg shadow-2xl mt-2 rounded-2xl p-6 w-96 transition-all duration-300 ease-in-out transform ${
              servicesDropdownOpen 
                ? 'opacity-100 translate-y-0 visible' 
                : 'opacity-0 translate-y-2 invisible'
            }`}>
              {/* Header */}
              <div className="border-b border-gray-100 pb-3 mb-4">
                <h3 className="text-lg font-semibold text-[#1c355e]">
                  {t('navbar.services')}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {language === 'ar' ? 'اكتشف خدماتنا المتميزة' : 'Discover our premium services'}
                </p>
              </div>

              {/* Dynamic Services List */}
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {servicesLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#1c355e]"></div>
                    <span className="ml-2 text-sm text-gray-500">
                      {language === 'ar' ? 'جاري تحميل الخدمات...' : 'Loading services...'}
                    </span>
                  </div>
                ) : services.length > 0 ? (
                  <>
                    {services.slice(0, 8).map((service, index) => {
                      const serviceName = getLocalizedContent(service.title || service.name);
                      const serviceDesc = getLocalizedContent(service.description);
                      const servicePrice = getLocalizedContent(service.price);
                      const serviceSlug = service.slug || generateSlug(serviceName);
                      
                      return (
                        <Link
                          key={service.id || index}
                          href={`/services/${serviceSlug}`}
                          className="group block p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-1"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="flex items-start space-x-3">
                            {service.image && (
                              <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                                <Image
                                  src={service.image}
                                  alt={serviceName}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between">
                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#1c355e] transition-colors duration-200 line-clamp-1">
                                  {serviceName}
                                </h4>
                                {servicePrice && (
                                  <span className="text-xs font-semibold text-[#8b7866] ml-2 flex-shrink-0">
                                    {servicePrice}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {serviceDesc}
                              </p>
                              {service.category && (
                                <span className="inline-block mt-2 px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                                  {language === 'ar' 
                                    ? service.category === 'business' ? 'تجاري' : 
                                      service.category === 'leisure' ? 'ترفيهي' : 
                                      service.category === 'specialized' ? 'متخصص' : 
                                      service.category === 'transportation' ? 'نقل' :
                                      service.category === 'accommodation' ? 'إقامة' : service.category
                                    : service.category.charAt(0).toUpperCase() + service.category.slice(1)
                                  }
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                    
                    {/* View All Services Link */}
                    <div className="border-t border-gray-100 pt-3 mt-4">
                      <Link
                        href="/services"
                        className="block text-center text-[#1c355e] hover:text-[#8b7866] font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
                      >
                        {language === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
                        <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 00-2 2v2z" />
                    </svg>
                    <p className="text-sm text-gray-500 mt-2">
                      {language === 'ar' ? 'لا توجد خدمات متاحة حالياً' : 'No services available'}
                    </p>
                  </div>
                )}
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
                <div className="flex items-center">
                  <Link
                    href="/services"
                    onClick={handleMobileMenuClose}
                    className="flex-1 text-xl text-[#8b7866] hover:text-[#1c355e] transition-all duration-300 py-3 px-4 rounded-lg hover:bg-blue-50"
                  >
                    {t('navbar.services')}
                  </Link>
                  <button
                    onClick={() => {
                      setServicesDropdownOpen(!servicesDropdownOpen);
                      if (!servicesDropdownOpen) {
                        fetchServices();
                      }
                    }}
                    className="text-xl text-[#8b7866] hover:text-[#1c355e] transition-all duration-300 py-3 px-2 rounded-lg hover:bg-blue-50"
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        servicesDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  servicesDropdownOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-2 space-y-2 bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-3">
                    {servicesLoading ? (
                      <div className="flex items-center justify-center py-4">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#1c355e]"></div>
                        <span className="ml-2 text-sm text-gray-500">
                          {language === 'ar' ? 'جاري تحميل الخدمات...' : 'Loading services...'}
                        </span>
                      </div>
                    ) : services.length > 0 ? (
                      <>
                        {services.map((service, index) => {
                          const serviceName = getLocalizedContent(service.title || service.name);
                          const serviceSlug = service.slug || generateSlug(serviceName);
                          
                          return (
                            <Link
                              key={service.id || index}
                              href={`/services/${serviceSlug}`}
                              onClick={handleMobileMenuClose}
                              className="block text-base text-[#8b7866] hover:text-[#1c355e] transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/70"
                            >
                              {serviceName}
                            </Link>
                          );
                        })}
                        <Link
                          href="/services"
                          onClick={handleMobileMenuClose}
                          className="block text-base text-[#1c355e] font-medium transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/70 border-t border-gray-200 mt-2 pt-3"
                        >
                          {language === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'} →
                        </Link>
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-sm text-gray-500">
                          {language === 'ar' ? 'لا توجد خدمات متاحة حالياً' : 'No services available'}
                        </p>
                      </div>
                    )}
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

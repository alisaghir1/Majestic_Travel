"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const serviceLinks = [
    { label: "Custom Travel Planning", href: "/services/custom-travel" },
    { label: "Flights & Accommodations", href: "/services/flights-and-accommodations" },
    { label: "Guided Tours", href: "/services/guided-tours" },
    { label: "Business Travel", href: "/services/business-travel" },
    { label: "Romantic Escapes", href: "/services/romantic-escapes" },
    { label: "Visa & Insurance Help", href: "/services/visa-insurance" },
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed text-xl top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f2f2f7] shadow-md py-2"
          : "bg-white shadow-md to-[#e9e3dd]  py-10"
      }`}
    >
      <div className="mx-auto xl:px-20 px-5 flex items-center justify-between  transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="text-2xl">
          <Image src="/logo.svg" width={250} height={250} alt="logo image" />
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`hidden lg:flex space-x-6 text-[#8b7866]   font-medium relative `}
        >
          <Link
            className="hover:text-[#1c355e] transition duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#1c355e] transition duration-300"
            href="/about"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
          >
            <button className="hover:text-[#1c355e] cursor-pointer flex items-center gap-1  transition-all duration-300">
              Services <ChevronDown size={16} />
            </button>
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-lg p-4 w-64 space-y-2 z-50">
                {serviceLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block text-[#8b7866] hover:text-[#1c355e] transition-all duration-300"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            className="hover:text-[#1c355e] transition-all duration-300"
            href="/destinations"
          >
            Destinations
          </Link>
          <Link
            className="hover:text-[#1c355e] transition-all duration-300"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="hover:text-[#1c355e] transition-all duration-300"
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden  transition-transform duration-300 cursor-pointer`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-transparent  overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex  flex-col px-4 py-2 space-y-3 mt-10  font-medium">
          <Link
            className="hover:text-[#1c355e] transition-all duration-300"
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="hover:text-[#1c355e] transition-all duration-300"
            href="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center hover:text-[#1c355e]  w-full cursor-pointer transition-all duration-300 ease-in-out"
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`hover:text-[#1c355e] transition-all duration-300 cursor-pointer ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesDropdownOpen && (
              <div className="ml-2 mt-2 space-y-2">
                {serviceLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesDropdownOpen(false);
                    }}
                    className="block text-sm text-[#8b7866] hover:text-[#1c355e] transition-all duration-300 "
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            className="hover:text-[#1c355e] transition-all duration-300"
            href="/destinations"
            onClick={() => setMenuOpen(false)}
          >
            Destinations
          </Link>
          <Link
            className="hover:text-[#1c355e] transition-all duration-300"
            href="/blog"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            className="hover:text-[#1c355e] transition-all duration-300"
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

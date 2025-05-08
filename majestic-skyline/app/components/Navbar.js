"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300">
      <div className="xl:max-w-3/4 mx-auto flex items-center justify-between px-4 py-10">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors duration-300"
        >
          Majestic Skyline
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Destinations", "/destinations"],
            ["Blog", "/blog"],
            ["Testimonials", "/testimonials"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <Link
              key={label}
              href={path}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-gray-700 transition-transform duration-300 cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-2 space-y-3 text-gray-800 font-medium">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Destinations", "/destinations"],
            ["Blog", "/blog"],
            ["Testimonials", "/testimonials"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <Link
              key={label}
              href={path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

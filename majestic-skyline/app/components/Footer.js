"use client";

import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#1c355e] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-lg mb-6">
              Get the latest travel inspiration and exclusive deals right in
              your inbox.
            </p>
            <div className="flex justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-md px-6 py-4 text-lg rounded-full bg-white border border-[#1c355e] focus:outline-none focus:ring-2 focus:ring-[#1c355e] transition-all"
              />
              <button className="px-6 py-4 bg-[#1c355e] text-white text-lg rounded-full hover:bg-[#8b7866] transition-all">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-6 mb-4">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1c355e] hover:text-[#8b7866] transition-all"
              >
                <Instagram className="w-8 h-8" />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1c355e] hover:text-[#8b7866] transition-all"
              >
                <Facebook className="w-8 h-8" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1c355e] hover:text-[#8b7866] transition-all"
              >
                <Linkedin className="w-8 h-8" />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#1c355e]">
              Contact Us
            </h3>

            <p className="text-lg mb-2">
              <span className="font-semibold text-[#1c355e]">Email: </span>
              <a
                href="mailto:hello@majesticskyline.com"
                className="hover:text-[#8b7866] transition-all"
              >
                hello@majesticskyline.com
              </a>
            </p>

            <p className="text-lg mb-2">
              <span className="font-semibold text-[#1c355e]">WhatsApp: </span>
              <a
                href="tel:+971XXX"
                className="hover:text-[#8b7866] transition-all"
              >
                +971 XXX XXX XXX
              </a>
            </p>

            <p className="text-lg">
              <span className="font-semibold text-[#1c355e]">Call: </span>
              <a
                href="tel:+971XXX"
                className="hover:text-[#8b7866] transition-all"
              >
                +971 XXX XXX XXX
              </a>
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 text-center text-sm text-[#8b7866]">
          <p>
            &copy; {new Date().getFullYear()} Majestic Skyline. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

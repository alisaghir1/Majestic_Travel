"use client";
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="bg-[#f2f2f7] pt-60 pb-20" id="contact">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#1c355e]">
          Get in Touch with Majestic Skyline
        </h2>
        <p className="pt-6 pb-6 text-2xl max-w-2xl m-auto text-[#1c355e]/80">
          Whether you&#39;re planning your next dream vacation or need assistance
          with your current journey, we&#39;re here to help. Choose an option
          below, and our team will be delighted to assist you in creating an
          unforgettable travel experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 pt-12">
        {/* Left Column */}
        <div className="xl:text-xl text-lg">
          <h3 className="text-3xl font-semibold text-[#1c355e]">
            Reach Out to Our Travel Experts
          </h3>
          <p className="mt-4 mb-4 text-[#1c355e]/80">
            Have a question about your dream destination? Or maybe you&#39;d like to
            customize your travel plans? Whatever it is, we&#39;re ready to make
            it happen. Get in touch today and let us help you plan the journey
            of a lifetime.
          </p>

          <div className="flex items-center mt-8 space-x-2 text-[#1c355e]">
            <MapPin className="w-5 h-5" />
            <span>Majestic Skyline, Dubai, United Arab Emirates</span>
          </div>

          <div className="flex items-center mt-8 space-x-2 text-[#1c355e]">
            <Mail className="w-5 h-5" />
            <a href="mailto:hello@company.com" className="hover:underline">
              hello@majestic-skyline.com
            </a>
          </div>

          <div className="flex items-center mt-8 space-x-2 text-[#1c355e]">
            <Phone className="w-5 h-5" />
            <a href="tel:+511111111111" className="hover:underline">
              +51 11111111111
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form>
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="mb-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] placeholder:text-gray-500 bg-white focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
              />
            </div>

            <div className="mb-5">
              <input
                id="email_address"
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] placeholder:text-gray-500 bg-white focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
              />
            </div>

            <div className="mb-5">
              <select
                name="inquiryType"
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] bg-white focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
              >
                <option value="">Select Inquiry Type</option>
                <option value="booking">Booking Inquiry</option>
                <option value="general">General Question</option>
              </select>
            </div>

            <div className="mb-5">
              <input
                id="destination"
                type="text"
                name="destination"
                placeholder="Destination"
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] placeholder:text-gray-500 bg-white focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
              />
            </div>

            <div className="mb-5">
              <input
                id="persons"
                type="number"
                name="persons"
                placeholder="Number Of Persons"
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] placeholder:text-gray-500 bg-white focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
              />
            </div>

            <div className="mb-5">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none text-[#1c355e] placeholder:text-gray-500 bg-white h-36 focus:ring-2 focus:ring-[#1c355e] focus:border-[#1c355e]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold text-white bg-[#1c355e] cursor-pointer rounded-md hover:bg-[#162947] transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

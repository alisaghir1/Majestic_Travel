'use client';
import {
  Hotel,
  MapPin,
  Shield,
  Clock,
  Star,
  Plane,
  Phone,
  Users,
  FileText,
  Globe,
  CheckCircle,
  Calendar,
  CreditCard,
  Wifi,
  ArrowRight,
  Sparkles,
  Heart,
  Building,
  Home,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HotelReservationServices() {
  const hotelTypes = [
    {
      icon: <Building className="w-8 h-8" />,
      name: "Budget Hotels",
      description: "Comfortable stays at affordable prices",
      features: ["Free WiFi", "24/7 Reception", "Clean Rooms", "Central Location"],
      price: "80",
      gradient: "from-[#1c355e] to-[#8b7866]",
      items: ["Economy Rooms", "Shared Facilities", "Basic Amenities"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: "Boutique Properties",
      description: "Unique charm and personalized service",
      features: ["Designer Decor", "Local Character", "Personal Service", "Unique Experience"],
      price: "200",
      gradient: "from-[#8b7866] to-[#1c355e]",
      items: ["Themed Rooms", "Local Art", "Cultural Touch"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      name: "Luxury Hotels",
      description: "Premium comfort and world-class amenities",
      features: ["Concierge Service", "Spa & Wellness", "Fine Dining", "Premium Location"],
      price: "500",
      gradient: "from-[#1c355e] to-[#2a4a73]",
      items: ["Suites", "Butler Service", "Exclusive Access"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: "Family Resorts",
      description: "Perfect for families and group travelers",
      features: ["Family Rooms", "Kids Activities", "Pool & Recreation", "All-Inclusive Options"],
      price: "300",
      gradient: "from-[#8b7866] to-[#a68b5b]",
      items: ["Multi-bed Rooms", "Family Suites", "Connecting Rooms"]
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Network",
      description: "Hotels in 200+ destinations worldwide",
      color: "text-[#1c355e]",
      bg: "bg-blue-100"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Best Price Guarantee",
      description: "Competitive rates and exclusive deals",
      color: "text-[#8b7866]",
      bg: "bg-amber-100"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Flexible Booking",
      description: "Easy changes and cancellations",
      color: "text-[#1c355e]",
      bg: "bg-blue-50"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
      color: "text-[#8b7866]",
      bg: "bg-amber-50"
    }
  ];

  const process = [
    { step: "01", title: "Search & Compare", desc: "Browse hotels and compare options", icon: <Globe className="w-6 h-6" /> },
    { step: "02", title: "Select & Book", desc: "Choose your perfect stay", icon: <Calendar className="w-6 h-6" /> },
    { step: "03", title: "Confirm Details", desc: "Receive instant confirmation", icon: <CheckCircle className="w-6 h-6" /> },
    { step: "04", title: "Enjoy Stay", desc: "Check-in and relax", icon: <Hotel className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-[#f2f2f7] mt-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c355e] via-[#8b7866] to-[#1c355e] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white rounded-full px-6 py-2 shadow-lg">
                <Hotel className="w-5 h-5 text-[#1c355e] mr-2" />
                <span className="text-[#1c355e] font-semibold">Hotel Reservations</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Discover Your
                <span className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] bg-clip-text text-transparent"> Perfect</span>
                <br />Stay Anywhere
              </h1>
              <p className="text-xl text-[#8b7866] leading-relaxed">
                From budget-friendly rooms to luxury suites, find the ideal accommodation that matches your travel style and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Book Now
                </Link>
                <button className="border-2 border-[#1c355e] text-[#1c355e] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1c355e] hover:text-white transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/services/flight-and-accommodation.jpg"
                  alt="Hotel Reservation Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1c355e]/20 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black text-[#1c355e]">50K+</div>
                <div className="text-[#8b7866]">Hotels</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black text-[#8b7866]">24/7</div>
                <div className="text-[#1c355e]">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Choose Your <span className="text-[#8b7866]">Accommodation Style</span>
            </h2>
            <p className="text-xl text-[#8b7866] max-w-2xl mx-auto">
              From budget-friendly stays to luxury experiences, find the perfect match for your travel needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hotelTypes.map((hotel, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Gradient Header */}
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${hotel.gradient} rounded-t-3xl`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${hotel.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {hotel.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 mb-4">{hotel.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-black text-gray-900">AED {hotel.price}</span>
                    <span className="text-gray-500 ml-2">per night</span>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {hotel.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Room Types */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.items.map((item, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <Link
                    href="/contact"
                    className={`w-full bg-gradient-to-r ${hotel.gradient} text-white py-3 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-[#1c355e] to-[#8b7866]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Why Book With Majestic Skyline?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience seamless hotel booking with unmatched support and value
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-24 h-24 ${benefit.bg} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={benefit.color}>
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              How It <span className="text-[#8b7866]">Works</span>
            </h2>
            <p className="text-xl text-[#8b7866]">Simple steps to book your perfect stay</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#1c355e] to-[#8b7866] transform translate-x-4"></div>
                  )}
                  
                  {/* Step Circle */}
                  <div className="relative z-10 inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-[#1c355e] to-[#8b7866] rounded-full text-white mb-4 shadow-lg">
                    <div className="absolute inset-0 bg-white rounded-full scale-75 flex items-center justify-center">
                      <div className="text-[#1c355e]">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-sm font-bold text-[#1c355e] mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-[#1c355e] mb-2">{step.title}</h3>
                  <p className="text-[#8b7866]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Complete Hotel <span className="text-[#8b7866]">Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Diverse accommodation options", "Straightforward booking process", "Reliable local insights",
              "Seamless tour integration", "Options for every budget", "Personalized support service",
              "Solo, family & group bookings", "Secure payment options", "Consistent quality standards",
              "Real-time availability", "Instant confirmation", "Multilingual assistance"
            ].map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-[#1c355e] mr-3 flex-shrink-0" />
                <span className="text-[#8b7866] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Booking <span className="text-[#8b7866]">Questions?</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How do I find the best hotel for my needs?",
                a: "Our team provides personalized recommendations based on your preferences, budget, and travel purpose. We consider location, amenities, and guest reviews to match you with the perfect stay."
              },
              {
                q: "Can I modify or cancel my reservation?",
                a: "Yes! We offer flexible booking options. Modification and cancellation policies depend on the specific hotel, but we'll help you understand the terms before booking."
              },
              {
                q: "Do you offer group discounts?",
                a: "Absolutely! We have special rates for group bookings, family reunions, and corporate stays. Contact us for customized group packages."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, bank transfers, and digital payment methods. Secure transactions are guaranteed with flexible payment options."
              },
              {
                q: "Do you provide airport transfer arrangements?",
                a: "Yes! We can coordinate airport transfers, local transportation, and integrate your hotel stay with other travel services for a seamless experience."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <summary className="cursor-pointer p-6 font-bold text-lg text-[#1c355e] hover:text-[#8b7866] transition-colors duration-300">
                  {faq.q}
                </summary>
                <div className="px-6 pb-6 text-[#8b7866] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1c355e] via-[#8b7866] to-[#1c355e]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Book Your Perfect Stay?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover comfort, convenience, and peace of mind with our curated hotel selection worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#1c355e] px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Start Booking
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="tel:+971555555555"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1c355e] transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

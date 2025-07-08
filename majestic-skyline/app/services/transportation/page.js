'use client';
import {
  Car,
  MapPin,
  Shield,
  Clock,
  Star,
  Plane,
  Phone,
  Users,
  Navigation,
  Globe,
  CheckCircle,
  Calendar,
  Coffee,
  Wifi,
  ArrowRight,
  Sparkles,
  Heart,
  Building,
  Bus,
  Route,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function TransportationServices() {
  const transportTypes = [
    {
      icon: <Car className="w-8 h-8" />,
      name: "Private Transfers",
      description: "Comfortable private vehicles for individuals and families",
      features: ["1-4 Passengers", "Personal Driver", "Door-to-Door", "Flexible Schedule"],
      price: "120",
      gradient: "from-[#1c355e] to-[#8b7866]",
      items: ["Luxury Sedan", "SUV Available", "Child Seats"]
    },
    {
      icon: <Bus className="w-8 h-8" />,
      name: "Group Transport",
      description: "Spacious buses for larger groups and tours",
      features: ["8-50 Passengers", "Air Conditioning", "Tour Guide", "Scenic Routes"],
      price: "80",
      gradient: "from-[#8b7866] to-[#1c355e]",
      items: ["Mini Bus", "Coach Bus", "WiFi Equipped"]
    },
    {
      icon: <Plane className="w-8 h-8" />,
      name: "Airport Transfers",
      description: "Reliable pickup and drop-off from major airports",
      features: ["Flight Monitoring", "Meet & Greet", "Luggage Assist", "No Wait Fees"],
      price: "100",
      gradient: "from-[#1c355e] to-[#2a4a73]",
      items: ["Welcome Service", "Sign Holding", "Flight Tracking"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: "City Tours",
      description: "Guided transportation to cultural and tourist attractions",
      features: ["Local Guide", "Multiple Stops", "Photo Stops", "Cultural Insights"],
      price: "150",
      gradient: "from-[#8b7866] to-[#a68b5b]",
      items: ["Half Day", "Full Day", "Custom Routes"]
    }
  ];

  const benefits = [
    {
      icon: <Navigation className="w-12 h-12" />,
      title: "Local Expertise",
      description: "Experienced drivers with regional knowledge",
      color: "text-[#1c355e]",
      bg: "bg-blue-100"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Timely Service",
      description: "Punctual departures and arrivals",
      color: "text-[#8b7866]",
      bg: "bg-amber-100"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Safe & Secure",
      description: "Well-maintained vehicles and professional drivers",
      color: "text-[#1c355e]",
      bg: "bg-blue-50"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Comfort First",
      description: "Air conditioning and spacious interiors",
      color: "text-[#8b7866]",
      bg: "bg-amber-50"
    }
  ];

  const process = [
    { step: "01", title: "Book Online", desc: "Reserve your transportation in advance", icon: <Calendar className="w-6 h-6" /> },
    { step: "02", title: "Confirmation", desc: "Receive pickup details and driver info", icon: <CheckCircle className="w-6 h-6" /> },
    { step: "03", title: "Meet & Greet", desc: "Driver meets you with clear signage", icon: <Users className="w-6 h-6" /> },
    { step: "04", title: "Enjoy Journey", desc: "Comfortable ride to your destination", icon: <Route className="w-6 h-6" /> }
  ];

  const destinations = [
    {
      icon: <Building className="w-6 h-6" />,
      name: "City Centers",
      description: "Hotels, shopping districts, business areas"
    },
    {
      icon: <Star className="w-6 h-6" />,
      name: "Cultural Sites",
      description: "Museums, historic landmarks, galleries"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      name: "Nature Parks",
      description: "National parks, scenic viewpoints, trails"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Coastal Areas",
      description: "Beaches, marinas, waterfront attractions"
    }
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
                <Car className="w-5 h-5 text-[#1c355e] mr-2" />
                <span className="text-[#1c355e] font-semibold">Transportation Services</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Travel With
                <span className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] bg-clip-text text-transparent"> Confidence</span>
                <br />Every Mile
              </h1>
              <p className="text-xl text-[#8b7866] leading-relaxed">
                Experience seamless travel across cities and nature destinations with our reliable transportation services and knowledgeable local drivers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Book Transport
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-[#1c355e] text-[#1c355e] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1c355e] hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/services/transportation.jpg"
                  alt="Transportation Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1c355e]/20 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black text-[#1c355e]">100+</div>
                <div className="text-[#8b7866]">Destinations</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black text-[#8b7866]">24/7</div>
                <div className="text-[#1c355e]">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Choose Your <span className="text-[#8b7866]">Transport Style</span>
            </h2>
            <p className="text-xl text-[#8b7866] max-w-2xl mx-auto">
              From private transfers to group tours, find the perfect transportation solution for your journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportTypes.map((transport, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Gradient Header */}
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${transport.gradient} rounded-t-3xl`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${transport.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {transport.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{transport.name}</h3>
                  <p className="text-gray-600 mb-4">{transport.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-black text-gray-900">AED {transport.price}</span>
                    <span className="text-gray-500 ml-2">starting</span>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {transport.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Vehicle Types */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {transport.items.map((item, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <Link
                    href="/contact"
                    className={`w-full bg-gradient-to-r ${transport.gradient} text-white py-3 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
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
              Why Choose Our Transportation?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience reliable, comfortable, and efficient transportation services
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

      {/* Destinations Covered */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Destinations <span className="text-[#8b7866]">We Cover</span>
            </h2>
            <p className="text-xl text-[#8b7866] max-w-2xl mx-auto">
              From city centers to coastal retreats, we'll take you anywhere you want to go
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {destinations.map((destination, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#1c355e] to-[#8b7866] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {destination.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1c355e] mb-2">{destination.name}</h3>
                <p className="text-[#8b7866]">{destination.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              How It <span className="text-[#8b7866]">Works</span>
            </h2>
            <p className="text-xl text-[#8b7866]">Simple steps to book your transportation</p>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Transportation <span className="text-[#8b7866]">Features</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Well-maintained vehicles", "Air conditioning & comfort", "Knowledgeable local drivers",
              "Multilingual driver support", "Group & private options", "Airport transfer service",
              "Timely departures & arrivals", "Scenic route planning", "Luggage assistance",
              "Real-time flight monitoring", "Clean & spacious interiors", "Flexible scheduling"
            ].map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-[#1c355e] mr-3 flex-shrink-0" />
                <span className="text-[#8b7866] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Standards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Vehicle <span className="text-[#8b7866]">Standards</span>
            </h2>
            <p className="text-xl text-[#8b7866] max-w-2xl mx-auto">
              Every vehicle meets our high standards for comfort, safety, and cleanliness
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Safety First",
                description: "Regular mechanical inspections and professional drivers ensure your safety throughout the journey.",
                features: ["Routine maintenance", "Safety inspections", "Professional drivers", "Insurance coverage"]
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Comfort & Cleanliness",
                description: "Every vehicle is cleaned after each use with spacious interiors and modern amenities.",
                features: ["Deep cleaning", "Spacious seating", "Climate control", "Modern interiors"]
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Modern Amenities",
                description: "Stay connected and comfortable with WiFi, charging ports, and refreshments on longer routes.",
                features: ["USB charging", "WiFi available", "Cold water", "Reading materials"]
              }
            ].map((standard, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1c355e] to-[#8b7866] rounded-2xl text-white mb-6">
                  {standard.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1c355e] mb-4">{standard.title}</h3>
                <p className="text-[#8b7866] mb-6 leading-relaxed">{standard.description}</p>
                <div className="space-y-2">
                  {standard.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Transportation <span className="text-[#8b7866]">Questions?</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How far in advance should I book?",
                a: "We recommend booking at least 24 hours in advance for regular transfers. Airport pickups can be arranged with shorter notice, and we handle last-minute requests during operational hours."
              },
              {
                q: "Are your drivers multilingual?",
                a: "Yes! Our drivers speak multiple languages including English, Arabic, and other regional languages to ensure clear communication with international travelers."
              },
              {
                q: "What happens if my flight is delayed?",
                a: "We monitor flight times in real-time and adjust pickup times accordingly. Standard wait periods for delays are included at no extra charge."
              },
              {
                q: "Can you arrange custom routes for sightseeing?",
                a: "Absolutely! We offer customized city tours and scenic routes. Our local drivers can suggest the best stops and provide cultural insights along the way."
              },
              {
                q: "Do you provide child seats and accessibility options?",
                a: "Yes, we provide child seats upon request and have vehicles equipped for travelers requiring additional support or accessibility features."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
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
              Ready for Seamless Transportation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book your reliable transportation today and focus fully on your travel experience with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#1c355e] px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Book Transport
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="tel:+971555555555"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1c355e] transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

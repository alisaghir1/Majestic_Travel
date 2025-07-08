'use client';
import {
  Plane,
  Clock,
  Shield,
  Star,
  Crown,
  Phone,
  Users,
  MapPin,
  Globe,
  CheckCircle,
  Calendar,
  Coffee,
  Wifi,
  ArrowRight,
  Sparkles,
  Zap,
  Heart,
  Lock,
  Navigation,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PrivateJetServices() {
  const jetTypes = [
    {
      icon: <Plane className="w-8 h-8" />,
      name: "Light Jets",
      description: "Perfect for short to medium range flights",
      features: ["4-8 Passengers", "2-4 Hour Range", "Fast Boarding", "Cost Efficient"],
      price: "8,000",
      gradient: "from-[#1c355e] to-[#8b7866]",
      items: ["Citation CJ3", "Learjet 75", "Phenom 300"]
    },
    {
      icon: <Crown className="w-8 h-8" />,
      name: "Mid-Size Jets",
      description: "Ideal balance of comfort and efficiency",
      features: ["6-9 Passengers", "4-6 Hour Range", "Stand-Up Cabin", "Galley Service"],
      price: "15,000",
      gradient: "from-[#8b7866] to-[#1c355e]",
      items: ["Citation Latitude", "Hawker 900XP", "Learjet 60XR"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      name: "Heavy Jets",
      description: "Ultimate luxury for long-haul flights",
      features: ["8-14 Passengers", "8-12 Hour Range", "Full Galley", "Bedroom Suite"],
      price: "25,000",
      gradient: "from-[#1c355e] to-[#2a4a73]",
      items: ["Gulfstream G650", "Global 6000", "Falcon 7X"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: "Ultra Long Range",
      description: "Non-stop intercontinental travel",
      features: ["12-18 Passengers", "12+ Hour Range", "Master Suite", "Full Crew Rest"],
      price: "40,000",
      gradient: "from-[#8b7866] to-[#a68b5b]",
      items: ["Global 7500", "Gulfstream G700", "Falcon 8X"]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Time Efficiency",
      description: "Skip commercial delays and queues",
      color: "text-[#1c355e]",
      bg: "bg-blue-100"
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Complete Privacy",
      description: "Discreet and confidential service",
      color: "text-[#8b7866]",
      bg: "bg-amber-100"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Maximum Safety",
      description: "International safety standards",
      color: "text-[#1c355e]",
      bg: "bg-blue-50"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Access",
      description: "8,000+ destinations worldwide",
      color: "text-[#8b7866]",
      bg: "bg-amber-50"
    }
  ];

  const process = [
    { step: "01", title: "Request & Quote", desc: "Contact our advisors for personalized options", icon: <Phone className="w-6 h-6" /> },
    { step: "02", title: "Aircraft Selection", desc: "Choose the perfect jet for your journey", icon: <Plane className="w-6 h-6" /> },
    { step: "03", title: "Flight Planning", desc: "Customize routing and scheduling", icon: <Navigation className="w-6 h-6" /> },
    { step: "04", title: "Departure", desc: "Enjoy seamless private terminal experience", icon: <CheckCircle className="w-6 h-6" /> }
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
                <Plane className="w-5 h-5 text-[#1c355e] mr-2" />
                <span className="text-[#1c355e] font-semibold">Private Jet Services</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Fly Beyond
                <span className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] bg-clip-text text-transparent"> Luxury</span>
                <br />On Your Terms
              </h1>
              <p className="text-xl text-[#8b7866] leading-relaxed">
                Experience the ultimate in private aviation with our exclusive jet services. Efficiency, privacy, and sophistication redefined.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Book Flight
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
                  src="/services/private-jet.jpeg"
                  alt="Private Jet Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1c355e]/20 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black text-[#1c355e]">8K+</div>
                <div className="text-[#8b7866]">Destinations</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black text-[#8b7866]">24/7</div>
                <div className="text-[#1c355e]">Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jet Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Choose Your <span className="text-[#8b7866]">Aircraft</span>
            </h2>
            <p className="text-xl text-[#8b7866] max-w-2xl mx-auto">
              From efficient light jets to ultra-luxury long-range aircraft, find the perfect jet for your journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jetTypes.map((jet, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Gradient Header */}
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${jet.gradient} rounded-t-3xl`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${jet.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {jet.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{jet.name}</h3>
                  <p className="text-gray-600 mb-4">{jet.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-black text-gray-900">€{jet.price}</span>
                    <span className="text-gray-500 ml-2">starting</span>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {jet.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Aircraft Models */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {jet.items.map((item, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <Link
                    href="/contact"
                    className={`w-full bg-gradient-to-r ${jet.gradient} text-white py-3 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}
                  >
                    Select Aircraft
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
              Why Choose Private Aviation?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience unparalleled luxury, privacy, and efficiency with our exclusive jet services
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
            <p className="text-xl text-[#8b7866]">Simple steps to your private flight experience</p>
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
              Luxury <span className="text-[#8b7866]">Features</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Private terminal departures", "Flexible scheduling", "Custom routing options",
              "Professional crew service", "Complete privacy & discretion", "Global destination access",
              "Gourmet catering service", "High-speed WiFi connectivity", "Luxury cabin interiors",
              "24/7 concierge support", "Ground transportation", "Helicopter connections"
            ].map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-[#1c355e] mr-3 flex-shrink-0" />
                <span className="text-[#8b7866] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabin Experience */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Cabin <span className="text-[#8b7866]">Experience</span>
            </h2>
            <p className="text-xl text-[#8b7866] max-w-2xl mx-auto">
              Every detail designed for your comfort and productivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Coffee className="w-8 h-8" />,
                title: "Gourmet Dining",
                description: "Fresh meals prepared by renowned chefs, customized to your preferences and dietary requirements.",
                features: ["Custom menus", "Fine wines", "Fresh ingredients", "Special diets"]
              },
              {
                icon: <Wifi className="w-8 h-8" />,
                title: "Connectivity",
                description: "Stay connected with high-speed internet, satellite phones, and entertainment systems.",
                features: ["High-speed WiFi", "Satellite phone", "Entertainment", "Video conferencing"]
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Comfort & Rest",
                description: "Spacious cabins with luxurious seating that converts to fully flat beds for long journeys.",
                features: ["Flat-bed seats", "Premium linens", "Quiet cabin", "Climate control"]
              }
            ].map((experience, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#1c355e] to-[#8b7866] rounded-2xl text-white mb-6">
                  {experience.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1c355e] mb-4">{experience.title}</h3>
                <p className="text-[#8b7866] mb-6 leading-relaxed">{experience.description}</p>
                <div className="space-y-2">
                  {experience.features.map((feature, i) => (
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Private Jet <span className="text-[#8b7866]">Questions?</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How far in advance should I book?",
                a: "While we can arrange flights with minimal notice, we recommend booking 24-48 hours in advance for optimal aircraft selection and scheduling flexibility."
              },
              {
                q: "What destinations can you reach?",
                a: "Our network covers over 8,000 destinations worldwide, including major airports and exclusive landing strips often unavailable to commercial airlines."
              },
              {
                q: "Is the service completely private?",
                a: "Absolutely. We operate under strict confidentiality protocols. All passenger data, itineraries, and onboard activities remain completely private and secure."
              },
              {
                q: "Can I customize catering and cabin setup?",
                a: "Yes! We offer fully customizable catering from renowned chefs and can arrange cabin configurations to meet your specific needs and preferences."
              },
              {
                q: "What safety standards do you follow?",
                a: "All our aircraft and crew operate under international safety standards with routine maintenance, pre-flight assessments, and experienced pilots for every journey."
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
              Ready to Fly in Ultimate Luxury?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the world on your terms with our exclusive private jet services. Contact us to arrange your flight.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#1c355e] px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Book Your Flight
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

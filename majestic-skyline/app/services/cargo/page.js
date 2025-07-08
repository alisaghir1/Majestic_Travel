'use client';
import {
  Package,
  MapPin,
  Shield,
  Clock,
  Star,
  Plane,
  Phone,
  Truck,
  FileText,
  Globe,
  CheckCircle,
  Camera,
  Scale,
  Navigation,
  Send,
  Box,
  Zap,
  Heart,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CargoServices() {
  const cargoTypes = [
    {
      icon: <Package className="w-8 h-8" />,
      name: "Personal Luggage",
      description: "Extra baggage & personal belongings",
      features: ["Up to 50kg", "Secure Transit", "Door Service", "Insurance"],
      price: "150",
      gradient: "from-[#1c355e] to-[#8b7866]",
      items: ["Clothing", "Electronics", "Documents"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: "Souvenirs & Gifts",
      description: "Shopping treasures & vacation memories",
      features: ["Fragile Care", "Gift Wrap", "Multi-Drop", "Tracking"],
      price: "100",
      gradient: "from-[#8b7866] to-[#1c355e]",
      items: ["Crafts", "Specialties", "Purchases"]
    },
    {
      icon: <Box className="w-8 h-8" />,
      name: "Business Cargo",
      description: "Commercial & trade shipments",
      features: ["Bulk Rate", "Fast Track", "Docs Help", "Customs"],
      price: "300",
      gradient: "from-[#1c355e] to-[#2a4a73]",
      items: ["Samples", "Goods", "Equipment"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: "Special Care",
      description: "Premium handling for valuables",
      features: ["Climate Safe", "Extra Guard", "Full Cover", "24/7 Watch"],
      price: "250",
      gradient: "from-[#8b7866] to-[#a68b5b]",
      items: ["Artwork", "Antiques", "Jewelry"]
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Network",
      description: "200+ destinations worldwide",
      color: "text-[#1c355e]",
      bg: "bg-blue-100"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description: "Express delivery options",
      color: "text-[#8b7866]",
      bg: "bg-amber-100"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "100% Secure",
      description: "Full insurance coverage",
      color: "text-[#1c355e]",
      bg: "bg-blue-50"
    },
    {
      icon: <Navigation className="w-12 h-12" />,
      title: "Live Tracking",
      description: "Real-time updates",
      color: "text-[#8b7866]",
      bg: "bg-amber-50"
    }
  ];

  const process = [
    { step: "01", title: "Drop & Pack", desc: "Bring items or we collect", icon: <Send className="w-6 h-6" /> },
    { step: "02", title: "Document", desc: "We handle paperwork", icon: <FileText className="w-6 h-6" /> },
    { step: "03", title: "Track", desc: "Monitor in real-time", icon: <Navigation className="w-6 h-6" /> },
    { step: "04", title: "Deliver", desc: "Safe arrival guaranteed", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-[#f2f2f7] mt-20">
      {/* Hero Section - Updated with original colors */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c355e] via-[#8b7866] to-[#1c355e] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white rounded-full px-6 py-2 shadow-lg">
                <Package className="w-5 h-5 text-[#1c355e] mr-2" />
                <span className="text-[#1c355e] font-semibold">Cargo Services</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Ship Your
                <span className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] bg-clip-text text-transparent"> Dreams</span>
                <br />Safely Home
              </h1>
              <p className="text-xl text-[#8b7866] leading-relaxed">
                From souvenirs to essentials, we deliver your precious cargo across the globe with care, speed, and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Ship Now
                </button>
                <button className="border-2 border-[#1c355e] text-[#1c355e] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1c355e] hover:text-white transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/services/cargo.jpg"
                  alt="Cargo Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1c355e]/20 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black text-[#1c355e]">200+</div>
                <div className="text-[#8b7866]">Countries</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-black text-[#8b7866]">24/7</div>
                <div className="text-[#1c355e]">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cargo Types - Updated colors */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Choose Your <span className="text-[#8b7866]">Shipping Style</span>
            </h2>
            <p className="text-xl text-[#8b7866] max-w-2xl mx-auto">
              Different needs, different solutions. Pick the perfect shipping category for your items.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cargoTypes.map((cargo, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Gradient Header */}
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${cargo.gradient} rounded-t-3xl`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${cargo.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {cargo.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cargo.name}</h3>
                  <p className="text-gray-600 mb-4">{cargo.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-black text-gray-900">AED {cargo.price}</span>
                    <span className="text-gray-500 ml-2">starting</span>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {cargo.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Items */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cargo.items.map((item, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <button className={`w-full bg-gradient-to-r ${cargo.gradient} text-white py-3 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center group`}>
                    Select Plan
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Updated colors */}
      <section className="py-20 bg-gradient-to-r from-[#1c355e] to-[#8b7866]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Why Choose Our Cargo Service?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience the difference with our premium shipping solutions
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

      {/* Process - Updated colors */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              How It <span className="text-[#8b7866]">Works</span>
            </h2>
            <p className="text-xl text-[#8b7866]">Simple steps to ship your items safely</p>
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

      {/* Features - Updated colors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Premium <span className="text-[#8b7866]">Features</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Safe handling of valuables", "Multiple delivery timelines", "Specialized fragile packaging",
              "Excess luggage solutions", "Climate-controlled storage", "Multi-language support",
              "Complete customs assistance", "Door-to-door delivery", "Mobile tracking system",
              "Full insurance coverage", "Express & economy options", "Hotel & airport pickup"
            ].map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-[#1c355e] mr-3 flex-shrink-0" />
                <span className="text-[#8b7866] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Updated colors */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#1c355e] mb-4">
              Got <span className="text-[#8b7866]">Questions?</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What items can I ship?",
                a: "We handle personal belongings, souvenirs, electronics, clothing, business samples, and most non-hazardous items. Restricted items include perishables and dangerous goods."
              },
              {
                q: "How fast is international shipping?",
                a: "Express shipping takes 1-3 days, standard shipping 5-7 days, and economy options 10-14 days depending on destination."
              },
              {
                q: "Do you provide packaging?",
                a: "Yes! We offer professional packaging services including boxes, protective materials, and special handling for fragile items."
              },
              {
                q: "Can I track my shipment?",
                a: "Absolutely! You'll receive a tracking number and can monitor your shipment's progress through our mobile-friendly system."
              },
              {
                q: "What about insurance?",
                a: "All shipments include basic insurance. For high-value items, we offer additional coverage with quick claims processing."
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

      {/* CTA - Updated colors */}
      <section className="py-20 bg-gradient-to-r from-[#1c355e] via-[#8b7866] to-[#1c355e]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Ship Your Treasures?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of happy customers who trust us with their precious cargo worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#1c355e] px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Start Shipping
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

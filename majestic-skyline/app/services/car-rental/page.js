'use client';
import {
  Car,
  MapPin,
  Shield,
  Clock,
  Star,
  CreditCard,
  Phone,
  Users,
  Fuel,
  Settings,
  Award,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CarRentalServices() {
  const carTypes = [
    {
      icon: <Car className="w-6 h-6" />,
      name: "Economy Cars",
      description: "Fuel-efficient and budget-friendly options",
      features: ["Manual/Automatic", "AC", "4-5 Seats", "Compact Size"],
      price: "From AED 80/day",
      image: "/services/economy-car.jpg",
      cars: ["Toyota Yaris", "Nissan Sunny", "Hyundai Accent"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Family SUVs",
      description: "Spacious vehicles for group travel",
      features: ["7-8 Seats", "Large Luggage Space", "All-Wheel Drive", "Premium Interior"],
      price: "From AED 180/day",
      image: "/services/family-suv.jpg",
      cars: ["Toyota Prado", "Nissan Patrol", "Chevrolet Tahoe"]
    },
    {
      icon: <Award className="w-6 h-6" />,
      name: "Luxury Vehicles",
      description: "Premium cars for special occasions",
      features: ["Leather Seats", "Advanced Tech", "Premium Sound", "Chauffeur Available"],
      price: "From AED 350/day",
      image: "/services/luxury.avif",
      cars: ["BMW 5 Series", "Mercedes E-Class", "Audi A6"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      name: "Commercial Vans",
      description: "Perfect for business and cargo needs",
      features: ["Large Cargo Space", "Heavy Duty", "GPS Navigation", "Insurance Included"],
      price: "From AED 200/day",
      image: "/services/commercial-van.jpg",
      cars: ["Ford Transit", "Toyota Hiace", "Nissan Urvan"]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-[#1c355e]" />,
      title: "Full Insurance Coverage",
      description: "Comprehensive protection with zero deductible options"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#1c355e]" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service and roadside assistance"
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#1c355e]" />,
      title: "Multiple Locations",
      description: "Pick-up and drop-off at airports, hotels, and city centers"
    },
    {
      icon: <Star className="w-8 h-8 text-[#1c355e]" />,
      title: "Premium Fleet",
      description: "Well-maintained vehicles from top international brands"
    }
  ];

  return (
    <div className="pt-60 pb-24 bg-[#f2f2f7] mx-auto text-gray-800">
      {/* Hero */}
      <div className="relative h-[40rem] mb-16">
        <Image
          src="/services/car-rental.jpg"
          alt="Car Rental Services in Dubai"
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 px-4">
              Premium Car Rental Services in Dubai
            </h1>
            <p className="text-white text-xl md:text-2xl px-4 max-w-2xl">
              Drive Your Adventure with Confidence
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="space-y-8 container mx-auto px-5 mb-20 text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-[#1c355e]">
          Your Trusted Car Rental Partner in the UAE
        </h2>
        <p>
          Majestic Skyline provides premium car rental services across Dubai and the UAE, offering everything from economy cars to luxury vehicles. Whether you&apos;re a tourist exploring the city&apos;s attractions, a business professional attending meetings, or a resident needing temporary transportation, we have the perfect vehicle for your needs.
        </p>
        <p>
          Our extensive fleet includes the latest models from renowned international brands, all maintained to the highest standards with comprehensive insurance coverage. Experience the freedom of the road with our flexible rental options, competitive pricing, and exceptional customer service.
        </p>

        {/* Car Types Grid */}
        <div className="grid md:grid-cols-2 gap-6 my-16">
          {carTypes.map((car, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Car Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#1c355e] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {car.price}
                </div>
              </div>
              
              {/* Car Details */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#1c355e] p-3 rounded-full text-white mr-4">
                    {car.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1c355e]">{car.name}</h3>
                    <p className="text-[#8b7866]">{car.description}</p>
                  </div>
                </div>
                
                {/* Available Car Models */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#1c355e] mb-2">Available Models:</h4>
                  <div className="flex flex-wrap gap-2">
                    {car.cars.map((carModel, i) => (
                      <span key={i} className="bg-gray-100 text-[#8b7866] px-2 py-1 rounded-md text-xs">
                        {carModel}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {car.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Book Now Button */}
                <Link href="/contact" className="w-full bg-[#1c355e] hover:bg-[#8b7866] text-white py-2 px-4 rounded-lg transition-colors duration-300 block text-center">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <section className="my-16">
          <h3 className="text-2xl font-semibold text-[#1c355e] mb-8 text-center">
            Why Choose Majestic Skyline for Car Rental?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-[#1c355e] mb-2">{benefit.title}</h4>
                <p className="text-[#8b7866] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features List */}
        <h3 className="text-2xl font-semibold text-[#1c355e]">
          Our Premium Car Rental Features
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="list-disc pl-6 space-y-3">
            <li>Free delivery and pickup service within Dubai</li>
            <li>No hidden fees - transparent pricing</li>
            <li>Multiple payment options including crypto</li>
            <li>GPS navigation systems in all vehicles</li>
            <li>Child safety seats available upon request</li>
            <li>Unlimited mileage on weekly rentals</li>
          </ul>
          <ul className="list-disc pl-6 space-y-3">
            <li>International driving license accepted</li>
            <li>Express check-in and check-out</li>
            <li>Fleet tracking and security monitoring</li>
            <li>Emergency roadside assistance</li>
            <li>Corporate accounts with billing flexibility</li>
            <li>Long-term rental discounts available</li>
          </ul>
        </div>

        {/* Booking Process */}
        <section className="my-16 bg-gradient-to-r from-[#1c355e] to-[#8b7866] text-white p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Simple 3-Step Booking Process
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white text-[#1c355e] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold mb-2">Choose Your Vehicle</h4>
              <p className="text-sm">Select from our premium fleet based on your needs and budget</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-[#1c355e] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold mb-2">Book Online</h4>
              <p className="text-sm">Complete your reservation with our secure online booking system</p>
            </div>
            <div className="text-center">
              <div className="bg-white text-[#1c355e] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold mb-2">Drive Away</h4>
              <p className="text-sm">Pick up your car or have it delivered to your location</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="my-16">
          <h3 className="text-2xl font-semibold text-[#1c355e] mb-8 text-center">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[#8b7866] italic mb-4">
                &ldquo;Excellent service! The car was in perfect condition and the delivery was right on time. Highly recommended for anyone visiting Dubai.&rdquo;
              </p>
              <div className="font-semibold text-[#1c355e]">- Sarah M., Tourist</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[#8b7866] italic mb-4">
                &ldquo;Professional service and transparent pricing. Used their luxury car for my business meetings and everything was seamless.&rdquo;
              </p>
              <div className="font-semibold text-[#1c355e]">- Ahmed K., Business Executive</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[#8b7866] italic mb-4">
                &ldquo;Great family SUV for our vacation. Clean, comfortable, and the customer service was outstanding throughout our rental period.&rdquo;
              </p>
              <div className="font-semibold text-[#1c355e]">- Lisa R., Family Traveler</div>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="my-16 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-[#1c355e] mb-6 text-center">
            Current Special Offers
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-[#1c355e] p-6 rounded-lg">
              <h4 className="font-bold text-[#1c355e] mb-2">Weekly Rental Discount</h4>
              <p className="text-[#8b7866] mb-3">Get 15% off on all weekly rentals (7+ days)</p>
              <div className="text-sm text-gray-600">Valid until end of this month</div>
            </div>
            <div className="border-2 border-[#8b7866] p-6 rounded-lg">
              <h4 className="font-bold text-[#8b7866] mb-2">First Time Customer</h4>
              <p className="text-[#8b7866] mb-3">10% off your first rental with us</p>
              <div className="text-sm text-gray-600">Use code: FIRST10</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24 container mx-auto px-5">
          <h3 className="text-2xl font-semibold mb-6 text-[#1c355e]">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                q: "What documents do I need to rent a car?",
                a: "You'll need a valid UAE or international driving license, passport, and credit card. Visitors need a passport with entry stamp.",
              },
              {
                q: "Is there a minimum age requirement?",
                a: "Yes, drivers must be at least 21 years old. Additional fees may apply for drivers under 25.",
              },
              {
                q: "Can I extend my rental period?",
                a: "Absolutely! Contact us to extend your rental. Subject to vehicle availability and additional charges.",
              },
              {
                q: "What's included in the rental price?",
                a: "Basic insurance, unlimited mileage (on weekly rentals), 24/7 support, and GPS navigation system.",
              },
              {
                q: "Do you offer delivery and pickup services?",
                a: "Yes, we provide free delivery and pickup within Dubai. Additional charges apply for other emirates.",
              },
              {
                q: "What if I have an accident or breakdown?",
                a: "Contact our 24/7 emergency hotline immediately. We provide roadside assistance and replacement vehicles when needed.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group p-5 border border-gray-300 rounded-lg transition-all duration-300 hover:shadow-md"
              >
                <summary className="cursor-pointer font-medium text-[#1c355e] text-lg group-open:mb-2 transition-all duration-300">
                  {faq.q}
                </summary>
                <p className="text-[#8b7866] opacity-0 group-open:opacity-100 transition-opacity duration-500">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </section>

      {/* CTA */}
      <div className="text-center container mx-auto px-5 max-w-2xl">
        <h4 className="text-2xl font-bold text-[#1c355e] mb-4">
          Ready to Hit the Road?
        </h4>
        <p className="mb-6 text-[#8b7866]">
          Book your perfect car today and experience the freedom of Dubai&apos;s roads with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-[#1c355e] hover:bg-[#8b7866] text-white px-8 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
          >
            Book Now
          </Link>
          <Link
            href="tel:+971555555555"
            className="inline-flex items-center justify-center border-2 border-[#1c355e] text-[#1c355e] hover:bg-[#1c355e] hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 ease-in-out"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Majestic Skyline Travel | Luxury Travel Planning & Getaways",
  description:
    "At Majestic Skyline Travel, we believe every journey should be extraordinary. From custom luxury travel planning to curated vacation experiences, we offer tailored getaways that cater to the discerning traveler. Whether you’re planning a honeymoon, a wellness retreat, or an adventurous exploration, our expert team ensures every detail is taken care of. Explore the world with confidence as we bring your dream destinations to life with personalized itineraries, luxury accommodations, and unforgettable experiences.",
  keywords:
    "luxury travel, bespoke travel planning, personalized travel experiences, vacations, honeymoon destinations, custom itineraries, luxury escapes, adventure travel, sustainable travel, wellness travel, family vacations, destination weddings, exclusive travel packages, private tours, exotic destinations, premium accommodations, travel experts, unique getaways, cultural experiences, luxury retreats, bespoke itineraries, vacation planning, global destinations, adventure vacations, VIP travel services",
  icon: "/logo.svg",  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

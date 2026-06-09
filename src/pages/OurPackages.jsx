import React from "react";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const flyers = [
  {
    id: 1,
    image: "src/assets/macwise 23.jpg.jpeg",
    title: "Tanzania Referral Visa",
  },
  {
    id: 2,
    image: "src/assets/IMG-20230503-WA0069.jpg.jpeg",
    title: "Travel Services",
  },
  {
    id: 3,
    image: "src/assets/IMG-20260602-WA0014.jpg.jpeg",
    title: "What We Do",
  },
  {
    id: 4,
    image: "src/assets/IMG-20260602-WA0013.jpg.jpeg",
    title: "Logistics Services",
  },
  {
    id: 5,
    image: "src/assets/IMG-20260508-WA0006.jpg.jpeg",
    title: "Tour Package",
  },
  {
    id: 6,
    image: "src/assets/IMG-20250911-WA0018.jpg.jpeg",
    title: "Visa Processing",
  },
];

const OurPackages = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative mt-[120px] md:mt-[140px] h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#FF8C42]" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Our Packages
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our latest travel offers, visa packages,
            tour promotions and logistics services.
          </p>
        </div>
      </section>

      {/* FLYERS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">

          <div className="text-center mb-14">
            <span className="text-[#FF6B1A] font-bold uppercase tracking-[0.3em] text-sm">
              Travel Offers
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
              Available Packages
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Browse through our collection of travel flyers,
              visa packages, hotel deals and tour promotions.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {flyers.map((flyer, index) => (
              <motion.div
                key={flyer.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={flyer.image}
                  alt={flyer.title}
                  className="w-full object-cover"
                />

                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need a Custom Travel Package?
          </h2>

          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team for visa assistance, flight bookings,
            hotel reservations, tours and personalized travel plans.
          </p>

          <a
            href="https://wa.me/2348068725251"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-[#7B2CBF] font-bold px-8 py-4 rounded-full hover:scale-105 transition"
          >
            Chat With Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurPackages;
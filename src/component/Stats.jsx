import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Sparkles, Eye } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import your package flyer images
import package1 from '../assets/mac.jpeg';
import package2 from '../assets/tok.jpeg';
import package3 from '../assets/chi.jpeg';
import package4 from '../assets/ind.jpeg';


const OurPackages = () => {
  // ✅ WhatsApp number
  const WHATSAPP_NUMBER = '2348052676836';

  const packages = [
    {
      id: 1,
      title: 'Dubai Adventure',
      flyer: package1,
    },
  
    {
      id: 3,
      title: 'Zanzibar Escape',
      flyer: package2,
    },
    {
      id: 4,
      title: 'Turkey Discovery',
      flyer: package3,
    },
   
   
  ];

  // ✅ Helper to generate WhatsApp link with pre-filled message per package
  const getWhatsAppLink = (packageTitle) => {
    const message = `Hello Macwise Travels! 🌍%0A%0A
I'm interested in booking the *${packageTitle}* package.%0A%0A
Please share more details about:%0A
• Pricing & payment options%0A
• Available dates%0A
• What's included%0A
• Booking process%0A%0A
Thank you!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#FFF5EE] to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-[#7B2CBF]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 -left-32 w-96 h-96 bg-[#FF8C42]/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Decorative Pattern Dots */}
      <div className="absolute top-10 left-10 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-[#7B2CBF]"></div>
        ))}
      </div>
      <div className="absolute bottom-10 right-10 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-[#FF8C42]"></div>
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 text-[#FF6B1A] font-bold text-sm tracking-[0.3em] uppercase mb-4">
            <Sparkles size={18} />
            Exclusive Deals
            <Sparkles size={18} />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
              Travel Packages
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Discover our carefully curated travel packages designed to give you
            unforgettable experiences at unbeatable prices. From exotic beaches to
            thrilling adventures—your next dream trip awaits.
          </p>

          {/* See All Packages Button at Top */}
          <Link to="/packages">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-[#7B2CBF] text-[#7B2CBF] font-bold shadow-lg hover:bg-gradient-to-r hover:from-[#7B2CBF] hover:to-[#FF8C42] hover:text-white hover:border-transparent transition-all duration-300 group"
            >
              <Eye size={18} />
              See All Packages
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Packages Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border-2 border-transparent hover:border-[#FF8C42]/30">
                {/* Flyer Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#7B2CBF]/5 to-[#FF8C42]/5">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={pkg.flyer}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7B2CBF]/80 via-[#7B2CBF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="text-white text-center px-4"
                      >
                        <p className="font-bold text-xl mb-1">{pkg.title}</p>
                        <p className="text-sm text-white/90">
                          Click Book Now to inquire
                        </p>
                      </motion.div>
                    </div>

                    {/* Top Corner Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] px-3 py-1.5 rounded-full shadow-lg">
                        <span className="text-white text-xs font-bold uppercase tracking-wider">
                          Hot Deal
                        </span>
                      </div>
                    </div>

                    {/* Animated Corner Ribbon */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                      <div className="absolute top-4 -right-8 rotate-45 bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] text-white text-xs font-bold py-1 px-10 shadow-lg">
                        NEW
                      </div>
                    </div>
                  </div>

                  {/* Bottom Color Bar */}
                  <div className="h-1 bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#FF8C42] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                {/* ✅ Book Now Button — Brand Colors, NO WhatsApp branding visible */}
                <div className="p-6 bg-white">
                  <motion.a
                    href={getWhatsAppLink(pkg.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] text-white font-bold shadow-md hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                  >
                    {/* Animated background on hover (orange gradient) */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></span>

                    {/* Button content — Calendar icon instead of WhatsApp */}
                    <span className="relative flex items-center gap-2">
                      <Calendar size={18} />
                      Book Now
                      <ArrowRight
                        size={18}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-[#7B2CBF]/5 to-[#FF8C42]/5 px-8 py-6 rounded-2xl border border-[#E0AAFF]/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B2CBF] to-[#FF8C42] flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={22} />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">
                  Looking for more options?
                </p>
                <p className="text-sm text-gray-600">
                  Explore all our travel packages
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* See All Packages Button */}
              <Link to="/packages">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] text-white font-bold shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2 group whitespace-nowrap"
                >
                  <Eye size={18} />
                  See All Packages
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </Link>

              {/* WhatsApp Chat Button (OK to show WhatsApp here) */}
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Macwise%20Travels!%20I'd%20like%20to%20know%20more%20about%20your%20travel%20packages.`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold shadow-lg hover:shadow-green-500/50 transition-all flex items-center gap-2 group whitespace-nowrap"
              >
                <FaWhatsapp size={18} />
                Chat With Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPackages;
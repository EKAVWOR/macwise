import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your package flyer images
import package1 from '../assets/IMG-20260508-WA0006.jpg.jpeg';
import package2 from '../assets/IMG-20230503-WA0069.jpg.jpeg';
import package3 from '../assets/IMG-20260602-WA0013.jpg.jpeg';
import package4 from '../assets/IMG-20260602-WA0014.jpg.jpeg';
import package5 from '../assets/im1.png';
import package6 from '../assets/image2.png';

const OurPackages = () => {
  const packages = [
    {
      id: 1,
      title: 'Dubai Adventure',
      flyer: package1,
      link: '/packages/dubai',
    },
    {
      id: 2,
      title: 'Maldives Paradise',
      flyer: package2,
      link: '/packages/maldives',
    },
    {
      id: 3,
      title: 'Zanzibar Escape',
      flyer: package3,
      link: '/packages/zanzibar',
    },
    {
      id: 4,
      title: 'Turkey Discovery',
      flyer: package4,
      link: '/packages/turkey',
    },
    {
      id: 5,
      title: 'Bali Retreat',
      flyer: package5,
      link: '/packages/bali',
    },
    {
      id: 6,
      title: 'South Africa Safari',
      flyer: package6,
      link: '/packages/south-africa',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#FFF5EE] to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 -right-32 w-96 h-96 bg-[#7B2CBF]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -left-32 w-96 h-96 bg-[#FF8C42]/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
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
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover our carefully curated travel packages designed to give you
            unforgettable experiences at unbeatable prices. From exotic beaches to
            thrilling adventures—your next dream trip awaits.
          </p>
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
                  {/* Aspect ratio container for flyer (portrait style) */}
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
                        <p className="text-sm text-white/90">Click to view details</p>
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

                {/* Book Now Button Section */}
                <div className="p-6 bg-white">
                  <Link to={pkg.link}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] text-white font-bold shadow-md hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                    >
                      {/* Animated background on hover */}
                      <span className="absolute inset-0 bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></span>
                      
                      {/* Button content */}
                      <span className="relative flex items-center gap-2">
                        <Calendar size={18} />
                        Book Now
                        <ArrowRight
                          size={18}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </span>
                    </motion.button>
                  </Link>
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#7B2CBF]/5 to-[#FF8C42]/5 px-8 py-6 rounded-2xl border border-[#E0AAFF]/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B2CBF] to-[#FF8C42] flex items-center justify-center">
                <MapPin className="text-white" size={22} />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">Looking for more options?</p>
                <p className="text-sm text-gray-600">Explore all our travel packages</p>
              </div>
            </div>
            <Link to="/packages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white font-bold shadow-lg hover:shadow-orange-500/50 transition-all flex items-center gap-2 group"
              >
                View All Packages
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPackages;
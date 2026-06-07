import { motion } from 'framer-motion';
import { Check, ArrowRight, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
// Import your two images from storage
import aboutImage1 from '../assets/IMG-20260602-WA0013.jpg.jpeg'; // Replace with your actual image path
import aboutImage2 from '../assets/IMG-20230510-WA0078.jpg.jpeg'; // Replace with your actual image path

const AboutUs = () => {
  const features = [
  'Stress-free planning with dedicated expert support.',
  'Travel experiences tailored to your unique needs.',
  'Top-tier services at competitive, fair prices.',
];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden py-20">
      {/* Background Decoration */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-[#E0AAFF] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-[#FF8C42]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            {/* Floating Plane Decoration */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-1/4 z-30"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] rounded-full flex items-center justify-center shadow-2xl">
                  <Plane className="text-white" size={32} />
                </div>
                {/* Trailing Dashes */}
                <div className="absolute top-1/2 -left-16 flex gap-1">
                  <div className="w-2 h-1 bg-[#FF8C42]/40 rounded-full"></div>
                  <div className="w-3 h-1 bg-[#FF8C42]/60 rounded-full"></div>
                  <div className="w-4 h-1 bg-[#FF8C42]/80 rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Main Image - Top Left */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="absolute top-10 left-0 w-[70%] h-[450px] rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <img
                src={aboutImage1}
                alt="Travel agent services"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7B2CBF]/10 to-transparent"></div>
            </motion.div>

            {/* Secondary Image - Bottom Right */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 w-[60%] h-[320px] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white"
            >
              <img
                src={aboutImage2}
                alt="Our team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C42]/10 to-transparent"></div>
            </motion.div>

            {/* Decorative Circle */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-[#9D4EDD] to-[#7B2CBF] rounded-full opacity-20 blur-xl"
            ></motion.div>
          </motion.div>

          {/* RIGHT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#FF6B1A] font-bold text-sm tracking-widest uppercase"
            >
              About Us
            </motion.span>

            

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Macwise Travels Ltd is a dynamic and trusted travel management company committed to delivering seamless, reliable, and professional travel solutions with years of experience in the travel industry. Founded in 2020 and incorporated in 2024. As proud members of the National Association of Nigerian Travel Agencies (NANTA), the Nigerian Civil Aviation Authority (NCAA), and the National Association of Tour Operators (NATOP). Established with a vision to simplify travel experiences, we proudly serve a diverse clientele including government agencies, corporate organizations, private businesses, and individual travelers.
            </motion.p>

            {/* Features List */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 pt-4"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Check size={18} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white font-bold shadow-xl hover:shadow-orange-500/50 transition-all flex items-center gap-2 group"
                >
                  More About Us
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
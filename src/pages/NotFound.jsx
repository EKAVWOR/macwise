import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Compass, Plane, MapPin, Search } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const WHATSAPP_NUMBER = '2348052676836';

  // Quick links to popular pages
  const quickLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About Us', path: '/about', icon: 'ℹ️' },
    { name: 'Our Services', path: '/services', icon: '✈️' },
    { name: 'Our Packages', path: '/packages', icon: '🌴' },
    { name: 'Gallery', path: '/gallery', icon: '📸' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* ── MAIN 404 SECTION ─────────────────────────────────── */}
      <section className="relative flex-1 flex items-center justify-center overflow-hidden mt-[120px] md:mt-[140px] py-20 lg:py-28 bg-gradient-to-br from-[#FFF5EE] via-white to-[#FFF5EE]">
        {/* Animated Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="absolute top-20 left-20 w-96 h-96 bg-[#7B2CBF]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: -mousePosition.x,
              y: -mousePosition.y,
            }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF8C42]/10 rounded-full blur-3xl"
          />
        </div>

        {/* Floating Plane Animation */}
        <motion.div
          animate={{
            x: ['-100vw', '100vw'],
            y: [0, -50, 0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 hidden md:block"
        >
          <Plane className="text-[#7B2CBF]/20" size={60} />
        </motion.div>

        {/* Floating Compass */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 hidden md:block"
        >
          <Compass className="text-[#FF8C42]/20" size={80} />
        </motion.div>

        {/* Floating MapPin */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-20 hidden md:block"
        >
          <MapPin className="text-[#9D4EDD]/20" size={70} />
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center">
          {/* 404 Number with Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="relative mb-8"
          >
            <h1 className="text-[150px] md:text-[250px] font-bold leading-none bg-gradient-to-br from-[#7B2CBF] via-[#9D4EDD] to-[#FF8C42] bg-clip-text text-transparent select-none">
              404
            </h1>

            {/* Floating Decorative Elements Around 404 */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[450px] md:h-[450px] pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF8C42] rounded-full shadow-lg"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#7B2CBF] rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-[#9D4EDD] rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-[#FF6B1A] rounded-full shadow-lg"></div>
            </motion.div>
          </motion.div>

          {/* Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm tracking-[0.3em] uppercase mb-4">
              ✈️ Lost in Transit
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Oops! Page{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                Not Found
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Looks like this destination doesn't exist on our map. The page you're
              looking for might have been moved, deleted, or never existed. Let us
              guide you back on track! 🗺️
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] text-white font-bold shadow-xl hover:shadow-purple-500/50 transition-all"
              >
                <Home size={20} />
                Back to Home
              </motion.button>
            </Link>

            <motion.button
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-[#7B2CBF] text-[#7B2CBF] font-bold shadow-lg hover:bg-[#7B2CBF] hover:text-white transition-all"
            >
              <ArrowLeft size={20} />
              Go Back
            </motion.button>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm looking for help finding a page on your website.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold shadow-xl hover:shadow-green-500/50 transition-all"
              >
                <FaWhatsapp size={20} />
                Get Help
              </motion.button>
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Search className="text-[#7B2CBF]" size={20} />
              <h3 className="text-lg font-bold text-gray-900">
                Or explore these popular pages:
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-[#FF8C42]/30 transition-all group"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="font-semibold text-gray-700 group-hover:text-[#7B2CBF] transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 inline-block bg-gradient-to-r from-[#7B2CBF]/5 to-[#FF8C42]/5 px-6 py-3 rounded-full border border-[#E0AAFF]/30"
          >
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="text-xl">💡</span>
              <span>
                <strong className="text-[#7B2CBF]">Pro Tip:</strong> While you're
                here, why not explore our amazing travel packages?
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
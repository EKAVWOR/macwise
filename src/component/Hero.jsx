import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image:
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80',
      title: 'Explore Paradise Islands',
      subtitle: "Discover the world's most beautiful destinations",
      location: 'Maldives',
    },
    {
      image:
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80',
      title: 'European Adventures',
      subtitle: 'Immerse yourself in rich culture and history',
      location: 'Paris, France',
    },
    {
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      title: 'Mountain Escapes',
      subtitle: 'Experience breathtaking alpine landscapes',
      location: 'Swiss Alps',
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  return (
    <div
      // ✅ Push hero down by navbar height (~120px) so it doesn't sit under it
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#7B2CBF]/40 via-black/40 to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* ✅ Content Container — pushed below navbar with pt-32 */}
      <div className="relative h-full flex flex-col justify-center items-center px-4 pt-32 pb-20">
        
        {/* ❌ REMOVED duplicate logo — your Navbar already has it */}

        {/* Main Content */}
        <div className="max-w-4xl w-full text-center z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              {/* Location Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <div className="bg-white/10 backdrop-blur-md border border-[#E0AAFF]/30 px-4 py-2 rounded-full">
                  <MapPin size={16} className="inline text-[#FF8C42] mr-2" />
                  <span className="text-white font-medium">
                    {slides[currentSlide].location}
                  </span>
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-2xl text-gray-100 mb-4 max-w-2xl mx-auto drop-shadow-lg"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Motto */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="text-[#E0AAFF] italic mb-8 text-lg"
              >
                Envision.. Discover... Live it..
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                <Link to="/packages">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white font-bold shadow-2xl hover:shadow-orange-500/50 transition flex items-center gap-2 group"
                  >
                    Explore Packages
                    <ChevronRight className="group-hover:translate-x-1 transition" />
                  </motion.button>
                </Link>
                <Link to="/gallery">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold hover:bg-white/20 transition"
                  >
                    View Gallery
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-3 z-20">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-gradient-to-b from-[#9D4EDD] to-[#FF8C42] h-12'
                  : 'bg-white/50 hover:bg-white/80 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-3 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
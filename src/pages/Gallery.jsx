import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

import lane from '../assets/IMG_20251013_194502.jpg.jpeg';
import Germany from '../assets/IMG_20251007_104110.jpg.jpeg';
import poland from '../assets/I2.jpeg';
import egypr from '../assets/I3.jpeg';
import quatar from '../assets/IM4.jpeg';
import good from '../assets/IM5.jpeg';
import berlin from '../assets/IMG-20230510-WA0078.jpg.jpeg';
import winner from '../assets/IMG_20251013_194219.jpg.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryImages = [
    {
      src: Germany,
      category: 'Visa Success',
      label: 'Germany Visa',
    },
    {
      src: poland,
      category: 'Visa Success',
      label: 'Poland Visa',
    },
    {
      src: egypr,
      category: 'Travel',
      label: 'Egypt Travel',
    },
    {
      src: quatar,
      category: 'Travel',
      label: 'Qatar Travel',
    },
    {
      src: good,
      category: 'Happy Clients',
      label: 'Happy Client',
    },
    {
      src: berlin,
      category: 'Travel',
      label: 'Berlin Travel',
    },
    {
      src: winner,
      category: 'Happy Clients',
      label: 'Success Story',
    },
  ];

  const filters = [
    'All',
    'Visa Success',
    'Travel',
    'Happy Clients',
  ];

  const filtered =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (index) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goPrev = () =>
    setSelectedImage((prev) =>
      prev === 0 ? filtered.length - 1 : prev - 1
    );

  const goNext = () =>
    setSelectedImage((prev) =>
      prev === filtered.length - 1 ? 0 : prev + 1
    );

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  };

  return (
    <div>
      <Navbar />

      {/* Hero Banner */}
      <div
        style={{
          backgroundImage: `url(${lane})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="mt-[50px] relative"
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-[10%] text-[50px] font-bold text-white"
          >
            Our Gallery
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center pt-[30px] text-[25px] text-white pb-[10%]"
          >
            Home / Gallery
          </motion.p>
        </div>
      </div>

      {/* Gallery Section */}
      <div
        style={{ backgroundColor: '#FF61370D' }}
        className="py-20 px-4 min-h-screen"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#FF6B1A] font-bold text-sm
           tracking-[0.3em] uppercase mb-4">
            ★ Visual Stories ★
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
            See It to Believe It
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real proof of approved visas, happy travelers, and success stories
            from our valued clients around the world.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold text-sm
               transition-all duration-300 border-2 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] text-white border-transparent shadow-lg scale-105'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-purple-400 hover:text-purple-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filtered.map((image, index) => (
                <motion.div
                  key={image.label + image.category}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative group overflow-hidden rounded-2xl
                   shadow-md cursor-pointer"
                  style={{ aspectRatio: '3 / 4' }}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.label}
                    className="w-full h-full object-cover object-top
                     transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t
                   from-black/70 via-black/20 to-transparent opacity-0
                    group-hover:opacity-100 transition-all duration-400
                     flex flex-col items-center justify-end pb-6 px-4">
                    {/* Zoom Icon */}
                    <div className="mb-3 w-12 h-12 rounded-full bg-white/20
                     backdrop-blur-sm flex items-center justify-center
                      border border-white/40">
                      <ZoomIn className="text-white" size={22} />
                    </div>

                    {/* Category Badge */}
                    <span className="bg-gradient-to-r from-[#7B2CBF]
                     to-[#FF8C42] text-white text-xs font-bold px-3 py-1
                      rounded-full shadow-md">
                      ✓ {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-gray-400 text-xl"
            >
              No images found in this category.
            </motion.div>
          )}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4
           gap-6"
        >
          {[
            { number: '500+', label: 'Visas Processed', icon: '🛂' },
            { number: '15+', label: 'Countries', icon: '🌍' },
            { number: '100%', label: 'Success Rate', icon: '🏆' },
            { number: '9+', label: 'Years Experience', icon: '⭐' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="text-center bg-white p-6 rounded-2xl shadow-md
               border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold
               bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
                bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-gray-500 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to create your own success story?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
             bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] text-white font-bold
              shadow-xl hover:shadow-purple-500/40 transition-all"
          >
            Start Your Journey
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center
             justify-center px-4"
            onClick={handleBackdropClick}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-11 h-11 rounded-full
               bg-white/10 hover:bg-white/25 border border-white/20
                flex items-center justify-center transition-all"
            >
              <X className="text-white" size={22} />
            </button>

            {/* Prev Button */}
            <button
              onClick={goPrev}
              className="absolute left-4 md:left-8 w-11 h-11 rounded-full
               bg-white/10 hover:bg-white/25 border border-white/20
                flex items-center justify-center transition-all"
            >
              <ChevronLeft className="text-white" size={26} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-sm md:max-w-lg w-full"
            >
              <img
                src={filtered[selectedImage].src}
                alt={filtered[selectedImage].label}
                className="w-full rounded-2xl shadow-2xl object-cover
                 object-top"
                style={{ aspectRatio: '3 / 4' }}
              />

              {/* Caption */}
              <div className="mt-4 text-center">
                <span className="inline-block bg-gradient-to-r
                 from-[#7B2CBF] to-[#FF8C42] text-white text-sm font-bold
                  px-4 py-2 rounded-full shadow-lg">
                  ✓ {filtered[selectedImage].category}
                </span>
              </div>

              {/* Counter */}
              <p className="text-white/50 text-sm text-center mt-3">
                {selectedImage + 1} / {filtered.length}
              </p>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={goNext}
              className="absolute right-4 md:right-8 w-11 h-11 rounded-full
               bg-white/10 hover:bg-white/25 border border-white/20
                flex items-center justify-center transition-all"
            >
              <ChevronRight className="text-white" size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import TestimonialsSection from '../component/TEstimonials'; // ✅ Imported reusable

import lane from '../assets/IMG_20251013_194502.jpg.jpeg';
import Germany from '../assets/IMG_20251007_104110.jpg.jpeg';
import poland from '../assets/IMG_20251007_104409.jpg.jpeg';
import egypr from '../assets/IMG_20251013_192746.jpg.jpeg';
import quatar from '../assets/IMG_20251007_104503.jpg.jpeg';
import good from '../assets/IMG_20251013_192958.jpg.jpeg';
import berlin from '../assets/IMG_20251013_193023.jpg.jpeg';
import canada from '../assets/CANADA VISA (1).jpeg';
import china from '../assets/CHINA VISA.jpeg';
import uk from '../assets/IMG_20251013_194502.jpg.jpeg';
import shg from '../assets/IMG-20260513-WA0007.jpg (1).jpeg';

const Testimonials = () => {
  const WHATSAPP_NUMBER = '2348052676836';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const text = `*New Inquiry from Macwise Travels Website*%0A%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Subject:* ${subject}%0A
*Message:* ${message || 'No additional message'}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const galleryImages = [
    { src: china, alt: 'China Visa Success' },
    { src: canada, alt: 'Canada Visa Success' },
    { src: uk, alt: 'UK Visa Success' },
    { src: shg, alt: 'Schengen Visa Success' },
    { src: Germany, alt: 'Germany Visa Success' },
    { src: poland, alt: 'Poland Visa Success' },
    { src: egypr, alt: 'Egypt Travel' },
    { src: quatar, alt: 'Qatar Travel' },
    { src: good, alt: 'Happy Client' },
    { src: berlin, alt: 'Berlin Travel' },
  ];

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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-[10%] text-[50px] font-bold text-white"
          >
            Testimonies
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center pt-[30px] text-[25px] text-white pb-[10%]"
          >
            Home / Testimonies
          </motion.p>
        </div>
      </div>

      {/* Gallery Section */}
      <div style={{ backgroundColor: '#FF61370D' }} className="pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-center pt-[70px] font-bold text-[40px] text-purple-700">
            See It to Believe It
          </p>
          <p className="text-center pt-[40px] text-[20px] pb-[6%] px-4 max-w-4xl mx-auto">
            At Macwise Travels, results speak louder than words. Explore real
            success stories through photos of approved visas, flight tickets,
            and happy clients. These are more than testimonies — they are proof
            that your travel dreams are possible with us.
          </p>
        </motion.div>

        {/* Portrait Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
                style={{ aspectRatio: '3 / 4' }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                  ✓ Success Story
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ REUSABLE TESTIMONIALS COMPONENT — imported here */}
      <TestimonialsSection />

      {/* Contact + Map Section */}
      <div style={{ backgroundColor: '#FF61370D' }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm tracking-[0.3em] uppercase mb-4">
              ★ Get In Touch ★
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Leave Us A{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                Message
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to travel? Contact us now for seamless bookings, expert
              advice, and unbeatable deals! 📞
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white flex-1 min-h-[450px]">
                <iframe
                  title="Macwise Travels Location"
                  src="https://www.google.com/maps?q=3C7G%2BM26,+Jabi,+Abuja+900108,+Federal+Capital+Territory,+Nigeria&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '450px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <motion.div
                whileHover={{ y: -5 }}
                className="mt-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B2CBF] to-[#FF8C42] flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Macwise Travels Limited
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Suite 304, 3rd floor MKK Plaza Jabi Abuja FCT,
                    Nigeria
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=3C7G%2BM26,+Jabi,+Abuja+900108,+Federal+Capital+Territory,+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-orange-500 hover:text-orange-700 font-semibold text-sm transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-5"
              >
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full p-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Visa inquiry, Flight booking, etc."
                    className="w-full p-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Your Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your travel needs..."
                    className="w-full p-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:bg-white focus:outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold shadow-xl hover:shadow-green-500/40 transition-all"
                >
                  <FaWhatsapp className="text-xl" />
                  Send via WhatsApp
                  <FaPaperPlane className="text-sm" />
                </motion.button>

                <p className="text-center text-xs text-gray-500 mt-2">
                  Your message goes directly to our WhatsApp — instant reply
                  guaranteed!
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Testimonials;
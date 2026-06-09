import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Contact = () => {
  // ✅ Online hero background
  const heroBg =
    'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80';

  // ✅ Your WhatsApp number (international format, no + or spaces)
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

  // ✅ Submit → opens WhatsApp with pre-filled message
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const text = `*New Inquiry from Macwise Travels Website*%0A%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Subject:* ${subject}%0A
*Message:* ${message || 'No additional message'}`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(whatsappURL, '_blank');

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      text: '3C7G+M26, Jabi, Abuja 900108, FCT, Nigeria',
      gradient: 'from-[#7B2CBF] to-[#9D4EDD]',
    },
    {
      icon: FaPhoneAlt,
      title: 'Call Us',
      text: '+234 805 267 6836',
      gradient: 'from-[#FF8C42] to-[#FF6B1A]',
      link: 'tel:+2348052676836',
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      text: 'macwisetravelsltd@gmail.com',
      gradient: 'from-[#9D4EDD] to-[#FF8C42]',
      link: 'mailto:macwisetravelsltd@gmail.com',
    },
    
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Banner */}
      <div
        style={{
          backgroundImage: `url(${heroBg})`,
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
            Contact Us
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center pt-[30px] text-[25px] text-white pb-[10%]"
          >
            Home / Contact
          </motion.p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div style={{ backgroundColor: '#FF61370D' }} className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm
             tracking-[0.3em] uppercase mb-4">
              ★ Get In Touch ★
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We're Here to{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Help You
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Reach out to us via any of these channels — our team is ready to
              assist you 24/7.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border
                   border-gray-100 hover:shadow-2xl transition-all text-center
                    h-full cursor-pointer group"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl
                     bg-gradient-to-br ${info.gradient} flex items-center
                      justify-center shadow-lg group-hover:scale-110
                       transition-transform`}
                  >
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {info.text}
                  </p>
                </motion.div>
              );

              return info.link ? (
                <a key={i} href={info.link}>
                  {CardContent}
                </a>
              ) : (
                <div key={i}>{CardContent}</div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Form + Map Section */}
      <div style={{ backgroundColor: '#FF61370D' }} className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — Google Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <div className="mb-6">
                <span className="inline-block text-[#FF6B1A] font-bold text-sm
                 tracking-[0.3em] uppercase mb-2">
                  Find Us
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900
                 mb-3">
                  Our Location
                </h3>
                <p className="text-gray-600">
                  Visit our office in the heart of Jabi, Abuja — we'd love to
                  meet you!
                </p>
              </div>

              {/* Embedded Google Map */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4
               border-white flex-1 min-h-[450px]">
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

              {/* Address Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="mt-6 bg-white p-6 rounded-2xl shadow-lg border
                 border-gray-100 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br
                 from-[#7B2CBF] to-[#FF8C42] flex items-center justify-center
                  flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Macwise Travels Limited
                  </h4>
                  <p className="text-gray-600 text-sm">
                    3C7G+M26, Jabi, Abuja 900108, Federal Capital Territory,
                    Nigeria
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=3C7G%2BM26,+Jabi,+Abuja+900108,+Federal+Capital+Territory,+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-orange-500
                     hover:text-orange-700 font-semibold text-sm
                      transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — WhatsApp Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6">
                <span className="inline-block text-[#FF6B1A] font-bold text-sm
                 tracking-[0.3em] uppercase mb-2">
                  Send Message
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900
                 mb-3">
                  Leave Us A Message
                </h3>
                <p className="text-gray-600 flex items-center gap-2 flex-wrap">
                  Your message will be sent directly via WhatsApp 💬 — instant
                  reply guaranteed!
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-3xl shadow-xl border
                 border-gray-100 space-y-5"
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
                    className="w-full p-3 bg-gray-50 rounded-xl border-2
                     border-gray-200 focus:border-purple-400 focus:bg-white
                      focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full p-3 bg-gray-50 rounded-xl border-2
                     border-gray-200 focus:border-purple-400 focus:bg-white
                      focus:outline-none transition-all"
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
                    className="w-full p-3 bg-gray-50 rounded-xl border-2
                     border-gray-200 focus:border-purple-400 focus:bg-white
                      focus:outline-none transition-all"
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
                    className="w-full p-3 bg-gray-50 rounded-xl border-2
                     border-gray-200 focus:border-purple-400 focus:bg-white
                      focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full inline-flex items-center justify-center
                   gap-2 px-8 py-4 rounded-full bg-gradient-to-r
                    from-[#25D366] to-[#128C7E] text-white font-bold
                     shadow-xl hover:shadow-green-500/40 transition-all"
                >
                  <FaWhatsapp className="text-xl" />
                  Send via WhatsApp
                  <FaPaperPlane className="text-sm" />
                </motion.button>

                <p className="text-center text-xs text-gray-500 mt-2">
                  By submitting, you agree to be contacted via WhatsApp at the
                  provided number.
                </p>
              </form>

              {/* Social Links */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-3 font-semibold">
                  Connect With Us
                </p>
                <div className="flex justify-center gap-3">
                  {[
                    {
                      Icon: FaFacebookF,
                      color: 'bg-[#1877F2]',
                      link: '#',
                    },
                    {
                      Icon: FaInstagram,
                      color:
                        'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]',
                      link: '#',
                    },
                    {
                      Icon: FaTwitter,
                      color: 'bg-[#1DA1F2]',
                      link: '#',
                    },
                    {
                      Icon: FaLinkedinIn,
                      color: 'bg-[#0A66C2]',
                      link: '#',
                    },
                  ].map(({ Icon, color, link }, i) => (
                    <motion.a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -5 }}
                      className={`w-11 h-11 rounded-full ${color} text-white
                       flex items-center justify-center shadow-lg
                        hover:shadow-xl transition-all`}
                    >
                      <Icon className="text-base" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ✅ Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Macwise%20Travels,%20I'd%20like%20to%20make%20an%20inquiry.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366]
         rounded-full shadow-2xl flex items-center justify-center
          hover:bg-[#128C7E] transition-all"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-3xl" />

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]
         animate-ping opacity-30" />
      </motion.a>

      <Footer />
    </div>
  );
};

export default Contact;
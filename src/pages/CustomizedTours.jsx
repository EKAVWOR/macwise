import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin, Mail, Phone, Map, Compass, Users, Camera,
  CheckCircle2, ArrowRight, Loader2, Heart, Globe, Award, Shield,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import AGENT_IMAGE from '../assets/IMG-20230505-WA0065.jpg.jpeg';

const Tours = () => {
  // ── Online Images ─────────────────────────────────────────
  const HERO_IMAGE = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80';
  const MAIN_IMAGE = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80';
  

  // ── Form State ────────────────────────────────────────────
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: 'Customized Tours', details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const WHATSAPP_NUMBER = '2348052676836';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email');
      return;
    }
    setIsSubmitting(true);

    const whatsappMessage = `*🗺️ New Customized Tours Inquiry*

*👤 Name:* ${formData.name}
*📧 Email:* ${formData.email}
*📞 Phone:* ${formData.phone || 'Not provided'}
*🎯 Service:* ${formData.service}

*📝 Additional Details:*
${formData.details || 'No additional details provided'}

---
_Sent via Macwise Travels Website_`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', service: 'Customized Tours', details: '' });
        setIsSubmitted(false);
      }, 3000);
    }, 800);
  };

  const benefits = [
    { icon: Map, title: 'Tailor-Made Itineraries', description: 'Every tour is designed around your interests, pace, and travel style.', gradient: 'from-[#7B2CBF] to-[#9D4EDD]' },
    { icon: Users, title: 'Expert Local Guides', description: 'Knowledgeable guides who bring destinations to life with insider stories.', gradient: 'from-[#FF8C42] to-[#FF6B1A]' },
    { icon: Camera, title: 'Unforgettable Moments', description: 'Curated activities and hidden gems that create lasting memories.', gradient: 'from-[#9D4EDD] to-[#FF8C42]' },
    { icon: Heart, title: 'Personal Touch', description: 'Dedicated trip coordinators ensure every detail matches your vision.', gradient: 'from-[#7B2CBF] to-[#FF6B1A]' },
  ];

  const features = [
    'Tailor-Made Itineraries',
    'Cultural & Heritage Tours',
    'Adventure & Safari Expeditions',
    'Family & Group Tours',
    'Solo & Honeymoon Packages',
    'Multi-Destination Planning',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO BANNER ──────────────────────────────────────── */}
      <section
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        className="relative bg-cover bg-center h-[400px] md:h-[500px] mt-[120px] md:mt-[140px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#7B2CBF]/85 via-[#1a0d2e]/75 to-[#FF8C42]/75"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF8C42]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#9D4EDD]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 hidden md:block"
        >
          <Compass className="text-white/30" size={80} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="inline-block text-[#FFD8A8] font-bold text-sm tracking-[0.3em] uppercase mb-4">
            🗺️ Tailored Adventures Await
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            Customized Tours
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/90 text-lg">
            <Link to="/" className="hover:text-[#FFD8A8] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#FFD8A8] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#FFD8A8]">Customized Tours</span>
          </div>
        </motion.div>
      </section>

      {/* ── MAIN CONTENT SECTION ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#FFF5EE] relative overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-[#7B2CBF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-[#FF8C42]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }} viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-2xl mb-8"
              >
                <img src={MAIN_IMAGE} alt="Customized Tours" className="w-full h-[400px] md:h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7B2CBF]/40 to-transparent"></div>
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Compass className="text-[#FF8C42]" size={18} />
                  <span className="text-gray-900 font-bold text-sm">Bespoke Experience</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
              >
                <span className="inline-block text-[#FF6B1A] font-bold text-sm tracking-[0.3em] uppercase mb-3">
                  Our Service
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Personalized Tours{' '}
                  <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                    Crafted Just for You
                  </span>
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    At <strong className="text-[#7B2CBF]">Macwise Travels & Tours Limited</strong>, we believe every journey should be as unique as the traveler. Our customized tour services are designed to match your interests, preferences, and budget—creating once-in-a-lifetime experiences.
                  </p>
                  <p>
                    From cultural deep-dives in Morocco to wildlife safaris in Kenya, beach escapes in Zanzibar, or adventure trips in Switzerland—we curate every detail of your itinerary including transportation, accommodation, expert guides, and exclusive activities.
                  </p>
                  <p>
                    Let us turn your travel dreams into reality. Tell us where you want to go and what you love to do—we'll handle the rest! 🗺️
                  </p>
                </div>

                <div className="mt-10 bg-gradient-to-br from-[#7B2CBF]/5 to-[#FF8C42]/5 p-8 rounded-3xl border border-[#E0AAFF]/30">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7B2CBF] to-[#FF8C42] flex items-center justify-center">
                      <Award className="text-white" size={22} />
                    </div>
                    What We Offer
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="text-[#FF8C42] flex-shrink-0" size={20} />
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Contact Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="lg:sticky lg:top-32 self-start"
            >
              <div className="bg-gradient-to-br from-[#7B2CBF] to-[#1a0d2e] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF8C42]/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
                  <p className="text-white/80 text-sm mb-6">Reach out for instant assistance</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-white" size={18} />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold mb-1">Visit Us</p>
                        <p className="text-white/80 text-xs leading-relaxed">
                          Block A, Shop 1, 3rd Avenue<br />Cornershop, Gwarimpa, Abuja
                        </p>
                      </div>
                    </div>

                    <a href="mailto:Macwiseltd@gmail.com" className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="text-white" size={18} />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold mb-1">Email</p>
                        <p className="text-white/80 text-xs group-hover:text-[#FFD8A8] transition-colors break-all">Macwiseltd@gmail.com</p>
                      </div>
                    </a>

                    <a href="tel:+2348052676836" className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="text-white" size={18} />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold mb-1">Phone</p>
                        <p className="text-white/80 text-xs group-hover:text-[#FFD8A8] transition-colors">+234 805 267 6836</p>
                      </div>
                    </a>

                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to plan a customized tour.')}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <FaWhatsapp className="text-white" size={18} />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold mb-1">WhatsApp</p>
                        <p className="text-white/80 text-xs group-hover:text-[#FFD8A8] transition-colors">Chat instantly</p>
                      </div>
                    </a>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={AGENT_IMAGE} alt="Travel Agent" className="w-full h-48 object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm tracking-[0.3em] uppercase mb-4">
              Why Tour With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Journey,{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                Our Priority
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 group text-center"
                >
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-md`}>
                    <Icon className="text-white" size={30} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM SECTION ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FFF5EE] to-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#7B2CBF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#FF8C42]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-5xl px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-12"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm tracking-[0.3em] uppercase mb-4">
              Plan Your Tour
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Request a{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                Consultation
              </span>
            </h2>
            <p className="text-lg text-gray-600 flex items-center justify-center gap-2 flex-wrap">
              Fill the form and we'll respond via
              <span className="inline-flex items-center gap-1 text-[#25D366] font-semibold">
                <FaWhatsapp size={18} /> WhatsApp
              </span>
              instantly
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-[#7B2CBF] via-[#9D4EDD] to-[#FF8C42] p-1 rounded-3xl shadow-2xl"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/20 focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/20 focus:bg-white transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/20 focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Select Service</label>
                    <select name="service" value={formData.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/20 focus:bg-white transition-all">
                      <option>Customized Tours</option>
                      <option>Flight Booking</option>
                      <option>Hotel Reservations</option>
                      <option>Travel Insurance</option>
                      <option>Vacation Packages</option>
                      <option>Visa Procurement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Details / Requests</label>
                  <textarea name="details" value={formData.details} onChange={handleChange} rows="5"
                    placeholder="Tell us about your dream tour... (destination, dates, travelers, interests, special requests)"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-200 focus:outline-none focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/20 focus:bg-white transition-all resize-none"></textarea>
                </div>

                <motion.button
                  type="submit" disabled={isSubmitting || isSubmitted}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                  className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-3 ${
                    isSubmitted ? 'bg-gradient-to-r from-green-500 to-green-600'
                    : 'bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:shadow-xl hover:shadow-green-500/30'
                  } ${isSubmitting || isSubmitted ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'}`}
                >
                  {isSubmitting ? (<><Loader2 size={22} className="animate-spin" />Sending Your Request...</>)
                  : isSubmitted ? (<><CheckCircle2 size={22} />Opening WhatsApp...</>)
                  : (<><FaWhatsapp size={24} />Send Inquiry via WhatsApp</>)}
                </motion.button>

                <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1.5">
                  <Shield size={12} className="text-[#7B2CBF]" />
                  Your information is secure. We respect your privacy.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#FF8C42] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="inline-block mb-4">
              <Globe className="text-white" size={48} />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready for Your Adventure?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's design the perfect tour that matches your dreams, style, and budget.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I want to plan a customized tour.')}`} target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#7B2CBF] font-bold shadow-2xl hover:shadow-white/50 transition-all">
                  <FaWhatsapp size={20} />Chat on WhatsApp
                </motion.button>
              </a>
              <Link to="/packages">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-[#7B2CBF] transition-all">
                  View Packages<ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
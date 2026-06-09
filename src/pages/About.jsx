import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send,
  Target,
  Eye,
  Heart,
  Shield,
  Award,
  Clock,
  Briefcase,
  Lightbulb,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../component/Navbar';
import lady from "../assets/IMG20230506111111.jpg.jpeg";
import agent from "../assets/IMG-20230505-WA0065.jpg.jpeg";

const About = () => {
  // ── Form State Management ──────────────────────────────────
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ⚠️ IMPORTANT: Replace with Mrs. Mary's actual WhatsApp number
  // Format: country code + number (no + or spaces)
  const WHATSAPP_NUMBER = '2348052676836';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message with emojis & formatting
    const whatsappMessage = `*🌍 New Inquiry from Macwise Travels Website*

*👤 Name:* ${formData.name}
*📧 Email:* ${formData.email}
*📝 Subject:* ${formData.subject}

*💬 Message:*
${formData.message || 'No additional message provided'}

---
_Sent via Macwise Travels Contact Form_`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Brief loading state then open WhatsApp
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }, 800);
  };

  // ── Core Values Data ──────────────────────────────────────
  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and strong ethical standards in all our dealings. Our clients trust us because we always do what is right.',
      gradient: 'from-[#7B2CBF] to-[#9D4EDD]',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering top-quality services with attention to detail, ensuring every travel experience is smooth, efficient, and professional.',
      gradient: 'from-[#FF8C42] to-[#FF6B1A]',
    },
    {
      icon: Heart,
      title: 'Customer-Centricity',
      description: 'Our clients are at the heart of everything we do. We listen, understand their needs, and provide tailored solutions that exceed expectations.',
      gradient: 'from-[#9D4EDD] to-[#FF8C42]',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'We keep our promises and deliver on time. Clients can depend on us for accurate information, timely processing, and consistent support.',
      gradient: 'from-[#7B2CBF] to-[#FF6B1A]',
    },
    {
      icon: Briefcase,
      title: 'Professionalism',
      description: 'We maintain a high level of competence, discipline, and respect in all interactions, ensuring a premium service experience.',
      gradient: 'from-[#FF6B1A] to-[#9D4EDD]',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously improve our processes and embrace new ideas and technologies to make travel simpler and more convenient.',
      gradient: 'from-[#9D4EDD] to-[#7B2CBF]',
    },
    {
      icon: Sparkles,
      title: 'Commitment',
      description: 'We go the extra mile to ensure every journey is successful, safe, and stress-free for our clients.',
      gradient: 'from-[#FF8C42] to-[#7B2CBF]',
    },
  ];

  const accreditations = [
    'National Association of Nigerian Travel Agencies (NANTA)',
    'Nigerian Civil Aviation Authority (NCAA)',
    'National Association of Tour Operators (NATOP)',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO BANNER ──────────────────────────────────────────── */}
      <section
        style={{ backgroundImage: `url(${lady})` }}
        className="relative bg-cover bg-center h-[400px] md:h-[500px] mt-[120px] md:mt-[140px] flex items-center justify-center overflow-hidden"
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7B2CBF]/80 via-[#1a0d2e]/70 to-[#FF8C42]/70"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF8C42]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#9D4EDD]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="inline-block text-[#FFD8A8] font-bold text-sm tracking-[0.3em] uppercase mb-4">
            ✈️ Get to Know Us
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/90 text-lg">
            <Link to="/" className="hover:text-[#FFD8A8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#FFD8A8]">About Us</span>
          </div>
        </motion.div>
      </section>

      {/* ── COMPANY INTRO SECTION ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#FFF5EE] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-[#7B2CBF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-[#FF8C42]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={agent}
                  alt="Macwise Travels Team"
                  className="w-full h-[500px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#7B2CBF]/40 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-4 md:-right-8 bg-white rounded-2xl p-6 shadow-2xl border border-[#E0AAFF]/30"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7B2CBF] to-[#FF8C42] flex items-center justify-center">
                    <Award className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                    9+
                    </p>
                    <p className="text-gray-600 text-sm font-medium">
                      Years of Excellence
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-[#FF6B1A] font-bold text-sm tracking-[0.3em] uppercase mb-4">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Macwise Travels &{' '}
                <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                  Tours Limited
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                Macwise Travels & Tours Limited is a leading Travel Management
                company, founded in <strong>2020</strong> and incorporated in{' '}
                <strong>2022</strong>. We specialize in managing the travel needs
                of NGOs, government agencies, multinational corporations, private
                firms, and individuals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our services are designed to be high-quality, timely, and
                client-focused, ensuring a seamless travel experience. Whether for
                business or leisure, we help our clients make informed travel
                decisions with ease and confidence.
              </p>

              {/* Accreditations */}
              <div className="bg-gradient-to-br from-[#7B2CBF]/5 to-[#FF8C42]/5 p-6 rounded-2xl border border-[#E0AAFF]/30">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield size={18} className="text-[#7B2CBF]" />
                  Our Accreditations
                </h4>
                <ul className="space-y-2">
                  {accreditations.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle2
                        size={18}
                        className="text-[#FF8C42] flex-shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION SECTION ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm tracking-[0.3em] uppercase mb-4">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vision &{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-[#7B2CBF] to-[#9D4EDD] rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group"
            >
              {/* Background Pattern */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF8C42]/20 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  To become a leading and trusted travel management company not
                  just in Africa but Globally, recognized for delivering seamless,
                  innovative, and customer-focused travel solutions that connect
                  people and opportunities across the globe.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group"
            >
              {/* Background Pattern */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#7B2CBF]/20 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  To provide reliable, efficient, and personalized travel services
                  that simplify every journey. We are committed to supporting our
                  clients with expert visa advisory, seamless bookings, and
                  exceptional customer service, while maintaining the highest
                  standards of professionalism, integrity, and excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES SECTION ──────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FFF5EE] via-white to-[#FFF5EE] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7B2CBF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#FF8C42]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl px-4 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm tracking-[0.3em] uppercase mb-4">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Core{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              These principles guide every decision we make and every service we
              deliver—shaping the Macwise experience.
            </p>
          </motion.div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
                >
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-[#FF8C42]/20 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={26} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#7B2CBF] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>

                  {/* Bottom Accent Bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA SECTION ──────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#7B2CBF] to-[#1a0d2e] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C42]/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <span className="inline-block text-[#FFD8A8] font-bold text-sm tracking-[0.3em] uppercase mb-4">
                  Reach Out
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Let's Plan Your Next{' '}
                  <span className="bg-gradient-to-r from-[#FF8C42] to-[#FFD8A8] bg-clip-text text-transparent">
                    Journey
                  </span>
                </h3>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Get in touch with our travel experts. We're here to help you
                  every step of the way.
                </p>

                {/* Contact Items */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Our Office</h4>
                      <p className="text-white/80 text-sm">
                        Block A, Shop 1, 3rd Avenue
                        <br />
                        Cornershop, Gwarimpa, Abuja, Nigeria
                      </p>
                    </div>
                  </div>

                  <a
                    href="mailto:Macwiseltd@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <p className="text-white/80 text-sm group-hover:text-[#FFD8A8] transition-colors">
                        Macwiseltd@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+2349130593550"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-white/80 text-sm group-hover:text-[#FFD8A8] transition-colors">
                        +234 913 059 3550
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp Quick Action */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Macwise Travels! I would like to inquire about your services.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FaWhatsapp className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">WhatsApp Us</h4>
                      <p className="text-white/80 text-sm group-hover:text-[#FFD8A8] transition-colors">
                        Chat with us instantly
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: WhatsApp Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#FFF5EE] to-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#E0AAFF]/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Get In Touch
                </h3>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-md">
                  <FaWhatsapp className="text-white" size={20} />
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Fill out the form and we'll respond via{' '}
                <span className="font-semibold text-[#25D366]">WhatsApp</span> shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/20 transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/20 transition-all"
                  />
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/20 transition-all"
                  >
                    <option value="">-- Select a subject --</option>
                    <option value="Flight Booking Inquiry">✈️ Flight Booking Inquiry</option>
                    <option value="Visa Procurement">📄 Visa Procurement</option>
                    <option value="Vacation Package">🌴 Vacation Package</option>
                    <option value="Hotel Reservation">🏨 Hotel Reservation</option>
                    <option value="Customized Tour">🗺️ Customized Tour</option>
                    <option value="Travel Insurance">🛡️ Travel Insurance</option>
                    <option value="General Inquiry">💬 General Inquiry</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your travel plans..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#FF8C42] focus:ring-2 focus:ring-[#FF8C42]/20 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                  className={`w-full py-4 rounded-xl text-white font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-gradient-to-r from-green-500 to-green-600'
                      : 'bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:shadow-xl hover:shadow-green-500/30'
                  } ${isSubmitting || isSubmitted ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 size={20} />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <FaWhatsapp size={20} />
                      Send via WhatsApp
                    </>
                  )}
                </motion.button>

                {/* Info Note */}
                <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
                  <FaWhatsapp className="text-[#25D366]" size={12} />
                  Your message will open in WhatsApp for instant delivery
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#FF8C42] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Macwise Travels for
              their travel needs.
            </p>
            <Link to="/packages">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#7B2CBF] font-bold shadow-2xl hover:shadow-white/50 transition-all"
              >
                Explore Our Packages
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
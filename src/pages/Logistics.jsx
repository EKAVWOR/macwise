import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Truck,
  Package,
  Globe,
  Shield,
  CheckCircle2,
  ChevronDown,
  Plane,
  Ship,
  Warehouse,
  Clock,
  MapPin,
  Headphones,
  Zap,
} from 'lucide-react';
import { FaWhatsapp, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Logistics = () => {
  const WHATSAPP_NUMBER = '2348052676836';
  const heroBg =
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Logistics Services Inquiry',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const text = `*Logistics Services Inquiry*%0A%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Service:* ${subject}%0A
*Message:* ${message || 'No additional message'}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setFormData({
      name: '',
      email: '',
      subject: 'Logistics Services Inquiry',
      message: '',
    });
  };

  // ✅ Key Services
  const services = [
    {
      icon: Plane,
      title: 'Air Freight',
      description:
        'Fast and reliable air cargo solutions for time-sensitive shipments to and from any destination worldwide.',
      gradient: 'from-[#7B2CBF] to-[#9D4EDD]',
    },
    {
      icon: Ship,
      title: 'Sea Freight',
      description:
        'Cost-effective ocean freight services for bulk shipments — both FCL (Full Container) and LCL (Less than Container).',
      gradient: 'from-[#FF8C42] to-[#FF6B1A]',
    },
    {
      icon: Truck,
      title: 'Road Transport',
      description:
        'Efficient ground transportation across Nigeria and West Africa with our reliable fleet of trucks.',
      gradient: 'from-[#9D4EDD] to-[#FF8C42]',
    },
    {
      icon: Warehouse,
      title: 'Warehousing',
      description:
        'Secure warehousing and storage solutions with inventory management for short and long-term needs.',
      gradient: 'from-[#7B2CBF] to-[#FF6B1A]',
    },
    {
      icon: Package,
      title: 'Custom Clearance',
      description:
        'Expert handling of customs documentation, duties, and clearance for smooth import & export processes.',
      gradient: 'from-[#FF6B1A] to-[#9D4EDD]',
    },
    {
      icon: Shield,
      title: 'Cargo Insurance',
      description:
        'Comprehensive insurance coverage protecting your goods against loss, damage, and unforeseen events.',
      gradient: 'from-[#9D4EDD] to-[#7B2CBF]',
    },
  ];

  // ✅ Coverage Areas
  const coverage = [
    {
      region: 'Africa',
      flag: '🌍',
      countries: '54+ Countries',
      image:
        'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80',
      highlight: 'Pan-African network',
    },
    {
      region: 'Europe',
      flag: '🇪🇺',
      countries: '40+ Countries',
      image:
        'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
      highlight: 'Fast EU delivery',
    },
    {
      region: 'Asia',
      flag: '🌏',
      countries: '30+ Countries',
      image:
        'https://images.unsplash.com/photo-1535139262971-c51845709a48?w=600&q=80',
      highlight: 'China direct routes',
    },
    {
      region: 'North America',
      flag: '🇺🇸',
      countries: '3 Countries',
      image:
        'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80',
      highlight: 'Express shipping',
    },
    {
      region: 'Middle East',
      flag: '🇦🇪',
      countries: '15+ Countries',
      image:
        'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80',
      highlight: 'Dubai hub access',
    },
    {
      region: 'Worldwide',
      flag: '🌐',
      countries: '195+ Countries',
      image:
        'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600&q=80',
      highlight: 'Global coverage',
    },
  ];

  // ✅ Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Request Quote',
      description:
        'Contact us with your shipment details — origin, destination, weight, and dimensions.',
    },
    {
      step: '02',
      title: 'Pickup Scheduling',
      description:
        'We schedule a convenient pickup time and collect your shipment from your location.',
    },
    {
      step: '03',
      title: 'Documentation',
      description:
        'Our team handles all paperwork, customs forms, and required documentation for you.',
    },
    {
      step: '04',
      title: 'Shipment & Tracking',
      description:
        'Your cargo is shipped via the best route with real-time tracking updates.',
    },
    {
      step: '05',
      title: 'Customs Clearance',
      description:
        'Expert handling of customs duties and clearance at destination port or airport.',
    },
    {
      step: '06',
      title: 'Final Delivery',
      description:
        'Door-to-door delivery to the recipient with proof of delivery confirmation.',
    },
  ];

  // ✅ Benefits
  const benefits = [
    'Real-time shipment tracking',
    'Competitive & transparent pricing',
    'Door-to-door delivery service',
    'Experienced logistics experts',
    'Secure cargo handling',
    'Express & standard delivery options',
    '24/7 customer support',
    'Global network of trusted partners',
  ];

  // ✅ FAQs
  const faqs = [
    {
      q: 'What types of cargo do you handle?',
      a: 'We handle all types of cargo including general goods, perishables, fragile items, electronics, vehicles, machinery, and personal effects. We also handle hazardous materials with proper certification.',
    },
    {
      q: 'How long does international shipping take?',
      a: 'Delivery time depends on the shipping method. Air freight typically takes 3-7 days, while sea freight can take 20-45 days depending on the destination.',
    },
    {
      q: 'Do you provide door-to-door service?',
      a: 'Yes! We offer complete door-to-door logistics — from pickup at the sender\'s location to delivery at the recipient\'s address, including all customs clearance.',
    },
    {
      q: 'How can I track my shipment?',
      a: 'We provide a unique tracking number for every shipment. You can track in real-time via our online portal, WhatsApp, or by calling our 24/7 support line.',
    },
    {
      q: 'What about customs clearance and duties?',
      a: 'We handle all customs procedures including documentation, tariff classification, and duty calculation. Duties are usually paid by the receiver unless DDP (Delivery Duty Paid) is arranged.',
    },
    {
      q: 'Is my cargo insured during shipping?',
      a: 'Standard shipments come with basic carrier liability. We strongly recommend our comprehensive cargo insurance for full protection against loss, damage, or theft.',
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#7B2CBF]/80 to-[#FF8C42]/70" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-[10%]"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl
               flex items-center justify-center border border-white/30">
                <Truck className="text-white" size={40} />
              </div>
            </div>
            <p className="text-center text-[40px] md:text-[50px] font-bold text-white">
              Logistics Services
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center pt-[20px] text-[20px] md:text-[25px] text-white pb-[10%] max-w-3xl mx-auto px-4"
          >
            Reliable freight solutions — delivered with care, worldwide
          </motion.p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[#FF6B1A] font-bold text-sm
               tracking-[0.3em] uppercase mb-4">
                ★ Freight & Cargo ★
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6
               leading-tight">
                Moving Goods{' '}
                <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
                 bg-clip-text text-transparent">
                  Across The Globe
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Macwise Travels, we provide comprehensive logistics and
                freight solutions designed to move your cargo safely, quickly,
                and affordably. Whether it's a small parcel or large shipment,
                we handle it all with utmost professionalism.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From air and sea freight to road transport, customs clearance,
                and warehousing — we are your trusted logistics partner with
                end-to-end solutions tailored to your needs.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r
                   from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                    195+
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Countries</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r
                   from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                    99%
                  </div>
                  <p className="text-gray-500 text-sm mt-1">On-Time Delivery</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80"
                  alt="Logistics & cargo shipping"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl
               shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br
                   from-[#7B2CBF] to-[#FF8C42] flex items-center justify-center">
                    <Globe className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Global Network</p>
                    <p className="text-sm text-gray-500">Trusted Partners</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#FFF5EE] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm
             tracking-[0.3em] uppercase mb-4">
              ★ Our Solutions ★
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive logistics solutions designed to handle your cargo
              with care, speed, and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border
                   border-gray-100 hover:shadow-2xl transition-all group"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br
                     ${service.gradient} flex items-center justify-center mb-6
                      shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm
             tracking-[0.3em] uppercase mb-4">
              ★ Coverage Areas ★
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Where We{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Ship
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From local deliveries to international shipments — our global
              reach covers every corner of the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverage.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative rounded-3xl overflow-hidden shadow-xl
                 group cursor-pointer h-72"
              >
                <img
                  src={area.image}
                  alt={area.region}
                  onError={(e) => {
                    e.target.style.background =
                      'linear-gradient(135deg, #7B2CBF, #FF8C42)';
                  }}
                  className="w-full h-full object-cover transition-transform
                   duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90
                 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-4xl mb-2">{area.flag}</div>
                  <h3 className="text-2xl font-bold mb-1">{area.region}</h3>
                  <p className="text-white/80 text-sm mb-1">{area.countries}</p>
                  <span className="inline-block mt-3 bg-gradient-to-r
                   from-[#7B2CBF] to-[#FF8C42] text-white text-xs font-bold
                    px-3 py-1 rounded-full">
                    {area.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#FFF5EE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm
             tracking-[0.3em] uppercase mb-4">
              ★ How It Works ★
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Shipping Process
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From pickup to delivery — we make the entire shipping process
              simple and stress-free.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border
                 border-gray-100 relative overflow-hidden group
                  hover:shadow-2xl transition-all"
              >
                {/* Big Step Number */}
                <div className="absolute -top-4 -right-4 text-8xl font-bold
                 text-gray-100 group-hover:text-purple-100 transition-colors">
                  {step.step}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br
                   from-[#7B2CBF] to-[#FF8C42] flex items-center justify-center
                    text-white font-bold mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
                  alt="Logistics operations"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-br
               from-[#7B2CBF] to-[#FF8C42] p-6 rounded-2xl shadow-xl text-white">
                <Zap size={32} className="mb-2" />
                <div className="text-3xl font-bold">10K+</div>
                <p className="text-sm">Deliveries Made</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[#FF6B1A] font-bold text-sm
               tracking-[0.3em] uppercase mb-4">
                ★ Why Choose Us ★
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6
               leading-tight">
                Logistics You Can{' '}
                <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
                 bg-clip-text text-transparent">
                  Trust
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With years of experience and a global network of trusted
                partners, we ensure your cargo reaches its destination safely,
                on time, every time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="text-[#FF8C42] flex-shrink-0 mt-0.5"
                      size={22}
                    />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
        

      {/* FAQs */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#FFF5EE] to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm
             tracking-[0.3em] uppercase mb-4">
              ★ Got Questions? ★
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our logistics services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden
                 border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6
                   text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 text-lg pr-4">
                    {faq.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full
                     flex items-center justify-center ${
                       openFaq === i
                         ? 'bg-gradient-to-br from-[#7B2CBF] to-[#FF8C42] text-white'
                         : 'bg-gray-100 text-gray-600'
                     }`}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed
                       border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Map + Form */}
      <div style={{ backgroundColor: '#FF61370D' }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm
             tracking-[0.3em] uppercase mb-4">
              ★ Get Started ★
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Request a{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Quote
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to ship? Get a free quote from our logistics experts today.
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
                    Suite 304, 3rd floor MKK Plaza Jabi Abuja FCT,
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

            {/* WhatsApp Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
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
                    Email <span className="text-red-500">*</span>
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
                    Service Type
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 rounded-xl border-2
                     border-gray-200 focus:border-purple-400 focus:bg-white
                      focus:outline-none transition-all"
                  >
                    <option value="Logistics Services Inquiry">
                      General Inquiry
                    </option>
                    <option value="Air Freight Quote">✈️ Air Freight</option>
                    <option value="Sea Freight Quote">🚢 Sea Freight</option>
                    <option value="Road Transport">🚚 Road Transport</option>
                    <option value="Warehousing">🏭 Warehousing</option>
                    <option value="Custom Clearance">📦 Custom Clearance</option>
                    <option value="Cargo Insurance">🛡 Cargo Insurance</option>
                    <option value="Track Shipment">📍 Track Shipment</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Shipment Details
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Origin, destination, weight, dimensions, type of goods..."
                    className="w-full p-3 bg-gray-50 rounded-xl border-2
                     border-gray-200 focus:border-purple-400 focus:bg-white
                      focus:outline-none transition-all resize-none"
                  />
                </div>

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
                  Get instant quote from our logistics experts on WhatsApp.
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

export default Logistics;
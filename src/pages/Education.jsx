import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Award,
  Globe,
  Users,
  CheckCircle2,
  ArrowRight,
  FileText,
  Home,
  DollarSign,
  Plane,
  Briefcase,
  ChevronDown,
} from 'lucide-react';
import { FaWhatsapp, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Education = () => {
  const WHATSAPP_NUMBER = '2348052676836';
  const heroBg =
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Educational Services Inquiry',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const text = `*Educational Services Inquiry*%0A%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Subject:* ${subject}%0A
*Message:* ${message || 'No additional message'}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setFormData({
      name: '',
      email: '',
      subject: 'Educational Services Inquiry',
      message: '',
    });
  };

  // ✅ Key Services
  const services = [
    {
      icon: BookOpen,
      title: 'University Applications',
      description:
        'Expert guidance through the entire application process for top universities worldwide.',
      gradient: 'from-[#7B2CBF] to-[#9D4EDD]',
    },
    {
      icon: FileText,
      title: 'Student Visa Procurement',
      description:
        'Hassle-free student visa processing with our high success rate and expert support.',
      gradient: 'from-[#FF8C42] to-[#FF6B1A]',
    },
    {
      icon: Award,
      title: 'Scholarship Guidance',
      description:
        'Discover and apply for scholarships that match your profile and academic goals.',
      gradient: 'from-[#9D4EDD] to-[#FF8C42]',
    },
    {
      icon: Home,
      title: 'Accommodation Support',
      description:
        'Find safe, affordable, and convenient student housing close to your campus.',
      gradient: 'from-[#7B2CBF] to-[#FF6B1A]',
    },
    {
      icon: DollarSign,
      title: 'Financial Planning',
      description:
        'Budget planning, tuition payment guidance, and financial documentation help.',
      gradient: 'from-[#FF6B1A] to-[#9D4EDD]',
    },
    {
      icon: Briefcase,
      title: 'Post-Study Career',
      description:
        'Guidance on post-study work visas and career opportunities abroad.',
      gradient: 'from-[#9D4EDD] to-[#7B2CBF]',
    },
  ];

  // ✅ Top Destinations
  const destinations = [
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      universities: '160+ Universities',
      image:
        'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&q=80',
      highlight: 'World-class education',
    },
    {
      country: 'United States',
      flag: '🇺🇸',
      universities: '4000+ Institutions',
      image:
        'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80',
      highlight: 'Innovation & research',
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      universities: '100+ Universities',
      image:
        'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&q=80',
      highlight: 'Affordable quality',
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      universities: '43 Universities',
      image:
        'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80',
      highlight: 'Post-study work visa',
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      universities: '400+ Institutions',
      image:
        'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
      highlight: 'Low tuition fees',
    },
    {
      country: 'Ireland',
      flag: '🇮🇪',
      universities: '34 Universities',
      image:
        'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=600&q=80',
      highlight: 'English-speaking',
    },
  ];

  // ✅ Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description:
        'Free consultation to understand your academic goals and preferences.',
    },
    {
      step: '02',
      title: 'Country & Course Selection',
      description:
        'We help you choose the best country, university, and course for your career.',
    },
    {
      step: '03',
      title: 'Application & Admission',
      description:
        'Complete application support from documents to university admission letter.',
    },
    {
      step: '04',
      title: 'Visa Processing',
      description:
        'Expert handling of your student visa application with high success rate.',
    },
    {
      step: '05',
      title: 'Pre-Departure',
      description:
        'Flight booking, accommodation, and pre-departure briefing for smooth transition.',
    },
    {
      step: '06',
      title: 'Post-Arrival Support',
      description:
        'Ongoing support even after you arrive at your study destination.',
    },
  ];

  // ✅ Benefits
  const benefits = [
    'High visa approval success rate',
    'Personalized one-on-one counseling',
    'Partnerships with top global universities',
    'Scholarship discovery & application help',
    'End-to-end support from start to finish',
    'No hidden fees — transparent pricing',
    'Pre & post-departure assistance',
    'Experienced & certified counselors',
  ];

  // ✅ FAQs
  const faqs = [
    {
      q: 'Which countries can you help me study in?',
      a: 'We assist with admissions and student visas to over 15 countries including the UK, US, Canada, Australia, Germany, Ireland, France, and more.',
    },
    {
      q: 'How long does the entire process take?',
      a: 'The process typically takes 3-6 months from consultation to departure, depending on the country and intake season.',
    },
    {
      q: 'Do you help with scholarships?',
      a: 'Yes! We help you discover and apply for scholarships, grants, and financial aid opportunities that match your profile.',
    },
    {
      q: 'What is your student visa success rate?',
      a: 'We maintain a high success rate due to our thorough document review, application guidance, and interview preparation.',
    },
    {
      q: 'Can you help with accommodation?',
      a: 'Absolutely — we help you secure safe, affordable student accommodation close to your university campus.',
    },
    {
      q: 'Do I need to take IELTS or TOEFL?',
      a: 'Most English-speaking countries require proof of English proficiency. We can guide you on which test to take and provide preparation resources.',
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
                <GraduationCap className="text-white" size={40} />
              </div>
            </div>
            <p className="text-center text-[40px] md:text-[50px] font-bold text-white">
              Educational Services
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center pt-[20px] text-[20px] md:text-[25px] text-white pb-[10%] max-w-3xl mx-auto px-4"
          >
            Your dream of studying abroad — made simple
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
                ★ Study Abroad ★
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6
               leading-tight">
                Open Doors to{' '}
                <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
                 bg-clip-text text-transparent">
                  Global Education
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Macwise Travels, we believe education has no borders. Whether
                you dream of studying at Oxford, Harvard, or any top global
                institution, our expert team guides you through every step —
                from university selection to securing your student visa.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                With years of experience and partnerships with leading universities
                worldwide, we transform your academic aspirations into reality.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r
                   from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                    15+
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Countries</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r
                   from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                    500+
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Universities</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r
                   from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                    98%
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Visa Success</p>
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
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                  alt="Students studying abroad"
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
                    <p className="font-bold text-gray-900">Worldwide</p>
                    <p className="text-sm text-gray-500">Top Destinations</p>
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
              ★ Our Offerings ★
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive educational services tailored to make your study
              abroad journey seamless and successful.
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

      {/* Top Destinations */}
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
              ★ Study Destinations ★
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Countries
              </span>{' '}
              to Study
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore the world's leading study destinations with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, i) => (
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
                  src={dest.image}
                  alt={dest.country}
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
                  <div className="text-4xl mb-2">{dest.flag}</div>
                  <h3 className="text-2xl font-bold mb-1">{dest.country}</h3>
                  <p className="text-white/80 text-sm mb-1">{dest.universities}</p>
                  <span className="inline-block mt-3 bg-gradient-to-r
                   from-[#7B2CBF] to-[#FF8C42] text-white text-xs font-bold
                    px-3 py-1 rounded-full">
                    {dest.highlight}
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
                Simple Process
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From consultation to graduation — we're with you at every step.
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
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80"
                  alt="Successful students"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-br
               from-[#7B2CBF] to-[#FF8C42] p-6 rounded-2xl shadow-xl text-white">
                <Users size={32} className="mb-2" />
                <div className="text-3xl font-bold">1000+</div>
                <p className="text-sm">Happy Students</p>
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
                Your Success is Our{' '}
                <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
                 bg-clip-text text-transparent">
                  Priority
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We don't just process applications — we build lifelong
                relationships with our students, ensuring their success at
                every stage of their academic journey.
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
              Find answers to common questions about studying abroad.
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
              Begin Your{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to study abroad? Get in touch with our educational
              consultants today.
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
                    Preferred Destination
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 rounded-xl border-2
                     border-gray-200 focus:border-purple-400 focus:bg-white
                      focus:outline-none transition-all"
                  >
                    <option value="Educational Services Inquiry">
                      General Inquiry
                    </option>
                    <option value="Study in UK">Study in UK 🇬🇧</option>
                    <option value="Study in USA">Study in USA 🇺🇸</option>
                    <option value="Study in Canada">Study in Canada 🇨🇦</option>
                    <option value="Study in Australia">
                      Study in Australia 🇦🇺
                    </option>
                    <option value="Study in Germany">
                      Study in Germany 🇩🇪
                    </option>
                    <option value="Study in Ireland">
                      Study in Ireland 🇮🇪
                    </option>
                    <option value="Scholarship Information">
                      Scholarship Information
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Tell Us About Your Goals
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What course do you want to study? Any specific universities in mind?"
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
                  Get instant reply from our educational consultants on WhatsApp.
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

export default Education;
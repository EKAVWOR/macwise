import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { FaWhatsapp, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

import lane from '../assets/IMG_20251013_194502.jpg.jpeg';
import Germany from '../assets/IMG_20251007_104110.jpg.jpeg';
import poland from '../assets/IMG_20251007_104409.jpg.jpeg';
import egypr from '../assets/IMG_20251013_192746.jpg.jpeg';
import quatar from '../assets/IMG_20251007_104503.jpg.jpeg';
import good from '../assets/IMG_20251013_192958.jpg.jpeg';
import berlin from '../assets/IMG_20251013_193023.jpg.jpeg';

const Testimonials = () => {
  // ✅ WhatsApp number
  const WHATSAPP_NUMBER = '2348052676836';

  // Form state
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

  // ✅ All 5 real testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Chidinma',
      role: 'Verified Client',
      initial: 'C',
      rating: 5,
      text: 'An exceptional service from start to finish! Mrs Mary Chinasa Ani at Macwise Travel Ltd was incredibly helpful and ever responsive to my questions and concerns. I highly recommend Macwise Travel Ltd.',
      service: 'Travel Consultation',
      gradient: 'from-[#7B2CBF] to-[#9D4EDD]',
    },
    {
      id: 2,
      name: 'Obikaeze Odera Ifebigh',
      role: 'Multi-Visa Client',
      initial: 'O',
      rating: 5,
      text: "I am pleased to share my outstanding experience with Macwise Travels Ltd. After facing three previous rejections for my United States visa, Macwise Travels stepped in with a high level of professionalism, expertise, and attention to detail. They carefully reviewed my profile, guided me through corrections, and ensured my application was properly structured. To my great delight, not only was my U.S. visa approved, but I was granted a long-term multiple entry visa. They also successfully assisted me with visa applications to the UK, France, China, and Canada. Their honesty, transparency, and commitment to client success truly set them apart.",
      service: 'US, UK, France, China & Canada Visa',
      gradient: 'from-[#FF8C42] to-[#FF6B1A]',
    },
    {
      id: 3,
      name: 'Noruwa Oyomire',
      role: 'Satisfied Client',
      initial: 'N',
      rating: 5,
      text: 'The service rendered to me was superb and top notch 👌... I will always recommend you anyday and anytime.',
      service: 'Premium Travel Service',
      gradient: 'from-[#9D4EDD] to-[#7B2CBF]',
    },
    {
      id: 4,
      name: 'Chidumebi Udenze Oleka',
      role: 'UK Visa Client',
      initial: 'C',
      rating: 5,
      text: 'I am pleased to share my experience with Macwise Travels Ltd. After facing three previous UK visa refusals, I almost lost hope. However, Macwise Travels Ltd handled my application with outstanding professionalism, attention to detail, and expert guidance. They carefully reviewed my documents, identified past mistakes, and helped me present a much stronger application. I am delighted to say that my UK visa was finally approved. I highly recommend Macwise Travels Ltd to anyone seeking reliable and result-driven travel and visa support.',
      service: 'UK Visa Procurement',
      gradient: 'from-[#9D4EDD] to-[#FF8C42]',
    },
    {
      id: 5,
      name: 'Muktar Abdulfattah Kabir',
      role: 'First-Time Traveler',
      initial: 'M',
      rating: 5,
      text: 'I want to extend a huge thank you to Mrs. Mary, the CEO, and the entire Macwise Travels Limited team. This was my first time applying for a UK visa, and you made the entire process incredibly easy. I received my visa on my first attempt, all thanks to the smooth and detailed guidance you provided. I truly appreciate your help.',
      service: 'UK Visa - First Attempt Success',
      gradient: 'from-[#7B2CBF] to-[#FF6B1A]',
    },
  ];

  const totalRatings = testimonials.reduce((sum, t) => sum + t.rating, 0);
  const averageRating = (totalRatings / testimonials.length).toFixed(2);

  const galleryImages = [
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
                  className="w-full h-full object-cover object-top
                   transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t
                 from-black/60 via-black/20 to-transparent opacity-0
                  group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute top-3 right-3 bg-green-500
                 text-white text-xs font-bold px-3 py-1 rounded-full
                  shadow-md opacity-0 group-hover:opacity-100
                   transition-all duration-300">
                  ✓ Success Story
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Testimonials Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white
       via-[#FFF5EE] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B2CBF]
           rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF8C42]
           rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm
             tracking-[0.3em] uppercase mb-4">
              ★ Client Testimonials ★
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6
             text-gray-900">
              What Our{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real travelers who trusted us with their journey
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 mt-6 bg-white px-6
               py-3 rounded-full shadow-lg border border-[#E0AAFF]/30"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-[#FF8C42] fill-[#FF8C42]"
                  />
                ))}
              </div>
              <span className="text-gray-900 font-bold text-lg">
                {averageRating}
              </span>
              <span className="text-gray-500 text-sm">
                ({testimonials.length} reviews)
              </span>
            </motion.div>
          </motion.div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass:
                'swiper-pagination-bullet !bg-[#9D4EDD] !opacity-30',
              bulletActiveClass:
                'swiper-pagination-bullet-active !bg-[#7B2CBF] !opacity-100 !w-8',
            }}
            className="testimonials-swiper !py-12 !pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="!w-[350px] md:!w-[550px] lg:!w-[600px]"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-xl
                   relative h-full border border-gray-100"
                >
                  <div className="absolute -top-6 left-8">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br
                       ${testimonial.gradient} flex items-center
                        justify-center shadow-lg`}
                    >
                      <Quote className="text-white" size={26} />
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4 justify-center pt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={22}
                        className="text-[#FF8C42] fill-[#FF8C42]"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 text-center mb-6 italic
                   leading-relaxed text-sm md:text-base">
                    "{testimonial.text}"
                  </p>

                  <div className="flex justify-center mb-6">
                    <span
                      className={`px-4 py-1.5 rounded-full bg-gradient-to-r
                       ${testimonial.gradient} text-white text-xs
                        font-semibold shadow-md`}
                    >
                      ✓ {testimonial.service}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t
                   border-gray-100">
                    <div className="relative flex-shrink-0">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br
                         ${testimonial.gradient} flex items-center
                          justify-center text-white font-bold text-xl
                           shadow-lg border-4 border-white`}
                      >
                        {testimonial.initial}
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-6 h-6
                       bg-green-500 rounded-full flex items-center
                        justify-center border-2 border-white shadow-md">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 right-0 w-32 h-32
                     bg-gradient-to-br ${testimonial.gradient}
                      rounded-tl-full opacity-10 -z-10`}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Trust Badges / Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { number: '5.0', label: 'Average Rating', icon: '⭐' },
              { number: '100%', label: 'Satisfaction Rate', icon: '💯' },
              { number: '15+', label: 'Countries Covered', icon: '🌍' },
              { number: '9+', label: 'Years Experience', icon: '🏆' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center bg-white p-6 rounded-2xl shadow-md
                 hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold
                 bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
                  bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ✅ NEW — Rating Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-16 bg-white rounded-3xl
             shadow-xl p-8 md:p-10 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Rating{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Breakdown
              </span>
            </h3>

            <div className="flex items-center justify-center gap-6 mb-8
             pb-8 border-b border-gray-100">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r
                 from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                  {averageRating}
                </div>
                <div className="flex gap-0.5 justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-[#FF8C42] fill-[#FF8C42]"
                    />
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Based on {testimonials.length} reviews
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = testimonials.filter(
                  (t) => t.rating === star
                ).length;
                const percent = (count / testimonials.length) * 100;

                return (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (5 - star) * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex items-center gap-1 w-16">
                      <span className="font-semibold text-gray-700">
                        {star}
                      </span>
                      <Star
                        size={14}
                        className="text-[#FF8C42] fill-[#FF8C42]"
                      />
                    </div>

                    <div className="flex-1 h-3 bg-gray-100 rounded-full
                     overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (5 - star) * 0.15 }}
                        className="h-full bg-gradient-to-r from-[#7B2CBF]
                         to-[#FF8C42] rounded-full"
                      />
                    </div>

                    <div className="w-24 text-right text-sm">
                      <span className="font-bold text-gray-900">{count}</span>
                      <span className="text-gray-500 ml-1">
                        ({percent.toFixed(0)}%)
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Below Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-6 text-lg">
              Ready to become our next success story?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full
               bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] text-white
                font-bold shadow-xl hover:shadow-purple-500/50 transition-all"
            >
              Start Your Journey Today
              <Star size={18} className="fill-white" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ✅ Contact + Map Section (NEW DESIGN) */}
      <div style={{ backgroundColor: '#FF61370D' }} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
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
              Leave Us A{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Message
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to travel? Contact us now for seamless bookings, expert
              advice, and unbeatable deals! 📞
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left — Map */}
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

            {/* Right — WhatsApp Form */}
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
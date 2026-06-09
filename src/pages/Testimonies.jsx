import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
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
      text: 'After facing three previous rejections for my United States visa, Macwise Travels stepped in with a high level of professionalism, expertise, and attention to detail. To my great delight, not only was my U.S. visa approved, but I was granted a long-term multiple entry visa. They also successfully assisted me with visa applications to the UK, France, China, and Canada. Their honesty, transparency, and commitment to client success truly set them apart.',
      service: 'US, UK, France, China & Canada Visa',
      gradient: 'from-[#FF8C42] to-[#FF6B1A]',
    },
    {
      id: 3,
      name: 'Chidumebi Udenze Oleka',
      role: 'UK Visa Client',
      initial: 'C',
      rating: 5,
      text: 'After facing three previous UK visa refusals, I almost lost hope. However, Macwise Travels Ltd handled my application with outstanding professionalism, attention to detail, and expert guidance. They carefully reviewed my documents, identified past mistakes, and helped me present a much stronger application. I am delighted to say that my UK visa was finally approved.',
      service: 'UK Visa Procurement',
      gradient: 'from-[#9D4EDD] to-[#FF8C42]',
    },
    {
      id: 4,
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
          <p className="text-center pt-[40px] text-[20px] pb-[6%] px-4">
            At Macwise Travels, results speak louder than words. Explore real
            success stories through photos of approved visas, flight tickets,
            and happy clients. These are more than testimonies — they are proof
            that your travel dreams are possible with us.
          </p>
        </motion.div>

        {/* ✅ Portrait Gallery Grid — 3 columns, tall height */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                // ✅ Portrait aspect ratio container
                className="relative group overflow-hidden rounded-2xl shadow-lg"
                style={{ aspectRatio: '3 / 4' }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  // ✅ Fill container, object-top to show top of portrait images
                  className="w-full h-full object-cover object-top
                   transition-transform duration-500 group-hover:scale-105"
                />

                {/* ✅ Hover Overlay — NO title text */}
                <div className="absolute inset-0 bg-gradient-to-t
                 from-black/60 via-black/20 to-transparent opacity-0
                  group-hover:opacity-100 transition-all duration-500" />

                {/* ✅ Success Badge only — no alt text shown */}
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

            {/* Overall Rating Display */}
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
                  {/* Quote Icon */}
                  <div className="absolute -top-6 left-8">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br
                       ${testimonial.gradient} flex items-center
                        justify-center shadow-lg`}
                    >
                      <Quote className="text-white" size={26} />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 justify-center pt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={22}
                        className="text-[#FF8C42] fill-[#FF8C42]"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 text-center mb-6 italic
                   leading-relaxed text-sm md:text-base">
                    "{testimonial.text}"
                  </p>

                  {/* Service Tag */}
                  <div className="flex justify-center mb-6">
                    <span
                      className={`px-4 py-1.5 rounded-full bg-gradient-to-r
                       ${testimonial.gradient} text-white text-xs
                        font-semibold shadow-md`}
                    >
                      ✓ {testimonial.service}
                    </span>
                  </div>

                  {/* Author */}
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

                  {/* Decorative Element */}
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

      {/* Contact / Leave a Message Section */}
      <div style={{ backgroundColor: '#FF61370D' }} className="pb-0">
        <p className="text-orange-700 pl-[50px] pt-[10%] font-bold
         tracking-widest uppercase">
          Get In Touch
        </p>
        <p className="pl-[50px] text-[50px] pt-[30px] font-bold">
          Leave Us A Message
        </p>
        <p className="pl-[50px] pt-[30px] text-[20px]">
          Ready to travel? Contact us now for seamless bookings, expert advice,
          and unbeatable deals! 📞
        </p>

        <div className="px-[30px] pt-[60px] flex flex-col gap-4 max-w-4xl">
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              className="p-[10px] bg-white rounded-[8px] border border-gray-200
               focus:outline-none focus:border-purple-400 w-full shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="p-[10px] bg-white rounded-[8px] border border-gray-200
               focus:outline-none focus:border-purple-400 w-full shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">Subject</label>
            <input
              type="text"
              className="p-[10px] bg-white rounded-[8px] border border-gray-200
               focus:outline-none focus:border-purple-400 w-full shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">
              Your Message (Optional)
            </label>
            <textarea
              rows={5}
              className="p-[10px] bg-white rounded-[8px] border border-gray-200
               focus:outline-none focus:border-purple-400 w-full shadow-sm
                resize-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] text-white
             px-[50px] py-[12px] rounded-[30px] w-fit font-bold shadow-lg mt-2
              mb-[10%]"
          >
            Submit
          </motion.button>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Testimonials;
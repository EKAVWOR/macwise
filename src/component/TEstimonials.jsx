import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Star, Quote, MapPin } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// ✅ Import your logo
import logo from '../assets/LOGO.png';

const Testimonials = () => {
  const testimonials = [
    
    {
      id: 1,
      name: 'Innocent Chinedu Offia',
      role: 'Verified Client',
      location: 'Abuja',
      initial: 'I',
      rating: 5,
      text: "From the very first consultation, they were professional, responsive, and genuinely invested in making my visa process smooth. They took the time to explain every requirement clearly, helped me organize my documents properly, and gave practical advice that strengthened my application. Communication was fast and transparent throughout — I always knew what was next and never felt lost.",
      service: 'Professional Visa Consultation',
      gradient: 'from-[#9D4EDD] to-[#7B2CBF]',
    },
    {
      id: 2,
      name: 'Chidinma',
      role: 'Verified Client',
      location: 'Lagos',
      initial: 'C',
      rating: 5,
      text: "An exceptional service from start to finish! Mrs Mary Chinasa Ani at Macwise Travel Ltd was incredibly helpful and ever responsive to my questions and concerns. I highly recommend Macwise Travel Ltd.",
      service: 'Travel Consultation',
      gradient: 'from-[#7B2CBF] to-[#9D4EDD]',
    },
    {
      id: 3,
      name: 'Obikaeze Odera Ifebigh',
      role: 'Multi-Visa Client',
      location: 'Abuja',
      initial: 'O',
      rating: 5,
      text: "I am pleased to share my outstanding experience with Macwise Travels Ltd and her team in handling my visa applications. After facing three previous rejections for my United States visa, Macwise Travels stepped in with a high level of professionalism, expertise, and attention to detail. They carefully reviewed my profile, guided me through the necessary corrections, and ensured that my application was properly structured and presented. To my great delight, not only was my U.S. visa approved, but I was granted a long-term multiple entry visa. In addition, Macwise Travels successfully assisted me with my visa applications to the United Kingdom, France, China, and Canada — all handled seamlessly. What truly sets them apart is their honesty, transparency, and commitment to client success.",
      service: 'US, UK, France, China & Canada Visa',
      gradient: 'from-[#FF8C42] to-[#FF6B1A]',
    },
    {
      id: 4,
      name: 'Noruwa Oyomire',
      role: 'Satisfied Client',
      location: 'USA',
      initial: 'N',
      rating: 5,
      text: "The service rendered to me was superb and top notch 👌... I will always recommend you anyday and anytime.",
      service: 'Premium Travel Service',
      gradient: 'from-[#9D4EDD] to-[#7B2CBF]',
    },
    {
      id: 5,
      name: 'Chidumebi Udenze Oleka',
      role: 'UK Visa Client',
      location: 'Abuja',
      initial: 'C',
      rating: 5,
      text: "I am pleased to share my experience with Macwise Travels Ltd and their exceptional team. After facing three previous UK visa refusals, I almost lost hope. However, Macwise Travels Ltd handled my application with outstanding professionalism, attention to detail, and expert guidance. They carefully reviewed my documents, identified past mistakes, and helped me present a much stronger application. I am delighted to say that my UK visa was finally approved. I highly recommend Macwise Travels Ltd to anyone seeking reliable and result-driven travel and visa support.",
      service: 'UK Visa Procurement',
      gradient: 'from-[#9D4EDD] to-[#FF8C42]',
    },
    {
      id: 6,
      name: 'Muktar Abdulfattah Kabir',
      role: 'First-Time Traveler',
      location: 'Abuja',
      initial: 'M',
      rating: 5,
      text: "I want to extend a huge thank you to Mrs. Mary, the CEO, and the entire Macwise Travels Limited team. This was my first time applying for a UK visa, and you made the entire process incredibly easy. I received my visa on my first attempt, all thanks to the smooth and detailed guidance you provided. I truly appreciate your help.",
      service: 'UK Visa - First Attempt Success',
      gradient: 'from-[#7B2CBF] to-[#FF6B1A]',
    },
  ];

  // ✅ Calculate average rating dynamically
  const totalRatings = testimonials.reduce((sum, t) => sum + t.rating, 0);
  const averageRating = (totalRatings / testimonials.length).toFixed(2);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#FFF5EE] to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B2CBF] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF8C42] rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#FF6B1A] font-bold text-sm tracking-[0.3em] uppercase mb-4">
            ★ Client Testimonials ★
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            What Our{' '}
            <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
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
            className="inline-flex items-center gap-3 mt-6 bg-white px-6 py-3 rounded-full shadow-lg border border-[#E0AAFF]/30"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#FF8C42] fill-[#FF8C42]" />
              ))}
            </div>
            <span className="text-gray-900 font-bold text-lg">{averageRating}</span>
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
            bulletClass: 'swiper-pagination-bullet !bg-[#9D4EDD] !opacity-30',
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
                className="bg-white rounded-3xl p-8 md:p-10 pb-24 shadow-xl relative h-full border border-gray-100 overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8 z-10">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <Quote className="text-white" size={26} />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 justify-center pt-2 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={22}
                      className="text-[#FF8C42] fill-[#FF8C42]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-center mb-6 italic leading-relaxed text-sm md:text-base relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Service Tag */}
                <div className="flex justify-center mb-6 relative z-10">
                  <span
                    className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${testimonial.gradient} text-white text-xs font-semibold shadow-md`}
                  >
                    ✓ {testimonial.service}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 relative z-10">
                  <div className="relative flex-shrink-0">
                    {/* Initial Avatar */}
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white`}
                    >
                      {testimonial.initial}
                    </div>
                    {/* Verified Badge */}
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-md">
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
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>

                    {/* Location */}
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={12} className="text-[#FF6B1A]" />
                      <span className="text-xs text-gray-500 font-medium">
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ✅ NEW — BIG BOLD LOGO AT BOTTOM CENTER */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#7B2CBF]/5 via-white to-[#FF8C42]/5 border-t border-gray-100 py-4  justify-end items-center pr-6 flex  gap-3">
                  <img
                    src={logo}
                    alt="Macwise Travels"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-md"
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                      Verified Review by
                    </span>
                    <span className="text-base md:text-lg font-black bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent leading-tight">
                      MACWISE TRAVELS
                    </span>
                  </div>
                </div>

                {/* Decorative Element */}
                <div
                  className={`absolute bottom-20 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} rounded-tl-full opacity-10 -z-10`}
                ></div>
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
            { number: '95%', label: 'Satisfaction Rate', icon: '💯' },
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
              className="text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rating Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Rating{' '}
            <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
              Breakdown
            </span>
          </h3>

          {/* Big Score Display */}
          <div className="flex items-center justify-center gap-6 mb-8 pb-8 border-b border-gray-100">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
                {averageRating}
              </div>
              <div className="flex gap-0.5 justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#FF8C42] fill-[#FF8C42]" />
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Based on {testimonials.length} reviews
              </p>
            </div>
          </div>

          {/* Star Distribution Bars */}
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = testimonials.filter((t) => t.rating === star).length;
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
                  {/* Star label */}
                  <div className="flex items-center gap-1 w-16">
                    <span className="font-semibold text-gray-700">{star}</span>
                    <Star size={14} className="text-[#FF8C42] fill-[#FF8C42]" />
                  </div>

                  {/* Progress Bar */}
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: (5 - star) * 0.15 }}
                      className="h-full bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] rounded-full"
                    />
                  </div>

                  {/* Count + Percent */}
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

        {/* CTA */}
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] text-white font-bold shadow-xl hover:shadow-purple-500/50 transition-all"
          >
            Start Your Journey Today
            <Star size={18} className="fill-white" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
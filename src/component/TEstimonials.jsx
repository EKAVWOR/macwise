import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Chidinma',
      role: 'Verified Client',
      initial: 'C',
      rating: 5,
      text: "An exceptional service from start to finish! Mrs Mary Chinasa Ani at Macwise Travel Ltd was incredibly helpful and ever responsive to my questions and concerns. I highly recommend Macwise Travel Ltd.",
      service: 'Travel Consultation',
      gradient: 'from-[#7B2CBF] to-[#9D4EDD]',
    },
    {
      id: 2,
      name: 'Obikaeze Odera Ifebigh',
      role: 'Multi-Visa Client',
      initial: 'O',
      rating: 5,
      text: "After facing three previous rejections for my United States visa, Macwise Travels stepped in with a high level of professionalism, expertise, and attention to detail. To my great delight, not only was my U.S. visa approved, but I was granted a long-term multiple entry visa. They also successfully assisted me with visa applications to the UK, France, China, and Canada. Their honesty, transparency, and commitment to client success truly set them apart.",
      service: 'US, UK, France, China & Canada Visa',
      gradient: 'from-[#FF8C42] to-[#FF6B1A]',
    },
    {
      id: 3,
      name: 'Chidumebi Udenze Oleka',
      role: 'UK Visa Client',
      initial: 'C',
      rating: 5,
      text: "After facing three previous UK visa refusals, I almost lost hope. However, Macwise Travels Ltd handled my application with outstanding professionalism, attention to detail, and expert guidance. They carefully reviewed my documents, identified past mistakes, and helped me present a much stronger application. I am delighted to say that my UK visa was finally approved.",
      service: 'UK Visa Procurement',
      gradient: 'from-[#9D4EDD] to-[#FF8C42]',
    },
    {
      id: 4,
      name: 'Muktar Abdulfattah Kabir',
      role: 'First-Time Traveler',
      initial: 'M',
      rating: 5,
      text: "I want to extend a huge thank you to Mrs. Mary, the CEO, and the entire Macwise Travels Limited team. This was my first time applying for a UK visa, and you made the entire process incredibly easy. I received my visa on my first attempt, all thanks to the smooth and detailed guidance you provided. I truly appreciate your help.",
      service: 'UK Visa - First Attempt Success',
      gradient: 'from-[#7B2CBF] to-[#FF6B1A]',
    },
  ];

  // Calculate average rating
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
              'swiper-pagination-bullet-active !bg-gradient-to-r !from-[#7B2CBF] !to-[#FF8C42] !opacity-100 !w-8',
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
                className="bg-white rounded-3xl p-8 md:p-10 shadow-xl relative h-full border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}
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
                <p className="text-gray-700 text-center mb-6 italic leading-relaxed text-sm md:text-base">
                  "{testimonial.text}"
                </p>

                {/* Service Tag */}
                <div className="flex justify-center mb-6">
                  <span
                    className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${testimonial.gradient} text-white text-xs font-semibold shadow-md`}
                  >
                    ✓ {testimonial.service}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
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
                          d="M5 13l4 4L7-5 7"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div
                  className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} rounded-tl-full opacity-10 -z-10`}
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
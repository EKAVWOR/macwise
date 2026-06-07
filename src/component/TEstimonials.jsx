import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Adventure Seeker',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      rating: 5,
      text: 'The Bali trip was absolutely magical! Every detail was perfectly planned. Our guide was knowledgeable and the accommodations were luxurious. I can\'t wait to book my next adventure!',
      trip: 'Bali Paradise Tour',
      flag: '🇺🇸'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Travel Blogger',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      rating: 5,
      text: 'As a travel blogger, I\'ve been on many tours, but this company stands out. The Swiss Alps experience was breathtaking, and the service was impeccable throughout.',
      trip: 'Swiss Alps Adventure',
      flag: '🇨🇦'
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Honeymoon Traveler',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      rating: 5,
      text: 'Our Maldives honeymoon was a dream come true! The overwater villa was stunning, and the romantic dinners on the beach were unforgettable. Thank you for making our trip special!',
      trip: 'Maldives Romance',
      flag: '🇬🇧'
    },
    {
      id: 4,
      name: 'David Martinez',
      role: 'Family Vacationer',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      rating: 5,
      text: 'Traveling with kids can be stressful, but not with this team! The Paris family tour was well-paced, kid-friendly, and absolutely wonderful. My children are still talking about it!',
      trip: 'Paris Family Adventure',
      flag: '🇪🇸'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Solo Traveler',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      rating: 5,
      text: 'As a solo female traveler, safety is my priority. I felt completely secure throughout my Japan tour. Met amazing people and created lifelong memories!',
      trip: 'Japan Cultural Experience',
      flag: '🇦🇺'
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            What Our <span className="gradient-text">Travelers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of happy travelers who've experienced the journey of a lifetime
          </p>
        </div>

        <Swiper
          modules={[Autoplay, EffectCoverflow]}
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
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="testimonials-swiper !py-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!w-[350px] md:!w-[500px]">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg">
                    <Quote className="text-white" size={24} />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-center mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Trip Tag */}
                <div className="flex justify-center mb-6">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm font-medium">
                    {testimonial.trip}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <span className="absolute -bottom-1 -right-1 text-2xl">{testimonial.flag}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-tl-full opacity-20 -z-10"></div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20" data-aos="fade-up">
          {[
            { number: '50K+', label: 'Happy Travelers' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '25+', label: 'Years Experience' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
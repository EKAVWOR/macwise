import { motion } from 'framer-motion';
import {
  ArrowRight,
  Plane,
  Map,
  Hotel,
  Shield,
  Package,
  FileCheck,
  GraduationCap,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: 'Flight Bookings',
      description:
        'Seamless flight reservations with the best airlines worldwide. Enjoy competitive fares, flexible options, and 24/7 booking support.',
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      icon: Plane,
      link: '/services/flights',
    },
    {
      id: 2,
      title: 'Customized Tours',
      description:
        'Personalized tour experiences tailored to your dreams. From solo adventures to group expeditions, we craft journeys you\'ll never forget.',
      image:
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      icon: Map,
      link: '/services/tours',
    },
    {
      id: 3,
      title: 'Hotel Reservations',
      description:
        'Stay in the world\'s finest hotels and resorts. We secure exclusive deals on luxury accommodations that match your style and budget.',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      icon: Hotel,
      link: '/services/hotels',
    },
    {
      id: 4,
      title: 'Travel Insurance',
      description:
        'Travel with peace of mind. Our comprehensive insurance plans protect you from unexpected events, ensuring worry-free adventures.',
      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      icon: Shield,
      link: '/services/insurance',
    },
    {
      id: 5,
      title: 'Vacation Packages',
      description:
        'All-inclusive vacation deals to dream destinations. From tropical beaches to cultural escapes—pack your bags, we\'ll handle the rest.',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      icon: Package,
      link: '/services/packages',
    },
    {
      id: 6,
      title: 'Visa Procurement',
      description:
        'Stress-free visa processing for individuals and businesses. Our experts handle paperwork, embassies, and approvals—fast and reliable.',
      image:
        'https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=800&q=80',
      icon: FileCheck,
      link: '/services/visa',
    },
    {
      id: 7,
      title: 'Educational Services',
      description:
        'Study abroad with confidence. From university applications to student visas, scholarships, and accommodation—we guide you every step toward your academic dreams.',
      image:
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80',
      icon: GraduationCap,
      link: '/services/education',
    },
    // ✅ NEW — Logistics Services
    {
      id: 8,
      title: 'Logistics Services',
      description:
        'Reliable freight & cargo solutions worldwide. From international shipping to local delivery, we handle your goods with care, speed, and complete tracking.',
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
      icon: Truck,
      link: '/services/logistics',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FFF5EE] via-white to-[#FFF5EE] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 -left-32 w-96 h-96 bg-[#7B2CBF]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 -right-32 w-96 h-96 bg-[#FF8C42]/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E0AAFF]/5 rounded-full mix-blend-multiply filter blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-[#FF6B1A] font-bold text-sm tracking-[0.3em] uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            With years of experience, industry partnerships, and a dedicated team,
            we deliver expert travel solutions—ensuring seamless bookings,
            personalized tours, and exceptional customer service.{' '}
            <span className="text-[#7B2CBF] font-medium">
              Explore our services below.
            </span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <Link to={service.link}>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#7B2CBF] to-[#FF8C42]">
                      <img
                        src={service.image}
                        alt={service.title}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Purple to Orange Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#7B2CBF]/70 via-[#7B2CBF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF8C42] to-[#FF6B1A] flex items-center justify-center shadow-xl">
                          <Icon className="text-white" size={26} />
                        </div>
                      </div>

                      {/* Bottom Orange Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#FF8C42] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#7B2CBF] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-[#FF6B1A] font-semibold text-sm uppercase tracking-wider">
                          Learn More
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7B2CBF] to-[#9D4EDD] flex items-center justify-center group-hover:from-[#FF8C42] group-hover:to-[#FF6B1A] transition-all duration-300 shadow-md"
                        >
                          <ArrowRight className="text-white" size={18} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your next adventure?
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] text-white font-bold shadow-xl hover:shadow-purple-500/50 transition-all inline-flex items-center gap-3 group"
            >
              Get in Touch With Us
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
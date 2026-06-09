import { motion } from 'framer-motion';
import { Shield, HeadphonesIcon, Wallet, Award, Globe, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted & Safe',
      description: 'Licensed operator with 9+ years of safe travel operations worldwide',
      gradient: 'from-primary-500 to-orange-600',
      delay: 0
    },
    {
      icon: Wallet,
      title: 'Best Price Guarantee',
      description: 'We match any competitor price and give you extra 5% discount',
      gradient: 'from-secondary-500 to-purple-600',
      delay: 0.1
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our travel experts anywhere',
      gradient: 'from-orange-500 to-pink-600',
      delay: 0.2
    },
    {
      icon: Heart,
      title: 'Personalized',
      description: 'Custom itineraries tailored to your dreams and preferences',
      gradient: 'from-secondary-600 to-orange-500',
      delay: 0.5
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              We Make Your Travel <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our approach is rooted in professionalism, integrity, and attention to detail, ensuring that clients receive accurate guidance and efficient service delivery. We leverage industry expertise and a client-focused strategy to support seamless travel experiences while maintaining the highest standards of compliance and service excellence.
            </p>

            <div className="space-y-6">
              {[
                'We operate with honesty, transparency, and strong ethical standards in all our dealings.',
                'We are committed to delivering top-quality services with attention to detail',
                'Our clients are at the heart of everything we do.',
                'We keep our promises and deliver on time. Clients can depend on us for accurate information'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: feature.delay }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                    
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import { motion } from 'framer-motion';
import { Award, Users, Globe, Heart, Target, Eye } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'John Anderson',
      role: 'Founder & CEO',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Sarah Mitchell',
      role: 'Head of Operations',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Chen',
      role: 'Travel Director',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emma Davis',
      role: 'Customer Experience',
      image: 'https://randomuser.me/api/portraits/women/11.jpg',
      social: { linkedin: '#', twitter: '#' }
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We live and breathe travel, bringing enthusiasm to every journey we create.',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our success. We go above and beyond for our travelers.',
      gradient: 'from-primary-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'Sustainable Tourism',
      description: 'Committed to responsible travel that benefits local communities and environments.',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering world-class service and unforgettable experiences every time.',
      gradient: 'from-secondary-500 to-purple-600'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              About <span className="gradient-text">MacwiseTravels</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Crafting extraordinary travel experiences for over 25 years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Turning Dreams Into <span className="gradient-text">Reality</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 1999, Macwise Travels began with a simple mission: to make the world accessible to everyone through exceptional travel experiences. What started as a small family business has grown into one of the most trusted names in Macwise travel.
                </p>
                <p>
                  Over the past 25 years, we've helped more than 50,000 travelers explore 150+ destinations across 6 continents. Our secret? We don't just book trips—we craft personalized journeys that create lifelong memories.
                </p>
                <p>
                  Today, our team of travel experts continues to push boundaries, seeking out hidden gems and creating unique experiences that go beyond the ordinary.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { number: '1999', label: 'Established' },
                  { number: '50K+', label: 'Happy Clients' },
                  { number: '150+', label: 'Destinations' },
                  { number: '25+', label: 'Awards Won' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50">
                    <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left" className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80"
                  alt="Travel 1"
                  className="rounded-2xl shadow-lg h-64 object-cover"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80"
                  alt="Travel 2"
                  className="rounded-2xl shadow-lg h-64 object-cover mt-8"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&q=80"
                  alt="Travel 3"
                  className="rounded-2xl shadow-lg h-64 object-cover"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&q=80"
                  alt="Travel 4"
                  className="rounded-2xl shadow-lg h-64 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              data-aos="fade-up"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-orange-600 rounded-3xl opacity-10 group-hover:opacity-20 transition"></div>
              <div className="relative p-8 rounded-3xl border border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-orange-600 flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To inspire and enable people to explore the world's wonders through personalized, sustainable, and unforgettable travel experiences that enrich lives and create lasting connections.
                </p>
              </div>
            </motion.div>

            <motion.div
              data-aos="fade-up"
              data-aos-delay="100"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-purple-600 rounded-3xl opacity-10 group-hover:opacity-20 transition"></div>
              <div className="relative p-8 rounded-3xl border border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-500 to-purple-600 flex items-center justify-center mb-6">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the world's most trusted and innovative travel company, recognized for creating extraordinary journeys that transform perspectives and foster global understanding.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm mb-4">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Meet The <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate travel professionals dedicated to making your journey extraordinary
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Social Links */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition">
                        <i className="fab fa-linkedin text-white"></i>
                      </a>
                      <a href={member.social.twitter} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition">
                        <i className="fab fa-twitter text-white"></i>
                      </a>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonies', path: '/testimonies' },
    { name: 'News & Updates', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const ourServices = [
    { name: 'Flight Bookings', path: '/services/flights' },
    { name: 'Customized Tours', path: '/services/tours' },
    { name: 'Hotel Reservations', path: '/services/hotels' },
    { name: 'Travel Insurance', path: '/services/insurance' },
    { name: 'Vacation Packages', path: '/services/packages' },
    { name: 'Visa Procurement', path: '/services/visa' },
  ];

  const socialLinks = [
    { name: 'Facebook', Icon: FaFacebookF, url: 'https://www.facebook.com/61571631222763/?locale=en_GB' },
    { name: 'Instagram', Icon: FaInstagram, url: 'https://www.instagram.com/macwisetravels/' },
    { name: 'LinkedIn', Icon: FaLinkedinIn, url: 'https://ng.linkedin.com/in/mary-ani-08382a148' },
    
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-[#1a0d2e] to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#7B2CBF] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF8C42] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#9D4EDD] to-[#FF8C42] bg-clip-text text-transparent">
                Macwise
              </span>
              Travels
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Macwise Travels Ltd is a professional travel and visa consultancy
              firm headquartered in Abuja. We provide comprehensive travel
              management services, including visa advisory, flight reservations,
              and travel documentation for individuals, corporate organizations,
              and government clients.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ name, Icon, url }) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Follow us on ${name}`}
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-[#7B2CBF] to-[#FF8C42] flex items-center justify-center text-white shadow-md hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#FF8C42] transition flex items-center gap-2 group text-sm"
                  >
                    <span className="w-0 h-0.5 bg-[#FF8C42] group-hover:w-4 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {ourServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-[#9D4EDD] transition flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42] group-hover:bg-[#9D4EDD] group-hover:scale-150 transition-all"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] rounded-full"></span>
            </h4>
            <div className="space-y-4 mb-6">
              {/* Address */}
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <div className="w-10 h-10 rounded-lg bg-[#9D4EDD]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#9D4EDD]" />
                </div>
                <span className="pt-2">Abuja, Nigeria</span>
              </div>

              {/* Phone */}
              <a
                href="tel:+2348052676836"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FF8C42] transition group text-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF8C42]/10 flex items-center justify-center group-hover:bg-[#FF8C42]/20 transition-colors">
                  <Phone size={18} className="text-[#FF8C42]" />
                </div>
                08052676836
              </a>

              {/* Email */}
              <a
                href="mailto:macwisetravelsltd@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#9D4EDD] transition group text-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#7B2CBF]/10 flex items-center justify-center group-hover:bg-[#7B2CBF]/20 transition-colors">
                  <Mail size={18} className="text-[#9D4EDD]" />
                </div>
                <span className="break-all">macwisetravelsltd@gmail.com</span>
              </a>

              
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-gray-400 mb-3 text-sm font-medium">
                Subscribe to our newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#FF8C42] focus:bg-white/15 transition text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 rounded-lg bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                  aria-label="Subscribe"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="bg-gradient-to-r from-[#9D4EDD] to-[#FF8C42] bg-clip-text text-transparent font-semibold">
              MacwiseTravels
            </span>
            . All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-[#FF8C42] transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#FF8C42] transition">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-[#FF8C42] transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
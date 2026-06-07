import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import logo from "../assets/LOGO.png";

// Services dropdown items
const servicesDropdown = [
  { label: "Flight Bookings", path: "/services/flights" },
  { label: "Customized Tours", path: "/services/tours" },
  { label: "Hotel Reservations", path: "/services/hotels" },
  { label: "Travel Insurance", path: "/services/insurance" },
  { label: "Vacation Packages", path: "/services/packages" },
  { label: "Visa Procurement", path: "/services/visa" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Services", path: "/services", hasDropdown: true },
  { label: "Our Packages", path: "/packages" },
  { label: "Testimonies", path: "/testimonies" },
  { label: "Gallery", path: "/gallery" },
  { label: "News & Updates", path: "/news" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* ── TOP BAR ───────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#FF8C42] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 flex-wrap gap-2">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/macwisetravels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#FFD8A8] transition-colors"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://instagram.com/macwisetravels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#FFD8A8] transition-colors"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://twitter.com/macwisetravels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-[#FFD8A8] transition-colors"
              >
                <FaXTwitter size={14} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-4 md:gap-6 flex-wrap text-xs md:text-sm">
              <a
                href="tel:+2348052676836"
                className="flex items-center gap-2 hover:text-[#FFD8A8] transition-colors"
              >
                <Phone size={14} />
                <span className="font-medium">+234-805-267-6836</span>
              </a>
              <a
                href="https://wa.me/2348052676836"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 hover:text-[#FFD8A8] transition-colors"
              >
                <FaWhatsapp size={14} />
                <span className="font-medium">+234-805-267-6836</span>
              </a>
              <a
                href="mailto:macwisetravelsltd@gmail.com"
                className="hidden md:flex items-center gap-2 hover:text-[#FFD8A8] transition-colors"
              >
                <Mail size={14} />
                <span className="font-medium">macwisetravelsltd@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ───────────────────────────────────────────── */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-purple-900/10"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* ── Logo ─────────────────────────────────────────────── */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <img
                src={logo}
                alt="Macwise Travels Ltd."
                className="h-14 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* ── Desktop Links ────────────────────────────────────── */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
                >
                  {link.hasDropdown ? (
                    <button
                      className={`relative flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        isActive(link.path)
                          ? "text-[#FF6B1A]"
                          : "text-gray-800 hover:text-[#FF6B1A]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        isActive(link.path)
                          ? "text-[#FF6B1A]"
                          : "text-gray-800 hover:text-[#FF6B1A]"
                      }`}
                    >
                      {isActive(link.path) && (
                        <motion.span
                          layoutId="activeTab"
                          className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  )}

                  {/* ── Services Dropdown ─────────────────────────── */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-2xl shadow-purple-900/20 border border-[#E0AAFF]/30 overflow-hidden"
                        >
                          {/* Top accent bar */}
                          <div className="h-1 bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#FF8C42]"></div>
                          
                          <ul className="py-2">
                            {servicesDropdown.map((service, index) => (
                              <motion.li
                                key={service.path}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.03 }}
                              >
                                <Link
                                  to={service.path}
                                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#7B2CBF]/5 hover:to-[#FF8C42]/5 hover:text-[#7B2CBF] transition-all group/item"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42] group-hover/item:scale-150 transition-transform"></span>
                                  <span className="font-medium">{service.label}</span>
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            {/* ── Desktop CTA ──────────────────────────────────────── */}
            <div className="hidden lg:block">
              <Link
                to="/packages"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white text-sm font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Book Now
              </Link>
            </div>

            {/* ── Mobile Hamburger ─────────────────────────────────── */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg text-[#7B2CBF] hover:bg-[#E0AAFF]/20 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ───────────────────────────────────────────── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white/98 backdrop-blur-md border-t border-[#E0AAFF]/30 overflow-hidden shadow-lg"
            >
              <ul className="px-4 py-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                            isActive(link.path)
                              ? "bg-gradient-to-r from-[#E0AAFF]/40 to-[#FF8C42]/20 text-[#7B2CBF]"
                              : "text-gray-700 hover:text-[#7B2CBF] hover:bg-[#E0AAFF]/20"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Services Dropdown */}
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 mt-1 space-y-1"
                            >
                              {servicesDropdown.map((service) => (
                                <li key={service.path}>
                                  <Link
                                    to={service.path}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gradient-to-r hover:from-[#7B2CBF]/5 hover:to-[#FF8C42]/5 hover:text-[#7B2CBF] transition-all"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]"></span>
                                    {service.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                          isActive(link.path)
                            ? "bg-gradient-to-r from-[#E0AAFF]/40 to-[#FF8C42]/20 text-[#7B2CBF] border border-[#9D4EDD]/20"
                            : "text-gray-700 hover:text-[#7B2CBF] hover:bg-[#E0AAFF]/20"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-2"
                >
                  <Link
                    to="/packages"
                    className="flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#FF8C42] to-[#FF6B1A] text-white text-sm font-semibold shadow-lg shadow-orange-500/30"
                  >
                    Book Now
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";
import logo from "../assets/LOGO.png";

// ── Constants ──────────────────────────────────────────────────────────────
const NUMBER_1      = "07061625285";
const NUMBER_1_INTL = "2347061625285";
const NUMBER_2      = "08052676836";
const NUMBER_2_INTL = "2348052676836";

const WA_MSG =
  "Hello%20Macwise%20Travels!%20I'd%20like%20to%20make%20an%20inquiry.";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/61571631222763/?locale=en_GB",
    label: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/macwisetravels/",
    label: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://twitter.com/macwisetravels",
    label: "Twitter / X",
    Icon: FaXTwitter,
  },
  {
    href: "https://ng.linkedin.com/in/mary-ani-08382a148",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
];

const servicesDropdown = [
  { label: "Flight Bookings",    path: "/services/flights"   },
  { label: "Customized Tours",   path: "/services/tours"     },
  { label: "Hotel Reservations", path: "/services/hotels"    },
  { label: "Travel Insurance",   path: "/services/insurance" },
  { label: "Vacation Packages",  path: "/services/packages"  },
  { label: "Visa Procurement",   path: "/services/visa"      },
  { label: "Education",          path: "/services/education" },
  { label: "Logistics",          path: "/services/logistics" },
];

const navLinks = [
  { label: "Home",         path: "/"            },
  { label: "About",        path: "/about"       },
  { label: "Our Services", path: "/services", hasDropdown: true },
  { label: "Our Packages", path: "/packages"    },
  { label: "Testimonies",  path: "/testimonies" },
  { label: "Gallery",      path: "/gallery"     },
  { label: "News & Updates", path: "/news"      },
  { label: "Contact",      path: "/contact"     },
];

// ── Sub-components ─────────────────────────────────────────────────────────

const ActiveUnderline = () => (
  <motion.span
    layoutId="activeTab"
    className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r
               from-[#7B2CBF] to-[#FF8C42] rounded-full"
    transition={{ type: "spring", stiffness: 380, damping: 30 }}
  />
);

const SocialLink = ({ href, label, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="hover:text-[#FFD8A8] transition-colors"
  >
    <Icon size={14} />
  </a>
);

// ── Main Component ─────────────────────────────────────────────────────────
const Navbar = () => {
  const [isOpen,             setIsOpen]             = useState(false);
  const [scrolled,           setScrolled]           = useState(false);
  const [servicesOpen,       setServicesOpen]       = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const location    = useLocation();
  const dropdownRef = useRef(null);

  // ── Scroll listener ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close menus on route change ──────────────────────────────────────────
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [location]);

  // ── Close desktop dropdown on outside click ──────────────────────────────
  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // ── Close desktop dropdown on Escape ────────────────────────────────────
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setServicesOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* ── TOP BAR ────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#FF8C42]
                      text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 flex-wrap gap-2">

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <SocialLink key={label} href={href} label={label} Icon={Icon} />
              ))}
            </div>

            {/* ✅ Right-side wrapper groups phone + email together */}
            <div className="flex items-center gap-4">

              {/* 💬 WhatsApp — Both Numbers (hidden on xs) */}
              <div className="hidden sm:flex items-center gap-2">
                <Phone size={14} aria-hidden="true" />
                <FaWhatsapp size={14} aria-hidden="true" />
                <a
                  href={`https://wa.me/${NUMBER_1_INTL}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-[#FFD8A8] transition-colors"
                >
                  {NUMBER_1}
                </a>
                <span className="text-white/60" aria-hidden="true">|</span>
                <a
                  href={`https://wa.me/${NUMBER_2_INTL}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-[#FFD8A8] transition-colors"
                >
                  {NUMBER_2}
                </a>
              </div>

              {/* 📧 Email (hidden below md) */}
              <a
                href="mailto:macwisetravelsltd@gmail.com"
                className="hidden md:flex items-center gap-2
                           hover:text-[#FFD8A8] transition-colors"
                aria-label="Email us"
              >
                <Mail size={14} aria-hidden="true" />
                <span className="font-medium">macwisetravelsltd@gmail.com</span>
              </a>

            </div> {/* end right-side wrapper */}

          </div> {/* end justify-between */}
        </div>   {/* end max-w-7xl */}
      </div>     {/* end TOP BAR */}

      {/* ── MAIN NAV ───────────────────────────────────────────────────── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-purple-900/10"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Logo */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <img
                src={logo}
                alt="Macwise Travels Ltd. — Home"
                className="h-14 md:h-20 w-auto object-contain
                           group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* ── Desktop nav links ───────────────────────────────────── */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className="relative"
                  ref={link.hasDropdown ? dropdownRef : null}
                  onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen((prev) => !prev)}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        aria-controls="services-dropdown"
                        className={`relative flex items-center gap-1 px-3 py-2
                                    rounded-lg text-sm font-semibold
                                    transition-all duration-200 ${
                          isActive(link.path)
                            ? "text-[#FF6B1A]"
                            : "text-gray-800 hover:text-[#FF6B1A]"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            id="services-dropdown"
                            role="menu"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2
                                       mt-2 w-64 bg-white rounded-2xl shadow-2xl
                                       shadow-purple-900/20 border border-[#E0AAFF]/30
                                       overflow-hidden"
                          >
                            <div
                              aria-hidden="true"
                              className="h-1 bg-gradient-to-r from-[#7B2CBF]
                                         via-[#9D4EDD] to-[#FF8C42]"
                            />
                            <ul className="py-2" role="none">
                              {servicesDropdown.map((service, idx) => (
                                <motion.li
                                  key={service.path}
                                  role="none"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.03 }}
                                >
                                  <Link
                                    to={service.path}
                                    role="menuitem"
                                    className="flex items-center gap-3 px-4 py-3
                                               text-sm text-gray-700
                                               hover:bg-gradient-to-r
                                               hover:from-[#7B2CBF]/5
                                               hover:to-[#FF8C42]/5
                                               hover:text-[#7B2CBF]
                                               transition-all group/item"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]
                                                 group-hover/item:scale-150
                                                 transition-transform"
                                    />
                                    <span className="font-medium">
                                      {service.label}
                                    </span>
                                  </Link>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative px-3 py-2 rounded-lg text-sm
                                  font-semibold transition-all duration-200 ${
                        isActive(link.path)
                          ? "text-[#FF6B1A]"
                          : "text-gray-800 hover:text-[#FF6B1A]"
                      }`}
                    >
                      {isActive(link.path) && <ActiveUnderline />}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r
                           from-[#FF8C42] to-[#FF6B1A] text-white text-sm
                           font-semibold shadow-lg shadow-orange-500/30
                           hover:shadow-xl hover:shadow-orange-500/40
                           hover:scale-105 active:scale-95
                           transition-all duration-200"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg text-[#7B2CBF]
                         hover:bg-[#E0AAFF]/20 transition-all"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>

        {/* ── MOBILE MENU ─────────────────────────────────────────────── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white/98 backdrop-blur-md
                         border-t border-[#E0AAFF]/30 overflow-hidden shadow-lg"
            >
              <ul
                className="px-4 py-4 flex flex-col gap-1
                           max-h-[70vh] overflow-y-auto"
                role="list"
              >
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
                          onClick={() =>
                            setMobileServicesOpen((prev) => !prev)
                          }
                          aria-expanded={mobileServicesOpen}
                          aria-controls="mobile-services-list"
                          className={`w-full flex items-center justify-between
                                      px-4 py-3 rounded-xl text-sm font-semibold
                                      transition-all ${
                            isActive(link.path)
                              ? `bg-gradient-to-r from-[#E0AAFF]/40
                                 to-[#FF8C42]/20 text-[#7B2CBF]`
                              : `text-gray-700 hover:text-[#7B2CBF]
                                 hover:bg-[#E0AAFF]/20`
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            size={18}
                            aria-hidden="true"
                            className={`transition-transform duration-200 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.ul
                              id="mobile-services-list"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 mt-1 space-y-1"
                              role="list"
                            >
                              {servicesDropdown.map((service) => (
                                <li key={service.path}>
                                  <Link
                                    to={service.path}
                                    className="flex items-center gap-3 px-4 py-2.5
                                               rounded-lg text-sm text-gray-600
                                               hover:bg-gradient-to-r
                                               hover:from-[#7B2CBF]/5
                                               hover:to-[#FF8C42]/5
                                               hover:text-[#7B2CBF] transition-all"
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="w-1.5 h-1.5 rounded-full
                                                 bg-[#FF8C42]"
                                    />
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
                        className={`flex items-center px-4 py-3 rounded-xl
                                    text-sm font-semibold transition-all ${
                          isActive(link.path)
                            ? `bg-gradient-to-r from-[#E0AAFF]/40
                               to-[#FF8C42]/20 text-[#7B2CBF]
                               border border-[#9D4EDD]/20`
                            : `text-gray-700 hover:text-[#7B2CBF]
                               hover:bg-[#E0AAFF]/20`
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.li>
                ))}

                {/* Book Now — mobile */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-2"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center px-4 py-3
                               rounded-xl bg-gradient-to-r from-[#FF8C42]
                               to-[#FF6B1A] text-white text-sm font-semibold
                               shadow-lg shadow-orange-500/30"
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
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Your WhatsApp details
  const phoneNumber = '2348052676836'; // No + or spaces
  const defaultMessage = 'Hello Macwise Travels! 👋 I would like to inquire about your travel services.';

  // Show tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Auto-hide after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = (message = defaultMessage) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ── Chat Popup ───────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <FaWhatsapp className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-white font-bold">Macwise Travels</h3>
                  <p className="text-white/90 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-[#ECE5DD]/30">
              <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm mb-3 max-w-[85%]">
                <p className="text-sm text-gray-700">
                  👋 Hi there! Welcome to{' '}
                  <span className="font-bold text-[#7B2CBF]">Macwise Travels</span>.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  How can we help plan your next adventure?
                </p>
                <span className="text-[10px] text-gray-400 mt-1 block">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>

              {/* Quick Reply Options */}
              <div className="space-y-2">
                <button
                  onClick={() =>
                    handleWhatsAppClick('Hello! I want to book a flight. Can you help?')
                  }
                  className="w-full text-left bg-white hover:bg-[#7B2CBF]/5 border border-gray-200 hover:border-[#7B2CBF]/30 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition-all"
                >
                  ✈️ I want to book a flight
                </button>
                <button
                  onClick={() =>
                    handleWhatsAppClick('Hello! I am interested in your vacation packages.')
                  }
                  className="w-full text-left bg-white hover:bg-[#7B2CBF]/5 border border-gray-200 hover:border-[#7B2CBF]/30 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition-all"
                >
                  🌴 Vacation packages info
                </button>
                <button
                  onClick={() =>
                    handleWhatsAppClick('Hello! I need help with visa procurement.')
                  }
                  className="w-full text-left bg-white hover:bg-[#7B2CBF]/5 border border-gray-200 hover:border-[#7B2CBF]/30 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition-all"
                >
                  📄 Visa assistance
                </button>
                <button
                  onClick={() => handleWhatsAppClick(defaultMessage)}
                  className="w-full text-left bg-white hover:bg-[#7B2CBF]/5 border border-gray-200 hover:border-[#7B2CBF]/30 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition-all"
                >
                  💬 Other inquiries
                </button>
              </div>
            </div>

            {/* Footer Button */}
            <div className="p-4 bg-white border-t border-gray-100">
              <button
                onClick={() => handleWhatsAppClick(defaultMessage)}
                className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={20} />
                Start Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Tooltip ──────────────────────────────────────────── */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white rounded-2xl rounded-br-none shadow-xl px-4 py-3 mr-2 max-w-[200px] relative border border-gray-100"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close tooltip"
            >
              <X size={10} className="text-gray-600" />
            </button>
            <p className="text-sm text-gray-700 font-medium">
              👋 Need help? Chat with us on WhatsApp!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Button ──────────────────────────────────── */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        className="relative bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-green-500/50 flex items-center justify-center group transition-all"
        aria-label="Open WhatsApp chat"
      >
        {/* Pulse Rings */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-pulse"></span>
          </>
        )}

        {/* Icon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <FaWhatsapp size={32} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white"
          >
            1
          </motion.span>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
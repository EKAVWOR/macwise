import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, Tag, User, X } from 'lucide-react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const News = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  // ✅ Online hero background image
  const heroBg =

  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80";

  const newsItems = [
    {
      id: 1,
      title: 'Hassle-Free Visa Procurement with Macwise Travels Limited',
      excerpt:
        'Discover how our expert team handles your visa procurement with precision and care, ensuring smooth approvals.',
      content:
        'At Macwise Travels Limited, we take the stress out of visa applications. From document review to embassy submission, our experienced consultants guide you through every step. We specialize in visa procurement for the UK, US, Canada, Schengen countries, China, and many more. With a high approval rate and personalized service, your travel dreams are in safe hands. Our team stays updated with the latest immigration policies, ensuring your application is always compliant and competitive.',
      image:
        'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&q=80',
      category: 'Visa Services',
      date: 'February 7, 2025',
      readTime: '5 min read',
      author: 'Mary Chinasa Ani',
      tag: 'Featured',
      gradient: 'from-[#7B2CBF] to-[#9D4EDD]',
    },
    {
      id: 2,
      title: 'Seamless Flight Booking with Macwise Travels Limited',
      excerpt:
        'Book your flights effortlessly with the best deals on international and domestic routes worldwide.',
      content:
        'Our flight booking service is designed to give you the best deals on international and domestic routes. Whether you are flying for business or leisure, we partner with top airlines to offer competitive prices and flexible schedules. Enjoy 24/7 support, easy rebooking options, and travel insurance recommendations. From economy to first class, we tailor every booking to your preferences and budget.',
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      category: 'Flight Booking',
      date: 'February 7, 2025',
      readTime: '4 min read',
      author: 'Macwise Team',
      tag: 'Popular',
      gradient: 'from-[#FF8C42] to-[#FF6B1A]',
    },
    {
      id: 3,
      title: 'Top 10 Travel Destinations to Visit in 2025',
      excerpt:
        'Discover the most exciting and breathtaking travel destinations to explore this year for unforgettable memories.',
      content:
        'From the cherry blossoms of Japan to the safaris of Kenya, 2025 promises unforgettable travel experiences. Our travel experts have curated a list of must-visit destinations including Bali, Dubai, Santorini, Paris, and more. Each destination offers a unique blend of culture, adventure, and relaxation. Let us help you plan the perfect itinerary for your dream vacation.',
      image:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      category: 'Travel Tips',
      date: 'January 25, 2025',
      readTime: '7 min read',
      author: 'Travel Expert',
      tag: 'New',
      gradient: 'from-[#9D4EDD] to-[#FF8C42]',
    },
    {
      id: 4,
      title: 'How to Avoid Visa Rejections: Expert Tips',
      excerpt:
        'Learn the most common reasons for visa rejections and how to strengthen your application for guaranteed approval.',
      content:
        'Visa rejections can be frustrating and costly. In this guide, we share insider tips from our visa experts on how to avoid common mistakes. Learn about proper documentation, financial proof requirements, interview preparation, and how to demonstrate strong ties to your home country. With over 9 years of experience, Macwise Travels has helped clients overcome multiple rejections and secure their visas successfully.',
      image:
        'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80',
      category: 'Visa Services',
      date: 'January 18, 2025',
      readTime: '6 min read',
      author: 'Mary Chinasa Ani',
      tag: 'Featured',
      gradient: 'from-[#7B2CBF] to-[#FF6B1A]',
    },
    {
      id: 5,
      title: 'Luxury Hotel Bookings at Unbeatable Prices',
      excerpt:
        'Stay in world-class hotels without breaking the bank. We offer exclusive deals on luxury accommodations.',
      content:
        'Our partnerships with leading hotel chains worldwide allow us to offer exclusive rates on luxury accommodations. Whether you prefer beachfront resorts, city center hotels, or boutique stays, we have the perfect match for you. Enjoy added perks like room upgrades, late check-out, and complimentary breakfast through our preferred partner program.',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      category: 'Hotel Booking',
      date: 'January 10, 2025',
      readTime: '4 min read',
      author: 'Macwise Team',
      tag: 'Hot Deal',
      gradient: 'from-[#FF8C42] to-[#FF6B1A]',
    },
    {
      id: 6,
      title: 'Study Abroad: Your Complete Guide to Success',
      excerpt:
        'Everything you need to know about studying abroad — from choosing the right country to securing your student visa.',
      content:
        'Studying abroad opens doors to world-class education and global opportunities. Our team specializes in helping students navigate the entire process — from university applications to student visa procurement. We provide guidance on top study destinations like UK, USA, Canada, Australia, and Germany. Learn about scholarships, accommodation, and post-study work opportunities.',
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
      category: 'Education',
      date: 'December 28, 2024',
      readTime: '8 min read',
      author: 'Education Counselor',
      tag: 'New',
      gradient: 'from-[#7B2CBF] to-[#9D4EDD]',
    },
  ];

  const categories = [
    'All',
    'Visa Services',
    'Flight Booking',
    'Hotel Booking',
    'Travel Tips',
    'Education',
  ];

  const filtered = newsItems.filter((post) => {
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filtered[0];
  const otherPosts = filtered.slice(1);

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.style.background =
      'linear-gradient(135deg, #7B2CBF 0%, #FF8C42 100%)';
  };

  return (
    <div>
      <Navbar />

      {/* ✅ Hero Banner — Online Background Image */}
      <div
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="mt-[50px] relative"
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-[10%] text-[50px] font-bold text-white"
          >
            News & Updates
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center pt-[30px] text-[25px] text-white pb-[10%]"
          >
            Home / News & Updates
          </motion.p>
        </div>
      </div>

      {/* ✅ News Section with BLURRED online background */}
      <div className="relative py-20 px-4 min-h-screen overflow-hidden">
        {/* Blurred Background Layer */}
        <div
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'blur(8px)',
            transform: 'scale(1.1)',
          }}
          className="absolute inset-0 z-0"
        />

        {/* Tint overlay for readability */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,97,55,0.08) 50%, rgba(255,255,255,0.95) 100%)',
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm
             tracking-[0.3em] uppercase mb-4">
              ★ Latest News ★
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stay{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Informed
              </span>{' '}
              with Us
            </h2>
            <p className="text-gray-700 text-lg">
              Get the latest travel news, visa updates, expert tips, and
              exclusive deals delivered straight to you.
            </p>
          </motion.div>

          {/* Search + Filter Bar */}
          <div className="max-w-7xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative max-w-xl mx-auto mb-8"
            >
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2
                 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white
                 border-2 border-gray-200 focus:border-purple-400
                  focus:outline-none shadow-lg text-gray-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm
                   transition-all duration-300 border-2 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42] text-white border-transparent shadow-lg scale-105'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-purple-400 hover:text-purple-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-gray-500 text-xl max-w-3xl
               mx-auto bg-white/80 rounded-2xl"
            >
              No articles found. Try a different search or category.
            </motion.div>
          )}

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-7xl mx-auto mb-12"
            >
              <div className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl
               shadow-xl overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden h-64 md:h-auto group
                 bg-gradient-to-br from-[#7B2CBF] to-[#FF8C42]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform
                     duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-gradient-to-r
                   from-[#7B2CBF] to-[#FF8C42] text-white text-xs font-bold
                    px-4 py-1.5 rounded-full shadow-lg z-10">
                    ⭐ {featuredPost.tag}
                  </span>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 mb-4
                   text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Tag size={14} className="text-purple-500" />
                      <span className="font-semibold text-purple-600">
                        {featuredPost.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900
                   mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm
                     text-gray-500">
                      <User size={16} className="text-orange-500" />
                      <span>{featuredPost.author}</span>
                    </div>

                    <motion.button
                      onClick={() => setSelectedPost(featuredPost)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3
                       rounded-full bg-gradient-to-r from-[#7B2CBF]
                        to-[#FF8C42] text-white font-bold shadow-lg
                         hover:shadow-purple-500/40 transition-all"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* News Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
             gap-8">
              <AnimatePresence>
                {otherPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden
                     border border-gray-100 hover:shadow-2xl transition-all
                      group flex flex-col"
                  >
                    <div className="relative h-52 overflow-hidden
                     bg-gradient-to-br from-[#7B2CBF] to-[#FF8C42]">
                      <img
                        src={post.image}
                        alt={post.title}
                        onError={handleImageError}
                        className="w-full h-full object-cover
                         transition-transform duration-500
                          group-hover:scale-110"
                      />
                      <span
                        className={`absolute top-3 left-3 bg-gradient-to-r
                         ${post.gradient} text-white text-xs font-bold
                          px-3 py-1 rounded-full shadow-md z-10`}
                      >
                        {post.tag}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3
                       text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </div>
                      </div>

                      <span className="inline-block text-purple-600
                       font-semibold text-xs mb-2 uppercase tracking-wider">
                        {post.category}
                      </span>

                      <h3 className="text-xl font-bold text-gray-900 mb-3
                       leading-tight group-hover:text-purple-700
                        transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-5
                       leading-relaxed flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4
                       border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs
                         text-gray-500">
                          <div
                            className={`w-7 h-7 rounded-full
                             bg-gradient-to-br ${post.gradient}
                              flex items-center justify-center text-white
                               font-bold text-xs`}
                          >
                            {post.author.charAt(0)}
                          </div>
                          <span>{post.author}</span>
                        </div>

                        <button
                          onClick={() => setSelectedPost(post)}
                          className="inline-flex items-center gap-1
                           text-orange-500 hover:text-orange-700 font-bold
                            text-sm uppercase tracking-wider
                             transition-colors"
                        >
                          Read More
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto mt-20 bg-gradient-to-br from-[#7B2CBF]
             to-[#FF8C42] rounded-3xl p-10 md:p-14 text-center shadow-2xl
              relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10
             rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10
             rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                📬 Subscribe to Our Newsletter
              </h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                Get the latest travel news, visa updates, and exclusive deals
                straight to your inbox.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thanks for subscribing!');
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full text-gray-700
                   focus:outline-none focus:ring-4 focus:ring-white/30
                    bg-white shadow-lg"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-3 rounded-full bg-white text-purple-700
                   font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center
             justify-center p-4 overflow-y-auto"
            onClick={(e) =>
              e.target === e.currentTarget && setSelectedPost(null)
            }
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh]
               overflow-y-auto relative shadow-2xl my-8"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full
                 bg-white/90 hover:bg-white border border-gray-200
                  flex items-center justify-center shadow-lg transition-all"
              >
                <X size={20} className="text-gray-700" />
              </button>

              <div className="relative h-64 md:h-80 overflow-hidden
               rounded-t-3xl bg-gradient-to-br from-[#7B2CBF] to-[#FF8C42]">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t
                 from-black/60 to-transparent" />
                <span
                  className={`absolute bottom-4 left-4 bg-gradient-to-r
                   ${selectedPost.gradient} text-white text-xs font-bold
                    px-4 py-1.5 rounded-full shadow-md z-10`}
                >
                  {selectedPost.tag}
                </span>
              </div>

              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-4 mb-4
                 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Tag size={14} className="text-purple-500" />
                    <span className="font-semibold text-purple-600">
                      {selectedPost.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {selectedPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {selectedPost.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} className="text-orange-500" />
                    {selectedPost.author}
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900
                 mb-6 leading-tight">
                  {selectedPost.title}
                </h2>

                <p className="text-gray-700 leading-relaxed text-base
                 md:text-lg mb-6">
                  {selectedPost.content}
                </p>

                <div className="border-t border-gray-100 pt-6 flex
                 items-center justify-between">
                  <p className="text-gray-500 text-sm">
                    Need help? Contact us today.
                  </p>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3
                     rounded-full bg-gradient-to-r from-[#7B2CBF]
                      to-[#FF8C42] text-white font-bold shadow-lg
                       hover:shadow-purple-500/40 transition-all"
                  >
                    Get In Touch
                    <ArrowRight size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default News;
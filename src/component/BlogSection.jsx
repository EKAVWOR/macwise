import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  Tag,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: '10 Hidden Gems in Southeast Asia',
      excerpt:
        'Discover the most beautiful and lesser-known destinations that will take your breath away on your next adventure.',
      content:
        'Southeast Asia is more than just Bali and Bangkok. From the secluded beaches of Palawan in the Philippines to the ancient temples of Bagan in Myanmar, this region is packed with hidden gems waiting to be explored. Discover the karst landscapes of Phong Nha, the rice terraces of Sapa, and the floating villages of Tonle Sap. Our guide takes you off the beaten path to experience the authentic beauty of Southeast Asia like never before.',
      image:
        'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
      author: 'Emma Wilson',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      category: 'Travel Tips',
      tag: 'Trending',
      gradient: 'from-[#7B2CBF] to-[#9D4EDD]',
    },
    {
      id: 2,
      title: 'Ultimate Guide to European Rail Travel',
      excerpt:
        'Everything you need to know about exploring Europe by train, from passes to secret routes and tips.',
      content:
        'Europe by rail is one of the most romantic and efficient ways to travel. With the Eurail Pass, you can hop between countries seamlessly, enjoying breathtaking views from the comfort of your seat. Learn about the best routes — from the Glacier Express in Switzerland to the Bernina Express through the Alps. We cover everything from booking tips, seat reservations, luggage rules, and the most scenic journeys you should never miss.',
      image:
        'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
      author: 'James Cooper',
      date: 'Dec 12, 2024',
      readTime: '12 min read',
      category: 'Guides',
      tag: 'Featured',
      gradient: 'from-[#FF8C42] to-[#FF6B1A]',
    },
    {
      id: 3,
      title: 'Sustainable Travel: Reduce Your Carbon Footprint',
      excerpt:
        'Learn practical ways to travel responsibly while still having amazing adventures around the globe.',
      content:
        'Sustainable travel is no longer optional — it is essential. Discover how to choose eco-friendly accommodations, support local communities, and minimize your environmental impact. From carbon offset programs to packing reusables, slow travel, and choosing trains over flights, this guide empowers you to explore the world responsibly. Small changes make a huge difference for our planet.',
      image:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
      author: 'Sarah Green',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      category: 'Eco Travel',
      tag: 'New',
      gradient: 'from-[#9D4EDD] to-[#FF8C42]',
    },
  ];

  // Image fallback to gradient
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.style.background =
      'linear-gradient(135deg, #7B2CBF 0%, #FF8C42 100%)';
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#FFF5EE] to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B2CBF] rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF8C42] rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#FF6B1A] font-bold text-sm
             tracking-[0.3em] uppercase mb-4">
              ★ Our Blog ★
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4
             text-gray-900">
              Travel{' '}
              <span className="bg-gradient-to-r from-[#7B2CBF] to-[#FF8C42]
               bg-clip-text text-transparent">
                Stories & Tips
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Get inspired with travel guides, tips, and stories from around
              the world
            </p>
          </motion.div>

          <Link to="/blog" className="mt-6 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#7B2CBF]
               to-[#FF8C42] text-white font-bold shadow-xl
                hover:shadow-purple-500/40 transition-all flex items-center
                 gap-2"
            >
              View All Posts
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg
               hover:shadow-2xl transition-all duration-500 border
                border-gray-100 flex flex-col h-full">
                {/* Image */}
                <div
                  className="relative h-56 overflow-hidden bg-gradient-to-br
                   from-[#7B2CBF] to-[#FF8C42]"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform
                     duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t
                   from-black/60 to-transparent" />

                  {/* Category Badge */}
                  <span
                    className={`absolute top-4 left-4 bg-gradient-to-r
                     ${post.gradient} text-white text-xs font-bold px-4 py-1.5
                      rounded-full shadow-md z-10`}
                  >
                    ⭐ {post.tag}
                  </span>

                  {/* Category at bottom */}
                  <span className="absolute bottom-4 left-4 text-white
                   text-sm font-semibold flex items-center gap-1 z-10">
                    <Tag size={14} />
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3
                   leading-tight group-hover:text-purple-700
                    transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-5 leading-relaxed
                   line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-xs
                   text-gray-500 mb-5">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Footer — Author & Read More */}
                  <div className="flex items-center justify-between pt-4
                   border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br
                         ${post.gradient} flex items-center justify-center
                          text-white font-bold text-xs shadow-md`}
                      >
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs text-gray-600 font-medium">
                        {post.author}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedPost(post)}
                      className="inline-flex items-center gap-1 text-orange-500
                       hover:text-orange-700 font-bold text-sm uppercase
                        tracking-wider transition-colors"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal — Full Article View */}
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
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full
                 bg-white/90 hover:bg-white border border-gray-200
                  flex items-center justify-center shadow-lg transition-all"
              >
                <X size={20} className="text-gray-700" />
              </button>

              {/* Header Image */}
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

              {/* Content */}
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
                    Inspired? Plan your trip with us.
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
    </section>
  );
};

export default BlogSection;
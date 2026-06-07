import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: '10 Hidden Gems in Southeast Asia',
      excerpt: 'Discover the most beautiful and lesser-known destinations that will take your breath away...',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
      author: 'Emma Wilson',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      category: 'Travel Tips',
      gradient: 'from-primary-500 to-orange-600'
    },
    {
      id: 2,
      title: 'Ultimate Guide to European Rail Travel',
      excerpt: 'Everything you need to know about exploring Europe by train, from passes to secret routes...',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
      author: 'James Cooper',
      date: 'Dec 12, 2024',
      readTime: '12 min read',
      category: 'Guides',
      gradient: 'from-secondary-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Sustainable Travel: How to Reduce Your Carbon Footprint',
      excerpt: 'Learn practical ways to travel responsibly while still having amazing adventures...',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
      author: 'Sarah Green',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      category: 'Eco Travel',
      gradient: 'from-green-500 to-teal-600'
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12" data-aos="fade-up">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold text-sm mb-4">
              Our Blog
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Travel <span className="gradient-text">Stories & Tips</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Get inspired with travel guides, tips, and stories from around the world
            </p>
          </div>
          <Link to="/blog" className="mt-6 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full border-2 border-gray-300 hover:border-transparent hover:gradient-bg hover:text-white font-semibold transition-all flex items-center gap-2"
            >
              View All Posts
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white text-sm font-semibold`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-4 transition-all">
                      Read More
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
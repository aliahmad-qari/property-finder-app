import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Calendar, User, MessageCircle } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  views: number;
  description: string;
  image: string;
  slug: string;
}

const BlogPage: React.FC = () => {
  useSEO({
    title: 'Blog - EstateFlow',
    description: 'Read our latest articles about real estate trends, home buying tips, and market insights.',
  });

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '10 Tips for First-Time Home Buyers',
      category: 'Buying Guide',
      date: 'Oct 10, 2026',
      author: 'Sarah Anderson',
      views: 3240,
      description: 'Buying your first home can be overwhelming. Here are essential tips to navigate the process with confidence and avoid common pitfalls.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      slug: 'first-time-buyers-tips'
    },
    {
      id: '2',
      title: 'Market Trends for Q4 2026',
      category: 'Market Analysis',
      date: 'Oct 5, 2026',
      author: 'Michael Chen',
      views: 2890,
      description: 'What to expect in the real estate market this quarter and how emerging trends could affect your investment decisions.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      slug: 'market-trends-2026'
    },
    {
      id: '3',
      title: 'Home Renovation ROI: Best Projects',
      category: 'Renovation',
      date: 'Sep 28, 2026',
      author: 'Emma Thompson',
      views: 4120,
      description: 'Discover which home improvements give you the best return on investment when selling your property this season.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
      slug: 'renovation-roi'
    },
    {
      id: '4',
      title: 'Investment Properties: A Beginner\'s Guide',
      category: 'Investment',
      date: 'Sep 15, 2026',
      author: 'David Kumar',
      views: 5640,
      description: 'Learn how to identify promising investment properties and build a profitable real estate portfolio from scratch.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      slug: 'investment-guide'
    },
    {
      id: '5',
      title: 'Virtual Tours vs. In-Person Viewings',
      category: 'Technology',
      date: 'Sep 8, 2026',
      author: 'Lisa Wong',
      views: 2150,
      description: 'Explore the advantages and disadvantages of both virtual property tours and traditional in-person viewings.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop',
      slug: 'virtual-tours'
    },
    {
      id: '6',
      title: 'Financing Your Dream Home in 2026',
      category: 'Finance',
      date: 'Aug 25, 2026',
      author: 'Robert Pierce',
      views: 6820,
      description: 'Complete guide to mortgage options, interest rates, and financial strategies for successful home purchase planning.',
      image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=400&fit=crop',
      slug: 'home-financing'
    },
  ];

  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-[#ec4613] py-32">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h1 className="font-fraunces text-6xl text-[#F9FAFB] mb-6 leading-tight">
            Real Estate Insights & Trends
          </h1>
          <p className="font-manrope text-xl text-[#F9FAFB]/90 max-w-2xl mx-auto mb-8">
            Explore expert insights, market trends, and home ownership tips from our team of experienced real estate professionals.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/properties"
              className="bg-white text-primary font-manrope font-bold px-8 py-3 rounded-xl hover:shadow-lg transition-all"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-8">
          {/* Category Tags */}
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {['All', 'Buying Guide', 'Market Analysis', 'Investment', 'Finance', 'Technology'].map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-full font-syne text-sm font-bold bg-white border-2 border-transparent hover:border-primary hover:text-primary transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-xs text-[#4B5563] mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-syne font-bold text-lg text-[#111827] mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="font-manrope text-sm text-[#4B5563] mb-6 line-clamp-2">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-manrope font-semibold text-primary hover:gap-4 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* View Count */}
                  <div className="mt-4 pt-4 border-t border-[#E6E0DA] text-xs text-[#4B5563]">
                    <MessageCircle className="w-3 h-3 inline mr-1" /> {post.views.toLocaleString()} reads
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="bg-primary text-white font-manrope font-bold px-10 py-4 rounded-xl hover:bg-[#C05621] transition-all shadow-lg hover:shadow-xl">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-primary to-[#ec4613] py-24">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="font-fraunces text-4xl text-[#F9FAFB] mb-4">Stay Updated</h2>
          <p className="font-manrope text-[#F9FAFB]/90 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to get the latest insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg flex-1 font-manrope focus:outline-none"
            />
            <button className="bg-white text-primary font-manrope font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;
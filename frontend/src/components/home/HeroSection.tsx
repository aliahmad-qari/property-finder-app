import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Bath, MapPin, Search, Zap, Shield, Clock } from 'lucide-react';
import happyHomeowner1 from '../../images/Happy Homeowners_1.jpg';
import happyHomeowner2 from '../../images/Happy Homeowners_2.jpg';
import happyHomeowner3 from '../../images/Team section.jpg';
import rightFeatureCard from '../../images/Right side feature card.jpg';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');

  const propertyImages = [
    happyHomeowner1,
    happyHomeowner2,
    happyHomeowner3,
    rightFeatureCard, 
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Fast Search',
      description: 'Find properties in seconds'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Verified Listings',
      description: 'All properties screened'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: '24/7 Support',
      description: 'Always here to help'
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#F8F6F6] via-[#FAF8F4] to-[#FAF8F4] pt-24 pb-16 lg:pb-32 overflow-hidden">
      {/* Background decorative blurs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute -right-32 top-0 w-96 h-96 bg-[rgba(212,117,91,0.15)] rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0], 
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 10,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute -left-32 bottom-0 w-96 h-96 bg-[rgba(212,117,91,0.1)] rounded-full blur-3xl" 
      />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-start"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-transparent border border-primary/30 rounded-full px-4 py-2 mb-8 w-fit"
            >
              <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
              <span className="font-syne font-bold text-sm text-primary uppercase tracking-widest">
                #1 Real Estate Platform
              </span>
            </motion.div>
 
            {/* Heading */}
            <motion.h1 
              variants={itemVariants} 
              className="font-fraunces text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-[#111827] mb-6 lg:mb-8"
            >
              Find Your<br />
              <span className="italic bg-gradient-to-r from-primary to-[#ec4613] bg-clip-text text-transparent">
                Perfect Home
              </span>
            </motion.h1>
 
            {/* Description */}
            <motion.p 
              variants={itemVariants} 
              className="font-manrope text-lg lg:text-xl leading-8 text-[#4B5563] mb-10 max-w-2xl"
            >
              Explore thousands of verified properties with our advanced search tools. Find your dream home faster than ever before.
            </motion.p>

            {/* Search & Filter Section */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="bg-white rounded-2xl shadow-xl border border-[#E6E0DA] overflow-hidden p-1">
                <div className="flex flex-col sm:flex-row gap-3 p-4">
                  {/* Location Input */}
                  <div className="flex-1 flex items-center gap-3 bg-[#FAF8F4] rounded-xl px-4 py-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Enter location or neighborhood"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent outline-none font-manrope text-[#111827] placeholder-[#9CA3AF] flex-1"
                    />
                  </div>

                  {/* Property Type */}
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="px-4 py-3 bg-[#FAF8F4] rounded-xl font-manrope text-[#4B5563] outline-none border-0 cursor-pointer"
                  >
                    <option value="all">All Types</option>
                    <option value="apartment">Apartments</option>
                    <option value="house">Houses</option>
                    <option value="villa">Villas</option>
                    <option value="commercial">Commercial</option>
                  </select>

                  {/* Search Button */}
                  <Link 
                    to="/properties" 
                    className="bg-primary text-white font-manrope font-bold px-6 py-3 rounded-xl hover:bg-[#C05621] transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Search className="w-5 h-5" />
                    Search
                  </Link>
                </div>
              </div>
            </motion.div>
 
            {/* Primary CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
              <Link 
                to="/properties" 
                className="bg-primary text-white font-manrope font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-[#C05621] transition-all hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                Browse Properties
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-primary text-primary font-manrope font-bold text-lg px-8 py-4 rounded-xl hover:bg-primary/5 transition-all inline-flex items-center justify-center gap-2">
                Schedule Demo
              </button>
            </motion.div>
 
            {/* Social Proof */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src={propertyImages[0]} alt="" className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-md" />
                  <img src={propertyImages[1]} alt="" className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-md" />
                  <img src={propertyImages[2]} alt="" className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-md" />
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#ec4613] rounded-full border-3 border-white flex items-center justify-center shadow-md">
                    <span className="font-manrope font-bold text-xs text-white">+5k</span>
                  </div>
                </div>
                <div>
                  <p className="font-syne font-bold text-[#111827]">5,000+ Happy Clients</p>
                  <p className="font-manrope text-sm text-[#4B5563]">Trusted by homeowners nationwide</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="font-syne font-bold text-xs text-[#111827]">{feature.title}</p>
                      <p className="font-manrope text-xs text-[#4B5563]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
 
          {/* Right - Featured Property Card */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            {/* Floating Card Background */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative w-full max-w-sm">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="relative h-[500px] sm:h-[600px]">
                  <img
                    src={propertyImages[3]}
                    alt="Featured Property"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Featured Badge */}
                  <div className="absolute top-6 right-6 bg-white rounded-full px-4 py-2 shadow-lg">
                    <span className="font-syne font-bold text-sm text-primary">FEATURED</span>
                  </div>

                  {/* Property Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/95 border border-white/30 rounded-2xl p-5 shadow-2xl">
                    <div className="mb-4">
                      <h3 className="font-fraunces font-bold text-xl text-[#111827] mb-1">Villa Serenity</h3>
                      <div className="flex items-center gap-2 text-[#4B5563]">
                        <MapPin className="w-4 h-4" />
                        <p className="font-manrope text-sm">Beverly Hills, CA</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-[#E6E0DA] pt-4">
                      <p className="font-space-mono text-2xl font-bold text-primary mb-3">
                        $4,250,000
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Home className="w-4 h-4 text-primary" />
                            <span className="font-manrope font-bold text-[#111827]">4 Beds</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Bath className="w-4 h-4 text-primary" />
                            <span className="font-manrope font-bold text-[#111827]">3.5 Baths</span>
                          </div>
                        </div>
                        <Link 
                          to="/properties" 
                          className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-[#C05621] transition-all"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-xl border-4 border-white"
              >
                <div className="text-center">
                  <p className="font-fraunces text-2xl font-bold text-primary">98%</p>
                  <p className="font-manrope text-xs text-[#4B5563]">Satisfaction Rate</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

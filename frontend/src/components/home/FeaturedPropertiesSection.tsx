import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Home, Bath, Star, Zap } from 'lucide-react';

interface FeaturedProperty {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  rating: number;
  reviews: number;
  badge?: string;
  features?: string[];
}

const FeaturedPropertiesSection: React.FC = () => {
  const featuredProperties: FeaturedProperty[] = [
    {
      id: '1',
      title: 'Luxury Modern Villa',
      location: 'Beverly Hills, CA',
      price: '$4,250,000',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=500&fit=crop',
      beds: 5,
      baths: 4,
      rating: 4.9,
      reviews: 128,
      badge: 'MOST POPULAR',
      features: ['Smart Home', 'Pool', 'Gym']
    },
    {
      id: '2',
      title: 'Contemporary Penthouse',
      location: 'Manhattan, New York',
      price: '$5,850,000',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=500&fit=crop',
      beds: 4,
      baths: 3,
      rating: 4.8,
      reviews: 96,
      badge: 'LUXURY',
      features: ['City View', 'Rooftop', 'Premium']
    },
    {
      id: '3',
      title: 'Mediterranean Estate',
      location: 'Miami Beach, Florida',
      price: '$3,500,000',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=500&fit=crop',
      beds: 6,
      baths: 5,
      rating: 4.9,
      reviews: 142,
      badge: 'NEW LISTING',
      features: ['Beach Access', 'Garden', 'Spa']
    },
    {
      id: '4',
      title: 'Modern Lakefront Home',
      location: 'Lake Tahoe, Nevada',
      price: '$2,950,000',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=500&fit=crop',
      beds: 4,
      baths: 3.5,
      rating: 4.7,
      reviews: 84,
      features: ['Lake View', 'Deck', 'Hot Tub']
    }
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

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#FAF8F4] via-white to-[#FAF8F4] overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Premium Selection</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="font-fraunces text-5xl lg:text-6xl text-[#111827] mb-6 leading-tight">
            Featured Properties
          </motion.h2>
          <motion.p variants={itemVariants} className="font-manrope text-lg text-[#4B5563] max-w-2xl mx-auto mb-8">
            Explore our handpicked selection of premium properties across the most sought-after locations.
          </motion.p>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-primary to-[#ec4613] mx-auto" />
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {featuredProperties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <Link to={`/property/${property.id}`} className="block h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Badge */}
                    {property.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                          {property.badge}
                        </span>
                      </div>
                    )}

                    {/* Quick Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                        <p className="font-manrope text-xs text-[#111827] font-bold">View Details</p>
                      </div>
                      <div className="bg-primary text-white rounded-full p-2 hover:scale-110 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Price */}
                    <p className="font-space-mono font-bold text-2xl text-primary mb-2">
                      {property.price}
                    </p>

                    {/* Title */}
                    <h3 className="font-syne font-bold text-lg text-[#111827] mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 mb-4 text-[#4B5563]">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-manrope text-sm">{property.location}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#E6E0DA]">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-manrope font-bold text-sm text-[#111827]">{property.rating}</span>
                      </div>
                      <span className="font-manrope text-xs text-[#4B5563]">({property.reviews} reviews)</span>
                    </div>

                    {/* Features */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Home className="w-4 h-4 text-primary" />
                        <span className="font-manrope text-sm text-[#111827]">{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4 text-primary" />
                        <span className="font-manrope text-sm text-[#111827]">{property.baths} Baths</span>
                      </div>
                    </div>

                    {/* Amenities */}
                    {property.features && (
                      <div className="flex flex-wrap gap-2">
                        {property.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-primary/10 text-primary text-xs font-manrope font-semibold px-2 py-1 rounded-md"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary/10 to-transparent rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <p className="font-syne font-bold text-[#111827]">More Properties Available</p>
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <p className="font-manrope text-[#4B5563] mb-6 max-w-xl mx-auto">
              Discover hundreds of premium properties perfectly matched to your needs and preferences.
            </p>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 bg-primary text-white font-manrope font-bold px-10 py-4 rounded-xl hover:bg-[#C05621] transition-all shadow-lg hover:shadow-xl"
            >
              Browse All Properties
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;

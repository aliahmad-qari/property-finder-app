import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useSEO } from '../hooks/useSEO';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import CuratedListingsSection from '../components/home/CuratedListingsSection';
import ProcessSection from '../components/home/ProcessSection';
import TrustSignalsSection from '../components/home/TrustSignalsSection';
import FeaturedPropertiesSection from '../components/home/FeaturedPropertiesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  useSEO({
    title: 'Premium Real Estate Platform',
    description: 'EstateFlow offers premium property search, location trends analysis, and investment insights to find your perfect property in Pakistan.',
  });

  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Curated Listings Section */}
      <CuratedListingsSection />

      {/* The Path to Your New Beginning Section */}
      <ProcessSection />

      {/* Redefining Real Estate Section */}
      <TrustSignalsSection />

      {/* Featured Properties Section */}
      <FeaturedPropertiesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
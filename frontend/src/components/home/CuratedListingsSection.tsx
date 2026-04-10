import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Ruler } from 'lucide-react';
import glassParvillionImg from '../../images/The Glass Pavilion.jpg';
import skylinePenthouseImg from '../../images/Skyline Penthouse.jpg';
import desertOasisImg from '../../images/Desert Oasis.jpg';
import coastalRetreatImg from '../../images/Coastal Retreat.jpg';

const CuratedListingsSection: React.FC = () => {
  return (
    <section className="bg-[#FAF8F4] py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
          <path d="M0 0h20v20H0z" fill="primary" opacity="0.05" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <div className="font-space-mono text-sm text-primary uppercase tracking-widest mb-4">
              Exclusive Selection
            </div>
            <h2 className="font-fraunces text-5xl text-[#111827]">
              Curated Listings
            </h2>
          </div>

          <Link to="/properties" className="flex items-center gap-2 font-manrope font-bold text-primary hover:gap-4 transition-all">
            View All Properties
            <ArrowRight className="text-sm" />
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-12 gap-6">

          {/* Large Featured Property */}
          <div className="col-span-12 md:col-span-8 rounded-2xl overflow-hidden shadow-lg relative group">
            <div className="relative h-[500px]">
              <img 
                src={glassParvillionImg}
                alt="The Glass Pavilion luxury villa in Montecito California" 
                className="absolute inset-0 w-full h-full object-cover" 
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-primary inline-block px-3 py-1 rounded text-[#F9FAFB] font-manrope font-bold text-xs mb-4">
                  FEATURED
                </div>
                <h3 className="font-fraunces text-3xl text-[#F9FAFB] mb-2">The Glass Pavilion</h3>
                <p className="font-manrope font-light text-[#F9FAFB]/80 mb-4">Montecito, California</p>
                <div className="border-t border-white/20 pt-4 flex items-center justify-between">
                  <span className="font-space-mono text-[#F9FAFB]">$12,500,000</span>
                  <div className="flex items-center gap-6 text-[#F9FAFB]/90">
                    <div className="flex items-center gap-2">
                      <Home className="text-sm" />
                      <span className="font-space-mono text-sm">6 Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="text-sm" />
                      <span className="font-space-mono text-sm">8,200 sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Property Card */}
          <div className="col-span-12 md:col-span-4 rounded-2xl overflow-hidden shadow-lg relative group">
            <div className="relative h-[500px]">
              <img 
                src={skylinePenthouseImg}
                alt="Skyline Penthouse luxury apartment in New York NY" 
                className="absolute inset-0 w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-fraunces text-xl text-[#F9FAFB] mb-1">Skyline Penthouse</h3>
                <p className="font-manrope text-sm text-[#F9FAFB]/70 mb-3">New York, NY</p>
                <span className="font-space-mono text-sm text-[#F9FAFB]">$8,950,000</span>
              </div>
            </div>
          </div>

          {/* Desert Oasis */}
          <div className="col-span-12 md:col-span-4 rounded-2xl overflow-hidden shadow-lg aspect-square">
            <div className="relative h-full">
              <img 
                src={desertOasisImg}
                alt="Desert Oasis modern home in Joshua Tree CA" 
                className="absolute inset-0 w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-fraunces text-xl text-[#F9FAFB] mb-1">Desert Oasis</h3>
                <p className="font-manrope text-sm text-[#F9FAFB]/70 mb-3">Joshua Tree, CA</p>
                <span className="font-space-mono text-sm text-[#F9FAFB]">$3,200,000</span>
              </div>
            </div>
          </div>

          {/* Coastal Retreat */}
          <div className="col-span-12 md:col-span-8 rounded-2xl overflow-hidden shadow-lg relative">
            <div className="relative h-[800px]">
              <img 
                src={coastalRetreatImg}
                alt="Coastal Retreat mansion in Malibu California" 
                className="absolute inset-0 w-full h-full object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-fraunces text-2xl text-[#F9FAFB] mb-2">Coastal Retreat</h3>
                <p className="font-manrope text-[#F9FAFB]/70 mb-6">Malibu, California</p>
                <div className="border-t border-white/20 pt-6 flex items-center justify-between">
                  <span className="font-space-mono text-[#F9FAFB]">$15,000,000</span>
<button className="text-[#F9FAFB] hover:bg-white/10 p-2 rounded-full transition-all">
                      <ArrowRight className="text-2xl" />
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedListingsSection;

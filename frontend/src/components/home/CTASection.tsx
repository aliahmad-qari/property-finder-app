import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      {/* Background Pattern with dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60"></div>
      <img 
        src="/src/images/Abstract architectural texture with light and shadow.png" 
        alt="Background Texture"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />

      <div className="max-w-[1280px] mx-auto px-8 text-center relative z-10">
        <h2 className="font-fraunces text-5xl text-primary mb-6">
          Ready to Find Your Dream Home?
        </h2>
        <p className="font-manrope font-light text-[#F9FAFB] text-lg mb-10 max-w-[680px] mx-auto">
          Join thousands of satisfied homeowners who found their perfect property with EstateFlow.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/properties" className="bg-white text-primary font-manrope font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all inline-block">
            Browse Properties
          </Link>
<Link to="/contact" className="border-2 border-white text-[#F9FAFB] font-manrope font-bold text-lg px-10 py-4 rounded-xl hover:bg-white hover:text-primary transition-all inline-block">
  Contact Us
</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      {/* Background Pattern */}
        <img 
          src="/src/images/Abstract architectural texture with light and shadow.png" 
          alt="Background Texture"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />

      <div className="max-w-[1280px] mx-auto px-8 text-center relative z-10">
<h2 className="font-fraunces text-5xl text-black mb-6">
  Ready to Find Your Dream Home?
</h2>
<p className="font-manrope font-light text-xl text-black/90 mb-10 max-w-[680px] mx-auto">
  Join thousands of satisfied homeowners who found their perfect property with EstateFlow.
</p>
        <div className="flex gap-4 justify-center">
<button className="bg-[#D4755B] text-black font-manrope font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:bg-[#C05621] transition-all">
  Get Started
</button>
<button className="border-2 border-[#D4755B] text-[#D4755B] font-manrope font-bold text-lg px-10 py-4 rounded-xl hover:bg-[#D4755B] hover:text-white transition-all">
  Schedule a Demo
</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

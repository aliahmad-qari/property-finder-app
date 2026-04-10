import React from 'react';
import { CheckCircle, Headphones, DollarSign, Shield, Zap, Globe } from 'lucide-react';
import teamImage from '../../images/Team section.jpg';

interface TrustSignal {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

const TrustSignalsSection: React.FC = () => {
  const trustSignals: TrustSignal[] = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Verified Listings Only',
      description: 'Every property on our platform is physically verified by our team to ensure what you see is what you get.',
      badge: 'Certified'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: '24/7 Concierge Support',
      description: 'Our dedicated team is always available to answer questions, schedule viewings, and provide expert advice.',
      badge: 'Always Available'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees. We provide clear, upfront cost breakdowns so you can budget with confidence.',
      badge: 'Zero Hidden Costs'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Transactions',
      description: 'Your financial data is protected with enterprise-grade security and encrypted payment processing.',
      badge: 'SSL Protected'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast & Efficient',
      description: 'Complete your property search, viewing, and booking process in minutes, not weeks.',
      badge: 'Quick Process'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Expanded Network',
      description: 'Access exclusive listings and partner properties across multiple regions and markets.',
      badge: 'Wide Coverage'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#FAF8F4] to-white py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
          </div>
          <h2 className="font-fraunces text-5xl lg:text-6xl text-[#111827] mb-6 leading-tight">
            Redefining Real Estate
          </h2>
          <p className="font-manrope text-lg text-[#4b5563] max-w-2xl mx-auto mb-8">
            We've transformed the property search experience with innovation, transparency, and unmatched customer service.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-[#ec4613] mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left - Image with Border and Badge */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="border-2 border-[rgba(236,70,19,0.2)] rounded-2xl p-4 relative z-10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={teamImage}
                alt="Team meeting in modern office"
                className="rounded-2xl shadow-lg w-full object-cover aspect-square"
              />
            </div>
            {/* Trust Badge */}
            <div className="absolute top-8 right-8 bg-white rounded-full p-4 shadow-lg border border-primary/20 z-20">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-xs text-[#4b5563] font-syne">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="space-y-6">
            {trustSignals.map((signal, index) => (
              <div
                key={index}
                className="group flex gap-4 p-6 rounded-xl bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent border border-transparent hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#ec4613] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <div className="text-white">
                      {signal.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-syne font-bold text-lg text-[#111827] group-hover:text-primary transition-colors">
                      {signal.title}
                    </h4>
                    {signal.badge && (
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {signal.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-manrope text-sm text-[#4b5563] leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '50K+', label: 'Active Listings' },
            { number: '100K+', label: 'Happy Clients' },
            { number: '24/7', label: 'Expert Support' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-colors shadow-sm"
            >
              <p className="font-fraunces text-4xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="font-syne text-[#4b5563] uppercase tracking-wide text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;

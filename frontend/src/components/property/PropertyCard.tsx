import React from 'react';

const PropertyCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer">
      <div className="relative h-64">
        <img src="" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-fraunces text-xl font-bold text-[#111827] mb-2">Villa Serenity</h3>
        <p className="font-space-mono text-sm text-[#6b7280] uppercase tracking-wide mb-4">Beverly Hills, CA</p>
        <div className="border-t border-[#e5e7eb] pt-4 flex items-center justify-between">
          <span className="font-space-mono text-lg font-bold text-[#111827]">$4,250,000</span>
          <div className="flex items-center gap-4 text-[#4b5563]">
            <div className="flex items-center gap-1">
              <span className="font-material-icons text-sm">bed</span>
              <span className="font-manrope text-sm">4</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-material-icons text-sm">shower</span>
              <span className="font-manrope text-sm">3.5</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-material-icons text-sm">square_foot</span>
              <span className="font-manrope text-sm">4,250</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
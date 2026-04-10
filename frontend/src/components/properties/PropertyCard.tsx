import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Home, Bath, Ruler } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  image: string;
  name: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  image,
  name,
  price,
  location,
  beds,
  baths,
  sqft,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link to={`/property/${id}`} className="block">
      <div className="bg-white border border-[#E6E0DA] rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
        {/* Image Container */}
        <div className="relative aspect-[340/240] overflow-hidden">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-20" />

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg group/fav"
          >
            <span className={`text-xl transition-all ${
              isFavorite 
                ? 'text-primary' 
                : 'text-[#6B7280] group-hover/fav:text-primary'
            }`}>
              <Heart 
                className="text-xl" 
                fill={isFavorite ? 'currentColor' : 'none'}
              />
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Price */}
          <div className="flex items-baseline gap-1 mb-2">
            <span className="font-space-mono font-bold text-xl text-primary">
              ₹
            </span>
            <span className="font-space-mono font-bold text-2xl text-[#111827]">
              {price}
            </span>
          </div>

          {/* Name */}
          <h3 className="font-syne text-lg text-[#111827] mb-1">
            {name}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1 mb-4">
            <MapPin className="text-primary text-sm" />
            <span className="font-manrope font-extralight text-sm text-[#6B7280]">
              {location}
            </span>
          </div>

          {/* Specs */}
          <div className="flex items-center gap-4 pb-4 border-b border-[#E6E0DA]">
<div className="flex items-center gap-1.5">
            <Home className="text-primary text-lg hover:scale-110 transition-transform" />
            <span className="font-manrope font-extralight text-sm text-[#111827]">
              {beds} Beds
            </span>
          </div>
<div className="flex items-center gap-1.5">
            <Bath className="text-primary text-lg hover:scale-110 transition-transform" />
            <span className="font-manrope font-extralight text-sm text-[#111827]">
              {baths} Baths
            </span>
          </div>
<div className="flex items-center gap-1.5">
            <Ruler className="text-primary text-lg hover:scale-110 transition-transform" />
            <span className="font-manrope font-extralight text-sm text-[#111827]">
              {sqft.toLocaleString()} sqft
            </span>
          </div>
          </div>

<button className="w-full mt-2 bg-primary text-[#F9FAFB] font-manrope font-bold py-2 rounded-lg hover:bg-[#1D6EE4] transition-all">
  View Details
</button>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
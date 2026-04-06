// src/components/CategoryTabs.js
import React from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Film,
  Globe,
  HeartPulse,
  FlaskConical,
  Trophy,
  Smartphone,
} from 'lucide-react';

const categories = [
  { name: 'business', icon: <Briefcase /> },
  { name: 'entertainment', icon: <Film /> },
  { name: 'general', icon: <Globe /> },
  { name: 'health', icon: <HeartPulse /> },
  { name: 'science', icon: <FlaskConical /> },
  { name: 'sports', icon: <Trophy /> },
  { name: 'technology', icon: <Smartphone /> },
];

const CategoryTabs = ({ activeCategory }) => {
  return (
    <div className="w-full bg-[#0b1120]/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
      <div className="flex overflow-x-auto py-4 scrollbar-hide max-w-7xl mx-auto px-4">
        <div className="flex space-x-3">
          {categories.map((category) => {
            const isActive = activeCategory === category.name;
            
            return (
              <Link
                key={category.name}
                href={`/top-heading?category=${category.name}`}
                className={`
                  flex items-center px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-full whitespace-nowrap group
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200 border border-white/10'
                  }
                `}
              >
                {/* Icon with subtle animation on hover */}
                <span className={`transition-transform duration-300 ${!isActive && 'group-hover:scale-110 group-hover:text-blue-400'}`}>
                  {React.cloneElement(category.icon, { className: "w-4 h-4" })}
                </span>
                
                <span className="ml-2.5 capitalize tracking-wide">{category.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
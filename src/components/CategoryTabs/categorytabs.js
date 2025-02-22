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
  { name: 'business', icon: <Briefcase className="w-5 h-5" /> },
  { name: 'entertainment', icon: <Film className="w-5 h-5" /> },
  { name: 'general', icon: <Globe className="w-5 h-5" /> },
  { name: 'health', icon: <HeartPulse className="w-5 h-5" /> },
  { name: 'science', icon: <FlaskConical className="w-5 h-5" /> },
  { name: 'sports', icon: <Trophy className="w-5 h-5" /> },
  { name: 'technology', icon: <Smartphone className="w-5 h-5" /> },
];

const CategoryTabs = ({ activeCategory }) => {
  return (
    <div className="flex overflow-x-auto py-2 scrollbar-hide">
      <div className="flex space-x-4 mx-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/top-heading?category=${category.name}`}
            className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg whitespace-nowrap ${
              activeCategory === category.name
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.icon}
            <span className="ml-2 capitalize">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
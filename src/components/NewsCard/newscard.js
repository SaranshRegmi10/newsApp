// src/components/NewsCard.js
import React from 'react';

const NewsCard = ({ title, category, image, description, url }) => {
  const truncateDescription = (text, maxWords) => {
    if (!text) return 'No description available';
    const words = text.split(' ');
    return words.length > maxWords 
      ? words.slice(0, maxWords).join(' ') + '...' 
      : text;
  };

  return (
    <div className="group relative bg-[#161e2c] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full shadow-2xl hover:shadow-blue-500/10">
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
        
        {/* Image Section with Overlay */}
        <div className="relative overflow-hidden h-48">
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={image || 'https://via.placeholder.com/600x400?text=No+Image+Available'} 
            alt={title}
          />
          {/* Gradient overlay to make text pop if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#161e2c] via-transparent to-transparent opacity-60"></div>
          
          {/* Category Badge - Floating style */}
          <span className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            {category}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-bold text-lg mb-3 text-gray-100 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
            {title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed flex-grow">
            {truncateDescription(description, 16)}
          </p>

          {/* Bottom Bar */}
          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-blue-500 text-xs font-bold group-hover:underline">
              Read Full Story →
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
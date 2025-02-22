// src/components/NewsCard.js
import React from 'react';

const NewsCard = ({ title, category, image, description,url }) => {
  // Function to truncate the description to 16 words
  const truncateDescription = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 flex flex-col h-full">
      <a href={url} target
      ="_blank">
      <img
        className="w-full h-40 object-cover text-gray-900"
        src={image || 'https://via.placeholder.com/300'} 
        alt={category}
      />
      <div className="px-6 py-4 flex flex-col flex-grow">
        <div className="font-bold text-xl mb-2 text-amber-950">{title}</div>
        <p className="text-gray-700 text-base flex-grow">
          {truncateDescription(description || 'No description available', 16)}
        </p>
      </div>
      <div className="px-6 pt-2 pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-500 mr-2">
          #{category}
        </span> 
      </div>
      </a>
     
    </div>
  );
};

export default NewsCard;
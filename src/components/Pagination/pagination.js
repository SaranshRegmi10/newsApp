// src/components/Pagination.js
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // If you're using Lucide from before

const Pagination = ({ page, setPage, totalResults }) => {
  const totalPages = Math.ceil(totalResults / 20);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-12 space-y-4">
      <div className="flex items-center bg-[#161e2c] border border-white/10 p-1.5 rounded-2xl shadow-2xl backdrop-blur-md">
        
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="flex items-center justify-center p-3 rounded-xl transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/5 text-gray-300 hover:text-blue-400 group"
        >
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="ml-1 hidden sm:inline-block font-medium">Previous</span>
        </button>

        {/* Page Indicator */}
        <div className="px-6 py-2 mx-2 bg-white/5 border-x border-white/5 flex items-center space-x-2">
          <span className="text-blue-500 font-bold text-lg">{page}</span>
          <span className="text-gray-500 text-sm">of</span>
          <span className="text-gray-400 font-medium">{totalPages || 1}</span>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={page >= totalPages}
          className="flex items-center justify-center p-3 rounded-xl transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/5 text-gray-300 hover:text-blue-400 group"
        >
          <span className="mr-1 hidden sm:inline-block font-medium">Next</span>
          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      
      {/* Tiny Progress Bar (Optional Touch) */}
      <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 transition-all duration-500" 
          style={{ width: `${(page / totalPages) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Pagination;
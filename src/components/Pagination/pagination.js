// src/components/Pagination.js
import React from 'react';

const Pagination = ({ page, setPage, totalResults }) => {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    }
  };

  const handleNext = () => {
    if (page < Math.ceil(totalResults / 20)) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    }
  };

  return (
    <div className="flex justify-center my-8">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={page >= Math.ceil(totalResults / 20)}
        className="px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
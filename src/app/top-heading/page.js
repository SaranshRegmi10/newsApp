'use client';
import React, { useState, useEffect } from 'react';
import NewsCard from '@/components/NewsCard/newscard';
import Pagination from '@/components/Pagination/pagination';
import CategoryTabs from '@/components/CategoryTabs/categorytabs';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const TopHeading = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'business';

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const res = await fetch(
        `/api/news?category=${category}&page=${page}`
      );
      const data = await res.json();
      setNews(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);
    };
    fetchNews();
  }, [category, page]);

  return (
    <div className="container mx-auto px-4 bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center my-8 capitalize italic">Top Headlines:{category}</h1>
      <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          Back
        </button>
      <CategoryTabs activeCategory={category} />
     
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {news.map((article,index) => (
            <NewsCard
              key={index}
              title={article.title}
              category={category}
              image={article.urlToImage}
              description={article.description}
              url={article.url}
            />
          ))}
        </div>
      )}
      <Pagination page={page} setPage={setPage} totalResults={totalResults} />
    </div>
  );
};

export default TopHeading;
'use client';
import React, { useState, useEffect } from 'react';
import NewsCard from '@/components/NewsCard/newscard';
import Pagination from '@/components/Pagination/pagination';
import CategoryTabs from '@/components/CategoryTabs/categorytabs';
import { useSearchParams, useRouter } from 'next/navigation';
import { ArrowLeft, SearchIcon } from 'lucide-react'; 

const TopHeading = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // 1. Get ALL parameters from the URL
  const category = searchParams.get('category') || 'business';
  const query = searchParams.get('q'); // Search query
  const sortBy = searchParams.get('sortBy') || 'publishedAt'; // Sort preference

  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  // 2. Reset page to 1 whenever Category OR Search Query changes
  useEffect(() => {
    setPage(1);
  }, [category, query]);

  // 3. Updated Data Fetch logic to handle Search and Sort
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        // Build the URL dynamically based on whether we are searching or browsing categories
        const fetchUrl = query 
          ? `/api/news?q=${query}&sortBy=${sortBy}&page=${page}`
          : `/api/news?category=${category}&page=${page}`;

        const res = await fetch(fetchUrl);
        const data = await res.json();
        setNews(data.articles || []);
        setTotalResults(data.totalResults || 0);
      } catch (error) {
        console.error("Fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [category, page, query, sortBy]); // Add query and sortBy as dependencies

  // 4. Handle sorting change via URL update
  const handleSortChange = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sortBy', e.target.value);
    router.push(`/top-heading?${params.toString()}`);
  };

  return (
    <div className="w-full bg-[#0b1120] text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8"> 
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div className="flex items-center gap-5">
            <button
              onClick={() => router.back()}
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-600/10 hover:border-blue-500/30 transition-all group"
            >
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
            </button>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">
                {query ? 'Search Results' : 'Global News Feed'}
              </span>
              <h1 className="text-3xl font-extrabold capitalize leading-none mt-1">
                {query ? `"${query}"` : `Top ${category} Headlines`}
              </h1>
            </div>
          </div>

          {/* Show CategoryTabs only when NOT searching, or both if you prefer */}
          {!query && <CategoryTabs activeCategory={category} />}
        </div>

        {/* 5. Sort By Dropdown (Only shows when searching as per NewsAPI rules) */}
        {query && (
          <div className="flex justify-end mb-6">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
              <span className="text-xs text-gray-400 font-medium uppercase">Sort By:</span>
              <select 
                value={sortBy} 
                onChange={handleSortChange}
                className="bg-transparent text-sm font-semibold text-blue-400 outline-none cursor-pointer"
              >
                <option value="publishedAt">Newest</option>
                <option value="relevancy">Relevance</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col justify-center items-center h-[50vh] gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="text-gray-500 text-sm animate-pulse">Scanning news wires...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {news.length > 0 ? (
              news.map((article, index) => (
                <NewsCard
                  key={`${article.url}-${index}`}
                  title={article.title}
                  category={category}
                  image={article.urlToImage}
                  description={article.description}
                  url={article.url}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-gray-500">
                No articles found. Try a different search term.
              </div>
            )}
          </div>
        )}

        <div className="mt-12 pt-10 border-t border-white/5">
          <Pagination page={page} setPage={setPage} totalResults={totalResults} />
        </div>
      </div>
    </div>
  );
};

export default TopHeading;
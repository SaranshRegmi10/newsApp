'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Newspaper } from 'lucide-react';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/top-heading?q=${query}`);
      setQuery('');
    }
  };

  return (
    <nav className="w-full bg-[#0b1120] border-b border-white/5 py-4 px-6 sticky top-0 z-[100] backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div onClick={() => router.push('/')} className="flex items-center gap-2 cursor-pointer">
          <Newspaper className="w-6 h-6 text-blue-500" />
          <span className="text-xl font-bold text-white hidden sm:block">NewsHub</span>
        </div>

        {/* THE SEARCH BAR */}
        <form onSubmit={handleSearch} className="flex-grow max-w-md relative group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for news..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-sm transition-all"
          />
          <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-500 group-focus-within:text-blue-400" />
        </form>

        <div className="text-gray-400 text-xs hidden md:block uppercase tracking-widest font-bold">
          Global Feed
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
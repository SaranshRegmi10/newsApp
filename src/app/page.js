import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#0b1120] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-blue-500/30">
      {/* 1. Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">

        {/* Background Decorative Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        <header className="text-center z-10 max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full">
            Real-time Updates
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Stay Ahead of the <br />
            <span className="text-blue-500">World's Stories.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Your gateway to breaking news in <span className="text-gray-200">Business</span>,
            <span className="text-gray-200"> Technology</span>, and beyond. Personalized for you.
          </p>
        </header>

        {/* 2. Feature "Glass" Card */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl z-10">
          <Link href="">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
            <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl text-blue-400">M</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Top Headlines</h3>
            <p className="text-gray-400 text-sm">Instant access to trending global news as it breaks.</p>
          </div>
          </Link>
          <Link href='/top-heading?category=Business'>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-blue-400">B</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Business</h3>
              <p className="text-gray-400 text-sm">News filtered by your interests and favorite categories.</p>
            </div>
          </Link>

          <Link href='/top-heading?category=Technology'>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl text-blue-400">T</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Technology</h3>
              <p className="text-gray-400 text-sm">Find stories that matter to you with our advanced search.</p>
            </div>
          </Link>
        </section>

        {/* 3. Primary CTA */}
        <div className="mt-16 z-10">
          <Link href="/top-heading?category=general"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20">
            Start Reading Now
            <svg className="w-5 h-5 ml-2 -mr-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </main>

      {/* 4. Minimal Footer */}
      <footer className="border-t border-white/5 bg-black/20 py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            &copy; 2026 NewsApp. Stay Informed, Anytime.
          </div>
          <div className="flex space-x-8 text-gray-400 text-sm">
            <span className="text-gray-500 cursor-pointer transition-colors">Copy Right Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
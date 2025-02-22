import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <header className="text-center mb-8">
            <h1 className="text-5xl font-bold text-blue-400 mb-4">Welcome to the News App</h1>
            <p className="text-xl text-gray-300">Your Gateway to the World’s Latest Stories!</p>
        </header>
        <section className="text-center mb-8 max-w-2xl">
            <p className="text-lg text-gray-400 leading-relaxed">
                Stay ahead with real-time updates on everything that matters. From breaking news in <strong className="text-blue-400">business</strong> and <strong className="text-blue-400">entertainment</strong> to the latest in <strong className="text-blue-400">health</strong>, <strong className="text-blue-400">science</strong>, <strong className="text-blue-400">sports</strong>, and <strong className="text-blue-400">technology</strong> – we’ve got you covered.
            </p>
        </section>

     
        <section className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8 w-full max-w-md">
            <div className="text-center">
                <p className="text-blue-400 text-lg">🌟 <strong>Explore Top Headlines</strong></p>
                <p className="text-blue-400 text-lg">🌟 <strong>Personalized News Feed</strong></p>
                <p className="text-blue-400 text-lg">🌟 <strong>Search for Stories That Matter to You</strong></p>
            </div>
        </section>

     
        <section className="text-center mb-8">
            <p className="text-2xl font-semibold text-blue-400 mb-4">Stay Informed, Anytime, Anywhere!</p>
            <Link href="/top-heading?category=general" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">View News Now</Link>
        </section>

       
        <section className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Snipping Tool</h2>
            <p className="text-gray-400">Your screenshot has been copied to the clipboard and automatically saved to the screenshots folder.</p>
        </section>

        <section className="text-center">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Mintup and Share</h2>
            <p className="text-gray-400">Spread the word and share the latest updates with your friends and family!</p>
        </section>
    </div>

    </div>
  );
}

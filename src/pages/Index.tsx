
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GameCard from "../components/GameCard";
import { Search, ArrowRight, Wallet } from "lucide-react";

const Index = () => {
  const games = [
    {
      id: "1",
      title: "Mines Game",
      description: "Strategic Mining Challenge",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      path: "/coinflip",
      rating: 4.2
    },
    {
      id: "2",
      title: "Dice Game",
      description: "Roll for Fortune",
      imageUrl: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      path: "/coinflip",
      rating: 4.5
    },
    {
      id: "3",
      title: "Coin Flip",
      description: "Double or Nothing",
      imageUrl: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      path: "/coinflip",
      rating: 4.9
    }
  ];

  const smallGames = [
    {
      id: "chess",
      title: "StarkChess",
      image: "/public/lovable-uploads/a5c93090-80ae-497d-af60-5c1b8631badf.png"
    },
    {
      id: "snakes",
      title: "Snakes & Ladders",
      image: "/public/lovable-uploads/1db8ec25-4376-4757-9038-cd30bc725a94.png"
    },
    {
      id: "token",
      title: "Token Flip",
      image: "/public/lovable-uploads/337f0cbf-48e9-4e9d-a013-13b80c63f929.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Custom Header */}
      <header className="w-full py-4 px-4 md:px-8 bg-black border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-purple-500 text-3xl">♚</span>
            <span className="font-press-start text-xl text-white">STELLAR ARCADE</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/leaderboard" className="text-gray-300 hover:text-white">
              Leaderboard
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search Games..."
                className="bg-gray-900 border border-gray-700 text-white rounded-full pl-10 pr-4 py-2 w-64"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            <Link
              to="/connect"
              className="bg-[#0FA0CE] hover:bg-[#0c8eb8] text-white px-4 py-2 rounded-full flex items-center gap-2"
            >
              Connect Wallet
            </Link>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-black relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 rounded-full p-3">
                <span className="text-black text-2xl">♚</span>
              </div>
            </div>
            <p className="text-yellow-400 mb-2">A fully on-chain — Gaming Hub</p>
            <h1 className="font-press-start text-4xl md:text-6xl mb-6 text-white">
              Stellar Arcade
            </h1>
            <p className="text-xl md:text-xl mb-8 text-gray-300">
              First-ever on-chain gaming platform in the Stellar ecosystem. Play, earn, and own your gaming experience.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/games"
                className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-8 rounded-md transition-colors duration-300"
              >
                Explore Games
              </Link>
              <Link
                to="/about"
                className="bg-[#0FA0CE] hover:bg-[#0c8eb8] text-white py-3 px-8 rounded-md transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Casino Games Section */}
      <section className="py-12 px-4 md:px-8 bg-black">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-yellow-400 text-2xl">🎮</span>
            <h2 className="font-press-start text-2xl text-white">Casino Games on Stellar</h2>
          </div>

          {/* Mini Games Carousel */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-purple-500 text-xl">🎮</span>
              <h3 className="font-press-start text-lg text-white">Arcade Games on Starknet</h3>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {smallGames.map(game => (
                <div key={game.id} className="min-w-[150px] bg-gray-900 rounded-lg overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-2 text-center">
                    <p className="text-xs text-white mb-2">{game.title}</p>
                    <button className="bg-purple-600 text-white w-full py-1 rounded text-xs">Play Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.map(game => (
              <GameCard 
                key={game.id}
                id={game.id}
                title={game.title}
                description={game.description}
                imageUrl={game.imageUrl}
                path={game.path}
                rating={game.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 mt-12">
        <div className="container mx-auto">
          <div className="bg-purple-600 rounded-lg p-12 text-center">
            <h2 className="font-press-start text-4xl mb-4 text-white">Ready to Play?</h2>
            <p className="text-xl mb-8 text-white">
              Connect your wallet and start playing games on Stellar today!
            </p>
            <Link
              to="/connect"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-800 py-3 px-8 rounded-md transition-colors duration-300"
            >
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </Link>
          </div>
        </div>
      </section>
      
      {/* Custom Footer */}
      <footer className="w-full py-8 bg-black border-t border-gray-800 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-press-start text-lg mb-4 text-white">Stellar Arcade</h3>
              <p className="text-gray-400 mb-4">
                The first on-chain gaming platform in the Stellar ecosystem. Play, earn, and own your gaming experience.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-press-start text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/games" className="text-gray-400 hover:text-white">
                    Games
                  </Link>
                </li>
                <li>
                  <Link to="/leaderboard" className="text-gray-400 hover:text-white">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-press-start text-lg mb-4 text-white">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Stellar Network
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500">© 2025 Stellar Arcade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

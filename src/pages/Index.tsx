
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GameCard from "../components/GameCard";

const Index = () => {
  const games = [
    {
      id: "1",
      title: "Coin Flip",
      description: "Test your luck with this simple but addictive coin flip game!",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      path: "/coinflip"
    },
    {
      id: "2",
      title: "Space Invaders",
      description: "Classic arcade game where you defend Earth from alien invaders",
      imageUrl: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      path: "/games"
    },
    {
      id: "3",
      title: "Snake",
      description: "Navigate the snake to eat apples while avoiding walls and your own tail",
      imageUrl: "https://images.unsplash.com/photo-1599409636295-e3cf3538f212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      path: "/games"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-arcade-dark relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full opacity-20" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-press-start text-3xl md:text-5xl mb-6 animate-neon-pulse">
              <span className="text-white">Welcome to </span>
              <span className="neon-text">Stellar </span>
              <span className="neon-blue-text">Arcade</span>
            </h1>
            <p className="font-pixel text-xl md:text-2xl mb-8 text-gray-200">
              Experience the classic arcade games reimagined for the modern era
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/games"
                className="bg-arcade-neon hover:bg-arcade-purple text-white font-press-start py-3 px-8 rounded-md transition-colors duration-300"
              >
                Play Now
              </Link>
              <Link
                to="/leaderboard"
                className="bg-arcade-blue hover:bg-arcade-purple text-white font-press-start py-3 px-8 rounded-md transition-colors duration-300"
              >
                Leaderboard
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating 8-bit graphics */}
        <div className="hidden md:block absolute bottom-4 left-10 animate-float">
          <div className="w-16 h-16 bg-arcade-neon opacity-70 rounded-sm"></div>
        </div>
        <div className="hidden md:block absolute top-10 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-arcade-blue opacity-70 rounded-sm"></div>
        </div>
        <div className="hidden md:block absolute bottom-20 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-8 h-8 bg-arcade-green opacity-70 rounded-sm"></div>
        </div>
      </section>
      
      {/* Featured Games */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="font-press-start text-2xl md:text-3xl mb-10 text-center neon-blue-text">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map(game => (
              <GameCard 
                key={game.id}
                id={game.id}
                title={game.title}
                description={game.description}
                imageUrl={game.imageUrl}
                path={game.path}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-4 md:px-8 bg-arcade-dark">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="font-press-start text-2xl md:text-3xl mb-6 neon-text">About Stellar Arcade</h2>
              <p className="font-pixel text-xl mb-4">
                Step into a world of retro gaming nostalgia with our carefully crafted
                collection of classic arcade games reimagined for modern players.
              </p>
              <p className="font-pixel text-xl mb-6">
                Every pixel is infused with the spirit of the golden era of gaming,
                bringing back memories while creating new experiences for players of all ages.
              </p>
              <Link
                to="/about"
                className="inline-block bg-arcade-purple hover:bg-arcade-neon text-white font-pixel py-2 px-6 rounded transition-colors duration-300 text-lg"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Arcade cabinet"
                className="rounded-lg shadow-lg pixel-corners"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

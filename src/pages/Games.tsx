
import Header from "../components/Header";
import Footer from "../components/Footer";
import GameCard from "../components/GameCard";

const Games = () => {
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
    },
    {
      id: "4",
      title: "Pac-Man",
      description: "Navigate through a maze while chomping pellets and avoiding ghosts",
      imageUrl: "https://images.unsplash.com/photo-1579309401389-a2476dddf3d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      path: "/games"
    },
    {
      id: "5",
      title: "Tetris",
      description: "Arrange falling tetrominos to create complete lines",
      imageUrl: "https://images.unsplash.com/photo-1581251863891-33331bf5f882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      path: "/games"
    },
    {
      id: "6",
      title: "Asteroids",
      description: "Control a spaceship and destroy asteroids while avoiding collisions",
      imageUrl: "https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      path: "/games"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 px-4">
        <div className="container mx-auto">
          <h1 className="font-press-start text-3xl mb-10 text-center neon-text">All Games</h1>
          
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Games;

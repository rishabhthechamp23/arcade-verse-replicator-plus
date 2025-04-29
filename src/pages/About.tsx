
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-press-start text-3xl mb-10 text-center neon-text">About Stellar Arcade</h1>
          
          <div className="bg-arcade-dark p-8 rounded-lg shadow-lg border-2 border-arcade-purple mb-10">
            <div className="mb-8">
              <h2 className="font-press-start text-2xl mb-4 neon-blue-text">Our Mission</h2>
              <p className="font-pixel text-xl mb-4">
                Stellar Arcade Verse was created with a simple mission: to bring back the magic and excitement of 
                classic arcade gaming to a new generation of players, while giving nostalgic gamers a trip down 
                memory lane.
              </p>
              <p className="font-pixel text-xl">
                We've carefully recreated the essence of arcade gaming with modern technology, ensuring 
                the games are accessible while maintaining their authentic charm.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="font-press-start text-2xl mb-4 neon-blue-text">Our Story</h2>
              <p className="font-pixel text-xl mb-4">
                Founded by a group of passionate retro gaming enthusiasts in 2023, Stellar Arcade Verse 
                started as a small project to preserve classic arcade games for future generations. 
              </p>
              <p className="font-pixel text-xl">
                What began as a labor of love quickly grew into a vibrant community of gamers from all walks 
                of life, united by their appreciation for pixel-perfect gameplay and the unique aesthetic of 
                the arcade era.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-arcade-dark p-6 rounded-lg shadow-lg border-2 border-arcade-neon">
              <h2 className="font-press-start text-xl mb-4 neon-text">Classic Games</h2>
              <p className="font-pixel text-lg">
                Our collection features carefully recreated versions of the most beloved arcade classics, 
                from fast-paced action games to strategic puzzles that defined an era.
              </p>
            </div>
            
            <div className="bg-arcade-dark p-6 rounded-lg shadow-lg border-2 border-arcade-blue">
              <h2 className="font-press-start text-xl mb-4 neon-blue-text">Community</h2>
              <p className="font-pixel text-lg">
                Join thousands of players who share your passion for retro gaming. Compete on leaderboards, 
                share strategies, and connect with fellow arcade enthusiasts.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="font-press-start text-2xl mb-6 neon-green-text">Join Our Stellar Community</h2>
            <p className="font-pixel text-xl mb-6">
              Ready to experience the golden age of arcade gaming? Create an account today and start your journey!
            </p>
            <button className="bg-arcade-purple hover:bg-arcade-neon text-white font-press-start py-3 px-8 rounded-md transition-colors">
              Sign Up Now
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

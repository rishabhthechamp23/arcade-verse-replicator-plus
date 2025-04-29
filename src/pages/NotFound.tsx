
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="text-center">
          <h1 className="font-press-start text-6xl mb-6 neon-text">404</h1>
          <p className="font-pixel text-2xl mb-8 text-gray-300">Game Over! Page not found</p>
          <div className="mb-8">
            <div className="w-16 h-16 bg-arcade-neon mx-auto animate-float"></div>
          </div>
          <Link to="/" className="bg-arcade-purple hover:bg-arcade-neon text-white font-press-start py-3 px-8 rounded-md transition-colors inline-block">
            Continue → Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;

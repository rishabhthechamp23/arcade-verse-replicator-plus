
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 bg-arcade-dark border-b-2 border-arcade-neon">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <span className="font-press-start text-2xl md:text-3xl neon-text">Stellar</span>
            <span className="font-press-start text-2xl md:text-3xl text-white ml-2">Arcade</span>
            <span className="font-press-start text-2xl md:text-3xl neon-blue-text ml-2">Verse</span>
          </Link>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center gap-6">
            <li>
              <Link to="/" className="font-pixel text-xl hover:text-arcade-neon transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/games" className="font-pixel text-xl hover:text-arcade-neon transition-colors">
                Games
              </Link>
            </li>
            <li>
              <Link to="/leaderboard" className="font-pixel text-xl hover:text-arcade-neon transition-colors">
                Leaderboard
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-pixel text-xl hover:text-arcade-neon transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


import { Link } from "react-router-dom";

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  path: string;
}

const GameCard = ({ id, title, description, imageUrl, path }: GameCardProps) => {
  return (
    <div className="bg-arcade-dark rounded-lg overflow-hidden border-2 border-arcade-purple hover:border-arcade-neon transition-all duration-300 transform hover:scale-105 pixel-corners">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-press-start text-lg mb-2 neon-text">{title}</h3>
        <p className="font-pixel text-gray-300 mb-4 text-lg">{description}</p>
        <Link 
          to={path}
          className="inline-block bg-arcade-purple hover:bg-arcade-neon text-white font-pixel py-2 px-4 rounded transition-colors duration-300 text-lg"
        >
          Play Game
        </Link>
      </div>
    </div>
  );
};

export default GameCard;

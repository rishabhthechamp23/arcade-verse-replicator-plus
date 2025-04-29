
import { Link } from "react-router-dom";

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  path: string;
  rating?: number;
}

const GameCard = ({ id, title, description, imageUrl, path, rating }: GameCardProps) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden border border-gray-800 hover:border-[#0FA0CE] transition-all duration-300">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {rating && (
          <div className="absolute top-2 right-2 flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="text-white ml-1">{rating}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-press-start text-xl mb-1">{title}</h3>
        <p className="font-pixel text-gray-400 mb-4">{description}</p>
        <Link 
          to={path}
          className="block bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded text-center"
        >
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default GameCard;

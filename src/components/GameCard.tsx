
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

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
    <motion.div 
      className="bg-black rounded-lg overflow-hidden border border-gray-800 hover:border-[#0FA0CE] transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="h-60 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {rating && (
          <motion.div 
            className="absolute top-2 right-2 bg-black bg-opacity-70 py-1 px-3 rounded-full flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-white">{rating}</span>
          </motion.div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl text-white font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-6 text-base">{description}</p>
        <Link to={path} className="block">
          <Button 
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 text-lg rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
          >
            Play Now
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default GameCard;

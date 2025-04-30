
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = () => {
    // Simulate wallet connection
    setIsConnected(false);
    
    // Show loading toast
    toast({
      title: "Connecting wallet...",
      description: "Please wait while we connect to your wallet",
    });
    
    // Simulate delay for connection
    setTimeout(() => {
      const mockAddress = "stlr1q9jch3...7tkp5q";
      setIsConnected(true);
      setWalletAddress(mockAddress);
      
      // Show success toast
      toast({
        title: "Wallet connected!",
        description: `Connected to ${mockAddress}`,
        variant: "default",
      });
    }, 1500);
  };

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
        <div className="flex items-center space-x-4">
          <nav className="mr-4">
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
          
          {isConnected ? (
            <Button 
              variant="outline" 
              className="font-pixel bg-arcade-dark border-arcade-neon text-white hover:bg-arcade-dark/80 animate-fade-in"
              onClick={connectWallet}
            >
              <Wallet className="mr-2 h-4 w-4" />
              {walletAddress}
            </Button>
          ) : (
            <Button 
              className="font-pixel bg-arcade-neon text-black hover:bg-arcade-neon/80 animate-pulse"
              onClick={connectWallet}
            >
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

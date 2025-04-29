
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useToast } from "@/components/ui/use-toast";

const CoinFlip = () => {
  const { toast } = useToast();
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState<"heads" | "tails" | null>(null);
  const [score, setScore] = useState({ wins: 0, losses: 0 });
  const [userChoice, setUserChoice] = useState<"heads" | "tails" | null>(null);
  const [coins, setCoins] = useState(100);
  const [betAmount, setBetAmount] = useState(10);

  const flipCoin = () => {
    if (userChoice === null) {
      toast({
        title: "Choose Heads or Tails",
        description: "You need to make a choice before flipping!",
        variant: "destructive"
      });
      return;
    }
    
    if (betAmount <= 0 || betAmount > coins) {
      toast({
        title: "Invalid Bet",
        description: "Please enter a valid bet amount",
        variant: "destructive"
      });
      return;
    }
    
    setFlipping(true);
    
    setTimeout(() => {
      const flipResult: "heads" | "tails" = Math.random() < 0.5 ? "heads" : "tails";
      setResult(flipResult);
      
      if (flipResult === userChoice) {
        setScore(prev => ({ ...prev, wins: prev.wins + 1 }));
        setCoins(prev => prev + betAmount);
        toast({
          title: "You won!",
          description: `The coin landed on ${flipResult}. You won ${betAmount} coins!`,
          variant: "default"
        });
      } else {
        setScore(prev => ({ ...prev, losses: prev.losses + 1 }));
        setCoins(prev => prev - betAmount);
        toast({
          title: "You lost!",
          description: `The coin landed on ${flipResult}. You lost ${betAmount} coins!`,
          variant: "destructive"
        });
      }
      
      setFlipping(false);
    }, 2000);
  };

  const resetGame = () => {
    setScore({ wins: 0, losses: 0 });
    setCoins(100);
    setBetAmount(10);
    setResult(null);
    setUserChoice(null);
    toast({
      title: "Game Reset",
      description: "Starting a new game with 100 coins!",
      variant: "default"
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-press-start text-3xl mb-10 text-center neon-text">Coin Flip Game</h1>
          
          <div className="bg-arcade-dark p-8 rounded-lg shadow-lg border-2 border-arcade-purple">
            <div className="mb-8 text-center">
              <div className="coin w-40 h-40 mx-auto mb-8">
                <div className={`coin-inner ${flipping ? 'animate-flip' : ''}`}>
                  <div className="coin-front bg-arcade-neon flex items-center justify-center">
                    <span className="text-5xl font-bold">H</span>
                  </div>
                  <div className="coin-back bg-arcade-blue flex items-center justify-center">
                    <span className="text-5xl font-bold">T</span>
                  </div>
                </div>
              </div>
              
              {result && !flipping && (
                <p className="font-pixel text-2xl mb-4 neon-text">
                  Result: {result.toUpperCase()}
                </p>
              )}
              
              <div className="flex justify-center gap-4 mb-8 mt-4">
                <button
                  onClick={() => setUserChoice("heads")}
                  className={`px-6 py-3 rounded-md font-pixel text-lg transition-colors ${
                    userChoice === "heads"
                      ? "bg-arcade-neon text-white"
                      : "bg-arcade-dark border-2 border-arcade-neon hover:bg-arcade-purple"
                  }`}
                  disabled={flipping}
                >
                  Heads
                </button>
                <button
                  onClick={() => setUserChoice("tails")}
                  className={`px-6 py-3 rounded-md font-pixel text-lg transition-colors ${
                    userChoice === "tails"
                      ? "bg-arcade-blue text-white"
                      : "bg-arcade-dark border-2 border-arcade-blue hover:bg-arcade-purple"
                  }`}
                  disabled={flipping}
                >
                  Tails
                </button>
              </div>
              
              <div className="mb-6">
                <p className="font-pixel text-xl mb-2">Your Coins: {coins}</p>
                <div className="flex items-center justify-center gap-4">
                  <label className="font-pixel text-xl">Bet Amount:</label>
                  <input
                    type="number"
                    value={betAmount}
                    onChange={(e) => setBetAmount(Number(e.target.value))}
                    className="bg-arcade-dark border-2 border-arcade-neon rounded px-3 py-2 font-pixel text-lg w-24 text-center"
                    min="1"
                    max={coins}
                    disabled={flipping}
                  />
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <button
                  onClick={flipCoin}
                  className="bg-arcade-neon hover:bg-arcade-purple text-white font-press-start py-2 px-8 rounded-md transition-colors"
                  disabled={flipping || coins <= 0}
                >
                  {flipping ? "Flipping..." : "Flip Coin"}
                </button>
                <button
                  onClick={resetGame}
                  className="bg-arcade-blue hover:bg-arcade-purple text-white font-press-start py-2 px-8 rounded-md transition-colors"
                  disabled={flipping}
                >
                  Reset
                </button>
              </div>
            </div>
            
            <div className="border-t-2 border-arcade-purple pt-6">
              <h2 className="font-press-start text-xl mb-4 neon-blue-text text-center">Game Stats</h2>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-arcade-purple bg-opacity-30 p-4 rounded-lg">
                  <p className="font-pixel text-2xl">Wins</p>
                  <p className="font-press-start text-3xl neon-green-text">{score.wins}</p>
                </div>
                <div className="bg-arcade-purple bg-opacity-30 p-4 rounded-lg">
                  <p className="font-pixel text-2xl">Losses</p>
                  <p className="font-press-start text-3xl text-arcade-pink">{score.losses}</p>
                </div>
              </div>
              
              <p className="font-pixel text-xl mt-6 text-center">
                Win rate: {score.wins + score.losses > 0 
                  ? Math.round((score.wins / (score.wins + score.losses)) * 100) 
                  : 0}%
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoinFlip;

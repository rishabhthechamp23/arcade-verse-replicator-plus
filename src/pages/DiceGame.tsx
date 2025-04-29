
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Dices, Refresh } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";

const DiceGame = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [score, setScore] = useState(0);
  const [bet, setBet] = useState(10);
  const [prediction, setPrediction] = useState<'higher' | 'lower' | null>(null);
  const [lastRoll, setLastRoll] = useState(0);

  const rollDice = () => {
    if (prediction === null) {
      toast({
        title: "Make a prediction",
        description: "Please select Higher or Lower first",
        variant: "destructive"
      });
      return;
    }
    
    setRolling(true);
    setLastRoll(dice1 + dice2);
    
    // Animate dice roll
    const rollInterval = setInterval(() => {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
    }, 100);
    
    setTimeout(() => {
      clearInterval(rollInterval);
      
      // Final dice values
      const finalDice1 = Math.floor(Math.random() * 6) + 1;
      const finalDice2 = Math.floor(Math.random() * 6) + 1;
      const sum = finalDice1 + finalDice2;
      
      setDice1(finalDice1);
      setDice2(finalDice2);
      setRolling(false);
      
      // Check if prediction was correct
      const currentSum = finalDice1 + finalDice2;
      const prevSum = lastRoll;
      
      if ((prediction === 'higher' && currentSum > prevSum) || 
          (prediction === 'lower' && currentSum < prevSum)) {
        // Win
        const winnings = bet * 2;
        setScore(prev => prev + winnings);
        toast({
          title: "You Win!",
          description: `You won ${winnings} points!`,
          variant: "default"
        });
      } else if (currentSum === prevSum) {
        // Tie, return bet
        toast({
          title: "It's a Tie",
          description: "Your bet has been returned",
          variant: "default"
        });
      } else {
        // Lose
        setScore(prev => prev - bet);
        toast({
          title: "You Lose",
          description: `You lost ${bet} points`,
          variant: "destructive"
        });
      }
      
      // Reset prediction after roll
      setPrediction(null);
      
    }, 1000);
  };

  const resetGame = () => {
    setDice1(1);
    setDice2(1);
    setScore(100);
    setBet(10);
    setPrediction(null);
    setLastRoll(0);
    toast({
      title: "Game Reset",
      description: "Starting fresh with 100 points",
    });
  };

  // Helper function to render dice faces
  const renderDiceFace = (value: number) => {
    const dotPositions = {
      1: [{top: '50%', left: '50%'}],
      2: [{top: '25%', left: '25%'}, {top: '75%', left: '75%'}],
      3: [{top: '25%', left: '25%'}, {top: '50%', left: '50%'}, {top: '75%', left: '75%'}],
      4: [{top: '25%', left: '25%'}, {top: '25%', left: '75%'}, 
          {top: '75%', left: '25%'}, {top: '75%', left: '75%'}],
      5: [{top: '25%', left: '25%'}, {top: '25%', left: '75%'}, 
          {top: '50%', left: '50%'}, {top: '75%', left: '25%'}, {top: '75%', left: '75%'}],
      6: [{top: '25%', left: '25%'}, {top: '25%', left: '75%'}, 
          {top: '50%', left: '25%'}, {top: '50%', left: '75%'}, 
          {top: '75%', left: '25%'}, {top: '75%', left: '75%'}],
    };

    const dots = dotPositions[value as keyof typeof dotPositions] || [];
    
    return (
      <div className="relative w-full h-full bg-white rounded-lg">
        {dots.map((pos, index) => (
          <div 
            key={index}
            className="absolute w-3 h-3 bg-black rounded-full"
            style={{
              top: pos.top,
              left: pos.left,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Dice Game</h1>
            <p className="text-lg text-gray-300 mb-6">
              Predict if the next roll will be higher or lower than the previous roll.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl text-white">
                Score: <span className="text-yellow-400">{score}</span>
              </div>
              <div className="text-xl text-white">
                Last Roll: <span className="text-yellow-400">{lastRoll || 'None'}</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              <motion.div 
                className="w-24 h-24 md:w-32 md:h-32"
                animate={{ 
                  rotate: rolling ? [0, 360, 720, 1080] : 0,
                  scale: rolling ? [1, 0.8, 1, 0.9, 1] : 1
                }}
                transition={{ duration: 1 }}
              >
                {renderDiceFace(dice1)}
              </motion.div>
              <motion.div 
                className="w-24 h-24 md:w-32 md:h-32"
                animate={{ 
                  rotate: rolling ? [0, 360, 720, 1080] : 0,
                  scale: rolling ? [1, 0.8, 1, 0.9, 1] : 1
                }}
                transition={{ duration: 1 }}
              >
                {renderDiceFace(dice2)}
              </motion.div>
            </div>

            <div className="text-2xl text-white font-bold mb-6 text-center">
              Total: {dice1 + dice2}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                onClick={() => setPrediction('higher')}
                variant={prediction === 'higher' ? 'default' : 'outline'}
                className={`px-6 py-2 ${prediction === 'higher' ? 'bg-green-600' : ''}`}
                disabled={rolling}
              >
                Higher
              </Button>
              <Button
                onClick={() => setPrediction('lower')}
                variant={prediction === 'lower' ? 'default' : 'outline'}
                className={`px-6 py-2 ${prediction === 'lower' ? 'bg-red-600' : ''}`}
                disabled={rolling}
              >
                Lower
              </Button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Bet:</label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="10"
                  value={bet}
                  onChange={(e) => setBet(parseInt(e.target.value))}
                  disabled={rolling}
                  className="w-full"
                />
                <div className="text-white text-center mt-2">{bet} points</div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button 
                onClick={rollDice}
                disabled={rolling || prediction === null}
                className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-6"
              >
                <Dices className="mr-2 h-4 w-4" />
                Roll Dice
              </Button>
              <Button 
                onClick={resetGame}
                variant="outline"
                disabled={rolling}
              >
                <Refresh className="mr-2 h-4 w-4" />
                Reset Game
              </Button>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-4">How to Play</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>Predict if the next roll will be higher or lower than the current roll</li>
              <li>Set your bet amount</li>
              <li>Click "Roll Dice" to see if you win</li>
              <li>If your prediction is correct, you win 2x your bet</li>
              <li>If it's a tie, your bet is returned</li>
            </ol>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DiceGame;

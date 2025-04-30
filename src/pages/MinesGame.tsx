
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Bomb, RefreshCw } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

type MineField = Array<{
  revealed: boolean;
  isMine: boolean;
  adjacentMines: number;
}>;

const MinesGame = () => {
  const gridSize = 5;
  const totalMines = 5;
  const [gameField, setGameField] = useState<MineField>([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [score, setScore] = useState(0);
  const [animatingCell, setAnimatingCell] = useState<number | null>(null);

  const initializeGame = () => {
    // Create empty field
    const newField = Array(gridSize * gridSize).fill(null).map(() => ({
      revealed: false,
      isMine: false,
      adjacentMines: 0
    }));
    
    // Place mines randomly
    let minesPlaced = 0;
    while (minesPlaced < totalMines) {
      const randomIndex = Math.floor(Math.random() * newField.length);
      if (!newField[randomIndex].isMine) {
        newField[randomIndex].isMine = true;
        minesPlaced++;
      }
    }
    
    // Calculate adjacent mines
    for (let i = 0; i < newField.length; i++) {
      if (!newField[i].isMine) {
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;
        let count = 0;
        
        // Check all 8 surrounding cells
        for (let r = Math.max(0, row - 1); r <= Math.min(gridSize - 1, row + 1); r++) {
          for (let c = Math.max(0, col - 1); c <= Math.min(gridSize - 1, col + 1); c++) {
            if (r === row && c === col) continue;
            const index = r * gridSize + c;
            if (newField[index].isMine) count++;
          }
        }
        
        newField[i].adjacentMines = count;
      }
    }
    
    setGameField(newField);
    setGameOver(false);
    setGameWon(false);
    setScore(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCellClick = (index: number) => {
    if (gameOver || gameWon || gameField[index].revealed) return;
    
    const newField = [...gameField];
    newField[index].revealed = true;
    
    // Set animating cell for a brief time
    setAnimatingCell(index);
    setTimeout(() => setAnimatingCell(null), 300);
    
    if (newField[index].isMine) {
      // Hit a mine, game over
      setGameOver(true);
      toast({
        title: "Game Over",
        description: "You hit a mine! Final score: " + score,
        variant: "destructive"
      });
      
      // Reveal all mines
      newField.forEach((cell, i) => {
        if (cell.isMine) newField[i].revealed = true;
      });
    } else {
      // No mine, add to score
      const newScore = score + 10;
      setScore(newScore);
      
      // Check if game is won (all non-mine cells revealed)
      const safeSquares = gridSize * gridSize - totalMines;
      const revealedSquares = newField.filter(cell => cell.revealed && !cell.isMine).length;
      
      if (revealedSquares === safeSquares) {
        setGameWon(true);
        toast({
          title: "You Win!",
          description: "Congratulations! Final score: " + newScore,
          variant: "default"
        });
      }
    }
    
    setGameField(newField);
  };

  const getCellContent = (cell: MineField[number]) => {
    if (!cell.revealed) {
      return null;
    }
    
    if (cell.isMine) {
      return <Bomb className="h-6 w-6 text-red-500" />;
    }
    
    if (cell.adjacentMines > 0) {
      return <span className="font-bold text-xl">{cell.adjacentMines}</span>;
    }
    
    return null;
  };

  const getCellColor = (cell: MineField[number], index: number) => {
    if (!cell.revealed) {
      return "bg-indigo-900 hover:bg-indigo-800 border-2 border-indigo-700";
    }
    
    if (cell.isMine) {
      return "bg-red-900 border-2 border-red-700";
    }
    
    return "bg-indigo-700 border-2 border-indigo-600";
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121736]">
      <Header />
      
      <main className="flex-grow py-16 px-4 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')] bg-cover bg-center bg-blend-color-dodge bg-fixed">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <div className="flex justify-center items-center mb-8">
              <img 
                src="/lovable-uploads/27c740aa-aa57-4326-9fd2-0b0d667b23a9.png" 
                alt="Mines Game" 
                className="h-32 animate-pulse" 
              />
            </div>
            
            <div className="flex justify-between items-center mb-8 bg-black/60 p-4 rounded-lg backdrop-blur-sm border border-purple-500/30">
              <div className="text-white text-2xl font-bold glow-text-orange">
                Score: <span className="text-yellow-400">{score}</span>
              </div>
              <Button 
                onClick={initializeGame}
                variant="outline" 
                className="flex items-center gap-2 bg-indigo-900 border-indigo-600 hover:bg-indigo-800 text-white"
              >
                <RefreshCw className="h-4 w-4" />
                New Game
              </Button>
            </div>
            
            {gameOver && (
              <div className="bg-red-900/80 text-white p-4 mb-4 rounded-md border border-red-500 animate-fade-in backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">Game Over! You hit a mine.</div>
                <div>Final Score: {score}</div>
              </div>
            )}
            
            {gameWon && (
              <div className="bg-green-900/80 text-white p-4 mb-4 rounded-md border border-green-500 animate-fade-in backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">Congratulations! You've won!</div>
                <div>Final Score: {score}</div>
              </div>
            )}
            
            <div 
              className="grid gap-2 mx-auto p-6 bg-black/50 rounded-xl backdrop-blur-md border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              style={{ 
                gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                maxWidth: "400px" 
              }}
            >
              {gameField.map((cell, index) => (
                <button
                  key={index}
                  className={`w-full aspect-square flex items-center justify-center text-white rounded-md transition-all transform ${getCellColor(cell, index)} ${animatingCell === index ? 'scale-90' : ''} hover:scale-95`}
                  onClick={() => handleCellClick(index)}
                  disabled={gameOver || gameWon || cell.revealed}
                >
                  {getCellContent(cell)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <style jsx="true">{`
        .glow-text-orange {
          text-shadow: 0 0 10px #ff7b00, 0 0 20px #ff7b00, 0 0 30px #ff7b00;
        }
      `}</style>
      
      <Footer />
    </div>
  );
};

export default MinesGame;

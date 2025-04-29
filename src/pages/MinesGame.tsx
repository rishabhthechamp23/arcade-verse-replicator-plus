
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Mine, Refresh } from "lucide-react";
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
      return <Mine className="h-5 w-5 text-red-500" />;
    }
    
    if (cell.adjacentMines > 0) {
      return <span className="font-bold">{cell.adjacentMines}</span>;
    }
    
    return null;
  };

  const getCellColor = (cell: MineField[number]) => {
    if (!cell.revealed) {
      return "bg-gray-800 hover:bg-gray-700";
    }
    
    if (cell.isMine) {
      return "bg-red-900";
    }
    
    return "bg-gray-600";
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white mb-4">Mines Game</h1>
            <p className="text-lg text-gray-300 mb-6">
              Click on squares to reveal them. Avoid the mines!
            </p>
            <div className="flex justify-between items-center mb-8">
              <div className="text-white text-xl">
                Score: <span className="text-yellow-400">{score}</span>
              </div>
              <Button 
                onClick={initializeGame}
                variant="outline" 
                className="flex items-center gap-2"
              >
                <Refresh className="h-4 w-4" />
                New Game
              </Button>
            </div>
            
            {gameOver && (
              <div className="bg-red-900 text-white p-4 mb-4 rounded-md">
                Game Over! You hit a mine.
              </div>
            )}
            
            {gameWon && (
              <div className="bg-green-900 text-white p-4 mb-4 rounded-md">
                Congratulations! You've won!
              </div>
            )}
            
            <div 
              className="grid gap-2 mx-auto"
              style={{ 
                gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                maxWidth: "400px" 
              }}
            >
              {gameField.map((cell, index) => (
                <button
                  key={index}
                  className={`w-full aspect-square flex items-center justify-center text-white rounded-md transition-colors ${getCellColor(cell)}`}
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
      
      <Footer />
    </div>
  );
};

export default MinesGame;

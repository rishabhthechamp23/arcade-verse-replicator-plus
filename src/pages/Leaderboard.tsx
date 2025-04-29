
import Header from "../components/Header";
import Footer from "../components/Footer";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, username: "PixelMaster", game: "Space Invaders", score: 12500 },
    { rank: 2, username: "ArcadeKing", game: "Pac-Man", score: 11200 },
    { rank: 3, username: "RetroGamer", game: "Tetris", score: 10800 },
    { rank: 4, username: "NeonRacer", game: "Coin Flip", score: 9500 },
    { rank: 5, username: "BitCrusher", game: "Asteroids", score: 9200 },
    { rank: 6, username: "GameWizard", game: "Snake", score: 8900 },
    { rank: 7, username: "PixelPuncher", game: "Space Invaders", score: 8700 },
    { rank: 8, username: "JoystickJedi", game: "Pac-Man", score: 8400 },
    { rank: 9, username: "ArcadeAce", game: "Tetris", score: 8100 },
    { rank: 10, username: "CoinMaster", game: "Coin Flip", score: 7800 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-press-start text-3xl mb-10 text-center neon-text">Leaderboard</h1>
          
          <div className="bg-arcade-dark p-6 rounded-lg shadow-lg border-2 border-arcade-purple">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-arcade-neon">
                    <th className="py-3 px-4 text-left font-press-start text-arcade-neon">Rank</th>
                    <th className="py-3 px-4 text-left font-press-start text-arcade-neon">Player</th>
                    <th className="py-3 px-4 text-left font-press-start text-arcade-neon">Game</th>
                    <th className="py-3 px-4 text-left font-press-start text-arcade-neon">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((entry) => (
                    <tr 
                      key={entry.rank} 
                      className={`border-b border-arcade-purple ${
                        entry.rank <= 3 ? "bg-arcade-dark" : ""
                      }`}
                    >
                      <td className="py-3 px-4 font-pixel text-xl">
                        {entry.rank <= 3 ? (
                          <span className={`
                            ${entry.rank === 1 ? "neon-text" : 
                              entry.rank === 2 ? "neon-blue-text" : 
                              "neon-green-text"}
                          `}>
                            {entry.rank}
                          </span>
                        ) : (
                          entry.rank
                        )}
                      </td>
                      <td className="py-3 px-4 font-pixel text-xl">{entry.username}</td>
                      <td className="py-3 px-4 font-pixel text-xl">{entry.game}</td>
                      <td className="py-3 px-4 font-pixel text-xl">{entry.score.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Leaderboard;

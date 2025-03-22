// src/components/GameHistory.tsx
import { useGameStore } from "../store/gameStore";
import { formatTime } from "../utils/localStorage";
import "../styles/GameHistory.scss";

const GameHistory = () => {
  const { gameHistory } = useGameStore();

  if (gameHistory.length === 0) {
    return (
      <div className="game-history">
        <h2>Game History</h2>
        <p className="no-history">No games played yet</p>
      </div>
    );
  }

  return (
    <div className="game-history">
      <h2>Game History</h2>
      <div className="history-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Difficulty</th>
              <th>Attempts</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {gameHistory
              .slice()
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((game) => (
                <tr key={game.id}>
                  <td>{new Date(game.date).toLocaleDateString()}</td>
                  <td>{game.difficulty}</td>
                  <td>{game.attempts}</td>
                  <td>{formatTime(game.duration)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameHistory;

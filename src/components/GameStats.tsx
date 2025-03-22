// src/components/GameStats.tsx
import { useGameStore } from "../store/gameStore";
import { formatTime } from "../utils/localStorage";
import "../styles/GameStats.scss";

const GameStats = () => {
  const { attempts, elapsedTime, isGameActive } = useGameStore();

  return (
    <div className="game-stats" data-active={isGameActive}>
      <div className="stat-item">
        <span className="stat-label">Attempts:</span>
        <span className="stat-value">{attempts}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Time:</span>
        <span className="stat-value">{formatTime(elapsedTime)}</span>
      </div>
    </div>
  );
};

export default GameStats;

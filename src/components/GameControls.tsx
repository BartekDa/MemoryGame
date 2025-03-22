// src/components/GameControls.tsx
import { useGameStore } from "../store/gameStore";
import DifficultySelector from "./DifficultySelector";
import "../styles/GameControls.scss";

const GameControls = () => {
  const { startGame, resetGame, isGameActive } = useGameStore();

  const handleStartClick = () => {
    if (isGameActive) {
      resetGame();
    } else {
      startGame();
    }
  };

  return (
    <div className="game-controls">
      <DifficultySelector />
      <button
        className="control-button"
        onClick={handleStartClick}
        data-active={isGameActive}
      >
        {isGameActive ? "Reset Game" : "Start Game"}
      </button>
    </div>
  );
};

export default GameControls;

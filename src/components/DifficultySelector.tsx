// src/components/DifficultySelector.tsx
import { DifficultyLevel } from "../types";
import { useGameStore, useDifficultyConfig } from "../store/gameStore";
import "../styles/DifficultySelector.scss";

const DifficultySelector = () => {
  const { difficulty, setDifficulty, isGameActive } = useGameStore();
  const difficultyConfigs = useDifficultyConfig();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDifficulty = e.target.value as DifficultyLevel;
    setDifficulty(newDifficulty);
  };

  return (
    <div className="difficulty-selector">
      <div className="difficulty-label">
        <label htmlFor="difficulty">Difficulty</label>
        {isGameActive && (
          <div className="tooltip">
            <span className="tooltip-icon">ⓘ</span>
            <span className="tooltip-text">
              Difficulty can't be changed during an active game
            </span>
          </div>
        )}
      </div>

      <div className="select-wrapper">
        <select
          id="difficulty"
          value={difficulty}
          onChange={handleChange}
          disabled={isGameActive}
          aria-describedby="difficulty-help"
        >
          {Object.values(difficultyConfigs).map((config) => (
            <option key={config.level} value={config.level}>
              {config.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DifficultySelector;

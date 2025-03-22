// src/utils/localStorage.ts
import { GameHistory } from "../types";

/**
 * Saves game history to localStorage
 * @param history Array of game history records
 */
export const saveGameHistory = (history: GameHistory[]): void => {
  localStorage.setItem("gameHistory", JSON.stringify(history));
};

/**
 * Retrieves game history from localStorage
 * @returns Array of game history records or empty array if none exists
 */
export const getGameHistory = (): GameHistory[] => {
  const history = localStorage.getItem("gameHistory");
  return history ? JSON.parse(history) : [];
};

/**
 * Formats seconds into minutes:seconds format
 * @param seconds Total seconds to format
 * @returns Formatted time string (e.g., "2:45")
 */
export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

/**
 * Clears all game history from localStorage
 */
export const clearGameHistory = (): void => {
  localStorage.removeItem("gameHistory");
};

/**
 * Gets the best (lowest) attempt count from game history for a specific difficulty
 * @param history Array of game history records
 * @param difficulty Difficulty level to filter by
 * @returns Lowest attempt count or null if no records exist
 */
export const getBestAttempts = (
  history: GameHistory[],
  difficulty: string
): number | null => {
  const filteredHistory = history.filter(
    (game) => game.difficulty === difficulty
  );

  if (filteredHistory.length === 0) {
    return null;
  }

  return Math.min(...filteredHistory.map((game) => game.attempts));
};

/**
 * Gets the best (fastest) completion time from game history for a specific difficulty
 * @param history Array of game history records
 * @param difficulty Difficulty level to filter by
 * @returns Fastest completion time in seconds or null if no records exist
 */
export const getBestTime = (
  history: GameHistory[],
  difficulty: string
): number | null => {
  const filteredHistory = history.filter(
    (game) => game.difficulty === difficulty
  );

  if (filteredHistory.length === 0) {
    return null;
  }

  return Math.min(...filteredHistory.map((game) => game.duration));
};

// src/types/index.ts
export interface Card {
  id: number;
  imageId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameHistory {
  id: string;
  date: string;
  attempts: number;
  duration: number;
  difficulty: DifficultyLevel;
}

export enum DifficultyLevel {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

export interface DifficultyConfig {
  level: DifficultyLevel;
  pairs: number;
  label: string;
}

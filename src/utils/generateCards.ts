// src/utils/generateCards.ts
import { Card } from "../types";

// Helper to shuffle an array
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const generateCards = (pairs: number): Card[] => {
  // Create array of imageIds (1 to pairs)
  const imageIds = Array.from({ length: pairs }, (_, i) => i + 1);

  // Create pairs of cards
  const cards: Card[] = [];
  imageIds.forEach((imageId) => {
    // Create two cards with the same imageId (a pair)
    cards.push(
      {
        id: cards.length + 1,
        imageId,
        isFlipped: false,
        isMatched: false,
      },
      {
        id: cards.length + 2,
        imageId,
        isFlipped: false,
        isMatched: false,
      }
    );
  });

  // Shuffle and return
  return shuffleArray(cards);
};

// src/utils/localStorage.ts
import { GameHistory } from "../types";

export const saveGameHistory = (history: GameHistory[]): void => {
  localStorage.setItem("gameHistory", JSON.stringify(history));
};

export const getGameHistory = (): GameHistory[] => {
  const history = localStorage.getItem("gameHistory");
  return history ? JSON.parse(history) : [];
};

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

// src/store/gameStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Card, GameHistory, DifficultyLevel, DifficultyConfig } from "../types";
import { generateCards } from "../utils/generateCards";

interface GameState {
  cards: Card[];
  attempts: number;
  startTime: number | null;
  elapsedTime: number;
  isGameActive: boolean;
  firstSelectedCard: Card | null;
  secondSelectedCard: Card | null;
  difficulty: DifficultyLevel;
  gameHistory: GameHistory[];

  // Actions
  startGame: () => void;
  resetGame: () => void;
  flipCard: (cardId: number) => void;
  checkForMatch: () => void;
  updateTimer: () => void;
  setDifficulty: (level: DifficultyLevel) => void;
  endGame: () => void;
}

const DIFFICULTY_CONFIGS: Record<DifficultyLevel, DifficultyConfig> = {
  [DifficultyLevel.Easy]: {
    level: DifficultyLevel.Easy,
    pairs: 6,
    label: "Easy (6 pairs)",
  },
  [DifficultyLevel.Medium]: {
    level: DifficultyLevel.Medium,
    pairs: 8,
    label: "Medium (8 pairs)",
  },
  [DifficultyLevel.Hard]: {
    level: DifficultyLevel.Hard,
    pairs: 12,
    label: "Hard (12 pairs)",
  },
};

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      cards: [],
      attempts: 0,
      startTime: null,
      elapsedTime: 0,
      isGameActive: false,
      firstSelectedCard: null,
      secondSelectedCard: null,
      difficulty: DifficultyLevel.Medium,
      gameHistory: [],

      startGame: () => {
        const { difficulty } = get();
        const pairs = DIFFICULTY_CONFIGS[difficulty].pairs;
        const cards = generateCards(pairs);

        set({
          cards,
          attempts: 0,
          startTime: Date.now(),
          elapsedTime: 0,
          isGameActive: true,
          firstSelectedCard: null,
          secondSelectedCard: null,
        });
      },

      resetGame: () => {
        set({
          cards: [],
          attempts: 0,
          startTime: null,
          elapsedTime: 0,
          isGameActive: false,
          firstSelectedCard: null,
          secondSelectedCard: null,
        });
      },

      flipCard: (cardId: number) => {
        const { cards, firstSelectedCard, secondSelectedCard, isGameActive } =
          get();

        // Don't allow flipping if two cards are already flipped or game is not active
        if ((firstSelectedCard && secondSelectedCard) || !isGameActive) return;

        const selectedCard = cards.find((card) => card.id === cardId);

        // Don't allow flipping if card is already matched or flipped
        if (!selectedCard || selectedCard.isMatched || selectedCard.isFlipped)
          return;

        // Update the cards array with the flipped card
        const updatedCards = cards.map((card) =>
          card.id === cardId ? { ...card, isFlipped: true } : card
        );

        if (!firstSelectedCard) {
          set({ cards: updatedCards, firstSelectedCard: selectedCard });
        } else {
          set({
            cards: updatedCards,
            secondSelectedCard: selectedCard,
            attempts: get().attempts + 1,
          });

          setTimeout(() => get().checkForMatch(), 1000);
        }
      },

      checkForMatch: () => {
        const { cards, firstSelectedCard, secondSelectedCard } = get();

        if (!firstSelectedCard || !secondSelectedCard) return;

        const isMatch =
          firstSelectedCard.imageId === secondSelectedCard.imageId;

        const updatedCards = cards.map((card) => {
          if (
            card.id === firstSelectedCard.id ||
            card.id === secondSelectedCard.id
          ) {
            return {
              ...card,
              isFlipped: isMatch, // Tylko trafione karty pozostają odkryte
              isMatched: isMatch || card.isMatched,
            };
          }
          return card;
        });

        set({
          cards: updatedCards,
          firstSelectedCard: null,
          secondSelectedCard: null,
        });

        // Check if all cards are matched to end the game
        if (updatedCards.every((card) => card.isMatched)) {
          get().endGame();
        }
      },

      updateTimer: () => {
        const { startTime, isGameActive } = get();

        if (startTime && isGameActive) {
          set({ elapsedTime: Math.floor((Date.now() - startTime) / 1000) });
        }
      },

      setDifficulty: (level: DifficultyLevel) => {
        set({ difficulty: level });
      },

      endGame: () => {
        const { attempts, startTime, elapsedTime, difficulty } = get();

        if (!startTime) return;

        const duration = elapsedTime;
        const gameRecord: GameHistory = {
          id: Date.now().toString(),
          date: new Date().toISOString(),
          attempts,
          duration,
          difficulty,
        };

        set((state) => ({
          isGameActive: false,
          gameHistory: [...state.gameHistory, gameRecord],
        }));
      },
    }),
    {
      name: "memory-game-storage",
      partialize: (state) => ({
        gameHistory: state.gameHistory,
        difficulty: state.difficulty,
      }),
    }
  )
);

export const useDifficultyConfig = () => DIFFICULTY_CONFIGS;

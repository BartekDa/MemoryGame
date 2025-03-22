// src/components/GameBoard.tsx
import { useEffect, useRef } from "react";
import Card from "./Card";
import { useGameStore } from "../store/gameStore";
import "../styles/GameBoard.scss";

const GameBoard = () => {
  const { cards, flipCard, isGameActive, updateTimer } = useGameStore();
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isGameActive) return;

    const intervalId = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isGameActive, updateTimer]);

  useEffect(() => {
    if (isGameActive && boardRef.current) {
      boardRef.current.focus();
    }
  }, [isGameActive]);

  const getGridTemplateColumns = () => {
    const cardCount = cards.length;

    if (cardCount <= 4) return "repeat(2, 1fr)";
    if (cardCount <= 12) return "repeat(3, 1fr)";
    if (cardCount <= 20) return "repeat(4, 1fr)";
    if (cardCount <= 30) return "repeat(5, 1fr)";
    return "repeat(6, 1fr)";
  };

  return (
    <div
      className="game-board"
      data-active={isGameActive}
      data-cards={cards.length}
      ref={boardRef}
      tabIndex={isGameActive ? 0 : -1}
      style={
        {
          "--grid-columns": getGridTemplateColumns(),
        } as React.CSSProperties
      }
      aria-label="Memory game board"
      role="region"
    >
      <div className="board-container">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={flipCard} />
        ))}
      </div>

      {!isGameActive && cards.length > 0 && (
        <div className="board-overlay">
          <p>Game not active</p>
        </div>
      )}
    </div>
  );
};

export default GameBoard;

// src/components/Card.tsx
import { useState, useEffect } from "react";
import { Card as CardType } from "../types";
import "../styles/Card.scss";

// Obrazy kart
const CARD_IMAGES = [
  "/images/cat1.png",
  "/images/cat2.png",
  "/images/cat3.png",
  "/images/cat4.png",
  "/images/cat5.png",
  "/images/cat6.png",
  "/images/cat7.png",
  "/images/cat8.png",
  "/images/cat9.png",
  "/images/cat10.png",
  "/images/cat11.png",
  "/images/cat12.png",
];

interface CardProps {
  card: CardType;
  onClick: (id: number) => void;
}

const Card = ({ card, onClick }: CardProps) => {
  const [isFlipping, setIsFlipping] = useState(false);

  // Efekt animacji przy odwracaniu karty
  useEffect(() => {
    if (card.isFlipped) {
      setIsFlipping(true);
      const timeout = setTimeout(() => setIsFlipping(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [card.isFlipped]);

  const handleClick = () => {
    if (!card.isFlipped && !card.isMatched) {
      onClick(card.id);
    }
  };

  // Tworzenie klas CSS na podstawie stanu karty
  const cardClasses = [
    "card",
    card.isFlipped ? "flipped" : "",
    card.isMatched ? "matched" : "",
    isFlipping ? "flipping" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClasses} onClick={handleClick} data-card-id={card.id}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-pattern"></div>
        </div>
        <div className="card-back">
          <img
            src={CARD_IMAGES[card.imageId - 1]}
            className="card-image"
            alt={`Card ${card.id}`}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

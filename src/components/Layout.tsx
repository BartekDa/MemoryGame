// src/components/Layout.tsx
import { ReactNode } from "react";
import { useGameStore } from "../store/gameStore";
import "../styles/Layout.scss";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = "Memory Game" }: LayoutProps) => {
  const { isGameActive } = useGameStore();
  const currentYear = new Date().getFullYear();

  return (
    <div className={`app-layout ${isGameActive ? "game-active" : ""}`}>
      <header>
        <h1>{title}</h1>
        <div className="subtitle">Match cards to test your memory</div>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; {currentYear} Memory Game</p>
        <div className="footer-links">
          <a href="#how-to-play" className="footer-link">
            How to Play
          </a>
          <a href="#settings" className="footer-link">
            Settings
          </a>
          <a href="#about" className="footer-link">
            About
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

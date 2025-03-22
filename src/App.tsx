import Layout from "./components/Layout";
import GameBoard from "./components/GameBoard";
import GameControls from "./components/GameControls";
import GameStats from "./components/GameStats";
import GameHistory from "./components/GameHistory";

const App = () => {
  return (
    <Layout>
      <div className="game-container">
        <div className="game-area">
          <GameControls />
          <GameStats />
          <GameBoard />
        </div>
        <GameHistory />
      </div>
    </Layout>
  );
};

export default App;

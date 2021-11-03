import Display from "./components/Display"
import GameLogic from "./components/GameLogic";
import Scores from "./components/Scores";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Memory Game!</h1>
      </header>
      <GameLogic />
    </div>
  );
}

export default App;

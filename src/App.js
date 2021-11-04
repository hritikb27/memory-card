import GameLogic from "./components/GameLogic";

function App() {
  return (
    <div className="App" style={{backgroundColor:'yellow', height:'100vh'}}>
      <header>
        <h1>Memory Game!</h1>
      </header>
      <GameLogic />
    </div>
  );
}

export default App;

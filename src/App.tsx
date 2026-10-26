import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";
import "./App.css";

function App() {
  return (
    <main className="app">
      {/* Set the writing goals using optional component props. */}
      <CharacterCounter
        minWords={50}
        maxWords={500}
        targetReadingTime={2}
      />
    </main>
  );
}

export default App;

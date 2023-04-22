import { Tabs } from "./components/Tabs";

function App() {
  const blueStartPositions = [10, 125, 86, 56, 156, 17, 89, 52, 45];
  const blackStartPositions = [70, 105, 88, 123, 195, 152, 162, 85, 179, 96];

  return (
    <div>
      <Tabs />
      <svg></svg>
      <span>NUMERO</span>
      <button>GENERA</button>
    </div>
  );
}

export default App;

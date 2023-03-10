import React, { useState } from "react";
import "./App.css";
import SortingVisualizer from "./components/SortingVisualizer";
import Settings from "./components/Settings";

const App: React.FC = () => {
  let [array, setArray] = useState<number[]>(
    Array.from({ length: 300 }, () => Math.floor(Math.random() * (300 - 5 + 1)))
  );

  return (
    <div className="App">
      <Settings setArray={setArray} />
      <SortingVisualizer array={array} setArray={setArray} />
    </div>
  );
};

export default App;

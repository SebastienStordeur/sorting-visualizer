import React, { useEffect, useState } from "react";
import { randomNumberFromInterval, resetArray } from "../utils/Array/Array";

const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>();

  return (
    <>
      <div className="visualizer">
        {array &&
          array.map((number: number, index: number) => {
            return <div className="bar" style={{ height: number + "px" }} key={index}></div>;
          })}
      </div>
      <button onClick={() => resetArray(150, setArray)}>Generate a new array</button>
    </>
  );
};

export default SortingVisualizer;

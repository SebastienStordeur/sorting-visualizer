import React, { useEffect, useState } from "react";
import { randomNumberFromInterval, resetArray } from "../utils/Array/Array";
import { mergeSort } from "../utils/Sorting/MergeSort";

const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>(
    Array.from({ length: 100 }, () => Math.floor(Math.random() * (300 - 5 + 1)))
  );

  const sortedArray = array.slice().sort((a, b) => a - b);
  console.log("Expected Result", sortedArray);

  //console.log(array);
  //mergeSort(array, 0, array.length - 1);
  return (
    <>
      <div className="visualizer">
        {array &&
          array.map((number: number, index: number) => {
            //console.log(array);
            return <div className="bar" style={{ height: number + "px" }} key={index}></div>;
          })}
      </div>
      <button onClick={() => resetArray(300, setArray)}>Generate a new array</button>
      <button onClick={() => mergeSort(array)}>Sort</button>
    </>
  );
};

export default SortingVisualizer;

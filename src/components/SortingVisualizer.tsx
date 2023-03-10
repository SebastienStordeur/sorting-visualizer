import React, { useEffect, useState } from "react";
import { randomNumberFromInterval, resetArray } from "../utils/Array/Array";
import { mergeSort } from "../utils/Sorting/MergeSort";
import Bar from "./Bar";

const SortingVisualizer: React.FC = () => {
  let [array, setArray] = useState<number[]>(
    Array.from({ length: 300 }, () => Math.floor(Math.random() * (300 - 5 + 1)))
  );

  //const sortedArray = array.slice().sort((a, b) => a - b);

  const setSortedArray = async () => {
    const sortArray: any = await mergeSort(array, 0, array.length - 1);
    setArray([...sortArray]);
  };

  return (
    <>
      <div className="visualizer">
        {array.map((number: number, index: number) => {
          return <Bar number={number} key={index} />;
        })}
      </div>
      <button onClick={() => resetArray(100, setArray)}>Generate a new array</button>
      <button onClick={() => mergeSort(array, 0, array.length - 1)}>Sort</button>
      <button onClick={() => setSortedArray()}>Display sorted array</button>
    </>
  );
};

export default SortingVisualizer;

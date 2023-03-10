import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { quickSort } from "../utils/Algorithms/QuickSort";
import { resetArray } from "../utils/Array/Array";
import { mergeSort } from "../utils/Sorting/MergeSort";
import Bar from "./Bar";

interface VisualizerInterface {
  array: number[];
  setArray: Dispatch<SetStateAction<number[]>>;
}

const SortingVisualizer: React.FC<VisualizerInterface> = ({ array, setArray }) => {
  const quickSortedArray = quickSort(array);
  /* console.log(quickSortedArray); */
  //const sortedArray = array.slice().sort((a, b) => a - b);

  const setSortedArray = async () => {
    const sortArray: any = await mergeSort(array, 0, array.length - 1);
    setArray([...sortArray]);
  };

  return (
    <React.Fragment>
      <div className="visualizer">
        {array &&
          array.map((number: number, index: number) => {
            return <Bar number={number} key={index} />;
          })}
      </div>
      <button onClick={() => resetArray(100, setArray)}>Generate a new array</button>
      <button onClick={() => mergeSort(array, 0, array.length - 1)}>Sort</button>
      <button onClick={() => setSortedArray()}>Display sorted array</button>

      <button onClick={() => quickSort(array)}>Quick sort</button>
    </React.Fragment>
  );
};

export default SortingVisualizer;

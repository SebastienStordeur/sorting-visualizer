import { Dispatch, SetStateAction } from "react";

export const resetArray = async (entries: number, setArray: Dispatch<SetStateAction<number[]>>) => {
  const array = [];
  for (let i = 0; i < entries; i++) {
    array.push(randomNumberFromInterval(5, 400));
  }
  setArray(array);
};

export const randomNumberFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1));
};

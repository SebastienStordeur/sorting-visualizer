// Note about quick sort algorithm

// Choose a pivot element used to partition an array in 2
// Partition the array into 2 parts
// First part : array elements that are smaller than pivot in left
// Second part : array elements that are higher than pivot in right

// Recursively sort each part (or subarray)
// Final : concat subarrays

export const quickSort = (array: number[]): number[] => {
  // check if array contains more than 1 value
  if (array.length <= 1) return array;
  else {
    const pivot = array[0];

    let leftArray = [];
    let rightArray = [];

    // values lower than pivot will go to the left array, higher will go in the right away
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        leftArray.push(array[i]);
      } else {
        rightArray.push(array[i]);
      }
    }

    return quickSort(leftArray).concat(pivot, quickSort(rightArray));
  }
};

export const mergeSort = (array: number[], startIndex: number, endIndex: number, setArray: any) => {
  if (startIndex >= endIndex) return;
  let midIndex = Math.floor((startIndex + endIndex) / 2);

  mergeSort(array, startIndex, midIndex, setArray);
  mergeSort(array, midIndex + 1, endIndex, setArray);
  merge(array, startIndex, midIndex, endIndex, setArray);
};

function merge(array: number[], startIndex: number, midIndex: number, endIndex: number, setArray: any) {
  const n1 = midIndex - startIndex + 1;
  const n2 = endIndex - midIndex;

  //temporary arrays
  let subarray1 = new Array(n1);
  let subarray2 = new Array(n2);

  //copy data to subarrays
  for (let i = 0; i < n1; i++) {
    subarray1[i] = array[startIndex + i];
  }
  for (let j = 0; j < n2; j++) {
    subarray2[j] = array[midIndex + 1 + j];
  }

  console.log(subarray1, subarray2);

  let i = 0;
  let j = 0;
  let k = startIndex;

  while (i < n1 && j < n2) {
    if (subarray1[i] <= subarray2[j]) {
      array[k] = subarray1[i];
      i++;
    } else {
      array[k] = subarray2[j];
      j++;
    }
    k++;
  }

  // Operation on remaining elements of the left sub-array
  while (i < n1) {
    array[k] = subarray1[i];
    i++;
    k++;
  }

  // Operation on remaining elements of the right sub-array
  while (j < n2) {
    array[k] = subarray2[j];
    j++;
    k++;
  }

  console.log(array);
  setArray(array);
}

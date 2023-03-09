export const mergeSort = (array: number[]) => {
  //Merges 2 subarrays of array
  //1st subarray is array[left index, mid]
  //2nd subarray is array[mid + 1, end]

  /** If the array is too short to be sorted */

  const temporaryArray = array.slice();
  mergeHelper(array, 0, array.length - 1, temporaryArray);
};

function mergeHelper(array: number[], startIndex: number, endIndex: number, temporaryArray: number[]) {
  if (startIndex === endIndex) return;
  const midIndex = Math.floor((startIndex + endIndex) / 2);

  mergeHelper(temporaryArray, startIndex, midIndex, array);
  mergeHelper(temporaryArray, midIndex + 1, endIndex, array);
  merge(array, startIndex, midIndex, endIndex, temporaryArray);
}

function merge(array: number[], startIndex: number, midIndex: number, endIndex: number, temporaryArray: number[]) {
  const n1 = midIndex - startIndex + 1;
  const n2 = endIndex - midIndex;

  //temporary arrays
  let subarray1 = new Array(n1);
  let subarray2 = new Array(n2);

  for (var i = 0; i < n1; i++) subarray1[i] = array[startIndex + i];
  for (var j = 0; j < n2; j++) subarray2[j] = array[midIndex + 1 + j];

  console.log(subarray1, subarray2);

  // let k = startIndex;
  // let i = startIndex;
  // let j = midIndex + 1;

  // while (i <= midIndex && j <= endIndex) {
  //   if (temporaryArray[i] < temporaryArray[j]) {
  //     temporaryArray[k++] = array[i++];
  //   } else {
  //     temporaryArray[k++] = array[j++];
  //   }
  // }

  // while (i <= midIndex) {
  //   temporaryArray[k++] = array[i++];
  // }

  // while (j <= endIndex) {
  //   temporaryArray[k++] = array[j++];
  // }
  // console.log(array, temporaryArray);
}

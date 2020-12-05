// https://www.hackerrank.com/challenges/minimum-swaps-2/problem

function minimumSwaps(arr) {
  let minSwaps = 0;
  for (let i = 0; i < arr.length; i++) {
    const correctVal = i + 1;
    if (arr[i] !== correctVal) {
      const correctValIndex = arr.indexOf(correctVal, i);
      arr[correctValIndex] = arr[i];
      arr[i] = correctVal;
      minSwaps++;
    }
    console.log(arr);
  }

  return minSwaps;
}

const testArr = [7, 1, 3, 2, 4, 5, 6];

console.log(minimumSwaps(testArr));
// 5

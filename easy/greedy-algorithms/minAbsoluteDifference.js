// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

function minimumAbsoluteDifference(arr) {
  let minAD = Infinity;
  arr.sort().forEach((num, ind, arr) => {
    if (ind < arr.length - 1) {
      const pairDiff = Math.abs(num - arr[ind + 1]);
      minAD = pairDiff < minAD ? pairDiff : minAD;
    }
  });
  return minAD;
}

const test = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];

console.log(minimumAbsoluteDifference(test));
// 1

// https://www.hackerrank.com/challenges/2d-array/problem

function hourglassSum(a) {
  let highestSum = -Infinity;

  for (let i = 0; i < 16; i++) {
    const r = Math.floor(i / 4);
    const c = i % 4;
    const hourglassSum =
      a[r][c] +
      a[r][c + 1] +
      a[r][c + 2] +
      a[r + 1][c + 1] +
      a[r + 2][c] +
      a[r + 2][c + 1] +
      a[r + 2][c + 2];
    highestSum = hourglassSum > highestSum ? hourglassSum : highestSum;
  }
  return highestSum;
}

const testArr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(testArr));
// 19

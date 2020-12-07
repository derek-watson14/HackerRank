// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function rotLeft(a, d) {
  const rotatedArr = [];
  const indexChange = a.length - d;
  a.forEach((item, index) => {
    rotatedArr[(index + indexChange) % a.length] = item;
  });
  return rotatedArr;
}

const testArr = [1, 2, 3, 4, 5];
const testRotation = 4;

console.log(rotLeft(testArr, testRotation));
// [5, 1, 2, 3, 4]

// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
  return ar.reduce((acc, cur) => acc + cur);
}

const test = [1, 2, 3, 4, 10, 11];

console.log(simpleArraySum(test));
// 31

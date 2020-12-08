// https://www.hackerrank.com/challenges/luck-balance/problem

function luckBalance(k, contests) {
  let luckBalance = 0;
  contests
    .filter((con) => {
      if (con[1] === 0) {
        luckBalance += con[0];
        return false;
      } else {
        return true;
      }
    })
    .sort((a, b) => (a[0] > b[0] ? -1 : 1))
    .forEach((con, ind) => (luckBalance += ind < k ? con[0] : -con[0]));
  return luckBalance;
}

const testK = 3;
const testContests = [
  [5, 1],
  [2, 1],
  [1, 1],
  [8, 1],
  [10, 0],
  [5, 0],
];

console.log(luckBalance(testK, testContests));
// 29

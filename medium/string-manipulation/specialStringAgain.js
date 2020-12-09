// https://www.hackerrank.com/challenges/special-palindrome-again/problem

// ! TOO SLOW
function substrCount(n, s) {
  let count = n;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= n - i; j++) {
      const subStr = s.slice(j, j + i);
      const regex = new RegExp(`^${subStr[0]}*$`);
      if (subStr.match(regex)) {
        count++;
      } else if (i % 2) {
        const mid = Math.ceil(subStr.length / 2);
        const firstHalf = subStr.slice(0, mid - 1);
        const secondHalf = subStr.slice(mid);
        if ((firstHalf + secondHalf).match(regex)) {
          count++;
        }
      }
    }
  }
  return count;
}

const testN = 8;
const testS = 'mnonopoo';

console.log(substrCount(testN, testS));
// 12

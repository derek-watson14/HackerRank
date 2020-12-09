// https://www.hackerrank.com/challenges/special-palindrome-again/problem

// ! TOO SLOW
function substrCountOld(n, s) {
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

// Python answer translated to JS
function substrCount(n, s) {
  const tups = [];
  let count = 0;
  let cur = null;

  for (let i = 0; i < n; i++) {
    if (s[i] === cur) {
      count += 1;
    } else {
      if (cur) {
        tups.push([cur, count]);
      }
      cur = s[i];
      count = 1;
    }
  }
  tups.push([cur, count]);

  let answer = 0;

  tups.forEach((tup) => {
    answer += Math.floor((tup[1] * (tup[1] + 1)) / 2);
  });

  for (let i = 1; i < tups.length - 1; i++) {
    if (tups[i - 1][0] === tups[i + 1][0] && tups[i][1] === 1) {
      answer += Math.min(tups[i - 1][1], tups[i + 1][1]);
    }
  }

  return answer;
}

const testN = 8;
const testS = 'mnonopoo';

console.log(substrCount(testN, testS));
// 12

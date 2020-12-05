// https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
  const asPerRepeat = (s.match(/a/g) || []).length;
  const repeatCount = Math.floor(n / s.length);
  const repeatAs = asPerRepeat * repeatCount;

  const remainderLength = n % s.length;
  const remainderAs = (s.slice(0, remainderLength).match(/a/g) || []).length;

  return repeatAs + remainderAs;
}

const testString = 'aba';
const testCharCount = 10;

console.log(repeatedString(testString, testCharCount));
// 7

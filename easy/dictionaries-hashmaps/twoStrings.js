// https://www.hackerrank.com/challenges/two-strings/problem

function twoStrings(s1, s2) {
  for (let char of s1.split('')) {
    if (s2.includes(char)) {
      return 'YES';
    }
  }
  return 'NO';
}

const test1 = 'hello';
const test2 = 'world';

console.log(twoStrings(test1, test2));
// YES

// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

function makeAnagram(a, b) {
  let deletions = 0;
  const getCharCount = (charCount, cur) => {
    charCount[cur] ? (charCount[cur] += 1) : (charCount[cur] = 1);
    return charCount;
  };
  const aCount = Array.from(a).reduce(getCharCount, {});
  const bCount = Array.from(b).reduce(getCharCount, {});

  for (let [char, freq] of Object.entries(aCount)) {
    if (bCount[char]) {
      deletions += Math.abs(bCount[char] - freq);
      delete bCount[char];
    } else {
      deletions += freq;
    }
  }
  for (let [char, freq] of Object.entries(bCount)) {
    deletions += freq;
  }
  return deletions;
}

const testA = 'cde';
const testB = 'abc';

console.log(makeAnagram(testA, testB));
// 4

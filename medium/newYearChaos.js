// https://www.hackerrank.com/challenges/new-year-chaos/problem

function minimumBribes(q) {
  let minBribes = 0;

  for (let p = 0; p < q.length; p++) {
    const [pStartPos, pCurrentPos] = [q[p], p + 1];

    if (pStartPos - pCurrentPos > 2) {
      console.log('Too chaotic');
      return;
    } else {
      for (let j = Math.max(0, pStartPos - 2); j < p; j++) {
        const jStartPos = q[j];
        minBribes += jStartPos > pStartPos ? 1 : 0;
      }
    }
  }
  console.log(minBribes);
}

const testStateA = [1, 2, 5, 3, 7, 8, 6, 4];
const testStateB = [5, 1, 2, 3, 7, 8, 6, 4];

const origStateX = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(minimumBribes(testStateA));
// 7

console.log(minimumBribes(testStateB));
// Too chaotic

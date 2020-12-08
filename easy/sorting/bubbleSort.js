// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem

function countSwaps(a) {
  const n = a.length;
  let swaps = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (a[j] > a[j + 1]) {
        const temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        swaps++;
      }
    }
  }
  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}

const test = [6, 4, 1];

countSwaps(test);
// Array is sorted in 3 swaps.
// First Element: 1
// Last Element: 6

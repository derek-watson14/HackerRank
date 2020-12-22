// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function miniMaxSum(arr) {
  let lowest = Infinity;
  let lowIndex = null;
  let highest = 0;
  let highIndex = null;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
      lowIndex = i;
    }
    if (arr[i] > highest) {
      highest = arr[i];
      highIndex = i;
    }
  }

  const highSum = [...arr.slice(0, highIndex), ...arr.slice(highIndex + 1)]
    .reduce((acc, cur) => acc + cur)
  const lowSum = [...arr.slice(0, lowIndex), ...arr.slice(lowIndex + 1)]
    .reduce((acc, cur) => acc + cur)

  console.log(`${highSum} ${lowSum}`)
}

const test = [1, 2, 3, 4, 5];

miniMaxSum(test);
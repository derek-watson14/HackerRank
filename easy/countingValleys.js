// https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(steps, path) {
  let valleyCount = 0;
  let currentElevation = 0;
  for (let step of path) {
    if (step === 'U') {
      currentElevation++;
      if (currentElevation === 0) {
        valleyCount++;
      }
    } else if (step === 'D') {
      currentElevation--;
    }
  }
  return valleyCount;
}

const testSteps = 8;
const testPath = ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'];

console.log(countingValleys(testSteps, testPath));
// 1

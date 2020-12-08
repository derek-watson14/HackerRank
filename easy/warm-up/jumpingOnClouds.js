// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
  const goal = c.length - 1;
  let position = 0;
  let jumps = 0;
  while (position < goal) {
    if (c[position + 2] === 0) {
      position += 2;
    } else if (c[position + 1] === 0) {
      position++;
    }
    jumps++;
  }
  return jumps;
}

const test = [0, 1, 0, 0, 0, 1, 0];

console.log(jumpingOnClouds(test));
// 3

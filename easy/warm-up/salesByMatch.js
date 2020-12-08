// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
  const countSocksByColor = (inventory, color) => {
    inventory[color] ? inventory[color]++ : (inventory[color] = 1);
    return inventory;
  };
  const colorCount = Object.values(ar.reduce(countSocksByColor, {}));
  let totalPairs = 0;
  for (let color of colorCount) {
    totalPairs += Math.floor(color / 2);
  }
  return totalPairs;
}

const testNum = 9;
const testArray = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(testNum, testArray));
// 3

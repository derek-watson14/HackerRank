// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor

function whatFlavors(cost, money) {
  const costHashTable = {}
  cost.forEach((item, index) => {
    if (costHashTable[item]) {
      costHashTable[item].push(index + 1)
    } else {
      costHashTable[item] = [index + 1]
    }
  })
  for (let price of cost) {
    if (costHashTable[money - price]) {
      if (costHashTable[money - price].length > 1) {
        console.log(`${costHashTable[price][0]} ${costHashTable[money - price][1]}`)
        return
      } else if (money - price !== price) {
        console.log(`${costHashTable[price]} ${costHashTable[money - price]}`)
        return
      }
    }
  }
}

const testFlavors = [4, 3, 2, 5, 7];
const testMoney = 8;

whatFlavors(testFlavors, testMoney);
// 2 4
// Solution time complexity: O(2n) -> O(n)
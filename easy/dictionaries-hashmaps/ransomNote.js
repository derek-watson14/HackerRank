// https://www.hackerrank.com/challenges/ctci-ransom-note/problem

function checkMagazine(magazine, note) {
  for (let i = 0; i < note.length; i++) {
    if (magazine.includes(note[i])) {
      const wordIndex = magazine.indexOf(note[i]);
      magazine[wordIndex] = magazine[magazine.length - 1];
      magazine.pop();
    } else {
      console.log('No');
      return;
    }
  }
  console.log('Yes');
  return;
}

const testMag = ['two', 'times', 'three', 'is', 'not', 'four'];
const testNote = ['two', 'times', 'two', 'is', 'four'];

checkMagazine(testMag, testNote);
/// NO

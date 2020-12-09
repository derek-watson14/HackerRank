// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem

function isValid(s) {
  const charFreq = s.split('').reduce((charCount, cur) => {
    charCount[cur] ? charCount[cur]++ : (charCount[cur] = 1);
    return charCount;
  }, {});
  const freqObj = Object.values(charFreq).reduce((countCount, cur) => {
    countCount[cur] ? countCount[cur]++ : (countCount[cur] = 1);
    return countCount;
  }, {});
  const freqArr = Object.keys(freqObj);

  if (freqArr.length > 2) {
    // Too many different frequencies
    return 'NO';
  } else if (freqArr.length === 1) {
    // Only one frequency
    return 'YES';
  } else if (
    Math.abs(freqArr[0] - freqArr[1]) === 1 &&
    freqObj[Math.max(...freqArr)] === 1
  ) {
    // The seccond freq is only one higher, and there is only one instance thereof
    // so a single char can be deleted to make all the same freq
    return 'YES';
  } else if (
    freqObj[Math.min(...freqArr)] === 1 &&
    Math.min(...freqArr) === 1
  ) {
    // The lower is a single instance of freq 1 and can be deleted to make all one freq
    return 'YES';
  } else {
    return 'NO';
  }
}

const test = 'abcdefghhgfedecba';
const test2 =
  'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd';
const test3 = 'aabbbb';
console.log(isValid(test));
// YES
console.log(isValid(test2));
// YES
console.log(isValid(test3));
// NO

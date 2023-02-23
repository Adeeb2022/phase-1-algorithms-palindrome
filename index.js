function isPalindrome(word) {
  const letterArray = word.split('');
  const arrayJoin = letterArray.reverse().join('');
  if (word === arrayJoin) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
*/
// * Spliting word to an array of letters
// * Reversing the array of letters
// * Joining letters after reversing them
// * Comparing the new words to the original one
/*
  Add written explanation of your solution here
*/
isPalindrome('word')
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

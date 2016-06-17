// Check to see if an input is a palindrome

// Check assumptions:
// "" ==> True
// 1 ==> True
// "stuff" ==> False
// 123 ==> False
// "lol" ==> True
// "1001" ==> True

// 'What-If' questions:
// What about differences in uppercase/lowercase?
//    i.e. "Lol" ==> False ?
// Punctuation?
//    i.e. "Rise to vote, sir" ==> True?

function isPalindrome(input) {
  let palindrome = true;
  let characters = input.toString().split('');
  let reversed = input.toString().split('').reverse();
  for (let i=0; i < characters.length; i++) {
    if (characters[i] !== reversed[i]) {
      palindrome = false;
    }
  }
  return palindrome;
}

console.log(isPalindrome("lolol"));
console.log(isPalindrome("test"));
console.log(isPalindrome(101));

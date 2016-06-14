// Write a function that determines
// whether a string contains all unique characters

// Check assumptions:
// "" ==> True
// "A" ==> True
// "ABC" ==> True
// "TEST" ==> False

function uniqueChars(string) {
  let result = true;
  let chars = string.split('');
  for (let i=0; i < chars.length; i++) {
    for (let j=i+1; j < chars.length; j++) {
      if (chars[i] === chars[j]) {
        return false;
      }
    }
  }
  return result;
}

console.log(uniqueChars("abcdefg"));
console.log(uniqueChars("test"));

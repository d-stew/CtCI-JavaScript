// Write a function that determines
// whether a string contains all unique characters

// Check assumptions:
// "" ==> True
// "A" ==> True
// "ABC" ==> True
// "TEST" ==> False


// SOLUTION #1
function uniqueChars(string) {
  let chars = string.split('');
	if (chars.length > 256) return false;
  for (let i=0; i < chars.length; i++) {
    for (let j=i+1; j < chars.length; j++) {
      if (chars[i] === chars[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(uniqueChars("abcdefg"));
console.log(uniqueChars("test"));

// SOLUTION #2
function uniqueChars(string) {
	//can't have unique characters if string length is greater than the # of possible characters
	if (string.length > 256) return false;
	for (var i = 0; i < string.length; i++) {
		if (string.indexOf(str[i]) !== string.lastIndexOf(str[i]) || string.lastIndexOf(str[i]) !== i) {
			return false;
		}
	}
	return true;
}

// Write a function to replace all space in a string with '%20'

// SAMPLE INPUTS/OUTPUTS
// "string" ==> "string"
// "my string" ==> "my%20string"
// "this is my string" ==> "this%20is%20my%20string"
// " " ==> "%20"

// WHAT IFs
// What if string is repeating spaces? Do we want "%20%20%20%20..." etc?

function replaceSpaces(string) {
  let words = string.split(" ");
  return words.join("%20");
}

console.log(replaceSpaces("string"));
console.log(replaceSpaces("my string"));
console.log(replaceSpaces("this is my string"));
console.log(replaceSpaces("                  "));

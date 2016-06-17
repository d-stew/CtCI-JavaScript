// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1.
// (i.e., “waterbottle” is a rotation of “erbottlewat”).

// SOLUTION #1

function isRotation(string1, string2) {
  let checker = string1 + string1;
  if (checker.includes(string2)) return true;
  return false
}

console.log(isRotation("erbottlewat", "waterbottle"));
console.log(isRotation("ebotlewale", "waterbottle"));
console.log(isRotation("etst", "test"));
console.log(isRotation("estt", "test"));

// SOLUTION #2

function isRotation(string1,string2) {
  let words = [];
  let chars = string1.split('');
  for (let i=0; i < chars.length; i++) {
    let a = chars.shift();
    chars.push(a);
    let word = chars.join('');
    words.push(word);
  }
  if(words.includes(string2)) return true;
  return false;
}

console.log(isRotation("erbottlewat", "waterbottle"));
console.log(isRotation("ebotlewale", "waterbottle"));
console.log(isRotation("etst", "test"));
console.log(isRotation("estt", "test"));

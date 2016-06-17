// SAMPLE INPUTS/OUTPUTS
// "grow" ==> "grow"
// "test" ==> "tes"
// "testtttttteeeeesssss" ==> "tes"

// WHAT-IFS
// Capitals? ==> .toLowercase();
// Numbers & Strings?
// Empty string? ==> ""

// SOLUTION #1
function removeDupes(string) {
  string = string.toString().toLowerCase();
  let chars = string.split("");
  for (let i=0; i < chars.length; i++) {
    for (let j=i+1; j < chars.length; j++) {
      while (chars[i] === chars[j]) {
        chars.splice(j,1);
      }
    }
  }
  return chars.join("");
}

console.log(removeDupes("grow"));
console.log(removeDupes("test"));
console.log(removeDupes("testtteeeessssss"));
console.log(removeDupes("TtTTTtteeeeesssstttttt"));
console.log(removeDupes(11122344444445));

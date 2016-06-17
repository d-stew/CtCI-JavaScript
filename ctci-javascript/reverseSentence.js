// Write a function that will reverse the words in a sentence

// "this is a sentence" ==> "sentence a is this"

function reverseSentence(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverseSentence("this is a sentence"));
console.log(reverseSentence("bah bah black sheep"));

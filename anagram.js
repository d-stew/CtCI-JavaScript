// SAMPLE INPUTS/OUTPUTS
// "meat", "team" ==> true
// "meat", "teem" ==> false
// "", "" ==> true
// "a","a" ==> true

// WHAT-IF?
// Punctuation?
// Lower/upper case?

// // Solution #1
function anagram(string1, string2) {
  let result = true;
  if (string1.length !== string2.length) {
    return false
  }
  for (let i=0; i < split1.length; i++) {
    if (!split2.includes(split1[i])) {
      return false
    }
  }
  return result;
}

// Solution #2
function anagram(string1, string2) {
  let split1 = string1.split('').sort(),
      split2 = string2.split('').sort();
  for (let i=0; i < split1.length; i++) {
    if (split1[i] !== split2[i]) {
      return false;
    }
  }
  return true;
}

console.log(anagram("meat","team"));
console.log(anagram("meat","teem"));

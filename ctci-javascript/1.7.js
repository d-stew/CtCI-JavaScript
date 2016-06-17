// Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column is set to 0

function zeros(matrix) {
  let solution = [];
  let outerZeroIndex = [];
  let innerZeroIndex = [];
  matrix.forEach(function(array, i) {
    array.forEach(function(element, ei) {
      if (element === 0) {
        outerZeroIndex.push(i);
        innerZeroIndex.push(ei);
      }
    })
  })
    outerZeroIndex.forEach(function(zero) {
      solution[zero].every(0);
    })
    solution.map(function(array,i) {
      innerZeroIndex.forEach(function(element){
        array[element] = 0;

      })
    })

  return solution;
}

console.log(zeros([[1,2,3],[8,0,2]]));

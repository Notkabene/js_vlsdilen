// https://jsfiddle.net/Notkabene/6shtmc92/5/

let matrixItem = []
let matrix = []
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    matrixItem[j] = j+1
  }
  matrix.push(matrixItem)
}

console.log(matrix)
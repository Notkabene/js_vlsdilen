//С помощью циклов for вам необходимо создать матрицу 3x5.
// получился массив из 3-х элементов, внутри которого хранятся массивы, каждый из которых имеет по 5 элементов.
// Это можно реализовать с помощью 2-х циклов for. Внутрь одного цикла for необходимо поместить еще один цикл.

let matrixItem = []
let matrix = []
for (let i = 0; i < 3; i++) {
  matrix.push(matrixItem)
  for (let i = 0; i < 5; i++) {
    matrixItem.push(i+1)

  }
}


console.log(matrixItem)
//
//
console.log(matrix)
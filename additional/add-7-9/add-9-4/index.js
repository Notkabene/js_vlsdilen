const matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
];
let test = []
for (const item of matrix) {
  console.log(item)
   test = matrix.concat(item)
}

console.log(test)
// console.log(test)
// Вам необходимо сделать из элементов вложенных массивов один массив. Итоговый результат должен выглядеть следующим образом: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].
// Необходимо, чтобы в решении использовался метод concat либо spread-оператор
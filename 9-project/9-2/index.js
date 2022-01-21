let numbers= []
let sum = 0
function getSumOfSequence (number) {
  for (let i = 0; i < number; i++) {
    numbers.push(i+1)
  }
  const firstElements = numbers[0]
  const lastElements = numbers[number-1]
  sum = firstElements + lastElements

  alert(sum)

}

getSumOfSequence(5) // = 6 [1, 2, 3, 4, 5], 1+5=6
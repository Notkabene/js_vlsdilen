
// Оставила все console.log, чтобы тебе было удобно смотреть все 4 итого

const numbers = [10, 4, 100, -5, 54, 2];

// 1. Через цикл for
let sumFor = 0
for (let i = 0; i < numbers.length; i++) {
  sumFor = sumFor + numbers[i]**3

}

console.log('sumFor:', sumFor)

// 2. Через цикл for of
let sumForOf = 0
for (const number of numbers) {
  sumForOf = sumForOf + number**3
}
console.log('sumForOf:', sumForOf)



// 3. Через метод forEach
let sumForEach = 0
numbers.forEach(number => {
  sumForEach = sumForEach + number**3
})

console.log('sumForEach:', sumForEach)



// 4. Через метод reduce
const sumReduce = numbers.reduce((acc, number) => {

  return acc + number**3
}, 0)

console.log('sumReduce:', sumReduce)
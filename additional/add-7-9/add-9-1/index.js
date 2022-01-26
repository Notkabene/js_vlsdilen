const goals = [8, 1, 1, 3, 15, 2, -1, 5];


// 1. Самый результативный матч по количеству голов.
let ascendingSortGoals  = []
ascendingSortGoals = goals.sort((a, b) => {
  return b - a
})
let bestOfGoals = ascendingSortGoals[0]
//


// 2. Самые нерезультативные игры



// 3. Общее количество голов за сезон (20)
let sumOfGoals = 0
let quantityOfGoals = 0
goals.forEach((item, index) => {
  if(item != -1) {
    sumOfGoals += item
    quantityOfGoals +=1
  }
})
console.log(`Общее количество голов за сезон равно ${sumOfGoals}`)


// 4. Были ли автоматические поражения
if (goals.includes(-1)) {
  console.log('Были автоматические поражения: да')
} else {
  console.log('Были автоматические поражения: нет')
}


// 5. Среднее количество голов за матч
let averageOfGoals = Math.round(sumOfGoals/quantityOfGoals)
console.log(`Среднее количество голов за матч равно ${averageOfGoals}. Сделано округление до ближайшего целого`)


// 6. Отсортируйте голы в порядке возрастания
let sortGoals = []
sortGoals = sortGoals.concat(goals)
sortGoals.sort((a,b) => {
  if (a > b) {
    return 1
  }
  if (a < b) {
    return -1
  }
  return 0
})

console.log(`Отсортированные голы: ${sortGoals}. Из задания не поняла надо ли удалять значение -1`)


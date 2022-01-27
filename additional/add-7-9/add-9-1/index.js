// РЕШЕНО
const goals = [8, 1, 1, 3, 2, -1, 5];
let newGoals = []
newGoals.concat(goals)

// 1.
const ascendingSortGoals = newGoals.sort((a, b) => {
  return b - a
})

let bestOfGoals = ascendingSortGoals[0]

let numberOfBestGoals = 0

for (let i = 0; i < goals.length; i++) {
  if(goals[i] === bestOfGoals) {
    numberOfBestGoals = i + 1
  }
}

alert(`Самый результативный матч был под номером ${numberOfBestGoals}. В нем было забито ${bestOfGoals} гол(ов).
Добавила +1 к порядковому номеру матча,так как счет у обычных людей с 1, а не с 0`)


// 2.
const filterGoals = goals.filter( item => item != -1)

const sortGoals = filterGoals.sort((a,b) => {
  if (a > b) {
    return 1
  }
  if (a < b) {
    return -1
  }
  return 0
})

const worseOfGoal = sortGoals[0]
const numberWorseOfGoal = []
goals.map((item, index) => {
  if(item === worseOfGoal) {
    numberWorseOfGoal.push(index)
  }
})

alert(`Самые нерезультативные матчи были под номерами ${numberWorseOfGoal.join(', ')}. В каждом из них было забито по ${worseOfGoal} мячу(а).`)


// 3.
let sumOfGoals = 0
let quantityOfGoals = 0
filterGoals.forEach((item, index) => {
  sumOfGoals += item
  quantityOfGoals +=1
})
alert(`Общее количество голов за сезон равно ${sumOfGoals}`)


// 4.
if (goals.includes(-1)) {
  alert('Были автоматические поражения: да')
} else {
  alert('Были автоматические поражения: нет')
}


// 5.
let averageOfGoals = Math.round(sumOfGoals/quantityOfGoals)
alert(`Среднее количество голов за матч равно ${averageOfGoals}. Сделано округление до ближайшего целого`)


// 6.

alert(`Отсортированные голы: ${sortGoals}`)


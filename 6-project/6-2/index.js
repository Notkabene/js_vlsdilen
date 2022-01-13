const answer1 = 4
const answer2 = 4
const answer3 = 1
const answer4 = 12
const answer5 = 6

let correctAnswers = 0
let incorrectAnswers = 0

const question1 = prompt('Сколько будет 2 + 2?')
if (Number(question1) === answer1) {
  alert('Ответ Верный')
  correctAnswers +=1
} else {
  alert('Ответ Неверный')
  incorrectAnswers +=1
}

const question2 = prompt('Сколько будет 2 * 2?')
if (Number(question2) === answer2) {
  alert('Ответ Верный')
  correctAnswers +=1
} else {
  alert('Ответ Неверный')
  incorrectAnswers +=1
}

const question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?')
if (Number(question3) === answer3) {
  alert('Ответ Верный')
  correctAnswers +=1
} else {
  alert('Ответ Неверный')
  incorrectAnswers +=1
}

const question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?')
if (Number(question4) === answer4) {
  alert('Ответ Верный')
  correctAnswers +=1
} else {
  alert('Ответ Неверный')
  incorrectAnswers +=1
}

const question5 = prompt('Сколько будет 2 + 2 * 2?')
if (Number(question5) === answer5) {
  alert('Ответ Верный')
  correctAnswers +=1
} else {
  alert('Ответ Неверный')
  incorrectAnswers +=1
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`)

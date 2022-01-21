let clientsEstimations = []

function askClientToGiveEstimation () {
  let answer = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'))
  if(answer >= 1 && answer <= 10) {
    clientsEstimations.push(answer)
  }
}

for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation ()
}

let notGoodEstimations = clientsEstimations.filter(rating => rating <= 5)
let goodEstimations  = clientsEstimations.filter(rating => rating > 5)

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`)



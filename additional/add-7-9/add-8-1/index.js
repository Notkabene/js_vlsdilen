// https://jsfiddle.net/Notkabene/6shtmc92/
let checkQuestionAnswer = (question, correctAnswer) => {
  let answer = prompt(question).trim().toLowerCase()
  correctAnswer = correctAnswer.toLowerCase()

  if (answer === correctAnswer) {
    alert('Ответ верный')
  } else {
    alert('Ответ неверный')
  }
}


checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');

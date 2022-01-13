let userText = prompt('Введите текст')
let wordFromText = prompt('Введите слово из текста')
userText = userText.trim()
wordFromText = wordFromText.trim()

let indexOfWord = userText.indexOf(wordFromText)
let string = userText.slice(0, indexOfWord)
 alert(`Результат: ${string}`)
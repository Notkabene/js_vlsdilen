let password = prompt('Введите пароль')
let passwordLength = password.length
console.log(passwordLength);
let bigLetter = password.match(/[A-Z]/)
let hasNumber = password.match(/\d/g)
let correctLetter = password.match(/^[0-9a-zA-Z]+$/)

if (bigLetter && hasNumber && correctLetter && passwordLength >=3 && passwordLength <= 20) {
  alert('Пароль валидный. Добро пожаловать в аккаунт!')
} else {
  alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
}



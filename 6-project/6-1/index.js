let existedUserLogin = 'the_best_user'
let existedUserPassword = '12345678'

let userLogin = prompt('Введите логин')
let userPassword = prompt('Введите пароль')

userLogin = userLogin.trim()
userPassword = userPassword.trim()

userLogin === existedUserLogin && userPassword === existedUserPassword 
? alert(`Добро пожаловать, ${userLogin}!`)
: alert('Логин и (или) Пароль введены неверно!')
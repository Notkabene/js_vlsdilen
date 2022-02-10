// https://jsfiddle.net/Notkabene/p36h8tca/
const formUser = document.createElement('form')
const labelName = document.createElement('label')
const labelPassword = document.createElement('label')
const buttonSubmit = document.createElement('button')

formUser.className = 'create-user-form'
formUser.append(labelName)
formUser.append(labelPassword)
formUser.append(buttonSubmit)

buttonSubmit.innerHTML = 'Подтвердить'
buttonSubmit.setAttribute('type', 'submit')

labelName.innerHTML = '<input type="text" name="userName" placeholder="Введите ваше имя">'
labelName.insertAdjacentHTML('afterBegin', 'Имя')

labelPassword.innerHTML = '<input type="password" name="password" placeholder="Придумайте Пароль">'
labelPassword.insertAdjacentHTML('afterBegin', 'Пароль')

document.body.append(formUser)

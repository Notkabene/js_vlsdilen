const myName = 'Лена'
const programmingLanguage = "Javascript"
const courseCreatorName = "Владилена Минина"
const reasonText = "мне нравится разработка"
const numberOfMonth = "5"

let myInfoText = `
Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`

console.log(myInfoText);

console.log(myInfoText.replaceAll('Javascript', 'JAVASCRIPT'));
console.log(myInfoText.length);
console.log(myInfoText.slice(1, 2), myInfoText.slice(-1,));


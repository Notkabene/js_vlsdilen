// function declaration
function getName1 (name) {
   return `Имя равно ${name}`
}
console.log(getName1('Lena'));

// function expression
const getName2= function  (name) {
   return `Имя равно ${name}`
}
console.log(getName2('Katya'));

// стрелочная
const getName3 = name => {
  return `Имя равно ${name}`
}
console.log(getName3('Sveta'));

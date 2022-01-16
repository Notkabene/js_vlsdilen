let javaScriptDescription = "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

let lengthDescription =  Math.floor(javaScriptDescription.length/2)

javaScriptDescription = javaScriptDescription.slice(0, lengthDescription)
javaScriptDescription = javaScriptDescription.replaceAll('а', 'А').replace(/\s/g, '')
javaScriptDescription = javaScriptDescription.repeat(3)

let symbolDescription = javaScriptDescription.charAt(Math.floor(javaScriptDescription.length/2))

console.log(symbolDescription)
console.log(javaScriptDescription)

// 1

console.log(Number(' 1 2 3 4 5')); // Будет выведено NaN
// 2
console.log(Number('1234 5')); // Будет выведено NaN
// 3
console.log(Number('12345')); // Будет выведено 12345
// 4
console.log(String(false)); // Будет выведено 'false'
// 5
console.log(Boolean(0000000)); // Будет выведено false
// 6
console.log(Boolean(0.0000001)); // Будет выведено true
// 7
console.log(String(undefined)); // Будет выведено 'undefined'
// 8
console.log(Number('100f')); // Будет выведено NaN
// 9
console.log(Number('100')); // Будет выведено 100
// 10
console.log(Number('000001')); // Будет выведено 1

console.log('Уррра! Я всё ответила верно!');
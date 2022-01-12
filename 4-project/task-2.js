console.log(Number('10'), typeof Number('10')); // явное

//1
console.log(+'50', typeof Number(+'50')); // НЕ явное
//2            
console.log(Number('100'), typeof Number(Number('100'))); // явное
//3
console.log('' + 1, typeof Number('' + 1));  // НЕ явное
//4
console.log(String(1), typeof Number(String(1))); // явное
//5
console.log(Boolean(0), typeof Number(Boolean(0))); // явное
//6
console.log(+'001', typeof Number(+'001'));  // НЕ явное
//7
console.log(1 + '', typeof Number(1 + ''));  // НЕ явное
//8
console.log(Boolean(1), typeof Number(Boolean(1))); // явное
//9
console.log(String(001), typeof Number(String(001))); // явное
//10
console.log(Number('Hello World'), typeof Number(Number('Hello World'))); // явное


// console.log
console.log('Преобразование console.log');
console.log(Number(console.log), typeof Number(console.log));
console.log(String(console.log), typeof String(console.log));
console.log(Boolean(console.log), typeof Boolean(console.log));

// { name: 'Maxim' }
console.log('Преобразование { name: "Maxim" }');
console.log(Number({ name: 'Maxim' }),typeof Number({ name: 'Maxim' }));
console.log(String({ name: 'Maxim' }), typeof String({ name: 'Maxim' }));
console.log(Boolean({ name: 'Maxim' }), typeof Boolean({ name: 'Maxim' }));

// Number
console.log('Преобразование Number');
console.log(Number(Number), typeof Number(Number));
console.log(String(Number), typeof String(Number));
console.log(Boolean(Number), typeof Boolean(Number));

// ''
console.log('Преобразование ""');
console.log(Number(''), typeof Number(''));
console.log(String(''), typeof String(''));
console.log(Boolean(''), typeof Boolean(''));

// 0
console.log('Преобразование 0');
console.log(Number(0), typeof Number(0));
console.log(String(0), typeof String(0));
console.log(Boolean(0), typeof Boolean(0));

// -10
console.log('Преобразование -10');
console.log(Number(-10), typeof Number(-10));
console.log(String(-10), typeof String(-10));
console.log(Boolean(-10), typeof Boolean(-10));

// '-105'
console.log('Преобразование "-105"');
console.log(Number('-105'), typeof Number('-105'));
console.log(String('-105'), typeof String('-105'));
console.log(Boolean('-105'), typeof Boolean('-105'));

// Symbol('key')
console.log('Преобразование Symbol("key")');
console.log(Number(Symbol('key')), typeof Number(Symbol('key')));
console.log(String(Symbol('key')), typeof String(Symbol('key')));
console.log(Boolean(Symbol('key')), typeof Boolean(Symbol('key')));



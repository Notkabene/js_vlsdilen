let numberType = 42
let stringType = 'Строка'
let booleanType = true
let nullType = null
let undefinedType = undefined
let bigintType = 100n
let symbolType = Symbol('symbol')
let objectType = {
  key: 'value'
}

console.log(Number(numberType), Boolean(numberType), String(numberType));
console.log(Number(stringType), Boolean(stringType), String(stringType));
console.log(Number(booleanType), Boolean(booleanType), String(booleanType));
console.log(Number(nullType), Boolean(nullType), String(nullType));
console.log(Number(undefinedType), Boolean(undefinedType), String(undefinedType));
console.log(Number(bigintType), Boolean(bigintType), String(bigintType));
console.log(Number(symbolType), Boolean(symbolType), String(symbolType));
console.log(Number(objectType), Boolean(objectType), String(objectType));
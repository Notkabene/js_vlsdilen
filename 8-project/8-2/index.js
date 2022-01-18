const getSumOfNumbers = (number, type = 'odd') => {
  let sum = 0
  
  if (type === 'odd') {
    for (let i = 1; i <= number; i+= 1 ) {
      if (i % 2 != 0) {
        sum += i
      }
    }

  } else if (type === 'even') {
    for (let i = 1; i <= number; i+= 1 ) {
      if (i % 2 == 0) {
        sum += i
      }
    }

  } else  {
    for (let i = 1; i <= number; i+= 1 ) {
      sum += i
    }
  }

  return sum
}

console.log(getSumOfNumbers(10, 'odd'));
console.log(getSumOfNumbers(10, 'even'));
console.log(getSumOfNumbers(10, ''));
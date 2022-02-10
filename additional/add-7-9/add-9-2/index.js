// НЕТ
const getMathResult = expression => {
  const lengthExpression = expression.length




  if(lengthExpression < 3) {
    console.log('Ошибка')

  } else if(lengthExpression > 3) {
    expression.map((item, index) => {
      // console.log(item === '+')
      console.log(!isNaN(Number(item)))
      // isNaN(Number(item))
      if(!isNaN(Number(item))) {
        expression.splice(item)
      }
      console.log(expression)

    })

  } else {

  }
}

console.log(getMathResult(['200', '+', 300]))












getMathResult(['200', '+', 300]); // 500
// getMathResult(['20', '-', '5']); // 15
// getMathResult([100, '/', 100]); // 1
// getMathResult([2, '-', 2]); // 0
// getMathResult(['1', '**', 1]); // 'Ошибка'
// getMathResult(['5', '>', '10']); // false
// getMathResult(['5', '<', '10']); // true
// getMathResult(['1', '=', 1]); // true

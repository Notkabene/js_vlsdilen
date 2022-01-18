const getDivisorsCount = (number = 1) => {
  if (number < 0 || !Number.isInteger(number)) {
    alert('number должен быть целым числом и больше нуля!')
  } else {
    let divisorsCount = 0
    for (let i = 1; i <= number; i+= 1 ) {
      if (number % i == 0) {
        divisorsCount++
        
      }
      
    }
    console.log(divisorsCount)
  }
}



getDivisorsCount(4) // Вернет 3 (делители - 1, 2, 4)
getDivisorsCount(5) // Вернет 2 (делители - 1, 5)
getDivisorsCount(12) // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
getDivisorsCount(30) // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)





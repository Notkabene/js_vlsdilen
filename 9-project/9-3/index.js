const coffees = ['Latte', 'Cappuccino', 'Americano'];

const coffeeName = prompt('Поиск кофе по названию:').trim().toLowerCase()

const coffeesLowerCase = coffees.map((coffee)=> {
  return coffee.toLowerCase()
})

const ratingOfCoffee = coffeesLowerCase.findIndex((coffee)=> {
  return coffee === coffeeName
})

if(ratingOfCoffee === -1) {
  alert('К сожалению, такого вида кофе нет в наличии')
} else {
  alert(`Держите ваш любимый кофе ${coffeeName}. Он ${ratingOfCoffee + 1}-й по популярности в нашей кофейне.`)
}


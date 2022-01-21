const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]

const newPrice = prices.map(price => {
  return price + 0.5
})



coffees.forEach((coffee, index) => {
  alert(`Кофе ${coffee} сейчас стоит ${newPrice[index]} евро`)
})
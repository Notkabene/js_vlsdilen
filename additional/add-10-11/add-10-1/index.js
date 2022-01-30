// https://jsfiddle.net/Notkabene/z79kLt14/2/
const getTotalPriceOfShoppingBag = (shoppingBag) => {

  const itemsSumDiscount = shoppingBag.map(item => {
    const itemQuantity = item.quantity
    const itemProduct = item.product
    const itemPrice = groceries[itemProduct].price
    const itemDiscount = groceries[itemProduct].discount
    const itemSum = itemPrice * itemQuantity
    const itemSumDiscount = itemSum - itemSum * itemDiscount / 100
    return itemSumDiscount
  })

  let sumItemsSumDiscount = itemsSumDiscount.reduce(function(sum, current) {
    return sum + current;
  }, 0);

  return sumItemsSumDiscount

}



const groceries = {
  "Orange Juice": {
    price : 1.5,
    discount: 10,
  },
  "Chocolate": {
    price : 2,
    discount : 0,
  },
  // more items...
}


//===========================================================================
//Посмотрите на возможно возвращаемое значение функции getTotalPriceOfShoppingBag:
const shoppingBag = [
   { product: 'Chocolate', quantity: 3 },
   { product: 'Orange Juice', quantity: 23 },
]

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
alert(`totalPrice: ${totalPrice}`); // Возвращает 37.05
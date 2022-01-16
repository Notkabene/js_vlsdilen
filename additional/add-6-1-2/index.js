const clientName = prompt('Введите имя клиента')

let clientSpentToday = prompt('Сколько клиент потратил сегодня?')
clientSpentToday = Number(clientSpentToday)


let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?')
clientSpentForAllTime = Number(clientSpentForAllTime)

let discount = 0

if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)) {
  alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.')
} else {
  if(clientSpentForAllTime < 100) {
    discount = 0
  }
  else if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10
  } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20
  } else {
    discount = 30
  }
  alert(`Вам предоставляется скидка в ${discount}%!`)
  
  clientSpentForAllTime = clientSpentForAllTime + clientSpentToday
  
  clientSpentToday = clientSpentForAllTime - clientSpentForAllTime * discount / 100

  alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);
}





const addDays = (date, days) => {
  const dateInMilliseconds = date.getTime()
  const daysInMilliseconds = days * 24 * 60 * 60 * 1000
  const newDaysInMilliseconds = dateInMilliseconds + daysInMilliseconds
  const newDate = new Date(newDaysInMilliseconds)
  alert(`Новая дата ${newDate}`)

}


addDays(new Date(2022,0, 30), 15)

// https://jsfiddle.net/Notkabene/9va612zf/5/
const getDateFormat = (date, separator) => {

  const dateFull = new Date(date)
  const dateYear = dateFull.getFullYear()
  let dateMonth = dateFull.getMonth() + 1
  let dateDate = dateFull.getDate()

  if(dateDate.length < 10) {
    dateDate = '0' + dateDate
  }

  if(dateMonth < 10) {
    dateMonth = '0' + dateMonth
  }

  const newFormatDate = dateDate + separator + dateMonth + separator + dateYear

  alert(newFormatDate)

}
const dateNow = new Date();
getDateFormat(dateNow, '.')

//https://jsfiddle.net/Notkabene/9va612zf/3/
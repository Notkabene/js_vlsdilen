const getDaysBeforeBirthday = (nextBirthdayDate => {
  const now = new Date();
  const nowMilliseconds = now.getTime()
  const differenceMilliseconds = nextBirthdayDate - nowMilliseconds
  const MillisecondsInSecond = 1000
  const SecondsInMinute = 60
  const minutesInHour = 60
  const HoursInDay = 24
  let leftUntilBirthday = differenceMilliseconds / MillisecondsInSecond / SecondsInMinute / minutesInHour / HoursInDay
  leftUntilBirthday = Math.floor(leftUntilBirthday)
  return leftUntilBirthday
})

const nextBirthdayDate = new Date(2022, 1, 25)
alert(`До моего дня Рождения осталось ${getDaysBeforeBirthday(nextBirthdayDate)} дней`)


// https://jsfiddle.net/Notkabene/9va612zf/2/

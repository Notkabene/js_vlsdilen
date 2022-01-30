// https://jsfiddle.net/Notkabene/4cn3u62e/1/
const allowVisa = ((peopleWithVisa) => {
  const peopleWithoutCriminal = peopleWithVisa.filter(item => {
    return !item.criminalRecord
  })

  const peopleGoodDate = peopleWithoutCriminal.filter(item => {
    const itemDateString = item.passportExpiration
    const itemDateArray = itemDateString.split('.')
    const itemDateDay = itemDateArray[0]
    const itemDateMonth = itemDateArray[1] - 1
    const itemDateYear = itemDateArray[2]
    const itemDateNewFormat = new Date(itemDateYear, itemDateMonth, itemDateDay)
    const today = new Date()
    return today < itemDateNewFormat
  })

  if(peopleGoodDate.length > 0) {
    return peopleGoodDate
  } else {
    return alert('Нет подходящих кандидатов')
  }


})



const peopleWithVisa = [
  {
    firstName: 'Stasia',
    lastName: 'Ward',
    criminalRecord: true,
    passportExpiration: '19.06.2023',
  },
  {
    firstName: 'Elliot',
    lastName: 'Baker',
    criminalRecord: false,
    passportExpiration: '04.06.2021',
  },
  {
    firstName: 'Leighann',
    lastName: 'Scott',
    criminalRecord: true,
    passportExpiration: '31.07.2022',
  },
  {
    firstName: 'Nick',
    lastName: 'Pop',
    criminalRecord: false,
    passportExpiration: '31.12.2021',
  },
];

const result = allowVisa(peopleWithVisa);
console.log('result', result);
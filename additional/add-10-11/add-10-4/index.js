//  https://jsfiddle.net/Notkabene/xat2u6qL/1/
const getWinner = ((applicants, winnerObject) => {
  const keysApplicants = Object.keys(applicants)
  const entriesApplicants = Object.entries(applicants)
  console.log()

  const sortKeysApplicants = keysApplicants.sort((a, b) => {
    return b - a
  })
  const maxRandom = sortKeysApplicants[0]
  const minRandom = Number(sortKeysApplicants.splice(-1))
  function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const winner = getRandomNumberInRange(minRandom, maxRandom)

  const itemWinner = entriesApplicants.filter(item =>{
    const itemNumber = Number(item[0])
    return itemNumber === winner
  })

  if(itemWinner.length > 0) {
    const winnerName = itemWinner[0][1].name
    const winnerAge = itemWinner[0][1].age
    const winnerPrize = winnerObject.prize
    let winnerInfo = `prize: '${winnerPrize}', name: '${winnerName}', age: ${winnerAge}`
    return winnerInfo
  } else{
    let winnerInfo = `Никто не выиграл`
    return winnerInfo
  }

})

const todayWinner = {
  prize: '10 000$',
}

const winnerApplicants = {
  '001': {
    name: 'Максим',
    age: 25,
  },
  '201': {
    name: 'Светлана',
    age: 20,
  },
  '304': {
    name: 'Екатерина',
    age: 35,
  },
}

const resultWinner = getWinner(winnerApplicants, todayWinner);
console.log('resultWinner', resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }
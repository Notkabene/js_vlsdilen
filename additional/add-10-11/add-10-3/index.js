// https://jsfiddle.net/Notkabene/8d64re9q/
const getKiller = ((suspectInfo, deadPeople) => {
  const suspectNames = Object.entries(suspectInfo)
  const NumberOfKilled = deadPeople.length
  let NameKiller = ''
  suspectNames.map(suspect => {
    const sawPeople = suspect[1]
    let sumOfMatches = 0

    sawPeople.map(sawPerson => {
      if (deadPeople.includes(sawPerson)) {
        return sumOfMatches += 1
      }
    })
    suspect.push(sumOfMatches)

    const suspectNumberOfKilled = suspect[2]

    if(suspectNumberOfKilled === NumberOfKilled) {
      NameKiller = suspect[0]
    }
  })
  alert(`Убийца - ${NameKiller}`)
})

getKiller(
    {
      'James': ['Jacob', 'Bill', 'Lucas'],
      'Johnny': ['David', 'Kyle', 'Lucas'],
      'Peter': ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
); // Убийца James

getKiller(
    {
      'Brad': [],
      'Megan': ['Ben', 'Kevin'],
      'Finn': [],
    },
    ['Ben']
); // Убийца Megan
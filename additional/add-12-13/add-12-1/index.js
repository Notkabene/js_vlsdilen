// https://jsfiddle.net/Notkabene/rstgzq64/1/
const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,

  checkChancesToWin (defenderObject) {
    let ourArmyChances = 0
    let combatUnits = Object.keys(defenderObject)
    let maximumChances = Object.keys(defenderObject).length
    this.ourChances = []


    combatUnits.forEach(unit => {
      if(this[unit] > defenderObject[unit]) {
        ourArmyChances +=1
      }
    })
    this.ourChances.push(ourArmyChances)
    this.ourChances.push(maximumChances)

    return this.ourChances
  },

  improveArmy () {
    this.archer +=5
    this.footSoldier +=5
    this.cavalry +=5
    this.artillery +=5
  },

  attack (defender) {
    this.checkChancesToWin(defender)
    let ourArmyChances = this.ourChances[0]
    let maximumChances = this.ourChances[1]
    let percentChances = ourArmyChances/maximumChances * 100

    if (percentChances < 70) {
      this.improveArmy()
      console.log(`Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`)
    } else {
      console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!')
    }
  }
}

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
}




attacker.checkChancesToWin(defender)



attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
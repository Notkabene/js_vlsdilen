// https://jsfiddle.net/Notkabene/z79kLt14/
const startGame = ((heroPlayer, enemyPlayer) => {

  const heatEnemy = (enemy) => {
    enemy.health = enemy.health - 10
    return enemy.health
  }
  const heatHero = (hero) => {
    hero.health = hero.health - 10
    return  hero.health
  }

  while (hero.health > 0 && enemy.health > 0) {
    function getRandomNumberInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomNumber = getRandomNumberInRange(0, 1)
    if (randomNumber === 0) {
      heatEnemy(heroPlayer)
    } else {
      heatHero(enemyPlayer)
    }
  }
  if(enemy.health === 0) {
    alert(`${hero.name} победил! У него осталось ${hero.health} здоровья`)
  } else {
    alert(`${enemy.name} победил! У него осталось ${enemy.health} здоровья`)
  }

})



const hero = {
  name: 'Batman',
  health: 100,
}

const enemy = {
  name: 'Joker',
  health: 100,
}
startGame(hero, enemy);



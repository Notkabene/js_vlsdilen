// https://jsfiddle.net/Notkabene/kc8tfxrg/

const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
    return 'Гав-Гав';
  }
}

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
    return 'Чик-чирик';
  }
}

function makeDomestic(isDomestic) {
  const animalName = this.name
  const animalType = this.type
  const animalSound = this.makeSound()
  console.log(`${animalType} по имени ${animalName} говорит ${animalSound}`)
  this.isDomestic = isDomestic

  // Этот console.log, чтобы показать обновленный объект. Из задания не совсем поняла так ли его показывать
  // Но показать нужно было
  console.log(this)

  return this

}

makeDomestic.bind(dog, true)()
makeDomestic.call(bird, false)
makeDomestic.apply(bird, [false])

/*
Сообщение в консоли: "Собака по имени Чарли говорит Гав-Гав"

domesticDog = {
  name: 'Чарли',
  type: 'Собака',
  isDomestic: true,
  makeSound() {
    return 'Гав-Гав'
  }
}
*/
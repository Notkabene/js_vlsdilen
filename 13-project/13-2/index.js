// https://jsfiddle.net/Notkabene/pwmz9s07/2/
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  compareAge(anotherPerson) {

    if(this.age > anotherPerson.age) {
      alert(`${this.name} старше, чем ${anotherPerson.name}`)
    } else if(this.age < anotherPerson.age) {
      alert(`${this.name} младше, чем ${anotherPerson.name}`)
    } else {
      alert(`${anotherPerson.name} и ${this.name} ровесники`)
    }

  }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим
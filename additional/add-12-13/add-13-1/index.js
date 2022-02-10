// https://jsfiddle.net/Notkabene/mrkvzp05/
class Dictionary {
  #name
  #words
  constructor(name) {
    this.#name = name
    this.#words = {}
  }
   get mainName() {
    return this.#name
   }

  set setMainName (name) {
    this.#name = name
  }

  get allWords() {
    return this.#words
  }

  add(word, description) {
    if(!(word in this.#words)) {
      let wordObj = {
          word: word,
          description: description,
      }
      this.addNewWord(word, wordObj)
    }
  }

  addNewWord(wordKey, wordObj) {
    this.#words[wordKey] = wordObj
  }

  remove(word) {
    delete this.#words[word]
  }

  get(word) {
    const allWords = Object.entries(this.#words)
    allWords.forEach(word => {
      const wordInfo = word[1]
    })
  }

  showAllWords() {
    const allWords = Object.entries(this.#words)
    allWords.forEach(word => {
      const wordName = word[0]
      const wordDescription = word[1].description

    })
  }

}


class HardWordsDictionary extends Dictionary {

  constructor(name) {
    super(name);
  }

  add(word, description) {

    if(!(word in this.allWords)) {
      let wordObj = {
        word: word,
        description: description,
        isDifficult: true
      }
      this.addNewWord(word, wordObj)
    }
  }

}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
// дилетант и квант
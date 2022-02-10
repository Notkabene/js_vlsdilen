// https://jsfiddle.net/Notkabene/pwmz9s07/6/
class Dictionary {
  constructor(name) {
    this.name = name
    this.words = {}
  }

  add(word, description) {
    if(!(word in this.words)) {
      this.words[word] = {
        word: word,
        description: description
      }
    }
  }

  remove(word) {
    delete this.words[word]
  }

  get(word) {
    const allWords = Object.entries(this.words)
    allWords.forEach(word => {
      const wordInfo = word[1]
      console.log(wordInfo)
    })
  }

  showAllWords() {
    const allWords = Object.entries(this.words)
    allWords.forEach(word => {
      const wordName = word[0]
      const wordDescription = word[1].description
      console.log(`${wordName} - ${wordDescription}`)
    })
  }

}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super();
  }

  add(word, description) {
    if(!(word in this.words)) {
      this.words[word] = {
        word: word,
        description: description,
        isDifficult: true,
      }
    }
  }
}


const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();

// дилетант - Тот, кто занимается наукой или искусством
// без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.

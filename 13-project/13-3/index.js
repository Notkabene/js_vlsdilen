// https://jsfiddle.net/Notkabene/pwmz9s07/4/
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




const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.remove('JavaScript');

dictionary.showAllWords();

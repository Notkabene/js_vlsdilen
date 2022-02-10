// https://jsfiddle.net/Notkabene/6shtmc92/2/
function showSuccessMessage (message) {
  console.log(message)
}

function showErrorMessage (message) {
  console.error(message)
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback ) {
  if(text.includes(errorSymbol)) {
    let index = -1;
    while ((index = text.indexOf(errorSymbol, index + 1)) != -1) {
      errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${index}.`)
    }
  }
  else {
    showSuccessMessage('В данном тексте нет запрещенных символов')
  }

}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
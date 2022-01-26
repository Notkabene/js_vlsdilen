const handleObject = (obj, key, action) => {

  if (action === 'get') {
    let entriesObj = Object.entries(obj)
    let valueObj = null
    entriesObj.map(item =>{
      if (item[0] === key) {
        valueObj = item[1]
      }
    })
    return valueObj

  } else if (action === 'add') {
    obj[key] = ''
    return obj

  } else if (action === 'delete') {
    delete obj[key]
    return obj

  } else {
    return obj
  }
}

const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
}

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result);
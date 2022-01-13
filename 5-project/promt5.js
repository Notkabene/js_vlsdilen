let userString = prompt('Введите текст для обрезки')
let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки')
let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки')
userString = userString.trim()

startSliceIndex = startSliceIndex.trim()
startSliceIndex = Number(startSliceIndex)
endSliceIndex = endSliceIndex.trim()
endSliceIndex = Number(endSliceIndex)


let string = userString.slice(startSliceIndex, endSliceIndex)

alert(`Результат: ${string}`)
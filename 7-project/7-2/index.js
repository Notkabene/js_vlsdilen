const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
console.log(temperatureInCelsius);

if (+temperatureInCelsius === 0) {
   alert('0 градусов по Цельсию - это температура замерзания воды')
} else {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

console.log(temperatureInCelsius);

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
console.log(temperatureInCelsius);
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
Фаренгейту.`);
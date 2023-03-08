const task1 = `assign: evaluation
var a = 5;  
var b, c;

b = (a * 5);  
b = (c = b/2); 
Исследуйте код, найдите выражения в нём. Расставьте скобки так, что бы код не изменил своего поведения
(работал так же как и сейчас). Объясните как и в каком порядке вычисляются выражения и подвыражения.`
// выражений два: b = (a * 5);  и b = (c = b/2); 
// скобки можно расставить следующим образом:
// ((b) = ((a) * (5)));  
// ((b) = ((c) = ((b)/(2)))); 
// кроме того, в этих выражениях скобки можно не применять. результат не изменится.
// В выражении b = (a * 5); значение переменной а умножается на пять (25), результат присваевается переменной b.
// В выражении b = (c = b/2); значение переменной b делится на два, затем результат присваивается в переменную c,
// после чего значение подвыражения (c = b/2) присваивается переменной b.

const task2 = `Number: age
С помощью prompt спросить у пользователя его возраст и подсчитать год рождения. 
Год рождения вывести с помощью alert.`
// console.log(task2)
// const age = parseInt(prompt(`what is your age?`))
// const date = new Date()
// alert(`your year of birth is ${date.getUTCFullYear() - age}`)

const task3 = `Number: temperature
С помощью prompt спросить у пользователя температуру в градусах Цельсия и перевести их в Фаренгейты и/или наоборот.`
// console.log(task3)
// let tempC = Number(prompt(`Enter temperature, ${String.fromCharCode(186)}C`))
// let tempF = ((tempC * 9/5) + 32).toFixed(1)
// alert(`${tempC}${String.fromCharCode(186)}C = ${tempF}${String.fromCharCode(186)}F`)
// tempF = Number(prompt(`Enter temperature, ${String.fromCharCode(186)}F`))
// tempC = ((tempF - 32) * 5/9).toFixed(1)
// alert(`${tempF}${String.fromCharCode(186)}F = ${tempC}${String.fromCharCode(186)}C`)

const task4 = `Number: divide
Сделайте калькулятор для расчета деления нацело двух чисел. Используйте Math.floor или альтернативы.`
// console.log(task4)
// const firstNumber = Number(prompt(`Enter first number`))
// const secondNumber = Number(prompt(`Enter second number`))
// const result  = secondNumber !== 0 ? Math.round(firstNumber/secondNumber): alert(`Can't divide by zero`)
// alert(`${firstNumber}/${secondNumber} = ${result}`)

const task5 = `Number: currency
Напишите код, который вычисляет обмен валют по курсу, заданному с помощью константы 
const rate = КУРС ВАЛЮТЫ Считайте значение в одной валюте с помощью prompt, после чего умножите/поделите
это число на rate. Выведите результат используя alert. Ограничьте количество знаков после запятой двумя 
(нас не волнуют дробные части центов/копеек)`
// console.log(task5)
// const rate = 37.4531
// const currencyUAH = Number(prompt(`Enter summ, UAH`))
// alert(`${currencyUAH} UAH = ${(currencyUAH/rate).toFixed(2)} $`)

const task6 = `Number: RGB
С помощью prompt организуйте ввод трех констант red, green, blue в десятичной системе. 
Создайте из них CSS-цвет в формате #RRGGBB используя шестнадцатиричную систему счисления. 
Значения меньше 16ти пока можно не учитывать.`
// console.log(task6)
// const red = parseInt(prompt(`Enter value of red color (0-255)`))
// const green = parseInt(prompt(`Enter value of green color (0-255)`))
// const blue = parseInt(prompt(`Enter value of blue color (0-255)`))
// const hexRed = red.toString(16)
// const hexGreen = green.toString(16)
// const hexBlue = blue.toString(16)
// const hexColor = `#${hexRed}${hexGreen}${hexBlue}`
// alert(`Entered color in HEX ${hexColor}`)

const task7 = `Number: flats
Сделайте калькулятор, который позволит вам исходя из информации о количества этажей в доме и количества 
квартир на этаже находить подъезд и этаж определенной квартиры по её номеру. Например для 9этажного дома 
по 4 квартиры на этаж 81 квартира находится на 3м этаже третьего подъезда.`
// console.log(task7)
// const floors = parseInt(prompt(`Enter number of floors`))
// const apartPerFloor = parseInt(prompt(`Enter number of apartments per floor`))
// const apartNumber = parseInt(prompt(`Enter apartment number`))
// const apartEntr = Math.ceil(apartNumber/(floors*apartPerFloor))
// const apartFloor = Math.ceil((apartNumber - (apartEntr-1)*floors*apartPerFloor)/apartPerFloor)
// alert(`apartment number ${apartNumber} located in ${apartEntr} entrance on the ${apartFloor} floor`)
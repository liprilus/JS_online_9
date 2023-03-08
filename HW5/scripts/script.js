const task1 = '1) Напишіть функцію avg, яка повертає середнє значення переданого масиву (якщо довжина масиву дорівнює нулю, то має повернутися 0).'
console.log(task1)


function randomizer(maxNum = 100) {        
        let randomNum = Math.floor(Math.random() * maxNum);
        return randomNum + 1;
    }
const arrTask1 = new Array()
for(let i = 0; i < 10; i++){
    arrTask1[i] = randomizer()
}
console.log(arrTask1) 
function avg(someArray) {
    if(!someArray.length) return 0   
    let sum = 0
    for(let item of someArray) sum += item
    return sum/someArray.length
}
let avgArr = avg(arrTask1)
console.log(avgArr)
const arr2Task1 = []
console.log(`Array with zero lenght [${arr2Task1}]`,`function return ${avg(arr2Task1)}`)

const task2 = '2) Напишіть функцію power для обчислення степені числа'
console.log(task2)

function power(a,b){
    let tmp = a
    if(!b) return 1
    for (let i = 1; i < Math.abs(b); i++){
        tmp *= a
    }
    if(b < 0) return 1/tmp
    return tmp
}
let numTask2 = randomizer(10)
let deg = randomizer(10)
resultTask2 = power(numTask2,deg)
console.log(`${numTask2} ^ ${deg} = ${resultTask2}`)
numTask2 = randomizer(10); deg = -1 * randomizer(10); resultTask2 = power(numTask2,deg)
console.log(`Negative degree\n${numTask2} ^ ${deg} = ${resultTask2}`)
numTask2 = randomizer(10)
console.log(`Zero degree\n${numTask2} ^ 0 = ${power(numTask2,0)}`)

const task3 = '3) Напишіть функцію squareDigits, яка приймає число та зводить у квадрат кожен символ.'
console.log(task3)

let numberTask4 = randomizer (10000)
console.log(numberTask4)
function squareDigits(num){
    let arr = new Array()    
    if(num){
        while(num > 0){      
            arr.unshift((num %10) ** 2)
            num = Math.floor(num/10)
         }    
         let str = ''
         for(let item of arr) str += item.toString(10)
         return parseInt(str);
    }
    return 0;
  }
console.log(squareDigits(numberTask4))

const task4 = '4) Напишіть функцію isPalindrome, яка перевіряє, чи переданий рядок є паліндромом.'
console.log(task4)

function isPalindrome (someStr){
    let tempStr = someStr.toLowerCase()
    tempStr = tempStr.replace(/[\s.,!:;'"`\\/]/g,'')
    return tempStr === tempStr.split('').reverse().join('')

}
const arrTask4 = [`Я и ты будем вечны, наша чаша нынче в меду бытия`,
`Я не стар, брат Сеня!`,
`яка перевіряє, чи переданий рядок є паліндромом.`,
`Sir, I demand, I am a maid named Iris.`,
`JS Online 9`]
for(let str of arrTask4) console.log(str, isPalindrome(str))

const task5 = `5) Написати функцію stringTransformer, яка буде трансформувати рядок за такими правилами:
 1) Змінити регістр кожного знака, тобто. нижній регістр у верхній регістр, верхній регістр у нижній регістр. (наприклад 'FizzBuzz'-> 'fIZZbUZZ');
 2) Змінити порядок слів на зворотний (наприклад, 'pen pineapple apple PEN' --> 'pen APPLE PINEAPPLE PEN').`
 console.log(task5)

 function stringTransformer (someStr){
    let tmpStr = ``
    for(let sign of someStr){
        if(sign === sign.toLowerCase()) tmpStr += sign.toUpperCase()
        else tmpStr += sign.toLowerCase()
    }
    return tmpStr.split(' ').reverse().join(' ')
  }
 const strTask5 = `А сегодня В ЗАВТРАШНИЙ ДенЬ Не ВСе МОГУт смОтРеТь. ВернЕЕ, СМОтреть могУТ Не тОлЬкО ЛИШЬ ВСе, МАло КТо МОЖЕТ это ДЕлАТь.`
 console.log(strTask5)
 const trStrTask5 = stringTransformer(strTask5)
 console.log(trStrTask5)

const task6 = `6) Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами
Технічні вимоги:

Взяти за допомогою модального вікна браузера два числа. ( функцією )
Взяти за допомогою модального вікна браузера математичну операцію, яку потрібно здійснити. Сюди можна ввести +, -, *, /. ( функцією )
Створити функцію, в якій провести запит чисел, мат. операції та виконати обчислення )
Вивести у консоль результат виконання функції.

Необов'язкове завдання додаткової складності:

Після введення даних додати перевірку їхньої коректності.
Якщо користувач не ввів числа, або при введенні вказав не числа - запитати обидва числа заново
Якщо користувач вві неправильний символ - запитати ще раз`
console.log(task6)

function getNumber (str){
    let tmpData = prompt(`Enter ${str} number`)
    while(isNaN(tmpData)||typeof(tmpData) === "object") 
    tmpData = prompt(`!!!Achtung!!!\n Entered data is not a number!\n Enter ${str} number`)
    return Number(tmpData)
}
function getOperator (){
    let tmpData = prompt(`Enter arithmetic operator ('+', '-', '*', '/')`)
    while(![`+`,`-`,`*`,`/`].includes(tmpData))
    tmpData = prompt(`!!!Achtung!!!\n Entered data is not correct!\n Enter arithmetic operator ('+' or '-' or '*' or '/')`)
    return tmpData
}

function calculator() {
    const firstNumber = getNumber(`first`)
    const secondNumber = getNumber(`second`)
    const operator = getOperator()
    let result
    switch (operator){
        case `+`: result = firstNumber + secondNumber
        break
        case  `-`: result = firstNumber - secondNumber
        break
        case `*`: result = firstNumber * secondNumber
        break
        case `/`: {
            if (secondNumber === 0){
                console.log (`can't divide by zero`)
                return
            }             
            else result = firstNumber/secondNumber
            break
        } 
    }
    console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
}
calculator()




// * https://www.codewars.com/kata/52fba66badcd10859f00097e

// * https://www.codewars.com/kata/54ff3102c1bad923760001f3
 